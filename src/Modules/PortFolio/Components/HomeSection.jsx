import { TypeAnimation } from "react-type-animation";
import IMAGE from "../Avatar.png";
import "./style.css"
function HomeSection() {
  return (
    <div className="flex items-center justify-between min-h-[90%] w-[100%] p-[20px] bg-[#ededed]">
      <div className="md:ml-40">
        <div>
          <h2 className="text-[30px]">Hi I am</h2>
          <h1 className="text-[40px]">ANANDHU KRISHNA J</h1>
        </div>
        <div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "REACT JS DEVELOPER",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "with EXPRESS JS",
              1000,
              "and MONGO DB",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "3em", display: "inline-block",color:"#800020" }}
            repeat={Infinity}
          />
          <p className="max-w-[80%]"> 
            As a passionate React.js developer, I thrive on crafting seamless
            user experiences and building dynamic web applications. With a
            strong foundation in front-end development and a knack for
            problem-solving, I am dedicated to delivering high-quality code and
            collaborating with cross-functional teams to create innovative
            solutions. Lets create captivating digital experiences together!
          </p>
        </div>
      </div>
      <div className="hidden md:block max-h-[100vh]">
        <img src={IMAGE} alt="" className="hero-image"/>
      </div>
    </div>
  );
}

export default HomeSection;
