console.log('chatbot.js loaded');


const button = document.getElementById('send-btn')
               .addEventListener('click', function(){
                


    const input = document.getElementById('chat-input')
    const message= input.value.trim()
    


    // Display the user input
    if(message){
        displayMessage(message, 'user')

        // Fetch the GPT assistant response
        fetchRespone(message)
        input.value = ''


    }


    function displayMessage(message, sender){
        const chatBox = document.getElementById('chat-box')

        const messageDiv = document.createElement('div')
        messageDiv.className = `message ${sender}` 
        messageDiv.innerText =`${sender.toUpperCase()}: ${message}`
        chatBox.appendChild(messageDiv)
    }

    async function fetchRespone(message) {

        const apiKey = ''
        const url = 'https://api.openai.com/v1/chat/completions'


        try{

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },

                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    max_tokens: 100,
                    temperature: 0.5,
                    messages: [
                        {

                            role: 'user',
                            content: message

                        }
                        
                    ]
                })

                
            })

            const data = await response.json()
            const reply = data.choices[0].message.content
            displayMessage(reply, 'bot')

        }catch(error){
            console.log('Error',error)
        }


    }

})
