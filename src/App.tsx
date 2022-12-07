import React, { useState } from 'react'
import './App.css'

interface mousePositionProps {
  pageX: number,
  pageY: number
}

export function App() {
  const [Point, setPoint] = useState<mousePositionProps[]>([])


  function getPosition(e: React.MouseEvent){
    const { pageX, pageY } = e

    setPoint([...Point, {pageX, pageY}])
  }

  function handlePopPoint(){
    const newPoint = [...Point]
    newPoint.pop()

    setPoint(newPoint)
  }

  return (
    <>
      <button className='BtUndo' disabled={Point.length === 0} onClick={handlePopPoint}>
        Undo
      </button>
      <button className='BtRedo' onClick={}>
        Redo
      </button>
      <div className="App" onClick={getPosition}>
        {Point.map(({ pageX, pageY }, index) => {
          return(
            <div key={index} style={{
              left: pageX -5,
              top: pageY -5,
              position: 'absolute',
              borderRadius: '999rem',
              backgroundColor: '#7B68EE',
              padding: '8px'
            }}></div>
          )
        })}
      </div>
    </>
  )
}
