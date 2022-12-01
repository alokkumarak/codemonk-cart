import React from 'react'
import '../css/footer.css'
import callIcon from '../icon/phone.png'

function Footer() {
    return (
      <div className="footer">
        <div className="footerT">
          <div className="footerTL">
            <div className="footerTL1">
              <div className="footerTL1_Title">Lorem</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy</div>
            </div>
            <div className="footerTL1">
              <div className="footerTL1_Title">Lorem</div>
              <div className="footerTL1_dummy">Dummy test</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy test</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy test</div>
            </div>
            <div className="footerTL1">
              <div className="footerTL1_Title">Lorem</div>
              <div className="footerTL1_dummy">Dummy test</div>
              <div className="footerTL1_dummy">Dummy test</div>
              <div className="footerTL1_dummy">Dummy test</div>
              <div className="footerTL1_dummy">Dummy test</div>
              <div className="footerTL1_dummy">Dummy test</div>
            </div>
            <div className="footerTL1">
              <div className="footerTL1_Title">Lorem</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy</div>
              <div className="footerTL1_dummy">Dummy</div>
            </div>
          </div>

          <div className="footerTR">
            <div className="footerTR_c">CALL US</div>
            <div className="footerTR_location">
              <div className="footerTR_locationL">
                <div className="footerTR_locationLT">Monday-Friday</div>
                <div className="footerTR_locationLB">8am to 9pm CST</div>
              </div>
              <div className="footerTR_locationL">
                <div className="footerTR_locationLT">Saturday & Sunday</div>
                <div className="footerTR_locationLB">10am to 6pm CST</div>
              </div>
            </div>
            <div className="footerTR_call">
                <img src={callIcon} alt="call" />
                1800-123-1234
            </div>
            <div className="footerTR_email">support.us@test.com</div>
          </div>
        </div>
        <div className="footerB">
            <div className="footerBT">Dummy | Dummy | Dummy | Dummy</div>
            <div className="footerBB">Lorem ipsum is simply dummy text of the printing and typesetting industry</div>
        </div>
      </div>
    );
}

export default Footer
