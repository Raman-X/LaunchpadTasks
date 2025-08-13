import { NewsAgency } from "./NewsAgency";
import { NewsChannel } from "./NewsChannel";

const agency = new NewsAgency();

// Create subscribers
const cnn = new NewsChannel("CNN");
const bbc = new NewsChannel("BBC");
const aljazeera = new NewsChannel("Al Jazeera");

// Add them
agency.addChannel(cnn);
agency.addChannel(bbc);
agency.addChannel(aljazeera);

// Publish news
agency.publishNews("New species of bird discovered in the Amazon!");

// Remove one channel and publish again
agency.removeChannel(bbc);
agency.publishNews("Stock market hits record high!");
