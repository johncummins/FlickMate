import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeAgoService {

  constructor() { }

  // https://muffinman.io/blog/javascript-time-ago-function/

  MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // unixTime = 1628172123
  // date1 = new Date(this.unixTime * 1000);


  getFormattedDate(date, prefomattedDate = false, hideYear = false, todayOrYest: string) {
    const day = date.getDate();
    const month = this.MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      // Adding leading zero to minutes
      minutes = `0${minutes}`;
    }

    // console.log(todayOrYest)
    if (prefomattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${todayOrYest} at ${hours}:${minutes}`;
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
    // dateParam = this.date1
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

    if (seconds < 5) {
      return 'now';
    } else if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (seconds < 90) {
      return 'about a minute ago';
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (isToday) {
      return this.getFormattedDate(date, true, null, 'Today'); // Today at 10:20
    } else if (isYesterday) {
      return this.getFormattedDate(date, true, null, 'Yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
      return this.getFormattedDate(date, false, true, 'neither'); // 10. January at 10:20
    }

    return this.getFormattedDate(date, false, null, 'neither'); // 10. January 2017. at 10:20
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
