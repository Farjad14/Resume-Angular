import { Component, OnInit, Input } from '@angular/core';
import { skills } from '../../model/skills'
import { JobserviceService } from '../../service/jobservice.service';
import { workplace, Highlights } from '../../model/skill';
import { highlights } from '../../model/job';

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


  constructor() { }


  ngOnInit() {
  }
  public workplace = workplace;
  public qualifications = Highlights;
}
