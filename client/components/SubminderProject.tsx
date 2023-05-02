import { FaReact, FaNode } from 'react-icons/fa'
import { TbBrandRedux, TbBrandTypescript } from 'react-icons/tb'
import { SiTailwindcss, SiExpress, SiSqlite } from 'react-icons/si'
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

const SubminderProject = () => {
  return (
    <div className="flex w-full flex-col justify-center xl:flex-row xl:justify-between">
      <div className="min-w-300px mx-auto w-full xl:w-1/2">
        <img
          src="./img/subminder.png"
          alt="subminder homepage - calendar and upcoming subscription payments"
        />
      </div>

      <div className="w-full xl:ml-10 xl:w-1/2">
        <h3 className="mt-10 text-lg font-bold text-orange-600 lg:mt-0">
          Overview
        </h3>
        <p className="mt-3 font-Roboto text-slate-700">
          I collaborated with a team of five others to develop a subscription
          and payment management site as part of our final project at Dev
          Academy. The site includes secure Auth0 login, the ability to create,
          edit, and delete paid subscriptions or free trials, view upcoming and
          past payments, and sign up for email reminders. I also built a
          prototype in React Native for a mobile app using static data.
        </p>
        <h3 className="my-4 text-center font-bold">Stack</h3>
        <div className="flex flex-wrap content-center justify-center xl:mx-10">
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex self-center font-Roboto text-orange-600">
              <FaReact className="mr-2 self-center" aria-hidden="true" /> React
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
              <SiTailwindcss className="mr-2 self-center" aria-hidden="true" />
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
              <TbBrandRedux className="mr-2 self-center" aria-hidden="true" />
              Redux
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex font-Roboto text-orange-600">
              <FaNode className="mr-2 self-center" aria-hidden="true" /> Node.js
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex font-Roboto text-orange-600">
              <FaReact className="mr-2 self-center" aria-hidden="true" /> React
              Native
            </h3>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap content-center justify-center">
          <a
            href="https://subminder-production.up.railway.app"
            className="ml-4 text-4xl"
            aria-label="deployed subminder website"
          >
            <CgWebsite />
          </a>
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
            aria-label="youtube video"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SubminderProject
