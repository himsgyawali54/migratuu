class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
      <footer id="contact-us">      <section class="contact-us-info">
      <div class="container-fluid">
        <div class="row get-in-touch">
          <h2>GET IN TOUCH</h2>
          <p>
            In case of questions, feel free to reach out to one of our<br />
            experienced Registered Migration Agents.
          </p>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 contact-row">
          <form
            action="https://formsubmit.co/rajnitabhetwal10@gmail.com"
            method="POST"
          >
            <div class="row row-cols-1 row-cols-md-2">
              <div class="col">
                <input
                  type="text"
                  name="First Name"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  name="Last Name"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2">
              <div class="col">
                <input
                  type="mail"
                  name="Email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="col">
                <input
                  type="tel"
                  name="Phone"
                  class="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2">
              <div class="col">
                <input
                  type="text"
                  name="country"
                  class="form-control"
                  placeholder="Enter Your country"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  name="location"
                  class="form-control"
                  placeholder="Enter your location"
                />
              </div>
            </div>

            <input
              type="number"
              name="Age"
              class="form-control"
              placeholder="Age"
            />

            <textarea
              name="Message"
              class="form-control"
              placeholder="Message"
              rows="6"
            ></textarea>

            <button class="btn-all" type="submit">Submit</button>
          </form>
          <div class="col-md-7 col-lg-4 contact-detail-card">
            <div class="card">
              <div class="card-body">
                <h2>CONTACT DETAILS</h2>
                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <a href="#" class="stretched-link"
                      ><i class="bi bi-telephone"></i
                    ></a>
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>Give us a call</h4>
                    <p><b>9823430360</b></p>
                  </div>
                </div>
                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <a href="#" class="stretched-link"
                      ><i class="bi bi-messenger"></i
                    ></a>
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>Chat Via Messenger</h4>
                  </div>
                </div>
                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <a href="#" class="stretched-link"
                      ><i class="bi bi-whatsapp"></i
                    ></a>
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>Chat Via Whatsapp</h4>
                  </div>
                </div>
                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <a href="#" class="stretched-link"
                      ><i class="bi bi-envelope"></i
                    ></a>
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>Send an Email</h4>
                    <p>info@migratuu.com</p>
                  </div>
                </div>
                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <i class="bi bi-people-fill"></i>
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>Book a consultation</h4>
                  </div>
                </div>

                <div class="row info-row">
                  <div class="col-2 col-lg-2">
                    <a href="#" class="stretched-link"
                      ><i class="bi bi-geo-alt"></i
                    ></a>
                  </div>
                  <div class="col-9 col-lg-10">
                    <h4>TUNG CHOI STREET, MONGKOK,</h4>
                    <p>KOWLOON, HONG KONG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="footer-form">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3">
            <h3><a href="#">Migratuu</a></h3>
            <p>
              We seek to provide all students, clients or companies with
              honest and accurate advice enabling them to migrate to Australia
              as easily and efficiently as possible.
            </p>
          </div>
          <div class="col-12 col-lg-3">
            <h3><a href="#">Company</a></h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Pathway Programs</a></li>
              <li><a href="#">Visas</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Enroll</a></li>
            </ul>
            <!-- <div class="social-media">
              <ul>
                <li>
                  <i class="bi bi-youtube"></i>
                  <p>Youtube</p>
                </li>
                <li>
                  <i class="bi bi-facebook"></i>
                  <p>Facebook</p>
                </li>
                <li>
                  <i class="bi bi-instagram"></i>
                  <p>Instagram</p>
                </li>
              </ul>
            </div> -->
          </div>
          <div class="col-12 col-lg-3">
            <h3><a href="#">Contact</a></h3>
            <ul>
              <li><a href="#">Nepal: 9823430360</a></li>

              <li><a href="#">Email: rajnitabhetwal10@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <p class="copyright">
          Copyright @ 2023 - Migratuu- All rights reserved
        </p>
      </div>
    </section></footer>
      `;
  }
}
customElements.define("my-footer", MyFooter);
