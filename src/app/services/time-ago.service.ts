import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeAgoService {

  constructor() { }

  // let dateTemp = "063763699643.069000000"

  // // const unixTime = 1628166292.884000000;
  // // const unixTime = 1628176156
  const unixTime = 1628172118
  const date1 = new Date(this.unixTime * 1000);
  // console.log("HERE--------- " + date.toLocaleDateString("en-IE"));

  // var s = new Date(dateTemp).toLocaleDateString("en-IE")
  // // expected output "8/30/2017"  
  // console.log("THis is the proper way +++++++++ " + s);



  // var date2 = new Date(null);
  // let SECONDS = 1628166292
  // date.setSeconds(SECONDS); // specify value for SECONDS here
  // var result = date.toISOString().substr(11, 8);
  // console.log(result)

  // new Date(SECONDS * 1000).toISOString().substr(11, 8);
  // console.log()

  // const miliseconds = 1628166292;

  // const date1 = new Date(dateTemp);
  // console.log(date1)


  // Blog post
  // https://muffinman.io/javascript-time-ago-function/

  MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  getFormattedDate(date, prefomattedDate = false, hideYear = false) {
    const day = date.getDate();
    const month = this.MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      // Adding leading zero to minutes
      minutes = `0${minutes}`;
    }

    if (prefomattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${prefomattedDate} at ${hours}:${minutes}`;
    }

    if (hideYear) {
      // 10. January at 10:20
      return `${day}. ${month} at ${hours}:${minutes}`;
    }

    // 10. January 2017. at 10:20
    return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
  }


  // --- Main function
  timeAgo(dateParam) {
    if (!dateParam) {
      return null;
    }

    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today.valueOf() - DAY_IN_MS.valueOf());
    const seconds = Math.round((today.valueOf() - date.valueOf()) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();


    let Today = "true" as const;

    if (seconds < 5) {
      return 'now';
    } else if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (seconds < 90) {
      return 'about a minute ago';
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (isToday) {
      return this.getFormattedDate(date, 'Today'); // Today at 10:20
    } else if (isYesterday) {
      return this.getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
      return this.getFormattedDate(date, false, true); // 10. January at 10:20
    }

    return this.getFormattedDate(date); // 10. January 2017. at 10:20
  }


  // --- DEMO
  minuteInMs = 60000;
  hourInMs = this.minuteInMs * 60;
  dayInMs = this.hourInMs * 24;

  dates = [
    new Date(),
    new Date(new Date().getTime() - this.minuteInMs),
    new Date(new Date().getTime() - this.minuteInMs * 45),
    new Date(new Date().getTime() - this.hourInMs),
    new Date(new Date().getTime() - this.hourInMs * 24),
    new Date(new Date().getTime() - this.dayInMs * 5),
  ];



}
