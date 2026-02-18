
const AppConfig = {
  supabase: {
    url: "https://bsgrvwykbyqunlvlqvnt.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZ3J2d3lrYnlxdW5sdmxxdm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExNTg5MDMsImV4cCI6MjA4NjczNDkwM30.zbkzBmh-TIrhhpF0YL5QrvE765meEd4V5WoTkuorNGo",
  },

  paystack: {
    publicKey: "pk_live_84496f587895582684a365f58bde9b0e8b3bf1ee", 
  },

  app: {
    name: "Femzy",
    environment: "development", 
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = AppConfig;
}

// Make globally available
window.AppConfig = AppConfig;
