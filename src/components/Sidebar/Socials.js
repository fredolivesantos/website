import { ImLinkedin2 } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="flex flex-row space-x-4 pl-24 pt-7">
      <ImLinkedin2 className="text-white" />
      <FaGithub className="text-white" />
    </div>
  )
}

export default Socials
