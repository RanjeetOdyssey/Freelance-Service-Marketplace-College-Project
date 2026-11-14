// First JavaScript program

console.log("Welcome to Freelance Service Marketplace!");

let marketplaceName = "Freelance Service Marketplace";
let totalFreelancers = 1;
let websiteStatus = true;

console.log(marketplaceName);
console.log(totalFreelancers);
console.log(websiteStatus);
// Marketplace user calculations

let sampleClients = 3;
let sampleFreelancers = 5;

// Addition operator
let totalMembers = sampleClients + sampleFreelancers;

// Display results
console.log("Total clients:", sampleClients);
console.log("Total freelancers:", sampleFreelancers);
console.log("Total marketplace members:", totalMembers);

// Check data types
console.log(typeof sampleClients);
console.log(typeof totalMembers);
// Freelancer payment calculation

let projectBudget = 5000;

// Platform charges 10% commission
let platformFee = projectBudget * 10 / 100;

// Freelancer's final earning
let freelancerEarning = projectBudget - platformFee;

// Project duration
let deliveryDays = 5;

// Average earning per day
let dailyEarning = freelancerEarning / deliveryDays;

// Display results
console.log("Project Budget:", projectBudget);
console.log("Platform Fee:", platformFee);
console.log("Freelancer Earning:", freelancerEarning);
console.log("Daily Earning:", dailyEarning);

// Modulus operator
let remainder = 17 % 5;
console.log("Remainder:", remainder);

// Project requirement checking

let clientBudget = 3000;
let minimumBudget = 2000;

let requestedDays = 7;
let maximumDays = 10;

// Comparison operators
console.log("Budget is sufficient:", clientBudget >= minimumBudget);

console.log("Delivery time is acceptable:", requestedDays <= maximumDays);

console.log("Budget is exactly 3000:", clientBudget === 3000);

console.log("Budget is not 1000:", clientBudget !== 1000);

// Logical operators in Freelance Marketplace

let hasRequiredSkills = true;
let availableForWork = true;
let hasPortfolio = false;

// AND operator (&&)
let eligibleFreelancer = hasRequiredSkills && availableForWork;

console.log("Eligible Freelancer:", eligibleFreelancer);

// OR operator (||)
let profileComplete = hasPortfolio || hasRequiredSkills;

console.log("Profile Complete:", profileComplete);

// NOT operator (!)
let unavailable = !availableForWork;

console.log("Unavailable:", unavailable);

// Your practice question

let practiceBudget = 5000;
let freelancerPrice = 4000;
let freelancerAvailable = true;

// Complete these two conditions
let priceWithinBudget = freelancerPrice <= practiceBudget;

let canHireFreelancer = priceWithinBudget && freelancerAvailable;

console.log("Within Budget:", priceWithinBudget);
console.log("Can Hire:", canHireFreelancer);
// Conditional statements

let clientBudget2 = 5000;
let freelancerPrice2 = 6000;

if (freelancerPrice2 <= clientBudget2) {
    console.log("Freelancer is eligible for this project.");
} else {
    console.log("Freelancer price exceeds the client's budget.");
}


// =====================================
// CONDITIONAL STATEMENTS IN JAVASCRIPT
// =====================================

// 1. IF - ELSE IF - ELSE

let applicantExperience = 3;

if (applicantExperience >= 5) {
    console.log("Senior Freelancer");
} else if (applicantExperience >= 2) {
    console.log("Intermediate Freelancer");
} else {
    console.log("Beginner Freelancer");
}


// 2. NESTED IF STATEMENT

let projectBudgetCheck = 6000;
let freelancerRateCheck = 4500;
let freelancerAvailableCheck = true;

if (freelancerAvailableCheck === true) {

    if (freelancerRateCheck <= projectBudgetCheck) {
        console.log("Freelancer is eligible for this project.");
    } else {
        console.log("Freelancer price exceeds the budget.");
    }

} else {
    console.log("Freelancer is currently unavailable.");
}


// 3. SWITCH STATEMENT

let projectStatusDemo = "In Progress";

switch (projectStatusDemo) {

    case "Pending":
        console.log("Project is waiting for approval.");
        break;

    case "In Progress":
        console.log("Project work is going on.");
        break;

    case "Completed":
        console.log("Project has been completed.");
        break;

    case "Cancelled":
        console.log("Project has been cancelled.");
        break;

    default:
        console.log("Unknown project status.");
}


// 4. COMBINED PROJECT ELIGIBILITY

let requiredExperience = 2;
let applicantYears = 3;
let applicantIsAvailable = true;
let applicantBudget = 4000;
let clientProjectBudget = 5000;

if (
    applicantYears >= requiredExperience &&
    applicantIsAvailable &&
    applicantBudget <= clientProjectBudget
) {
    console.log("Congratulations! You are eligible to apply.");
} else {
    console.log("Sorry! You do not meet all project requirements.");
}


// =====================================
// 1. FUNCTIONS IN JAVASCRIPT
// =====================================

// Function to display freelancer information
function showFreelancer(name, skill, experience) {
    console.log("Freelancer Name:", name);
    console.log("Freelancer Skill:", skill);
    console.log("Experience:", experience, "years");
}

