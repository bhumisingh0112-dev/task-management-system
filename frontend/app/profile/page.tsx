"use client";

import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Sidebar />
      <section className="md:ml-[220px] p-6 md:p-10">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-xl font-semibold">Profile</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">Manage your workspace profile information.</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b border-[var(--border)] p-5">
              <span className="text-xs font-medium">Profile picture</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold">AD</div>
            </div>
            <div className="grid gap-5 p-5 sm:grid-cols-2">
              <label className="text-xs"><span className="text-[var(--muted)]">Email</span><input className="mt-2 w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2 outline-none" value="guest@pyramid.local" readOnly /></label>
              <label className="text-xs"><span className="text-[var(--muted)]">Full name</span><input className="mt-2 w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2 outline-none" defaultValue="Adarsh" /></label>
              <label className="text-xs"><span className="text-[var(--muted)]">Title</span><input className="mt-2 w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2 outline-none" defaultValue="Developer" /></label>
              <label className="text-xs"><span className="text-[var(--muted)]">Username</span><input className="mt-2 w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2 outline-none" defaultValue="adarsh" /></label>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-center justify-between"><div><h2 className="text-sm font-semibold">Workspace access</h2><p className="mt-1 text-xs text-[var(--muted)]">Guest workspace access is enabled for this assessment.</p></div><button className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">Leave Workspace</button></div>
          </div>
        </div>
      </section>
    </main>
  );
}
