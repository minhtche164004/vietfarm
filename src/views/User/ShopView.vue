<template>
    <main-header />
    <sub-header heading="Sản phẩm" />
    <div class="container">
        <a-space>
            <a-select style="width: 160px;" v-model:value="filters">
                <a-select-option :value="1">Tất cả</a-select-option>
                <a-select-option :value="2">Đồ khô</a-select-option>
                <a-select-option :value="3">Các sản phẩm khác</a-select-option>
            </a-select>
        </a-space>
        <div class="product__container" v-if="loaded">
            <product-card v-for="(product, index) in products" :key="index" :productId="product._id"
                :productName="product.name" :brand="product.brand" :price="product.price" :currency="product.currency"
                :ratings="product.rating" :image_url="product.images[0]" :in_stock="product.in_stock" />
        </div>
        <product-preloader v-else> Loading... </product-preloader>
    </div>
    <div class="pagination">
        <vue-awesome-paginate :total-items="45" :max-pages-shown="5" v-model="page" :show-breakpoint-buttons="false"
            :on-click="fetchNewPage" paginate-buttons-class="btn" active-page-class="btn-active"
            back-button-class="back-btn" next-button-class="next-btn" :hide-prev-next-when-ends="true">
            <template #prev-button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </template>
            <template #next-button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </template>
        </vue-awesome-paginate>

    </div>
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

import axios from "axios";

export default {
    name: "ShopView",
    components: {
        SubHeader,
        ProductCard,
        MainHeader,
        MainFooter,
        "product-preloader": ProductPreloader,
    },
    data() {
        return {
            products: [],
            page: 1,
            loaded: false,
            total: 0,
            filters: 1,
        };
    },
    created() {
        // this.getProducts();
        this.getProductsVietFarm();
    },
    methods: {
        getProductsVietFarm() {
            this.products = this.$store.state.productsfix
            console.log(this.$store.state.productsfix)
            this.loaded = true
        },
        getProducts() {
            this.loaded = false;
            axios
                .get(`https://gorana.onrender.com/products?page=${this.page}`)
                .then((res) => {
                    this.products = res.data.results.map((product) => {
                        product.images[0] = product.images[0].replace(
                            "http",
                            "https"
                        );
                        return product;
                    });
                    console.log(this.products)
                    this.total = res.data.total_pages;
                    this.loaded = true;
                })
                .catch((err) => {
                    console.log(err);
                    this.loaded = false;
                });
            this.loaded = true;
        },
        fetchNewPage(page) {
            this.page = page;
            this.getProducts();
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style>
.product__card img {
    /* width: 242px; */
    /* Điều chỉnh chiều rộng theo ý muốn */
    height: 322.66px;
    /* Điều chỉnh chiều cao theo ý muốn */
    /* object-fit: cover; */
}

.btn {
    border: none;
    background-color: #f2f2f2;
    padding-inline: 20px;
    height: 40px;
    border: 2px solid var(--grey-2);
    font-size: 1.7rem;
    margin-inline: 5px;
    cursor: pointer;
}

.back-btn,
.next-btn {
    background-color: #f2f2f2;
    color: black;
}

.btn:hover {
    background-color: #083e46;
    border-color: #083e46;
    color: white;
}

.btn-active {
    background-color: #083e46;
    color: white;
    border-color: #083e46;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
}
</style>
