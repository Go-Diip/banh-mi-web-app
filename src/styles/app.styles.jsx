import styled, { createGlobalStyle, css } from "styled-components"

const snipcart = css`
  .snipcart * {
    font-family: ${({ theme }) => theme.fonts.primaryFont} !important;
  }

  .snipcart-cart__secondary-header {
    background-color: ${({ theme }) => theme.palette.primary.main} !important;

    .snipcart__icon--darker path {
      fill: white;
    }

    .snipcart-cart__secondary-header-title {
      color: white;
    }
  }

  .snipcart-cart-button,
  .snipcart__box--badge-highlight {
    background-color: ${({ theme }) => theme.palette.primary.main} !important;
    background-image: none !important;
  }

  .snipcart-cart-button--secondary {
    .snipcart__icon path {
      fill: white !important;
    }

    color: white !important;
  }

  .snipcart__icon--blue-light path,
  .snipcart__icon--blue-dark path {
    fill: ${({ theme }) => theme.palette.primary.main} !important;
  }

  .snipcart__actions--link,
  .snipcart-discount-box__submit {
    color: ${({ theme }) => theme.palette.primary.main} !important;
  }

  .snipcart-discount-box__form,
  .snipcart-input:focus-within { {
    border: 1px solid ${({ theme }) => theme.palette.primary.main} !important;
  }

    .snipcart-overwrite #snipcart-footer #snipcart-powered {
      display: none !important;
    }
`

const wordpress = css`
  // WORDPRESS CLASSES
  /* =WordPress Core
  -------------------------------------------------------------- */

  .alignnone {
    margin: 5px 20px 20px 0;
  }

  .aligncenter,
  div.aligncenter {
    display: block;
    margin: 5px auto 5px auto;
  }

  .alignright {
    float: right;
    margin: 5px 0 20px 20px;
  }

  .alignleft {
    float: left;
    margin: 5px 20px 20px 0;
  }

  a img.alignright {
    float: right;
    margin: 5px 0 20px 20px;
  }

  a img.alignnone {
    margin: 5px 20px 20px 0;
  }

  a img.alignleft {
    float: left;
    margin: 5px 20px 20px 0;
  }

  a img.aligncenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .wp-caption {
    background: #fff;
    border: 1px solid #f0f0f0;
    max-width: 96%; /* Image does not overflow the content area */
    padding: 5px 3px 10px;
    text-align: center;
  }

  .wp-caption.alignnone {
    margin: 5px 20px 20px 0;
  }

  .wp-caption.alignleft {
    margin: 5px 20px 20px 0;
  }

  .wp-caption.alignright {
    margin: 5px 0 20px 20px;
  }

  .wp-caption img {
    border: 0 none;
    height: auto;
    margin: 0;
    max-width: 98.5%;
    padding: 0;
    width: auto;
  }

  .wp-caption p.wp-caption-text {
    font-size: 11px;
    line-height: 17px;
    margin: 0;
    padding: 0 4px 5px;
  }

  /* Text meant only for screen readers. */

  .screen-reader-text {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important; /* Many screen reader and browser combinations announce broken words as they would appear visually. */
  }

  .screen-reader-text:focus {
    background-color: #eee;
    clip: auto !important;
    clip-path: none;
    color: #444;
    display: block;
    font-size: 1em;
    height: auto;
    left: 5px;
    line-height: normal;
    padding: 15px 23px 14px;
    text-decoration: none;
    top: 5px;
    width: auto;
    z-index: 100000;
    /* Above WP toolbar. */
  }
`

export const GlobalStyles = createGlobalStyle`
  img, svg {
    max-width: 100%;
  }

  .MuiTypography-caption {
    color: black !important;
  }

  .emphasis {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;

    ${({ theme }) => theme.breakpoints.up("md")} {
      font-size: 2.5rem;
    }
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin: 0;
  }

  .tl-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .Mui-disabled {
    opacity: 0.4;
  }

  .MuiPopover-root {
    .MuiInputLabel-root, .MuiSvgIcon-root {
      color: black
    }
  }

  .reservationsTable {
    table {
      .MuiCheckbox-root {
        min-width: 40px;
      }
    }
    .MuiCheckbox-root {
      .MuiSvgIcon-root {
        fill: rgba(0, 0, 0, 0.54);;
      }
    }
  }


  ${wordpress}
  ${snipcart}
`

export const LayoutTitle = styled.h2`
  background-color: yellow;
  color: black;
  font-size: 2.5rem;
  font-style: italic;
  text-align: center;
`

export const AppContainer = styled.main`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.navHeight}px;
  background-color: white;
`
