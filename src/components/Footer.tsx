import { Container, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <Container
            as="footer"
            // pos="fixed"
            bottom={0}
            w="100%"
            minW="100%"
            p={5}
            bg="rgba(0, 0, 0, 0.5)"
            backdropFilter="saturate(180%) blur(5px)"
            filter="auto"
        >
            <Text>
                Created with ❤️ and attention to the details. As always.
            </Text>
        </Container>
    );
};

export default Footer;
