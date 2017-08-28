import { ArtWork } from './../../models/art-work.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-col-item',
  templateUrl: './col-item.component.html',
  styleUrls: ['./col-item.component.css']
})
export class ColItemComponent implements OnInit {
  @Input() artWork: ArtWork;
  coverPhotoPath: string;
  imagePath = "";
  private index = 0
  private photoNo = 0;

  constructor() {}

  ngOnInit() {
    this.imagePath = this.artWork.photosPath[this.index];
    this.photoNo = this.artWork.photosPath.length;
    this.coverPhotoPath = this.artWork.coverPhotoPath;
  }

  onPrevious(){
    if(this.index > 0){
      this.index--;
      this.imagePath = this.artWork.photosPath[this.index];
    }
    else{
      this.index = this.photoNo-1
      this.imagePath = this.artWork.photosPath[this.index];
    }
  } 

  onNext(){
    if(this.index < this.photoNo-1){
      this.index++;
      this.imagePath = this.artWork.photosPath[this.index];
    }
    else{
      this.index = 0;
      this.imagePath = this.artWork.photosPath[this.index];
    }
  }

  onChangeCoverImage(action: string){
    // if(action === 'enter')
    //   this.coverPhotoPath = this.artWork.photosPath[1];
    // else
    //   this.coverPhotoPath = this.artWork.coverPhotoPath;
  }
}
