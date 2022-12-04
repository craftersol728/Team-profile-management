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
    
</body>
</html>`