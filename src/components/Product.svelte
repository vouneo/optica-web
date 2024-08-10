<script>
	export let imageUrl1 = '/img/promo-junio.png'
	export let imageUrl2 = '/img/agosto.png'
	import SectionWrapper from './SectionWrapper.svelte'
</script>

<SectionWrapper>
	<div class="text-image-container">
		<div class="text-block">
			<div class="headline">¿Necesitas realizar tu examen visual?</div>
			<div class="subheadline">Visíta nuestras tiendas</div>
		</div>
		<div class="image-block">
			<img src={imageUrl1} alt="Imagen Descriptiva" />
		</div>
	</div>

	<!-- Componente adicional invertido -->
	<div class="text-image-container text-image-container-inverted">
		<div class="image-block">
			<img src={imageUrl2} alt="Imagen Descriptiva" />
		</div>
		<div class="text-block">
			<div class="headline">¡Visítanos en nuestras sucursales!</div>
			<div class="subheadline">
				Realiza tu examen visual en nuestras tiendas y cotiza con nosotros al instante
			</div>
		</div>
	</div>
</SectionWrapper>

<style>
	.text-image-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 20px; /* Ajusta el padding según sea necesario */
		box-sizing: border-box;
	}

	.text-block {
		flex: 1;
		margin-right: 20px; /* Espacio entre el texto y la imagen */
		font-size: 24px; /* Tamaño de la fuente mayor */
		line-height: 1.5;
	}

	.headline {
		font-size: 32px; /* Tamaño de la fuente más grande para la pregunta */
		font-weight: bold;
		margin-bottom: 10px;
	}

	.subheadline {
		font-size: 24px; /* Tamaño de la fuente grande para la segunda línea */
	}

	.image-block {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.image-block img {
		max-width: 100%;
		height: auto;
		border-radius: 8px; /* Ajusta el radio de borde si necesitas bordes redondeados */
	}

	/* Estilos para el segundo componente invertido */
	.text-image-container-inverted .text-block {
		margin-left: 20px; /* Espacio entre la imagen y el texto */
	}

	.text-image-container-inverted .image-block {
		margin-right: 20px;
	}
</style>
