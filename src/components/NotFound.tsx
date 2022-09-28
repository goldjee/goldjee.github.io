import React, { FC, ReactNode } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import Bubble from './ui/Bubble';
import PageLayout from './PageLayout';

const NotFound: FC = () => {
    const bubbles: ReactNode[] = [
        <Bubble key="404">
            <Heading>404</Heading>
            <Text>Ask me another question.</Text>
        </Bubble>,
    ];

    return <PageLayout bubbles={bubbles} />;
};

export default NotFound;
