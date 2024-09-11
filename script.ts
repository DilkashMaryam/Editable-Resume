document.getElementById('resume-form')?.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    // Selecting elements with proper TypeScript casting
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const contactElement = document.getElementById('contact') as HTMLInputElement | null;
    const portfolioElement = document.getElementById('portfolio') as HTMLInputElement | null;
    const summaryElement = document.getElementById('summary') as HTMLTextAreaElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;

    // Handle gender radio button group
    const genderElements = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
    let gender = '';
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }

    // Ensure all required elements are not null
    if (profilePictureInput && nameElement && emailElement && contactElement && portfolioElement && summaryElement
        && educationElement && skillsElement && experienceElement) {

        const name: string = nameElement.value;
        const email: string = emailElement.value;
        const contact: string = contactElement.value;
        const portfolio: string = portfolioElement.value;
        const summary: string = summaryElement.value;
        const education: string = educationElement.value;
        const skills: string = skillsElement.value;
        const experience: string = experienceElement.value;

        // Handle profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';


        // Create resume output
        const resumeOutput: string = `
        <h2>Resume</h2>
         ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
        <p><strong>Name:</strong> <span id= "edit-name" class= "editable"> ${name} </span> </p>
        <p><strong>Email:</strong> <span id= "edit-edit" class= "editable"> ${email} </span> </p>
        <p><strong>Contact:</strong> <span id= "edit-contact" class= "editable"> ${contact} </span> </p>
        <p><strong>Gender:</strong> <span id= "edit-gender" class= "editable"> ${gender} </span> </p>
        <p><strong>Portfolio:</strong> <span id= "edit-portfolio" class= "editable"> ${portfolio} </span> </p>
        <p><strong>Summary:</strong> <span id= "edit-summary" class= "editable"> ${summary} </span> </p>

        <h3>Education</h3>
        <p id= "edit-education" class= "editable">${education}</p>

        <h3>Skills</h3>
        <p id= "edit-skills" class= "editable">${skills}</p>

        <h3>Experience</h3>
        <p id= "edit-experience" class= "editable">${experience}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
           makeEditable();
        } 
    } else {
        console.error('Some required fields are missing.');
    }
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click' , function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";
        //replace content
        if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
            const input = document.createElement('input')
            input.type = 'text'
            input.value = 'currentValue'
            input.classList.add('editing-input')

            input.addEventListener('blur' , function(){
                currentElement.textContent = input.value;
                currentElement.style.display = 'inline'
                input.remove()
            })

            currentElement.style.display = 'none'
            currentElement.parentNode?.insertBefore(input , currentElement)
            input.focus()
        }
        })
    })
}