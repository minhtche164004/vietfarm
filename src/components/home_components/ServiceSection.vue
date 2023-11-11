<template>
    <section class="services">
        <h2>Dịch vụ</h2>
        <div class="service-container">
            <service-card name="Miễn phí vận chuyển">
                <img src="@/assets/images/shipping.svg" alt="Miễn phí vận chuyển" /></service-card>

            <service-card name="Dễ dàng đặt hàng">
                <img src="@/assets/images/order.svg" alt="Dễ dàng đặt hàng" />
            </service-card>
            <service-card name="Tiết kiệm">
                <img src="@/assets/images/savings.svg" alt="Tiết kiệm" />
            </service-card>
            <service-card name="Khuyến mãi sập sàn">
                <img src="@/assets/images/promos.svg" alt="Khuyến mãi sập sàn" />
            </service-card>
            <service-card name="Đội ngũ hỗ trợ 24/7">
                <img src="@/assets/images/support.svg" alt="24/7 Support" /></service-card>
            <service-card name="Giao hàng tận nhà">
                <img src="@/assets/images/delivery.svg" alt="Giao hàng tận nhà" />
            </service-card>
        </div>
    </section>
</template>

<script>
import ServiceCard from "@/components/home_components/cards/ServiceCard.vue";
export default {
    name: "ServiceSection",
    components: {
        "service-card": ServiceCard,
    },
};
</script>

<style scoped>
.services {
    text-align: center;
}

.services h2 {
    margin-bottom: 2rem;
}

.service-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

img {
    height: 100px;
    width: 100px;
}

@media (max-width: 399px) {
    .service-container {
        padding: 2rem;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: initial;
    }
}
</style>
