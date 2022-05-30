import React from 'react';
import {
   Box,Text,Flex,Heading,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon
} from '@chakra-ui/react';
import FAQ from './faq.json';
export const Faq = ({index,setIndex}) => {
  return (
      <Flex direction="column" p="4">
         <Box mb="8">
            <Heading size="large">Frequently Asked Questions Of Customers</Heading>
         </Box>
         <Accordion allowToggle index={index}>
            {FAQ.map(faq=>(
               <AccordionItem key={faq.id} name={`accordion-item-${faq.id}`}>
                  <AccordionButton onClick={()=>setIndex(faq.id-1)}>
                  <Box Flex="1" textAlign="left">
                     <Text fontWeight="semibold">
                        {faq.Question}
                     </Text>
                  </Box>
                  </AccordionButton>
                  <AccordionPanel pb="4">
                     {faq.Answer}
                  </AccordionPanel>
               </AccordionItem>
            ))}
         </Accordion>
      </Flex>
  )
}  
