import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="flex w-full justify-between p-10">
      <h1 className="font-GlitchGoblin text-2xl">RY</h1>
      <div className="flex w-48 justify-evenly">
        <a
          href="https://github.com/roisin-yates"
          className="text-4xl"
          aria-label="github profile"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/roisin-yates-89b212218/"
          className="text-4xl"
          aria-label="linkedin profile"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  )
}

export default Header
