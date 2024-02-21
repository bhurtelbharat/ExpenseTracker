export const getToday = () => {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[today.getDay()];
    const month = months[today.getMonth()];

    const fullDate = day+', '+today.getDate()+' '+month+', '+today.getFullYear();
    return fullDate;
  }