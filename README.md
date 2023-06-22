# Workday Scheduler

## Description

This application was created to help track one's daily schedule; an hourly split is tracked between business hours (9:00AM-5:00PM), with color codes used to indicate time of day. Users are able to write text in each timeblock text-area, which will save to local storage. Upon reloading the page, the previously saved event(s) will render to the respective time block(s).

### Preview

![Screenshot of Home Page](./Assets/screenshots/Screenshot%20Home%20Page.png)

### Deployment

GitHub Pages:
https://ryantixier.github.io/m5c-work-day-scheduler/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)

## Installation

N/A

## Usage

To use the application, write a scheduled event in the timeblock corresponding with when the event will occur; click the save icon to the right of the timeblock to store the event in local storage, so events will not be lost upon page reload.

The time-of-day tracking feature is automatically updated. The timing color code is as follows...

... past: gray

... present: green

... future: red

As the day progresses, the green block will track with the hour of the day, leaving behind a gray block and replacing the next, red block in the calendar.

## Credits

The Day.js library was utilized for the dynamic time-tracking/-updating utilities.

Please reference the repository folder titled "starter-code" to view the source code files provided for the challenge assignment.

The developer utilized tutoring available through the University of Denver's Full-Stack Coding Boot Camp for portions of the code; all other code was scripted by the repository owner (see Contact below for details).

## License

N/A

## Tests

N/A

## Contact

GitHub Username: ryantixier

GitHub Link: https://github.com/ryantixier

Email: ryan.m.tixier@gmail.com
