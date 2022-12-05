# Introduction to HTML,CSS  and Javascript
Programming exercises:if-else
https://codeforwin.org/2015/05/if-else-programming-practice.html
https://www.w3resource.com/c-programming-exercises/conditional-statement/index.php

loops
http://www.beginwithjava.com/java/loops/questions.html

Arrays
https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
https://www.tutorialride.com/c-array-programs/30-c-programs-and-code-examples-on-arrays.htm

objects
https://javascript.info/object


If questions(2022-11-25)
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

Logical Operator and for loop questions(28/11/22)

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

Loops(29/11/22):

   /*
        Console.log() every number from 0 - 10 using a for loop
        do it again using a while loop
    */


Arrays(1/12/22)
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
