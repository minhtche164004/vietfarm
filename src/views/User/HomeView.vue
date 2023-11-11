<template>
    <main-header />
    <section class="hero__section">
        <div class="container">
            <div class="hero__text">
                <h1>VietFarm - OCOP Việt Nam </h1>
                <h2>Bản sắc người Việt Nam</h2>
                <p>Nơi buôn bán các sản phẩm mặt hàng đạt chuẩn OCOP của Nam Định</p>
                <router-link to="/shop">
                    <action-button btnvalue="Mua hàng" />
                </router-link>
            </div>
        </div>
    </section>
    <service-section />
    <section class="feature__section">
        <div class="container">
            <featured-products :featuredProducts="featuredProducts" />
        </div>
    </section>

    <banner-section />
    <new-arrivals :newArrivals="newArrivals" />
    <!-- <advert-section />
    <news-letter />
    <zalo-chat /> -->
    <main-footer />
</template>

<script>
import ServiceSection from "@/components/home_components/ServiceSection.vue";
import BannerSection from "@/components/home_components/BannerSection.vue";
import NewArrivals from "@/components/home_components/products/NewArrivals.vue";
import AdvertSection from "@/components/home_components/AdvertSection.vue";
import FeaturedProducts from "@/components/home_components/products/FeaturedProducts.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import MainFooter from "@/components/MainFooter.vue";
import ZaloChat from "@/components/ZaloChat.vue";

import axios from "axios";
import { mapActions } from "vuex";

export default {
    name: "HomeView",
    data() {
        return {
            products: [],
        };
    },
    methods: {
        ...mapActions(["set_products"]),
    },
    components: {
        ServiceSection,
        BannerSection,
        NewArrivals,
        AdvertSection,
        FeaturedProducts,
        ActionButton,
        MainHeader,
        NewsLetter,
        MainFooter,
        ZaloChat,
    },
    computed: {
        featuredProducts() {
            return this.$store.state.productsfix.slice(1, 5);
        },
        newArrivals() {
            return this.$store.state.productsfix.slice(0, 4);
        },
    },
    async created() {
        let res1 = await axios.get("https://gorana.onrender.com/products");
        this.products = res1.data.results.map((product) => {
            product.images[0] = product.images[0].replace("http", "https");
            return product;
        });
        this.set_products(this.products);
    },
};
</script>

<style scoped>
/* Hero Section */
.hero__section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 65px);
    background-image: url("https://media.doanhnghiephoinhap.vn/uploads/2022/11/17/z3887626134118-b4ec268c2f1b2e213b14930b8613b340-1668658210.jpg");
    background-position: 60% 30%;
    background-size: cover;
}

.hero__text {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;

}

.hero__text h4 {
    color: black;
    padding-bottom: 1rem;
}

.hero__text h1 {
    margin-top: 4rem;
    /* background-color: #014c29;s */
    color: black;
}

.hero__text h2 {
    color: black;
}

.hero__text p {
    color: black;
    margin-bottom: 1rem;
}

@media (min-width: 2000px) {
    .hero__section {
        background-position: 70% 12%;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #e3e6f3;
        height: 50vh;
    }
}

@media (min-width: 3000px) {
    .hero__section {
        background-position: 60% 30%;
        /* background-size: cover; */
    }
}
</style>
