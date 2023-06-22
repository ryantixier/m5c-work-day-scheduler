// QUERY SELECTORS
var currentDay = document.querySelector("#currentDay");
var saveBtn = document.getElementById("save-button");
// var timeFrame = document.getElementById("hour-x");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  //
  function displayCurrentDay() {
    currentDay.textContent = dayjs().format("dddd, MMMM D, YYYY");
  }
  displayCurrentDay();
  //
  //

  //
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.

  // var scheduledEventArray = [];
  $(".saveBtn").on("click", clickSave);
  function clickSave(event) {
    event.preventDefault();
    var scheduledEvent = $(event.target).siblings()[1].value.trim();
    // TO DO: add scheduledEvent to array
    var key = $(event.target).parent().attr("id");
    var storedEvent = localStorage.getItem("scheduledEvent");
    if (storedEvent) {
      storedEvent = JSON.parse(storedEvent);
    } else {
      storedEvent = {};
    }
    storedEvent[key] = scheduledEvent;

    localStorage.setItem("scheduledEvent", JSON.stringify(storedEvent));
  }
  //
  //
  //
  function renderScheduledEvents() {
    var storedEvent = localStorage.getItem("scheduledEvent");
    if (storedEvent) {
      storedEvent = JSON.parse(storedEvent);
    } else {
      storedEvent = {};
    }
    Object.entries(storedEvent).forEach(([key, value]) => {
      var block = $(`#${key}`).children()[1];
      block.textContent = value;
      console.log(block);
    });

    //
    // separate forEach to add/remove classes to make the times color-change
    //      iterate through blocks
    //        array of id's? ["hour-9", "hour-10", ..., "hour-17"]
    //        $(`#${key}`)
    //      add past/present/future based on current time of day
    //      remove past/present/future from HTML
    //

    // savedText.textContent = storedEvent;
    // console.log(storedEvent);
    // storedEvent.textContent = scheduledEventArray.length;
    // console.log(scheduledEventArray.length);
    // for (var i = 0; i < scheduledEventArray.length; i++) {
    // var storedEvent = scheduledEventArray[i];
    // }
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

// TO-DO'S
// TO-DO'S
// TO-DO'S
//
// connect each save button to corresponding time block
// ... using 'this'
//
// create function so color-coding dynamically corresponds to time of day
// ... QUESTION: edit CSS at all?
//
