// Show Signup
function showSignup() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupForm").classList.add("active");
}

// Show Login
function showLogin() {
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
}

// Toggle Password
function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// Signup
function signupUser(e) {
    e.preventDefault();

    const user = {
        name: document.getElementById("signupName").value,
        email: document.getElementById("signupEmail").value,
        password: document.getElementById("signupPassword").value
    };

    localStorage.setItem("bookstoreUser", JSON.stringify(user));
    alert("Account Created Successfully!");
    showLogin();
}

// Login
function loginUser(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("bookstoreUser"));

    if (!storedUser) {
        alert("Please create account first.");
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password.");
    }
}
function checkLogin() {
    const isLoggedIn = localStorage.getItem("bookstoreUser");

    if (!isLoggedIn) {
        window.location.href = "auth.html";
    } else {
        const user = JSON.parse(isLoggedIn);
        document.getElementById("welcomeUser").innerText = "Welcome, " + user.name;
    }
}

function logout() {
    localStorage.removeItem("bookstoreUser");
    window.location.href = "auth.html";
}
function buyBook(name, price) {
    localStorage.setItem("selectedBook", name);
    localStorage.setItem("selectedPrice", price);
    window.location.href = "payment.html";
}
