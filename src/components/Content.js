import Introduction from './Content/Introduction'
import Resume from './Content/Resume'
import Skills from './Content/SkillList'

const Content = () => {
  return (
    <div className="grow w-auto h-full bg-contcolor rounded-r-lg overflow-scroll min-h-full">
      <Introduction className="static" />

      <Resume />
      <Skills />
    </div>
  )
}

export default Content
