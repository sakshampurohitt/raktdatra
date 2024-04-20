import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appsetting = {
    databaseURL: "https://playground-62ca5-default-rtdb.asia-southeast1.firebasedatabase.app"
}

// Initialize Firebase
const app = initializeApp(appsetting);

// Reference your user database
const database = getDatabase(app);
const itemindb = ref(database, "items");

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
  const newUserRef = push(itemindb);

  set(newUserRef, {
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
