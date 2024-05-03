const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const testBtn = document.querySelector("#test-btn");
const userPassword = document.querySelector("#user-password");
const userPasswordConfirm = document.querySelector("#user-password-confirm");
const loginForm = document.querySelector("#form");

loginForm.addEventListener("submit", (e) => {
    let formData = new FormData(loginForm);
    if (!validatePassword()) {
        e.preventDefault(); //Prevent form submission.
        return;
    };
    for (let item of formData) {
        console.log(item[0], item[1]);
    };
    //fetch form.
    console.log("Form submitted.");
    e.preventDefault();
    return;
});
testBtn.addEventListener('click', () => {
    console.log('hello');
})
const validatePassword = () => {
    const password = document.querySelector("#user-password").value;
    const confirmPassword = document.querySelector("#user-password-confirm").value;
    if (password !== confirmPassword) {
        alert("Password do not match!");
        password.value = "";
        confirmPassword.value = "";
        return false;
    }
    return true;
}
const resetForm = () => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    userPassword.value = "";
    userPasswordConfirm.value = "";
}