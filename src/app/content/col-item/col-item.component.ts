import { ArtWork } from './../../models/art-work.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-col-item',
  templateUrl: './col-item.component.html',
  styleUrls: ['./col-item.component.css']
})
export class ColItemComponent implements OnInit {
  @Input() artWork: ArtWork;

  constructor() { 
    this.artWork = new ArtWork("project title", "", []);
  }

  ngOnInit() {
  }

  onOpenGalary(){
    console.log(this.artWork.photosPath);
  }

}
