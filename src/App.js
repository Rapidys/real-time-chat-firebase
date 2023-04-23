import Chat from "./components/chat";
import Login from "./components/login";
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "./context/authContextProvider";
import {useContext} from "react";
import Loader from "./components/loader";

function App() {


    const {user,loading} = useContext(AuthContext)

    if(loading){
        return (
            <Loader />
        )
    }

    return (
        <div className="App">
            <Routes>
                {user && <Route path={"*"} element={<Chat/>}/>}
                {!user && <Route path={"*"} element={<Login/>}/>}
            </Routes>
        </div>
    );
}

export default App;
