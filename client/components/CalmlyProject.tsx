import { FaReact, FaNode } from 'react-icons/fa'
import { TbBrandRedux, TbBrandTypescript } from 'react-icons/tb'
import {
  SiTailwindcss,
  SiExpress,
  SiSqlite,
  SiPostgresql,
  SiBulma,
} from 'react-icons/si'
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { useState } from 'react'

const CalmlyProject = () => {
  const [readMore, setReadMore] = useState(false)

  const handleClick = () => {
    readMore === true ? setReadMore(false) : setReadMore(true)
  }

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-center xl:mt-0 xl:flex-row xl:justify-between">
        <div className="w-full xl:mr-10 xl:w-1/2">
          <h3 className="mt-10 text-lg font-bold text-orange-600 lg:mt-0 xl:text-right">
            Overview
          </h3>
          <p className="mt-10 font-Roboto text-slate-700 xl:mt-3 xl:text-right">
            <strong className="text-orange-600">The idea:</strong> I came up
            with Calmly when I was exploring various options for online diaries
            for my personal use. I found it difficult to find one with a simple,
            but attractive UI that also took positive and negative reflections
            into account.
          </p>
          {readMore === false ? (
            <>
              <button className="w-full text-orange-500" onClick={handleClick}>
                read more
              </button>
              <h3 className="my-4 text-center font-bold">Stack</h3>
              <div className="flex flex-wrap content-center justify-center xl:mx-10">
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
                    <SiBulma className="mr-2 self-center" aria-hidden="true" />
                    Bulma
                  </h3>
                </div>
                <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
                  <h3 className="flex font-Roboto text-orange-600">
                    <SiExpress
                      className="mr-2 self-center"
                      aria-hidden="true"
                    />
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
                    <SiPostgresql
                      className="mr-2 self-center"
                      aria-hidden="true"
                    />{' '}
                    PostgreSQL
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
              </div>
              <div className="mt-16 flex flex-wrap content-center justify-center">
                <a
                  href="https://github.com/roisin-yates/Calmly"
                  className="ml-4 text-4xl"
                  aria-label="calmly github repository"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=l9jp7Q-TWF4"
                  className="ml-4 text-4xl"
                  aria-label="calmly youtube video"
                >
                  <FaYoutube />
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="mt-3 font-Roboto text-slate-700 xl:text-right">
                <strong className="text-orange-600">How it works:</strong> You
                can add, edit and delete daily wellbeing reflections all on one
                screen, filling out sections like your emotions, successes,
                roadblocks, and a plan for the next day. I chose light pink and
                light yellow as my main colours as they have a calming effect.
              </p>
              <p className="mt-3 font-Roboto text-slate-700 xl:text-right">
                <strong className="text-orange-600">Biggest blocker:</strong> I
                wanted to learn different database systems, so chose sqlite for
                development and postgresql for production, so it took a while to
                get my head around manually returning the id of objects in my
                routes with postgresql.
              </p>
              <button className="w-full text-orange-500" onClick={handleClick}>
                read less
              </button>
            </>
          )}
        </div>
        <div className="min-w-300px mx-auto w-full xl:w-1/2">
          <img
            src="./img/calmly.png"
            alt="subminder homepage - calendar and upcoming subscription payments"
          />
        </div>
      </div>
      {readMore === true ? (
        <>
          <h3 className="my-4 text-center font-bold">Stack</h3>
          <div className="flex flex-wrap content-center justify-center xl:mx-10">
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
                <SiBulma className="mr-2 self-center" aria-hidden="true" />
                Bulma
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
                <SiPostgresql className="mr-2 self-center" aria-hidden="true" />{' '}
                PostgreSQL
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
                <FaNode className="mr-2 self-center" aria-hidden="true" />{' '}
                Node.js
              </h3>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap content-center justify-center">
            <a
              href="https://github.com/roisin-yates/Calmly"
              className="ml-4 text-4xl"
              aria-label="calmly github repository"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/watch?v=l9jp7Q-TWF4"
              className="ml-4 text-4xl"
              aria-label="calmly youtube video"
            >
              <FaYoutube />
            </a>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default CalmlyProject
