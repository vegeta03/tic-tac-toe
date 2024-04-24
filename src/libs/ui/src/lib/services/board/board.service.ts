import { Injectable } from '@angular/core';

import { cellID, gameBoard, position } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  // Columns as chars for a board game like Taikyoku Shogi, which uses a 36x36 grid.
  columns = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'AA',
    'AB',
    'AC',
    'AD',
    'AE',
    'AF',
    'AG',
    'AH',
    'AI',
    'AJ',
  ];
  totalRows = 36;

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

  convertCellIDToPosition(
    cellID: cellID,
    columnsAsChars?: string[],
    totalRows?: number
  ): position {
    const [rowIndex, colIndex] = cellID;
    const columns = columnsAsChars ? columnsAsChars : this.columns;
    totalRows = totalRows ? totalRows : this.totalRows;

    const columnChar = columns[colIndex];
    const rowNumber = totalRows - rowIndex;

    return [columnChar, rowNumber];
  }
}
