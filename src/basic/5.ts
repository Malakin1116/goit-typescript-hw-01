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
