import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-work-line',
  imports: [],
  templateUrl: './work-line.html',
  styleUrl: './work-line.css',
})
export class WorkLine {
  constructor(private location: Location) {
    this.location = location;
  }

  public goBack(): void {
    this.location.back();
  }
}
