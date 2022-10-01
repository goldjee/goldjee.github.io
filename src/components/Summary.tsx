import React, { FC, ReactNode } from 'react';
import moment from 'moment';
import { Heading, HStack, Icon, Link, Text } from '@chakra-ui/react';
import PageLayout from './PageLayout';
import Bubble from './ui/Bubble';
import { BsTelegram } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

const careerStart = moment().year(2014).month(5).day(28);

const Summary: FC = () => {
    const bubbles: ReactNode[] = [
        <Bubble key="summary">
            <Heading>Hi! My name is Daniel</Heading>
            <Text>
                and I am an IT specialist with over{' '}
                <em>{moment().diff(careerStart, 'years')} years</em> of
                experience
            </Text>
        </Bubble>,
        <Bubble key="problem-solving">
            <Text>
                Love solving practice tasks. For me, every new challenge is an
                opportunity to know more. This mental attitude let me acquire{' '}
                <em>wide knowledge in IT</em>.
            </Text>
        </Bubble>,
        <Bubble key="soft">
            <Text>
                I believe that people, relations and human values are the key to
                successful business. Guided by this understanding, I{' '}
                <em>lead my team</em> and together we bring up successful
                products to life.
            </Text>
        </Bubble>,
        <Bubble key="contacts">
            <Text>Feel free to contact me:</Text>
            <Link href="https://t.me/GoldJee" target="_blank">
                <HStack spacing={2}>
                    <Icon as={BsTelegram} />
                    <Text>GoldJee</Text>
                </HStack>
            </Link>
            <HStack spacing={2}>
                <Icon as={FaDiscord} />
                <Text>Ins#1391</Text>
            </HStack>
        </Bubble>,
    ];

    return <PageLayout bubbles={bubbles} />;
};

export default Summary;
