# Introduction to HTML,CSS  and Javascript
https://tutorial.techaltum.com/

Programming exercises:if-else
https://codeforwin.org/2015/05/if-else-programming-practice.html
https://www.w3resource.com/c-programming-exercises/conditional-statement/index.php

loops
http://www.beginwithjava.com/java/loops/questions.html

Arrays
https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
https://www.tutorialride.com/c-array-programs/30-c-programs-and-code-examples-on-arrays.htm
https://www.tutorialsandyou.com/javascript/javascript-array-exercises-practice-and-solution-15.html

objects
https://javascript.info/object
https://www.teaching-materials.org/javascript/exercises/objects
https://www.tutorialsandyou.com/javascript/javascript-object-destructuring-exercises-practice-and-solution-22.html

Quiz:
https://www.javatpoint.com/javascript-quiz


# If questions(2022-11-25)
1. Write a program to check whether a number is negative, positive or zero.

2. Write a program to check whether a number is even or odd.

3. Write a program to check whether a year is leap year or not.

4. Calculating marks for a student
   
   Create two variables, 'marks' and 'total'
   Set total to 500
   Set marks to a number between 0 and 500
   Calculate the percentage for the marks and find what letter grade to give the student

*Grades*
Percentage greater than or equal to 90% : Grade A
Percentage greater than or equal to 80% : Grade B
Percentage greater than or equal to 70% : Grade C
Percentage greater than or equal to 60% : Grade D
Percentage greater than or equal to 40% : Grade E
Percentage less than 40% : Grade F

6. There are three switchs and a light, switchA, switchB, and switchC
    In order for the light to turn on switchA and switchB must be on and switchC must be off.
    Write this using an if statement



28/11/22
ex1: input number, if number divisble by 3, print milk
if divisble by 5, print pop
if by 3 and 5, print popmilk

ex2: print even and odd numbers from 1 to 50
1 is odd
2 is even
3 is odd
4 is even....


ex3:Read 10 numbers using prompt and find their sum and average.

# Logical Operator and for loop questions(28/11/22)

//Logical Opperators
/*
1)  Redo this question from friday using logical opperators

    There are three switchs and a light, switchA, switchB, and switchC
    In order for the light to turn on switchA and switchB must be on and switchC must be off.
    Write this using an if statement
    
    */

/*
2) Redo this question from friday using logical opperators

    There are 4 switches and 1 light, switchA, switchB, and switchC, and switchD
    In order for the light to turn on switchA must be on and switchB or switchD must be on, switchC must be off.

*/


//For loop

/*
1)
Create a variable called myNumber, set it to a number between 0 and 10
Create a for loop that runs from 0 to 10, if i equals your number, console.log("My number is " + i)
*/

/*
2)
Create a for loop that runs 3 times,
Before the loop starts, console.log("Loop Start")
if the loop is on it's first iteration, console.log("First Iteration")
if the loop is on it's second iteration, console.log("Second Iteration")
if the loop is on it's third iteration, console.log("Third Iteration")
when the for loop ends, console.log("Loop End")
*/

/*
3)
    Create a variable called year, set it to 1970
    Using a for loop check if each year from 1970 to 2022 is a leap year
    if it is console.log(year + " is a leap year")
*/

# Loops(29/11/22):

   /*
        Console.log() every number from 0 - 10 using a for loop
        do it again using a while loop
    */


# Arrays(1/12/22)
1. Count even elements in an array.  [22,5,8,12,45,78] ==>4   count=0;  count++;
2. Find the sum and average of n array elements
3. Search an element in an array
4. Find the smallest element from an array. =>  5 is my smallest elemnt and its position is 2.//optional
let min = a[0];
for(1-   length)
if(min>a[1,2,3])
min=a[i]

Arrays(1/12/22) - Given as bonus
    //Arrow Functions

    /*
    1.
    Write an arrow function to find the sum of two numbers
    */


    /*
    2.
    Write an arrow function to console.log() every item in the objects array
    */


    //Arrays

    /*
    1.

    Find any mistakes in the following array and correct them

    Let "myArray" = '[true, `Howdy`]'
    */

    /*
    2.

    There are 4 switches and a light
    All four switches are contained in the switches array.
    In order for the light to turn on the switch in position 0 must be on and the switches in either position 1, or position 3 must be on. The switch in position 2 must be off
    */

    let switches = [true, true, false, true]
    let light;

    /*
    4.

     The sequence should be true, false, true, false, true, false...
     Using a loop check if any items in the array break the sequence.
     If any item in the array is incorrect, change it to be correct

     console.log() sequence at the end to see if you fixed the array
    */

    let sequence = [true, false, true, true, false, true, true, true, false]

    /*
    5.
    
    Using a loop check to see if every number in the fibonacci array is correct.
    If any number is incorrect console.log() that the number is not correct

    !Remember in a fibonacci sequence each number must equal the sum of the two that come before it with the execption of the first two numbers
    */

    let fibonacci = [0,1,1,2,3,5,8,13,21,35,55,89,144,233]