showFreelancer("Rahul Sharma", "Web Development", 3);


// Function to calculate project budget remaining
function calculateRemainingBudget(budget, freelancerPrice) {
    let remaining = budget - freelancerPrice;
    return remaining;
}

let remainingBudget = calculateRemainingBudget(5000, 4000);

console.log("Remaining Budget:", remainingBudget);


// Function to check freelancer eligibility
function checkEligibility(experience, requiredExperience) {
    if (experience >= requiredExperience) {
        return "Eligible Freelancer";
    } else {
        return "Not Eligible";
    }
}

console.log(checkEligibility(3, 2));


// =====================================
// 2. ARRAYS IN JAVASCRIPT
// =====================================

// Store multiple service categories
let serviceCategories = [
    "Web Development",
    "Graphic Design",
    "Video Editing",
    "Content Writing",
    "Digital Marketing"
];

// Display complete array
console.log("All Categories:", serviceCategories);

// Access array elements
console.log("First Category:", serviceCategories[0]);
console.log("Second Category:", serviceCategories[1]);

// Count array elements
console.log("Total Categories:", serviceCategories.length);

// Add a new category
serviceCategories.push("AI and Machine Learning");

console.log("Updated Categories:", serviceCategories);

// Remove the last category
serviceCategories.pop();

console.log("After Removing Last Category:", serviceCategories);


// =====================================
// 3. OBJECTS IN JAVASCRIPT
// =====================================

// Create a freelancer object
let freelancerProfile = {
    name: "Rahul Sharma",
    age: 23,
    profession: "Web Developer",
    experience: 3,
    available: true,
    skills: ["HTML", "CSS", "JavaScript"]
};

// Access object properties
console.log("Name:", freelancerProfile.name);
console.log("Profession:", freelancerProfile.profession);
console.log("Experience:", freelancerProfile.experience);

// Access an array inside an object
console.log("First Skill:", freelancerProfile.skills[0]);

// Update an object property
freelancerProfile.experience = 4;

console.log("Updated Experience:", freelancerProfile.experience);

// Add a new object property
freelancerProfile.location = "India";

console.log("Location:", freelancerProfile.location);


// =====================================
// 4. COMBINE ARRAYS AND OBJECTS
// =====================================

// Store multiple freelancer profiles
let freelancerList = [
    {
        name: "Rahul",
        skill: "Web Development",
        price: 4000
    },
    {
        name: "Aman",
        skill: "Graphic Design",
        price: 2500
    },
    {
        name: "Priya",
        skill: "Video Editing",
        price: 3000
    }
];

// Display all freelancer profiles
console.log("Freelancer List:", freelancerList);

// Display first freelancer
console.log("First Freelancer:", freelancerList[0].name);

// Display second freelancer's skill
console.log("Second Freelancer Skill:", freelancerList[1].skill);

// Count freelancers
console.log("Total Freelancers:", freelancerList.length);


// ========================================
// DOM MANIPULATION AND EVENT HANDLING
// ========================================

// 1. Select HTML elements

const freelancerSearchInput =
    document.getElementById("freelancer-search");

const freelancerSearchButton =
    document.getElementById("search-freelancers");

const freelancerCards =
    document.querySelectorAll("#freelancers article");


// 2. Create a message element dynamically

if (
    freelancerSearchInput &&
    freelancerSearchButton &&
    freelancerCards.length > 0
) {

    const searchMessage = document.createElement("p");

    searchMessage.className = "search-message";

    searchMessage.setAttribute("aria-live", "polite");

    freelancerSearchButton.insertAdjacentElement(
        "afterend",
        searchMessage
    );


    // 3. Add click event to search button

    freelancerSearchButton.addEventListener("click", function () {

        const searchTerm =
            freelancerSearchInput.value.trim().toLowerCase();

        let visibleFreelancers = 0;


        // 4. Check every freelancer profile

        freelancerCards.forEach(function (card) {

            const cardContent =
                card.textContent.toLowerCase();

            const isMatch =
                searchTerm === "" ||
                cardContent.includes(searchTerm);


            // Show or hide freelancer profile

            if (isMatch) {
                card.style.display = "";
                visibleFreelancers++;
            } else {
                card.style.display = "none";
            }

        });


        // 5. Display search results

        if (searchTerm === "") {

            searchMessage.textContent =
                "Showing all freelancers.";

        } else if (visibleFreelancers > 0) {

            searchMessage.textContent =
                visibleFreelancers + " freelancer(s) found.";

        } else {

            searchMessage.textContent =
                "No matching freelancers found.";

        }

    });


    // 6. Search when Enter key is pressed

    freelancerSearchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {
                freelancerSearchButton.click();
            }

        }
    );

} else {

    console.warn(
        "Freelancer search elements were not found. Check the HTML IDs."
    );

}

// ========================================
// FORM VALIDATION AND SUBMISSION
// ========================================

// Reusable function for handling forms

