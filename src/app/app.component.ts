import { Component, OnInit } from '@angular/core';
import { isLogged } from './services/utils.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'front-end';
}
