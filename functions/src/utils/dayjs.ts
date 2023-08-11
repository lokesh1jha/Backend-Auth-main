import dayjs from 'dayjs';

export const getCurrentJST = () => {
  // Format the current date and time as 'YYYY-MM-DD HH:mm:ss'
  return dayjs().format('YYYY-MM-DD HH:mm:ss');
};

export const getAddToCurrentJST = (num: number, unit: dayjs.ManipulateType) => {
  // Add the specified amount of time to the current date and time
  return dayjs().add(num, unit).format('YYYY-MM-DD HH:mm:ss');
};

export const isAfterCurrentJST = (time: string) => {
  // Check if the provided time is after the current date and time
  return dayjs(time).isAfter(dayjs());
};
