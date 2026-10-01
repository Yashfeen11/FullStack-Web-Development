let currentDate= new Date();
let currentDateFormat= `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);


function formatDateMMDDYYYY(dateObj){
  let day = dateObj.getDate();
  let month= dateObj.getMonth()+1;
  let year= dateObj.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}
function formatDateLong(dateObj){
  let year= dateObj.getFullYear();
  let month= [ "January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
  let day= dateObj.getDate();
  return `Formatted Date (Month Day, Year): ${month[dateObj.getMonth()]} ${day}, ${year}`;
}
