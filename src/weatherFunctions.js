import { format, parse } from "date-fns";

const changeTimeFormat = (object, oldFormat, changeFormat) => {
  const parsedTime = parse(object.datetime, oldFormat, new Date());
  const newFormat = format(parsedTime, changeFormat);
  object.datetime = newFormat;
}

const filterHours = (start, object) => {
  let filteredArr = [];
  for (let i = 0; i < object.length; i++) {
    if (object[i].datetime === start) {
      let counter = 0; 
      // Get only 12 hour weather data 
      while (counter < 14) {
        filteredArr.push(object[i]);
        i++;
        counter++;
        // Restart i to strart when reaching max to include data in beginning
        if (i === object.length) {
          i = 0;
        }
      }
      return filteredArr;
    }
  }
}

const filterDates = (dates) => {
  const newDates = [];
  // Get dates starting from four tomorrows haha
  for (let i = 1; i < 7; i++) {
    newDates.push(dates[i]);
  }
  return newDates;
}



export { changeTimeFormat, filterHours, filterDates };