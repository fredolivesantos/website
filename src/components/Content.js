import Introduction from './Content/Introduction'

const Content = () => {
  return (
    <div className="grow w-auto h-full bg-white rounded-r-lg relative">
      <Introduction />
      <img src="https://i.pravatar.cc/300" className="absolute top-0 right-0 pr-10 pt-5 max-h-" />
    </div>
  )
}

export default Content
