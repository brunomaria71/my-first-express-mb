import express from "express";
import { hello, helloPerson, greetNewPerson } from './src/hello.js';
import { welcomeHome } from './src/welcomeHome.js';

import { request } from "express";

const PORT = 3030;
const app = express();
app.use(express.json()); // if we will be sending json data to express or postman, we have to code this line 

//routes (or list of allowed requests)

app.get('/hello', hello);
app.post('/hello', greetNewPerson);

app.get('/', welcomeHome);

app.get('/hello/:person', helloPerson);


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));