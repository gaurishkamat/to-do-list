export const getCurrentDate = () => {
  let date = new Date().toDateString().split(' ');
  date.splice(0, 1);
  return date.join(' ');
};
