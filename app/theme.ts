import { extendTheme } from '@chakra-ui/react'
import { Goldman, Rubik, Oswald, Raleway, Fira_Sans_Condensed, Lexend, Montserrat } from 'next/font/google';

const oswald = Oswald({
    weight : '400',
    subsets : ['latin']
});

const montserrat = Montserrat({
    weight : '500',
    subsets : ['latin']
});

const raleway = Raleway({
    weight : '400',
    subsets : ['latin']
});
const goldman = Goldman({
    weight : '400',
    subsets : ['latin']
});
const rubik = Rubik({
    weight : '400',
    subsets : ['latin']
});
const lexend = Lexend({
    weight : '400',
    subsets : ['latin']
});
const fira_condensed = Fira_Sans_Condensed({
    weight : '400',
    subsets : ['latin']
})

const theme = extendTheme({
    transparent: 'transparent', 
    fonts: {
        rubik: rubik.style.fontFamily,
        raleway: raleway.style.fontFamily,
        goldman: goldman.style.fontFamily,
        oswald: oswald.style.fontFamily,
        fira_condensed: fira_condensed.style.fontFamily,
        lexend: lexend.style.fontFamily,
        montserrat: montserrat.style.fontFamily,
    },
    // brand: {

    // }
});

export default theme;