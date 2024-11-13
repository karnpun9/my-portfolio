import React from "react";

function Skill() {
  return (
    <>
      <section className="my-14 lg:my-24">
        <h1 className="text-center font-bold sub-text text-xl lg:text-3xl">
          EXPERIENCE WITH
        </h1>
        <div className="flex justify-center mt-5 lg:mt-10 linear-gradient-text">
          <i class="fa-brands fa-square-js icon"></i>
          <i class="fa-brands fa-html5 icon"></i>
          <i class="fa-brands fa-css3-alt icon"></i>
          <i class="fa-brands fa-react icon"></i>
          <i class="fa-brands fa-node icon"></i>
        </div>
        <div className="flex justify-center mt-5 lg:mt-10 linear-gradient-text">
          <i class="fa-brands fa-git-alt icon"></i>
          <i className="fas fa-database icon"></i>
          <i class="fa-brands fa-figma icon"></i>
          <i class="fa-brands fa-wordpress icon"></i>
        </div>
      </section>
    </>
  );
}

export default Skill;