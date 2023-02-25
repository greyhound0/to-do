
const input = document.getElementById('input');
const itemsDisplayed = document.getElementById('itemsDisplayed');
var itemsAdded = [];

function newItemsAdded(){
    itemsAdded.push(input.value)
    input.value = ''
    console.log(itemsAdded, '@@@@')
    itemsAdded.map(item => {itemsDisplayed.appendChild(document.createTextNode(item))})


}

function itemRemoved(){
    itemsAdded.splice(input.value - 1, 1)
    input.value = ''
    JSON.stringify(itemsAdded)
    console.log(itemsAdded, '@@@@')
}

function itemEdited(){
    itemsAdded.splice(input.value -1, 1, prompt('enter the item you want to add'))
    input.value = ''
    JSON.stringify(itemsAdded)
console.log(itemsAdded, '@@@@')
}

JSON.stringify(itemsAdded)
console.log(itemsAdded, '@@@@')

Array.prototype.listeners = {};
Array.prototype.addListener = function(eventName, callback) {
  if (!this.listeners[eventName]) {
    // Create a new array for new events
    // idea of an array is we can invoke all callbacks
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);
};
itemsAdded.addListener('change', () => console.log('Hello'))
itemsAdded.addListener('change', () => console.log('Hello'))
itemsAdded.addListener('add', () => console.log('World'))
console.log(itemsAdded.listeners)
