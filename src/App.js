import Card from './components/Card'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <div className="h-screen ">
      <Card className="flex h-full p-52 drop-shadow-lg">
        <Sidebar />
        <Content />
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
