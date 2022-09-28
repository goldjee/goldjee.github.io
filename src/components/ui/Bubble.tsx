import React, { FC, ReactNode } from 'react';
import { VStack } from '@chakra-ui/react';

interface Props {
    children: ReactNode;
}

const Bubble: FC<Props> = ({ children }) => {
    return (
        <VStack
            align="left"
            maxW="500pt"
            p={5}
            color="gray.800"
            bg="gray.100"
            borderTopRightRadius="2xl"
            // borderTopLeftRadius="2xl"
            borderBottomRightRadius="2xl"
            borderBottomLeftRadius="2xl"
            shadow="md"
        >
            {children}
        </VStack>
    );
};

export default Bubble;
