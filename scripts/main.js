var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Как зовут тебя?');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Меня зовут ' + storedName;
}

var myButton = document.querySelector('button');
clickWindow = function() {
    alert ('ЭТО АБЗАЦ');
}
document.querySelector('p').onclick = clickWindow;

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sd.png') {
      myImage.setAttribute ('src','images/sd2.png');
    } else {
      myImage.setAttribute ('src','images/sd.png');
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Меня зовут ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}