import Subminder from './Subminder'

const Projects = () => {
  return (
    <div className="mt-72 justify-center bg-gradient-to-tl from-slate-200 to-white pt-10 pb-56">
      <div className="flex flex-col justify-center">
        <h2 className="mx-5 bg-gradient-to-tr from-orange-600 to-orange-300 bg-clip-text text-center font-GlitchGoblin text-6xl text-transparent">
          My projects
        </h2>
        <div className="my-4 flex w-full items-center self-center px-10 sm:w-1/2 sm:px-0">
          <div className="h-0.5 w-96 flex-1 border-t bg-orange-600"></div>
          <div className=" px-4 font-Roboto text-orange-600">
            Some of my recent work
          </div>
          <div className="h-0.5 w-96 flex-1 border-b bg-orange-600"></div>
        </div>
      </div>
      <div className="mx-5 flex content-center justify-center lg:mx-auto lg:w-3/4">
        <Subminder />
      </div>
    </div>
  )
}

export default Projects