function setupDemoForm(formId, successMessage) {

    const form = document.getElementById(formId);

    if (!form) {
        console.warn("Form not found:", formId);
        return;
    }

    // Create a feedback message element

    const feedback = document.createElement("p");

    feedback.className = "form-feedback";

    feedback.setAttribute("aria-live", "polite");

    form.appendChild(feedback);


    // Handle form submission

    form.addEventListener("submit", function (event) {

        // Prevent actual page submission

        event.preventDefault();

        const fields = form.querySelectorAll(
            "input, select, textarea"
        );

        let firstInvalidField = null;


        // Check all form fields

        for (const field of fields) {

            field.setCustomValidity("");

            if (field.value.trim() === "") {

                field.setCustomValidity(
                    "Please complete this field."
                );

                if (!firstInvalidField) {
                    firstInvalidField = field;
                }

            }

        }


        // Show validation error

        if (firstInvalidField) {

            firstInvalidField.reportValidity();

            feedback.textContent =
                "Please complete all fields before submitting.";

            feedback.classList.add("error");

            return;
        }


        // Show successful demo submission

        feedback.textContent = successMessage;

        feedback.classList.remove("error");

        saveDemoSubmission(formId, form);

        form.reset();

    });


    // Clear custom error when user edits a field

    form.addEventListener("input", function (event) {

        event.target.setCustomValidity("");

    });

    form.addEventListener("change", function (event) {

        event.target.setCustomValidity("");

    });

}


// Activate project request form

setupDemoForm(
    "project-form",
    "Your project request passed validation in this demo!"
);


// Activate proposal submission form

setupDemoForm(
    "proposal-form",
    "Your proposal passed validation in this demo!"
);


// ========================================
// LOCAL STORAGE - SAVE FORM SUBMISSIONS
// ========================================

function saveDemoSubmission(formId, form) {

    try {

        // Select the correct storage location

        let storageKey;

        if (formId === "project-form") {

            storageKey = "marketplaceProjects";

        } else if (formId === "proposal-form") {

            storageKey = "marketplaceProposals";

        } else {

            return false;

        }


        // Collect all form field information

        const fields = Array.from(
            form.querySelectorAll("input, select, textarea")
        ).map(function (field, index) {

            let fieldLabel = field.name || field.id || "Field " + (index + 1);

            if (field.labels && field.labels.length > 0) {
                fieldLabel = field.labels[0].textContent.trim();
            }

            return {
                field: fieldLabel,
                value: field.value.trim()
            };

        });


        // Create a submission record

        const submission = {

            id: Date.now(),

            submittedAt: new Date().toLocaleString(),

            fields: fields

        };


        // Retrieve previously saved submissions

        const existingRecords = JSON.parse(
            localStorage.getItem(storageKey) || "[]"
        );


        // Add the new submission

        existingRecords.push(submission);


        // Save updated records

        localStorage.setItem(
            storageKey,
            JSON.stringify(existingRecords)
        );

        if (formId === "project-form") {
    populateProposalProjectOptions();
}

        console.log("Submission saved successfully:", submission);

        return true;


    } catch (error) {

        console.error("Storage error:", error);

        return false;

    }

}


// ========================================
// DISPLAY SAVED PROJECTS AND PROPOSALS
// ========================================

// Function to display saved records

function renderSavedRecords(container, records, title) {

    container.textContent = "";

    if (records.length === 0) {

        const message = document.createElement("p");

        message.textContent = "No records available yet.";

        container.appendChild(message);

        return;
    }

    records.forEach(function (record, index) {

        const card = document.createElement("div");

        card.className = "saved-record";

        const heading = document.createElement("h3");

        heading.textContent = title + " " + (index + 1);

        const date = document.createElement("p");

        date.textContent = "Submitted: " + record.submittedAt;

        const list = document.createElement("ul");

        record.fields.forEach(function (item) {

            const listItem = document.createElement("li");

            const label = document.createElement("strong");

            label.textContent = item.field + ": ";

            const value = document.createElement("span");

            value.textContent = item.value;

            listItem.appendChild(label);

            listItem.appendChild(value);

            list.appendChild(listItem);

        });

        card.appendChild(heading);

        card.appendChild(date);

        card.appendChild(list);

        container.appendChild(card);

    });

}


// Load saved dashboard information

function loadDashboardRecords() {

    const clientContainer =
        document.getElementById("client-project-list");

    const freelancerContainer =
        document.getElementById("freelancer-proposal-list");


    const savedProjects = JSON.parse(
        localStorage.getItem("marketplaceProjects") || "[]"
    );

    const savedProposals = JSON.parse(
        localStorage.getItem("marketplaceProposals") || "[]"
    );


    if (clientContainer) {

        renderSavedRecords(
            clientContainer,
            savedProjects,
            "Project Request"
        );

    }


    if (freelancerContainer) {

        renderSavedRecords(
            freelancerContainer,
            savedProposals,
            "Freelancer Proposal"
        );

    }

}


// Run when the webpage loads

loadDashboardRecords();


// ========================================
// PROJECT STATUS TRACKING
// ========================================

