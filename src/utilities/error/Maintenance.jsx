import Header from "@/components/header/Header";

const Maintenance = () => {
  return (
    <>
      <Header />
      <section className="flex items-center justify-center min-h-screen bg-gray-900 text-center">
        <p className="text-3xl">🛠️</p>
        <p className="font-light text-white md:text-lg">
          Our Enterprise administrators are performing scheduled maintenance.
        </p>
      </section>
    </>
  );
};

export default Maintenance;
