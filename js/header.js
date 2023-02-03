// IIFE
(function () {
     function getRandomMessage() { 
        const messages = [
        'Your Pet Deserves the Best Care',
        'Make Your Pet Health and Happy',
     ];
    
      return messages[Math.floor(Math.random() * messages.length)];
     }
const headerH1 = document.querySelector('.header__title');
setInterval ( () => headerH1.innerText = getRandomMessage(), 3000);


}) ();