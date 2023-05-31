import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();
  const startDelay = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;
    const delay = startDelay + step * i;

    function createPromise() {
      return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
          if (shouldResolve) {
            resolve({ position, delay }); // Fulfill
          } else {
            reject({ position, delay }); // Reject
          }
        }, delay);
      });
    }

    createPromise()
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
