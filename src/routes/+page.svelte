<script>
	import '../app.css'
	import Product from '../components/Product.svelte'
	import Hero from '../components/Hero.svelte'

</script>

<div class="layout">
	<main>
		<Hero />
		<Product />
	</main>
</div>

<!--
header
hero
product-desc
carrusel con logos
faq/blog
footer  -->

<style>
	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
