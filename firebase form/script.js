// Import Firebase modules (This works only inside <script type="module">)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, push, ref } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzJdsGfLEL-xF_HJKbitp0GTtLGV-g6jo",
    authDomain: "atharva-data.firebaseapp.com",
    databaseURL: "https://atharva-data-default-rtdb.firebaseio.com",
    projectId: "atharva-data",
    storageBucket: "atharva-data.appspot.com",
    messagingSenderId: "235106059798",
    appId: "1:235106059798:web:e60160f850c7e926eb9737",
    measurementId: "G-JZLYGZW1XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference Firebase Realtime Database
const formdb = ref(database, "users");

// Function to save form data
function saveFormData(formData) {
    push(formdb, formData)
        .then(() => {
            alert("Registration successful!");
            document.getElementById("registrationForm").reset();
        })
        .catch(error => {
            console.error("Error saving data:", error);
        });
}

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Bootstrap validation
    if (!this.checkValidity()) {
        event.stopPropagation();
        this.classList.add("was-validated");
        return;
    }

    // Collect form data
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;

    // Ensure all fields are filled
    if (!fullName || !email || !phone || !dob || !gender || !address || !password) {
        alert("Please fill all the fields.");
        return;
    }

    // Encrypt password using SHA-256
    let encryptedPassword = CryptoJS.SHA256(password).toString();

    // Define formData inside this function
    let formData = {
        fullName,
        email,
        phone,
        dob,
        gender,
        address,
        password: encryptedPassword
    };

    // Call function to save data
    saveFormData(formData);
});
