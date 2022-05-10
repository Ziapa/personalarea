import React, {useState} from 'react';
import './App.module.scss';
import s from "./App.module.scss"
import {IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";
import {Route, Routes} from 'react-router-dom';
import {Profile} from "./commponents/Profile/Profile";
import {InfoPanel} from './commponents/InfoPanel/InfoPanel';
import {NavBar} from "./commponents/NavBar/NevBar";


function App() {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const styleCollapsed = collapsed ? {width: "0px"} : {minWidth: "221px"}
    const collapsedBTN = collapsed ? <IoChevronForwardOutline/> : <IoChevronBackOutline/>

    return (
        <div className={s.app}>
            <div className={s.navBar}>

                <div className={s.navBar_content}
                     style={styleCollapsed}>

                    <NavBar/>

                    <div>
                        Темная тема
                    </div>
                </div>

                <div className={s.navBar_button} onClick={() => setCollapsed(!collapsed)}>
                    {collapsedBTN}
                </div>


            </div>

            <div className={s.content}>
                <Routes>
                    <Route path="Profile" element={<Profile/>}/>
                    <Route path="InfoPanel" element={<InfoPanel/>}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
