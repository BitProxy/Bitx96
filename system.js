// Prompts, etc.

// Functions (Public)

function wait(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay)
    });
};

// Error Prompt.

const ErrorPrompt = document.getElementById('error-prompt');
const ErrorMessage = document.getElementById('error-message');
const mainContent = document.getElementById('main-content');
const ErrorTitle = document.getElementById('error-title');

function PromptError(errorMessage) {
    if (errorMessage !== "") {
        ErrorMessage.textContent = errorMessage;
    } else {
        errorMessage.textContent = "Something went wrong.";
    };
    ErrorPrompt.classList.remove('hidden');
    mainContent.classList.add('blurry-background');
    wait(5000).then(function() {
        ErrorPrompt.classList.add('hidden');
        mainContent.classList.remove('blurry-background');
    });
}
