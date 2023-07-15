import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <HStack>
                <ListBox
                    defaultValue="Choose value"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: 'qwe' },
                        { value: '3', content: 'asd', disabled: true },
                        { value: '4', content: 'zxc' },
                    ]}
                    direction="bottom right"
                />
            </HStack>
        </Page>
    );
};

export default MainPage;
