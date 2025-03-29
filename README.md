# 🔥 Firebase Registration Form

## 📝 Overview
This project implements a user registration form that stores data in Firebase Realtime Database. It uses Firebase's JavaScript SDK to interact with the database and encrypts user passwords using SHA-256 before saving them.

## ✨ Features
- ✅ User registration with validation
- 🔒 Password encryption using SHA-256
- 📡 Firebase Realtime Database integration
- 🎨 Bootstrap form validation

## 🛠 Technologies Used
- 🌐 HTML
- 📜 JavaScript
- 🔥 Firebase Realtime Database
- 🎨 Bootstrap
- 🔑 CryptoJS (for password encryption)

## 🚀 Setup Instructions

### 🌍 Live Demo
🔗 [Visit the deployed project on Vercel](https://form-connection-on-firebase.vercel.app/)


1. 📥 Clone or download the repository.
2. 🖥 Open the `index.html` file in a browser.
3. 🌍 Ensure you have an active internet connection, as Firebase modules are imported via CDN.
4. 📝 Fill out the registration form and submit.

## 🔧 Firebase Configuration
Modify the Firebase configuration object in `script.js` if you are using a different Firebase project:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
```

## 🔄 How It Works
1. ✅ The form is validated using Bootstrap.
2. 🛑 On submission, it prevents default submission behavior.
3. 📝 It checks if all required fields are filled.
4. 🔐 The password is encrypted using SHA-256.
5. 📡 The user data is pushed to Firebase Realtime Database.
6. 🎉 On successful submission, the form resets.

## 📦 Dependencies
This project uses the following external libraries:
- 🔥 Firebase SDK (CDN-based import)
- 🔑 CryptoJS for SHA-256 encryption
- 🎨 Bootstrap for styling and validation

## 🔐 Security Considerations
- 🔒 Passwords are encrypted before storing them in Firebase.
- 🛡 Always validate form data before sending it to Firebase.

## 🔮 Future Enhancements
- 🔑 Implement Firebase Authentication instead of storing passwords manually.
- 📧 Add email verification and password reset options.
- 🎨 Improve UI/UX using modern frameworks like React or Vue.js.

## 📜 License
This project is open-source and can be modified as per your requirements.

