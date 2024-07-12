// Initialize Firebase Authentication
const auth = firebase.auth();

// Sign-Up Function
function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            console.log("Sign up successful!");
            // You can redirect or display a success message here
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('error-msg').innerText = errorMessage;
        });
}

// Login Function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            console.log("Login successful!");
            // You can redirect or display a success message here
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('error-msg').innerText = errorMessage;
        });
}
