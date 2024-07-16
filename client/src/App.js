import "./App.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from "./components/Messenger";
function App() {
  const clientId='748582361020-olh12tq5vod7olh2ueqq0urn4tj5m5cd.apps.googleusercontent.com'
  // 748582361020-olh12tq5vod7olh2ueqq0urn4tj5m5cd.apps.googleusercontent.com
  return <GoogleOAuthProvider clientId={clientId}>
  
  <Messenger/>
  </GoogleOAuthProvider >;
}

export default App;
