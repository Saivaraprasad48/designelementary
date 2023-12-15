import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layout";
import HomeScreen from "./pages/HomeScreen";
import NotFoundScreen from "./pages/NotFoundScreen";
import NewRemainderScreen from "./pages/NewRemainderScreen";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/remainder/add" element={<NewRemainderScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
