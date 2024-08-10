<script>
	import { Search } from 'lucide-svelte'
</script>

<header class="relative z-20">
	<div class="promo-banner">
		¡Consulta nuestras promociones! Tenemos descuentos en combos de marcos + cristales.
	</div>
	<div class="max-w-[1200px] mx-auto w-full flex flex-col items-center p-4 py-6">
		<a href="/">
			<img src="/logo.jpg" alt="Logo Optica Graneros" class="logo" />
		</a>

		<nav class="flex items-center gap-4 lg:gap-6 mt-4">
			<a href="#" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">
				Ópticos Convencionales
			</a>
			<a href="#" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">
				Bifocales y Multifocales
			</a>
			<a href="#" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">
				Lentes BiFlex
			</a>
			<a href="#" class="duration-200 hover:text-[--accent] font-bold cursor-pointer"> Niños </a>
		</nav>
	</div>
</header>

<style>
	.logo {
		height: 170px; /* Ajusta el tamaño del logo según tus necesidades */
		object-fit: cover; /* Hace que la imagen cubra todo el contenedor, recortando si es necesario */
		object-position: 0 -30px; /* Desplaza la imagen hacia arriba para que se recorte la parte superior */
		width: 90%; /* Reduce el ancho de la imagen para que no abarque todo el contenedor */
	}

	.promo-banner {
		background-color: black;
		color: white;
		text-align: center;
		padding: 10px 0; /* Ajusta el padding según sea necesario */
		width: 100%;
		font-size: 14px; /* Ajusta el tamaño de fuente según sea necesario */
	}
</style>
