<script>
	export let imageUrl1 = '/img/horarios.png'
	export let imageUrl2 = '/img/agosto.png'
	import SectionWrapper from './SectionWrapper.svelte'
	import LogoSection from './LogoSection.svelte';
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
<LogoSection />

<style>
	.text-image-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}

	.text-block {
		flex: 1;
		margin-right: 20px;
		font-size: 24px;
		line-height: 1.5;
	}

	.headline {
		font-size: 32px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.subheadline {
		font-size: 24px;
	}

	.image-block {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.image-block img {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}

	/* Estilos para el segundo componente invertido */
	.text-image-container-inverted .text-block {
		margin-left: 20px;
	}

	.text-image-container-inverted .image-block {
		margin-right: 20px;
	}

	/* Responsividad */
	@media (max-width: 768px) {
		.text-image-container {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.text-block {
			margin: 0 0 20px 0; /* Elimina los márgenes laterales y añade margen inferior */
			font-size: 20px; /* Reduce el tamaño de la fuente en pantallas pequeñas */
		}

		.headline {
			font-size: 28px; /* Reduce el tamaño de la fuente de la headline */
		}

		.subheadline {
			font-size: 20px; /* Reduce el tamaño de la fuente de la subheadline */
		}

		.image-block img {
			width: 80%; /* Ajusta el tamaño de la imagen en pantallas pequeñas */
		}
	}

	@media (max-width: 480px) {
		.text-block {
			font-size: 18px; /* Reduce aún más el tamaño de la fuente en pantallas muy pequeñas */
		}

		.headline {
			font-size: 24px; /* Ajusta el tamaño de la fuente de la headline */
		}

		.subheadline {
			font-size: 18px; /* Ajusta el tamaño de la fuente de la subheadline */
		}

		.image-block img {
			width: 100%; /* La imagen ocupa todo el ancho disponible en pantallas muy pequeñas */
		}
	}
</style>
