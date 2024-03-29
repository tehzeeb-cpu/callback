// #1
function doubleArray(array, callback){
    return callback(array);
}
function callback(array){
    let newArray = [];
    array.forEach(element => {
        element = element*element;
        newArray.push(element);
    });
    return newArray;
}
console.log(doubleArray([2, 4, 5], callback));

// #2
function manipulateString(lowerString, logString){
    const manipulatedString = lowerString.toUpperCase();
    logString(manipulatedString);
}
function logString(manipulatedString){
    console.log(`The manipulated string is: ${manipulatedString}`);
}
manipulateString("Hello World!", logString);

// #3
function ageInDays(person, logResult){
    fullname = person.fname +" "+ person.lname;
    ageDays = person.age;
    logResult(fullname, ageDays);
}
function logResult(fullname, ageDays){
    console.log(`The person's full name is ${fullname} and their age in days is ${ageDays}.`)
}
const person = {fname:"Tehzeeb", lname:"Hussain",age:27};
ageInDays(person, logResult)

// #4
const books = [
    {
        title: "Kar",
        author: "Karry",
        year: 2000,
    },
    {
        title: "Ver",
        author: "Verry",
        year: 2001,
    },
    {
        title: "Mer",
        author: "Merry",
        year: 2002,
    },
    {
        title: "Har",
        author: "Harry",
        year: 2003,
    },
]
function bookName(books, callback){
    const bookTitle = books.map((book)=>book.title);
    callback(bookTitle);
}
function callback(bookTitle){
    bookTitle.sort();
    console.log(bookTitle.join(","));
}
bookName(books, callback)

// #5
function greet(name){
    return new Promise((resolve)=>{
        const greeting = `Hello! ${name}`;
        resolve(greeting)
    })
}
greet("Tehzeeb").then(message=>console.log(message));

// #6
async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}

fetchData();

// #7
async function fetchData() {
    try {
        // Fetch data from the first API endpoint
        const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todoData = await todoResponse.json();

        // Fetch data from the second API endpoint
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const postData = await postResponse.json();

        // Combine the results into an object
        const combinedData = {
            todo: todoData,
            post: postData
        };

        // Log the combined data
        console.log(combinedData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function
fetchData();

// #8
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Get data from API and display it on console.</h1>
    <script defer>
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    </script>
</body>
</html>

/* #9 */
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error Handling with Fetch</title>
</head>
<body>
    <h1>Fetching Data from API</h1>
    <div id="errorMessage"></div>

    <script>
        fetch('https://jsonplaceholder.typicode.com/posts/123456789')
            .then(response => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the response body as JSON
                return response.json();
            })
            .then(data => {
                // Handle successful response
                console.log('Retrieved data:', data);
                // Display the retrieved data on the webpage
                const messageDiv = document.getElementById('errorMessage');
                messageDiv.textContent = JSON.stringify(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching data:', error);
                // Display error message on the webpage
                const messageDiv = document.getElementById('errorMessage');
                messageDiv.textContent = 'Error fetching data: ' + error.message;
            });
    </script>
</body>
</html>
