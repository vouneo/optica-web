<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import Product from "../components/Product.svelte";
</script>

<div class="layout">
  <!-- Header -->
	<Header />

	<main>
		<!-- Black hole for other content -->
		<slot />
		<Product />
	</main>

  <!-- Footer -->
	<Footer />
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
