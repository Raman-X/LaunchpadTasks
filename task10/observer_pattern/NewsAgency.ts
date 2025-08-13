import { Observer } from "./Observer";

export class NewsAgency {
  private channels: Observer[] = [];

  addChannel(channel: Observer): void {
    this.channels.push(channel);
  }

  removeChannel(channel: Observer): void {
    this.channels = this.channels.filter((c) => c !== channel);
  }

  publishNews(news: string): void {
    console.log(`NewsAgency publishes: "${news}"`);
    this.notifyAll(news);
  }

  private notifyAll(news: string): void {
    for (const channel of this.channels) {
      channel.update(news);
    }
  }
}
