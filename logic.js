var multi=new Array(3);
               multi[0]=['-','-','-'];
               multi[1]=['-','-','-'];
               multi[2]=['-','-','-'];

//function to refresh the page when game over  
   function refresh(){
     location.reload();
   }



//function to initialize local storage 
    		function init(){
 			localStorage.setItem("turn","0");
 			print("1");
 		}



//function to print the current player
 		function print(a){
 			if(a=="1")
 				document.getElementById("p_turn").innerHTML="Player 1 Turn";
 			else
 				document.getElementById("p_turn").innerHTML="Player 2 Turn";

 		}


//funtion for winner check
                function winner_check(x,y){
                 var flag=0;
                 var k=0;
                 var count=localStorage.getItem("turn");
                 var ct=parseInt(count);
                  if(ct%2==1){
                  multi[x][y]='x';
                  if((multi[(x+1)%3][y]=='x'&&multi[(x+2)%3][y]=='x')||(multi[x][(y+1)%3]=='x'&&multi[x][(y+2)%3]=='x')||(multi[(x+1)%3][(y+1)% 			3]=='x'&&multi[(x+2)%3][(y+2)%3]=='x'&&x==y)||(multi[(x+1)%3][(y+2)%3]=='x'&&multi[(x+2)%3][(y+1)%3]=='x'&&x==2-y)){
                    	alert('Player 1 won');
                    	refresh();
                    	flag=1;
                    }
                  }
                 else{
                      multi[x][y]='0';
                  if((multi[(x+1)%3][y]=='0'&&multi[(x+2)%3][y]=='0')||(multi[x][(y+1)%3]=='0'&&multi[x][(y+2)%3]=='0')||(multi[(x+1)%3][(y+1)%3]=='0'&&multi[(x+2)%3][(y+2)%3]=='0'&&x==y)||(multi[(x+1)%3][(y+2)%3]=='0'&&multi[(x+2)%3][(y+1)%3]=='0'&&x==(2-y))){
                    	alert('Player 2 won'+multi[1][1]);
                    	flag=1;
                    	refresh();
                    }

                   }
                   for(var i=0;i<3;i++){
                    for(var j=0;j<3;j++){
                      if(multi[i][j]=='-'){
                      k=2;
                      break;
                    }
                    }
                  }
                  if(k==0&&flag==0){
                  alert('Draw');
                  refresh();
                  }
                }


//function to change when clicked
 		function change(clicked_id,x,y){
 			var count=localStorage.getItem("turn");
      			var ct=parseInt(count)+1;
         		if(ct%2!=0)
         			print("0");
         		else
         			print("1");

 			var b=document.getElementById(clicked_id).innerHTML;

 			if(b=='-'&&ct%2!=0){
 				document.getElementById(clicked_id).value='x';

 			document.getElementById(clicked_id).innerHTML='x';
      			localStorage.setItem("turn",""+ct);
       			winner_check(x,y);
 		 	}else if(b=='-'){
 		 		document.getElementById(clicked_id).value='0';

 				document.getElementById(clicked_id).innerHTML='0';
     				localStorage.setItem("turn",""+ct);
         			winner_check(x,y);
 		 	}

 		}
