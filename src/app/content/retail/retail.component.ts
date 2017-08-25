import { SplitArrayService } from './../../services/splitArray.service';
import { LJData } from './../../services/lj_data';
import { ArtWork } from './../../models/art-work.model';
import { Category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {
  category: Category;
  artWorksCol: Array<ArtWork[]> = [];

  constructor(private ljData: LJData, private splitArrayService: SplitArrayService) { }

  ngOnInit() {
    this.category = this.ljData.categories.find((categoryEle: Category) => {
      return categoryEle.category == "Retail";
    });
    this.artWorksCol = this.splitArrayService.splitArray(4, this.category.artWorks);
  }

}
