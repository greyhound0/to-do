
Array.prototype.listeners = {};
Array.prototype.addListener = function(eventName, callback) {
    if (!this.listeners[eventName]) {
   
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);
};
Array.prototype.pushWithEvent = function( ...args) {
  const size = this.length;

  for (let index = 0; index < args.length; index++) {
    this[size + index] = args[index];
  }

  this.triggerEvent('change', args);
};

Array.prototype.spliceWithEvent = function(start, deleteCount = 1, ...args) {
    this.splice(start, deleteCount, ...args)

    this.triggerEvent('change', this)
}

Array.prototype.triggerEvent = function(eventName, elements) {
  if (this.listeners[eventName] && this.listeners[eventName].length) {
    this.listeners[eventName].forEach(callback =>
      callback(eventName, elements, this)
    );
  }
};

const input = document.getElementById('input');
const itemsDisplayed = document.getElementById('itemsDisplayed');
var itemsAdded = [];

function newItemsAdded(){
    itemsAdded.pushWithEvent(input.value)
    input.value = ''
}

function itemRemoved(index){
    itemsAdded.spliceWithEvent(index, 1)
}

function itemEdited(index){
    itemsAdded.spliceWithEvent(index, 1, prompt('enter the item you want to add'))

}


itemsAdded.addListener('change',(name,e, array)=> {
    itemsDisplayed.innerHTML = ''
    array.map((item, i) => itemsDisplayed.innerHTML += `<li>${item} <button onclick="itemEdited(${i})">edit</button> <span onclick="itemRemoved(${i})">X</span></li>`)
});



