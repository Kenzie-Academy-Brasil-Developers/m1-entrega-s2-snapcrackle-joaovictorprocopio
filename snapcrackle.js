function snapCrackle(n)
{
  let z = [];
  let a = 0;
  
  for(let i = 0; i < n; i++){
    a = a + 1;
    if(a % 2 !== 0 && a % 5 ===0){
      z.push("SnapCrackle")
    }
    else if(a % 5 === 0){
      z.push("Crackle")
    }
    else if(a % 2 !== 0){
      z.push("Snap")
    }
    else{
      z.push(a)
    }
  }
  return z;
}