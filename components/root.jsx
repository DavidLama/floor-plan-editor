import React from 'react'
import Head from 'next/head'
import { provider } from 'react-ioc'

export default (Page) => {
  const Root = () => (
    <>
      <Head>
        <title>Floor Plan Editor</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap" rel="stylesheet"></link>
      </Head>

      {React.createElement(Page)}
      
      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
          background-color: #F3F7FA;
          color: #4A4A4A;
        }
      `}</style>
    </>
  )

  Root.getInitialProps = async ({ req }) => {
    return {
      init: true,
    };
  }

  return provider(
  )(Root);
}
