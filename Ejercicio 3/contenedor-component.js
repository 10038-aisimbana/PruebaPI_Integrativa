class ContenedorComponent extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      const container = document.createElement('div');

      container.innerHTML = `
        <style>
        :host {
            display: block;
            border: 1px solid #ddd;
            padding: 10px;
            margin: 10px;
          }
        
          ::slotted([slot="encabezado"]) {
            font-weight: bold;
          }
        </style>

        <div id="encabezado" slot="encabezado">
          <slot name="encabezado">Encabezado predeterminado</slot>
        </div>

        <div id="cuerpo" slot="cuerpo">
          <slot name="cuerpo">Contenido predeterminado</slot>
        </div>
      `;

      shadowRoot.appendChild(container);
    }
  }

  customElements.define('contenedor-component', ContenedorComponent);