'use client';
import { useDrinkRecord } from '@/lib/drinkrecords';
import { getToday } from '@/lib/dates';

const MAX_DRINKS = 12;

export default function Page() {
  return (
    <main>
      <div className="bg-sky-200 h-screen">
        <Container>
          <Summary />
          <UpDownCounter />
          <ShowMore />
        </Container>
      </div>
    </main>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t pt-2 px-2 pb-[4.5rem] w-full bottom-0 bg-white text-slate-800 fixed grid place-items-center">
      {children}
    </div>
  );
}

function Summary() {
  return (
    <div className="text-slate-600">
      <div className="text-sm font-bold text-center">
        You haven&apos;t had a drink today
      </div>
      <div className="text-xs mt-1 font text-center">
        10 drinks under your weekly limit
      </div>
    </div>
  );
}

function UpDownCounter() {
  const [drinks, setDrinks] = useDrinkRecord(getToday());

  function increment() {
    if (drinks < MAX_DRINKS) {
      setDrinks(drinks + 1);
    }
  }
  function decrement() {
    if (0 < drinks) {
      setDrinks(drinks - 1);
    }
  }

  return (
    <div className="flex flex-row justify-center mt-4 w-full gap-10 items-center text-slate-600">
      <CounterButton onClick={decrement}>-</CounterButton>
      <CounterIndidicator>{drinks}</CounterIndidicator>
      <CounterButton onClick={increment}>+</CounterButton>
    </div>
  );
}

function CounterButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      className="text-4xl bg-slate-100 rounded-full w-12 h-12 text-center py-0.5"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function CounterIndidicator({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-4xl font-bold bg-slate-100 px-4 h-14 rounded-lg text-center flex items-center justify-center">
      {children}
    </div>
  );
}

function ShowMore() {
  return (
    <div className="text-[8pt] font-bold mt-4 text-sky-600">see past days</div>
  );
}
