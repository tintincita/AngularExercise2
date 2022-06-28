import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {

  places : string[] = ["Europe/Paris", "Europe/Amsterdam", "Europe/Lisbon"]
  constructor() { }

  ngOnInit(): void {
  }

}
