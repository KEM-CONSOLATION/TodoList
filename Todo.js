const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);
// input.addEventListener('keyup',(e)=>{
//     (e.keyCode === 13 ? addList(e) : null);
// })
input.addEventListener('keyup',function(e) {
    if(e.keyCode === 13 ){
        addList(e) 
    }
})
function addList(e) {
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const updBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>'; 
    updBtn.innerHTML = '<i class="fa fa-pen"></i>'; 


    if(input.value !== ''){
        newLi.textContent = input.value;  //i can use innerText or textContent
        newLi.style.textTransform ="uppercase";
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn)
        newLi.appendChild(delBtn)
        newLi.appendChild(updBtn)
    }
    else{
        alert('You Must Write Something...')
    }
    checkBtn.addEventListener('click', function () {
       const parent = this.parentNode;
       parent.remove(); 
       Completed.appendChild(parent);
       checkBtn.style.display='none'
       updBtn.style.display='none'
    });
    delBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove(); 
     });

     updBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        input.value=newLi.textContent;
        parent.remove(); 
     });
}