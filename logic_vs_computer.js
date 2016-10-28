var multi=new Array(3);
               multi[0]=['-','-','-'];
               multi[1]=['-','-','-'];
               multi[2]=['-','-','-'];

var player ='x';
var opponent='0';

function refresh(){
  location.reload();
}

function init(){
  localStorage.setItem("turn","0");
  print("1");
}

function print(a){
  if(a=="1")
    document.getElementById("p_turn").innerHTML="Your Turn";
  else
    document.getElementById("p_turn").innerHTML="Computer Turn";

}

function change(clicked_id,x,y){
  var count=localStorage.getItem("turn");
  var ct=parseInt(count)+1;
  var b=document.getElementById(clicked_id).innerHTML;
     if(ct%2!=0&&b=='-')
     print("0");
     else if(b=='-')
     print("1");
   if(b==='-'&&ct%2!=0){
     document.getElementById(clicked_id).value='x';
     document.getElementById(clicked_id).innerHTML='x';
     localStorage.setItem("turn",""+ct);
     multi[x][y]='x';
     var val=evaluate();
     if(val==0)
      setTimeout(mv,1400);
     else if(val==10){
      alert("You Won");
      refresh();
     }
     else if(!isMoveLeft()){
       alert("Game Draw");
       refresh();
     }
   }
 }

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
        else if (multi[0][0]==opponent)
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
           best=Math.max(best,minimax(depth+1,!isMax));
           multi[i][j]='-';
         }
       }
     }
     return best;
   }
   else {
     var best=1000;
     for(var i=0;i<3;i++){
       for(var j=0;j<3;j++){
         if(multi[i][j]=='-'){
           multi[i][j]=opponent;
           best=Math.min(best,minimax(depth+1,!isMax));
           multi[i][j]='-';
         }
       }
     }
     return best;
   }
}


function findPosition(i,j){
   if(i==0&&j==0){
   var count=localStorage.getItem("turn");
   var ct=parseInt(count)+1;
      if(ct%2!=0)
      print("0");
      else
      print("1");
   document.getElementById("r1c1").value='0';
   document.getElementById("r1c1").innerHTML='0';
   localStorage.setItem("turn",""+ct);
   multi[i][j]='0';
  }
else if(i==0&&j==1){
  var count=localStorage.getItem("turn");
  var ct=parseInt(count)+1;
     if(ct%2!=0)
     print("0");
     else
     print("1");
  document.getElementById("r1c2").value='0';
  document.getElementById("r1c2").innerHTML='0';
  localStorage.setItem("turn",""+ct);
  multi[i][j]='0';
 }
 else if(i==0&&j==2){
 var count=localStorage.getItem("turn");
 var ct=parseInt(count)+1;
    if(ct%2!=0)
    print("0");
    else
    print("1");
 document.getElementById("r1c3").value='0';
 document.getElementById("r1c3").innerHTML='0';
 localStorage.setItem("turn",""+ct);
 multi[i][j]='0';
}
else if(i==1&&j==0){
var count=localStorage.getItem("turn");
var ct=parseInt(count)+1;
   if(ct%2!=0)
   print("0");
   else
   print("1");
document.getElementById("r2c1").value='0';
document.getElementById("r2c1").innerHTML='0';
localStorage.setItem("turn",""+ct);
multi[i][j]='0';
}
else if(i==1&&j==1){
var count=localStorage.getItem("turn");
var ct=parseInt(count)+1;
   if(ct%2!=0)
   print("0");
   else
   print("1");
document.getElementById("r2c2").value='0';
document.getElementById("r2c2").innerHTML='0';
localStorage.setItem("turn",""+ct);
multi[i][j]='0';
}
else if(i==1&&j==2){
var count=localStorage.getItem("turn");
var ct=parseInt(count)+1;
   if(ct%2!=0)
   print("0");
   else
   print("1");
document.getElementById("r2c3").value='0';
document.getElementById("r2c3").innerHTML='0';
localStorage.setItem("turn",""+ct);
multi[i][j]='0';
}
else if(i==2&&j==0){
var count=localStorage.getItem("turn");
var ct=parseInt(count)+1;
   if(ct%2!=0)
   print("0");
   else
   print("1");
document.getElementById("r3c1").value='0';
document.getElementById("r3c1").innerHTML='0';
localStorage.setItem("turn",""+ct);
multi[i][j]='0';
}
else if(i==2&&j==1){
var count=localStorage.getItem("turn");
var ct=parseInt(count)+1;
   if(ct%2!=0)
   print("0");
   else
   print("1");
document.getElementById("r3c2").value='0';
document.getElementById("r3c2").innerHTML='0';
localStorage.setItem("turn",""+ct);
multi[i][j]='0';
}
else if(i==2&&j==2){
var count=localStorage.getItem("turn");
var ct=parseInt(count)+1;
   if(ct%2!=0)
   print("0");
   else
   print("1");
document.getElementById("r3c3").value='0';
document.getElementById("r3c3").innerHTML='0';
localStorage.setItem("turn",""+ct);
multi[i][j]='0';
}
var val=evaluate();
if(val==-10){
 alert("Computer Won");
 refresh();
}
 else if(!isMoveLeft()){
  alert("Game Draw");
  refresh();
 }

}


var mv=function findBestMove(){
  var bestVal=1000;
  var row=20;
  var col=20;
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      if(multi[i][j]=='-'){
        multi[i][j]=opponent;
        var val=minimax(0,true);
        multi[i][j]='-';
        if(val<bestVal){
          row=i;
          col=j;
          bestVal=val;

        }
      }
    }
  }
  console.log(row,col);
  findPosition(row,col);
}
