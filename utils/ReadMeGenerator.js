    // TODO: Create a function that returns a license badge based on which license is passed in
    // If there is no license, return an empty string

    function renderLicenseBadge(license) {
        let badge = "";
    
        if(license != 'No License') {
            badge = "https://img.shields.io/badge/License-MIT%20License-blue";
        }
    
        return badge;
        }
        
    // TODO: Create a function that returns the license link
    // If there is no license, return an empty string
    
        function renderLicenseLink(license) {
        let licenseLink='';
        console.log(license)
        // select correct license link for the selected license
        if(license === 'MIT License') { 
            licenseLink = "https://mit-license.org/";
            }else if (license =  "GNU GPLv3"){ 
            licenseLink = "https://www.gnu.org/licenses/gpl-3.0.md";
            }else if (license ===  "GNU LGPLv3") {
            licenseLink = "https://www.gnu.org/licenses/lgpl-3.0.md";
            }else if (license === "The Unlicense"){ 
            licenseLink = "https://unlicense.org/";
        } else {
            licenseLink = "hhjjioop";
        }
        console.log(licenseLink)
        return licenseLink;
    }
    
    function renderLicenseSection(license) {
        let licenseText;
    
        // if a license has been selected, create License section
        // with link to license information
        if (license != 'No License') {
        licenseText=`
        This software/code is licensed under the ${license}; 
        to use this software/code you must agree to follow and comply the License.
        A copy of the License can be found at: ${renderLicenseLink(license)}`
        }
        else{
            licenseText='Not licensed.';
            }
    
        return licenseText;
    }
        
    // Function to get current year text
    function getYear(){
        var date = new Date();
        var n = date.getFullYear();
        return n;
    }
    
    // Render Usage
    
    // Function to render test text
    
     
    
    // TODO: Create a function to generate markdown for README
    
    function generateReadMe(answers){ 
        return`
    Project: ${answers.title}
     ![License Badge](${renderLicenseBadge(answers.license)})
    
    ## Description
    ***
    
    ${answers.description}
    
    ## Table of Contents
    *** 
    - [Installation](#installation)
    - [Usage](#usage)
    - [Technologies](#Technologies)
    - [Examples](#Examples)
    - [Contributing](#contributing)
    - [Tests](#Tests Passing)
    - [Contact](#contact)
    - [License](#license)

    
    
    ##Installation
    ***

    The installation can be completed by following these instructions:

        1. To install a Node JS project, install [Node JS](https://nodejs.org/)
        2. Clone the GitHub repository to you local computer. Click on the following link.
        * Repository link : https://github.com/bchamidou/README_Genarator  

    ## Usage 
    ***
    To execute the script, open a Git terminal on the main project folder (cloned folder) Run the following command: node index.js.
    walkthrough video
    Screenshots

    Video demo link
    
    ## Technologies
    ***
    This project is powered by Node.js v16, utilizes inquirer v8.2.4 (node package manager), and file system module (node package manager). It also employs jest v29.5.0 (node package manager) for the unit testing conducted in this application.
    
    ## Contributing
    ***
    
    I  utilized several coding website for help, including STackOverflow, w#schools.com, …. I also watched YouTube video tutorials and the course resources.
    
    Any developers who are interested in contributing ideas for this application must agree to follow and comply with the Contributor Covetnant: Code of Conduct.
    The Contributor Covenant Code of Conduct can be found in the following address:
    
    [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md/)
    
    
    ## Tests Passing
    ***
    
    
    ## Contats
    ***
    
    For additional questions, please contact by email: bchamidou@gmail.com.
    or my Github page:(https://github.com/bchamidou@gmail.com)
    
    ## License
    ***
    
    This application is covered under the ${answers.license}.
    
    Copyright (c) ${getYear()} ${answers.username}.
    ${renderLicenseSection(answers.license)} 
    
    `;
    }
    
        module.exports = generateReadMe;
        