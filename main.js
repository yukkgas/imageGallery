const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const button = document.querySelector("button");
const overlay = document.querySelector(".overlay");

let images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
let alts = {
    "pic1.jpg" : "pic1",
    "pic2.jpg" : "pic2",
    "pic3.jpg" : "pic3",
    "pic4.jpg" : "pic4",
    "pic5.jpg" : "pic5"
};

for(image of images){
    let newElement = document.createElement('img');
    newElement.setAttribute('src', "images/" + image);
    newElement.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newElement);
    newElement.addEventListener('click', function(){
        displayedImage.setAttribute('src', newElement.getAttribute('src'));
    })
};

button.addEventListener('click', () => {
    if(button.classList.contains('dark')){
        button.textContent = "Светлее";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        button.classList.remove("dark");
        button.classList.add('light');
    } else {
        button.textContent = "Темнее";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        button.classList.remove("light");
        button.classList.add('dark');
    }
});