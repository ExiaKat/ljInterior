import { SplitArrayService } from './../../services/splitArray.service';
import { LJData } from './../../services/lj_data';
import { ArtWork } from './../../models/art-work.model';
import { Category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {
  category: Category;
  artWorksCol: Array<ArtWork[]> = [];

  constructor(private ljData: LJData, private splitArrayService: SplitArrayService) { }

  ngOnInit() {
    this.category = this.ljData.categories.find((categoryEle: Category) => {
      return categoryEle.category == "Paintings";
    });
    this.artWorksCol = this.splitArrayService.splitArrayManual(
      ["1,5,9","2,6,10","3,7,11","4,8,12"], this.category.artWorks);
  }
}
