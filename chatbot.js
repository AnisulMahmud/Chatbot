console.log('chatbot.js loaded');
// 1. Get the user input
// 2. display the user input
// 3. fetch the GPT assistant response and show it in chatbox

const button = document.getElementById('send-btn')
               .addEventListener('click', function(){
                


    const input = document.getElementById('chat-input')
    const message= input.value.trim()
    console.log(message)


    // Display the user input
    if(message){
        displayMessage(message, 'user')

        // Fetch the GPT assistant response
        const response = fetchRespone(message)


    }


    function displayMessage(message, sender){
        const chatBox = document.getElementById('chat-box')
        const messageDiv = document.createElement('div')
        messageDiv.className = `message ${sender}` 
        messageDiv.innerText =`${sender.toUpperCase()}: ${message}`
        chatBox.appendChild(messageDiv)
    }

    async function fetchRespone() {

    }
               









})
