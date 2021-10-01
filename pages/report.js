import React from 'react';
import Head from 'next/head';

export default function Report() {
  return (
    <div className="page">
      <Head>
        <title>Report issue - Intimate</title>
      </Head>

      <div className="rq-container">
        <span className="space-50" />
        <h1 className="rq-text-pink">
          <img src="/images/logo-colored.png" height={50} />
          <span style={{ position: 'absolute' }}>intimate</span>
        </h1>
        <h3>How to report issue</h3>

        <p>
          Choose a title
          <ol>
            <li>App crashing</li>
            <li>Stalking user </li>
            <li>Payment issue</li>
            <li>Incorrect data</li>
          </ol>
        </p>

        <p>
          Describe the issue. Take screenshots if needed. Please send email to hello@intimatehq.com.
        </p>
      </div>
      <div className="rq-bottom">
        <footer>
          <img src={'/images/logo-colored.png'} height={20} />
          <span>Intimate &copy; {new Date().getFullYear()} All Rights Reserved</span>
          <span className="footer-link">
            <a href="/about">About</a>
            <a href="/contact">Contact us</a>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </span>
        </footer>
      </div>
    </div>
  );
}
