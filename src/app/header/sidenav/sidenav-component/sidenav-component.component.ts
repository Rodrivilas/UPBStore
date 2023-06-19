import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-sidenav-component',
  templateUrl: './sidenav-component.component.html',
  styleUrls: ['./sidenav-component.component.css']
})
export class SidenavComponentComponent implements OnInit {
  @Output() public sidenavClose= new EventEmitter();
  public logged = false
  constructor(
    private userService: UserService,
    private router: Router,
    
  ) { }

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

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  

}
