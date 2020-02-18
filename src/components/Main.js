import React from 'react';
import {Link} from 'react-router-dom';

import CardAdvantage from './CardAdvantage';
import CardPrice from './CardPrice';
import Stats from './Stats.js';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       page: <Link to='/'>Main page</Link>
    }
  }
  render () {
  const planDescr = ['Push Notifications', 'Data Transfer', 'SQL Database', 'Search & SEO Analytics', '24/7 Phone Support', '2 months technical support', '2+ profitable keyword'];
  
  return (
    <div>
      <header className='header'>
        <div className="container"> 
          <h1>AppCo</h1>
          <div className="header_content">
            <div className='header_text'>
              <h3><span>Brainstorming</span> for desired perfect Usability </h3>
              <div>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</div>
              <Link to='/stats'  >
                <input type='button' name='View Stats' value='View Stats'/>
              </Link>
            </div>
            <img src={require('../assets/img/iphone.png')} alt='iPhone'/>
          </div>
        </div>
      </header>
      
      <section className="section1">
        <div className="container">
          <div className='section1_text'>
            <h2>Why <span>small business owners love</span> AppCo?</h2>
            <h4> Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</h4>
          </div>
          <div className="advantages">
            <CardAdvantage
              title='Clean Design'
              img={require('../assets/img/icon_design.png')}
              descr='Increase sales by showing true dynamics of your website.'
              />
            <CardAdvantage
              title='Secure Data'
              img={require('../assets/img/icon_data.png')}
              descr='Build your online store’s trust using Social Proof & Urgency.'
              />
            <CardAdvantage
              title='Retina Ready'
              img={require('../assets/img/icon_retina.png')}
              descr='Realize importance of social proof in customer’s purchase decision.'
              />
          </div>
        </div>
       
      </section>

      <section className="section2">
        <div className="container">
          <div className="section2_content">
            <h3>Start Managing your apps business, more faster</h3>
            <div>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</div>
            <input type='button' name='Learn More' value='Learn More'/>
          </div>
          <img src={require('../assets/img/macbook.png')} alt="MacBook"/>
          {/* <picture>
            <source srcSet={require('../assets/img/macbook.png')} media="(min-width: 920px)"/>
            <img src={require('../assets/img/macbook.png')} alt="MacBook" />
          </picture> */}
        </div>
      </section>

      <section className="section3">
        <div className="container">
          <h2><span>Afforadble Pricing and Packages</span> choose your best one</h2>
          <h6>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</h6>
          <div className="price">
            <CardPrice
              title='Basic'
              img={require('../assets/img/price_basic.png')}
              price='$29'
              descr={planDescr}
              />
            <CardPrice
              title='Standard'
              img={require('../assets/img/price_standart.png')}
              price='$149'
              descr={planDescr}
              />
            <CardPrice
              title='Unlimited'
              img={require('../assets/img/price_unlim.png')}
              price='$39'
              descr={planDescr}
              />
          </div>
          <div className='contact'>If you need custom services or Need more? 
            <a href='#'> Contact us</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className='footer_input'>
            <input className='input_text' type='text' placeholder='Enter your email'/>
            <input className='input_btn' type='submit' value='Subscribe'/> 
          </div>
          <div className='footer_content'>
            <div>AppCo</div>
            <div>All rights reserved by ThemeTags</div>
            <div>Copyrights © 2019.</div>
          </div>
        </div>
      </footer>

        
    </div>
  );
}
}