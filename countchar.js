const countCharacters = (S) => 
{
    let A=0;
    let D=0;
    for(let char of S){
      if(char==="A"){
        A++;
      }else if(char==="D"){
        D++;
      }
    }
    let B =[A,D];
    return B;
};