import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public images = [1, 2].map((n) => `assets/img/projects/portfolio${n}.png`);
  public snakeAIGifs = ["assets/img/projects/agent-trained.gif", "assets/img/projects/agent-untrained.gif"]
  private showNavigationArrows = false;
  private showNavigationIndicators = false;
  currentUrl

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url
  }

}
