import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <div className="mt-[18vh] flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white"><span className="text-xs">△</span></div>
        <span className="text-sm font-semibold">Pyramid</span>
      </div>
      <div className="mt-5 w-[min(320px,calc(100vw-32px))] rounded-[22px] border border-gray-200 bg-white px-5 py-5 shadow-sm">
        <div className="text-center">
          <h1 className="text-[17px] font-semibold">Let&apos;s get back on track</h1>
          <p className="mt-1 text-xs text-gray-500">Enter your email below to login to your account.</p>
        </div>
        <Link href="/tasks" className="mt-5 flex h-9 w-full items-center justify-center rounded-full bg-[#191919] text-xs font-medium text-white hover:bg-black">Continue as Guest</Link>
        <button type="button" className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white text-xs font-medium hover:bg-gray-50"><span className="font-semibold">G</span>Login with Google</button>
      </div>
      <p className="mt-5 text-center text-[10px] leading-4 text-gray-400">By clicking continue, you agree to<br/>our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span></p>
    </main>
  );
}
