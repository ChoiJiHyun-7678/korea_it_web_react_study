import { BrowserRouter } from "react-router-dom";
import mainRouter from "./router/MainRouter/mainRouter";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
