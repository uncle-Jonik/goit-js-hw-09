// import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', onCreatePromisesClick);

function onCreatePromisesClick(evt) {
  evt.preventDefault();

  let counter = 0;
  const firstDelay = Number(evt.target[0].value);
  const delayStep = Number(evt.target[1].value);
  const amount = Number(evt.target[2].value);
  // console.log(amount);

  const timerId = setInterval(() => {
    function createPromise(delay) {
      return new Promise((resolve, reject) => {
        counter += 1;
        const shouldResolve = Math.random() > 0.3;

        setTimeout(() => {
          if (shouldResolve) {
            resolve('✅ Fulfilled promise');
          }
          reject('❌ Rejected promise');
        }, delay);

        if (counter === amount) {
          clearInterval(timerId);
        }
      });
    }
    createPromise(firstDelay)
      .then(result => {
        console.log(result);
      })
      .catch(result => {
        console.log(result);
      });
  }, delayStep);
}
