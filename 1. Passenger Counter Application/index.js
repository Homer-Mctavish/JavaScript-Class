
/*anything encompassed by '/8' with eight as a star or asterisk 
and closed with '8/' with eight as a star or asterisk is a comment,
and will not be run as code in our program.*/

/*Variable declaration. A variable is used to establish 
information about our program.
In this case, imagine vaiables as simply a carboard box.
we use it to hold things we want our shipping container
(program) to carry with it. These specific variables are
defined using 'let'. Let is special because it places our 
carboard box at a particular place in our shipping container.
when we're walking into our shipping container, some boxes
will be seen before others because they're packed closer
to the entrance. variables defined with 'let' make this analogy
possible, by establishing the position in the program they
are defined at. since we want these variables to be used by 
the functions below them, we must define them at the top of 
the program to allow the compiler to keep track of their existence
before it keeps track of the functions.*/
let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")


/* The basis for our code execution when a program is
run will be, for the time being, functions. Functions
act as a mover for our carboard box variables. they 
move a certain number of the boxes assigned to them to a 
certain place in the shipping container of a program. a 
function, likewise, moves variables to a certain
place in our program. It is also often the case that they move 
and change the variable 'contents'
(what a variable equals, 0 in the case of count) as well, 
muddling the shipping analogy a bit. in this case our variables
indeed will be redefined, and it will be our purpose to redefine
not only the variables in this JS file but also those of our
html file. the result will be something we can use to change
the count of passengers in our passenger counting app.*/ 
function increment() {


}

function save() {


}

console.log("Let's count people on the subway!")
