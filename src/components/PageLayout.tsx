import React, { FC, ReactNode } from 'react';
import { Avatar, Box, Flex, Spacer, VStack } from '@chakra-ui/react';
import Header from './Header';
import photo from '../assets/Daniel.jpg';
import background from '../assets/background.jpg';
import Footer from './Footer';

interface Props {
    bubbles: ReactNode[];
}

const PageLayout: FC<Props> = ({ bubbles }) => {
    return (
        <Flex
            pos="relative"
            align="left"
            justify="space-between"
            direction="column"
            overflow="hidden"
            w="100%"
            h="100%"
            minH="100vh"
            color="gray.100"
        >
            <Box
                pos="fixed"
                zIndex={-1}
                w="100%"
                h="100%"
                bgImage={background}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                // bgGradient="linear(to-t, blue.700, orange.300)"
            />
            <Header />
            <Flex align="flex-start" direction="row" w="100%" p={5}>
                <Avatar shadow="md" size={['md', 'lg', '2xl']} src={photo} />
                <VStack align="left" ml={5} spacing={5}>
                    {bubbles}
                </VStack>
            </Flex>
            <Spacer />
            <Footer />
        </Flex>
    );
};

export default PageLayout;
