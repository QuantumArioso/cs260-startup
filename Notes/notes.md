# Notes

### General Notes

Clone github repository: git clone https://github.com/QuantumArioso/cs260-startup

### Start-up Requirements
HTML - Basic structural and organizational elements

CSS - Styling and animating

JavaScript - Interactivity (e.g. What happens when a user presses a button)

Web service - Remote functions that your application calls on your, or someone else's, web server (e.g. saveScores, getWeather, chatWithFriend)

Authentication - Creating accounts and logging in

Database persistence - Storing user data in a database (e.g. Save the high scores and login information)

WebSocket - Support for pushing data from the server. This can be peer to peer communication (e.g. chatting with friends through the browser), or realtime data from the server (e.g. stock prices or the current game leader).

Web framework - Using React to add components and request routing

### AWS
Command to remote shell into server: ssh -i [key pair file] ubuntu@neurospicy.click

### HTML
index.html is the default file to open if you don't specify.  
Title is just part of the information in the head (not actually rendered in the body).  
I can't figure out how to embed videos from YouTube (if it's possible), but I successfully downloaded a NASA YouTube video, uploaded it to File Garden, then used the link there to embed it in my HTML on CodePen.  

DEPLOY: ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
(copy the deployFiles.sh from the Simon repo)

### CSS
Content inside padding inside border inside margin (peanut butter and margarin)

