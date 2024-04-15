#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;
console.log(chalk.bgBlueBright.italic("\n \tWellcome to Amy-todolist \n"));
//while(condition){
// let addtask = await inquirer.prompt([
//  {
// name:"task",
//   type:"input",
//     message:chalk.greenBright.bold("Enter your new task:")
//       }
// ]);
// todolist.push(addtask.task);
//console.log(`${addtask.task} task added intodo-list successfully`);
// let addmoretask = await inquirer.prompt([
//  {
// name:"addmore",
//type:"confirm",
//  message:chalk.yellowBright.bold("Do you want to add more tesk?"),
//    default:"false"
//  }
//]);
//  condition = addmoretask.addmore
//}   
//console.log("your updated todo list",todolist);
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add task", "Delete task", "uptade task", "view Todo list", "Exit"],
            }
        ]);
        if (option.choice === "Add task") {
            await addtask();
        }
        else if (option.choice === "Delete task") {
            await deleteTask();
        }
        else if (option.choice === "uptade task") {
            await updatedtask();
        }
        else if (option.choice === "view Todo list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
let addtask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task}task added Sucessfully in Todo list`);
};
let viewTask = () => {
    console.log("\n your Todo list: \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}:${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of thw task you want to delete :"
        }
    ]);
    let deleteTask = todolist.splice(taskIndex.index - 1, 1);
    console.log(`\n${deleteTask}this task has been delete successfully form your`);
};
let updatedtask = async () => {
    await viewTask();
    let updated_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter tha 'index no' of tha tesk you want to update"
        },
        {
            name: "new tesk",
            type: "input",
            message: "now enter new tesk name:",
        }
    ]);
    todolist[updated_task_index.index - 1] = updated_task_index.newTask;
    console.log(`\n tesk at index no.${updated_task_index - 1}updated successfully [for updated list check " view todo list"]`);
};
main();
console.log(chalk.bgYellowBright.bold("THE END!!"));
