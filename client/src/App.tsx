import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layout";
import HomeScreen from "./pages/HomeScreen";
import NotFoundScreen from "./pages/NotFoundScreen";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
