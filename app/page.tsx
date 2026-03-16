export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Halo, Dunia! 🚀
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Ini adalah website sederhana yang dibangun menggunakan Next.js. 
          Cepat, SEO-friendly, dan sangat mudah dikembangkan.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Mulai Belajar
          </button>
          <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-white transition">
            Dokumentasi
          </button>
        </div>
      </div>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="App Router" desc="Navigasi modern berbasis file." />
        <Card title="Server Components" desc="Performa maksimal secara default." />
        <Card title="Tailwind CSS" desc="Styling cepat tanpa ribet." />
      </section>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
  }
}
