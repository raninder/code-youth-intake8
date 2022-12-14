#getElementbyId(), getElementsByClassName

Ex: 1 heading, 2 paragraphs
click on a button, heading chnage to something new
para1 color chnages to green
para2 background color to yellow

Ex2:  change color of colors in a list
red
green
purple
blue

Ex3: change color of fruits, change heading to Fruits grocery List
list of Fruits
Apples
Kiwi
Grapes
Orange
Stawberry
Pomegranate

# querySelector(), querySelectorAll()
p
#p1
.p1

Ex: https://www.teaching-materials.org/javascript/exercises/dom.html

Ex1: Section 1

We have just <b>started</b> this <b>section</b> for the users (<b>beginner</b> to <b>intermediate</b>) who want to work with various <b>JavaScript</b> problems and write scripts online to test their <b>JavaScript</b> skill.

Heading-appear in the centre, font size bigger, text Main Section, Red in color

Paragraph- everything bold should be highlighted font style changed to cursive

onmouseover bold part is highlighted

Ex2: two buttons -create and remove,,,create list of 5 elements, remove last 2 elements on a click of button
<ul>
<li>Math
<li>english

https://www.tutorialstonight.com/js/javascript-dom-manipulation
Ex: Create a table element and add it to the body.
Create a table row element and add it to the table.
Remove 2nd row from the table.
Add a class attribute to the table row.
Replace 3rd row with a new row.


Ex: create a form with fields name, password and confirm password. validations- password should match confirm password, password should contain digits and alphabets, no field should be empty

value. includes()

https://www.jigsawacademy.com/blogs/what-is-password-validation-in-javascript-beginners-guide/


13 Dec. 2022 DOM and events
Ex1: 
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”

Ex2: two buttons: dark mode and light mode (background black text white)

Ex3: when form input get focus, background color light blue, when out of focus, background color is gray, when changed, color becomes red (bonus: try it on select option)

Ex4: 
Listen for the form submission
submit.addEventistener("submit",function (event){
event.preventDefault();
})
When the form is submitted, prevent the default behavior
Grab the quantity input value and the product price input value
Create a new <li> element.  Set the text on the new <li> to include the quantity and product name from the form.
Append the new `<li>` to the `<ul>` on the page
(https://forum.freecodecamp.org/t/forms-events-exercise/539910)

Ex5: chnaging one image on another on double click

<!-- <style>
	.style1{

	}

div.className="style1"
div.classList.add("style1")
div.setAttribute("class","style1") -->