import "./App.css";
import Router from "./Router";
import { AuthProvider } from "./AuthContext";
import WatchListContextProvider from "./WatchListContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <WatchListContextProvider>
          <Router />
        </WatchListContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
