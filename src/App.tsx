import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Persik from './panels/Persik';
import { Page, Router, useLocation, VIEW_MAIN } from '@happysanta/router';
import { PageEnum } from './enums/PageEnum';
import { PanelEnum } from './enums/PanelEnum';



const App = () => {
	const location = useLocation();

    return (
        <View activePanel={location.getViewActivePanel(VIEW_MAIN)}>
            <Home id={PanelEnum.Main}/>
            <Persik id={PanelEnum.Persik}/>
        </View>
    );
};

export default App;

