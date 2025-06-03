import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faAngleLeft, faCloudArrowUp, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faCloudArrowUp = faCloudArrowUp;
  faHouse = faHouse;

  constructor() { }

  ngOnInit() {
  }

  @Output() sidebarToggled = new EventEmitter<boolean>();

  toggleSidebar(isMinimized: boolean) {
    this.sidebarToggled.emit(isMinimized);
  }

  onMinimizeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.toggleSidebar(input.checked);
  }

}
