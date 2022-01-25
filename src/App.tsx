import React from 'react';
import c from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import News from "./components/MainWindow/News/News";
import Music from "./components/MainWindow/Music/Music";
import Friends from "./components/MainWindow/Friends/Friends";
import Settings from "./components/MainWindow/Settings/Settings";
import {MessagesContainer} from "./components/MainWindow/Messages/MessagesContainer";
import {UsersContainer} from "./components/MainWindow/Users/UsersContainer";
import {ProfileContainer} from "./components/MainWindow/Profile/ProfileContaeiner";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <main className={c.appContent}>
            <HeaderContainer/>
            <Navbar/>
            <div className={c.appContentWindow}>
                <Routes>
                    <Route path="/profile/" element={<ProfileContainer/>}>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>

                    <Route path="/messages/" element={<MessagesContainer/>}>
                        <Route path=":userId" element={<MessagesContainer/>}/>
                    </Route>

                    <Route path="/users/*" element={<UsersContainer/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                    <Route path="/friends/*" element={<Friends/>}/>
                </Routes>
            </div>
            <Footer/>
        </main>
    );
}

export default App;
