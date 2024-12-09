// Log In / Register
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = {
        username: username,
        email: email,
        password: password
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
});
document.getElementById('logIn_form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('logIn_username').value;
    const password = document.getElementById('logIn_password').value;
    const email = document.getElementById('logIn_username').value; 

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user_email = users.find(user => user.password === password && user.email === email);
    const user_username = users.find (user => user.username === username && user.password === password)
    if (user_username) {
        alert("Log in successful")
        window.location.href = "./index.html"
    } 
    else if (user_email){
        alert("Log in successful")
        window.location.href = "./index.html"
    }
    else {
        alert("Log in unsuccessful")
    }
})

//Course 
const list = document.querySelectorAll(video_content_list);