### JavaScript
console.log("hello world") -- returns "undefined" (doesn't return anything)  
declare variable: let y = 1 (var is the old one and has scope issues) (const y = 1 is constant variable declaration)  
equality: === (triple equals)
Display result in alert box:  
    let z = 10;
    alert(z);  
Declare variables on one line:  
    let firstName = "John", lastName = "Doe", age = 35;
Object:  
    const x = {name: "Ari", movie: "Interstellar"}
Extract info from the object:  
    alert(x.name);
Functions:  
    function myFunction() {  
        alert("Hello World!");  
    }  
Display inner HTML:  
    document.getElementById("demo").innerHTHL = "Hello";  
Click button:
    \<button onclick="alert('Hello')">Click me.\</button>
When hover:  
    onmouseover  
Length of string or array:  
    string.length  
Array:  
    const stars = ["Polaris", "Sirius", "Vega"]  
    stars.pop() //remove last item  
    stars.push("Deneb") //append to end  
    stars.splice(1,2) //remove "Sirius" and "Vega"  
    stars.sort() //sort alphabetically  
Math:  
    Math.random()  
    Math.max(10, 20)  
    Math.round(5.3)  
    Math.sqrt(9)  
If:  
    var age = n;
    var voteable = (age < 18) ? "Too young" : "Old enough";
    alert(voteable); //if age < 18 alerts "Too young", else alerts "Old enough"  

    if (x > y) {
        alert("Hello World");
    } else {
        alert("Goodbye");
    }  
Switch:  
    switch(fruits) {
        case "Banana":
            alert("Hello")
            break;
        case "Apple":
            alert("Welcome")
            break;
        default:
            alert("Neither");
    }  
For loops:  
    let i;
    for (i = 0; i < 10; i++) {
        console.log(i);
    }  
    (can also do for each like python)  
    break = stop loop, continue = jump to next interation
DOM:  
    document.getElementsByTagName("p")[0]  
    document.getElementById("demo").style.fontSize = "40px";  
    document.getElementById("demo").addEventListener("click", myFunction);


### Domain Name System (DNS)  
(source: https://www.cloudflare.com/learning/dns/what-is-dns/)  
The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.  
The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.  

### REGEX (from my 111 notes)
Character Classes  
A character class makes it possible to search for any one of a set of characters. You can specify the set or use pre-defined sets.  

Class	Description  
[abc]	Matches a, b, or c  
[a-z]	Matches any character between a and z  
[^A-Z]	Matches any character that is not between A and Z.  
\w	Matches any "word" character. Equivalent to [A-Za-z0-9_]  
\d	Matches any digit. Equivalent to [0-9].  
[0-9]	Matches a single digit in the range 0 - 9. Equivalent to \d  
\s	Matches any whitespace character (spaces, tabs, line breaks).  
.	Matches any character besides new line.  
Character classes can be combined, like in [a-zA-Z0-9].  

Combining patterns  
There are multiple ways to combine patterns together in regular expressions.  

Combination	Description  
AB	A match for A followed immediately by one for B. Example: x[.,]y matches "x.y" or "x,y"  
A|B	Matches either A or B. Example: \d+|Inf matches either a sequence containing 1 or more digits or "Inf"  
A pattern can be followed by one of these quantifiers to specify how many instances of the pattern can occur.  

Quantifier	Description  
*	0 or more occurrences of the preceding pattern. Example: [a-z]* matches any sequence of lower-case letters or the empty string.  
+	1 or more occurrences of the preceding pattern. Example: \d+ matches any non-empty sequence of digits.  
?	0 or 1 occurrences of the preceding pattern. Example: [-+]? matches an optional sign.  
{1,3}	Matches the specified quantity of the preceding pattern. {1,3} will match from 1 to 3 instances. {3} will match exactly 3 instances. {3,} will match 3 or more instances. Example: \d{5,6} matches either 5 or 6 digit numbers.  

Groups  
Parentheses are used similarly as in arithmetic expressions, to create groups. For example, (Mahna)+ matches strings with 1 or more "Mahna", like "MahnaMahna". Without the parentheses, Mahna+ would match strings with "Mahn" followed by 1 or more "a" characters, like "Mahnaaaa".  

Anchors  
Anchor	Description  
^	Matches the beginning of a string. Example: ^(I|You) matches I or You at the start of a string.  
$	Normally matches the empty string at the end of a string or just before a newline at the end of a string. Example: (\.edu|\.org|\.com)$ matches .edu, .org, or .com at the end of a string.  
\b	Matches a "word boundary", the beginning or end of a word. Example: s\b matches s characters at the end of words.  

Special characters  
The following special characters are used above to denote types of patterns:  
\ ( ) [ ] { } + * ? | $ ^ .
That means if you actually want to match one of those characters, you have to escape it using a backslash. For example, \(1\+3\) matches "(1 + 3)". 

### JSON (JavaScript Object Notation)  
Format  
A JSON document contains one of the following data types:  

Type	Example  
string	"crockford"  
number	42  
boolean	true  
array	[null,42,"crockford"]  
object	{"a":1,"b":"crockford"}  
null	null  
Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.  

Here is an example of a JSON document.  

{  
  "class": {  
    "title": "web programming",  
    "description": "Amazing"  
  },  
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],  
  "start": "2025-02-01",  
  "end": null  
}  
JSON is always encoded with UTF-8. This allows for the representation of global data.  

Converting to JavaScript  
You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.  

const obj = { a: 2, b: 'crockford', c: undefined };  
const json = JSON.stringify(obj);  
const objFromJson = JSON.parse(json);  

console.log(obj, json, objFromJson);  

// OUTPUT:  
// {a: 2, b: 'crockford', c: undefined}  
// {"a":2, "b":"crockford"}  
// {a: 2, b: 'crockford'}  
Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.  

### JavaScript Functions  
In JavaScript functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.

The basic syntax of a function begins with the function keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement may return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.

function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.

function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
Function parameters
When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is undefined when the function executes.

In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.

function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
Anonymous functions
Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.

// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
Creating, passing, and returning functions
Here are examples of assigning functions to variables, as well as using functions as parameters and return values.

// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value
Inner functions
Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details.

function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish  


### Arrow Functions  
Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.

() => 3;
The following two invocations of sort are equivalent.

const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
Besides being compact, the arrow function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

Return values
Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
This pointer
Next, arrow functions inherit the this pointer from the scope of where it is created. This makes what is known as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript scope. For now consider the following example.

The function makeClosure returns an anonymous function using the arrow syntax. Notice that the a parameter is overridden, a new b variable is created, and both a and b are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.

function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
Next, we declare the variables a and b at the top level scope, and call makeClosure with a.

const a = 'a';
const b = 'b';

const closure = makeClosure(a);
Now, when we call closure function it will output the values contained in scope where it was created instead of the current values of the variables.

console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

Putting it all together
Now that you know how functions work in JavaScript, let's look at an example that demonstrates the use of functions, arrow functions, parameters, a function as a parameter (callback), closures, and browser event listeners. This is done by implementing a debounce function.

The point of a debounce function is to only execute a specified function once within a given time window. Any requests to execute the debounce function more frequently than this will case the time window to reset. This is important in cases where a user can trigger expensive events thousands of times per second. Without a debounce the performance of your application can greatly suffer.

The following code calls the browser's window.addEventListener function to add a callback function that is invoked whenever the user scrolls the browser's web page. The first parameter to addEventListener specifies that it wants to listen for scroll events. The second parameter provides the function to call when a scroll event happens. In this case we call a function named debounce.

The debounce function takes two parameters, the time window for executing the window function, and the window function to call within that limit. In this case we will execute the arrow function at most every 500 milliseconds.

window.addEventListener(
  'scroll',
  debounce(500, () => {
    console.log('Executed an expensive calculation');
  })
);
The debounce function implements the execution of windowFunc within the restricted time window by creating a closure that contains the current timeout and returning a function that will reset the timeout every time it is called. The returned function is what the scroll event will actually call when the user scrolls the page. However, instead of directly executing the windowFunc it sets a timer based on the value of windowMs. If the debounce function is called again before the window times out then it resets the timeout.

function debounce(windowMs, windowFunc) {
  let timeout;
  return function () {
    console.log('scroll event');
    clearTimeout(timeout);
    timeout = setTimeout(() => windowFunc(), windowMs);
  };
}  


### JS Objects and Classes  
A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).

