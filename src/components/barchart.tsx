export function BarChart({
  data,
}: {
  data: { label: string; val: number | null }[];
}) {
  return (
    <div id="graph-container" className="mt-2 grid grid-cols-7">
      {data.map((v, i) => {
        const val = v.val || 0;
        return <Bar label={v.label} val={val} key={i} />;
      })}
    </div>
  );
}

function Bar({ label, val }: { label: string; val: number }) {
  const height = val + 2;
  const barClassName = `bg-sky-500 w-2 h-${height} border-0 rounded-full`;

  return (
    <div className="flex flex-col place-content-center justify-end text-xs text-slate-600">
      <div className="grid place-content-center mb-1">{val.toString()}</div>
      <div className="grid place-content-center">
        <div className={barClassName} />
      </div>
      <div className="mt-2 grid place-content-center">{label}</div>
    </div>
  );
}
