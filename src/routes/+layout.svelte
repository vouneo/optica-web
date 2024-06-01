<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import Hero from "../components/Hero.svelte";
    import Product from "../components/Product.svelte";
</script>


<Header />
<Hero />
<slot />
<Product />
<Footer />
<!-- 
header 
hero 
product-desc 
carrusel con logos
faq/blog 
footer  -->