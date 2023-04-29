const Profile = () => {
  return (
    <div className="profile mx-20 flex flex-row justify-between">
      <div className="flex w-full flex-col  sm:w-1/2">
        <div className="mt-auto mb-auto">
          <h2 className="font-GlitchGoblin text-7xl xs:text-center sm:text-left">
            Hi there,
          </h2>
          <h2 className="pl-6 font-GlitchGoblin text-7xl">I&apos;m Roisin</h2>
          <h3 className="inline-block overflow-visible bg-glitch-background bg-cover py-2 px-4 font-Roboto text-6xl font-bold text-slate-200">
            Front End Developer
          </h3>
        </div>
      </div>
      <div className="max-w-2/3 min-w-96 img-div">
        <img
          className="w-full"
          src="./img/profile-image.png"
          alt="me, Roisin"
        />
      </div>
    </div>
  )
}

export default Profile
