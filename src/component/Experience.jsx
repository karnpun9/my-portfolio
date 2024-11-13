import React from "react";

function Experience() {
  return (
    <>
      <section className="my-6 lg:mt-24 lg:mb-24 flex flex-col items-center justify-center px-10 lg:p-0">
        <h1 className="text-center font-bold text-4xl mb-4 lg:mb-9 linear-blue">
          Experience
        </h1>

        {/* Junior Software Developer at Generation Thailand ---------------------------------------------------------------- */}

        <div className="flex lg:w-5/6 flex-col">
          <div className="flex justify-between lg:flex-row flex-col">
            <h1 className="text-white font-bold lg:text-2xl text-center">
              <i class="fa-solid fa-laptop-code mr-2 lg:mr-6 linear-gradient-text"></i>
              Junior Software Developer at Generation Thailand
            </h1>
            <p className="sub-text text-xs lg:text-sm text-center">
              Sep 2024 - Dec 2024
            </p>
          </div>

          <ul>
            <p className="sub-text mt-4">
              Developed expertise in front-end and back-end web technologies,
              including React, Vite, Tailwind CSS, SQL, Express, and MongoDB.
            </p>
            <li className="list-disc sub-text mt-2">
              Led an e-commerce project, collaborating with a team to create a
              fully functional application, emphasizing problem-solving and
              performance optimization.
            </li>
            <li className="list-disc sub-text mt-2">
              Strengthened database skills with relational design and large
              dataset management.
            </li>
            <li className="list-disc sub-text mt-2">
              Applied Agile project management through sprint planning and code
              reviews.
            </li>
            <li className="list-disc sub-text mt-2">
              Enhanced communication, critical thinking, and adaptability by
              actively engaging in team feedback and learning new tools to meet
              project needs.
            </li>
          </ul>
        </div>

        {/* Graphic Designer---------------------------------------------------------------- */}

        <div className="flex lg:w-5/6 flex-col mt-8">
          <div className="flex justify-between lg:flex-row flex-col">
            <h1 className="text-white font-bold lg:text-2xl text-center">
              <i class="fa-solid fa-palette mr-2 lg:mr-6 linear-gradient-text"></i>
              Graphic Designer
            </h1>
            <p className="sub-text text-xs lg:text-sm text-center">
              Aug 2019 - Present
            </p>
          </div>

          <ul>
            <li className="list-disc sub-text mt-2">
              Communicated with clients to understand their needs and
              requirements.
            </li>
            <li className="list-disc sub-text mt-2">
              Planned design projects such as logos, corporate identity (CI)
              brands, posters, and packaging.
            </li>
            <li className="list-disc sub-text mt-2">
              Designed and revised logos, CI brands, posters, and packaging
              based on client feedback.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Experience;
