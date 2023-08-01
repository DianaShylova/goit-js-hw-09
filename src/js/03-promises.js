const form = document.querySelector(".form")

const delayInp = document.querySelector("[name='delay']");
const stepInp = document.querySelector("[name='step']");
const amountInp = document.querySelector("[name='amount']");
const createBtn = document.querySelector("button");


createBtn.addEventListener("submit", onclickCreateBtn);

function onclickCreateBtn(e) {
  e.preventDefault();
  e.stopPropagation();
  const delay = delayInp.value;
  const step = stepInp.value;
  const amount = amountInp.value;
  

  for (let i = 0; i < amount.value; i += 1) {
    let countDelay = Number(delay) + Number(step) * i;
    createPromise(i + 1, countDelay)
      .then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  
    if (shouldResolve) {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    }
  });  
}
