const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");

  let ebody = `
<b>Name: </b>${fname.value}&nbsp;${lname.value}
<br>
<b>Email: </b>${email.value}
<br>
<b>Phone no: </b>${phone.value}
<br>
<b> Message: </b>${message.value}`;
  Email.send({
    SecureToken: "7a0415fe-dd69-4152-846e-199a34bdbe26",
    To: "madhukumar.naidu@gmail.com",
    From: "madhukumar.naidu@gmail.com",
    Subject: `${fname.value} Sent you a Message`,
    Body: ebody,
  }); //.then((message) => alert(message));
});
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}
