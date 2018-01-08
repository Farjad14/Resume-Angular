import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../_animations/index';

declare var $:any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],
  
     // attach the slide in/out animation to the host (root) element of this component
     host: { '[@slideInOutAnimation]': '' }
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) {}
  private active: false;
  private mobile: false;

  ngOnInit() {
  }
  btnClick = function () {
    this.active = true;
    $('mat-card-content').css('margin-bottom', '200px');
    setTimeout((router: Router) => {
      //this.router.navigate(['/profile']);
  }, 300000); 
  };
}


