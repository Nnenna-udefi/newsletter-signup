import React, { Component } from 'react';
import '../App.css';
import illustrationMobile from '../images/illustration-sign-up-mobile.svg';
import illustrationDesktop from '../images/illustration-sign-up-desktop.svg';
import listIcon from '../images/icon-list.svg';
import Form from './form';

class Main extends Component {

  render() {
    const { subscribed } = this.props;
    if (!subscribed) {
    return (
      <div className='container' role='main'>
            <div className='container-main'>
            <img src={illustrationMobile} alt='hero-img' className='mobile-img' />
            <img src={illustrationDesktop} alt='hero-img' className='desktop-img' />

            <div className='main-body'>
              <h1 className='main-heading'>Stay updated!</h1>
              <p className='main-text'>Join 60,000+ product managers receiving monthly updates on:</p>

              <ul>
                <li className='list'>
                  <img src={listIcon} alt='list-style' /> Product discovery and building what matters
                </li>
                <li className='list'>
                  <img src={listIcon} alt='list-style' /> Measuring to ensure updates are a success
                </li>
                <li className='list'>
                  <img src={listIcon} alt='list-style' /> And much more!
                </li>
              </ul>

              <Form />
            </div>
            </div>
      </div>
    );
    }
    return null;
  }
}

export default Main;
