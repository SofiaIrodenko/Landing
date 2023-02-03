(function () {
    function getRandomMessage () {
        const messages = [
            'No blog posts yet...',
            'Learn more about beer',
            'Read and chill',
            'Till our new post:'
        ];

       return messages[Math.floor(Math.random() * messages.length)];
    }
    const blogText = document.querySelector('.articles__text');
    setInterval ( () => blogText.innerText = getRandomMessage (), 3000);
    
}) ();