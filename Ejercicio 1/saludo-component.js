class SaludoComponent extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      const paragraph = document.createElement('p');
      paragraph.textContent = '¡Hola, Mundo!';

      shadowRoot.appendChild(paragraph);
    }
  }

  customElements.define('saludo-component', SaludoComponent);