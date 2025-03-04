// update:step5. JavaScript code is now wrapped inside the DOMContentLoaded event listener, 
// ensuring that the code only runs when the HTML document is fully loaded.
document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello World!');

    // Define user data
    let name = "Tyler Vander Mooren";
    let hasDownloadedResume = false;

    // Show alert when resume is downloaded
    const downloadButton = document.getElementById('downloadResume');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            if (!hasDownloadedResume) {
                alert('Your resume is downloaded successfully!');
                hasDownloadedResume = true;  // Prevent alert from showing again
            }
        });
    }

    // Show personalized greeting
    function showGreeting(name) {
        return "Hello, my name is " + name + "! Welcome to my portfolio!";
    }

    // Display greeting
    const greetingMessage = showGreeting(name);
    document.getElementById('greeting').innerText = greetingMessage;

    // Calculate days remaining until project deadline
    function daysUntilDeadline(deadline) {
        const today = new Date(); // Current date
        const deadlineDate = new Date(deadline); // Target deadline date
        const timeDifference = deadlineDate - today; // Time difference in milliseconds
        const daysRemaining = Math.round(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
        return daysRemaining;
    }

    // Example project deadline
    const projectDeadline = '2025-06-10';

    // Calculate days remaining for new project
    const remainingDays = daysUntilDeadline(projectDeadline);

    // Display remaining days in the console
    console.log(`Days remaining until project deadline: ${remainingDays}`);

    // Display the remaining days alongside the project deadline in HTML
    const projectDeadlineElement = document.getElementById('projectDeadline');
    if (projectDeadlineElement) {
        projectDeadlineElement.innerText = `Deadline: ${projectDeadline} (${remainingDays} days remaining)`;
    }
});
