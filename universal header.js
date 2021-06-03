class MyHeader extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="header1">
        <h4>Call us : <a href="tel:+919712926846">+91-9712926846</a></h4>
        <h4>Follo Us : 
          <a href="https://www.linkedin.com/company/swastik-web-solutions"><i class="fab fa-linkedin" style="font-size: 2.5rem;"></i></a>
          <a href="https://g.page/r/CZ9JaDxksbHWEAE"><i class="fab fa-google" style="font-size: 2.5rem;"></i></a>
        </h4>
      </div>
      <div class="header2">
        <div class="logo">
          <a href="index.html"><img src="Image/SWS logo -1.png" alt="Swastik Web Solutions"></a>
        </div>
        <div class="topnav" id="myTopnav">
          <a href="index.html">Home</a>
          <a href="service.html">Services</a>
          <a href="testimonial.html">Testimonial</a>
          <a href="about.html">About us</a>
          <a href="contact.html">Contact us</a> 
          
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>           
      </div>
      <hr style="background-color: #ffff;height: 1px; margin: 0px;">
    </header>
    `
  }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <hr style="background-color: #ffff;height: 1px; margin: 0px;"> <br>
    <div class="footer">
        <div class="grid1">
            <a href="index.html"><img src="Image/SWS logo -2.png" alt="Swastik Web Solutions"></a>
            <br><br>
            <div class="icon">
                <h4>Follow Us :</h4>
                <ul>
                    <li><a href="mailto:swastikwebsolutions21@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/swastik-web-solutions"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="https://g.page/r/CZ9JaDxksbHWEAE"><i class="fab fa-google" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="grid2">
            <h4>Quick links</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li> <a href="about.html">About Us</a></li>
                <li>What we do
                    <ul>
                        <li> - <a href="service.html">Website Development & Hosting</a></li>
                        <li> - <a href="service.html">Business Branding (Graphics Designing)</a></li>
                        <li> - <a href="service.html">Custom Desktop Application</a></li>
                        <li> - <a href="service.html">Offset Printing Store</a></li>
                    </ul>
                </li>
                <li><a href="testimonial.html">Testimonial</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>

        </div>
        <div class="grid3">
            <!-- <a href="#"><img src="#" alt="Swastik Web Solutions"></a> -->
            <h4>Call us : </h4>
            <a href="tel:+919712926846">+91-9712926846</a> , <a href="tel:+919408018887">+91-9408018887</a>
            <h4>Mail us : </h4>
            <a href="mailto:swastikwebsolutions21@gmail.com">swastikwebsolutions21@gmail.com</a>
        </div>
    </div>
      
    </footer>
    `
  }
}

customElements.define('my-footer', MyFooter)