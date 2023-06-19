import { Component, OnInit } from '@angular/core';
import { init, refresh } from 'aos';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UPBStore';
  codigo= 'UPBStore';
  contrasena= 'UPBStore';


  ngOnInit() {
    
    AOS.init();
    AOS.refresh();
    window.addEventListener('scroll', AOS.refresh);
  }
}
