document.addEventListener("DOMContentLoaded", function() {

})

const btn = document.querySelector('#msgBox');
btn.onclick = displayMessage;

function displayMessage() {
    const html = document.querySelector("html");

    const panel = document.createElement("div");

    panel.setAttribute("class", "msgBox");
    html.appendChild(panel);

    const msg = document.createElement("p");
    msg.textContent = "Hi! Walks 1 & 5 would be a suitable walk for you";
    panel.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }
}

//Lake walking button
/*const btn = document.querySelector('#msgBox2');
btn.onclick = displayMessage;

function displayMessage() {
    const html = document.querySelector("html");

    const panel = document.createElement("div");

    panel.setAttribute("class", "msgBox2");
    html.appendChild(panel);

    const msg = document.createElement("p");
    msg.textContent = "Hi! Walks 2 & 6 would be a suitable walk for you";
    panel.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }
}

//Hill walking button
const btn = document.querySelector('#msgBox3');
btn.onclick = displayMessage;

function displayMessage() {
    const html = document.querySelector("html");

    const panel = document.createElement("div");

    panel.setAttribute("class", "msgBox3");
    html.appendChild(panel);

    const msg = document.createElement("p");
    msg.textContent = "Hi! Walks 3 & 4 would be a suitable walk for you";
    panel.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }
}*/

//Membership calculator
function calculateSubTotal() {

}

function calculateDiscount() {
    
}

function calculateTotal() {
    
}