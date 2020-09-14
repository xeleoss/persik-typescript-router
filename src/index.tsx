import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import { PageEnum } from './enums/PageEnum';
import { Page, Router, RouterContext, VIEW_MAIN } from '@happysanta/router';
import { PanelEnum } from './enums/PanelEnum';
import { ConfigProvider } from '@vkontakte/vkui';

const routes = {
    [PageEnum.Main]: new Page(PanelEnum.Main, VIEW_MAIN),
    [PageEnum.Persik]: new Page(PanelEnum.Persik, VIEW_MAIN),
};
const router = new Router(routes);
router.start();

bridge.send('VKWebAppInit');

bridge.subscribe(({detail: {type, data}}: any) => {
    if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
    }
});

ReactDOM.render(<RouterContext.Provider value={router}>
    <ConfigProvider isWebView={true}>
        <App/>
    </ConfigProvider>
</RouterContext.Provider>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
    import('./eruda').then(({default: eruda}) => {}); //runtime download
}
