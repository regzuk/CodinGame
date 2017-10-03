var leapYear = parseInt(readline());
var inputs = readline().split(' ');
var sourceDayOfWeek = inputs[0];
var sourceMonth = inputs[1];
var sourceDayOfMonth = parseInt(inputs[2]);
var inputs = readline().split(' ');
var targetMonth = inputs[0];
var targetDayOfMonth = parseInt(inputs[1]);

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysOfMonth = function (i) {
    switch (i) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                return 31;
            case 3:
            case 5:
            case 8:
            case 10:
                return 30;
            case 1:
                return 28 + leapYear;
        }
};
sourceMonth = MONTHS.indexOf(sourceMonth);
targetMonth = MONTHS.indexOf(targetMonth);
var shift = 0;
if (targetMonth > sourceMonth || (targetMonth == sourceMonth && targetDayOfMonth > sourceDayOfMonth)) {
    for (var i = sourceMonth; i < targetMonth; i++) shift += daysOfMonth(i);
    shift += targetDayOfMonth - sourceDayOfMonth;
    print(DAYS[(DAYS.indexOf(sourceDayOfWeek) + shift) % 7]);
} else {
    for (var i = sourceMonth-1; i >= targetMonth; i--) shift += daysOfMonth(i);
    shift += sourceDayOfMonth - targetDayOfMonth;
    print(DAYS.reverse()[(DAYS.indexOf(sourceDayOfWeek) + shift) % 7]);
}
