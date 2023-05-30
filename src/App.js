import "./App.css";
import Router from "./Router";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
