// import Notiflix from 'notiflix';

setInterval(() => {
  function createPromise(delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve('✅ Fulfilled promise');
        }
        reject('❌ Rejected promise');
      }, delay);
    });
  }
  createPromise(2000) // Кількість ms до початку
    .then(result => {
      console.log(result);
    })
    .catch(result => {
      console.log(result);
    });
}, 1000); // кількість ms до наступного

// логіка працює, залишилося взяти данні з полів форми
