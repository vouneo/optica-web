<script>
    import { Instagram, Facebook } from "lucide-svelte";
</script>

<footer class="footer" style="background-color: #0F0E0E; color: white;">
    <div class="footer-container container">
        <div class="footer-menu-column">
            <h4 class="footer-menu-title font-bold">Productos</h4>
            <ul>
                <li><a class="footer-menu-item" href="/nuestros-marcos">Nuestros marcos</a></li>
                <li><a class="footer-menu-item" href="/nuestros-cristales">Nuestros cristales</a></li>
                <li><a class="footer-menu-item" href="/lentespalcompu">Lentes con Filtro azul</a></li>
            </ul>
        </div>
        <div class="footer-menu-column">
            <h4 class="footer-menu-title font-bold">Locales</h4>
            <ul>
                <li><a class="footer-menu-item" href="/stores">Ubicaciones</a></li>
            </ul>
        </div>
        <div class="footer-menu-column">
            <h4 class="footer-menu-title font-bold">Nosotros</h4>
            <ul>
                <li><a class="footer-menu-item" href="/nuestro-manifiesto">Nuestro manifiesto</a></li>
            </ul>
        </div>
        <div class="footer-menu-column">
            <h4 class="footer-menu-title font-bold">Más enlaces</h4>
            <ul>
                <li><a class="footer-menu-item" href="/ayuda">Ayuda</a></li>
                <li><a class="footer-menu-item" href="/devoluciones-y-garantias">Devoluciones y garantías</a></li>
                <li><a class="footer-menu-item" href="/terminos-y-condiciones-de-uso">Términos y condiciones</a></li>
                <li><a class="footer-menu-item" href="/politica-de-privacidad">Política de privacidad</a></li>
                <li><a class="footer-menu-item" href="/reembolso-isapre">Reembolso ISAPRE</a></li>
            </ul>
        </div>
        <div class="footer-menu-column">
            <h4 class="footer-menu-title font-bold">Síguenos</h4>
            <ul class="footer-social-icons flex flex-row justify-end space-x-4">
                <li><a class="footer-social-icon" href="https://www.facebook.com/opticagraneros/"><Facebook style="color: white;" /></a></li>
                <li><a class="footer-social-icon" href="https://www.instagram.com/optica_graneros/"><Instagram style="color: white;" /></a></li>
            </ul>
        </div>
    </div>
  
    <div class="footer-copyright">
        <div class="footer-copyright-content">
            <hr class="footer-stroke">
            <div class="footer-copyright-text font-bold">Derechos Reservados Óptica Graneros © 2024</div>
        </div>
    </div>
</footer>

<style>
    .footer-container {
        padding: 20px; /* Ajusta el padding según sea necesario */
    }

    .footer-menu-column {
        display: inline-block;
        vertical-align: top;
        width: 18%;
        padding: 10px; /* Añade padding a cada columna */
    }

    .footer-menu-title {
        margin-bottom: 10px;
    }

    .footer-menu-item {
        color: white;
        text-decoration: none;
    }

    .footer-social-icons {
        list-style-type: none;
        padding: 0;
    }

    .footer-social-icon {
        text-decoration: none;
    }

    .footer-social-icon:hover {
        text-decoration: underline;
    }

    .footer-copyright {
        text-align: center;
        margin-top: 20px;
        padding-top: 20px;
    }

    .footer-copyright-text {
        color: white;
        padding: 0 20px; /* Añade padding horizontal al texto de copyright */
    }

    .footer-stroke {
        border: none;
        border-top: 1px solid #fff;
        width: 100%;
        margin: 0;
        clear: both;
    }

    /* Alinea la columna de Síguenos a la derecha */
    .footer-menu-column:last-child {
        text-align: right;
    }
</style>
