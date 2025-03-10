// update:step5. JavaScript code is now wrapped inside the DOMContentLoaded event listener, 
// ensuring that the code only runs when the HTML document is fully loaded.
document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello World!');

    // Define user data
    let name = "Tyler Vander Mooren";
    let hasDownloadedResume = false;
    //step 4 - counter for download button
    // Initialize download count variable
    let downloadCount = 0;

    // Show alert when resume is downloaded
    const downloadButton = document.getElementById('downloadResume');
    const downloadCountDisplay = document.getElementById('downloadCountDisplay'); // Add a place to show the download count

    if (downloadButton && downloadCountDisplay) {
        downloadButton.addEventListener('click', function() {
            if (!hasDownloadedResume) {
                alert('Your resume is downloaded successfully!');
                hasDownloadedResume = true;  // Prevent alert from showing again
            }

            // Increment download count
            downloadCount++;
            
            // Update the download count display
            downloadCountDisplay.innerText = `Downloaded: ${downloadCount} times`;

            // Store download count in localStorage to persist on page reloads (optional)
            localStorage.setItem('downloadCount', downloadCount);
        });
    }

    // Check if there's an existing download count in localStorage
    if (localStorage.getItem('downloadCount')) {
        downloadCount = parseInt(localStorage.getItem('downloadCount'), 10);
        downloadCountDisplay.innerText = `Downloaded: ${downloadCount} times`;
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
    //Step1: add new skills Handle the addition of a new skill
    const addSkillForm = document.getElementById('addSkillForm');
    const skillInput = document.getElementById('skillInput');
    const skillsList = document.getElementById('skills');
    const skillDesc = document.getElementById('skillDesc');

    if (addSkillForm && skillInput && skillDesc && skillsList) {
        addSkillForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            const newSkill = skillInput.value.trim(); // Get the skill input value
            const newSkillDesc = skillDesc.value.trim(); //Get the description input value

            if (newSkill && newSkillDesc) {
                // Create a new skill card wit the description and add it to the skills section
                const skillCard = document.createElement('div');
                skillCard.classList.add('card', 'mb-4');
                skillCard.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${newSkill}</h5>
                        <p class="card-text">${newSkillDesc}.</p>
                    </div>
                `;
                skillsList.appendChild(skillCard); // Add the new skill card to the list
                skillInput.value = ''; // Clear 
                skillDesc.value = ''; // Clear 
            } else {
                alert("Please enter both a skill and a description.");
            }
        });
    }

     // Step 2/3: Create three separate arrays for project details

     const projectTitles = [
        "Web Development Portfolio",
        "Endless Runner Java Game",
        "Fahrenheit Converter"
    ];

    const projectDescriptions = [
        "A personal portfolio website developed to showcase my skills in web design and development.",
        "A personal attempt at making a game in the subgenre of platform game in which the player character runs for an infinite amount of time while avoiding obstacles. (In progress, still working on refining gameplay mechanics.)",
        "A simple project that converts Fahrenheit(°F) to Celsius(°C)."
    ];

    const projectDeadlines = [
        "2025-06-01",
        "2025-12-31",
        "2025-03-10"
    ];
    // Add Image URLs for each project
    const projectImages = [
        "https://tjv55.blob.core.windows.net/cs212/project1pic1.png",   // Example image path for Web Development Portfolio
        "https://tjv55.blob.core.windows.net/cs212/project2pic2.png", // Example image path for Endless Runner Game
        "https://tjv55.blob.core.windows.net/cs212/project3pic.jpg"  // Example image path for Fahrenheit Converter
    ];

    let currentProjectIndex = 0; // Index to keep track of the current project

    const projectsContainer = document.getElementById('projects');

    // Function to display the current project dynamically
    function displayCurrentProject() {
        // Get the current project details
        const title = projectTitles[currentProjectIndex];
        const description = projectDescriptions[currentProjectIndex];
        const deadline = projectDeadlines[currentProjectIndex];
        const imageUrl = projectImages[currentProjectIndex];  // Get the image URL

        // Check if the project is ongoing or completed based on the deadline
        const currentDate = new Date(); // Current date
        const projectDeadline = new Date(deadline); // Convert deadline string to a Date object

        let status = "Ongoing"; // Default to Ongoing
        if (projectDeadline < currentDate) {
            status = "Completed"; // If the deadline is in the past, mark as Completed
        }

        // Create a new project card dynamically
        const projectCard = document.createElement('div');
        projectCard.classList.add('card', 'mb-4');
        projectCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text"><strong>Deadline: </strong>${deadline}</p>
                <p class="card-text"><strong>Status: </strong>${status}</p> <!-- Display status -->
                <img src="${imageUrl}" class="card-img-top" alt="${title}" />
            </div>
        `;

        // Clear existing project cards and append the new one
        const existingProjects = projectsContainer.querySelectorAll('.card');
        existingProjects.forEach(project => project.remove());

        // Append the new project card
        projectsContainer.appendChild(projectCard);

        // Update the index to the next project, or loop back to the first one
        currentProjectIndex = (currentProjectIndex + 1) % projectTitles.length;
    }

    // Display the first project when the page loads
    displayCurrentProject();

    // Update the project every 5 seconds
    setInterval(displayCurrentProject, 5000);


    //Step 5 creat tables with js

    // Define Education Data
    const educationData = [
        { institution: "Northern Arizona University", degree: "BS Cyber Security", duration: "2024-Current" },
        { institution: "Alta Vista Country Club", degree: "Golf Shop Attendant", duration: "2024-Current" }
    ];

    // Define Experience Data
    const experienceData = [
        { company: "Stator Bros", position: "Meat Clerk", duration: "2020-2023" },
        { company: "Snowboarder", position: "Freestyle Expert", duration: "2003-Current" }
    ];

    // Function to create rows dynamically for a given table and data
    function createTableRows(tableId, data) {
        const table = document.getElementById(tableId);
        const tbody = table.querySelector('tbody');
        
        // Loop through data and create rows
        data.forEach(item => {
            const row = document.createElement('tr');
            Object.values(item).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
    }

    // Create Education and Experience Tables
    createTableRows('educationTable', educationData);
    createTableRows('experienceTable', experienceData);



    // Optional - fun
    // 1. Theme Toggle Button
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            // Toggle light and dark theme on the body element
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
        });
    }

    // 2. Customize Font Size and Background Color
    const fontSizeInput = document.getElementById('fontSizeInput');
    const bgColorInput = document.getElementById('bgColorInput');

    // Apply font size change
    if (fontSizeInput) {
        fontSizeInput.addEventListener('input', function () {
            document.body.style.fontSize = fontSizeInput.value + 'px';
        });
    }

    // Apply background color change
    if (bgColorInput) {
        bgColorInput.addEventListener('input', function () {
            document.body.style.backgroundColor = bgColorInput.value;
        });
    }

});
