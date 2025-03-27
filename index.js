// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0EPtQE-tA4sW0gaX4aoXk1D-RxaW4ZIM",
  authDomain: "getoffyourass.firebaseapp.com",
  projectId: "getoffyourass",
  storageBucket: "getoffyourass.firebasestorage.app",
  messagingSenderId: "1044292710186",
  appId: "1:1044292710186:web:a9a5d671d03b06a1cab853",
  measurementId: "G-J55T93MPCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById("challengeBtn").addEventListener("click", async function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const goalInput = document.getElementById("goal").value.trim();
    const inputGoal = document.getElementById("inputGoal").value.trim();
    const inputGoalDate = document.getElementById("inputGoalDate").value;
    const inputName = document.getElementById("inputName").value.trim();
    const friendName = document.getElementById("friendName").value.trim();
    const inputPhoneYou = document.getElementById("inputPhoneYou").value.trim();
    const inputPhoneFriend = document.getElementById("inputPhoneFriend").value.trim();
    const payAmount = document.getElementById("payDropdown").value;

    // Validate form
    if (goalInput || (inputGoal && inputGoalDate && inputName && friendName && inputPhoneYou && inputPhoneFriend)) {
        // Add goal data to Firestore
        try {
            await addDoc(collection(db, "goals"), {
                goal: goalInput || inputGoal,
                goalDate: inputGoalDate,
                name: inputName,
                friendName: friendName,
                phoneYou: inputPhoneYou,
                phoneFriend: inputPhoneFriend,
                amount: payAmount
            });

            alert("Goal submitted successfully!");
            window.location.href = "https://getoffyourass.github.io/do-the-thing-checkout/?"; // Redirect after successful submission
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to submit goal. Please try again.");
        }
    } else {
        alert("Please either enter a goal or fill out the rest of the form.");
    }
});

// Function to scroll to the bottom
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Attach event listener to the button
const startBtn = document.getElementById("startBtn");
if (startBtn) {
    startBtn.addEventListener("click", function () {
        const goalInput = document.getElementById("goal").value.trim();
        if (goalInput !== "") {
            scrollToBottom();
        } else {
            alert("Please either enter a goal or fill out the rest of the form.");
        }
    });
}