const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.

Object-literals
You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object.

const obj = {
  a: 3,
  b: 'fish',
};
Object functions
Object has several interesting static functions associated with it. Here are some of the commonly used ones.

Function	Meaning
entries	Returns an array of key value pairs
keys	Returns an array of keys
values	Returns an array of values
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
Constructor
Any function that returns an object is considered a constructor and can be invoked with the new operator.

function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
This pointer
Notice in the last example the use of the keyword this when we referred to the name property (this.name). The meaning of this depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the this pointer in the instruction on scope.

Classes
You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.

class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
You can make properties and functions of classes private by prefixing them with a #.

class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
Inheritance
Classes can be extended by using the extends keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the super function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the super keyword.

class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer  


### Document Object Model (DOM)  
The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.

> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
p {
  color: red;
}
For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

dom

Accessing the DOM
Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree.

function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.

const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
Modifying the DOM
The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
To delete elements call the removeChild function on the parent element.

function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
Injecting HTML
The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.

const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.

Event Listeners
All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.

const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.

Event Category	Description
Clipboard	Cut, copied, pasted
Focus	An element gets focus
Keyboard	Keys are pressed
Mouse	Click events
Text selection	When text is selected
You can also add event listeners directly in the HTML. For example, here is a onclick handler that is attached to a button.

<button onclick='alert("clicked")'>click me</button>  


### Kahoot Midterm Review  
1. Can use this CSS to load fonts from google: @import url('https://fonts.googleapis.com/css?family=Quicksand');  
2. (/20cd1ae0-4ee3-4acc-9db4-6e0485f49c35.webp): Hello World text will be oriented as two lines, with the first one saying "World" and the second "Hello"  
3. CSS padding puts space around the content of selected elements
4. Executing:  
const f = y => ++y;  
console.log(f(3))  
Will output 4  
5. In HTML, \<div\> creates a division element  
6. Order of CSS box model, outside going in: margin, border, padding, content  
7. (/b575bfc2-2296-4879-9609-8e550f900cb3.webp): Output: ['rat', 'fish']  
    - i at the end means ignore case
8. (/bb5e65e6-8855-4376-9a14-a5a40ba123a9.webp): Output: cow:rat:fish  
9. (/70dfbff7-5d45-428a-bb6e-af9fe9201a0c.webp): Output: ['a1', 'a2', 'a3']  
10. document.querySelector('p').addEventListener('mouseover', console.log);  
    - Adds a mouseover event listener to a p element
