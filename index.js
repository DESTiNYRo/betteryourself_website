// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
   document.body.classList.toggle("dark-mode");
    // Write your code to manipulate the DOM here
}
// TODO: Register a 'click' event listener for the theme button

themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.





// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");


let count = 3;

const addSignature = (person) => {
 // const fullName = document.getElementById("first").value;
 // const address = document.getElementById("addy").value;
 // const eMail = document.getElementById("email").value;

  // Check if the form is valid
  if (validateForm()) {
    const person = {
        fullName: document.getElementById("first").value,
        address: document.getElementById("addy").value,
        eMail: document.getElementById("email").value,
    }
    const newSignature = document.createElement("p");
    newSignature.textContent = `🖊️ ${person.fullName} from ${person.address} supports this.`;

    const signaturesContainer = document.querySelector(".signatures");
    signaturesContainer.insertBefore(newSignature, signaturesContainer.lastElementChild);

    count = count + 1;
    const countParagraph = document.querySelector(".count");
    countParagraph.textContent = `🖊️ ${count} people have signed this petition and support this cause`;

    // Clear input fields
    document.getElementById("first").value = "";
    document.getElementById("addy").value = "";
    document.getElementById("email").value = "";

    toggleModal(person);
  }
}

  signNowButton.addEventListener("click", addSignature);




const modalImage = document.querySelector("#thanks-modal img");
let scaleFactor = 1;



const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
 
  } else {
    scaleFactor = 1;
   
  }
      modalImage.style.transform = `scale(${scaleFactor})`; 

}


const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("modal-text-container");

  modal.style.display = "flex";

  const message = `Thank you so much ${person.fullName} for signing! Shoutout to ${person.address}!`;
  modalContent.textContent = message;

  
  const intervalId = setInterval(scaleImage, 500); // Call scaleImage every 500 milliseconds

  
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId); // Stop the animation
  }, 4000);
}




const validateForm = () => {
  let petitionInputs = document.getElementById("sign-petition").elements;
  let containsErrors = false;

  let person = {
    fullName: petitionInputs[0].value,
    address: petitionInputs[1].value,
    eMail: petitionInputs[2].value,
  };

  for (let input of Object.values(person)) {
    if (input.trim().length < 2) {
      containsErrors = true;
      break; 
    }
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].checkValidity() === false) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  return !containsErrors;
}


let animation = {

  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}
  let revealableContainers = document.querySelectorAll(".revealable");
  
function reveal() {
    let windowHeight = window.innerHeight;
    for (let i = 0; i < revealableContainers.length; i++) {
      let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
      if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
        revealableContainers[i].classList.add("active");
      } else {
        revealableContainers[i].classList.remove("active");
      }
  }
  }
window.addEventListener("scroll", reveal);
reveal();


/*
  const email = document.getElementById('email');
  if (!email.value.includes('.com') || !email.value.includes('.org')) {
    containsError = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }
*/

/*
old code 
const validateForm = () => {
  let petitionInputs = document.getElementById("sign-petition").elements;
  let containsErrors = false;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].checkValidity() === false) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }
  return !containsErrors;
}
  signNowButton.addEventListener("click", addSignature);


old code:
let signNowButton = document.getElementById("sign-now-button");
let count = 3;

const addSignature = () => {
  const fullName = document.getElementById("first").value;
  const address = document.getElementById("addy").value;
  const eMail = document.getElementById("email").value;

  // Check if the form is valid
  if (validateForm()) {
    const signatureParagraph = document.createElement("p");
    signatureParagraph.textContent = `🖊️ ${fullName} from ${address} supports this.`;

    const signaturesContainer = document.querySelector(".signatures");
    signaturesContainer.insertBefore(signatureParagraph, signaturesContainer.lastElementChild);

    count = count + 1;
    const countParagraph = document.querySelector(".count");
    countParagraph.textContent = `🖊️ ${count} people have signed this petition and support this cause`;

    // Clear input fields
    document.getElementById("first").value = "";
    document.getElementById("addy").value = "";
    document.getElementById("email").value = "";
  }
}

signNowButton.addEventListener("click", addSignature);


new new:
const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("modal-text-container");

  // Set the display style property of the modal to "flex"
  modal.style.display = "flex";

  const message = `Thank you so much ${person.fullName}! ${person.address} represent!`;

  // Set the textContent of the modal content to the message
  modalContent.textContent = message;

  setTimeout(() => {
    modal.style.display = "none";
  }, 4000)
}


new new new 
let scaleFactor = 1;
let rotationDegree = 0;


const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
     rotationDegree += 360; 
  } else {
    scaleFactor = 1;
     rotationDegree += 360; 
  }
      modalImage.style.transform = `scale(${scaleFactor})`; 

}



*/