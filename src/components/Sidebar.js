import Profile from './Profile'
import Menu from './Menu'

const Sidebar = () => {
  return (
    <div className="rounded-l-lg w-1/6 h-full bg-main ">
      <Profile />
      <Menu />
    </div>
  )
}

export default Sidebar
