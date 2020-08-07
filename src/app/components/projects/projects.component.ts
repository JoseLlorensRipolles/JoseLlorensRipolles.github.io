import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public images = [1, 2].map((n) => `assets/img/projects/portfolio${n}.png`);
  private showNavigationArrows = false;
  private showNavigationIndicators = false;

  constructor() { }

  ngOnInit(): void {
  }

}
