<script>
    export let imageUrl = "/img/promo-junio.png";
    
</script>

<style>
    .text-image-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 20px; /* Ajusta el padding según sea necesario */
        box-sizing: border-box;
    }

    .text-block {
        flex: 1;
        margin-right: 20px; /* Espacio entre el texto y la imagen */
        font-size: 24px; /* Tamaño de la fuente mayor */
        line-height: 1.5;
    }

    .headline {
        font-size: 32px; /* Tamaño de la fuente más grande para la pregunta */
        font-weight: bold;
        margin-bottom: 10px;
    }

    .subheadline {
        font-size: 24px; /* Tamaño de la fuente grande para la segunda línea */
    }

    .image-block {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .image-block img {
        max-width: 100%;
        height: auto;
        border-radius: 8px; /* Ajusta el radio de borde si necesitas bordes redondeados */
    }
</style>

<div class="text-image-container">
    <div class="text-block">
        <div class="headline">¿Necesitas un examen de la vista?</div>
        <div class="subheadline">Visíta nuestras tiendas</div>
    </div>
    <div class="image-block">
        <img src={imageUrl} alt="Imagen Descriptiva" />
    </div>
</div>
