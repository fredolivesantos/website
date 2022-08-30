import Card from './components/Sidebar/Card'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <div className="h-screen relative flex">
      <Card className="static flex h-full px-52 py-24 drop-shadow-2xl shadow-inner-xl flex-shrink-0">
        <Sidebar />
        <Content className="max-h-screen max-w-screen overflow-hidden" />
      </Card>
    </div>
  )
}

export default App

const skills = [
  {
    icons: [
      {
        name: 'js',
      },
    ],
    title: 'Vanilla JavaScript',
    description: '...',
  },
  {
    icons: [
      {
        name: 'React',
      },
      { name: 'Vue' },
    ],
    title: 'Vanilla JavaScript',
    description: '...',
  },
  {
    icons: [
      {
        name: 'js',
      },
    ],
    title: 'Vanilla JavaScript',
    description: '...',
  },
]
