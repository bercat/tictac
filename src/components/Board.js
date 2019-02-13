import React, { Component } from 'react';
import Row from './Row';

class Board extends Component {


  getBestMove(board) {
    let result;

    const highScores = board.getEmptyCells().map(([ x, y ]) => {
      return {cell: [x, y], score: this.scores[x][y]};
    }).sort((a, b) => {
      return a.score < b.score;
    }).filter((cell, i, arr) => {
      return cell.score === arr[0].score;
    });

    if (highScores.length === 1) {
      result = highScores[0].cell;
    } else {
      result = highScores[Math.floor(Math.random() * highScores.length)].cell;
    }

    return result;
  }

  


  render() {
    const { squares, highLights, onClick } = this.props;
    
    return (
      <div>
        {squares.map((row, i) => (
          <Row 
            key={i}
            highLights={highLights}
            row={row}
            rowIdx={i}
            onClick={onClick} />
        ))}
      </div>
    );
  }
}

export default Board;
