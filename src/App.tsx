import { createContext, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { NewRoom } from './pages/NewRoom'

export const AuthContext = createContext({} as any)

function App() {
  const [ user, setUser] = useState()
  return (
    <div>
      <BrowserRouter>
        <AuthContext.Provider value={{user, setUser}}>
          <Route path="/" exact={true} component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </AuthContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
