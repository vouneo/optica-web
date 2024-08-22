<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import Product from "../components/Product.svelte";
</script>

<div class="layout">
	<main>
		<!--  -->
		
		<Product />
	  </main>
</div>

<style>
    @media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>

<!--
header
hero
product-desc
carrusel con logos
faq/blog
footer  -->
