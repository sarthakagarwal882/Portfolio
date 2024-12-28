import React from "react";
function AboutPage() {
  return (
    <>
      <div className="flex justify-between items-start px-[150px] bg-backgroundColor pt-72">
        {/* left  */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSSScwrzpbqREQN0ZbDymzs-BPARfUbXzdqLsqa5vFgXg392c"
            alt="load"
            className="w-[450px] h-[400px] rounded-xl"
          />
        </div>
        {/* right  */}
        <div className="w-[60%]">
          <h1 className="font-bold text-white text-6xl text-start">About me</h1>

          <p className="text-start text-textWhiteColor pt-4 pb-6 text-lg">
            I'm an Computer Science Engineering undergrad aspiring to become a
            skilled software developer. I'm an avid learner and always looking
            for oppurtunities to increase my skillset. I'm currently working on
            my skills in the field of Web Development. I'm also a competitive
            programmer and enjoy problem solving. I'm also a big fan of open
            source and I'm looking to collaborate on projects that can help the
            community.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            delectus fugit facere recusandae architecto aliquam consequuntur
            libero dolorum magnam dolores.
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1gSvuo7rmtOXjvQKhDsTXmtSPZmfC-MXN/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="all-btn">Get CV</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
