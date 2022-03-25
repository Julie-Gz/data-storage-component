const slider = document.getElementById("range");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${(value-min)/(max-min)*100}%, hsl(229, 57%, 11%) ${(value-min)/(max-min)*100}%, hsl(229, 57%, 11%) 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${(this.value-this.min)/(this.max-this.min)*100}%, hsl(229, 57%, 11%) ${(this.value-this.min)/(this.max-this.min)*100}%, hsl(229, 57%, 11%) 100%)`
};