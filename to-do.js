const btn = document.getElementById('btn');
const list = document.getElementById('list');
const inputField = document.getElementById('inputField');
const orderedList = document.getElementById('orderedList');
const clear = document.getElementById('clear');


function addInputToList(){
    if(inputField.value === ''){
        alert("enter a valid item");
        return;}
    
let listed = document.createElement('li');
listed.innerText = inputField.value ;
orderedList.appendChild(listed);
inputField.value = '';
let a = document.createElement('a');
a.href = "javascript:void(0)";
a.textContent = "  X";
listed.appendChild(a);
a.addEventListener('click', function(){
    orderedList.removeChild(listed);  
})
listed.addEventListener('click', function(){
    let y = "yo";
    orderedList.replaceChild( y , orderedList.childNodes[0]);
})
}


btn.addEventListener('click', addInputToList);

window.addEventListener('keypress', (e) =>{
    if(e.charCode === 13){
        addInputToList();
    }
})

clear.addEventListener('click',() =>{
    // orderedList.replaceChildren();
    orderedList.innerHTML = '';
})

