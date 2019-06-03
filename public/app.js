var app = new Vue({
  el: '#app',
  /* Создаём функцию, которая возвратит в data объект */
  data: function () {
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    /* Создаём двумерный массив, который будет являться доской */
    let board = columns.map(function (xValue, xIndex) {
      return rows.map(function (yValue, yIndex) {
        return {
          /* Для каждой клетки задаём цвет, позицию и название */
          isBlack: (yValue+xIndex)%2 == true,
          position: { x: xIndex, y: yIndex },
          label:xValue+yValue,
          
        }
      })
    })

    return {
      board: board,
      isWhite: true,
      /* Выставляем дефолтное значение коня */
      knight:{x: 3, y: 3},
    }
  },
  methods: {
    /* Метод setMove висит на событии "клик", при нажатии на любую клетку задаём коню позицию этой клетки */
    setMove:function(tilePosition){
      this.knight=tilePosition;


    },
    /* Возможные ходы */
    knightMoves: function({x:possibleX, y:possibleY}){
      const {x,y} = this.knight;
      const isPossibleX = possibleX-x;
      const isPossibleY = possibleY-y;
      return (  
/*         Мы должны вернуть true всем клеткам, которые подходят для хода коня. 
        Используем Math.abs, чтобы не писать отдельно минусовые значения. */
        Math.abs(isPossibleX) === 2 && Math.abs(isPossibleY) === 1   ||
        Math.abs(isPossibleX) === 1 && Math.abs(isPossibleY) === 2 
        );
        
    }
  },

})
