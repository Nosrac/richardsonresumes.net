var styleString = `

#bks-offering-schedule-summary,bks-offering-schedule-summary { display: none; }

/* Schedule Online */
[ng-if*=textCalendarTitle] { visibility: hidden; position: relative; }

[ng-if*=textCalendarTitle]:after {
    visibility: visible; position: absolute; top: 0; left: 0;
    content: \"Choose a Delivery Date for Your Service\";
}

/* Morning/Evening */
[slots-list-title=\"time-of-day.morning\"], [slots-list-title=\"time-of-day.evening\"] { display: none; }

/* Afternoon */
.time-slots-list__title { display: none }

/* 12:00 */
[slots-list-title=\"time-of-day.afternoon\"] [role=button] { visibility: hidden; position: relative; }
[slots-list-title=\"time-of-day.afternoon\"] [role=button]:after {
    visibility: visible; position: absolute; left: 0;
    content: \"Confirm Date\";
}`

const style = document.createElement('style');
style.textContent = styleString;
document.head.append(style);
