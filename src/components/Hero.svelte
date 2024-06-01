<script>
    export let imageUrl = "/img/4.jpg";
    export let promoText = "¡Promoción especial! 35% de descuento en todas las gafas de sol.";
</script>

<style>
    .banner-container {
        position: relative;
        width: 100%;
        height: 500px; /* Ajusta la altura según sea necesario */
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner-image {
        width: 100%;
        height: auto;
        object-fit: contain; /* Asegura que la imagen mantenga sus proporciones sin cortarse */
    }

    .promo-text {
        position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 24px; /* Ajusta el tamaño del texto según sea necesario */
        font-weight: bold;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para mayor legibilidad */
        padding: 10px 20px;
        border-radius: 5px;
    }
</style>

<div class="banner-container">
    <img src={imageUrl} alt="Promotional Banner" class="banner-image" />
    <div class="promo-text">{promoText}</div>
</div>
