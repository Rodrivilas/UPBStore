import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public logged = false
    @Output() public sidenavToggle= new EventEmitter();
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
      public onToggleSidenav = () => {
        this.sidenavToggle.emit();
      }
      
      

}