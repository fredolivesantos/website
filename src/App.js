import Card from './components/Card'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <div>
      <Card className=" flex shadow-2xl rounded-lg h-screen m-56">
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
