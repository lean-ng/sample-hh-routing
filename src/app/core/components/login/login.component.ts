import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  logOn(): void {
    this.authSvc.logOn();
    if ( this.route.snapshot.params.path) {
      this.router.navigateByUrl(this.route.snapshot.params.path);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
