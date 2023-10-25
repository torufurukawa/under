import { BarChart } from '../../components/barchart';

export default function Page() {
  const weeklyTrend = [
    { day: 'Sun', val: 2 },
    { day: 'Mon', val: 10 },
    { day: 'Tue', val: 9 },
    { day: 'Wed', val: 5 },
    { day: 'Thu', val: 8 },
    { day: 'Fri', val: 8 },
    { day: 'Sat', val: 0 },
  ];

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

function WeeklyChart({ trend }: { trend: { day: string; val: Number }[] }) {
  const data = trend.map((v) => ({ label: v.day, val: v.val }));

  return <BarChart data={data} />;
}
