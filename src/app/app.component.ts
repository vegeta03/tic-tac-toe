import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreakpointObserver } from '@tic-tac-toe/common';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent extends BreakpointObserver {
  title = 'tic-tac-toe';
}
