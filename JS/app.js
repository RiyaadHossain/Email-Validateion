const pattern = /^([a-zd.-]+)@([a-zd-]+).[a-z]{2,4}/;
const validationMsg = document.getElementById("validation-msg");
const emailInput = document.getElementById("email-input");

const validateEmail = () => {
  if (pattern.test(emailInput.value)) {
    validationMsg.innerText = "E-mail is Valid ✅";
  } else {
    validationMsg.innerText = "E-mail is Invalid ❌";
  }
  emailInput.value = "";
};
