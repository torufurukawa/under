import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <div className="bg-sky-200 h-screen pt-1">
      <Card>
        <Item label="Weekly limit" val={12} />
        <Item label="Week start" val={'Sun'} />
      </Card>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 mx-4 rounded-lg pl-3 pr-2   text-slate-700 bg-white border border-slate-100">
      {children}
    </div>
  );
}

function Item({ label, val }: { label: string; val: string | number }) {
  return (
    <div className="flex justify-between border-t first:border-0 py-1.5 text -mx-4 px-4">
      <div>{label}</div>
      <div className="flex justify-end">
        <div>{val}</div>
        <EditButton />
      </div>
    </div>
  );
}

function EditButton() {
  return (
    <div className="self-center ml-1">
      <ChevronRightIcon className="h-4 w-4 text-slate-500" />
    </div>
  );
}
