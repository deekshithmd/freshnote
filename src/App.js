import "./App.css";
import {HomePage,NotesPage,LabelsPage,ArchivesPage,TrashPage} from "./pages"
import {Route,Routes} from "react-router-dom"
import {Navigation} from "./components"
import { Login,Signup } from "./pages";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/notes" element={<NotesPage/>}/>
        <Route path="/trash" element={<TrashPage/>}/>
        <Route path="/archives" element={<ArchivesPage/>}/>
        <Route path="/labels" element={<LabelsPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
