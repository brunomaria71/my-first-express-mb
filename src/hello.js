import { response } from "express";
import { request } from "express";

export function hello(request,response) {
    response.send('Hello. Is it me you\'re looking for?');
}

export const helloPerson = (request, response) => {
    // const person = request.params.person; // longhand. we extract person from the response
    const { person } = request.params; // short hand
    response.send(`whats up. ${person}.👋`);
};

export const greetNewPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    response.send(`Hello there, ${firstName}, ${lastName}.`);
}