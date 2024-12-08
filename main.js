// Dieu huong
function homepage() {
    window.location.href = "./index.html"
};
function dieu_huong() {
    window.location.href = "./logIn.html"
};


function courses() {
    window.location.href = "./courses.html"
};
function feature_1() {
    window.location.href = " ./courses_content_overview_1.html"
}

function overview_1() {
    window.location.href = "./courses_content_overview_1.html"
}
function overview() {
    window.location.href = "./courses_content_overview_1.html"
}
function curriculum() {
    window.location.href = "./course_content_curriculum_1.html"
}
function overview_2() {
    window.location.href = "./courses_content_overview_2.html"
}
function overview_3() {
    window.location.href = "./courses_content_overview_3.html"
}
function overview_4() {
    window.location.href = "./courses_content_overview_4.html"
}
function overview_5() {
    window.location.href = "./courses_content_overview_5.html"
}
function overview_6() {
    window.location.href = "./courses_content_overview_6.html"
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


