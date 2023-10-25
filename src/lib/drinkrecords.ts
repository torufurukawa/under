'use client';

import { Dayjs } from 'dayjs';
import { useLocalStorage } from './localStorage';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useDrinkRecord(
  date: Dayjs
): [number, Dispatch<SetStateAction<number | undefined>>] {
  const key = `drinks::${date.format('YYYY-MM-DD')}`;
  const [value, setValue] = useLocalStorage(key, 0);
  return [value, setValue];
}

export function useWeeklyDrinkRecords(since: Dayjs) {
  const [trend, setTrend] = useState<
    Array<{ day: string; val: number | null }>
  >([]);

  useEffect(() => {
    const records = [];
    for (let i = 0; i < 7; i++) {
      // generate key
      const date = since.add(i, 'day');
      const key = `drinks::${date.format('YYYY-MM-DD')}`;

      const valStr = window.localStorage.getItem(key);
      const val = valStr ? parseInt(valStr) : null;
      records.push({ day: date.format('ddd'), val: val });
    }
    setTrend(records);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return trend;
}
