import '../public/styles/app.scss';

import React from 'react';
import App from 'next/app';

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo-colored.png" />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default CustomApp;
