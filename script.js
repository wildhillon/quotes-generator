function generate () {
    let quotes = {
        "-Nelson Mandela": '"The greatest glory in living lies not in never falling, but in rising every time we fall"',
    
        "-Walt Disney": '"The way to get started is to quit talking and begin doing"',
    
        "-Eleanor Roosevelt": '"If life were predictable it would cease to be life, and be without flavor"',
    
        "-James Cameron": '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success"',
    
        "-John Lennon": '"Life is what happens when you\'re busy making other plans"',
    
    
    };

    let authors = Object.keys(quotes)

    let author = Math.floor(Math.random() * authors.length)
    author = authors[author]

    let quote = quotes[author]
    document.querySelector("#quote").innerHTML = quote

    document.querySelector("h3").innerHTML = author

}
