class CounterComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._counter = 0;
      this.render();
    }

    increment() {
      this._counter++;
      this.render();
    }

    decrement() {
      this._counter--;
      this.render();
    }

    render() {
      this.shadowRoot.innerHTML = `
        <p>Contador: <span>${this._counter}</span></p>
        <button id="increment" style="font-size: 16px; margin: 5px; cursor: pointer; background-color: blue; color: white; border: none; padding: 5px 10px;">+</button>
        <button id="decrement" style="font-size: 16px; margin: 5px; cursor: pointer; background-color: blue; color: white; border: none; padding: 5px 10px;">-</button>
      `;

      this.shadowRoot.getElementById('increment').addEventListener('click', () => this.increment());
      this.shadowRoot.getElementById('decrement').addEventListener('click', () => this.decrement());
    }
  }

  customElements.define('counter-component', CounterComponent);