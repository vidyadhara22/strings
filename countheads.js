var Count_Occ = (s) => 
{
 let Arr ='';
 let letters="";
 let count=1;
 for(let i=0;i<s.length;i++){
   for(let j=i+1;j<s.length;j++){
   if(s[i]===s[j]){
     count++;
   }
   }
  if(count>1){
    Arr=s[i];
    letters=letters+" "+s[i]+count;
    s=s.replace(Arr,' ');
    s=s.split(Arr).join('');
  }
  count=1;
 }
 
return letters.split(' ').sort().join('');
};