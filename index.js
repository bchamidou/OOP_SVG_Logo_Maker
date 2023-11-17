const inquirer = require('inquirer');
const fs = require('fs'); 
const { Triangle, Circle, Square } = require('./lib/shapes');

const canvasWidth = 300;
const canvasHeight = 200;

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
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword OR a hexadecimal number)',
      
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword OR a hexadecimal number):',
      
    },
  ])

  .then((answers) => {
    

    let fontSize;
    let svgData ="";

    svgData =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgData += "<g>";
    svgData += `${answers.shape}`;

    switch (answers.shape) {
      case 'Circle':
        shape = new Circle(); 
        svgData += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`                             
        fontSize = 58;                                                           
        break;
        case 'Triangle':                                   
        shape = new Triangle();
        svgData +=`<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`
          fontSize = 52;                                                         
          break;
      case 'Square':
        shape = new Square();   
        svgData += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`                        
        fontSize = 60;                                                          
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    svgData += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgData+= "</g>";
    svgData += "</svg>";

    fs.writeFileSync(`${__dirname}/logo.svg`, svgData.toString());

    console.log('Generated logo.svg');
  })

  .catch((error) => {
    console.error(error);
  });
