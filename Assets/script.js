// QUERY SELECTORS

var currentDay = document.querySelector("#currentDay");
var saveBtn = document.getElementById("save-button");
var savedText = document.getElementById("saved-text");
// var timeFrame = document.getElementById("hour-x");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  function displayCurrentDay() {
    currentDay.textContent = dayjs().format("dddd, MMMM D, YYYY");
  }
  displayCurrentDay();
  //
  //

  //
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.

  var scheduledEventArray = [];
  saveBtn.addEventListener("click", clickSave);
  function clickSave() {
    var scheduledEvent = savedText.value.trim();
    scheduledEventArray.push(scheduledEvent);
    localStorage.setItem("scheduledEvent", JSON.stringify(scheduledEvent));
    console.log(scheduledEventArray);
  }
  //
  //
  //
  //
  //
  // WORK ON CODE BELOW
  //
  //
  function renderScheduledEvents() {
    var storedEvent = JSON.parse(localStorage.getItem("scheduledEvent"));
    if (storedEvent !== null) {
      storedEvent.textContent = scheduledEventArray.length;
      for (var i = 0; i < scheduledEventArray.length; i++) {
        var storedEvent = scheduledEventArray[i];
        scheduledEventArray.push(storedEvent);
      }
    } else {
      return;
    }
  }
  renderScheduledEvents();
  //
  // HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  //
  // WORK ON CODE ABOVE
  //
  //
  //
  //
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
  //
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  //
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  //
  // HINT: How can the id attribute of each time-block be used to do this?
  //
  //
  //
  //
  //
  //
});
