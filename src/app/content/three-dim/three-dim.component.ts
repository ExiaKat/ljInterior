import { SplitArrayService } from './../../services/splitArray.service';
import { LJData } from './../../services/lj_data';
import { ArtWork } from './../../models/art-work.model';
import { Category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-dim',
  templateUrl: './three-dim.component.html',
  styleUrls: ['./three-dim.component.css']
})
export class ThreeDimComponent implements OnInit {
  category: Category;
  artWorksCol: Array<ArtWork[]> = [];

  constructor(private ljData: LJData, private splitArrayService: SplitArrayService) { }

  ngOnInit() {
    this.category = this.ljData.categories.find((categoryEle: Category) => {
      return categoryEle.category == "3D Perspectives";
    });
    this.artWorksCol = this.splitArrayService.splitArray(4, this.category.artWorks);
  }
}
