<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import Hero from "../components/Hero.svelte"
</script>

<div class="layout">
    <!-- Header -->
      <Header />
      <Hero />
  
      
        
        <slot />
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
