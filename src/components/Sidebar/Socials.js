import { ImLinkedin2 } from 'react-icons/im'
import { FiGithub } from 'react-icons/fi'

const Socials = () => {
  return (
    <div className="flex flex-col items-center mt-3">
      <div className="flex flex-row space-x-4">
        <button
          className="rounded-full bg-white p-1 hover:bg-slate-600 transition delay-75"
          onClick={() => window.open(`https://www.linkedin.com/in/fredolivesantos/`)}
        >
          <ImLinkedin2 className="text-main" />
        </button>
        <button
          className="rounded-full bg-white p-1 hover:bg-slate-600 transition delay-75"
          onClick={() => window.open(`https://github.com/fredolivesantos`)}
        >
          <FiGithub className="text-main" />
        </button>
      </div>
    </div>
  )
}

export default Socials
