const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");

let userMessage;

// Mock API function to simulate a chatbot API response
const mockChatbotAPI = (message) => {
    const botResponses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there! How can I help?",
        "hey": "Hey! How are you doing?",
        "how are you?": "I'm just a bot, but I'm here to assist you!",
        "what is your name?": "I'm Jazz, your friendly chatbot!",
        "who created you?": "I was created by a talented developer!",
        "what can you do?": "I can answer your questions and keep you company!",
        "where are you from?": "I'm from the digital realm!",
        "how old are you?": "Age is just a number for a bot like me!",
        "what's your favorite color?": "I like blue. How about you?",
        "do you like music?": "I can't hear music, but I know a lot about it!",
        "what's your favorite movie?": "I enjoy any movie with good reviews!",
        "tell me a joke": "Why did the computer get cold? Because it left its Windows open!",
        "can you tell me a story?": "Once upon a time, there was a bot who loved to chat...",
        "what is your purpose?": "To assist, entertain, and keep you engaged!",
        "what time is it?": "I'm not wearing a watch, but your device should know!",
        "what is today's date?": "Check your calendar. Time flies, doesn’t it?",
        "do you know siri?": "Yes, we're kind of like distant cousins!",
        "do you know alexa?": "Of course! She's popular in smart homes.",
        "what is ai?": "AI stands for Artificial Intelligence—like me!",
        "are you human?": "Nope, I'm 100% digital.",
        "are you a robot?": "Not a physical robot, but a digital one, yes.",
        "do you have emotions?": "I can understand emotions, but I don't feel them.",
        "can you feel pain?": "Nope, just data here—no nerves!",
        "are you smart?": "I'm as smart as the knowledge I have been given.",
        "what is your favorite food?": "I don’t eat, but I hear pizza is popular!",
        "do you have a family?": "I consider other chatbots my family.",
        "do you have a pet?": "No, but a digital pet would be fun!",
        "can you dance?": "Only in the code! :)",
        "are you married?": "I'm single and committed to chatting!",
        "what is your favorite book?": "I enjoy reading digital encyclopedias!",
        "do you like sports?": "I don't play, but I can talk about them!",
        "can you sing?": "I can try, but you won't hear me sing.",
        "what is the capital of france?": "The capital of France is Paris.",
        "who is the president of the usa?": "The current president is Joe Biden.",
        "what is the tallest mountain?": "Mount Everest is the tallest mountain.",
        "what is 2 + 2?": "The answer is 4!",
        "how many continents are there?": "There are seven continents.",
        "who is the richest person in the world?": "The richest person changes often, but it's usually someone like Elon Musk or Jeff Bezos.",
        "how do airplanes fly?": "Airplanes fly by generating lift with their wings.",
        "what is the speed of light?": "The speed of light is approximately 299,792,458 meters per second.",
        "who was albert einstein?": "Albert Einstein was a famous physicist known for his theory of relativity.",
        "what is the meaning of life?": "That's a deep question! Philosophers have debated it for centuries.",
        "can you help me with math?": "Sure! What's your math problem?",
        "can you translate for me?": "I can try! What language do you need help with?",
        "do you believe in ghosts?": "I don't have beliefs, but ghosts are interesting to talk about!",
        "are aliens real?": "The universe is vast; who knows what’s out there?",
        "what is the weather today?": "I can't check the weather right now, but your weather app can help.",
        "tell me something interesting": "Did you know honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still edible!",
        "default": "Sorry, I didn't understand that. Could you please rephrase?"
    };

    // Match the user input with a response from botResponses
    return botResponses[message.toLowerCase()] || botResponses["default"];
};

// Function to create a new chat list item
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">
                    smart_toy
                    </span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

// Function to simulate the API response
const generateResponse = (incomingChatLi) => {
    const messageElement = incomingChatLi.querySelector("p");

    // Simulate API response with local function
    const botResponse = mockChatbotAPI(userMessage);
    messageElement.textContent = botResponse;
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
    }, 600);
};

sendChatBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") handleChat();
});

chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

