
const inquirer = require("inquirer"); 
const fs = require("fs"); 

const { Triangle, Square, Circle } = require("./lib/shapes");

// Function writes the SVG file using user answers from inquirer prompts

function writeToFile(fileName, answers) { 
  let svgString = ""; 
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'; 
  svgString += "<g>"; 
  svgString += `${answers.shape}`;

  switch (answers.shape) {
    case 'Circle': 
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>` ;                                                       
    break;
    case 'Triangle':  
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    break;
    case 'Square':
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;                                         
    break;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  // "Generated logo.svg" message to the console  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });

}
// Function prompt user answers using inquirer
function promptUser() {
  inquirer
    .prompt([ 
      {
        type:'input',
        name:'title',
        message:'What is your title?',
      },
      {
        type: "input",
        name: "description",
        message: "Briefly describe your project"
      },
      {
        type: "input",
        message:
          "What text would you like you logo to display? (Enter up to three characters)",
        name: "text",
      }, 
      {
        type: "input",
        message:
          "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      }, 
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      }, 
      {
        type: "input",
        message:
          "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },

    ])
    .then((answers) => { 
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else { 
        writeToFile("logo.svg", answers);
      }
    })
    ;
}

promptUser();

