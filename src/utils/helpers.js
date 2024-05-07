import moment from "moment";

export const formatDate = (date) => {
  const formatedDate = moment(date).format("YYYY-MM-DD");

  return formatedDate;
};

export const textToDate = (date) => {
  const formatedDate = moment(date, "YYYY-MM-DD").toDate();
  return formatedDate;
};

export const convertTimeToLT = (time) => {
  const formatedTime = moment(time).format("LT");

  return formatedTime;
};

export const getYear = (date) => {
  const year = date
    ? moment(date).year().toString()
    : moment(date).year().toString();
  return year;
};

export const getMonth = (date) => {
  const month = date
    ? moment(date).format("MMMM Do").split(" ")[0].toUpperCase()
    : moment().format("MMMM Do").split(" ")[0].toUpperCase();
  console.log("🚀 ~ getMonth ~ month:", moment(date).format('dddd'),moment(date).date());
  return month;
};


export const getDay = (date) =>{
    const day = moment(date).format('dddd').toUpperCase()
    return day;
} 

export const getDate = (date) =>{
    const newDate = moment(date).date()
    return newDate;
}
