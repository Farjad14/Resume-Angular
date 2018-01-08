import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Job } from '../model/job';
//import { skill } from '../model/skill';
// import { skills } from '../model/skills';
// import { JobserviceService } from '../service/jobservice.service';
import { fadeInAnimation, slideInOutAnimation } from '../_animations/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],
  
     // attach the slide in/out animation to the host (root) element of this component
     host: { '[@slideInOutAnimation]': '' }
})
export class ProfileComponent implements OnInit {


  // Data binding for the template
  public job: Job;
  
  // Component variables
  public jobId: number; // Current agent id in context
  public jobsLength; number; // The array length of the mock agents

  constructor() { 

    // this.jobId = 0;
    // this.jobService.getAgentById(this.jobId).then(job => this.job = skill);
    // this.jobsLength = this.jobService.getMaxAgentID();
  }

  ngOnInit() {
    // this.jobId = (this.jobId + 1) % this.jobsLength;
    // this.jobService.getAgentById(this.jobId).then(agent => this.job = skill);
    
  }

}
