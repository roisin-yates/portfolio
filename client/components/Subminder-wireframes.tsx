import { SiMiro, SiFigma } from 'react-icons/si'

const SubminderWireframes = () => {
  return (
    <div className="flex w-full flex-col justify-center xl:flex-row xl:justify-between">
      <div className="min-w-300px mx-auto w-full xl:w-1/2">
        <img
          src="./img/subminder-wireframe.png"
          alt="Figma wireframes for the subminder website"
        />
      </div>
      <div className="w-full xl:ml-10 xl:w-1/2">
        <h3 className="mt-10 text-lg font-bold text-orange-600 lg:mt-0">
          User Interface
        </h3>
        <p className=" mt-3 font-Roboto text-slate-700">
          I was in charge of front-end design for Subminder, so I used a
          combination of digital tools to design and create the user interface.
          First, I used Miro and Figma to create wireframes, which helped me
          visualize the layout and structure of the site. I then used the
          Shopify logo creator to design a unique logo. To ensure consistency
          throughout the site, I created a custom color palette and icon list.
          This allowed me to work collaboratively with others who were
          contributing to the website, and ensured that everyone was working
          towards the same cohesive vision.
        </p>
        <h3 className="my-4 text-center font-bold">Resources</h3>
        <div className="flex flex-wrap content-center justify-center xl:mx-10">
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex self-center font-Roboto text-orange-600">
              <SiMiro className="mr-2 self-center" aria-hidden="true" /> Miro
            </h3>
          </div>
          <div className="block-inline my-2 mx-1 flex items-center rounded-xl border-2 border-orange-600 py-1 px-2">
            <h3 className="flex font-Roboto text-orange-600">
              <SiFigma className="mr-2 self-center" aria-hidden="true" />
              Figma
            </h3>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap content-center justify-center">
          <a
            href="https://www.figma.com/file/5w5tp5649qRpLIpCvCwsQt/Subminder?node-id=0%3A1&t=K0c28yGw25SrcYrF-1"
            className="ml-4 text-4xl"
            aria-label="Figma wireframes"
          >
            <SiFigma />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SubminderWireframes
