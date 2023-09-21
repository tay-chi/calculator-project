# Calculator Project

##### Many thanks to Brian Holt for creating this project!!

## Project time!

We are going to rebuild the calculator on iOS! If you've never seen that before, here it is:

Let's going over the requirements:

1. Open the HTML file in your browers and take a look at the HTML and CSS files for the calculator.
2. The calculator should function like a normal calculator
3. Do not implement % or .. You can assume everything will be an integer.
4. C means clear. When a user clicks it, it should clear everything and go back to the first state it was in when the page loaded.
5. Doing the back arrow is extra credit. It's like pressing backspace; it'll delete the last character typed. If it's clicked when there's only one digit, it sets the current number to be 0.
6. Don't worry about if the number is too long for the screen.
7. Calculators tend to have some special behavior when you hit equals: if you type another number it erases the results and starts over. Feel free to do that but also free free (like me) to just treat it normally and make the user hit C if they want to clear it.


### JavaScript Tips and Hints
- There is no wrong way to do this. You can use console.log everywhere while writing code. Just remember to take them out at the end.
- Many small functions is very preferable to one large function. Have each function do one thing well as opposed to having giant functions that do everything. If you find a function doing too, break it into smaller pieces. 
- You'll need to keep track of several variables. Make sure these variables are stored in a place where they stay in scope.
You can add an event listener to each button individually, or you can use one listener at the root of the button. 
- Ask questions and try things out!