function addProjectStatusControls() {

    const container = document.getElementById(
        "client-project-list"
    );

    if (!container) {
        return;
    }

    // Retrieve saved project requests

    let projects = JSON.parse(
        localStorage.getItem("marketplaceProjects") || "[]"
    );

    const projectCards =
        container.querySelectorAll(".saved-record");

    const availableStatuses = [
        "Pending",
        "In Progress",
        "Completed",
        "Cancelled"
    ];


    // Add status controls to every project

    projectCards.forEach(function (card, index) {

        const project = projects[index];

        if (!project) {
            return;
        }

        // Give old projects a default status

        if (!project.status) {
            project.status = "Pending";
        }

        const statusContainer =
            document.createElement("div");

        statusContainer.className =
            "project-status-control";

        const label = document.createElement("label");

        label.textContent = "Project Status: ";

        label.setAttribute(
            "for",
            "project-status-" + project.id
        );

        const select = document.createElement("select");

        select.id = "project-status-" + project.id;

        // Create status options

        availableStatuses.forEach(function (status) {

            const option = document.createElement("option");

            option.value = status;
            option.textContent = status;

            select.appendChild(option);

        });


        // Display currently saved status

        select.value = project.status;

        // Save status when changed

        select.addEventListener("change", function () {

            project.status = select.value;

            localStorage.setItem(
                "marketplaceProjects",
                JSON.stringify(projects)
            );

            statusMessage.textContent =
                "Project status saved successfully!";

        });

        const statusMessage =
            document.createElement("p");

        statusMessage.className = "status-message";

        statusContainer.appendChild(label);

        statusContainer.appendChild(select);

        statusContainer.appendChild(statusMessage);

        card.appendChild(statusContainer);

    });


    // Save default statuses for existing projects

    localStorage.setItem(
        "marketplaceProjects",
        JSON.stringify(projects)
    );

}


// Initialize project status controls

addProjectStatusControls();


// ========================================
// DYNAMIC PROJECT LISTING AND SEARCH
// ========================================

const availableProjectContainer =
    document.getElementById("available-project-list");

const projectSearchInput =
    document.getElementById("project-search");

const projectBudgetFilter =
    document.getElementById("project-budget-filter");

const projectSearchButton =
    document.getElementById("search-projects");


// Function to get a field value from a saved project

function getProjectField(project, pattern) {

    const field = project.fields.find(function (item) {
        return pattern.test(item.field);
    });

    return field ? field.value : "";

}


// Function to extract a number from a budget

function getProjectBudget(project) {

    const budgetText = getProjectField(
        project,
        /budget|amount/i
    );

    const number = budgetText
        .replace(/,/g, "")
        .match(/\d+(\.\d+)?/);

    return number ? Number(number[0]) : 0;

}


// Function to check budget filter

function matchesBudget(project) {

    if (!projectBudgetFilter) {
        return true;
    }

    const selectedValue =
        projectBudgetFilter.value.toLowerCase();

    const selectedOption =
        projectBudgetFilter.options[
            projectBudgetFilter.selectedIndex
        ];

    const selectedText =
        selectedOption
            ? selectedOption.textContent.toLowerCase()
            : "";

    const filterText = selectedValue + " " + selectedText;

    if (
        selectedValue === "" ||
        /all|any|select|choose/i.test(filterText)
    ) {
        return true;
    }

    const numbers = filterText.match(/\d+(\.\d+)?/g);

    const projectBudget = getProjectBudget(project);

    if (projectBudget === 0 || !numbers) {
        return true;
    }

    const limits = numbers.map(Number);

    if (/under|below|less|maximum|up to/i.test(filterText)) {
        return projectBudget <= limits[0];
    }

    if (/above|over|more|minimum/i.test(filterText)) {
        return projectBudget >= limits[0];
    }

    if (limits.length >= 2) {
        return (
            projectBudget >= limits[0] &&
            projectBudget <= limits[1]
        );
    }

    return projectBudget <= limits[0];

}


// Function to display projects

function renderAvailableProjects() {

    if (!availableProjectContainer) {
        return;
    }

    const savedProjects = JSON.parse(
        localStorage.getItem("marketplaceProjects") || "[]"
    );

    const searchTerm = projectSearchInput
        ? projectSearchInput.value.trim().toLowerCase()
        : "";

    // Filter projects

    const filteredProjects = savedProjects.filter(
        function (project) {

            const allProjectText = project.fields
                .map(function (field) {
                    return field.value;
                })
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                allProjectText.includes(searchTerm);

            return (
                matchesSearch &&
                matchesBudget(project)
            );

        }
    );


    // Clear old listings

    availableProjectContainer.textContent = "";


    // Show message when no projects exist

    if (filteredProjects.length === 0) {

        const message = document.createElement("p");

        message.textContent =
            savedProjects.length === 0
                ? "No projects have been posted yet."
                : "No projects match your search.";

        availableProjectContainer.appendChild(message);

        return;
    }


    // Create project cards

    filteredProjects.forEach(function (project, index) {

        const card = document.createElement("article");

        card.className = "available-project-card";

        const title = document.createElement("h3");

        title.textContent = getProjectField(
            project,
            /title|project name/i
        ) || "Project Request " + (index + 1);


        const description = document.createElement("p");

        description.textContent = getProjectField(
            project,
            /description|requirements|details/i
        );


        const category = document.createElement("p");

        category.textContent =
            "Category: " +
            (
                getProjectField(project, /category/i) ||
                "Not specified"
            );


        const budget = document.createElement("p");

        budget.textContent =
            "Budget: " +
            (
                getProjectField(project, /budget|amount/i) ||
                "Not specified"
            );


        const date = document.createElement("p");

        date.textContent =
            "Posted: " + project.submittedAt;


        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(category);
        card.appendChild(budget);
        card.appendChild(date);

        availableProjectContainer.appendChild(card);

    });

}