11. HTML tag for unordered list: <ul>
12. JavaScript functions:  
    - const f = (x) => {}   (assigning a variable to an arrow function)
    - function f(x) {}  (this is the standard way of declaring a function)
    - const f = function(x) {}   (anonymous, declare variable equal to function)
    - NOT valid: function f(x) = {}   (don't use the equals sign to declare a function)  
13. Include JavaScript in HTML:
    - \<script\>1+1\</script\>
    - \<script\> src="main.js" />
    - \<div onclick='1+1' />
    - NOT valid: \<javascript\>1+1\</javascript\>  
14. Valid Javascrpit object: {n:1}  (no equals)  
    NOT valid:
    - {n=1}
    - {"n"=1}
    - {"n"="1"}  
15. The DOM textContent property sets the child text for an element  
16. HTML hyperlink: \<a href='https://c.com'\>x\</a\>
17. .header for classes, #header for id  
18. Valid JSON: {"x":3}
    NOT valid:
    - {'x':3}
    - {"x":undefined}
    - {x:3}
19. Console command to make a script executable: chmod +x deploy.sh  
20. DNS subdomain example: c260.cs.byu.edu  
21. To point to another DNS record, you should use CNAME (alias: I want to host name with this host name (map to it—forward request—not redirects, just aliases))  
    Other DNS:
    - A: some host name mapping to IP address
    - TXT: storing text so someone can get it
    - SOA: how you link your DNS records w/ someone else
22. (/2190cbae-7213-437e-8981-09d5846c8c3e.webp) outputs: burger fries taco shake noodles  
23. (/23f674a9-8d2f-4bc3-a358-852c63e25498.webp) outputs: A D B
    - Await/async: waits until the await is done
    - promise: doesn’t wait until it’s done

## After Midterm   
### node.js
Just remember the main steps:  
1. Create your project directory  
2. Initialize it for use with NPM by running npm init -y  
3. Make sure .gitignore file contains node_modules  
4. Install any desired packages with npm install <package name here>  
5. Add require('<package name here>') to your application's JavaScript  
6. Use the code the package provides in your JavaScript  
7. Run your code with node index.js  

Browser to "localhost:8080" to see your website

## Midterm Questions
In the following code, what does the link element do?  
- It links to a CSS file  
In the following code,  what does a div tag do?  
- It creates a division element  
In the following code, what is the difference between the #title and .grid selector?  
- #title is an id selector and .grid is a class selector  
In the following code, what is the difference between padding and margin?  
- Padding puts space around the content of selected elements and margin puts space around the outside of selected elements  
Given this HTML and this CSS how will the images be displayed using flex?  

To display images using flexbox, you can use the following HTML and CSS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Image Gallery</title>
    <style>
        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .gallery img {
            max-width: 100%;
            height: auto;
        }
        .gallery-item {
            flex: 1 1 calc(33.333% - 10px);
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <div class="gallery">
        <div class="gallery-item"><img src="image1.jpg" alt="Image 1"></div>
        <div class="gallery-item"><img src="image2.jpg" alt="Image 2"></div>
        <div class="gallery-item"><img src="image3.jpg" alt="Image 3"></div>
        <div class="gallery-item"><img src="image4.jpg" alt="Image 4"></div>
        <div class="gallery-item"><img src="image5.jpg" alt="Image 5"></div>
        <div class="gallery-item"><img src="image6.jpg" alt="Image 6"></div>
    </div>
</body>
</html>
```

In this example:
- The `.gallery` class uses `display: flex` to create a flex container.
- The `flex-wrap: wrap` property allows the images to wrap to the next line if they don't fit in one row.
- The `gap: 10px` property adds space between the images.
- Each `.gallery-item` is set to take up one-third of the container's width minus the gap, ensuring a responsive layout.
  
What does the following padding CSS do?  
- It puts some pixels of padding on all sides of the element  
What does the following code using arrow syntax function declaration do?  

Arrow Functions  
Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.

() => 3;
The following two invocations of sort are equivalent.

const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
    return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
Besides being compact, the arrow function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

Return values
Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

() => 3;
// RETURNS: 3

() => {
    3;
};
// RETURNS: undefined

() => {
    return 3;
};
// RETURNS: 3
This pointer
Next, arrow functions inherit the this pointer from the scope of where it is created. This makes what is known as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript scope. For now consider the following example.

The function makeClosure returns an anonymous function using the arrow syntax. Notice that the a parameter is overridden, a new b variable is created, and both a and b are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.

function makeClosure(a) {
    a = 'a2';
    const b = 'b2';
    return () => [a, b];
}
Next, we declare the variables a and b at the top level scope, and call makeClosure with a.

const a = 'a';
const b = 'b';

const closure = makeClosure(a);
Now, when we call closure function it will output the values contained in scope where it was created instead of the current values of the variables.

console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

Putting it all together
Now that you know how functions work in JavaScript, let's look at an example that demonstrates the use of functions, arrow functions, parameters, a function as a parameter (callback), closures, and browser event listeners. This is done by implementing a debounce function.

The point of a debounce function is to only execute a specified function once within a given time window. Any requests to execute the debounce function more frequently than this will case the time window to reset. This is important in cases where a user can trigger expensive events thousands of times per second. Without a debounce the performance of your application can greatly suffer.

The following code calls the browser's window.addEventListener function to add a callback function that is invoked whenever the user scrolls the browser's web page. The first parameter to addEventListener specifies that it wants to listen for scroll events. The second parameter provides the function to call when a scroll event happens. In this case we call a function named debounce.

The debounce function takes two parameters, the time window for executing the window function, and the window function to call within that limit. In this case we will execute the arrow function at most every 500 milliseconds.

window.addEventListener(
    'scroll',
    debounce(500, () => {
        console.log('Executed an expensive calculation');
    })
);
The debounce function implements the execution of windowFunc within the restricted time window by creating a closure that contains the current timeout and returning a function that will reset the timeout every time it is called. The returned function is what the scroll event will actually call when the user scrolls the page. However, instead of directly executing the windowFunc it sets a timer based on the value of windowMs. If the debounce function is called again before the window times out then it resets the timeout.

function debounce(windowMs, windowFunc) {
    let timeout;
    return function () {
        console.log('scroll event');
        clearTimeout(timeout);
        timeout = setTimeout(() => windowFunc(), windowMs);
    };
}  


What does the following code using map with an array output?  
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // OUTPUT: [2, 4, 6, 8, 10]
```  
What does the following code output using getElementByID and addEventListener?  
- getElementByID selects an element by its id and addEventListener adds an event listener to the element  
What does the following line of Javascript do using a # selector?  
- It selects an element by its id  
Which of the following are true? (mark all that are true about the DOM)  
- The DOM is an object representation of the HTML elements that the browser uses to render the display  
- The browser exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML  
- The DOM is a tree structure with the document node at the top  
- The DOM supports the ability to insert, modify, or delete the elements in the DOM  
- The DOM supports the ability to attach a function that gets called when an event occurs on the element  
- The DOM supports the ability to inject entire blocks of HTML into an element  
- The DOM supports the ability to select elements from the document using a CSS selector  
- The DOM supports the ability to access the parent element of an element  
- The DOM supports the ability to access the child elements of an element  
- The DOM supports the ability to access the text content of an element  
By default, the HTML span element has a default CSS display property value of:   
- inline  
How would you use CSS to change all the div elements to have a background color of red?  
- div { background-color: red; }  
How would you display an image with a hyperlink in HTML?  
- \<a href="https://www.google.com"\>\<img src="image.jpg" alt="image"\>\</a\>  
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?  
- content, padding, border, margin
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?  
- set the color of the p element to green  
What will the following code output when executed using a for loop and console.log?  
- For loop stuff  
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?  
- document.getElementById("byu").style.color = "green";  
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?  
- \<p\>, \<ol\>, \<ul\>, \<h2\>, \<h1\>, \<h3\>
How do you declare the document type to be html?  
- \<!DOCTYPE html\>  
What is valid javascript syntax for if, else, for, while, switch statements?  
- if (x > y) { alert("Hello World"); } else { alert("Goodbye"); }  
- for (i = 0; i < 10; i++) { console.log(i); }  
- switch(fruits) { case "Banana": alert("Hello") break; case "Apple": alert("Welcome") break; default: alert("Neither"); }  
- while (i < 10) { console.log(i); i++; }  
What is the correct syntax for creating a javascript object?  
- const obj = { a: 3, b: "fish" };  
Is it possible to add new properties to javascript objects?  
- Yes  
If you want to include JavaScript on an HTML page, which tag do you use?  
- \<script\>  
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?  
- document.getElementById("animal").textContent = "crow";  
Which of the following correctly describes JSON?  
- JSON is a lightweight data-interchange format
- JSON is easy for humans to read and write
- JSON is easy for machines to parse and generate
- JSON is a text format that is completely language independent
- JSON is a subset of the JavaScript object notation syntax
- JSON is a subset of the JavaScript object literal notation  
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?  
- chmod: change file permissions
- pwd: print working directory
- cd: change directory
- ls: list files
- vim: text editor
- nano: text editor
- mkdir: make directory
- mv: move file
- rm: remove
- man: manual
- ssh: secure shell
- ps: process status
- wget: download
- sudo: super user do  
Which of the following console command creates a remote shell session?  
- ssh  
Which of the following is true when the -la parameter is specified for the ls console command?  
- It lists all files including hidden files and provides additional information about the files  
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?  
- top level domain: click
- subdomain: banana.fruit  
- root domain: bozo.click  
Is a web certificate is necessary to use HTTPS.  
- Yes  
Can a DNS A record point to an IP address or another A record?  
- A DNS record can only point to an IP address  
Port 443, 80, 22 is reserved for which protocol?  
- 443: HTTPS  
- 80: HTTP  
- 22: SSH  
What will the following code using Promises output when executed?  
- promises work by waiting until the promise is resolved
- an example of promises is:
    - const promise = new Promise((resolve, reject) => { setTimeout(() => resolve("done!"), 1000); });
    - promise.then(alert);

const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2

Another example
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed

Async/await: 
One important restriction for working with await is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword. Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.  

const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse);
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done

Another example:  
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};

try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}