<script>
    let logos = [
      '/img/logos/yalea.png',
      '/img/logos/bflexn.png',
      '/img/logos/furla.png',
      '/img/logos/hawk.jpg',
      '/img/logos/Xpecs.jpg',
      '/img/logos/sting.png',
      '/img/logos/lover.png',
      // Agrega más logos según sea necesario
    ];
  </script>
  
  <section class="logo-section">
    {#each logos as logo}
      <div class="logo-item">
        <img src={logo} alt="Logo" />
      </div>
    {/each}
  </section>
  
  <style>
    .logo-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      padding: 3rem 5rem;
      background-color: #f9f9f9;
    }
  
    .logo-item {
      flex: 1 1 150px; /* Los logos se adaptan al tamaño de la pantalla */
      max-width: 150px; /* Tamaño máximo del logo */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .logo-item img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  </style>
  