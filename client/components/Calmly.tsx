import { useState } from 'react'
import CalmlyProject from './CalmlyProject'
import CalmlyWireframes from './CalmlyWireframes'

const Calmly = () => {
  const [view, setView] = useState('project')

  return (
    <>
      <div className="mt-24 flex">
        <button
          className={
            view === 'project'
              ? 'rounded-t-lg bg-white p-4 text-slate-700'
              : 'rounded-t-lg bg-slate-200 p-4 text-slate-500'
          }
          onClick={() => setView('project')}
        >
          Overview
        </button>
        <button
          className={
            view === 'web-ui'
              ? 'rounded-t-lg bg-white p-4 text-slate-700'
              : 'rounded-t-lg bg-slate-200 p-4 text-slate-500'
          }
          onClick={() => setView('web-ui')}
        >
          UI & Wireframes
        </button>
      </div>
      <div
        className="flex flex-col items-center rounded-b-xl rounded-tr-xl bg-white p-10"
        id="calmly"
      >
        <div className="flex w-full justify-center xl:justify-start">
          <div className=" w-full text-center xl:w-1/2">
            <h3 className="text-center font-Roboto text-4xl font-bold text-orange-600">
              Calmly
            </h3>
            <p className="text-center text-orange-500 ">
              Full-Stack developer, Owner, UI
            </p>
          </div>
        </div>
        {view === 'project' ? <CalmlyProject /> : <CalmlyWireframes />}
      </div>
    </>
  )
}

export default Calmly
