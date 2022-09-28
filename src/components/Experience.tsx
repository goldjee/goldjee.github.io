import React, { FC, ReactNode } from 'react';
import { Heading, Link, Text } from '@chakra-ui/react';
import Bubble from './ui/Bubble';
import PageLayout from './PageLayout';

const Experience: FC = () => {
    const bubbles: ReactNode[] = [
        <Bubble key="2020">
            <Heading>Analytics practice leader, Product owner</Heading>
            <Text>Sberbank of Russia OJSC, Department of Technologies</Text>
            <Text>2020 - nowadays</Text>
            <Text>
                I am responsible for the development of{' '}
                <Link href="https://navplatform.ru" target="_blank">
                    Navigator Business Analytics Platform
                </Link>
                . The main goal is to make the components of this platform,
                highly custom in prior, reusable for any business applications
                in other companies. Me and my team are developing UX-oriented
                tools, which allow easy configuration of the platform.
            </Text>
            <Text>
                As a result, Navigator has grown up from a small inhouse project
                to a fully distributable commercial SaaS service.
            </Text>
        </Bubble>,
        <Bubble key="2019">
            <Heading>Analytics practice leader, Scrum Master</Heading>
            <Text>Sberbank of Russia OJSC, Department of Technologies</Text>
            <Text>2019 - 2020</Text>
            <Text>
                We were faced with a large and difficult task of a complete
                reboot of the product, so the team had to deal with a lot of
                buisiness requirements shortly. Our management decided to fill
                that HR gap with quite a few newcomers.
            </Text>
            <Text>
                I suggested to migrate from vanilla Scrum to LeSS framework and,
                as the decision was finally made,{' '}
                <em>lead the transformation as a Scrum Master</em>. We have
                rapidly grew from about 10 to 50 people and the transition went
                smoothly.
            </Text>
            <Text>
                As new analysts were joining the product, I have been
                onboarding, mentoring and traininig them. As a result,{' '}
                <em>I have built up a solid team of analysts</em> who are able
                to solve even the hardest business tasks.
            </Text>
            <Text>
                We have <em>won The Innovators award</em> carried out by
                prestigious British magazine &quot;Global Finance&quot; in 2018
                and 2019.
            </Text>
        </Bubble>,
        <Bubble key="2016">
            <Heading>Lead analyst</Heading>
            <Text>Sberbank of Russia OJSC, Department of Technologies</Text>
            <Text>2016 - 2018</Text>
            <Text>
                I took part in development of various financial business
                intelligence systems, including Sberbank Group and Ecosystem
                data visualization and analytical report engine.
            </Text>
            <Text>
                I was working on business and technical requirements, preparing
                documentation, mining and compiling data, designing data flows
                and composing dashboards.
            </Text>
        </Bubble>,
        <Bubble key="2014">
            <Heading>IT and business analyst consultant</Heading>
            <Text>
                JSC &quot;Prognoz&quot;, Department of Bank and Business
                Analysis
            </Text>
            <Text>2014 - 2016</Text>
            <Text>
                Starting from early 2014, I have taken part in several
                successful projects as an IT and business analyst consultant.
            </Text>
        </Bubble>,
    ];

    return <PageLayout bubbles={bubbles} />;
};

export default Experience;
