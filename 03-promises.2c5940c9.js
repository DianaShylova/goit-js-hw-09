const e=document.querySelector(".form");document.querySelector("[name='delay']"),document.querySelector("[name='step']"),document.querySelector("[name='amount']"),document.querySelector("button");function t(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();let o=Number(e.target.elements.delay.value);const n=Number(e.target.elements.step.value),l=e.target.elements.amount.value;for(let e=1;e<=l;e+=1)t(e,o).then((({position:e,delay:t})=>{console.log(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`Rejected promise ${e} in ${t}ms`)})),o+=n})),console.log(123);
//# sourceMappingURL=03-promises.2c5940c9.js.map