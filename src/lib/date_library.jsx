import moment from "moment/moment";

export function getMonthAbbreviation(dateString) {
  return moment(dateString).format("MMM").toUpperCase();
}

export function getDay(dateString) {
  const date = new Date(dateString);
  return date.getDate();
}
