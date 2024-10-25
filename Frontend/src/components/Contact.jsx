import { useForm } from "react-hook-form";
import Loader from "./Loader";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(3); // Simulating network delay
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log("response: ", res);
  };
  return (
    <>
      <section
        id="contact"
        className="bg-slate-300 p-8 flex flex-col justify-center items-center relative"
      >
        <p className="text-3xl mb-6 font-semibold text-center">Contact</p>
        {isSubmitting && <Loader />}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`flex flex-col gap-5 transition-all duration-500`}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white p-2 rounded-lg outline-none shadow-black shadow-md w-[300px]"
            {...register("name", {
              required: {
                value: true,
                message: "Don't leave Name field empty!",
              },
              minLength: {
                value: 2,
                message: "Name length less than 2 words",
              },
            })}
            disabled={isSubmitting}
          />
          {errors.name && (
            <div className="font-bold text-red-500 text-lg">
              {errors.name.message}
            </div>
          )}

          <input
            type="email"
            placeholder="Your Email"
            className="bg-white p-2 rounded-lg outline-none shadow-black shadow-md w-[300px]"
            {...register("email", {
              required: {
                value: true,
                message: "Don't leave Email field empty!",
              },
            })}
            disabled={isSubmitting}
          />
          {errors.email && (
            <div className="font-bold text-red-500 text-lg ">
              {errors.email.message}
            </div>
          )}

          <textarea
            placeholder="Your Message..."
            className="bg-white border outline-none p-2 rounded-lg h-32 shadow-black shadow-md w-[300px]"
            {...register("comment", {
              required: {
                value: true,
                message: "Don't leave Comment field empty!",
              },
            })}
            disabled={isSubmitting}
          ></textarea>
          {errors.comment && (
            <div className="font-bold text-red-500 text-lg ">
              {errors.comment.message}
            </div>
          )}

          <input
            className="bg-gradient-to-r from-green-400 to-green-500 p-2 text-white font-semibold rounded-lg hover:from-green-500 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all w-[300px] shadow-md shadow-black"
            type="submit"
            disabled={isSubmitting}
          />
        </form>
      </section>
    </>
  );
};

export default Contact;