// Search button event

if (projectSearchButton) {

    projectSearchButton.addEventListener(
        "click",
        renderAvailableProjects
    );

}


// Search when Enter is pressed

if (projectSearchInput) {

    projectSearchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {
                renderAvailableProjects();
            }

        }
    );

}


// Apply budget filter immediately

if (projectBudgetFilter) {

    projectBudgetFilter.addEventListener(
        "change",
        renderAvailableProjects
    );

}


// Display projects when website opens

renderAvailableProjects();

// ========================================
// CLIENT DASHBOARD - RECEIVED PROPOSALS
// ========================================

function displayClientProposals() {

    // Find the proposal container

    const container = document.getElementById(
        "client-proposal-list"
    );

    if (!container) {
        return;
    }

    // Get saved proposals

    const proposals = JSON.parse(
        localStorage.getItem("marketplaceProposals") || "[]"
    );

    // Display saved proposals

    renderSavedRecords(
        container,
        proposals,
        "Received Proposal"
    );

    console.log(
        "Client Dashboard Proposals:",
        proposals.length
    );

}


// Run the function

displayClientProposals();

// ========================================
// DYNAMIC PROJECT SELECTION IN PROPOSAL FORM
// ========================================

function populateProposalProjectOptions() {

    // Find the proposal form

    const proposalForm = document.getElementById(
        "proposal-form"
    );

    if (!proposalForm) {
        return;
    }

    // Find the project selection dropdown

    const projectSelect = proposalForm.querySelector("select");

    if (!projectSelect) {
        console.warn("Project selection dropdown not found.");
        return;
    }

    // Get previously saved projects

    let projects = [];

    try {

        projects = JSON.parse(
            localStorage.getItem("marketplaceProjects") || "[]"
        );

        if (!Array.isArray(projects)) {
            projects = [];
        }

    } catch (error) {

        console.error("Could not load saved projects:", error);

    }

    // Remember current selection

    const previousValue = projectSelect.value;

    // Clear existing options

    projectSelect.textContent = "";

    // Create first placeholder option

    const placeholder = document.createElement("option");

    placeholder.value = "";

    placeholder.textContent =
        projects.length > 0
            ? "Select a client project"
            : "No project requests available";

    projectSelect.appendChild(placeholder);


    // Add every saved project

    projects.forEach(function (project, index) {

        const titleField = project.fields.find(
            function (item) {
                return /title|project name/i.test(item.field);
            }
        );

        const projectTitle = titleField
            ? titleField.value
            : "Project Request " + (index + 1);


        const option = document.createElement("option");

        option.value = projectTitle;

        option.textContent = projectTitle;

        projectSelect.appendChild(option);

    });


    // Restore the previous selection when possible

    const previousOptionExists = Array.from(
        projectSelect.options
    ).some(function (option) {
        return option.value === previousValue;
    });

    if (previousOptionExists) {
        projectSelect.value = previousValue;
    }

    console.log(
        "Proposal project options updated:",
        projects.length
    );

}


// Populate dropdown when the website opens

populateProposalProjectOptions();


// ========================================
// FREELANCER SEARCH AND CATEGORY FILTER
// ========================================

function applyMarketplaceFreelancerFilters() {

    const searchInput =
        document.getElementById("freelancer-search");

    const categorySelect =
        document.getElementById("freelancer-category");

    const searchButton =
        document.getElementById("search-freelancers");

    const freelancerCards =
        document.querySelectorAll("#freelancers article");

    if (!searchInput || !categorySelect || freelancerCards.length === 0) {
        return;
    }

    // Read search text

    const searchTerm =
        searchInput.value.trim().toLowerCase();

    // Read selected category

    const selectedOption =
        categorySelect.options[categorySelect.selectedIndex];

    const selectedCategory = selectedOption
        ? selectedOption.textContent.trim().toLowerCase()
        : "";

    // Category matching alternatives

    const categoryAliases = {

        "web development": [
            "web development",
            "web developer",
            "website development",
            "html",
            "javascript"
        ],

        "graphic design": [
            "graphic design",
            "graphic designer"
        ],

        "video editing": [
            "video editing",
            "video editor"
        ],

        "content writing": [
            "content writing",
            "content writer"
        ],

        "digital marketing": [
            "digital marketing",
            "seo"
        ]

    };

    const noCategorySelected =
        !selectedCategory ||
        /all|select|choose|category/i.test(selectedCategory);

    const categoryTerms = noCategorySelected
        ? []
        : categoryAliases[selectedCategory] || [selectedCategory];

    let visibleCount = 0;

    // Check every freelancer card

    freelancerCards.forEach(function (card) {

        const cardText =
            card.textContent.toLowerCase();

        const matchesSearch =
            cardText.includes(searchTerm);

        const matchesCategory =
            categoryTerms.length === 0 ||
            categoryTerms.some(function (term) {
                return cardText.includes(term);
            });

        const shouldDisplay =
            matchesSearch && matchesCategory;

        card.style.display =
            shouldDisplay ? "" : "none";

        if (shouldDisplay) {
            visibleCount++;
        }

    });


    // Display search feedback

    let message = document.getElementById(
        "freelancer-filter-message"
    );

    if (!message) {

        message = document.createElement("p");

        message.id = "freelancer-filter-message";

        message.setAttribute("aria-live", "polite");

        if (searchButton) {
            searchButton.insertAdjacentElement(
                "afterend",
                message
            );
        }

    }

    message.textContent =
        visibleCount + " freelancer(s) found.";

}


