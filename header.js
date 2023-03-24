class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="index.html"><img width="130px" src="./img/migratu-logo.webp" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-lg-5">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="study-in-aus.html">Study in Aus</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pathways-programs.html"
                >Pathway Programs</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="visas.html">Visas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="support.html">Support</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="enroll-now.html">Enroll Now</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header> 
        `;
  }
}
customElements.define("my-header", MyHeader);
