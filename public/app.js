var app = new Vue({
  el: '#app',
  data: function () {
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    let board = columns.map(function (xValue, xIndex) {
      return rows.map(function (yValue, yIndex) {
        return {
          isBlack: (yValue+xIndex)%2 == true,
          position: { x: xIndex, y: yIndex },
          label:xValue+yValue,
          
        }
      })
    })

    return {
      board: board,
      isWhite: true,
      isBlack: false,
      knight:{x: 3, y: 3},
    }
  },
  methods: {
    setMove:function(tilePosition){
      this.knight=tilePosition;


    },
    knightMoves: function({x:possibleX, y:possibleY}){
      if (!this.knight) return false;
      const {x,y} = this.knight;
      const isPossibleX = possibleX-x;
      const isPossibleY = possibleY-y;
      return (  
        Math.abs(isPossibleX) === 2 && Math.abs(isPossibleY) === 1   ||
        Math.abs(isPossibleX) === 1 && Math.abs(isPossibleY) === 2 
        );
        
        /* test */
    }
  },

})
