const firebaseConfig = {
  apiKey: "AIzaSyCUNI-_OJ3IVgsVTbFOSevlryqU9y06S2o",
  authDomain: "raktdatra-c962d.firebaseapp.com",
  databaseURL: "https://raktdatra-c962d-default-rtdb.firebaseio.com",
  projectId: "raktdatra-c962d",
  storageBucket: "raktdatra-c962d.appspot.com",
  messagingSenderId: "441675400427",
  appId: "1:441675400427:web:66ece224edf7d1287e6aae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your user database
var userDB = firebase.database().ref("users");

document.getElementById("signup-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var password = getElementVal("password"); // Added password field
  var gender = getElementVal("gender");
  var dob = getElementVal("date"); // Changed from "dob" to "date"
  var role = getElementVal("person"); // Changed from "role" to "person"
  var bloodGroup = getElementVal("bloodgrp");
  var location = getElementVal("location");
  var medicalRecords = getElementVal("medrec");
  var additionalInfo = getElementVal("area-text");

  saveUser(name, email, phone, password, gender, dob, role, bloodGroup, location, medicalRecords, additionalInfo); // Updated parameters

  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove the alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("signup-form").reset();
}

const saveUser = (name, email, phone, password, gender, dob, role, bloodGroup, location, medicalRecords, additionalInfo) => {
  var newUser = userDB.push();

  newUser.set({
    name: name,
    email: email,
    phone: phone,
    password: password, // Added password field
    gender: gender,
    dob: dob,
    role: role,
    bloodGroup: bloodGroup,
    location: location,
    medicalRecords: medicalRecords,
    additionalInfo: additionalInfo
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
