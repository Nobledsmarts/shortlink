'use client'
import Nav from '@/components/Nav'
import { Box, Flex, HStack, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
      <HStack justifyContent={'space-between'} color={'aliceblue'} bg={'13889f'} minHeight={600}>
        <Flex flexDirection={'column'} flexBasis={'60%'} h={'600'} justifyContent={'flex-start'} alignItems={'center'} bg={''}>
          <Heading as={'h1'} fontSize={'5xl'} mt={'100px'}>Your Link Shortener</Heading>
          <Text width={'md'} p={'4'} textAlign={'center'}> 
            ShortLink is a custom short link personalization tool that enables you to target, engage and helps you drive more customers
          </Text>
        </Flex>
        <Flex>
          <Image width={500} height={500} src={'/img2.png'} alt='' />
        </Flex>
      </HStack>
    </main>
  )
}
