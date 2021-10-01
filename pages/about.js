import React, { Component } from 'react';
import Head from 'next/head';
import PreloaderModal from '../components/PreloaderModal';

export default class About extends Component {
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
          <title>About - Intimate</title>
        </Head>
        <PreloaderModal hide={modal} />

        <div className="rq-container">
          <span className="space-50" />
          <h1 className="rq-text-pink">
            <img src="/images/logo-colored.png" height={50} />
            <span style={{ position: 'absolute' }}>intimate</span>
          </h1>

          <h3>About</h3>

          <p>
            Intimate is a social dating platform with focus on security, privacy and activities.
          </p>
          <p>Find someone you like, place, or an event, then go on a date.</p>
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
