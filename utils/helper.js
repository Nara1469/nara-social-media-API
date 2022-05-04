module.exports = {
  formatDate: (date) => {
    const d = new Date(date);
    // Format date as MM/DD/YYYY hh:mm 
    // const hours = d.getHours();
    // const minutes = d.getMinutes();
    const customDate = d.toLocaleDateString();
    //  + " " + hours + ":" + minutes;
    return customDate;
  },
};
