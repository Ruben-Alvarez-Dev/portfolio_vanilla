import { init } from "./app/app.js";
import { select } from "./services/services.js";

// Initialize the app, basic trigger
init(select("#app"));
