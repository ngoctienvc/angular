import { Component, OnInit, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() changeMenu: EventEmitter<string> = new EventEmitter<string>();
  links = ['Home', 'News', 'Jobs', 'Register', 'Login'];
  activeLink = this.links[0];
  constructor() { }
  ngOnInit() {
  }
  change(link: string){
    this.activeLink = link;
    this.changeMenu.emit(link);
  }

}
