import React from "react";

function Footer() {
  return (
    <>
      <footer className="mt-10 bg-[#191919] px-8 py-10 lg:py-10 lg:p-0 w-full">
        <section className="container flex flex-col w-full lg:pl-20">
          <div className="lg:w-5/6">
            <h1 className="text-2xl font-bold text-white mb-4">Contact</h1>
            <span className="sub-text">
              Aspiring Full Stack Developer with a foundation in modern web
              technologies, specializing in creating clean, responsive, and
              efficient web applications. Skilled in both front-end and back-end
              development, eager to bring innovative solutions to life.
            </span>
          </div>
          <div className="mt-4 flex flex-col lg:flex-row lg:gap-x-6 gap-2">
            <h2 className="sub-text">
              <i class="fa-solid fa-location-dot mr-5"></i>Bangkok Thailand
            </h2>
            <h2 className="sub-text">
              <i class="fa-solid fa-phone mr-5"></i>Phone : (+66) 92-963-2446
            </h2>
            <h2 className="sub-text">
              <i class="fa-solid fa-envelope mr-5"></i>chayada.pun9@gmail.com
            </h2>
          </div>
          <div className="mt-4 text-center lg:text-left text-2xl">
          <a href="https://www.linkedin.com/in/chayada-punsombut-a82084239/"><i class="fa-brands fa-linkedin linear-gradient-text mr-4"></i></a>
          <a href="https://github.com/karnpun9"><i class="fa-brands fa-github linear-gradient-text"></i></a>
        </div>
        </section>
        
      </footer>
    </>
  );
}

export default Footer;
