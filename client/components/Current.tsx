import { FaReact, FaSwift } from 'react-icons/fa'
import { SiTypescript, SiXcode } from 'react-icons/si'

const Current = () => {
  return (
    <div className="mx-auto my-20 flex w-full flex-wrap items-center justify-around lg:my-40">
      <div className="my-6 mx-0 flex w-96 flex-col items-center rounded-xl bg-white px-3 text-center sm:mx-6 xl:mx-0">
        <img
          src="./img/waimakariri.png"
          alt="Calmly development in xcode"
          className="my-10 h-60 w-auto"
        />
        <h3 className="mb-3 text-orange-600">Waimakariri Books & Prints</h3>
        <p>
          A marketing site for an online bookshop based in Canterbury. Currently
          programming the website after completing the wireframe and design.
        </p>
        <div className="my-10 flex flex-wrap content-center justify-center  xl:mx-10">
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex self-center font-Roboto text-orange-600">
              <FaReact className="mr-2 self-center" aria-hidden="true" /> React
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex self-center font-Roboto text-orange-600">
              <SiTypescript className="mr-2 self-center" aria-hidden="true" />{' '}
              Typescript
            </h3>
          </div>
        </div>
      </div>
      <div className=" my-6 mx-0 flex w-96 flex-col items-center rounded-xl bg-white px-3 text-center sm:mx-6 xl:mx-0">
        <img
          src="./img/forever-friends.png"
          alt="forever friends logo - a pawprint in a heart"
          className="my-10 h-60"
        />
        <h3 className="mb-3 text-orange-600">Forever Friends</h3>
        <p>
          A marketing site for a vet service in Canterbury. Currently working on
          the wireframes after designing the logo.
        </p>
        <div className="my-10 flex flex-wrap content-center justify-center xl:mx-10">
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex self-center font-Roboto text-orange-600">
              <FaReact className="mr-2 self-center" aria-hidden="true" /> React
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex self-center font-Roboto text-orange-600">
              <SiTypescript className="mr-2 self-center" aria-hidden="true" />{' '}
              Typescript
            </h3>
          </div>
        </div>
      </div>
      <div className="my-6 mx-0 flex w-96 flex-col items-center rounded-xl bg-white px-3 text-center sm:mx-6 xl:mx-0">
        <img
          src="./img/calmlyios.png"
          alt="Calmly development in xcode"
          className="my-10 h-60"
        />
        <h3 className="mb-3 text-orange-600">Calmly iOS</h3>
        <p>
          Making an iOS app version of Calmly and learning swift to do so.
          Currently building a static app prototype.
        </p>
        <div className="my-10 flex flex-wrap content-center justify-center xl:mx-10">
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex self-center font-Roboto text-orange-600">
              <FaSwift className="mr-2 self-center" aria-hidden="true" /> Swift
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex self-center font-Roboto text-orange-600">
              <SiXcode className="mr-2 self-center" aria-hidden="true" /> Xcode
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Current
