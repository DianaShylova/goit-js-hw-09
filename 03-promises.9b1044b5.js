!function(){var e=document.querySelector(".form");document.querySelector("[name='delay']"),document.querySelector("[name='step']"),document.querySelector("[name='amount']"),document.querySelector("button");function t(e,t){var n=Math.random()>.3;return new Promise((function(o,a){setTimeout((function(){n?o({position:e,delay:t}):a({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.target.elements.delay.value),o=Number(e.target.elements.step.value),a=e.target.elements.amount.value,c=1;c<=a;c+=1)t(c,n).then((function(e){var t=e.position,n=e.delay;console.log("Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("Rejected promise ".concat(t," in ").concat(n,"ms"))})),n+=o})),console.log(123)}();
//# sourceMappingURL=03-promises.9b1044b5.js.map