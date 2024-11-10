const image = document.querySelector('img');
const message = document.querySelector('.message');
const body = document.body;
    
const messages = [
    "“The journey of a thousand miles begins with a single step.” - Lao Tzu",
    "“In the beginning there was nothing, which exploded.” - Terry Pratchett",
    "“The only thing we have to fear is fear itself.” - Franklin D. Roosevelt",
    "“I think, therefore I am.” - René Descartes",
    "“The unexamined life is not worth living.” - Socrates",
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” - Ralph Waldo Emerson",
    "“The only way to do great work is to love what you do.” - Steve Jobs",
    "“Imagination is more important than knowledge.” - Albert Einstein",
    "“Happiness is not something ready made. It comes from your own actions.” - Dalai Lama",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill"
];

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

image.ondragstart = () => {
    return false;
};

image.addEventListener('mousedown', () => {
    message.textContent = getRandomMessage();
});