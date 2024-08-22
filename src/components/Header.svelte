<script>
</script>

<header class="relative z-20">
	<div class="promo-banner">
		¡Consulta nuestras promociones! Tenemos descuentos en combos de marcos + cristales.
	</div>
	<div class="max-w-[1200px] mx-auto w-full flex flex-col items-center p-4 py-6">
		<a href="/">
			<img src="/logo.jpg" alt="Logo Optica Graneros" class="logo" />
		</a>

		<nav class="nav-container flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4">
			<a href="/opticos" class="nav-link duration-200 hover:text-[--accent] font-bold cursor-pointer">
				Ópticos Convencionales
			</a>
			<a href="/multifocales" class="nav-link duration-200 hover:text-[--accent] font-bold cursor-pointer">
				Bifocales y Multifocales
			</a>
			<a
				href="/biflex"
				class="nav-link duration-200 hover:text-[--accent] font-bold cursor-pointer"
			>
				Lentes BiFlex
			</a>
			<a href="/ninos" class="nav-link duration-200 hover:text-[--accent] font-bold cursor-pointer">
				Niños
			</a>
		</nav>
	</div>
</header>

<style>
	.logo {
		height: 170px;
		object-fit: cover;
		object-position: 0 -30px;
		width: 90%;
	}

	.promo-banner {
		background-color: black;
		color: white;
		text-align: center;
		padding: 10px 0;
		width: 100%;
		font-size: 14px;
	}

	.nav-container {
		width: 100%;
	}

	.nav-link {
		text-align: center;
	}

	@media (min-width: 768px) {
		.nav-container {
			flex-direction: row;
			justify-content: center;
		}

		.nav-link {
			text-align: left;
		}
	}
</style>
