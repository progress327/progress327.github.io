const myImage = document.querySelector("img");

myImage.onclick = function () {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/home/kali/web-projects/test-site/images/Mozilla_Firefox_logo_2013.png") {
    myImage.setAttribute("src", "/home/kali/web-projects/test-site/images/ayomide.jpg");
  } else {
    myImage.setAttribute("src", "/home/kali/web-projects/test-site/images/Mozilla_Firefox_logo_2013");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla firefox is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla firefox is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla firefox is cool, ${myName}`;
  }
}

