import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-900  flex flex-col items-center justify-center">
        <div className="fon-bold text-4xl flex items-center text-blue-600">
        
          Not Found
        </div>
        <Link href={"/"} className="mt-2 text-lg text-gray-50 hover:text-blue-900">← Back Home</Link>
      </main>
    </>
  );
};

export default NotFound;

