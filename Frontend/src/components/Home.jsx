const Home = () => {
  return (
    <>
      <section
        id="home"
        className="flex border border-gray-300 rounded-lg p-8 items-center justify-start gap-8 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden m"
      >
        <img
          className="object-cover w-[160px] h-[160px] rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
          src="https://imgs.search.brave.com/xkDKjNHthEdMsq7op-_umk6MhR7sfnbZTJiLwqmk9Uw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzAyLzA3LzM0/LzM2MF9GXzcwMjA3/MzQ0Nl81YW1sMjRh/NWxuMk4xU2N3QTMx/cXFFVTJ3cUhpMjJH/WS5qcGc"
          alt="profile"
        />
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Bhuwan Chandra Upadhyay
          </h1>
          <h2 className="text-xl text-slate-600 mb-4">Web Developer</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia
            ex tempora?
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
