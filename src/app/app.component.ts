import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreakpointObserverUtil } from '@tic-tac-toe/common';

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BreakpointObserverUtil implements OnInit {
  title = 'tic-tac-toe';

  constructor() {
    super();
  }

  ngOnInit(): void {
      console.log(this.currentDisplayName$)
  }
}
