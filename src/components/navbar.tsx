'use client';
import { HomeIcon, ChartBarIcon, UserIcon } from '@heroicons/react/24/solid';
import { NavItem } from './navitem';

export function NavBar() {
  return (
    <div className="w-full bottom-0 text-black fixed p-2 border-t bg-white ">
      <div className="flex flex-row justify-around">
        <NavItem label="Home" Icon={HomeIcon} target="/" />
        <NavItem label="Stats" Icon={ChartBarIcon} target="/stats" />
        <NavItem label="Me" Icon={UserIcon} target="/me" />
      </div>
    </div>
  );
}
