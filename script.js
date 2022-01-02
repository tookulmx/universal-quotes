const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;

}

// Show new Quote
function newQuote(){  
    complete();  
    // Pick a random Quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // If author = null

    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    
    // Quote length to determine styling

    if (quote.text.length > 80){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}

// Hide loader 
quoteText.textContent = quote.text;
complete();

// Get Quotes from API 1

async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
 try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
} catch (error) {

    // Catch Error Here
    
    }
}

// Tweet

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// New Quote Function

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();



// Another API for Quotes

// Get Quotes from API 2

// async function getQuote() {
//     const proxyUrl = 'https://lit-journey-53266.herokuapp.com/'
//     const apiUrl= 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

//     try {
//     const response = await fetch(proxyUrl + apiUrl); 
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log('Error, no quote', error);
//     }

// }


// On Load

// getQuote();