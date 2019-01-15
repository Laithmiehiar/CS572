function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
        console.log(getDay[day]);
}

var getDay = {
    0 : 'Sunday',
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday'
}

isWeekend();