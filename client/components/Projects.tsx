import { FaReact, FaNode } from 'react-icons/fa'
import { TbBrandRedux, TbBrandTypescript } from 'react-icons/tb'
import { SiTailwindcss, SiExpress, SiSqlite } from 'react-icons/si'
import { FaGithub, FaYoutube } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className="mt-72 bg-gradient-to-tl from-slate-200 to-white pt-10">
      <div className="flex flex-col justify-center">
        <h2 className="bg-gradient-to-tr from-orange-600 to-orange-300 bg-clip-text text-center font-GlitchGoblin text-6xl text-transparent">
          My projects
        </h2>
        <div className="my-4 flex w-1/2 items-center self-center">
          <div className="h-0.5 w-96 flex-1 border-t bg-orange-600"></div>
          <div className=" px-4 font-Roboto text-orange-600 sm-screen:text-green-400">
            Some of my recent work
          </div>
          <div className="h-0.5 w-96 flex-1 border-b bg-orange-600"></div>
        </div>
      </div>
      <div className="mx-20 flex content-center justify-center">
        <div className="mt-24 flex items-center justify-between rounded-xl bg-white p-10">
          <div className="w-1/2">
            <img
              src="./img/subminder.png"
              alt="subminder homepage - calendar and upcoming subscription payments"
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-center font-Roboto text-4xl font-bold text-orange-600">
              subMinder
            </h3>
            <p className="mb-14 text-center text-orange-500">
              Front-End developer, Product owner, UI
            </p>
            <p className=" font-Roboto text-slate-700">
              I collaborated with a team of five to develop a subscription and
              payment management site as part of our final project at Dev
              Academy. The site includes secure Auth0 login, the ability to
              create, edit, and delete paid subscriptions or free trials, view
              upcoming and past payments, and sign up for email reminders. I
              also built a prototype in React Native for a mobile app using
              static data.
            </p>
            <h3 className="my-4 text-center font-bold">Stack</h3>
            <div className="mx-10 flex flex-wrap content-center justify-center">
              <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
                <h3 className="flex self-center font-Roboto text-orange-600">
                  <FaReact className="mr-2 self-center" aria-hidden="true" />{' '}
                  React
                </h3>
              </div>
              <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
                <h3 className="flex font-Roboto text-orange-600">
                  <TbBrandTypescript
                    className="mr-2 self-center"
                    aria-hidden="true"
                  />
                  Typescript
                </h3>
              </div>
              <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
                <h3 className="flex font-Roboto text-orange-600">
                  <SiTailwindcss
                    className="mr-2 self-center"
                    aria-hidden="true"
                  />
                  TailwindCSS
                </h3>
              </div>
              <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
                <h3 className="flex font-Roboto text-orange-600">
                  <SiExpress className="mr-2 self-center" aria-hidden="true" />
                  Express.js
                </h3>
              </div>
              <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
                <h3 className="flex font-Roboto text-orange-600">
                  <SiSqlite className="mr-2 self-center" aria-hidden="true" />
                  SQLite
                </h3>
              </div>
              <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
                <h3 className="flex font-Roboto text-orange-600">
                  <TbBrandRedux
                    className="mr-2 self-center"
                    aria-hidden="true"
                  />
                  Redux
                </h3>
              </div>
              <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
                <h3 className="flex font-Roboto text-orange-600">
                  <FaNode className="mr-2 self-center" aria-hidden="true" />{' '}
                  Node.js
                </h3>
              </div>
              <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
                <h3 className="flex font-Roboto text-orange-600">
                  <FaReact className="mr-2 self-center" aria-hidden="true" />{' '}
                  React Native
                </h3>
              </div>
            </div>
            <div className="mt-16 flex flex-wrap content-center justify-center">
              <a
                href="https://github.com/tohora-2023/SubMinder/tree/dev"
                className="ml-4 text-4xl"
                aria-label="github profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.youtube.com/watch?v=kEox7HKehNU"
                className="ml-4 text-4xl"
                aria-label="github profile"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
