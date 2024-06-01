<script>
    import { Search } from 'lucide-svelte';

</script>

<header class="relative z-20">
    <div class="promo-banner">
        ¡Promoción especial! 35% de descuento en todos nuestros combos de armazón + cristales.
    </div>
    <div class="max-w-[1200px] mx-auto w-full flex flex-col items-center p-4 py-6">
        <a href="/">
            <img src="/logo.jpg" alt="Logo Optica Graneros" class="logo">
            <!-- <h1 class="text-2xl font-semibold text-[--accent]">
                Optica <span class="text-[--primary]">Graneros</span>
            </h1> -->
        </a>
        <div class="absolute top-6 right-4">
            <!-- Elemento de búsqueda -->
            <div class="relative">
                <input type="text" placeholder="Buscar" class="px-2 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <button class="absolute right-0 top-0 mt-1 mr-1">
                    <Search />
                </button>
            </div>
        </div>
        
        
        <nav class="flex items-center gap-4 lg:gap-6 mt-4">
            <a href="#product" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">Ópticos</a>
            <a href="#reviews" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">Multifocales</a>
            <a href="#faqs" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">Sol</a>
            <a href="#faqs" class="duration-200 hover:text-[--accent] font-bold cursor-pointer">Clip-on</a>
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
