// Form validation before submitting
document.getElementById("challengeBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const goalInput = document.getElementById("goal").value.trim();
    const inputGoal = document.getElementById("inputGoal").value.trim();
    const inputGoalDate = document.getElementById("inputGoalDate").value;
    const inputName = document.getElementById("inputName").value.trim();
    const friendName = document.getElementById("friendName").value.trim();
    const inputPhoneYou = document.getElementById("inputPhoneYou").value.trim();
    const inputPhoneFriend = document.getElementById("inputPhoneFriend").value.trim();

    // Validate form
    if (goalInput || (inputGoal && inputGoalDate && inputName && friendName && inputPhoneYou && inputPhoneFriend)) {
        window.location.href = "https://getoffyourass.github.io/do-the-thing-checkout/?";
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
