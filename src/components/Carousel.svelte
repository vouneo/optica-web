<script>
	let images = ['/img/1.png', '/img/2.png', '/img/3.png', '/img/4.png']

	let currentIndex = 0

	// Mostrar la imagen en el índice dado
	/**
	 * @param {number} index
	 */
	function showImage(index) {
		currentIndex = index
	}

	// Ir a la imagen siguiente
	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length
	}

	// Ir a la imagen anterior
	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length
	}
</script>

<main class="carousel-container">
	<div class="carousel">
		{#each images as image, i}
			<div class="item {i === currentIndex ? 'active' : ''}">
				<img src={image} alt={`Image ${i + 1}`} />
			</div>
		{/each}
	</div>
	<button class="btn prev" on:click={prevImage}>Anterior</button>
	<button class="btn next" on:click={nextImage}>Siguiente</button>

	<div class="dots">
		{#each images as _, i}
			<button
				class="dot {i === currentIndex ? 'active' : ''}"
				on:click={() => showImage(i)}
				aria-label="Go to slide {i + 1}"
			>
			</button>
		{/each}
	</div>
</main>

<style>
	.carousel-container {
		width: 80%;
		margin: auto;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.carousel {
		aspect-ratio: 16/9;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.item {
		opacity: 0;
		width: 100%;
		height: 100%;
		display: none;
		transition: opacity 0.5s ease-in-out;
	}

	.item.active {
		opacity: 1;
		display: block;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.btn {
		padding: 1em;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: #fff;
		border-radius: 50px;
		cursor: pointer;
	}

	.btn:hover {
		background-color: #e4e4e4;
	}

	.prev {
		left: -5%;
	}

	.next {
		right: -5%;
	}

	.dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	.dot {
		cursor: pointer;
		width: 10px;
		height: 10px;
		background-color: #242421;
		border-radius: 50%;
		transition: background-color 0.2s ease;
	}

	.dot.active {
		background-color: #ccccc4;
	}
</style>
