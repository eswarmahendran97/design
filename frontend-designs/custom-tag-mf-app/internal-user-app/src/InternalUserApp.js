import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class InternalUserApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Create a shadow DOM
  }

  connectedCallback() {
    const shadow = this.shadowRoot;
    const root = document.createElement('div');
    shadow.appendChild(root);

    // Render your React application content here
    ReactDOM.render(<App />, root);  // Replace with your actual component
  }
}

customElements.define('internal-users-app', InternalUserApp);

export default InternalUserApp;
