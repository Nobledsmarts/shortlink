'use client'
import DottedLine from '@/components/DottedLine'
import Nav from '@/components/Nav'
import { Box, Flex, HStack, Heading, Text, Image as ChackraImage, Button} from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
      <HStack position={'relative'} justifyContent={'space-between'} color={'aliceblue'} bg={'#13889f'} minHeight={450}>
        <Flex px={'5rem'} flexDirection={'column'} gap={'1.5rem'} flexBasis={'60%'} h={'450'} justifyContent={'flex-start'} alignItems={'left'} bg={''}>
          <Heading 
            px={'0'} 
            bgClip={'text'} 
            color={'white'} 
            as={'h1'} 
            fontSize={'5xl'} 
            mt={'100px'} 
            fontFamily={'rubik'} 
            fontWeight={'700'} 
            bgGradient={'linear-gradient(to right, #121FCF 0%, #CF1512 100%)'}
            >
              The Shorter, The Better!
            </Heading>
          <Text fontSize={'xl'} fontFamily={'raleway'} width={'lg'}> 
            ShortLink is a custom short link personalization tool that enables you to target, engage and helps you drive more customers.
          </Text>

          <Box>
            <Button  py={'1.3rem'} px={'3rem'} color={'#000'} bg={'aliceblue'} borderRadius={'2rem'}> Get started </Button>
          </Box>
        </Flex>
        <Flex>
          <Image width={450} height={450} src={'/img2.png'} alt='' />
        </Flex>
        <Box borderRadius={'50%'} position={'absolute'} left={'-40px'} zIndex={1} top={'100px'} width={'100'} overflow={'hidden'} border={'0px'} py={'0px'} height={'100px'}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100">
            <path fill="#e50000" fillOpacity="1" d="M0,0L34.3,21.3C68.6,43,137,85,206,117.3C274.3,149,343,171,411,176C480,181,549,171,617,160C685.7,149,754,139,823,128C891.4,117,960,107,1029,112C1097.1,117,1166,139,1234,154.7C1302.9,171,1371,181,1406,186.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
            </path>
        </svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 1020">
          <path fill="#0099ff" fill-opacity="1" d="M0,0L34.3,21.3C68.6,43,137,85,206,117.3C274.3,149,343,171,411,176C480,181,549,171,617,160C685.7,149,754,139,823,128C891.4,117,960,107,1029,112C1097.1,117,1166,139,1234,154.7C1302.9,171,1371,181,1406,186.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
          </path>
      </svg> */}
          {/* <DottedLine/> */}
          <Image style={{zoom : 1}} color='#e50000'  src={'/26432.svg'} alt='' width={'100'} height={'100'}/>
        </Box>
        <Box  position={'absolute'} left={'0px'} zIndex={-1} bottom={'-50px'} border={'0px'} width={'100%'}  py={'0px'} height={'100px'}>
        
          <ChackraImage objectFit={'cover'} style={{zoom : 1}} color='#e50000'  src={'/wave2.svg'} alt='' width={'100%'} height={'250px'}/>
        </Box>
      </HStack>
      <HStack mt={'5rem'} justifyContent={'center'}>
        <Flex justifyContent={'center'}>
          <Heading px={'0'} bgClip={'text'} color={'cyan.900'} as={'h1'} fontSize={'5xl'} mt={'10px'} fontFamily={'rubik'} fontWeight={'500'} bgGradien={'linear-gradient(to right, #121FCF 0%, #CF1512 100%)'}>
            What would you like to create?
          </Heading>
        </Flex>
      </HStack>
    </main>
  )
}
