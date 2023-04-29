import { MdEmail, MdLocationPin } from 'react-icons/md'
import { FaClock, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import { sendEmail } from '../apis/email'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    sendEmail(name, email, message)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="flex justify-between bg-gradient-to-tr from-orange-600 to-orange-300 py-10">
      <div className="mx-36 flex w-1/3 flex-col justify-center">
        <div>
          <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
            <MdEmail className="mr-3 self-center text-2xl" /> Email
          </h3>
          <p className="ml-3 text-orange-200">roisinyatesdev@outlook.com</p>
        </div>
        <div className="mt-10">
          <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
            <MdLocationPin className="mr-3 self-center text-2xl" /> Location
          </h3>
          <p className="ml-3 text-orange-200">Auckland, New Zealand</p>
        </div>
        <div className="mt-10">
          <h3 className="flex font-Roboto text-xl font-bold text-orange-100">
            <FaClock className="mr-3 self-center text-2xl" /> Working hours
          </h3>
          <p className="ml-3 text-orange-200">Very flexible, but generally</p>
          <p className="ml-3 text-orange-200">Mon-Fri 8:30am-6:00pm NZST</p>
        </div>

        <div className="mt-24 flex w-48 justify-evenly">
          <a
            href="https://github.com/roisin-yates"
            className="text-4xl"
            aria-label="github profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/roisin-yates-89b212218/"
            className="text-4xl"
            aria-label="linkedin profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-10 flex w-1/2 flex-col rounded-xl"
      >
        <h2 className="mb-10 text-center font-GlitchGoblin text-5xl text-orange-700">
          Get in touch
        </h2>
        <label
          htmlFor="name"
          className="font-Roboto text-xl font-bold text-orange-100"
        >
          Your name:
        </label>
        <input
          type="text"
          id="name"
          className="w-1/2 rounded-xl py-2 px-5 text-orange-700"
          placeholder="Joe Smith"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label
          htmlFor="email"
          className="mt-5 font-Roboto text-xl font-bold text-orange-100"
        >
          Your email:
        </label>
        <input
          type="text"
          id="email"
          className="w-1/2 rounded-xl py-2 px-5 text-orange-700 "
          placeholder="joesmith@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label
          htmlFor="message"
          className="mt-5 font-Roboto text-xl font-bold text-orange-100"
        >
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Write your message here"
          className="rounded-xl p-5 text-orange-700"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="font-roboto mx-auto mt-10 w-36 rounded-xl border-2 border-sky-500 bg-sky-500 py-2 px-4 text-xl font-semibold text-sky-50">
          Contact me
        </button>
      </form>
    </div>
  )
}

export default Contact
