// Shared navigation & footer injection
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page ? ' class="active"' : '';
  }

  const navHTML = `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="navbar-brand">
        <img src="logo-v2.png" alt="Azthreus Systems Logo">
        <div class="navbar-brand-text">
          <span class="name">AZTHREUS SYSTEMS</span>
          <span class="tagline">Deep Space Engineering</span>
        </div>
      </a>
      <ul class="navbar-nav" id="navMenu">
        <li><a href="index.html"${isActive('index.html')}>Home</a></li>
        <li><a href="products.html"${isActive('products.html')}>Products</a></li>
        <li><a href="services.html"${isActive('services.html')}>Services</a></li>
        <li><a href="about.html"${isActive('about.html')}>About</a></li>
        <li><a href="contact.html" class="navbar-cta">Contact Us</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="logo-v2.png" alt="Azthreus Systems">
          <div class="name">AZTHREUS SYSTEMS</div>
          <p class="mission">Architecting fault-tolerant software, quantum computing frameworks, and delay-tolerant networks enabling human expansion into deep space.</p>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="products.html#dtn">DTN Suite</a></li>
            <li><a href="products.html#qrc">Quantum-Resistant Crypto</a></li>
            <li><a href="products.html#rhaos">RhAOS</a></li>
            <li><a href="products.html#hap">Humanity Archive Platform</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#consulting">Architecture Consulting</a></li>
            <li><a href="services.html#vv">Mission-Critical V&amp;V</a></li>
            <li><a href="services.html#ai">Deep Space AI</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="about.html#mission">Mission &amp; Vision</a></li>
            <li><a href="about.html#values">Core Values</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Azthreus Systems. All rights reserved.</p>
        <span class="classification">PUBLIC — AZ-L1</span>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('navMenu').classList.toggle('open');
  });
});
