const Profile = () => {
  return (
    <>
      <div className="mx-20 flex flex-col-reverse justify-center text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex w-full flex-col justify-center sm:w-1/2">
          <div className="mt-auto mb-auto">
            <h2 className="font-GlitchGoblin text-7xl">Hi there,</h2>
            <h2 className="font-GlitchGoblin text-7xl sm:pl-6">
              I&apos;m Roisin
            </h2>
            <h3 className="inline-block overflow-visible bg-glitch-background bg-cover py-2 px-4 font-Roboto text-6xl font-bold text-slate-200">
              Front End Developer
            </h3>
          </div>
        </div>
        <div className="max-w-2/3 min-w-96 mx-auto">
          <img
            className="w-full"
            src="./img/profile-image.png"
            alt="me, Roisin"
          />
        </div>
      </div>
    </>
  )
}

export default Profile
