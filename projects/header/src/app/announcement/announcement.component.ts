import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  announcement: any;
  constructor() {}

  ngOnInit(): void {
    this.announcement = [
      { message: 'sample message 1' },
      { message: 'sample message 2' },
    ];
  }
}
