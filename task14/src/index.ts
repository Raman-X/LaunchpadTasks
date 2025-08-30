import readline from "node:readline";
import { viewLogs } from "./logger";
import {
  addTask,
  clearTasks,
  listTasks,
  removeTask,
  toggleTask,
  updateTask,
} from "./todo";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const main = async () => {
  console.log("Welcome to Todo CLI");

  while (true) {
    console.log("\nOptions:");
    console.log("1. Add Task");
    console.log("2. List Tasks");
    console.log("3. Update Task");
    console.log("4. Toggle Task");
    console.log("5. Remove Task");
    console.log("6. Clear Tasks");
    console.log("7. View Logs");
    console.log("0. Exit");

    const choice = await question("Select an option: ");

    switch (choice) {
      case "1": {
        const title = await question("Enter task title: ");
        addTask(title);
        console.log("Task added.");
        break;
      }
      case "2": {
        const tasks = listTasks();
        if (tasks.length === 0) console.log("No tasks found.");
        else
          tasks.forEach((t) => {
            console.log(
              `[${t.done ? "x" : " "}] ${t.id} - ${t.title} (Created: ${
                t.createdAt
              })`
            );
          });
        break;
      }
      case "3": {
        const id = await question("Enter task ID to update: ");
        const newTitle = await question("Enter new title: ");
        if (updateTask(id, newTitle)) console.log("Task updated.");
        else console.log("Task not found.");
        break;
      }
      case "4": {
        const id = await question("Enter task ID to toggle: ");
        if (toggleTask(id)) console.log("Task toggled.");
        else console.log("Task not found.");
        break;
      }
      case "5": {
        const id = await question("Enter task ID to remove: ");
        if (removeTask(id)) console.log("Task removed.");
        else console.log("Task not found.");
        break;
      }
      case "6": {
        const ans = await question("Clear only completed tasks? (y/n): ");
        clearTasks(ans.toLowerCase() === "y");
        console.log("Tasks cleared.");
        break;
      }
      case "7": {
        const logs = viewLogs();
        if (logs.length === 0) console.log("No logs found.");
        else
          logs.forEach((l) =>
            console.log(`${l.timestamp} | ${l.action} | ${l.details}`)
          );
        break;
      }
      case "0":
        console.log("Exiting Todo CLI.");
        rl.close();
        process.exit(0);
      default:
        console.log("Invalid option. Try again.");
    }
  }
};

main();
