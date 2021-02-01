function formatedTime(timeStamp) {
    var currentDate = new Date(timeStamp);
    var time = ' ' + currentDate.getDate() + "/" +
        (currentDate.getMonth() + 1) + "/" +
        currentDate.getFullYear() + "\nin Time: " +
        currentDate.getHours() + ":" +
        currentDate.getMinutes() + ":" +
        currentDate.getSeconds();
    return time;
}