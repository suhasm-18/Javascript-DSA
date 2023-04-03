function anagram(str1 ,str2){
  if(str1.lenght!==str2.lenght){
    return false;
  }
  let count={};
  for(let letter of str1){
    count[letter]=(count[letter] || 0) + 1;
    console.log(count[letter]);
  } 

  for(let items of str2){
    if(!count[items]){
      return false;
    }
    count[items]-=1.
  }
  return true;
}
 const check=anagram('hello' , 'llheo');
 console.log(check);

// time complexity is linear o(n)
