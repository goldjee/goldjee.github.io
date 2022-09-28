import React, { FC, ReactNode } from 'react';
import { Heading, Link, Text } from '@chakra-ui/react';
import Bubble from './ui/Bubble';
import PageLayout from './PageLayout';
import PSMI from '../assets/PSMI.pdf';

const Education: FC = () => {
    const bubbles: ReactNode[] = [
        <Bubble key="university">
            <Heading>MSU</Heading>
            <Text>2008-2014</Text>
            <Text>
                I&apos;ve graduated from Moscow State University &lsquo;M. V.
                Lomonosov&rsquo; and hold a{' '}
                <em>degree of a specialist in physics</em>, department of Atomic
                physics, plasma physics and microelectronics.
            </Text>
        </Bubble>,
        <Bubble key="scrum">
            <Heading>Scrum.org</Heading>
            <Text>2018</Text>
            <Text>
                I am a <em>professional Scrum Master</em> and hold a{' '}
                <Link href={PSMI} target="_blank">
                    certificate
                </Link>{' '}
                from Scrum.org.
            </Text>
        </Bubble>,
        <Bubble key="at-work">
            <Heading>Scheduled education at work</Heading>
            <Text>
                Time to time I took employee-sponsored courses in various
                fields, like{' '}
                <em>banking, compliance, agile practices, management</em>.
            </Text>
        </Bubble>,
        <Bubble key="self-edu">
            <Heading>Self Education</Heading>
            <Text>
                I am continiously improving my soft and hard skills because
                nowadays knowledge inflates rapidly.
            </Text>
        </Bubble>,
    ];

    return <PageLayout bubbles={bubbles} />;
};

export default Education;
