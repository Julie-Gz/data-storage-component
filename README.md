# Frontend Mentor - Fylo data storage component

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot
- [Desktop] (https://github.com/Julie-Gz/data-storage-component/blob/main/Desktop-view.jpeg)
- [Mobile] (https://github.com/Julie-Gz/data-storage-component/blob/main/Mobile-view.jpeg)

### Built with

- HTML5
- CSS
- Flexbox
- Mobile-first approach

### What I learned

In this challenge I learned how to style the thumb and track of a range and displaying the value shown by the thumb.
The way I designed the range was by first creating a form and then creating an input type range inside of it.
````html
<form oninput="gigabytes.value=parseInt(1000 - range.value)">
	<input type="range" id="range" name="range" min="0" max="1000" step="1" value="815">
	<p class="display"><output name="gigabytes" for="range">185</output> GB left</p>
</form>

The oninput attribute takes in the value entered by the user (Here the user uses the thumb to scroll and the value that they stop at is 
the input value). The output attribute is used to display the result of a calculation made. So this line => oninput="gigabytes.value=parseInt(1000 - range.value)" means the value dislplayed in the element called "gigabytes" will be the result of the equetion
"1000 - range.value"; range.value is the user selects as they use the thumb and parseInt makes sure the result returned is an integer.

As for the color of the range slider. I used javscript to change the colour as the thumb is moved along the track.

````
````js
const slider = document.getElementById("range");
const min = slider.min;
const max = slider.max;
const value = slider.value;


slider.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${(value-min)/(max-min)*100}%, hsl(229, 57%, 11%) ${(value-min)/(max-min)*100}%, hsl(229, 57%, 11%) 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${(this.value-this.min)/(this.max-this.min)*100}%, hsl(229, 57%, 11%) ${(this.value-this.min)/(this.max-this.min)*100}%, hsl(229, 57%, 11%) 100%)`
};

````
````
first I created variables for the range slider, its minimum value and its maximum value, and its initial value the first code styles the track in its initial form, the second styles as the thumb moves across it. 
The first code basically styles the left side (0% up to the current vale) of the thumb with a gradient color, and the right (from the current value to 100%) witha very dark blue color.
In the second code we created a function that targets the range slider, here the this keyword is used so it takes the value set by the user. While "value" in the first code refered to the initial value, this.value refers to the current value. By using the this key word, it wouldn't matter what the value is the left of the thumb would always have a gradient color and the right of the thumb would have a dark blue color.

````

### Useful resources
- [Input Range tag styling with CSS](https://www.youtube.com/watch?v=0T2NnnZDzkk): This is a tutorial on style range slider by Before Semicolon. I never styled a range slider before this challenge and i found his tutorial very helpful and easy to understand.
- (https://codepen.io): I searched range sliders on codepen. There were many designs and different approaches, some were too advanced for me. Unfortunately, I forgot to bookmark the one that I used as a reference for this challenge, but codepen in general is very helpful and you could find many solutions just by typing range sliders in the search bar.

## Author
- Github - [Julie-Gz](https://github.com/Julie-Gz)
- Frontend Mentor - [@Julie-Gz](https://www.frontendmentor.io/profile/Julie-Gz)