// Search button click

const marketplaceSearchButton =
    document.getElementById("search-freelancers");

if (marketplaceSearchButton) {

    marketplaceSearchButton.addEventListener(
        "click",
        applyMarketplaceFreelancerFilters
    );

}


// Category selection change

const marketplaceCategorySelect =
    document.getElementById("freelancer-category");

if (marketplaceCategorySelect) {

    marketplaceCategorySelect.addEventListener(
        "change",
        applyMarketplaceFreelancerFilters
    );

}


// Live search while typing

const marketplaceSearchInput =
    document.getElementById("freelancer-search");

if (marketplaceSearchInput) {

    marketplaceSearchInput.addEventListener(
        "input",
        applyMarketplaceFreelancerFilters
    );

}


// Initial display

applyMarketplaceFreelancerFilters();


// ========================================
// SERVICE LISTING PRESENTATION
// ========================================

function displayServiceListingInformation() {

    const serviceCards = document.querySelectorAll(
        "#services article"
    );

    serviceCards.forEach(function (card) {

        card.setAttribute("aria-label", "Marketplace service");

        card.classList.add("marketplace-service-card");

    });

}

displayServiceListingInformation();


// ========================================
// MATCH PROPOSALS WITH CLIENT PROJECTS
// ========================================

// Get a field value from a saved record

function getSavedFieldValue(record, pattern) {

    const field = record.fields.find(function (item) {

        return pattern.test(item.field);

    });

    return field ? field.value : "";

}


// Display proposals under their matching projects

function displayMatchedProposals() {

    const clientContainer = document.getElementById(
        "client-project-list"
    );

    if (!clientContainer) {
        return;
    }


    // Get saved projects and proposals

    const projects = JSON.parse(
        localStorage.getItem("marketplaceProjects") || "[]"
    );

    const proposals = JSON.parse(
        localStorage.getItem("marketplaceProposals") || "[]"
    );


    const projectCards = clientContainer.querySelectorAll(
        ".saved-record"
    );


    // Match proposals with each project

    projects.forEach(function (project, index) {

        const projectCard = projectCards[index];

        if (!projectCard) {
            return;
        }


        // Get project title

        const projectTitle = getSavedFieldValue(
            project,
            /title|project name/i
        );


        // Find matching proposals

        const matchingProposals = proposals.filter(
            function (proposal) {

                const selectedProject = getSavedFieldValue(
                    proposal,
                    /project/i
                );

                return (
                    selectedProject.trim().toLowerCase() ===
                    projectTitle.trim().toLowerCase()
                );

            }
        );


        // Create proposal section

        const proposalSection = document.createElement("div");

        proposalSection.className = "matched-proposals";


        const heading = document.createElement("h4");

        heading.textContent =
            "Proposals Received (" +
            matchingProposals.length +
            ")";

        proposalSection.appendChild(heading);


        // Show message if no proposals exist

        if (matchingProposals.length === 0) {

            const message = document.createElement("p");

            message.textContent =
                "No proposals received for this project yet.";

            proposalSection.appendChild(message);

        }


        // Display matching proposals

        matchingProposals.forEach(function (proposal, proposalIndex) {

            const proposalCard = document.createElement("div");

            proposalCard.className = "matched-proposal";


            const freelancerName = getSavedFieldValue(
                proposal,
                /freelancer name|your name|^name$/i
            );

            const proposedBudget = getSavedFieldValue(
                proposal,
                /budget|price|amount/i
            );

            const completionDays = getSavedFieldValue(
                proposal,
                /days|duration|delivery time/i
            );

            const description = getSavedFieldValue(
                proposal,
                /description|proposal details/i
            );


            const nameHeading = document.createElement("h5");

            nameHeading.textContent =
                "Proposal " + (proposalIndex + 1) +
                " - " + (freelancerName || "Freelancer");


            const budgetText = document.createElement("p");

            budgetText.textContent =
                "Proposed Budget: " +
                (proposedBudget || "Not specified");


            const durationText = document.createElement("p");

            durationText.textContent =
                "Completion Time: " +
                (completionDays || "Not specified");


            const descriptionText = document.createElement("p");

            descriptionText.textContent =
                "Proposal Details: " +
                (description || "No description provided");


            proposalCard.appendChild(nameHeading);

            proposalCard.appendChild(budgetText);

            proposalCard.appendChild(durationText);

            proposalCard.appendChild(descriptionText);

            proposalSection.appendChild(proposalCard);

        });


        // Remove the previous matching section

        const oldSection = projectCard.querySelector(
            ".matched-proposals"
        );

        if (oldSection) {
            oldSection.remove();
        }


        // Attach updated proposal section

        projectCard.appendChild(proposalSection);

    });

}


