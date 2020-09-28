import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { AppSettingsService } from '../app/config/config-service';
import { strict } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Posts';
  arrPosts: string[];

  constructor(private appSettingsService: AppSettingsService) {}

  ngOnInit() {
    this.appSettingsService.getJSON().subscribe(
      (data) => {
        this.arrPosts = data as string[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  // tslint:disable-next-line: typedef
  getUser(userId) {
    const userList = [
      {id: 1, name: 'Ajay'},
      {id: 2, name: 'Bunty'},
      {id: 3, name: 'Chintan'},
      {id: 4, name: 'Darshan'},
      {id: 5, name: 'Rakesh'},
      {id: 6, name: 'Mayank'},
      {id: 7, name: 'Ramesh'},
      {id: 8, name: 'Suresh'},
      {id: 9, name: 'Jay'},
      {id: 10, name: 'Prem'}
    ];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].id === userId) {
          console.log(userList[i].name);
          return userList[i].name;
      }
  }
  }

}
