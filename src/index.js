function buyBooks() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let question = prompt("Do you like Neil Gaiman?");
  if (question.toLowerCase() == "yes") {
    alert(`Thanks, ${name}☺️! We will email ${email} shortly!`);
  } else {
    if (question.toLowerCase() == "no") {
      alert(`Sorry ${name}, You're just not cool 😢`);
    }
  }
}

let buyBooksButton = document.querySelector("button");
buyBooksButton.addEventListener("click", buyBooks);
