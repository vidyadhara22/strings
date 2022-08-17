var Count_Vowels= (S) => 
{
  let vowel=0;
  vowel=S.match(/[aeiou]/gi).length;
  return vowel;
};
var Count_Consonants= (S) => 
{
  let consonants=0;
  consonants=S.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  return consonants;
};