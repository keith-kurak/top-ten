import { DateTime } from 'luxon';

export const formatDate = (date, format = 'dd LLL yyyy') => {
  return DateTime.fromISO(date).toFormat(format);
}

export const jsDateToIsoDate = (date) => {
  return DateTime.fromJSDate(date).toISODate();
}

export const isoDateToJsDate = (date) => {
  return DateTime.fromISO(date).toJSDate();
}