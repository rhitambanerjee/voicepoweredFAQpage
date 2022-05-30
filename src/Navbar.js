import React from 'react';
import {Box,Flex,Heading,Spacer} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';

export const Navbar = () => {
  return (
    <Flex aligh='center' boxShadow="base" p="2" mb="2">
      <Box p="2">
         <Heading size="lg">E-commerce Support</Heading>
      </Box>
      <Spacer/>
      <Box>
         <ColorModeSwitcher/>
      </Box>
    </Flex>
  );
};
