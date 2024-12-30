// const userName = 'Hello, Iryna!';
// const number = 10;

// userName.toLocaleUpperCase();

// const result = userName.includes('hello');

// if (result) {
//     const message = 'userName includes Hello'
//     console.log(message);
// }




// fetch('https://newsapi.org/v2/everything?q=flowers&from=2024-11-04&sortBy=publishedAt&apiKey=3ce63eea477043d7a470d2b21dc5ab4b')


// function name(arr) {
//     arr.map()
// }
// name([1, 3, 4])
// name([5, 2, 4])
// name([{}, {},{}])

// const b = function (param1) {
    
// }



// const result = fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-11-14&sortBy=publishedAt&apiKey=3ce63eea477043d7a470d2b21dc5ab4b')
//     .then((response) => {
//         console.log(response);
//        return response.json()
//     })
//     .then((jhjk) => {
//         console.log(jhjk);
//        return jhjk.articles;
//     })
//     .then((articles) => {
//         console.log(articles);
       
//         articles.map((article) => {
//             console.log(article);
//         })
//     })




// console.log(result);

const list = document.querySelector('ul')

const numbers = [1, 2, 3, 4, 5]

const markup = numbers.map((number) => {
      return `<li>
            <p>${number}</p>
        </li>`
}).join('')
    
    console.log(markup);
   list.insertAdjacentHTML('beforeend', markup) 
    
    
// [`<li><p>${number}</p></li>`, `<li>
//             <p>${number}</p>
//         </li>`, `<li>
//             <p>${number}</p>
//         </li>`]