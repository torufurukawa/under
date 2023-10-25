import dayjs from 'dayjs';

export function getToday() {
  const now = dayjs();
  let today = dayjs(new Date(now.year(), now.month(), now.date()));

  // if between 0AM and 2AM, obtain previous date
  if (0 <= now.hour() && now.hour() < 2) {
    today = today.subtract(1, 'day');
  }

  return today;
}
