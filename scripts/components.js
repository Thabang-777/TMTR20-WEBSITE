class Header extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
    <header>
      <nav class="header">
          <div class="logo-div">
            <a href="index.html">
              <img width="83px" height="default" class="logo-image" src="images/tmtr20-logo-lightgrey.png" alt="images/tmtr20-logo-lightgrey.png">
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
        </nav>
    </header>
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
    <footer class="footer">
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
            <a class="contact-link" href="tel:+27 (65) 085-5004">
              +27 (65) 085-5004 
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
              <a target="_blank" href="https://www.instagram.com/tmtr20_/">
                <button class="icon-buttons">
                  <img width="100%" height="70%" class="connect-images" src="images/iconography/instagram-logo.png"
                  alt="images/iconography/instagram-logo.png"> 
                </button>
              </a>
            </div>
            <div>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=61573764462367">
                <button class="icon-buttons">
                  <img width="100%" height="70%" class="connect-images" src="images/iconography/facebook.png"
                  alt="images/iconography/facebook.png"> 
                </button>
              </a>
            </div>
            <div>
              <a target="_blank" href="https://x.com/Tmtr20Social" target="_blank">
                <button class="icon-buttons">
                  <img width="100%" height="70%" class="connect-images" src="images/iconography/twitter.png"
                  alt="images/iconography/twitter.png"> 
                </button>
              </a>
            </div>
            <div>
              <a target="_blank" href="https://www.youtube.com/@TMTR20"> 
                <button class="icon-buttons">
                  <img width="100%" height="70%" class="connect-images" src="images/iconography/youtube.png" 
                  alt="images/iconography/youtube.png"> 
                </button>
              </a>
            </div>
            <div> 
              <a target="_blank" href="https://chat.whatsapp.com/EybaoDuxFLiCIkjGF20CCM">
                <button class="icon-buttons">
                  <img width="100%" height="70%" class="connect-images" src="images/iconography/whatsapp.png"
                  alt="images/iconography/whatsapp.png"> 
                </button>
              </a>
            </div>
            <div>
              <button class="icon-buttons">
                <img width="100%" height="70%"  class="connect-images" src="images/iconography/blog.png"
                alt="images/iconography/blog.png"> 
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="services-section quicklinks-section">
        <p class="footer-headings">
          Services:
        </p>
        <div class="links-div">
          <a class="links" href="about.html">Website Development</a>
          <a class="links" href="vision.html">Software Development</a>
          <a class="links" href="leadership.html">Real Estate Solutions</a>
        </div>
      </div>
    </footer>
    `
  };
};
customElements.define("footer-component", Footer);

// add leadership section back to the header
// <a href="leadership.html"> 
// <button class="nav-button">Leadership</button>
// </a>