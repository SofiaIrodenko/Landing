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
// Countdown
(function (){
    const timer = document.querySelector(".countdown ");
    timer.innerText = '';

    const y = setInterval (function () {
        const endTime = new Date("2023-04-05T15:10:10");
        const startTime = new Date().getTime('uk');
        const distance = endTime - startTime;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor ((distance % ( (1000 * 60)) / 1000));
       if (distance < 0) {
        clearInterval(y);
       }
       timer.innerText = "Our new post: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
      
    }, 1000);
    
    }) ();
    // const currentTime = new Date().getTime('uk');
    // const postTime = new Date(`April 08 ${currentYear} 00:00:00`);

    // function updateCountdown() {
    //     const currentTime = new Date();
    //     const diff = postTime - currentTime;
      
    //     const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    //     const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    //     const m = Math.floor(diff / 1000 / 60) % 60;
    //     const s = Math.floor(diff / 1000) % 60;

    //     days.innerHTML = d;
    //     hours.innerHTML = h < 10 ? '0' + h : h;
    //     minutes.innerHTML = m < 10 ? '0' + m : m;
    //     seconds.innerHTML = s < 10 ? '0' + s : s;

        
// }

// setInterval(updateCountdown, 1000);
// }) 