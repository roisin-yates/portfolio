import {
  FaGamepad,
  FaHiking,
  FaDog,
  FaSeedling,
  FaHeadphonesAlt,
  FaReact,
  FaNode,
} from 'react-icons/fa'

import { TbBrandRedux, TbBrandTypescript, TbBrandHtml5 } from 'react-icons/tb'
import {
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiBulma,
  SiExpress,
  SiSqlite,
  SiPostgresql,
  SiJest,
} from 'react-icons/si'

const Skills = () => {
  return (
    <>
      <div className="mx-5 mt-36 flex flex-col lg:mx-10 lg:flex-row">
        <div className="border-t-16 w-full rounded-lg bg-gradient-to-b from-slate-100 to-white p-6 lg:mx-10 lg:w-1/2">
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
          <div className="mt-10 flex w-full flex-wrap justify-evenly">
            <div className="flex w-24 flex-col">
              <FaGamepad className="icons ml-auto mr-auto text-6xl" />
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
        <div className="mt-28 flex w-full flex-wrap content-center justify-center lg:mx-10 lg:mt-0 lg:w-1/2">
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex self-center font-Roboto text-xl font-bold text-orange-100">
              <FaReact className="mr-4 self-center" aria-hidden="true" /> React
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <TbBrandTypescript
                className="mr-4 self-center"
                aria-hidden="true"
              />
              Typescript
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <TbBrandRedux className="mr-4 self-center" aria-hidden="true" />
              Redux
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <FaNode className="mr-4 self-center" aria-hidden="true" /> Node.js
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <FaReact className="mr-4 self-center" aria-hidden="true" /> React
              Native
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <SiJavascript className="mr-4 self-center" aria-hidden="true" />
              Javascript
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <TbBrandHtml5 className="mr-4 self-center" aria-hidden="true" />
              HTML5
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <SiCss3 className="mr-4 self-center" aria-hidden="true" /> CSS3
            </h3>
          </div>

          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <SiTailwindcss className="mr-4 self-center" aria-hidden="true" />
              TailwindCSS
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <SiBulma className="mr-4 self-center" aria-hidden="true" /> Bulma
            </h3>
          </div>

          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <SiExpress className="mr-4 self-center" aria-hidden="true" />
              Express.js
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <SiSqlite className="mr-4 self-center" aria-hidden="true" />
              SQLite
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <SiPostgresql className="mr-4 self-center" aria-hidden="true" />
              PostgreSQL
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex rounded-xl bg-orange-600 py-2 px-4">
            <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
              <SiJest className="mr-4 self-center" aria-hidden="true" /> Jest
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
