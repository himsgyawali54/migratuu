class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
      <footer><div class="container"><h1>Footer</h1></div></footer>
      `;
  }
}
customElements.define("my-footer", MyFooter);
