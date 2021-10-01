import React, { Component } from 'react';
import Head from 'next/head';
import PreloaderModal from '../components/PreloaderModal';

export default class Contact extends Component {
  state = { modal: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ modal: true });
    }, 2000);
  }

  render() {
    const { modal } = this.state;
    return (
      <div className="page">
        <Head>
          <title>Contact Us - Intimate</title>
        </Head>
        <PreloaderModal hide={modal} />

        <div className="rq-container">
          <span className="space-50" />
          <h1 className="rq-text-pink">
            <img src="/images/logo-colored.png" height={50} />
            <span style={{ position: 'absolute' }}>intimate</span>
          </h1>

          <h3>Contact Us</h3>

          <a href="mailto:hello@intimatehq.com">Email: hello@intimatehq.com</a>
        </div>
        <div className="rq-bottom">
          <footer>
            <img src="/images/logo-colored.png" height={20} />
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
}
