import Profile from './Sidebar/Profile'
import Menu from './Sidebar/Menu'
import Socials from './Sidebar/Socials'
import Select from './Sidebar/Select'
import HireMe from './Sidebar/HireMe'

const Sidebar = () => {
  return (
    <div className="rounded-l-lg w-1/6 h-full bg-main ">
      <Profile />
      <Menu />
      <Socials />
      <Select />
      <HireMe />
    </div>
  )
}

export default Sidebar
