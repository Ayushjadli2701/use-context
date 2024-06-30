import React, { createContext } from 'react'
import ChildA from "./components/ChildA"


//create context
const nameData = createContext();
const ageData = createContext();

const App = () => {

  const name = "Ayush"
  const age = 23
  return (
    <div>

      {/* provide context */}

      <nameData.Provider value ={name}>
        <ageData.Provider value={age}> 
            <ChildA />
        </ageData.Provider>
      </nameData.Provider>
      
    </div>
  )
}

export default App

//export and import in the file required
export {nameData, ageData}
