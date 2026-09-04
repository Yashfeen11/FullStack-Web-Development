let count = 0;
function cardCounter(card){
        if( card>=2 && card<=6){
          count+=1;
        }
        else if (card >=7 && card<=9){
          count+=0;
        }
        else if(card==10 || card =="J" || card=="Q" || card=="K" || card=="A"){
          count-=1;
        }
        else{
            return "Invalid Count"
        }
        if(count>0){
          return(count+" Bet");
        }
        else if(count<=0){
          return(count+" Hold");
        }



}

let card= 10;
if(card<2 && card<10){
  console.log(cardCounter(card));
}
else{
  console.log(cardCounter(String(card)));
}