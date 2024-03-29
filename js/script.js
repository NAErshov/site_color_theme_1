// Находим свою обертку .theme / затем вешаем слушатель change (изменения) / и здесть в качестве параметра мы получаем
// некое событие / внутри этого события лежит ключ, по которуму мы определяем нажимаем ли мы 
// на input или на какой-то другой элемент 
document.querySelector('.theme').addEventListener('change', (event) => {
    // внутри делаем проверку, что имя тега на который я нажимаю INPUT
    if (event.target.nodeName === 'INPUT') {
        // если это так то выведем в консоль слово для проверки
        console.log('Hello!!!');

        // Находим наш тег html 
        // Сначала снимаем все классы которые у него есть
        // А затем добавить тот который мне нужен
        document.documentElement.classList.remove('dark', 'light'); // в скобках указываем класс который хотим удалить
        // И вместо этого я хочу добавить класс в зависимости от значения INPUT, на который я нажал
        document.documentElement.classList.add(event.target.value);
    }
});