document.addEventListener("DOMContentLoaded", function() {

})


//Suitable walks button
console.clear();
const buttonsList = document.querySelectorAll('button'), closeBtnList = document.querySelectorAll('.closebtn');
buttonsList.forEach(each => each.addEventListener('click', handleBtnClick));
closeBtnList.forEach(each => each.addEventListener('click', handleCloseBtnClick));
        
function handleBtnClick(evt) {
document.querySelectorAll('.alert').forEach(each => each.style.display = 'none');
document.querySelector('#'+evt.target.dataset.msgId).style.display = 'block';
}
        
function handleCloseBtnClick(evt) {
evt.target.parentElement.style.display = 'none';
}

//Membership calculator
function calculateSubTotal() {

}

function calculateDiscount() {
    
}

function calculateTotal() {
    
}