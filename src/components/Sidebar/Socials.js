import { ImLinkedin2 } from 'react-icons/im'
import { FiGithub } from 'react-icons/fi'

const Socials = () => {
  return (
    <div className="flex flex-row space-x-4 pl-24 pt-7">
      <button
        className="rounded-full bg-white p-1"
        onClick={() => window.open(`https://www.linkedin.com/in/fredolivesantos/`)}
      >
        <ImLinkedin2 className="text-main" />
      </button>
      <button className="rounded-full bg-white p-1" onClick={() => window.open(`https://github.com/fredolivesantos`)}>
        <FiGithub className="text-main" />
      </button>
    </div>
  )
}

export default Socials
