import { ChildrenAndTeens } from './pages/childrenAndTeens/childrenAndTeens';
import { Send } from './pages/send/Send';
import { Home } from './pages/home/Home';
import { Route , Routes} from "react-router-dom"
import { ContactUs } from './pages/contactUs/contactUs';
import {Books} from "./pages/books/Books";
import { SimilarQuestions } from './pages/similarQuestions/SimilarQuestions';
import { Shabek } from './pages/shabek/Shabek';
import { Fipa } from './pages/fipa/Fipa';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Send" element={<Send />} />
        <Route path='/ChildrenAndTeenagers' element={<ChildrenAndTeens />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/books' element={<Books />} />
        <Route path='/similarQuestions' element={<SimilarQuestions />} />
        <Route path='/shabek' element={<Shabek />} />
        <Route path='/fipa' element={<Fipa />} />
      </Routes>
    </div>
  );
}

export default App;