// Display matched proposals when the page loads

displayMatchedProposals();


// Update matching proposals after a new submission

const matchingProposalForm = document.getElementById(
    "proposal-form"
);

if (matchingProposalForm) {

    matchingProposalForm.addEventListener(
        "submit",
        displayMatchedProposals
    );

}


// ========================================
// PROPOSAL ACCEPTANCE AND REJECTION
// ========================================

function saveProposalDecision(proposalId, decision, message) {

    try {

        // Retrieve saved proposals

        const proposals = JSON.parse(
            localStorage.getItem("marketplaceProposals") || "[]"
        );

        // Find the selected proposal

        const selectedProposal = proposals.find(
            function (proposal) {
                return String(proposal.id) === String(proposalId);
            }
        );

        if (!selectedProposal) {

            message.textContent = "Proposal not found.";

            return;

        }

        // Save client decision

        selectedProposal.decision = decision;

        localStorage.setItem(
            "marketplaceProposals",
            JSON.stringify(proposals)
        );

        // Display updated decision

        message.textContent =
            "Proposal status: " + decision;

        console.log("Proposal decision saved:", decision);

    } catch (error) {

        console.error("Could not save proposal decision:", error);

        message.textContent =
            "Unable to save the decision.";

    }

}


// Add decision buttons to every proposal

function addProposalDecisionControls() {

    const container = document.getElementById(
        "client-project-list"
    );

    if (!container) {
        return;
    }

    const projects = JSON.parse(
        localStorage.getItem("marketplaceProjects") || "[]"
    );

    const proposals = JSON.parse(
        localStorage.getItem("marketplaceProposals") || "[]"
    );

    const projectCards = container.querySelectorAll(
        ".saved-record"
    );


    // Process every project

    projects.forEach(function (project, projectIndex) {

        const projectCard = projectCards[projectIndex];

        if (!projectCard) {
            return;
        }

        const projectTitle = getSavedFieldValue(
            project,
            /title|project name/i
        );

        // Find proposals for this project

        const matchingProposals = proposals.filter(
            function (proposal) {

                const selectedProject = getSavedFieldValue(
                    proposal,
                    /project/i
                );

                return (
                    selectedProject.trim().toLowerCase() ===
                    projectTitle.trim().toLowerCase()
                );

            }
        );


        const proposalCards = projectCard.querySelectorAll(
            ".matched-proposal"
        );


        matchingProposals.forEach(
            function (proposal, proposalIndex) {

                const proposalCard =
                    proposalCards[proposalIndex];

                if (!proposalCard) {
                    return;
                }

                // Remove old controls if they exist

                const oldControls = proposalCard.querySelector(
                    ".proposal-decision-controls"
                );

                if (oldControls) {
                    oldControls.remove();
                }


                // Create decision controls

                const controls = document.createElement("div");

                controls.className =
                    "proposal-decision-controls";


                // Display current decision

                const decisionMessage =
                    document.createElement("p");

                decisionMessage.className =
                    "proposal-decision-message";

                decisionMessage.setAttribute(
                    "aria-live",
                    "polite"
                );

                decisionMessage.textContent =
                    "Proposal Status: " +
                    (proposal.decision || "Pending");


                // Accept button

                const acceptButton =
                    document.createElement("button");

                acceptButton.type = "button";

                acceptButton.textContent = "Accept Proposal";

                acceptButton.className =
                    "accept-proposal-button";


                // Reject button

                const rejectButton =
                    document.createElement("button");

                rejectButton.type = "button";

                rejectButton.textContent = "Reject Proposal";

                rejectButton.className =
                    "reject-proposal-button";


                // Accept proposal action

                acceptButton.addEventListener(
                    "click",
                    function () {

                        saveProposalDecision(
                            proposal.id,
                            "Accepted",
                            decisionMessage
                        );

                    }
                );


                // Reject proposal action

                rejectButton.addEventListener(
                    "click",
                    function () {

                        saveProposalDecision(
                            proposal.id,
                            "Rejected",
                            decisionMessage
                        );

                    }
                );


                // Add controls to proposal card

                controls.appendChild(decisionMessage);

                controls.appendChild(acceptButton);

                controls.appendChild(rejectButton);

                proposalCard.appendChild(controls);

            }

        );

    });

}


// Display proposal decision controls initially

addProposalDecisionControls();


// Refresh controls after a new proposal submission

const decisionProposalForm =
    document.getElementById("proposal-form");

if (decisionProposalForm) {

    decisionProposalForm.addEventListener(
        "submit",
        addProposalDecisionControls
    );

}


// ========================================
// SYNCHRONIZE PROJECT AND PROPOSAL STATUS
// ========================================

