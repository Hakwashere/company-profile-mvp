export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

        <div>
          <div className="h-10 w-72 animate-pulse rounded bg-gray-800 mb-3" />

          <div className="h-4 w-96 animate-pulse rounded bg-gray-800" />
        </div>

        <div className="h-12 w-full md:w-80 animate-pulse rounded-lg bg-gray-800" />

      </div>

      {/* CARD SKELETON */}
      <div className="grid gap-6">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-gray-700 bg-gray-900 p-6"
          >

            <div className="flex justify-between mb-4">

              <div>
                <div className="h-6 w-40 animate-pulse rounded bg-gray-800 mb-3" />

                <div className="h-4 w-52 animate-pulse rounded bg-gray-800" />
              </div>

              <div className="h-8 w-28 animate-pulse rounded-full bg-gray-800" />

            </div>

            <div className="h-4 w-full animate-pulse rounded bg-gray-800 mb-2" />

            <div className="h-4 w-4/5 animate-pulse rounded bg-gray-800 mb-6" />

            <div className="h-3 w-32 animate-pulse rounded bg-gray-800" />

          </div>
        ))}

      </div>

    </div>
  );
}