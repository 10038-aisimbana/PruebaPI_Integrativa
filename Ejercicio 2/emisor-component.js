class EmisorComponent extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      const button = document.createElement('button');
      button.textContent = 'Enviar Mensaje';

      button.addEventListener('click', () => {
        const eventoPersonalizado = new CustomEvent('mensajeEnviado', {
          bubbles: true, 
          detail: { mensaje: 'Comunicación entre componentes exitosa!!!' }
        });
        this.dispatchEvent(eventoPersonalizado);
      });


      shadowRoot.appendChild(button);
    }
  }

  customElements.define('emisor-component', EmisorComponent);