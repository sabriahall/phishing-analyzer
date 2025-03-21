// script.js

// Define a list of phishing red flag keywords and associated educational messages.
const phishingIndicators = [
    { keyword: "urgent", tip: "Phishing emails often use urgent language to pressure you into immediate action." },
    { keyword: "verify your account", tip: "Requesting to verify your account via email can be a sign of phishing." },
    { keyword: "click here", tip: "Be cautious: phishing emails use 'click here' links to direct you to malicious sites." },
    { keyword: "suspended", tip: "Emails stating your account is suspended may be trying to scare you." },
    { keyword: "password", tip: "Unexpected requests for your password or personal info are red flags." },
    { keyword: "login", tip: "Be wary of unsolicited emails prompting you to log in through a provided link." }
  ];
  
  // Function to analyze and highlight suspicious text
  function analyzeEmail(text) {
    // For each indicator, replace instances in the text with a highlighted span.
    phishingIndicators.forEach(indicator => {
      // Create a regex to match the indicator keyword, case-insensitive.
      const regex = new RegExp(indicator.keyword, "gi");
  
      // Replace matches with a span element.
      // We wrap each found keyword with a span that includes a tooltip (data-tip attribute).
      text = text.replace(regex, (match) => {
        return `<span class="suspicious" data-tip="${indicator.tip}">${match}</span>`;
      });
    });
  
    return text;
  }
  
  // Set up event listener on the Analyze button
  document.getElementById("analyzeBtn").addEventListener("click", () => {
    // Get the text from the textarea
    const emailContent = document.getElementById("emailInput").value;
  
    // Check if the input is empty
    if (!emailContent.trim()) {
      alert("Please paste some email content first.");
      return;
    }
  
    // Analyze the email content for phishing indicators
    const analyzedContent = analyzeEmail(emailContent);
  
    // Display the analyzed content in the result container
    document.getElementById("resultContainer").innerHTML = analyzedContent;
  });
  