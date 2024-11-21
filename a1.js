// Get DOM elements
const themeSelect = document.getElementById('theme-select');
const listStyleSelect = document.getElementById('list-style-select');
const itemList = document.getElementById('item-list');

// Sample items to display in the list
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// Function to load preferences from localStorage
function loadPreferences() {
    const theme = localStorage.getItem('theme') || 'theme-light';
    const listStyle = localStorage.getItem('listStyle') || 'list-bullets';
    
    // Apply the stored theme and list style
    document.body.className = theme;
    itemList.className = listStyle;

    // Set the select elements to the stored preferences
    themeSelect.value = theme;
    listStyleSelect.value = listStyle;
}

// Function to save preferences to localStorage
function savePreferences() {
    const theme = themeSelect.value;
    const listStyle = listStyleSelect.value;

    localStorage.setItem('theme', theme);
    localStorage.setItem('listStyle', listStyle);

    // Apply preferences to the page
    document.body.className = theme;
    itemList.className = listStyle;
}

// Function to populate the list dynamically
function populateList() {
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        
        // Add a checkbox for the "checkbox" list style
        if (listStyleSelect.value === 'list-check') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            li.prepend(checkbox);
        }

        itemList.appendChild(li);
    });
}

// Event listeners for theme and list style change
themeSelect.addEventListener('change', savePreferences);
listStyleSelect.addEventListener('change', savePreferences);

// Initial load of preferences and populate list
window.addEventListener('load', () => {
    loadPreferences();
    populateList();
});
