const form = document.querySelector(".form")

const delayInp = document.querySelector("[name='delay']");
const stepInp = document.querySelector("[name='step']");
const amountInp = document.querySelector("[name='amount']");
const createBtn = document.querySelector("button");


form.addEventListener("submit", onclickCreateBtn);

function onclickCreateBtn(e) {
  e.preventDefault();
 
  let delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);
  const amount = e.target.elements.amount.value;
  

  for (let i = 1; i <= amount; i += 1) {
   // let countDelay = Number(delay) + Number(step) * i;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
}
  }
  

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     if (shouldResolve) {
      
        resolve({ position, delay });
      
    } else {
      
        reject({ position, delay });
     
    }  
     }, delay) 
    
  });  
}
console.log(123);