# Array Methods(02/12/22)
        // .push();
    /*
        1)
        Decalare an empty array
        Using a for loop add the number 0 - 10 to the array
    */
    


    /*
        2)
        Add everyone from toBeAdded to the banList array then empty the toBeAdded Array
        !Hint: try looking up: "js how to empty an array"
        */
    let toBeAdded = ["Jomsly", "Henrick", "Darsha"]
    let banList = ["Budly","Gurtrood","dimsly"]



   //  .pop(); .unshift(); .shift()
   /*
    1) Using only pop(), push(), unshift(), and shift() make weekDays start at monday and end at sunday in the correct order
   */
    let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"]



  /*
    1a)
    Add fifty random whole numbers between 0 and 100 to myNumbers
    console.log(myNumbers) after all 50 numbers are added
    */
    let myNumbers = [];
    
    
    
    
    /*
    1b)
    split the numbers into two arrays, 'even' and 'odd'
    */



    /*
    1c)
    find the average of myNumbers
    find the median of myNumbers
    */

    /*
    .map(), .trim()

    Q1 Define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end. The cleanNames() function should use the array map method to return a new array full of trimmed names. For example:
    cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]) 
    should give
    ["avengers", "captain_america", "ironman", "black panther"]
    */



# Array and objects(05/12/2022)
        //Arrays
    
    /*
    .includes()
    1.  
    Using the .includes() method find if both arrays include the number 50
    if both arrays have the number 50 console.log("both")
    otherwise console.log() which array has the number 50
    */
   let arr1 = [1,5,50,4,7,19]
   let arr2 = [5,5,4,49,7,11]

   
    /*
    .includes() .push()
    2.
    Take everything from the list array and put it into the cart array.
    If something from list is already in cart dont add it
    */
   let list = ["shoes","lettuce","cabbage","shirt","ham","soccerball","football","leaf","ranch dressing"]
   let cart = ["lettuce","ham","tetherball","skateboard"]

    /*
    .filter()
    3.
    Using the filter method create a new array that only includes values that are multiples of ten
    */
    let nums = [45,50,55,60,75,80,95,90,100,10,20,15,44]

    /*
    .forEach()
    4.
    Using for each console.log() each item in the nums array from the previous question
    */


    //Objects
    /*
    5.
    Using the userSettings object console.log() everyvalue either of the two ways you have learned: object[key] and object.key
    */
    let userSettings = {
        username:"Jurimo Datatag",
        password:"Password12",
        lastLogin: "01/11/2022",
    }


    /*
    6.
    Set the password from userSettings to a new password using either object.key or object[key]
    */
    


    /*
    7.
    Add a new key to userSettings called theme and set it's value to either 'light' or 'dark'
    */
   




    //Objects and Arrays
    /*
    .sort()
    8.
    Sort this array based on the id in each object
    */
    let userData = [{
        "name":"Sarsha Warsha",
        "position":"Chief of Science",
        "id":3
    },{
        "name" : "Bingle Dorf",
        "position" : "CEO",
        "id":1
    },{
        "name":"Jurimo Datatag",
        "position":"Head of Security",
        "id":2
    }]


Ex: 6/11/22
1. The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

2. Array of Recipes- display all recipes with title, servings, cooking time, ingredients using document.write

# DOM(08/12/2022)
<!-- Ex4: Get the innerHTML of every li from this list and add it to an array. console.log() the array -->
<ul>
    <li class="sports">BasketBall</li>
    <li class="sports">Hockey</li>
    <li class="sports">FootBall</li>
    <li class="sports">Soccer</li>
    <li class="sports">DodgeBall</li>
</ul>

# DOM - Appending(09/12/2022)
    <!-- Ex1: Using .querySelectorAll() Select all the li's in the myList list-->
    <ul id="myList">
        <li>Hello</li>
        <li>WOw</li>
        <li>So Cool</li>
    </ul>
    
    <ul>
        <li>No</li>
        <li>What</li>
        <li>From</li>
    </ul>

    <!-- Ex2: Recreate the following table using only DOM

     <table border="1" class="employeeTable">
        <tr class="headRow">
            <th>Name</th>
            <th>Role</th>
        </tr>
        <tr>
            <td>Bingle Dorf</td>
            <td>CEO</td>
        </tr>
        <tr>
            <td>Jurimo Datatag</td>
            <td>Head of Security</td>
        </tr>
    </table> -->


    <!-- Ex3: Compare the list to the items array. Any items in the array that are not in the list should be added to the list
    let items = ['brocoli','lettuce','grass','cabbage','frisby','window']
    -->
    <ul>
        <li>lettuce</li>
        <li>grass</li>
        <li>frisby</li>
    </ul>

    <!-- Ex4: Create an onclick function for the button that takes the first li in the first list and puts it into the bottom list -->
    <ul class="listOne">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>

    <button>↓Move↓</button>

    <ul class="listTwo">
        
    </ul>

   # Forms(12/12/2022)

    The Book List
    Keep track of which books you read and which books you want to read!

    Create a webpage with an h1 of "My Book List".
    Add a script tag to the bottom of the page, where all your JS will go.
    Copy the array of books from the previous exercise.
    Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
    Bonus: Use a ul and li to display the books.
    Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
    Bonus: Change the style of the book depending on whether you have read it or not.