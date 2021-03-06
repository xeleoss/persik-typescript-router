import React from 'react';
import { IOS, platform } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import persik from '../img/persik.png';
import './Persik.css';
import { useRouter } from '@happysanta/router';

const osName = platform();

const Persik = (props: any) => {
    const router = useRouter();
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={() => router.popPage()}>
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Persik
            </PanelHeader>
            <img className="Persik" src={persik} alt="Persik The Cat"/>
        </Panel>
    );
};
export default Persik;
