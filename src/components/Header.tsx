import React, { FC } from 'react';
import { Flex, HStack, Link, Spacer } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';

const Header: FC = () => {
    return (
        <Flex
            as="nav"
            pos="relative"
            zIndex={100}
            align="center"
            justify="space-between"
            wrap="wrap"
            direction="row"
            w="100%"
            h="4em"
            px={5}
            bg="rgba(0, 0, 0, 0.5)"
            backdropFilter="saturate(180%) blur(5px)"
            filter="auto"
        >
            <HStack spacing={5}>
                <Link as={RouterNavLink} to="/">
                    Summary
                </Link>
                <Link as={RouterNavLink} to="/experience">
                    Experience
                </Link>
                <Link as={RouterNavLink} to="/skills">
                    Skills
                </Link>
                <Link as={RouterNavLink} to="/education">
                    Education
                </Link>
            </HStack>
            <Spacer />
        </Flex>
    );
};

export default Header;
