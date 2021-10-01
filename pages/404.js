import React, { Component } from 'react';
import Head from 'next/head';

export default class NotFound extends Component {
  render() {
    return (
      <div className="page notfound">
        <Head>
          <title>Page not found</title>
        </Head>

        <div className="rq-container rq-center">
          <span className="space" />
          <h1 className="rq-text-pink">
            <img src="/images/logo-colored.png" height={50} />
            <span style={{ position: 'relative', top: -5 }}>intimate</span>
          </h1>
          <span className="space" />
          <h3>Oops! Page not found or has been deleted.</h3>
          <span className="space-50" />
          <a className="rq-btn rq-pink rq-round" href="/">
            &larr; Back to Home
          </a>
        </div>
      </div>
    );
  }
}
