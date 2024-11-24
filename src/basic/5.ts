// enum DayOfWeek {
//   Monday = "робочий",
//   Tuesday = "робочий",
//   Wednesday = "робочий",
//   Thursday = "робочий",
//   Friday = "робочий",
//   Saturday = "вихідний",
//   Sunday = "вихідний",
// }

// const isWeekend = (day: DayOfWeek): boolean => {
// };

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

// const isWork = (day: DayOfWeek): boolean => {
//   return (
//     day === DayOfWeek.Monday ||
//     day === DayOfWeek.Tuesday ||
//     day === DayOfWeek.Wednesday ||
//     day === DayOfWeek.Thursday ||
//     day === DayOfWeek.Friday
//   );
// };

// const isWorks = (day: DayOfWeek): boolean => {
//   return !isWeekend(day);
// };
