import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Button, Div, Group } from '@vkontakte/vkui';
import { useRouter } from '@happysanta/router';
import { PageEnum } from '../enums/PageEnum';

const Home = (props: any) => {
    const router = useRouter();
    return (
        <Panel id={props.id}>
            <PanelHeader>Example</PanelHeader>
            <Group title="Navigation Example">
                <Div>
                    <Button size="xl" level="2" onClick={() => router.pushPage(PageEnum.Persik)}>
                        Show me the Persik, please
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};

export default Home;
