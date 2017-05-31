var myName = "C. Samuel Sullivan"
var myJob = "Full-Time Millennial"
var myBio = "Aspiring Social Entrepreneur"
var blankSpace = " "

//HEADER
console.log(myName.toUpperCase());
console.log("Job: " + myJob);
console.log("Bio: " + myBio);
console.log(blankSpace);

//SECTION: Interests
console.log("INTERESTS:");
console.log("* Running, hiking, climbing");
console.log("* Reading, painting");
console.log("* Traveling");
console.log(blankSpace);

//SECTION: Previous Experience
console.log("PREVIOUS EXPERIENCE:")
function displayPosition (name, job, description) {
    console.log("* " + name + " @ " + job + ": " + description);
}

displayPosition("Museum Educator", "Creative Discovery Museum", "Interpretating, Programming, Special Education");
displayPosition("Leadership Board Officer", "She's the First", "Operations, Communicating, Liaising");
displayPosition("Student Researcher", "Marine/Reptile Ethology Lab", "Ethogram coding, Lab husbandry", "Monitoring play");
console.log(blankSpace);

//SECTION: Skills
console.log("SKILLS")
function displaySkill (skillItem, boolean) {
    if (skillItem.length < 7){
        console.log("* " + "BAM: " + skillItem);
    } else if (skillItem.length > 20) {
        console.log("* " + "BAM: " + skillItem);
    } else {
        console.log("* " + skillItem);
    }
}
displaySkill ("Communicating");
displaySkill ("Public Speaking");
displaySkill ("Branding and Identity");
displaySkill ("Event Planning");
displaySkill ("Noldus Observer XT");
displaySkill ("Sewing");