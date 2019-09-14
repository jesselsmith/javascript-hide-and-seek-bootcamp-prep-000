function getFirstSelector(selector){
  
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const ranks = document.querySelectorAll('.ranked-list li');
  
  for (let i = 0; i < ranks.length; i++) {
    
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString();
  
  }
}

function deepestChild(){
  function isDeepest(testCase){
   return null === document.querySelector(testCase + ' div');
  }
  
  let current = document.querySelector('#grand-node');
  let next - [];
  
  while(!isDeepest(current)){
    if(current.length > 1){
      for(let i = 0; i < current.length; i++){
        next.push(current[i]);
      }
    }
   
  }
  return current;
}