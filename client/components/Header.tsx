const Header = () => {
  return (
    <header className="flex w-full justify-between p-10">
      <h1 className="font-GlitchGoblin text-2xl">RY</h1>
      <div className="flex w-48 justify-evenly">
        <a href="https://github.com/roisin-yates">
          <img
            src="./icons/github-mark.svg"
            alt="github logo"
            className="w-8 cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/in/roisin-yates-89b212218/">
          <img
            src="./icons/LI-In-Bug.png"
            alt="LinkedIn logo"
            className="w-10 cursor-pointer"
          />
        </a>
      </div>
    </header>
  )
}

export default Header
