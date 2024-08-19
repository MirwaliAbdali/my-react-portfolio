function Contact() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  // }
  return (
    <footer>
      <div class="container contact-container">
        <div class="row justify-content-center">
          <div class="col-md-6 contact-form">
            <h2 class="title text-center">Contact Me</h2>
            <h4 className="sub-title text-center mb-4">Let's Work Together</h4>
            <div class="card contact-card">
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label for="name" class="form-label text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label text-white">
                      Your Message
                    </label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <button className="btn btn-primary w-100 p-3">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/mirwali-abdali-396867274/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/MirwaliAbdali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.instagram.com/mirwaliabdali7860/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://wa.me/93703174964"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
      <div className="copy-right text-center">
        <p>
          &copy; {new Date().getFullYear()} Mirwali Abdali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
