// firebase authentication
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAjzhJeviMuoyirUTYx4P4ux032lKkF4I",
  authDomain: "integratedproject-6b117.firebaseapp.com",
  projectId: "integratedproject-6b117",
  storageBucket: "integratedproject-6b117.appspot.com",
  messagingSenderId: "1012918350197",
  appId: "1:1012918350197:web:13a6741625ef0dd26fa33c",
  measurementId: "G-GTLYLKGR6F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// scripts

const form = document.querySelector("form");
const errorText = document.querySelector(".error-text");
const signupButton = document.querySelector(".signup");
const signinButton = document.querySelector(".signin");
const signoutButton = document.querySelector(".signout");

const signinPage = document.querySelector(".signinpage");
const homePage = document.querySelector(".homepage");

// check if user is logged in

const userEmail = localStorage.getItem("userEmail");
if (!userEmail) {
  signinPage.style.display = "block";
  homePage.style.display = "none";
} else {
  signinPage.style.display = "none";
  homePage.style.display = "block";
}

// handle signup

const handleSignup = async (e) => {
  e.preventDefault();

  try {
    errorText.innerHTML = "";

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // console.log("email: " + email);
    // console.log("password: " + password);

    var userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    var user = userCredential.user;
    console.log(user.uid);

    signinPage.style.display = "none";
    homePage.style.display = "block";

    localStorage.setItem("userEmail", email);
  } catch (error) {
    errorText.innerHTML = "Please check credentials";
  }
};

signupButton.addEventListener("click", handleSignup);

// handle signin

const handleSignin = async (e) => {
  e.preventDefault();

  try {
    errorText.innerHTML = "";

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // console.log("email: " + email);
    // console.log("password: " + password);

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    var user = userCredential.user;
    console.log(user.uid);

    signinPage.style.display = "none";
    homePage.style.display = "block";

    localStorage.setItem("userEmail", email);
  } catch (error) {
    errorText.innerHTML = "Please check credentials";
  }
};

signinButton.addEventListener("click", handleSignin);

// handle signout

const handleSignout = async (e) => {
  console.log("click");
  await auth.signOut();

  signinPage.style.display = "block";
  homePage.style.display = "none";
  localStorage.removeItem("userEmail");
};

signoutButton.addEventListener("click", handleSignout);
