import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isRetail = true;
  isThreeD = false;
  isPainting = false;

  onMenuClicked(cat: string){
    switch(cat){
      case "retail":
        this.isRetail = true;
        this.isThreeD = false;
        this.isPainting = false;
        break;
      case "3d":
        this.isRetail = false;
        this.isThreeD = true;
        this.isPainting = false;
        break;
      case "painting":
        this.isRetail = false;
        this.isThreeD = false;
        this.isPainting = true;
        break;
      default:
        this.isRetail = true;
        this.isThreeD = false;
        this.isPainting = false;
        break;
    }
  }
}
