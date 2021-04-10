document.addEventListener("DOMContentLoaded", function() {

})

//Suitable walks alert buttons
function displayAlert1() {
        alert("Hi! Walks 1 & 5 would be a suitable walk for you");
    }

function displayAlert2() {
        alert("Hi! Walks 2 & 6 would be a suitable walk for you");
    }

function displayAlert3() {
        alert("Hi! Walks 3 & 4 would be a suitable walk for you");
    }

//Display meesage trial

const btn = document.querySelector('button');
btn.onclick = displayMessage;

function displayMessage() {
    const html = document.querySelector("html");

    const panel = document.createElement("div");

    panel.setAttribute("class", "msgBox");
    html.appendChild(panel);

    const msg = document.createElement("p");
    msg.textContent = "This is a message box";
    panel.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }
}


//Membership calculator
function calculateSubTotal() {

}

function calculateDiscount() {
    
}

function calculateTotal() {
    
}