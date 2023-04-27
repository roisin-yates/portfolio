import Profile from './Profile'
import Header from './Header'
import Skills from './Skills'

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-tl from-white to-slate-300">
        <Header />
        <Profile />
        <Skills />
      </div>
    </>
  )
}

export default App
