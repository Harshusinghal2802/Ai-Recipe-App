export default function Loader() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="flex flex-col items-center gap-4">

        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

        <h1 className="text-xl font-bold text-orange-500">
          Loading...
        </h1>

      </div>

    </div>
  );
}