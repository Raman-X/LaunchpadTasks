// Singleton pattern: DatabaseConnection.ts

export class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor() {
    console.log("Connecting to the database...");
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string) {
    console.log(`Executing SQL: ${sql}`);
  }
}
