// src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-blue-600">
          Halo, Dunia! 🚀
        </h1>
        <p className="mt-4 text-gray-600">
          Selamat datang di website Next.js pertama Anda.
        </p>
        <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          Klik Saya
        </button>
      </div>
    </main>
  );
}