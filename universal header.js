class MyHeader extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="header1">
        <div class="left">
          <h4>Call us : <a href="tel:+919712926846">+91-9712926846</a></h4>
        </div>
        <div class="right">
          <h4> 
            <a href="https://www.linkedin.com/company/swastik-web-solutions" target="_blank"><i class="fab fa-linkedin" title="Linked in"> LinkedIn</i> </a>
            <a href="https://g.page/r/CZ9JaDxksbHWEAE" target="_blank"><i class="fab fa-google" title="Google"> Google</i></a>
            <a href="https://www.instagram.com/swastikwebsolutions/" target="_blank"><i class="fa fa-instagram" aria-hidden="true" title="Instagram"> Instagram</i></a>
            </h4>
        </div>
      </div>
      <div class="header2">
        <div class="logo">
          <a href="index.html"><img src="Image/SWS logo -1.png" alt="Swastik Web Solutions"></a>
        </div>
        <div class="topnav" id="myTopnav">
          <a href="index.html">Home</a>
          <a href="about.html">About us</a>
          <a href="service.html">Services</a>
          <a href="testimonial.html">Testimonial</a>          
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
            
            
        </div>
        <div class="grid2">
          <h4>Quick links</h4>
          <div class="row">
            <div class="col-md-6">
              <ul>
                  <li><a href="index.html">Home</a></li>
                  <li> <a href="about.html">About Us</a></li>
                  <li> <a href="service.html">Services</a></li>
                  <li><a href="testimonial.html">Testimonial</a></li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                  
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="https://www.upwork.com/freelancers/~01220afa54de1d1213?viewMode=1" target="_blank">Hire Us</a></li>
              </ul>
            </div>
          </div>
        </div>        
        <div class="grid3">
            <h4>Call us : </h4>
            <a href="tel:+919712926846">+91-9712926846</a>,<a href="tel:+919408018887">+91-9408018887</a>
            <h4>Mail us : </h4>
            <a href="mailto:swastikwebsolutions21@gmail.com">swastikwebsolutions21@gmail.com</a>
            <br>
            <div class="icon">
                <h4>Follow Us :</h4>
                <a href="https://www.linkedin.com/company/swastik-web-solutions" target="_blank"><i class="fab fa-linkedin" title="Linked in"> LinkedIn</i> </a>
                <a href="https://g.page/r/CZ9JaDxksbHWEAE" target="_blank"><i class="fab fa-google" title="Google"> Google</i></a>
                <a href="https://www.instagram.com/swastikwebsolutions/" target="_blank"><i class="fa fa-instagram" aria-hidden="true" title="Instagram"> Instagram</i></a>
            </div>
            
        </div>
    </div>
      
    </footer>
    `
  }
}

customElements.define('my-footer', MyFooter)