function Navbar() {
  return (
    <div className="flex items-center justify-around gap-20 p-5">
      <div>
        <h1
          htmlFor=""
          className="font-bold text-[30px]"
          style={{ fontFamily: "cur" }}
        >
          Techy
        </h1>
      </div>
      <div className="flex items-center gap-9">
        <div>Home</div>
        <div>About Me</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <div>
        <a href="Resume.pdf" download="Resume.pdf">
          <button className="bg-[#800020] p-2 rounded text-white hover:bg-black transition ease-in-out">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
