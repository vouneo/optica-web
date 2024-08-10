<script>
	export let imageUrl = '/img/4a.jpg'
</script>

<div class="banner-container">
	<div class="banner-image" style="background-image: url({imageUrl});"></div>
</div>

<style>
	.banner-container {
		position: relative;
		width: 100%; /* Ocupa todo el ancho disponible */
		height: 105vh; /* Usa un valor de viewport height para la altura del contenedor */
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.banner-image {
		width: 100%;
		height: 100%;
		background-size: cover; /* Asegura que la imagen cubra el contenedor */
		background-position: center; /* Centra la imagen en el contenedor */
		background-repeat: no-repeat; /* Evita que la imagen se repita */
	}

	/* Media queries para ajustar el diseño en diferentes tamaños de pantalla */
	@media (max-width: 768px) {
		.banner-container {
			height: 40vh; /* Ajusta la altura en pantallas más pequeñas si es necesario */
		}
	}

	@media (max-width: 480px) {
		.banner-container {
			height: 30vh; /* Ajusta la altura en pantallas muy pequeñas si es necesario */
		}
	}
</style>
