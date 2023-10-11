'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem(props: NavItemProps) {
  const pathname = usePathname();
  const active = 'text-blue-500';
  const inactive = 'text-slate-500';

  return (
    <Link
      href={props.target}
      className={pathname === props.target ? active : inactive}
    >
      <div className="w-10 h-10 grid place-items-center">
        <div>
          <props.Icon className="h-4 w-4" />
        </div>
        <div className="text-[10px]">{props.label}</div>
      </div>
    </Link>
  );
}

type HeroIconComponent = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

type NavItemProps = { Icon: HeroIconComponent; label: string; target: string };
