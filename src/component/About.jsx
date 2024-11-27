import React from "react";
import { TypeAnimation } from "react-type-animation";

function About() {
  return (
    <>
      <section className="container m-auto">
        <div className="flex justify-center pt-10">
          <img
            src="https://i.postimg.cc/g0Qt1hpN/37345033-1994995523865182-159278303826411520-n.jpg"
            alt="profile"
            className="rounded-full z-10 w-1/2 lg:w-1/4"
          />
        </div>

        <div className="text-center gap-4">
          <h1 className="text-white font-bold text-3xl lg:text-7xl my-14">
            Chayada Punsombut
          </h1>
          <h1 className="text-white font-bold text-2xl lg:text-6xl mb-4">
            I create apps
          </h1>
          <h2 className="text-white font-bold text-2xl lg:text-6xl">
            and bring code {""}
            <TypeAnimation
              sequence={["to life!", 1000, "to reality!", 1000, "with passion!", 1000,]}
              smartBackspace
              showCursor={false}
              speed={50}
              repeat={Infinity}
              className="linear-purple"
            />
          </h2>
        </div>

        <div className="flex justify-center">
          <p className="sub-text mt-10 text-justify px-6 lg:w-3/5 lg:text-xl lg:px-0">
            Recent graduate of Generation’s Junior Software Developer Bootcamp,
            with five years in graphic design and a Japanese degree. Skilled in
            adaptability, creativity, teamwork, and emotional intelligence.
            Seeking a Software Developer role where continuous learning,
            problem-solving, and collaboration are valued.
          </p>
        </div>
        <div className="flex justify-center my-10">
          {/* <button className="intouch-btn">
            Get in Touch
          </button> */}
          <a
            href="https://drive.google.com/file/d/1SMwfWVustQCuxKQzEDaNyDvMTCDOn5oj/view?usp=sharing"
            download="cv_karn.pdf"
            className=" text-white text-center text-sm lg:text-base lg:font-semibold py-2 px-3 rounded-full border-2 hover:bg-white hover:text-[#161513] lg:cursor-pointer"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