function updateMarketplaceStatusDisplays() {

    // Retrieve saved marketplace information

    let projects = [];
    let proposals = [];

    try {

        projects = JSON.parse(
            localStorage.getItem("marketplaceProjects") || "[]"
        );

        proposals = JSON.parse(
            localStorage.getItem("marketplaceProposals") || "[]"
        );

        if (!Array.isArray(projects)) projects = [];
        if (!Array.isArray(proposals)) proposals = [];

    } catch (error) {

        console.error(
            "Unable to retrieve marketplace information:",
            error
        );

        return;

    }


    // ====================================
    // 1. UPDATE PUBLIC PROJECT LISTINGS
    // ====================================

    const publicProjectCards = document.querySelectorAll(
        "#available-project-list .available-project-card"
    );

    publicProjectCards.forEach(function (card) {

        const heading = card.querySelector("h3");

        if (!heading) return;

        const project = projects.find(function (item) {

            const title = getSavedFieldValue(
                item,
                /title|project name/i
            );

            return title === heading.textContent;

        });

        if (!project) return;


        const status = document.createElement("p");

        status.className = "project-listing-status";

        status.textContent =
            "Project Status: " +
            (project.status || "Pending");


        const relatedProposals = proposals.filter(
            function (proposal) {

                const selectedProject = getSavedFieldValue(
                    proposal,
                    /project/i
                );

                return (
                    selectedProject.trim().toLowerCase() ===
                    heading.textContent.trim().toLowerCase()
                );

            }
        );


        const proposalCount = document.createElement("p");

        proposalCount.className = "project-proposal-count";

        proposalCount.textContent =
            "Proposals Received: " + relatedProposals.length;


        card.appendChild(status);

        card.appendChild(proposalCount);

    });


    // ====================================
    // 2. UPDATE FREELANCER DASHBOARD
    // ====================================

    const freelancerContainer = document.getElementById(
        "freelancer-proposal-list"
    );

    if (!freelancerContainer) return;


    const proposalCards = freelancerContainer.querySelectorAll(
        ".saved-record"
    );


    proposals.forEach(function (proposal, index) {

        const card = proposalCards[index];

        if (!card) return;


        // Show client's decision

        const decision = document.createElement("p");

        decision.className = "freelancer-proposal-status";

        decision.textContent =
            "Client Decision: " +
            (proposal.decision || "Pending Review");


        // Find related project

        const selectedProject = getSavedFieldValue(
            proposal,
            /project/i
        );

        const relatedProject = projects.find(
            function (project) {

                const title = getSavedFieldValue(
                    project,
                    /title|project name/i
                );

                return (
                    title.trim().toLowerCase() ===
                    selectedProject.trim().toLowerCase()
                );

            }
        );


        const projectStatus = document.createElement("p");

        projectStatus.className = "freelancer-project-status";

        projectStatus.textContent =
            "Related Project Status: " +
            (
                relatedProject
                    ? relatedProject.status || "Pending"
                    : "Project not found"
            );


        card.appendChild(decision);

        card.appendChild(projectStatus);

    });

}


// Update dashboard and listing information

updateMarketplaceStatusDisplays();


// ========================================
// ACCESSIBILITY IMPROVEMENTS
// ========================================

(function improveAccessibility() {

    // Find main webpage elements

    const mainContent = document.querySelector("main");

    const websiteHeader = document.querySelector("header");


    // Add a Skip to Main Content link

    if (
        mainContent &&
        websiteHeader &&
        !document.querySelector(".skip-link")
    ) {

        if (!mainContent.id) {
            mainContent.id = "main-content";
        }

        const skipLink = document.createElement("a");

        skipLink.className = "skip-link";

        skipLink.href = "#" + mainContent.id;

        skipLink.textContent = "Skip to main content";

        websiteHeader.parentNode.insertBefore(
            skipLink,
            websiteHeader
        );

    }


    // Give navigation menus accessible names

    const mainNavigation = document.querySelector(
        "header nav"
    );

    if (mainNavigation) {

        mainNavigation.setAttribute(
            "aria-label",
            "Main navigation"
        );

    }


    const footerNavigation = document.querySelector(
        "footer nav"
    );

    if (footerNavigation) {

        footerNavigation.setAttribute(
            "aria-label",
            "Footer navigation"
        );

    }


    // Add accessible names to search controls

    const searchControls = [

        [
            "freelancer-search",
            "Search freelancers by name or skill"
        ],

        [
            "freelancer-category",
            "Filter freelancers by category"
        ],

        [
            "project-search",
            "Search projects by title or description"
        ],

        [
            "project-budget-filter",
            "Filter projects by budget"
        ]

    ];


    searchControls.forEach(function (control) {

        const element = document.getElementById(control[0]);

        if (element && !element.hasAttribute("aria-label")) {

            element.setAttribute("aria-label", control[1]);

        }

    });


    // Announce dynamic results to assistive technology

    const dynamicContainers = [

        "available-project-list",
        "client-project-list",
        "client-proposal-list",
        "freelancer-proposal-list"

    ];


    dynamicContainers.forEach(function (id) {

        const element = document.getElementById(id);

        if (element && !element.hasAttribute("aria-live")) {

            element.setAttribute("aria-live", "polite");

        }

    });


    console.log("Accessibility improvements initialized.");

})();
