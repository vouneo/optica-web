<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
</script>

<div class="layout">
    <!-- Header -->
      <Header />
  
      
        
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
