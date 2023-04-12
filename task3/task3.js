if (localStorage.getItem('name')) {
    alert(`Добрый день, ${localStorage.getItem('name')}! Давно не виделись.
    В последний раз вы были у нас ${localStorage.getItem('firstVisit')}`);
    let visitDate = new Date();
    const visit = visitDate.toLocaleString();
    localStorage.setItem('firstVisit', visit);
} else {
    const name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', '');
    let visitDate = new Date();
    const visit = visitDate.toLocaleString();
    localStorage.setItem('name', name);
    localStorage.setItem('firstVisit', visit);
}