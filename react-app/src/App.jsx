import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import LikeButton from "./components/LikeButton";
import Login from "./components/Login";
import NameInput from "./components/NameInput";
import Register from "./components/Register";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <LikeButton />
        <NameInput />
        <Login />
        <Register />
        <Search />
      </div>
      <Footer />
    </div>
  );
}
export default App;
