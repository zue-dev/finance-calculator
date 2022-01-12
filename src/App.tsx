import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SubOnePage from "./pages/SubOnePage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* 페이지들 편하게 추가 하시죠 */}
        <Route path='/1' element={<SubOnePage />} />
        <Route path='/2' element={<SubOnePage />} />
      </Routes>
    </div>
  );
}

export default App;
