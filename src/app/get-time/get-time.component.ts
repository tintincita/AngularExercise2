import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-time',
  templateUrl: './get-time.component.html',
  styleUrls: ['./get-time.component.scss'],
})
export class GetTimeComponent implements OnInit {

  @Input()
  timezone! : string;


  constructor() {}

  ngOnInit(): void {}

  public setTime(timezone: string): string {
    setTimeout(function () {});
    const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
    const time = date.split(' ')[1];
    return time;
  }
}
