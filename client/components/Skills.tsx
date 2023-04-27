import {
  FaGamepad,
  FaHiking,
  FaDog,
  FaSeedling,
  FaHeadphonesAlt,
} from 'react-icons/fa'

const Skills = () => {
  return (
    <>
      <div className="mx-10 mt-36 flex">
        <div className="border-t-16 mx-10 w-1/2 rounded-lg bg-gradient-to-b from-slate-100 to-white p-6">
          <h2 className="mb-10 font-GlitchGoblin text-4xl font-bold">
            About Me
          </h2>
          <p className="font-Roboto text-xl text-slate-600">
            I&apos;m a Front-End Developer with an eye for sleek, modern, and
            intuitive design. I am passionate about creating user interfaces
            that not only look great, but also function flawlessly.
          </p>
          <p className="mt-6 font-Roboto text-xl text-slate-600">
            I am excited to bring my experience and enthusiasm to a dynamic and
            innovative engineering team, where I can continue to learn and grow.
          </p>
          <p className="mt-6 font-Roboto text-xl text-slate-600">
            When I&apos;m not coding, you can usually find me:
          </p>
          <div className="mt-10 flex justify-evenly">
            <div className="flex w-24 flex-col">
              <FaGamepad className="ml-auto mr-auto text-6xl" />
              <p className="text-center text-slate-500">Playing video games</p>
            </div>
            <div className="flex w-24 flex-col">
              <FaHiking className="ml-auto mr-auto text-6xl" />
              <p className="text-center text-slate-500">Hiking</p>
            </div>
            <div className="flex w-24 flex-col">
              <FaDog className="ml-auto mr-auto text-6xl" />
              <p className="text-center text-slate-500">With my dog, Bess</p>
            </div>
            <div className="flex w-24 flex-col">
              <FaSeedling className="ml-auto mr-auto text-6xl" />
              <p className="text-center text-slate-500">Gardening</p>
            </div>
            <div className="flex w-24 flex-col">
              <FaHeadphonesAlt className="ml-auto mr-auto text-6xl" />
              <p className="text-center text-slate-500">
                Listening to emo music
              </p>
            </div>
          </div>
        </div>
        <div className="mx-10 flex w-1/2 flex-wrap justify-around">
          <img
            src="./img/React-icon.svg.png"
            alt="React logo"
            className="m-4 h-24"
          />
          <img src="./img/logo.png" alt="Redux logo" className="m-4 h-24" />
          <img
            src="./img/2560px-Node.js_logo.svg.png"
            alt="Node.js logo"
            className="m-4 h-24"
          />

          <img
            src="./img/JavaScript-logo.png"
            alt="Javascript logo"
            className="m-4 h-24"
          />
          <img
            src="./img/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
            alt="Tailwind CSS logo"
            className="m-4 h-24"
          />
          <img
            src="./img/HTML5_logo_and_wordmark.svg.png"
            alt="HTML5 logo"
            className="m-4 h-24"
          />
          <img
            src="./img/CSS3_logo_and_wordmark.svg.png"
            alt="CSS3 logo"
            className="m-4 h-24"
          />
          <img
            src="./img/Bulma-Logo.png"
            alt="Bulma logo"
            className="m-4 h-24"
          />
          <img
            src="./img/Expressjs.png"
            alt="Express.js logo"
            className="m-4 h-24"
          />
          <img
            src="./img/SQLite370.svg.png"
            alt="Sqlite3 logo"
            className="m-4 h-24"
          />
        </div>
      </div>
    </>
  )
}

export default Skills
