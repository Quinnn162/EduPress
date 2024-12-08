// Dieu huong
function homepage() {
    window.location.href = "./homepage.html"
};
function dieu_huong() {
    window.location.href = "./logIn.html"
};
function courses() {
    window.location.href = "./courses.html"
};
function feature_1() {
    window.location.href = " ./courses_content_1.html"
}
// Log In / Register
function register() {
    event.defaultPrevented;
    let email = document.getElementsByClassName("email").value;
    let username = document.getElementsByClassName("username").value;
    let password = document.getElementsByClassName("password").value;
    let confirmPassword = document.getElementsByClassName("confirmPassword").value;
    let user = {
        email: email,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
    }
        let json = JSON.stringify(user);
        localStorage.setItem (user, json); 
    alert("Dang ki thanh cong");
}


