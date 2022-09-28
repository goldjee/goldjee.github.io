import React, { FC, ReactNode } from 'react';
import { Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Bubble from './ui/Bubble';
import PageLayout from './PageLayout';

const Skills: FC = () => {
    const bubbles: ReactNode[] = [
        <Bubble key="pm">
            <Heading>Product management</Heading>
            <UnorderedList>
                <ListItem>
                    Formation of an IT product development strategy
                </ListItem>
                <ListItem>
                    Setting goals and objectives, decomposition of complex goals
                    to smaller tasks
                </ListItem>
                <ListItem>Product development management</ListItem>
                <ListItem>Work coordination</ListItem>
            </UnorderedList>
        </Bubble>,
        <Bubble key="stakeholder-comms">
            <Heading>Communication with stakeholders</Heading>
            <UnorderedList>
                <ListItem>Stakeholder interview</ListItem>
                <ListItem>Data gathering and analysis</ListItem>
                <ListItem>
                    Formalisation of buisiness requirements to an IT system
                </ListItem>
                <ListItem>
                    Development and approval of project documentation (technical
                    specification, business process diagrams, software
                    architecture, user documentation and guides)
                </ListItem>
                <ListItem>Carrying out design acceptance tests</ListItem>
                <ListItem>
                    Presentation of finalized project or product results
                </ListItem>
            </UnorderedList>
        </Bubble>,
        <Bubble key="scrum">
            <Heading>Scrum</Heading>
            <Text>I know Scrum and practice it.</Text>
        </Bubble>,
        <Bubble key="hard">
            <Heading>Hard skills</Heading>
            <Text>
                I am familiar and use a variety of products and technologies at
                work and for hobbies. The complete list would be too long, so I
                will mention only key ones.
            </Text>
            <UnorderedList>
                <ListItem>
                    MS Office (Word, Excel, PowerPoint, Visio, Project)
                </ListItem>
                <ListItem>
                    Balsamiq Mockups, Diagrams.net (former Draw.io), Miro,
                    Figma, Adobe CS (Photoshop, Illustrator)
                </ListItem>
                <ListItem>
                    Atlassian products (Jira, Confluence, Trello)
                </ListItem>
                <ListItem>
                    Databases and BI systems (MS SQL, PostgreSQL, MS OLAP)
                </ListItem>
            </UnorderedList>
        </Bubble>,
    ];

    return <PageLayout bubbles={bubbles} />;
};

export default Skills;
