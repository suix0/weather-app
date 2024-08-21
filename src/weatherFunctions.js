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
      while (counter < 6) {
        filteredArr.push(object[i]);
        i++;
        counter++;
      }
      return filteredArr;
    }
  }
}



export { changeTimeFormat, filterHours };