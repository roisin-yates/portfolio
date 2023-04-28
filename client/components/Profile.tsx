const Profile = () => {
  return (
    <div className="mx-20 flex justify-between">
      <div className="flex w-1/2 flex-col">
        <div className="mt-auto mb-auto">
          <h2 className="font-GlitchGoblin text-7xl">Hi there ,</h2>
          <h2 className="pl-6 font-GlitchGoblin text-7xl">I&apos;m Roisin</h2>
          <h3 className="inline-block overflow-visible bg-glitch-background bg-cover py-2 px-4 font-Roboto text-6xl font-bold text-slate-200">
            Front End Developer
          </h3>
        </div>
      </div>
      <div className="w-1/2">
        <img className="w-100" src="./img/profile-image.png" alt="me, Roisin" />
      </div>
    </div>
  )
}

export default Profile
