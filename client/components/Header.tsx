import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <header className="flex w-full justify-between p-10">
        <h1 className="font-GlitchGoblin text-2xl">RY</h1>
        <div className="flex flex-wrap items-center justify-end">
          <a
            href="https://github.com/roisin-yates"
            className="mx-3 inline-block text-4xl"
            aria-label="github profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/roisin-yates-89b212218/"
            className="mx-3 text-4xl"
            aria-label="linkedin profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
