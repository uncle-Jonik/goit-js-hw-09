document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let t=0;const r=Number(e.target[0].value),o=Number(e.target[1].value),l=Number(e.target[2].value),a=setInterval((()=>{var e;(e=r,new Promise(((r,o)=>{t+=1;const n=Math.random()>.3;setTimeout((()=>{n&&r("✅ Fulfilled promise"),o("❌ Rejected promise")}),e),t===l&&clearInterval(a)}))).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}),o)}));
//# sourceMappingURL=03-promises.1db0e55b.js.map
