import moment from "moment";

export const formatDate = (date) => {
  const formatedDate = moment(date).format("YYYY-MM-DD");

  return formatedDate;
};

export const textToDate = (date) => {
  const formatedDate = moment(date, "YYYY-MM-DD").toDate();
  return formatedDate;
};


export const convertTimeToLT = (time) =>{
    // console.log('time', time)
    const formatedTime = moment(time).format('LT');  
    // console.log("🚀 ~ convertTimeToLT ~ formatedTime:", formatedTime)
    
    return formatedTime
}