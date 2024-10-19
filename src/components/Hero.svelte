<script>
	import Carousel from './Carousel.svelte'; // Importamos el componente Carousel
  </script>
  
  <div class="hero">
	<!-- Llamada al componente Carousel -->
	<Carousel />
  </div>
  
  <style>
	/* Estilos del contenedor hero */
	.hero {
	  width: 100%;
	  height: 105vh;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background-color: #f8f9fa; /* Puedes ajustar este fondo según tus necesidades */
	}
  
	@media (max-width: 768px) {
	  .hero {
		height: 40vh;
	  }
	}
  
	@media (max-width: 480px) {
	  .hero {
		height: 30vh;
	  }
	}
  </style>
  