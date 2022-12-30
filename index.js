//imported required package
var inquirer = require('inquirer');
var fs = require('fs');
// const { default: Choice } = require('inquirer/lib/objects/choice');
// const { default: Choices } = require('inquirer/lib/objects/choices');

//creating the html buffer
var buf = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Management</title>
    <style>
        .member {
            width: auto;
            background-color: #rgb(0, 247, 255);
            padding: 25px
            margin: 50px;
            border-radius:25px;
            box-shadow: 0px 5px 5px;
        }
        .inner{
            width: auto;
            background-color: white;
            padding: 25px;
            border-radius: 25px;
        }
    </style>
</head>
<body>
<div style="width: 100%; height: auto; text-align: center; background-color: rgb(192, 255, 234);">
            <h1> This Team </h1>
        </div>
        <br>
        <div class="container">
            <div class="row">`;
var team = {};

var manager = {};
var engineers = [];
var interns = [];
// if the entry is blank
const isEmpty = async (input) =>{
    if (input =='') return 'Can not be left empty';
    else return true;
}
//for writing the buffer to disk copied from my last challenge same code please dont plagerise me
function writeToFile(fileName, data) 
{
    fs.writeFile(('./result/'+ fileName),data,function(err)
    {
        if (err) throw err;
        console.log ('Saved');
    });
}


//This will take all the entries and build an html page
function buildHtml()
{
    console.log("Entries submitted, check result folder for your html page");
    buf +=
    `<div class ="col-sm member">
    <h4>${manager.name}</h4>
    <h3>Manager</h3>
    <div class = "inner">
    ID: ${manager.id} </br>
    Email: ${manager.email} </br>
    office number: ${manager.office}
    </div>
    </div>`;

    engineers.forEach(engineer =>
{
    buf +=
    `<div class="col-sm member">
    <h4>${engineer.name}</h3>
    <h3>Engineer</h3>
    <div class="inner">
    ID: ${engineer.id}</br>
    Email: ${engineer.email}</br>
    Github Link: <a href="https://github.com/${engineer.github}"> ${engineer.github} </a>
    </div>
    </div>`;
});
    interns.forEach(intern =>
{
    buf +=
    `<div class="col-sm member">
    <h4>${intern.name}</h4>
    <h3>Intern</h3>
    <div class="inner">
    ID: ${intern.id}</br>
    Email: ${intern.email}</br>
    School that he graduated from: ${intern.school}
    </div>
    </div>`;
});




//end of html page
 buf +=
    `</div>
    </div>
    </body>
    </html>`;

 //saving our buffer to the disk
 writeToFile("output.html", buf);
}


//manager questions
const managerQuestions = [
    {
    type:'input',
    name:'name',
    message:'Team manager name is:',
    validate: isEmpty,
    },
    {
    type:'input',
    name:'id',
    message:'Team manager id is:',
    validate: isEmpty,
    },
    {
    type:'input',
    name:'email',
    message:'Team manager email is:',
    validate: isEmpty,
    },
    {
    type:'input',
    name:'office',
    message:'Team manager office number is:',
    validate: isEmpty,
    },
];
//intern questions
const internQuestions = [
    {
    type:'input',
    name:'name',
    message:'Intern name is:',
    validate: isEmpty,
    },
    {
    type:'input',
    name:'id',
    message:'Intern id is:',
    validate: isEmpty,
    },
    {
    type:'input',
    name:'email',
    message:'Intern email is:',
    validate: isEmpty,
    },
    {
    type:'input',
    name:'school',
    message:'School Intern came from:',
    validate: isEmpty,
    },
];
//engineer questions
const engineerQuestions = [
    {
    type:'input',
    name:'name',
    message:'Engineer name is:',
    validate: isEmpty,
    },
    {
    type:'input',
    name:'id',
    message:'Engineer id is:',
    validate: isEmpty,
    },
    {
    type:'input',
    name:'email',
    message:'Engineer email is:',
    validate: isEmpty,
    },
    {
    type:'input',
    name:'github',
    message:'Engineer\'s github username:',
    validate: isEmpty,
    },
];
//funciton for adding each person onto the html sheet with infinite looping
function addMenu (){
    inquirer.prompt([{
        type:'list',
        name: 'selection',
        message:'add another person?',
        choices : ['add an Engineer','add an Intern','finished'],
    }]).then((response)=>{
        if(response.selection == 'add an Engineer') return addEngineer();
        else if (response.selection == 'add an Intern') return addIntern();
        else if (response.selection == 'finished') return buildHtml();
        else return console.log(response.selection);
    })
}

//fucntion to add engineer into the html document
function addEngineer(){
    inquirer.prompt(engineerQuestions).then((answers) =>{
        newEngineer = {};
        newEngineer.name = answers.name;
        newEngineer.id = answers.id;
        newEngineer.email = answers.email;
        newEngineer.github = answers.github;
        engineers.push(newEngineer);
        addMenu();
    })
    .catch((error)=>
    {
        if(error.isTtyError){
            console.log('prompt cannot be rendered in the current situation');
        } else {
            console.log('something went wrong')
        }
    });
}

function addIntern()
{
    inquirer.prompt(internQuestions)
    .then((answers) =>
    {
        newIntern = {};
        newIntern.name = answers.name;  
        newIntern.id = answers.id;
        newIntern.email = answers.email;
        newIntern.school = answers.school;
        interns.push(newIntern);
        addMenu();
    })
    .catch((error) =>
    {
        if (error.isTtyError)
        {
            console.log('prompt cannot be rendered in the current environment.');
        } else
        {
            console.log('something went wrong.')
        }
    });
}

function addManager()
{
    inquirer.prompt(managerQuestions)
    .then((answers) =>
    {
        //manager.name = Object.values(answers)[0]; 
        manager.name = answers.name;  
        manager.id = answers.id;
        manager.email = answers.email;
        manager.office = answers.office;

        addMenu();
    })
    .catch((error) =>
    {
        if (error.isTtyError)
        {
            console.log('prompt cannot be rendered in the current environment.');
        } else
        {
            console.log('something went wrong.')
        }
    });
}

//an introduction to the script that confirms user intent before capturing CLI focus
console.log('Welcome to the project team page generation script. This tool will generate a formatted HTML page showcasing your project\'s team members based on your parameters.');
inquirer.prompt(
    [
        {
            type: 'confirm',
            name: 'begin',
            message: 'start?',
        }
    ]).then((response) =>
    {
        if (response.begin) return addManager();
        else return console.log('bye.');
    });
