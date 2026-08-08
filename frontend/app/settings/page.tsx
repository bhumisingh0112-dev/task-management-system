"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

type Theme = "light" | "dark" | "system";
type Accent = "amber" | "blue" | "pink" | "rose" | "emerald" | "black";

const accents: Accent[] = ["amber", "blue", "pink", "rose", "emerald", "black"];

export default function Settings() {
  const [theme, setTheme] = useState<Theme>("light");
  const [accent, setAccent] = useState<Accent>("blue");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    const savedAccent = (localStorage.getItem("accent") as Accent) || "blue";
    setTheme(savedTheme);
    setAccent(savedAccent);
    applyPreferences(savedTheme, savedAccent);
  }, []);

  function applyPreferences(nextTheme: Theme, nextAccent: Accent) {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.dataset.accent = nextAccent;
  }

  function changeTheme(next: Theme) {
    setTheme(next);
    localStorage.setItem("theme", next);
    applyPreferences(next, accent);
  }

  function changeAccent(next: Accent) {
    setAccent(next);
    localStorage.setItem("accent", next);
    applyPreferences(theme, next);
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Sidebar />
      <section className="md:ml-[220px] p-6 md:p-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-xl font-semibold">Settings</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Customize your workspace appearance. Preferences persist across refreshes.
          </p>

          <div className="mt-6 space-y-5">
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <h2 className="text-sm font-semibold">Theme</h2>
              <p className="mt-1 text-xs text-[var(--muted)]">Choose Light, Dark, or System.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(["light", "dark", "system"] as Theme[]).map((item) => (
                  <button
                    key={item}
                    onClick={() => changeTheme(item)}
                    className={`rounded-full border px-4 py-2 text-xs capitalize ${
                      theme === item ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "bg-[var(--surface)] border-[var(--border)]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <h2 className="text-sm font-semibold">Color Mode</h2>
              <p className="mt-1 text-xs text-[var(--muted)]">Choose the workspace accent shown throughout the app.</p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {accents.map((item) => (
                  <button
                    key={item}
                    onClick={() => changeAccent(item)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs capitalize ${
                      accent === item ? "border-[var(--accent)] bg-[var(--accent-soft)] font-medium" : "border-[var(--border)]"
                    }`}
                  >
                    <span className={`h-3 w-3 rounded-full accent-dot-${item}`} />
                    {item}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
