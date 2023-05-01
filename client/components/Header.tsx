import { FaLinkedin, FaGithub, FaCloudDownloadAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="flex w-full flex-wrap justify-between p-10">
      <h1 className="font-GlitchGoblin text-2xl">RY</h1>
      <div className="flex w-96 items-center justify-evenly">
        <a
          href="./pdf/Roisin-Yates-CV.pdf"
          download="Roisin-Yates-CV.pdf"
          className="flex bg-gradient-to-br from-orange-700 to-orange-400 bg-clip-text p-2  text-right font-Roboto font-bold text-transparent"
        >
          <FaCloudDownloadAlt className="mr-2 self-center text-orange-600" />
          <p>Download my CV</p>
        </a>
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
