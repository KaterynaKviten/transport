import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import crypto from 'crypto';
import { promisify } from 'util';
import { getDb } from './db.js';

// const userDb = db.collection('users');
const pbkdf2Async = promisify(crypto.pbkdf2);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '../dist/prj-angular/browser');
const app = express();
const salt = process.env.SALT || 'dev only';
let userDb;
getDb().then((db) => {
  userDb = db.collection('users');
});

passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    const user = await userDb.findOne({ username });
    if (!user) {
      return cb(null, false, { message: 'Incorrect username or password.' });
    }
    crypto.pbkdf2(password, salt, 310000, 32, 'sha256', (err, hashedPassword) => {
      if (err) return cb(err);
      let dbPassword;
      if (user.hashedPassword?.buffer) {
        dbPassword = user.hashedPassword.buffer;
      } else if (Buffer.isBuffer(user.hashedPassword)) {
        dbPassword = user.hashedPassword;
      } else if (user.hashedPassword?.data) {
        dbPassword = Buffer.from(user.hashedPassword.data);
      } else {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      if (!crypto.timingSafeEqual(dbPassword, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, user);
    });
  })
);
app.use(express.json());

app.post('/api/login/password', express.json(), (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info?.message || 'Login failed' });
    res.json({ message: 'Login successful', user: { username: user.username, email: user.email } });
  })(req, res, next);
});

app.get('/api/test', (req, res) => {
  res.json(['Test 1', 'Test 2', 'Test 3']);
});

app.post('/api/register', async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }
  const existing = await userDb.findOne({ username });
  if (existing) {
    return res.status(409).json({ message: 'User already exists' });
  }
  try {
    const hashedPassword = await pbkdf2Async(password, salt, 310000, 32, 'sha256');
    await userDb.insertOne({
      username,
      email,
      hashedPassword,
    });
    res.status(201).json({ message: 'User registered', user: { username, email } });
  } catch (err) {
    res.status(500).json({ message: 'Error hashing password or saving user' });
  }
});

app.use(express.static(distDir));

app.get(/.*/, (req, res) => {
  res.sendFile(join(distDir, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
