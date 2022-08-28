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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut.
        </p>
      </div>

      <div>
        <DiReact />
        <h1 className="text-xl">React</h1>
        <p className="text-xs max-w-xxs pt-1 leading-5 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut.
        </p>
      </div>

      <div>
        <FaGitAlt />
        <h1 className="text-xl">Git</h1>
        <p className="text-xs max-w-xxs pt-1 leading-5 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut.
        </p>
      </div>

      <div className="text-xl pt-6">
        <h1>HTML & CSS</h1>
        <div className="flex flex-row">
          <AiFillHtml5 />
          <DiCss3 />
        </div>
        <p className="text-xs max-w-xxs pt-1 leading-5 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut.
        </p>
      </div>
    </div>
  )
}

export default Skills
