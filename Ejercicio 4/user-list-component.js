class UserListComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      this.fetchData();
    }

    async fetchData() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }

        const data = await response.json();
        this.renderUsers(data);
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
      }
    }

    renderUsers(users) {
      const dataContainer = this.shadowRoot.getElementById('user-list');
      users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<br>
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Compañía: ${user.company.name}</p>
        `;
        dataContainer.appendChild(card);
      });
    }

    render() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="style.css">

        <div>
          <div id="user-list"></div>
        </div>
      `;
    }

    connectedCallback() {
      this.render();
    }
  }

  customElements.define('user-list-component', UserListComponent);