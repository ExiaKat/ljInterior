import { SplitArrayService } from './../../services/splitArray.service';
import { LJData } from './../../services/lj_data';
import { ArtWork } from './../../models/art-work.model';
import { Category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.component.html',
  styleUrls: ['./rendering.component.css']
})
export class RenderingComponent implements OnInit {
  category: Category;
  artWorksCol: Array<ArtWork[]> = [];

  constructor(private ljData: LJData, private splitArrayService: SplitArrayService) { }

  ngOnInit() {
    this.category = this.ljData.categories.find((categoryEle: Category) => {
      return categoryEle.category == "Renderings";
    });
    this.artWorksCol = this.splitArrayService.splitArrayManual(
      ["1,5,9,13","2,6,10,14","3,7,9,11","4,8,12"], this.category.artWorks);
  }
}
