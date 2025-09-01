import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-drivers-line',
  imports: [],
  templateUrl: './drivers-line.html',
  styleUrl: './drivers-line.css',
})
export class DriversLine {
  constructor(private location: Location) {}

  public goBack(): void {
    this.location.back();
  }
}
