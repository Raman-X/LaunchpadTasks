import { Observer } from "./Observer";

export class NewsChannel implements Observer {
  constructor(private name: string) {}

  update(news: string): void {
    console.log(`[${this.name}] Breaking News: ${news}`);
  }
}
