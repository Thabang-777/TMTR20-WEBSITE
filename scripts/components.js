class Header extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
          <div class="header">
      <div class="logo-div">
        <a href="index.html">
          <img class="logo-image" src="images/tmtr20-logo-lightgrey.png">
        </a>
      </div>

      <div class="navigation"> 
        <a href="index.html">
          <button class="nav-button">Home</button>
        </a>
        <a href="about.html">
          <button class="nav-button">About us</button>
        </a>
        <a href="vision.html">
          <button class="nav-button">Our Vision</button>
        </a>
        <a href="news.html">
          <button class="nav-button js-news-button">News</button>
        </a>
      </div>

      <div>
        <a href="contact.html">
          <button class="contact-button">
            Contact us
          </button>
        </a>
      </div>
    </div>
    `;
  };
};
customElements.define("header-component", Header);

const template = document.createElement("template");
template.innerHTML = 
` 
    <div class="hero-section">
      <div class="hero-section-image-div">
        <slot name="background-image"></slot>
      </div>

      <slot name="header-component"></slot>
   
      <slot name="hero-text"></slot>
    </div>

    <div class="hero-section">


    <div>
    `;
class Hero extends HTMLElement {
  constructor(){
    super()
    const shadow = this.attachShadow({ mode : open})
    shadow.append(template.content.cloneNode(true));
  }
};
customElements.define("hero-section", Hero);

class Footer extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
          <div class="footer">
      <div class="quicklinks-section">
        <p class="footer-headings">Quick links:</p>
        <div class="links-div">
          <a class="links" href="about.html">About us</a>
          <a class="links" href="vision.html">Our vision</a>
          <a class="links" href="leadership.html">Leadership</a>
          <a class="links" href="news.html">News</a>
          <a class="links" href="contact.html">Contact</a>
        </div>
      </div>

      <div class="contact-section">
        <div>
          <p class="footer-headings">Contact details:</p>
        </div>
        <div>
          <p>
            Contact us at: 
            <a class="contact-link" href="tel:+27 (71) 691-5521">
              +27 (71) 691-5521 
            </a>
          </p>
        </div>
        <div>
          <p>
            Email us at: 
            <a target="_blank" class="contact-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=info@tmtr20.com">
              info@tmtr20.com
            </a>
          </p>
        </div>

        <div class="connect-section">
          <div>
            
          </div>
          <p class="footer-headings">Connect with us:</p>
          <div class="icon-grid">
            <div>
              <a href="https://www.instagram.com/tmtr_20/">
                <button class="icon-buttons">
                  <img class="connect-images" src="images/iconography/instagram-logo.png"> 
                </button>
              </a>
            </div>
            <div>
              <button class="icon-buttons">
                <img class="connect-images" src="images/iconography/facebook.png"> 
              </button>
            </div>
            <div>
              <a href="https://x.com/Tmtr20Social" target="_blank">
                <button class="icon-buttons">
                  <img class="connect-images" src="images/iconography/twitter.png"> 
                </button>
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/@TMTR.20"> 
                <button class="icon-buttons">
                  <img class="connect-images" src="images/iconography/youtube.png"> 
                </button>
              </a>
            </div>
            <div> 
              <button class="icon-buttons">
                <img class="connect-images" src="images/iconography/whatsapp.png"> 
              </button>
            </div>
            <div>
              <button class="icon-buttons">
                <img class="connect-images" src="images/iconography/blog.png"> 
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="services-section">
        <p class="footer-headings">
          Services:
        </p>
      </div>
    </div>
    `
  };
};
customElements.define("footer-component", Footer);

// add leadership section back to the header
// <a href="leadership.html"> 
// <button class="nav-button">Leadership</button>
// </a>