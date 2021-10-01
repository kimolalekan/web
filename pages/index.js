import React, { Component } from 'react';
import Head from 'next/head';
import PreloaderModal from '../components/PreloaderModal';

export default class Index extends Component {
  state = { modal: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        modal: true,
      });
    }, 2000);
  }

  render() {
    const { modal } = this.state;
    return (
      <div>
        <div className="page">
          <Head>
            <title>Intimate</title>
          </Head>

          <PreloaderModal hide={modal} />

          <div className="rq-top">
            <div className="" style={{ backgroundColor: 'rgba(255,240,245, 0.5)' }}>
              <div className="rq-container">
                <h1 className="rq-text-pink">
                  <img src="/images/logo-colored.png" height={50} />
                  <span style={{ position: 'absolute' }}>intimate</span>
                </h1>
              </div>
            </div>
          </div>
          <span className="space" />

          <div className="rq-container">
            <div className="rq-row">
              <div className="rq-col l7 s12">
                <span className="space-50" />
                <div className="entry rq-centers">
                  <h1>Build intimacy and love</h1>
                  <h3>
                    Find someone who enjoys the same <br className="desktop" />
                    activities and go on a date..
                  </h3>
                  <span className="space-50" />
                  <a
                    className="rq-btn rq-pink rq-round rq-xlarge"
                    href="https://play.google.com/store/apps/details?id=com.intimate.dating"
                    target="_blank"
                  >
                    For Android
                  </a>

                  <a
                    className="rq-btn rq-pink rq-round rq-xlarge"
                    href=""
                    style={{ marginLeft: 15 }}
                  >
                    For iPhone
                  </a>
                </div>
                <span className="space-50" />
              </div>
              <div className="rq-col l5 s12">
                <img src="/images/swiping.svg" width={'100%'} />
              </div>
            </div>
            <span className="space" />
          </div>

          <div className="" style={{ backgroundColor: '#fff', padding: '15px 10px' }}>
            <div className="entry rq-center">
              <span className="space-50" />
              <h1>Build intimacy</h1>
              <h3>Stop swiping, start dating</h3>
              <span className="space-50" />
            </div>

            <div className="rq-row">
              <div className="rq-col l4">&nbsp;</div>
              <div className="rq-col l4 s12">
                <img src="/images/connection.svg" width={'100%'} />
              </div>
              <div className="rq-col l4">&nbsp;</div>
            </div>
            <span className="space" />
          </div>
        </div>
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
    );
  }
}
