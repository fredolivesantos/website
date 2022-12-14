import { FaPaperPlane } from 'react-icons/fa'

const HireMe = () => {
  return (
    <div className="flex flex-col items-center">
      <button
        className="text-center rounded p-2 bg-slate-900/50	text-white ml-7 mr-7 mt-5 text-sm flex flex-row hover:bg-black transition delay-75"
        onClick={() => (window.location = 'mailto:fred.olive.santos@gmail.com')}
      >
        {' '}
        <FaPaperPlane className="mr-1" />
        Hire Me
      </button>
    </div>
  )
}

export default HireMe
