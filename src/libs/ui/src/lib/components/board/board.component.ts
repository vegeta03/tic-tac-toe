import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { BoardService } from '../../services';

@Component({
  selector: 'lib-board',
  standalone: true,
  imports: [CommonModule, MatGridListModule, JsonPipe],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  rows = 3;
  columns = 3;

  boardService = inject(BoardService);

  ngOnInit(): void {
    this.boardService.createBoard(this.rows, this.columns)
  }

}
