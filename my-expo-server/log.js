const fs = require("fs");
const path = require("path");

// Log file path (stored in same folder as this script)
const LOG_FILE = path.join(__dirname, "server.log");

function log(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, logEntry, "utf8");
  console.log(logEntry.trim()); // Still output to console
}

module.exports = { log };
