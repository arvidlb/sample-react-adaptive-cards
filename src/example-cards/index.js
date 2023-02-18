import peopleSearch from "./people-search";
import benefits from "./benefits";
import payslip from "./payslip";
import calendarReminder from "./calendar-reminder";
import calendarReminderData from "./calendar-reminder-data";
import benefitsData from "./benefits-data";
import activityUpdates from "./activity-updates";
import activityUpdatesData from "./activity-updates-data";
import timePlanner from "./time-planner";
import msTimePlanner from "./ms-time-planner";
import msTimePlannerData from "./ms-time-planner-data";
import ticketing from "./ticketing";

export let examples = {
  cards: [
    { card: ticketing },
    { card: timePlanner },
    { card: msTimePlanner, data: msTimePlannerData },
    { card: peopleSearch },
    { card: benefits, data: benefitsData },
    { card: payslip },
    { card: calendarReminder, data: calendarReminderData },
    { card: activityUpdates, data: activityUpdatesData }
  ]
};
