var multi=new Array(3);
               multi[0]=['-','-','-'];
               multi[1]=['-','-','-'];
               multi[2]=['-','-','-'];

var player ='x';
var opponent='y';
  function isMoveLeft(){
   for(var i=0;i<3;i++)
    for(var j=0;j<3;j++)
     if(multi[i][j]=='-')
      return true;
    return false;
    }
    function evaluate()
{
    // Checking for Rows for X or O victory.
    for (var row = 0; row<3; row++)
    {
        if (multi[row][0]==multi[row][1] &&
            multi[row][1]==multi[row][2])
        {
            if (multi[row][0]==player)
                return +10;
            else if (multi[row][0]==opponent)
                return -10;
        }
    }

    // Checking for Columns for X or O victory.
    for (var col = 0; col<3; col++)
    {
        if (multi[0][col]==multi[1][col] &&
            multi[1][col]==multi[2][col])
        {
            if (multi[0][col]==player)
                return +10;

            else if (multi[0][col]==opponent)
                return -10;
        }
    }

    // Checking for Diagonals for X or O victory.
    if (multi[0][0]==multi[1][1] && multi[1][1]==multi[2][2])
    {
        if (multi[0][0]==player)
            return +10;
        else if (b[0][0]==opponent)
            return -10;
    }

    if (multi[0][2]==multi[1][1] && multi[1][1]==multi[2][0])
    {
        if (multi[0][2]==player)
            return +10;
        else if (multi[0][2]==opponent)
            return -10;
    }

    // Else if none of them have won then return 0
    return 0;
}
function minimax(depth,isMax){
   var score=evaluate();
   if(score==10||score==-10)
   return score;
   if(isMoveLeft()==false)
   return 0;
   if(isMax){
     var best=-1000;
     for(var i=0;i<3;i++){
       for(var j=0;j<3;j++){
         if(multi[i][j]=='-'){
           multi[i][j]=player;
           best=max(best,minimax(depth+1,!ismax));
           multi[i][j]='-';
         }
       }
     }
     return best;
   }
   else {
     var best=-1000;
     for(var i=0;i<3;i++){
       for(var j=0;j<3;j++){
         if(multi[i][j]=='-'){
           multi[i][j]=opponent;
           best=max(best,minimax(depth+1,!ismax));
           multi[i][j]='-';
         }
       }
     }
     return best;
   }
}
function findBestMove(){
  var bestVal=-1000;
  var row=-1;
  var col=-1;
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      if(multi[i][j]=='-'){
        multi[i][j]=player;
        var val=minimax(0,false);
        multi[i][j]='-';
        if(val>bestVal){
          row=i;
          col=j;
          bestVal=val;
        }
      }
    }
  }
}
