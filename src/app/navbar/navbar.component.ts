import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  @Output() menuClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onToggleCategory(cat: string){
      this.menuClick.emit(cat);
  }

}
