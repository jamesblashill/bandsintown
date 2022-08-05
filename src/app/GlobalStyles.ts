import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --white0: #fff;
        --grey0: #ededed;
        --grey1: #CDCDCD;
        --header-background: var(--white0);
        --header-border-color: var(--grey1);
        --page-background: var(--grey0);
    }

    body {
        font-family: "Syne", "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-variant-numeric: lining-nums;
        font-feature-settings: 'lnum' on;        
        background-color: var(--page-background);
    }

    h1 {
        font-size: 26px;
        font-weight: bold;        
    }
`;
