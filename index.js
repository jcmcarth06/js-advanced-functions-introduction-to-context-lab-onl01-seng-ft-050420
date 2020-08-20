// Your code here
const createEmployeeRecord = info => {
  const record = {
    firstName: info[0],
    familyName: info[1],
    title: info[2],
    payPerHour: info[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return record;
};

const CreateEmployeeRecords = array => array.map( employee => CreateEmployeeRecords(employee))

const createTimeInEvent = (employee, dateStamp) => {
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(dateStamp.split(' '[1]),
    date: dateStamp.split(' ')[0]
  });
  return employee
}