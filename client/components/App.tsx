import Profile from './Profile'
import Header from './Header'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-tl from-white to-slate-300 pb-36">
        <Header />
        <Profile />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
