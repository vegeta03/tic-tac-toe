import { Injectable } from '@angular/core';

import { gameBoard } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private _board: gameBoard = [];

  get board() {
    return this._board;
  }

  createBoard(rows: number, columns: number): void {
    const board: gameBoard = [];
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i][j] = [[i, j], ''];
      }
    }
    this._board = board;
  }
}
