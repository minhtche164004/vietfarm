<template>
    <section class="products">
        <h2>Sản phẩm bán chạy</h2>
        <p class="highlight">Top những sản phẩm bán chạy nhất của chúng tôi</p>
        <div class="container">
            <div class="product__container" v-if="newArrivals">
                <product-card v-for="(product, index) in newArrivals" :key="index" :productId="product._id"
                    :productName="product.name" :brand="product.brand" :price="product.price" :currency="product.currency"
                    :ratings="product.rating" :image_url="product.images[0]" :in_stock="product.in_stock" />
            </div>
            <product-preloader type="inline" v-else>
                Sản phẩm đang được load...
            </product-preloader>
        </div>
    </section>
</template>

<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";
export default {
    name: "NewArrivals",
    components: {
        ProductCard,
        ProductPreloader,
    },
    props: ["newArrivals"],
};
</script>
