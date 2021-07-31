const categoryEl = document.querySelector('#categories');
const itemEl = categoryEl.querySelectorAll('.item');
const numberCategory = itemEl.length;
console.log(`Всего на странице ${numberCategory} категории`);

const getNameCategory = categories => { 
    return categories.forEach(element => {
        const nameCategory = element.firstElementChild.textContent;
        const numberInCategoryEl = element.querySelectorAll('li').length;
        console.log(`Категория: ${nameCategory}. Количество элементов: ${numberInCategoryEl} `);
});
};

getNameCategory(itemEl);