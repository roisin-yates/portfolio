import Profile from './Profile'
import Header from './Header'
import Skills from './Skills'
import Projects from './Projects'

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-tl from-white to-slate-300 pb-36">
        <Header />
        <Profile />
      </div>
      <Skills />
      <Projects />
    </>
  )
}

export default App
