var Count_Vowels= (S) => 
{
    const count = S.match(/[aeiou]/gi).length;

    return count;  
};