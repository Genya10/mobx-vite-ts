import './App.css'
import { RootStoreContext } from './stores/root-store-context'
import RootStore from './stores/root-store'
import { Wrapper } from './components/wrapper/Wrapper'

function App() {

  return (
   <RootStoreContext.Provider value={new RootStore()}>
    <div className='App'>
     <Wrapper/>
    </div>
   </RootStoreContext.Provider>
  )
}

export default App
