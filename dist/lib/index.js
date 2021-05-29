const MONTH_STRINGS = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};
const DAY_STRINGS = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
};
export const formatDate = (date, format) => {
    if (date[format]) {
        return date[format]();
    }
    else {
        return formatDateWithString(date, format);
    }
};
export const getMonthString = (month) => {
    return MONTH_STRINGS[month];
};
export const getDayString = (day) => {
    return DAY_STRINGS[day];
};
export const formatDateWithString = (date, format) => {
    const map = {
        m: date.getMonth(),
        mm: date.getMonth() > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1),
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear(),
        yyy: date.getFullYear().toString().slice(1),
        MM: getMonthString(date.getMonth()),
        DD: getDayString(date.getDay()),
    };
    return format.replace(/mm|m|MM|dd|DD|yyyy|yyy|yy/gi, (matched) => map[matched]);
};
