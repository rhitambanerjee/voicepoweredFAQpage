import React, {useState, useEffect, useRef } from 'react';
import {ChakraProvider,theme} from '@chakra-ui/react'
import { Navbar } from './Navbar';
import { Faq } from './Faq';
import alanBtn from "@alan-ai/alan-sdk-web";
import {scroller} from 'react-scroll';
export const App = () => {

const alanBtnInstance = useRef(null);
const [index, setIndex] = useState(null);
useEffect(() => {
  if (!alanBtnInstance.current) {
    alanBtnInstance.current = alanBtn({
      key: 'e3425b5ca2dd0851e2bd4b98eaafec992e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordion-item-${commandData.faqId}`,{
              duration:800,
              delay:0,
              smooth:'easeInOutQuart'
            })
            setIndex(commandData.faqId-1)
          }
        }
      });
    }
  },[]);
  return(
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Faq index={index} setIndex={setIndex}/>
    </ChakraProvider>
  );
};