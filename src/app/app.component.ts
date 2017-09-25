import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    firebase.initializeApp ({
      apiKey: 'AIzaSyB6tZr0ZRI8IYFsHYHP1FsoduJrFuga24Q',
      authDominian: 'comprasapp-f3206.firebaseapp.com'
    });
  }

}
