document.getElementById("addStepButton").addEventListener("click", () => {
    const newStepTitle = prompt("Enter the title for the new step:");
    const newStepDescription = prompt("Enter a description for the new step:");

    if (newStepTitle && newStepDescription) {
        const roadmap = document.getElementById("roadmap");

        const newStep = document.createElement("li");
        const stepTitle = document.createElement("h2");
        const stepDescription = document.createElement("p");

        stepTitle.textContent = newStepTitle;
        stepDescription.textContent = newStepDescription;

        newStep.appendChild(stepTitle);
        newStep.appendChild(stepDescription);

        roadmap.appendChild(newStep);
    } else {
        alert("Both title and description are required to add a new step!");
    }
});
