const evenNumber = new Promise ((resolve, reject) => {
    const number = Math.round(Math.random()*100);
    setTimeout(() => number % 2 ? reject(number) : resolve(number), 3000);
});

evenNumber
    .then ((number) => console.log(`Завершено успешно. Сгенерированное число — ${number}`))
    .catch((number) => console.log(`Завершено с ошибкой. Сгенерированное число — ${number}`));
