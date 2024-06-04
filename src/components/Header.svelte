<script>
    import { Search } from 'lucide-svelte';

</script>

<header class="relative z-20">
    <div class="promo-banner">
        ¡Todo el mes de Junio! Examen visual sin costo.
    </div>
    <div class="max-w-[1200px] mx-auto w-full flex flex-col items-center p-4 py-6">
        <a href="/">
            <img src="/logo.jpg" alt="Logo Optica Graneros" class="logo">
            
        </a>
        
        
        <nav class="flex items-center gap-4 lg:gap-6 mt-4">
            <a href="#" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">Ópticos</a>
            <a href="#" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">Bifocales y Multifocales</a>
            <a href="#" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">Cristales Rodenstock</a>
            <a href="#" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">Clip-on</a>
        </nav>
    </div>
</header>

<style>
    .logo {
        height: 170px; /* Ajusta el tamaño del logo según tus necesidades */
        
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
