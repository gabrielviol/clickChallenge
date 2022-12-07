import React, { useState } from 'react'
import './App.css'

interface mousePositionProps {
  pageX: number,
  pageY: number
}

export function App() {
  const [point, setPoint] = useState<mousePositionProps[]>([])
  const [reversePoint, setReversePoint] = useState<mousePositionProps[]>([])


  function getPosition(e: React.MouseEvent){
    const { pageX, pageY } = e

    setPoint([...point, {pageX, pageY}])
  }

  function handlePopPoint(){
    const newPoint = [...point]
    const undoPoint = newPoint.pop()

    setPoint(newPoint)
    if(!undoPoint) return
    setReversePoint([...reversePoint, undoPoint])
  }

  function handleRevertPoints(){
    const newRevertPoint = [...reversePoint]
    const redoPoint = newRevertPoint.pop()
    if(!redoPoint) return
    setReversePoint(newRevertPoint)
    setPoint([...point, redoPoint])
  }

  function handleClearPoints(){
    setPoint([])
    setReversePoint([])
  }

  return (
    <>
      <div className='Header'>
        <button className='BtUndo' disabled={point.length === 0} onClick={handlePopPoint}>
          Undo
        </button>
        <button className='BtRedo' disabled={reversePoint.length === 0} onClick={handleRevertPoints}>
          Redo
        </button>
        <button className='BtClear' disabled={reversePoint.length === 0 && point.length === 0} onClick={handleClearPoints}>
          Clear
        </button> 
      </div>     

      <div className="App" onClick={getPosition}>
      
        {point.map(({ pageX, pageY }, index) => {
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
