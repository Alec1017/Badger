import  { createGlobalStyle } from 'styled-components'


export const colors = {
    white: '#FFFFFF',
    black: '#000000',

    // blues
    foam: '#C5FFFD',
    blizzard: '#88D9E6',

    // pinks
    charm: '#DB7093',

    // grays
    athens: '#edeef2',
    ghost: '#ced0d9',
    smoke: '#F0F0F0',
    gainsboro: '#DCDCDC',
    lightGray: '#D3D3D3',
    corduroy: '#526760',
    mineral: '#374B4A',

    // other
    tango: '#F3851E',
    emerald: '#71b086',
    gold: '#FFE797',
    danger: '#FD4040'
}

export const theme = {
    // Buttons
    buttonPrimary: colors.charm,
    buttonSecondary: colors.white,

    // Colors
    colors: colors
}

export const ResetStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        margin: 0;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`

export const ThemedGlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;

        font-family: 'Ubuntu', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`