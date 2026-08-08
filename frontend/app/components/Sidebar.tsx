"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();
  const active = (p: string) => path.startsWith(p);
  return (
    <>
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[220px] border-r border-[var(--border)] bg-[var(--surface)] md:block">
        <div className="flex h-full flex-col px-4 py-5">
          <Link href="/tasks" className="flex items-center gap-2 px-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white"><span className="text-xs">△</span></div>
            <span className="text-sm font-semibold">Pyramid</span>
          </Link>
          <div className="mt-10">
            <div className="mb-2 flex items-center justify-between px-2 text-[11px] font-medium text-[var(--muted)]"><span>WORKSPACE</span><span>⌄</span></div>
            <Link href="/tasks" className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${active('/tasks') ? 'bg-[#f3f3f3] font-medium' : 'text-gray-500 hover:bg-gray-50'}`}>▦ Tasks</Link>
            <Link href="/projects" className={`mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${active('/projects') ? 'bg-[#f3f3f3] font-medium' : 'text-gray-500 hover:bg-gray-50'}`}>▱ Projects</Link>
          </div>
          <div className="mt-auto border-t border-[var(--border)] pt-4">
            <Link href="/profile" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 hover:bg-gray-50">◉ Profile</Link>
            <Link href="/settings" className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 hover:bg-gray-50">⚙ Settings</Link>
          </div>
        </div>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-30 flex border-t border-[var(--border)] bg-[var(--surface)] p-2 md:hidden">
        <Link href="/tasks" className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-2 text-[10px] ${active('/tasks') ? 'font-medium text-[var(--text)]' : 'text-[var(--muted)]'}`}>▦<span>Tasks</span></Link>
        <Link href="/projects" className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-2 text-[10px] ${active('/projects') ? 'font-medium text-[var(--text)]' : 'text-[var(--muted)]'}`}>▱<span>Projects</span></Link>
        <Link href="/settings" className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-2 text-[10px] ${active('/settings') ? 'font-medium text-[var(--text)]' : 'text-[var(--muted)]'}`}>⚙<span>Settings</span></Link>
      </nav>
    </>
  );
}
