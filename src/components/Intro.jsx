import MyImg from "../assets/my image.jpg";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <div className="relative min-h-screen flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-[150px] bg-fixed backdrop-blur-[10px] z-0 bg-cover bg-backgroundColor">
      {/* Left */}
      <div className="z-20 flex flex-col justify-center items-center md:items-start md:w-1/2">
        <h1 className="font-bold text-4xl md:text-6xl text-textWhiteColor mt-4 text-center md:text-left">
          I'm{" "}
          <span className="font-bold text-4xl md:text-6xl text-textThemeColor">
            SARTHAK AGARWAL
          </span>
        </h1>
        <h1 className="text-textWhiteColor mt-2 text-[2rem] md:text-5xl font-bold py-4 h-[10rem] text-center md:text-left">
          I am a{" "}
          <span className={`!text-textThemeColor`}>
            <TypeAnimation
              sequence={[
                " Full Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Website Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[2rem] font-bold !text-textThemeColor"
            />
          </span>
        </h1>

        <p className="text-textWhiteColor [text-shadow:2px_2px_4px_rgba(255,255,255,0.2)] font-medium text-lg md:text-xl text-center md:text-left md:-mt-12 -mt-8">
          <span className="font-bold">Hi</span>, I create custom,
          high-performance websites that captivate and convert. No
          templates—just pixel-perfect, responsive designs tailored to your
          brand. My websites don’t just look great; they load faster, perform
          better, and give you a competitive edge.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mt-8">
          <div>
            <a href="#contacts">
              <button className="all-btn-outline">Hire Me</button>
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1gSvuo7rmtOXjvQKhDsTXmtSPZmfC-MXN/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="all-btn-outline">Get CV</button>
            </a>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-center mt-8 md:mt-0">
        <img
          src={MyImg}
          alt="Sarthak Agarwal"
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]  aspect-square object-contain rounded-full border-[5px] outline-dashed outline-textThemeColor border-transparent"
        />
      </div>
    </div>
  );
}

export default Intro;
