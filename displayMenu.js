// displayMenu.cjs
const menuArray = require('./menuData.js');

// Function to display the name and description for each menu item
function showMenuItem(item) {
    console.log(`Name: ${item.name}, Description: ${item.description}`);
}

// Function to display basic menu info
function displayMenuInfo() {
    menuArray.forEach(showMenuItem);
}

// Export this function to main.cjs file
module.exports = displayMenuInfo;
