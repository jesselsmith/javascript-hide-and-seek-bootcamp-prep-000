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
   return null === testCase.querySelector('div');
  }
  
  let current = document.getElementById('grand-node');
  
  while(!isDeepest(current)){
   current = current.querySelector('div');
   
  }
  return current;
}