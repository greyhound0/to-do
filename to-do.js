const enterBtn = document.getElementById('enterBtn');
const inputField = document.getElementById('inputField');
const orderedList = document.getElementById('orderedList');
const clearBtn = document.getElementById('clearBtn');


function addInputToList(){
    if(inputField.value === ''){
        alert("enter a valid item");
        return;}
    
let listed = document.createElement('li');
listed.innerText = inputField.value ;
orderedList.appendChild(listed);
inputField.value = '';
let editButton = document.createElement('button');
editButton.className = "editButton"
editButton.innerText = "Edit"
listed.appendChild(editButton);
let a = document.createElement('a');
a.href = "javascript:void(0)";
a.innerText = " X" ;
a.style.color = "rgb(209,8,8)"
listed.appendChild(a);

a.addEventListener('click', function(){
    orderedList.removeChild(listed);  
})

editButton.addEventListener('click', ()=> {
   
    let replacedItem =  prompt("enter the replaced item");
    listed.innerText = replacedItem;
    listed.appendChild(editButton);
    listed.appendChild(a)


})

}


enterBtn.addEventListener('click', addInputToList);

window.addEventListener('keypress', (e) =>{
    if(e.charCode === 13){
        addInputToList();
    }
})

clearBtn.addEventListener('click',() =>{
    // orderedList.replaceChildren();
    orderedList.innerHTML = '';
})

