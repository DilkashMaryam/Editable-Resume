var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Selecting elements with proper TypeScript casting
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var portfolioElement = document.getElementById('portfolio');
    var summaryElement = document.getElementById('summary');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    // Handle gender radio button group
    var genderElements = document.getElementsByName('gender');
    var gender = '';
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }
    // Ensure all required elements are not null
    if (profilePictureInput && nameElement && emailElement && contactElement && portfolioElement && summaryElement
        && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var portfolio = portfolioElement.value;
        var summary = summaryElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create resume output
        var resumeOutput = "\n        <h2>Resume</h2>\n         ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n        <p><strong>Name:</strong> <span id= \"edit-name\" class= \"editable\"> ").concat(name_1, " </span> </p>\n        <p><strong>Email:</strong> <span id= \"edit-edit\" class= \"editable\"> ").concat(email, " </span> </p>\n        <p><strong>Contact:</strong> <span id= \"edit-contact\" class= \"editable\"> ").concat(contact, " </span> </p>\n        <p><strong>Gender:</strong> <span id= \"edit-gender\" class= \"editable\"> ").concat(gender, " </span> </p>\n        <p><strong>Portfolio:</strong> <span id= \"edit-portfolio\" class= \"editable\"> ").concat(portfolio, " </span> </p>\n        <p><strong>Summary:</strong> <span id= \"edit-summary\" class= \"editable\"> ").concat(summary, " </span> </p>\n\n        <h3>Education</h3>\n        <p id= \"edit-education\" class= \"editable\">").concat(education, "</p>\n\n        <h3>Skills</h3>\n        <p id= \"edit-skills\" class= \"editable\">").concat(skills, "</p>\n\n        <h3>Experience</h3>\n        <p id= \"edit-experience\" class= \"editable\">").concat(experience, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('Some required fields are missing.');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = 'currentValue';
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
