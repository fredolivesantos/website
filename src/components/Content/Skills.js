import { SiJavascript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { FaGitAlt } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'

const Skills = () => {
  return (
    <div className="grid grid-cols-3 col-auto pl-7 pt-10">
      <div>
        <SiJavascript className="text-yellow" />
        <h1 className="text-xl">Javascript</h1>
        <p className="text-xs max-w-xxs pt-1 leading-5 tracking-wide">
          The language I use the most and know most of. Also my favourite and the one where I get the most enjoynment
          of!
        </p>
      </div>

      <div>
        <DiReact />
        <h1 className="text-xl">React</h1>
        <p className="text-xs max-w-xxs pt-1 leading-5 tracking-wide">
          The other one I use the most wth Javascript, where I can develop website a lot more dinamically.
        </p>
      </div>

      <div>
        <FaGitAlt />
        <h1 className="text-xl">Git</h1>
        <p className="text-xs max-w-xxs pt-1 leading-5 tracking-wide">
          Essential for everyday. If I don't upload my projects, I feel very afraid of losing my code after a long day.
        </p>
      </div>

      <div className="text-xl pt-6">
        <h1>HTML & CSS</h1>
        <div className="flex flex-row">
          <AiFillHtml5 />
          <DiCss3 />
        </div>
        <p className="text-xs max-w-xxs pt-1 leading-5 tracking-wide">
          Started with these two languages. Even though I dont use them much as their own right now, they were the base
          to make me the developer I am today.
        </p>
      </div>

      <div className="text-xl pt-6">
        <h1>Bootstrap and Tailwind</h1>
        <div className="flex flex-row">
          <AiFillHtml5 />
          <DiCss3 />
        </div>
        <p className="text-xs max-w-xxs pt-1 leading-5 tracking-wide">
          My prefered way to write CSS is with these two frameworks, with a big preference to Tailwind.
        </p>
      </div>
    </div>
  )
}

export default Skills
