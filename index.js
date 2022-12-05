//imported required package
var inquirer = require('inquirer');
var fs = require('fs');

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
            background-color: #333;
            padding: 25px
            margin: 50px;
            border-radius:25px;
            box-shadow: opx 5px 5px;
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
        <div style"width:100%; height:auto;text-align:center;Background-color:white;">
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
const isAnswerBlank = async (input) =>
{
    if (input == '') return 'Can not leave blank';
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







</body>
</html>