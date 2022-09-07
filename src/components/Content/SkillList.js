import { SiJavascript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { FaGitAlt } from 'react-icons/fa'
import { AiFillHtml5, AiFillPropertySafety } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import App from '../../App'

function SkillList() {
  const Skills = [
    {
      icon: <SiJavascript className="text-js bg-black" />,
      name: 'Javascript',
      description:
        'The language I use the most and know most of. Also my favourite and the one where I get the most enjoynment of!',
    },
    {
      icon: <DiReact className="text-rcolor" />,
      name: 'React',
      description: 'The other one I use the most with Javascript, where I can develop website a lot more dinamically.',
    },
    {
      icon: <FaGitAlt className="text-gitcolor" />,
      name: 'Git',
      description: `Essential for everyday. If I don't upload my projects, I feel very afraid of losing my code after a long day.`,
    },
    {
      icon: (
        <div className="flex flex-row">
          <AiFillHtml5 className="text-htmlcolor" /> <DiCss3 className="text-csscolor" />{' '}
        </div>
      ),
      name: 'HTML5 & CSS3',
      description: `Started with these two languages. Even though I dont use them much as their own right now, they were the base to
      make me the developer I am today.`,
    },
    {
      icon: (
        <div className="flex flex-row">
          <FaBootstrap className="text-bootcolor" /> <SiTailwindcss className="text-tailcolor" />{' '}
        </div>
      ),
      name: 'Bootstrap & Tailwind',
      description: 'My prefered way to write CSS is with these two frameworks, with a big preference to Tailwind.',
    },
  ]
  return (
    <div className="grid grid-cols-3 col-auto pl-7 pt-10 gap-x-4 gap-y-10">
      {Skills.map((Skills) => (
        <div>
          <div className="text-2xl">{Skills.icon}</div>
          <h1 className="text-xl">{Skills.name}</h1>
          <p className="text-xs max-w-xxs pt-1 leading-5 tracking-wide">{Skills.description}</p>
        </div>
      ))}
    </div>
  )
}

export default SkillList
