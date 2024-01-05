import "./Loading.css";

const Loading = () => {
  return (
    <section className="py-96 bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
        <div class="wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
