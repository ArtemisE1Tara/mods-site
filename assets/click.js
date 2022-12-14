// Set up a listener for user interaction events
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function() {
        // When a user clicks on the page, send a message to the Discord webhook
        sendDiscordMessage('A user just clicked on the page!');
    });
    });

    // Function to send a message to a Discord webhook
    function sendDiscordMessage(message) {
    // Replace with your webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/974483266189000764/iivTBely3bhgY2LLyCGpDEeqcmoRyNDhkr3AUJr_4EE3Eq5Xh06Ap5SC5LXq5blUnJWN';

    // Set up the options for the HTTP request
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        content: message,
        }),
    };

    // Send the request to the Discord webhook
    fetch(webhookUrl, options)
        .then(response => response.json())
        .then(data => {
        // If the request was successful, log the response data to the console
        console.log(data);
        })
        .catch(error => {
        // If there was an error, log it to the console
        console.error(error);
        });
    }