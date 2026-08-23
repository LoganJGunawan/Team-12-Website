import Link from "next/link";
import BlueIcon from '@/app/icons/blue_placeholder.png'
import RedIcon from '@/app/icons/red_placeholder.png'
import GreenIcon from '@/app/icons/green_placeholder.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
        <header className="w-full bg-temp-gray px-6 py-6">
        <nav className="flex items-center text-m text-zinc-700 gap-6">
            <Image src={BlueIcon}
              alt="Icon"
              width={50}
              height={50}
              className="rounded-full object-cover" />
            
            <Link
            href="/"
            className="px-2 py-1 hover:text-zinc-900"
            >
            Home
            </Link>

            <Link
            href="/team"
            className="px-3 py-1 hover:text-zinc-900"
            >
            Team
            </Link>

            <Link
            href="/help"
            className="px-3 py-1 hover:text-zinc-900">
              Help
            </Link>
        </nav>
        </header>
    </div>
  );
}