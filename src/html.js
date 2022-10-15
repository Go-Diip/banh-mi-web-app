import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  const isProduction = process.env.GATSBY_ACTIVE_ENV === "production"
  return (
    <html {...props.htmlAttributes} lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {isProduction && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-VQT0ZC5SWQ"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-VQT0ZC5SWQ');`,
              }}
            />
          </>
        )}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {isProduction && (
          <>
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NNNS44D"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
          </>
        )}
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
