// QUERY SELECTORS
var currentDay = document.querySelector("#currentDay");
var saveBtn = document.getElementById("save-button");

// JQUERY
$(function () {
  function displayCurrentDay() {
    currentDay.textContent = dayjs().format("dddd, MMMM D, YYYY");
  }
  displayCurrentDay();

  // saves event info to localStorage, specific to timeblock
  $(".saveBtn").on("click", clickSave);
  function clickSave(event) {
    event.preventDefault();
    var scheduledEvent = $(event.target).siblings()[1].value.trim();
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

  // restores scheduled events upon page load
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
    });

    // configures color to track time of day
    $(".time-block").each(function () {
      var currentHour = dayjs().hour();
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  renderScheduledEvents();
});
