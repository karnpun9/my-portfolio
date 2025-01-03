import React from "react";

function Project() {
  return (
    <>
      <h1 className="text-center font-bold text-4xl mb-4 linear-orange lg:mb-9">
        PROJECTS
      </h1>
      <section className="flex flex-col lg:flex-row justify-center px-6 lg:px-10">
        <a
          href="https://t-rax-black-hole.vercel.app/"
          target="_blank"
          className="bg-[#2A2A2A] rounded-lg mb-6 lg:mb-0 lg:hover:scale-110 duration-300 lg:mr-6"
        >
          <img
            src="https://i.postimg.cc/FsyhVjcb/art-toy.png"
            alt="art-toy-project"
            className="rounded-t-lg"
          />
          <div className="p-4">
            <p className="sub-text text-sm">CLICK HERE TO VISIT</p>
            <div className="flex justify-between">
              <h1 className="text-white font-bold text-xl">
                E-Commerce website
              </h1>
              <i class="fa-solid fa-arrow-right text-2xl text-white"></i>
            </div>
          </div>
        </a>

        <a
          href="https://main.d3q4edoi2nz8y8.amplifyapp.com/"
          target="_blank"
          className="bg-[#2A2A2A] rounded-lg mb-6 lg:mb-0 lg:hover:scale-110 duration-300"
        >
          <img
            src="https://i.postimg.cc/9Q1BXyW7/react-assesment-1-300x.png"
            alt="react-assesment"
            className="rounded-t-lg"
          />
          <div className="p-4">
            <p className="sub-text text-sm">CLICK HERE TO VISIT</p>
            <div className="flex justify-between">
              <h1 className="text-white font-bold text-xl">Web app</h1>
              <i class="fa-solid fa-arrow-right text-2xl text-white"></i>
            </div>
          </div>
        </a>
      </section>
    </>
  );
}

export default Project;
