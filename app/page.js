export default async function Home() {
const res = await fetch("http://localhost:3000/api/hello", {
  cache: "no-store",
});

if (!res.ok) {
  throw new Error("API error");
}

const data = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      {/* HERO */}
<h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
  Build Your Digital Future
</h1>

<p className="text-gray-400 mb-6 max-w-xl">
  We create modern, scalable, and beautiful web experiences for your business.
</p>

      <div className="flex gap-4 mb-10">
<button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-lg">
  Learn More
</button>

<button className="bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700 transition border border-gray-600">
  Contact Us
</button>
      </div>

      {/* API MESSAGE */}
      <p className="text-sm text-gray-500 mb-10">
        API Message: {data.message}
      </p>

      {/* CARDS */}
      <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:scale-105 hover:shadow-xl transition">

        <div className="border border-gray-700 p-6 rounded hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-400">
            Deliver innovative and impactful solutions.
          </p>
        </div>

        <div className="border border-gray-700 p-6 rounded hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-400">
            Become a leading tech company globally.
          </p>
        </div>

        <div className="border border-gray-700 p-6 rounded hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Our Values</h2>
          <p className="text-gray-400">
            Integrity, innovation, and excellence.
          </p>
        </div>

      </div>

    </div>
  );
}