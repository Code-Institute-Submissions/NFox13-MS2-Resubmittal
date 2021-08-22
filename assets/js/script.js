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

//Current discount button
function getDiscount() {
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Good morning, there is a current Spring discount on annual membership of 10%";
  } else if (time < 18) {
    greeting = "Good afternoon, there is a current Spring discount on annual membership of 10%";
  } else {
    greeting = "Good evening, there is a current Spring discount on annual membership of 10%";
  }
  document.getElementById("discount").innerHTML = greeting;
}
