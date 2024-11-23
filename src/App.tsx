import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Dashboard } from "./Dashboard/page"
import { NotFound } from "./components/not-found"
import { Home } from "./Dashboard/Home/page"
import { Login } from "./Dashboard/Auth/login"
import { UnProtect } from "./components/routes/UnProtect"
import { Protect } from "./components/routes/Protect"
import { UsersList } from "./Dashboard/Home/Users/users-list"
import { CreateUser } from "./Dashboard/Home/Users/create-user"
import { UpdateUser } from "./Dashboard/Home/Users/update-user"

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
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/users/edit/:id" element={<UpdateUser />} />
            <Route path="*" element={<NotFound />} />
            </Route>
            </Route>
          </Routes>
      </Router>

    </>
  )
}

export default App
