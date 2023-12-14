class ReceptorComponent extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      this.paragraph = document.createElement('p');

      shadowRoot.appendChild(this.paragraph);

      document.addEventListener('mensajeEnviado', (evento) => {

        this.paragraph.textContent = ` ${evento.detail.mensaje}`;
      });
    }
  }

customElements.define('receptor-component', ReceptorComponent);