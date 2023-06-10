'use client'
import React from 'react'
import NavLink from './NavLink'
import Logo from './Logo'
// import Button from './Button'
import { Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
// import Button


const links1 = [
    {
        text : 'Features',
        href : ''
    },
    {
        text : 'Developers',
        href : ''
    },
    {
        text : 'About',
        href : ''
    },
    {
        text : 'Pricing',
        href : ''
    },
];

const Nav = () => {
    

  return (
    <Flex bg={'aliceblue'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} p={'1rem'}>
        <Logo />

        <Flex flexDirection={'row'} alignItems={'center'} gap={'1rem'}>
            {
                links1.map(link => <NavLink to={link.href} text={link.text} />)
            }
        </Flex>

        <Flex flexDirection={'row'} alignItems={'center'} gap={'1rem'}>
            <NavLink to={'login'} text={'login'} />
            <Button colorScheme={'#d6850c'}> register </Button>
        </Flex>
    </Flex>
  )
}

export default Nav