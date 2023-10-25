'use client';
import dayjs from 'dayjs';
import { BarChart } from '../../components/barchart';
import { useWeeklyDrinkRecords } from '@/lib/drinkrecords';

export default function Page() {
  const today = dayjs();
  const since = today.subtract(6, 'day');
  const weeklyTrend = useWeeklyDrinkRecords(since);

  return (
    <main>
      <div className="bg-sky-200 h-screen pt-1">
        <Card title="Weekly trend">
          <WeeklyChart trend={weeklyTrend} />
        </Card>
      </div>
    </main>
  );
}

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mt-3 mx-4 rounded-lg p-2   text-slate-800 bg-white drop-shadow-md">
      <div id="title" className="grid place-content-center">
        {title}
      </div>
      {children}
    </div>
  );
}

function WeeklyChart({
  trend,
}: {
  trend: { day: string; val: number | null }[];
}) {
  const data = trend.map((v) => {
    return { label: v.day, val: v.val };
  });

  return <BarChart data={data} />;
}
