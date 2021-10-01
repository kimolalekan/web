import React from 'react';
import Head from 'next/head';

export default function Terms() {
  return (
    <div className="page">
      <Head>
        <title>Terms & conditions - Intimate</title>
      </Head>

      <div className="rq-container">
        <span className="space-50" />
        <h1 className="rq-text-pink">
          <img src="/images/logo-colored.png" height={50} />
          <span style={{ position: 'absolute' }}>intimate</span>
        </h1>

        <h3>Terms & Conditions</h3>
        <p>
          These Website Standard Terms and Conditions written on this webpage shall manage your use
          of our website, application and desktop app, Intimatehq.com.
          <br />
          These Terms will be applied fully and affect to your use of this Website. By using this
          Website, you agreed to accept all terms and conditions written in here. You must not use
          Intimatehq.com if you disagree with any of these Website Standard Terms and Conditions.
        </p>
        <p>
          <br />
          (A) a disclaimer of liability;
          <br />
          (B) terms and conditions governing the use of this website;
          <br />
          (C) a license for our free legal documents; and
          <br />
          (D) general and interpretive provisions.
        </p>
        <p>
          <br />
          <b>Intellectual Property Rights</b>
          <br />
          Other than the content you own, under these Terms, Intimatehq.com and/or its licensors own
          all the intellectual property rights and materials contained in this Website.
          <br />
          You are granted limited license only for purposes of viewing the material contained on
          this Website.
        </p>
        <p>
          <b>Age</b>
          <br />
          You must be 18 years or older to use Intimate application or website.
          <br />
        </p>
        <p>
          <br />
          <b>Restrictions</b>
          <br />
          You are specifically restricted from all of the following:
          <br />
          publishing any Website material in any other media;
          <br />
          selling, sublicensing and/or otherwise commercializing any Website material;
          <br />
          publicly performing and/or showing any Website material;
          <br />
          using Intimatehq.com in any way that is or may be damaging to this Website;
          <br />
          using Intimatehq.com in any way that impacts user access to this Website;
          <br />
          using Initimatehq.com contrary to applicable laws and regulations, or in any way may cause
          harm to the Website, or to any person or business entity;
          <br />
          engaging in any data mining, data harvesting, data extracting or any other similar
          activity in relation to this Website;
          <br />
          Certain areas of Intimatehq.com are restricted from being access by you and Intimatehq.com
          may further restrict access by you to any areas of this Website, at any time, in absolute
          discretion.{' '}
        </p>
        <p>
          <br />
          <b>Your Content</b>
          <br />
          In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video
          text, images or other material you choose to display on this Website. By displaying Your
          Content, you grant Intimatehq.com a non-exclusive, worldwide irrevocable, sub licensable
          license to use, reproduce, adapt, publish, translate and distribute it in any and all
          media.
        </p>
        <p>
          <br />
          Your Content must be your own and must not be invading any third-party’s rights.
          Intimatehq.com reserves the right to remove any of Your Content from Intimatehq.com at any
          time without notice.
        </p>
        <p>
          <br />
          <b>No warranties</b>
          <br />
          Intimatehq.com is provided “as is,” with all faults, and Intimatehq.com express no
          representations or warranties, of any kind related to Intimatehq.com or the materials
          contained on this Website. Also, nothing contained on Intimatehq.com shall be interpreted
          as advising you.
        </p>
        <p>
          <br />
          <b>Limitation of liability</b>
          <br />
          In no event shall Intimatehq.com, nor any of its officers, directors and employees, shall
          be held liable for anything arising out of or in any way connected with your use of
          Intimatehq.com; websites, and applications whether such liability is under contract.&nbsp;
          Intimatehq.com, including its officers, directors and employees shall not be held liable
          for any indirect, consequential or special liability arising out of or in any way related
          to your use of this Website.
        </p>
        <p>
          <br />
          <b>Indemnification</b>
          <br />
          You hereby indemnify to the fullest extent Intimatehq.com from and against any and/or all
          liabilities, costs, demands, causes of action, damages and expenses arising in any way
          related to your breach of any of the provisions of these Terms.
        </p>
        <p>
          <br />
          <b>Severability</b>
          <br />
          If any provision of these Terms is found to be invalid under any applicable law, such
          provisions shall be deleted without affecting the remaining provisions herein.
        </p>
        <p>
          <br />
          <b>Variation of Terms</b>
          <br />
          Intimatehq.com is permitted to revise these Terms at any time as it sees fit, and by using
          Intimatehq.com you are expected to review these Terms on a regular basis.
          <br />
        </p>
        <p>
          <b>Assignment</b>
          <br />
          Intimatehq.com is allowed to assign, transfer, and subcontract its rights and/or
          obligations under these Terms without any notification. However, you are not allowed to
          assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
          <br />
        </p>
        <p>
          <b>Entire Agreement</b>
          <br />
          These Terms constitute the entire agreement between Intimatehq.com and you in relation to
          your use of this Website, and supersede all prior agreements and understandings.
          <br />
        </p>
        <p>
          <b>Governing Law &amp; Jurisdiction</b>
          <br />
          These Terms will be governed by and interpreted in accordance with the laws of the State
          of Country, and you submit to the non-exclusive jurisdiction of the state and federal
          courts located in Country for the resolution of any disputes.
          <br />
          Contact: hello@intimatehq.com
          <br />
          <br />
        </p>
      </div>
      <div className="rq-bottoms">
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
