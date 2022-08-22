# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
JSX is a syntax that is used in React. One syntax difference is the way that opening and closing tags are written.

Researched answer:
JSX stands for JavaScript Xml or JavaScript Syntax Extenstion. JSX is code that compiles down to HTML, so writing code in JSX is basically the same as writing HTML code. JSX is "syntactic sugar" for React and this is evident in the opening and closing tags in JSX (<> </>) versus HTML (<div> </div>). 


2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer:
Yarn stands for Yet Another Resource Negotiator and it is a JavaScript package manager. When yarn is ran, the project's root folder is modified. We used the Yarn package for Test Driven Development (TDD) in Jest and also for development in React.


Researched answer:
Yarn, JavaScript's package manager, was created by Facebook and it is a way to share and/or use code with other developers everywhere. It uses json files for all of the code that is shared in the package and yarn is almost identical to NPM - Node Package Manager. Yarn and NPM are both JavaScript package managers that help users run JavaScript code.



3. What is an anonymous function in JavaScript?

Your answer:
My experience and knowledge thus far is that an anonymous function, to be put simply, is a function without a name. Usually, functions in JavaScript have a name, but the anonymous function is the exception.

Researched answer:
While it is true that an anonymous function is indeed a no-name function, among its many other uses, it is used as a callable parameter within functions. I saw an anonymous function at work as it was implemented into an onClick function during one of our projects to "put the brakes" on another function that was previously called in the program.

4. What is the difference between a class and an object?

Your answer:
A class is the blueprint, or skeleton, that an object is built from. Objects exist within a class. The class would be the frame and overall structure of the house and the objects would be the wall paneling, doors, countertops, etc that are inside the house.

Researched answer:
An object has states and behaviors. The class (template), which the object is an instance of, describes that object's behavior and states.



5. What is the difference between state and props in React?

Your answer: 
In React, state is an object which saves data that is getting changed over time and props are a way of passing data between components. The data being passed via props is moving in a "down stream" direction to those components that will receive it.

Researched answer:
Props you pass from a parent component into a child component and they can be thought of as the arguments to a function. State is handled inside of that parent component and you can update it inside of the component. Props are handled outside of that parent component and must be updated outside of the component.



6. STRETCH: Which is the difference between a div and a span?

Your answer: 
Although I'm not sure of the difference between the two, I do know that they're both elements of an HTML document.

Researched answer:
In HTML, both div and span tags are among the various elements that are used to define the parts of a document. Div and span tags give readers better accessibility to a document as well as make a document easier for the docoment's author to maintain. Divs and spans be used to apply attributes (language), CSS styling (color), or client-side scripting (JavaScript) to documents. The difference between the two elements is simply the portion size of the document that they represent. A div represents several lines, or a block-level portion, of a document while a span only represents a line of the document. For instance, one sentence of text (span) versus a few paragraphs stacked with several sentences of text (div).

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:
    Object-oriented programming or OOP is a standard in programming which uses the concept of Classes and Objects to break down a software program into simple, reusable pieces of code blueprints (classes) and those classes will be used to create objects. In OOP, classes, methods(functions), and objects work in tandem to benefit programming in several ways. Two of those benefits that I have seen so far in my programming experience are the reusable OOP objects that are useful across programs and the ease of debugging, which improves efficiency. 

2. Ruby:
    Ruby is a dynamic, interpreted scripting language made famous for taking simplicity and code readability to the extreme. It was conceived by Yukhiro Matsumoto, aka "Matz" in 1993 as an easy-to-use scripting language like Python, but with genuine Object-Oriented features. Ruby exploded in popularity when David Hansen created Rails in 2005. It reduced the complexity required to build a full-stack web application and it has been used to build Twitter, Shopify, GitHub, and AirBnB. Ruby is often called a programmer's best friend thanks to its minimal syntax that relies on plain English words and the use of blocks to write concise, functional code. At the same time, its a true object-oriented language where everything is an object and every object can be modified. This gives developers the flexibility to extend or modify the behavior of the language. Experienced and senior developers have told me that Ruby is widely used and supported all over.

3. Implicit return:
    Upon research of this, I found that Implicit Return is Ruby's way of taking away the need for an actual return statement in a function. Instead of the "undefined" error that you'd get in JavaScript for not using a return statement with a function, Ruby would actually return the result without the statement. One less step for the developer.

4. Ruby blocks:
    A Ruby block is the same thing as a method, but unlike a method, it doesn't have a name and it doesn't belong to an object. Blocks are pieces of code that accept aruments and return values, but they can only be created by passing them to a method during a method call. The method can then execute these anonymous blocks of code and put it to use.

5. Ruby hashes:
    A Ruby hash is similar to an array in JavaScript. Like an array, a hash is used to store data in the form of key-value pairs. But unlike an array, a hash doesn't use a number as an index. Hash values are accessed with keys. 
    Here's a hash:  colors = { red: 2, white: 4, black: 6 }
                    