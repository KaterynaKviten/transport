import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/myAngularProject';
const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

let dbInstance = null;

export async function getDb() {
  if (!dbInstance) {
    await client.connect();
    dbInstance = client.db(); // повертає об'єкт бази даних
    console.log('Connected to MongoDB');
  }
  return dbInstance;
}

// run().catch(console.error);
// export default client;
