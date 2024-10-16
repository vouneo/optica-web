<script>
	let images = [
		'/img/001.jpg',
		'/img/002.jpg',
		'/img/003.jpg',
		'/img/004.jpeg',
		'/img/005.jpeg',
		'/img/006.jpeg'
	];

	let currentIndex = 0;

	// Función para ir a la imagen anterior
	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		currentIndex = currentIndex;
	}

	// Función para ir a la imagen siguiente
	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
		currentIndex = currentIndex;
	}
</script>

<div class="carousel">
	<!-- Contenedor de las imágenes -->
	<div class="slides">
		{#each images as image, i}
			<div class="slide" style="background-image: url({image}); opacity: {i === currentIndex ? 1 : 0};"></div>
		{/each}
	</div>

	<!-- Botón para ir a la imagen anterior -->
	<button class="prev" on:click={prevImage}>&#10094;</button>

	<!-- Botón para ir a la imagen siguiente -->
	<button class="next" on:click={nextImage}>&#10095;</button>
</div>

<style>
	/* Contenedor del carrusel */
	.carousel {
		position: relative;
		width: 100%;
		height: 105vh;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* Estilos para las imágenes */
	.slides {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.slide {
		position: absolute;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		transition: opacity 1s ease-in-out;
		opacity: 0;
	}

	/* Botones de navegación */
	.prev, .next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: rgba(0, 0, 0, 0.5);
		border: none;
		color: white;
		padding: 16px;
		cursor: pointer;
		font-size: 24px;
		z-index: 1; /* Asegura que los botones se mantengan sobre las imágenes */
	}

	.prev {
		left: 20px;
	}

	.next {
		right: 20px;
	}

	.prev:hover, .next:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}

	@media (max-width: 768px) {
		.carousel {
			height: 40vh;
		}
	}

	@media (max-width: 480px) {
		.carousel {
			height: 30vh;
		}
	}
</style>
