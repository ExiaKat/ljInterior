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
  leftIconStyle = {};
  rightIconStyle = {};
  toggleLoader = {display: 'none'};
  imageNumber = "";


  constructor() {}

  ngOnInit() {
    this.imagePath = this.artWork.photosPath[this.index];
    this.photoNo = this.artWork.photosPath.length;
    this.coverPhotoPath = this.artWork.coverPhotoPath;
    this.imageNumber = this.index+1 + ' / ' + this.photoNo;
  }

  onPrevious(){
    if(this.index > 0){
      this.index--;
      this.imagePath = this.artWork.photosPath[this.index];      
    }
    if(this.index == 0){
      this.leftIconStyle = {display: 'none'};
    }
  } 

  onNext(){
    if(this.index < this.photoNo-1){
      this.index++;
      this.toggleLoader = {display: 'block'};
      setTimeout(() => {
        this.imagePath = this.artWork.photosPath[this.index];
      }, 2000);
    }
    if(this.index == this.photoNo-1){
      this.rightIconStyle = {display: 'none'};
    }
    // else{
    //   this.index = 0;
    //   this.imagePath = this.artWork.photosPath[this.index];
    // }
  }
  onShowIcon(side: string){
    if(side === 'left' && !this.isEnd(side)){
      this.leftIconStyle = {display: 'block'};
    }
    if(side === 'right' && !this.isEnd(side)){
      this.rightIconStyle = {display: 'block'};
    }
  }
  onHideIcon(){
    this.leftIconStyle = {display: 'none'};
    this.rightIconStyle = {display: 'none'};
  }
  private isEnd(side: string): boolean{
    if(this.index == 0 && side === 'left'){
      return true;
    }
    if(this.index == this.photoNo-1 && side === 'right'){
      return true;
    }
    return false;
  }
  onLoad(){
    this.toggleLoader = {display: 'none'};
    this.imageNumber = this.index+1 + ' / ' + this.photoNo;
  }
}
