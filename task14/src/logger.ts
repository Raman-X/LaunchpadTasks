import fs from "fs";
import path from "path";
import { generateId } from "./utils";

const LOG_FILE = path.join(__dirname, "../data/logs.json");

export type LogEntry = {
  id: string;
  action: string;
  taskId: string | null;
  timestamp: string;
  details: string;
};

export const logAction = (
  action: string,
  taskId: string | null,
  details: string
) => {
  const logs: LogEntry[] = JSON.parse(fs.readFileSync(LOG_FILE, "utf-8"));
  const newLog: LogEntry = {
    id: generateId(),
    action,
    taskId,
    timestamp: new Date().toISOString(),
    details,
  };
  logs.push(newLog);
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
};

export const viewLogs = (): LogEntry[] => {
  return JSON.parse(fs.readFileSync(LOG_FILE, "utf-8"));
};
