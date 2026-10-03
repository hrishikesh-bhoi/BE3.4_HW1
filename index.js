const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

const books = [

  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },

  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }

];

// 1. Write a GET route "/" which sends a message "Hello, From Express Server.". Test your API with Postman.
app.get('/', (req, res) => {
  res.send('Hello, From Express Server.');
});

// 2. Write a POST route which updates a book with id 2, from the pre-defined books array. 

app.post('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const updatedBookData = req.body;

    const bookToUpdate = books.find(book => book.id === bookId);

    if(! bookToUpdate) {
        return res.status(404).send('Book not found');
    } else {
        Object.assign(bookToUpdate, updatedBookData);
        // { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1970 }
        res.status(200).json({ message: 'Book updated successfully', book: bookToUpdate });
    }
});

// 3.Write a GET route "/books" which sends the books array in response. Test your API with Postman and see that the above book with id 2 is updated.

app.get('/books', (req, res) => {
    res.send(books);
});

// 4. Write a POST route which updates a todo with id 1, from the pre-defined todos array.
const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

  { id: 2, title: 'Go for a walk', day: 'Sunday' }

];

app.post('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const updatedTodoData = req.body;
    
    const todoToUpdate = todos.find(todo => todo.id === todoId);

    if(! todoToUpdate) {
        return res.status(404).send('Todo not found');
    } else {
        Object.assign(todoToUpdate, updatedTodoData);
        // { id: 1, title: 'Water the non-cactus plants', day: 'Saturday' }
        res.status(200).json({ message: 'Todo updated successfully', todo: todoToUpdate });
    }
});



5. Write a GET route "/todos" which sends the todos array in response. Test your API with Postman.
app.get('/todos', (req, res) => {
    res.send(todos);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});