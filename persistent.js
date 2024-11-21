const themeSelect = document.getElementById('themeSelect');
const listStyleSelect = document.getElementById('listStyleSelect');
const itemList = document.getElementById('itemList');

const themes = ['theme-light', 'theme-dark', 'theme-colorful'];
const listStyles = ['list-group', 'list-group-flush', 'list-inline'];

const defaultItems = ['Orange', 'Banana', 'Papaya', 'Watermelon', 'Kiwi'];

const loadPreferences = () => {
    const theme = localStorage.getItem('theme') || themes[0];
    const listStyle = localStorage.getItem('listStyle') || listStyles[0];

    document.body.className = theme;
    itemList.className = listStyle;

    themeSelect.value = theme;
    listStyleSelect.value = listStyle;
};

const savePreferences = () => {
    localStorage.setItem('theme', themeSelect.value);
    localStorage.setItem('listStyle', listStyleSelect.value);
    document.body.className = themeSelect.value;
    itemList.className = listStyleSelect.value;
};
const addItemsToList = () => {
    defaultItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        itemList.appendChild(li);
    });
};


themeSelect.addEventListener('change', savePreferences);
listStyleSelect.addEventListener('change', savePreferences);


const init = () => {
    loadPreferences();
    addItemsToList();
};

document.addEventListener('DOMContentLoaded', init);