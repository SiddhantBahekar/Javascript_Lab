// Logs general user environment info in a clean table
console.log("--- User Environment Info ---");

const envInfo = {
    "Browser Agent": navigator.userAgent,
    "Language": navigator.language,
    "Screen Resolution": `${window.screen.width}x${window.screen.height}`,
    "Cookies Enabled": navigator.cookieEnabled
};
console.table(envInfo);

// Helper function to demonstrate console.trace()
function initializeApp() {
    setupTracking();
}

function setupTracking() {
    // Traces the function call path in the console
    console.trace("Tracking initialized from:"); 
}

// Execute the function
initializeApp();
