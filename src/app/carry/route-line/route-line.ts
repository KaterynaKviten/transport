import { Component, OnInit } from '@angular/core';
import { ICarry } from '../carry.model';

@Component({
  selector: 'app-route-line',
  templateUrl: './route-line.html',
  styleUrls: ['./route-line.css'],
})
export class RouteLine implements OnInit {
  public routes: ICarry[] = [];
  public ngOnInit(): void {
    this.routes.push({ title: 'Route 1', description: 'Description 1' });
  }
}
