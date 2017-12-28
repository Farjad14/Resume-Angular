import { Component, OnInit, Input } from '@angular/core';
import { skills } from '../../model/skills'
import { JobserviceService } from '../../service/jobservice.service';
import { Skill, Job } from '../../model/job';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [JobserviceService]
})
export class BodyComponent implements OnInit {

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
      skills: [
        'okay', 'yo'
      ]
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  @Input() skills: Skill[];
  @Input() name: Job[];
  @Input() title: Job[];
  @Input() jobImageUrl: Job[];

  constructor() { }


  ngOnInit() {
  }
  public workplace = {
    "companies": [
      {
        "name": "CIBC", "role": "Full Stack Developer", "iconSrc":"../../../assets/images/CIBC_Logo_small.png",
        "skills": [
          { "item": "Working on an Agile Environment Project with a team from different expertise, using agile tools such as JIRA, Confluence, Slack and Jenkins"},
          { "item": "Developing front-end leveraging HTML5/CSS3, Material Design 2, Angular Flex, Angular 2.0, AJAX, AngularJS, Bootstrap, Knockout.js, reactJs, Emberjs and backed by Express Framework, Node.JS server and mongoDB, using restFul API services, and deploying it to cloud services using Microsoft Azure, using Visual Studio IDE."},
          { "item": "Using GIT, GitHub for subversion control and keeping track of our project"},
          { "item": "Implemented server side microservices, such as Gamification microservice, to keep track of users and user sessions."},
          { "item": "Gained experience by taking TDD approach, as well Unit Testing using Jasmine, Protractor and Karma frameworks."},
          { "item": "Effectively implementing some parts of the first Phase for the first release of a project, which will change the shape of client’s relation,"}
        ]
      },
      {
        "name": "Greyters Water", "role": "Application Developer Intern", "iconSrc":"../../../assets/images/greyter.jpg",
        "skills": [
          { "item": "892"},
          { "item": "893"},
          { "item": "894"},
          { "item": "895"},
  
        ]
      },
      {
        "name": "Pakland", "role": "Web Developer", "iconSrc":"../../../assets/images/pakland-logo.png",
        "skills": [
          { "item": "992"},
          { "item": "993"},
          { "item": "994"},
          { "item": "995"},
  
        ]
      },
    ]
  }

  public qualifications = {
    "skills": [
          { "item": "Introducing new frameworks such as Angular2 Material Design & Flex into the current Project at CIBC, backed by Node.js Server, SQL Database and MongoDB"},
          { "item": "Strong understanding of UX & Front-End designs as an App Dev Intern while working Greyters"},
          { "item": "Exhibits creative problem solving and knowledge of TDD while working within the team, experienced in agile environment"},
        ]
      }
}
