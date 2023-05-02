import { SiShopify, SiFigma, SiGoogle } from 'react-icons/si'

const CalmlyWireframes = () => {
  return (
    <div className="flex w-full flex-col justify-center xl:flex-row xl:justify-between">
      <div className="w-full xl:mr-10 xl:w-1/2">
        <h3 className="mt-10 text-lg font-bold text-orange-600 lg:mt-0 xl:text-right">
          User Interface
        </h3>
        <p className=" mt-3 font-Roboto text-slate-700 xl:text-right">
          As a solo developer working on a full stack app, I had to design the
          user interface by myself. To start, I used Figma to create wireframes
          for the app. My goal was to create a calming atmosphere within the
          app, so I decided to keep everything on one page, even the edit
          function, in order to eliminate the need for any external links. To
          improve the user experience, I came up with a custom color palette,
          custom logo and used Google icons that mimicked facial expressions.
          This allowed users to visually express how their day was going, as
          sometimes that can be easier than words. By prioritizing simplicity,
          user engagement, and emotional expression in my user interface design,
          I aimed to create an app that was not only functional, but also
          enjoyable to use.
        </p>
        <h3 className="my-4 text-center font-bold">Resources</h3>
        <div className="flex flex-wrap content-center justify-center xl:mx-10">
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex font-Roboto text-orange-600">
              <SiFigma className="mr-2 self-center" aria-hidden="true" />
              Figma
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex font-Roboto text-orange-600">
              <SiShopify className="mr-2 self-center" aria-hidden="true" />
              Shopify logo creator
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex font-Roboto text-orange-600">
              <SiGoogle className="mr-2 self-center" aria-hidden="true" />
              Google Material Design
            </h3>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap content-center justify-center">
          <a
            href="https://www.figma.com/file/5X1D5TCLXrHIukKLkLbmrr/Calmly?node-id=0%3A1&t=JegNaY9U4s3tjiug-1"
            className="ml-4 text-4xl"
            aria-label="Figma wireframes"
          >
            <SiFigma />
          </a>
        </div>
      </div>
      <div className="min-w-300px mx-auto w-full xl:w-1/2">
        <img
          src="./img/calmly-wireframe.png"
          alt="Figma wireframes for the calmly website"
        />
      </div>
    </div>
  )
}

export default CalmlyWireframes
