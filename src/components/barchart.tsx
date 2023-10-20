export function BarChart({ data }: { data: { label: string; val: Number }[] }) {
  return (
    <div id="graph-container" className="mt-2 grid grid-cols-7">
      {data.map((v, i) => (
        <Bar label={v.label} val={v.val} key={i} />
      ))}
    </div>
  );
}

function Bar({ label, val }: { label: string; val: Number }) {
  const barClassName = `bg-sky-500 w-2 h-${val} border-0 rounded-full`;

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
