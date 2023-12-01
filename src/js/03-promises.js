import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', submitCreatePromises);

function submitCreatePromises(evt) {
  evt.preventDefault();

  let firstDelay = Number(evt.target[0].value);
  const delayStep = Number(evt.target[1].value);
  const amount = Number(evt.target[2].value);

  for (let position = 1; position <= amount; position += 1) {
    onCreatePromises(position, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += delayStep;
  }
}

function onCreatePromises(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
