import fs from "fs";
import path from "path";
import { logAction } from "./logger";
import { generateId } from "./utils";

const TODO_FILE = path.join(__dirname, "../data/todos.json");

export type Task = {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
};

const readTodos = (): Task[] => JSON.parse(fs.readFileSync(TODO_FILE, "utf-8"));
const saveTodos = (todos: Task[]) =>
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));

export const addTask = (title: string) => {
  const todos = readTodos();
  const newTask: Task = {
    id: generateId(),
    title,
    done: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  todos.push(newTask);
  saveTodos(todos);
  logAction("add", newTask.id, `Added task: ${title}`);
};

export const listTasks = (): Task[] => {
  const todos = readTodos();
  logAction("list", null, `Listed ${todos.length} task(s)`);
  return todos;
};

export const updateTask = (id: string, title: string) => {
  const todos = readTodos();
  const task = todos.find((t) => t.id === id);
  if (!task) return false;
  const oldTitle = task.title;
  task.title = title;
  task.updatedAt = new Date().toISOString();
  saveTodos(todos);
  logAction(
    "update",
    id,
    `Updated task title from "${oldTitle}" to "${title}"`
  );
  return true;
};

export const toggleTask = (id: string) => {
  const todos = readTodos();
  const task = todos.find((t) => t.id === id);
  if (!task) return false;
  task.done = !task.done;
  task.updatedAt = new Date().toISOString();
  saveTodos(todos);
  logAction("toggle", id, `Toggled task to ${task.done ? "done" : "undone"}`);
  return true;
};

export const removeTask = (id: string) => {
  let todos = readTodos();
  const task = todos.find((t) => t.id === id);
  if (!task) return false;
  todos = todos.filter((t) => t.id !== id);
  saveTodos(todos);
  logAction("remove", id, `Removed task: ${task.title}`);
  return true;
};

export const clearTasks = (onlyCompleted = false) => {
  let todos = readTodos();
  let removedCount = 0;
  if (onlyCompleted) {
    removedCount = todos.filter((t) => t.done).length;
    todos = todos.filter((t) => !t.done);
  } else {
    removedCount = todos.length;
    todos = [];
  }
  saveTodos(todos);
  logAction(
    "clear",
    null,
    `Cleared ${removedCount} task(s)${onlyCompleted ? " (completed only)" : ""}`
  );
};
