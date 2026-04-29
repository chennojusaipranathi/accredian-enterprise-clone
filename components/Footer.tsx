export default function FooterSection(){
    return(
        <div className="main">
            <div className="Footer" id="Footer">
                <div className="icons">
                    <div>
                        <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"></img>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/accredianlearn"><i className="fa-brands fa-square-facebook"></i></a>
                        <a href="https://www.linkedin.com/company/accredianedu/"><i className="fa-brands fa-linkedin"></i></a>
                        <a href=""><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/accredian_edu"><i className="fa-brands fa-instagram"></i></a>
                    </div>

                </div>
                <div>
                    <button>Enquire Now</button>
                    <p>Speak with our Advisor</p>
                </div>
                </div>
                <hr></hr>
                <div className="footer-links">
                       <div className="left">
                          <h3>Accredian</h3>
                          <a href="#">About</a>
                          <a href="#">Blog</a>
                          <a href="#">Why Accredian</a>
                        </div>

                         <div className="right">
                               <h3>Contact Us</h3>
                               <p>Email us: <span className="specialWord">enterprise@accredian.com</span></p>
                               <p>Office Address: 4th Floor, 250, Phase IV...</p>
                        </div>
                </div>

                  <div className="copyright">
                        © 2026 Accredian All Rights Reserved
                   </div>
         </div>

    )
}