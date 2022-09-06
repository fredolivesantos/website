import { useState } from 'react'

import Card from './components/Sidebar/Card'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { SiJavascript } from 'react-icons/si'

function App() {
  return (
    <div className="h-screen relative flex">
      <Card className="flex m-auto min-w-[1600px] h-full min-h-[800px] max-h-[1000px] px-52 py-24 drop-shadow-2xl shadow-inner-xl flex-shrink-0">
        <Sidebar />
        <Content className="max-h-screen max-w-screen overflow-hidden" items={skills} />
      </Card>
    </div>
  )
}

const skills = [
  {
    icons: <SiJavascript />,

    name: 'JavaScript',
    description:
      'The language I use the most and know most of. Also my favourite and the one where I get the most enjoynment of!',
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

export default App
