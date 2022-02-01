// Ищем все блоки, имя которых оканчивается на -page
pages = document.querySelectorAll('[class$="-page"]');
// Скрываем все такие блоки
for(let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
}
// Проверяем, не пустое ли поле page в ссылке на страницу
if(getQueryVariable('page') != false) {
    // Проверяем, если ли класс с названием этой переменной + -page
    if(document.querySelector('.'+getQueryVariable('page')+'-page')!=null) {
        // Получаем класс с названием этой переменной + -page
        document
            .querySelector('.'+getQueryVariable('page')+'-page')
            // Обращаемся к аттрибуту style этого тега
            .style
            // Устанавливаем display в значение block
            .display='block';
    }   
}