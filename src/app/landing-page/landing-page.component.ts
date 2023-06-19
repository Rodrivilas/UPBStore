
import { Component,OnInit  } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit{
  public logged = false
  
  ngOnInit(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        this.logged=true
    } else {
        this.logged=false
    }
    });
  }

}
