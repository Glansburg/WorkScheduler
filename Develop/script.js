// query selectors for save button
var timeDisplay = $('#currentDay');
var saveBtn = $("saveBtn");
var textedArea = $("#textArea");









// dayjs for our current time and date
function displayTime() {
var time = dayjs().format('hh:mm:ss');
$('#currentTime').text(time);
}

displayTime()

function displayDate() {
var date = dayjs().format('dddd, MMM DD, YYYY');
$('#currentDay').text(date)
}

displayDate()

function schduleFromStorage() {
console.log("what is going on here")
var schedule = localStorage.getItem('schedule');
if (schedule) {
  schedule = JSON.parse(schedule);
  return schedule;
}

}






saveBtn.on('click', function (event) {
  //console.log("save your schdule", event.target)
  console.log("save your schedule", $(this))
  //$('col-8 col-md-10 description').siblings(event)
  $(this).siblings(".description")
  localStorage.setItem('schedule', JSON.stringify(event));
});














// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

})
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



