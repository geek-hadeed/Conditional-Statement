#! /usr/bin/env node
import inquirer from "inquirer"

let  name = await inquirer.prompt([
    {
        name: "name1",
        type: "input",
        message: "Enter First Name"
    },
    {
        name: "name2",
        type: "input",
        message: "Enter Second Name"
    },
    {
        name: "name3",
        type: "input",
        message: "Enter Third Name"
    }
])
if (name.name1 === name.name2)
{
    console.log("First Name Is Equals to Second Name")  
    console.log(name.name1 === name.name2)
}

else if (name.name2 !== name.name3)
{
    console.log("Secoond Name Is Not Equals to Third Name")  
    console.log(name.name2 !== name.name3)
}

else if (name.name1 === name.name3)
{
    console.log("First Name Is Equals to Third Name")    
    console.log(name.name1 === name.name3)
}


// Number Comapiring 

let age = await inquirer.prompt(
    {
        name: "age",
        type: "input",
        message: "Enter Your age"
    })
if (age.age < 2 )
{
    console.log("You Are A Baby")
}

else if(age.age > 2 && age.age < 4)
{
    console.log("You Are A Toddler")
}
    
else if(age.age > 4 && age.age < 13)
{
    console.log("You Are A Kid")
}

else if(age.age > 13 && age.age < 20)
{
    console.log("You Are A Teenager")
}

else if(age.age > 20 && age.age < 65)
{
    console.log("You Are A Adult")
}

else if(age.age >= 65)
{
    console.log("You Are A Elder")
}

else
{
    console.log("INVALID AGE");
}


// checking item in an array

let myfirends: string[] = ["humaiz" , "ameen" , "ayan"]

if(myfirends.includes("humaiz"))
{
    console.log(`\n${myfirends[0]} Is Your Friend`)
}

else if(myfirends.includes("ameen"))
{
    console.log(`\n${myfirends[1]} Is Your Friend`)
}

else if(myfirends.includes("ayan"))
{
    console.log(`\n${myfirends[2]} Is Your Friend`)
}

else if(myfirends.includes("hussain"))
{
    console.log("\nHe is Not Your Friend")
}

else if(myfirends.includes("hassan"))
{
    console.log("\nHe is Not Your Friend")
}

else{
    console.log("\nInvalid")
}




