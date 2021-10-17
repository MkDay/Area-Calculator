//dom variables
let form = document.querySelector('form');
let selectedShape = document.querySelector('#shape-selection');
let warnings = document.querySelector('#warning-container');
let warnValue1 = document.querySelector('#warn-value-1');
let warnValue2 = document.querySelector('#warn-value-2');
let resultLabel = document.querySelector('#result-label');
let warnSelection = document.querySelector('#warn-selection');
let calculateBtn = document.querySelector('#calculate-btn');
let resetBtn = document.querySelector('#reset-btn');


/* ======== generate expected formula ======= */

selectedShape.addEventListener('change', generateFormula);
let selectCount = 0;

function generateFormula(e) {
 
 if(selectCount>0) {
  form.reset();
  location.reload();  
 }
 else {
let formula = document.querySelector('#formula');

//square & rectangle
 if(e.target.value==='square-or-rectangle') {
  
   let width = document.createElement('input');
   width.id = 'square-width';
   width.type = 'number';
   
   let symbol = document.createElement('label');
   symbol.appendChild(document.createTextNode(' * '));
   
   let height = document.createElement('input');
   height.id = 'square-height';
   height.type = 'number';
   
   formula.appendChild(width);
   formula.appendChild(symbol);
   formula.appendChild(height);
   
 }

//triangle 
 if(e.target.value==='triangle') {
       
   let symbol1 = document.createElement('label');
   symbol1.appendChild(document.createTextNode('1/2 * '));
   
   let base = document.createElement('input');
   base.id = 'triangle-base';
   base.type = 'number';
   
   let symbol2 = document.createElement('label');
   symbol2.appendChild(document.createTextNode(' * '));
   
   let height = document.createElement('input');
   height.id = 'triangle-height';
   height.type = 'number';
  
   formula.appendChild(symbol1);
   formula.appendChild(base);
   formula.appendChild(symbol2);
   formula.appendChild(height);
 }
 
//circle
 if(e.target.value==='circle') {

  let symbol = document.createElement('label');
  symbol.appendChild(document.createTextNode('3.14 * '));
  let radius1 = document.createElement('input');
  radius1.id = 'circle-radius';
  radius1.type = 'number';

  let radius2 = document.createElement('label');
  radius2.appendChild(document.createTextNode(' ^ 2 '));
  
  formula.appendChild(symbol);
  formula.appendChild(radius1);
  formula.appendChild(radius2);
 }
 
//add more later.. like trapisium?, cylinder, prism etc.
 
selectCount++;

let equalLabel = document.querySelector('#equal-sign');
let resultLabel = document.querySelector('#result-label');

equalLabel.style.visibility = 'visible';
resultLabel.style.visibility = 'visible';
 }
}


/* ======== taking input and calculating ======= */

calculateBtn.addEventListener('click', calculation);


function calculation(e) {

e.preventDefault();

let finalResult;

 if(selectedShape.value==='') {
 
  warnSelection.style.visibility = 'visible';
  
  setTimeout(() => (warnSelection.style.visibility = 'hidden'), 3000);
 } 
 
 else {
 
   if(selectedShape.value==='square-or-rectangle') {
     
    let squareWidth = document.querySelector('#square-width');
    let squareHeight = document.querySelector('#square-height');
     
      if(squareWidth != null && squareHeight != null) {
      
         if(squareWidth.value === '') {
                  
          warnValue1.style.visibility = 'visible';
          
         }
       
         if(squareHeight.value === '') {
          
          warnValue2.style.visibility = 'visible';
         }
         
         if(squareWidth.value != '' && squareHeight.value != '') {
          finalResult = squareWidth.value * squareHeight.value;
          
          resultLabel.innerText = finalResult;
          warnValue1.style.visibility = 'hidden';
          warnValue2.style.visibility = 'hidden';
         }
      }
   }
    
   if(selectedShape.value==='triangle') {
       
    let triangleBase = document.querySelector('#triangle-base');
    let triangleHeight = document.querySelector('#triangle-height');
    
      if(triangleBase != null && triangleHeight != null) {
      
        if(triangleBase.value ==='') {
         warnValue1.style.visibility = 'visible';
        }
        
        if(triangleHeight.value==='') {
         warnValue2.style.visibility = 'visible';
        }
        
        if(triangleBase.value != '' && triangleHeight.value != '') {
         finalResult = 0.5 * triangleBase.value * triangleHeight.value;
         resultLabel.innerText = finalResult;
         warnValue1.style.visibility = 'hidden';
         warnValue2.style.visibility = 'hidden';
        }
      }
    }
    
    if(selectedShape.value==='circle') {
       
    let circleRadius = document.querySelector('#circle-radius');
        
    if(circleRadius != null) {
    
     if(circleRadius.value === '') {
      warnValue1.innerText = 'Enter the Value';
      warnValue1.style.visibility = 'visible';
     }
     
     if(circleRadius.value != '') {
       finalResult = 3.14 * (Math.pow(circleRadius.value, 2));
       resultLabel.innerText = finalResult;
       warnValue1.style.visibility = 'hidden';
     }
    }
    }
 } 
}

/* ======== reload the page ======= */

resetBtn.addEventListener('click', resetPage);

function resetPage(e) {
 location.reload();
}
