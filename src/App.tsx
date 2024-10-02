import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Dashboard } from "./Dashboard/page"
import { NotFound } from "./components/not-found"
import { Home } from "./Dashboard/Home/page"
import { Test } from "./Dashboard/Home/test"
import { Login } from "./Dashboard/Auth/login"
import { UnProtect } from "./components/routes/UnProtect"
import { Protect } from "./components/routes/Protect"

function App() {
  return (
    <>

      <Router>
          <Routes>
            <Route element={<UnProtect/>}>
            <Route path="/auth/login" element={<Login/>}/>
            </Route>

            <Route element={<Protect/>}>
            <Route path="/" element={<Dashboard />} >
            <Route index element={<Home />} />
            <Route path="/t" element={<Test />} />
            <Route path="*" element={<NotFound />} />
            </Route>
            </Route>
          </Routes>
      </Router>

    </>
  )
}

export default App
