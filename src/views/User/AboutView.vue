<template>
    <main-header />
    <sub-header heading="Câu chuyện VietFarm- OCOP Việt Nam" subHeading="Hiểu hơn về chúng tôi" />
    <div class="container">
        <article>
            <img src="@/assets/images/logo.png" class="about-img" alt="Giới thiệu" />
            <div class="about-text">
                <h1>Giới thiệu</h1>
                <p>
                    <b>Công ty Cổ phần VietFarm</b><br>
                    Thành lập năm 2023
                </p>
            </div>
        </article>
        <br>
        <article>
            <div class="about-text">
                <h1>Giá trị cốt lõi</h1>
                <br>
                <p>
                    Cung cấp các sản phẩm OCOP độc đáo Nam Định đến gần người tiêu dùng <br><br>
                    Sự an tâm, tự hào, về các sản phẩm quê hương Nam Định được nâng tầm.
                </p>
            </div>
            <img src="@/assets/images/a1.jpg" class="about-img" alt="Giá trị cốt lõi">
        </article>
        <article>
            <div class="about-multiple-img">
                <img src="@/assets/images/product/ngonepsay.webp" alt="Ngô nếp tươi sấy">
                <img src="@/assets/images/product/keosiuchau.jpg" alt="Kẹo sìu châu">
            </div>
            <div class="about-text">
                <h1>Bối cảnh</h1>
                <p>
                    Sản phẩm OCOP mang trong mình giá trị văn hóa, bản sắc của từng vùng miền. Các sản phẩm có giá trị
                    thương mại, được chứng nhận OCOP mang lại giá trị kinh tế cho nông dân, người lao động, tạo công ăn việc
                    làm cho người sản xuất, hộ sản xuất, cải thiện đời sống, giúp người nông dân lao động ly nông bất ly
                    hương. <br><br>
                    Các sản phẩm OCOP được sản xuất từ các vùng làng nghề, hộ kinh doanh truyền thống của vùng miền được
                    sáng tạo bởi sự cần cù, chịu khó của người lao động địa phương, kinh nghiệm sống và văn hóa lâu đời kết
                    tinh trong sản phẩm.
                    Các sản phẩm OCOP được sản xuất từ các vùng làng nghề, hộ kinh doanh truyền thống của vùng miền được
                    sáng tạo bởi sự cần cù, chịu khó của người lao động địa phương, kinh nghiệm sống và văn hóa lâu đời kết
                    tinh trong sản phẩm.<br><br>
                    Đến nay tỉnh Nam Định có 189 xã, thị trấn (chiếm 92,65% tổng số xã, thị trấn) được công nhận đạt chuẩn
                    NTM nâng cao, trong đó có 18 xã (chiếm 9,57% tổng số xã) được công nhận đạt chuẩn NTM kiểu mẫu. Ngoài
                    ra, có 6 xã đang tích cực hoàn thiện hồ sơ, tiêu chí xã NTM kiểu mẫu để đề nghị xét công nhận xã đạt
                    chuẩn NTM kiểu mẫu.
                    - Tỉnh Nam Định xác định xây dựng các mô hình thôn, xóm NTM kiểu mẫu là nền tảng để xây dựng xã NTM nâng
                    cao, kiểu mẫu, đến nay toàn tỉnh có trên 685 thôn, xóm đạt chuẩn NTM kiểu mẫu.
                    - Tập trung chỉ đạo, triển khai thực hiện Đề án xây dựng thí điểm mô hình huyện NTM kiểu mẫu “Sáng,
                    Xanh, Sạch, Đẹp để phát triển bền vững” tại huyện Hải Hậu; đồng thời tỉnh đang tập trung chỉ đạo huyện
                    Giao Thủy và huyện Xuân Trường phấn đấu xây dựng huyện NTM kiểu mẫu giai đoạn 2021-2025Đến nay xây dựng
                    và phát triển được 330 sản phẩm OCOP từ 3 sao trở lên, cụ thể 47 sản phẩm OCOP 4 sao và 283 sản phẩm
                    OCOP 3 sao; 02 sản phẩm OCOP 5 sao


                </p>
            </div>
        </article>
    </div>
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ServiceSection from "@/components/home_components/ServiceSection.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, ServiceSection, MainHeader, MainFooter },
    name: "AboutView",
};
</script>

<style scoped>
article {
    display: flex;
    gap: 4rem;
    margin-bottom: 2.5rem;
}

.about-img {
    height: 50vh;
    width: 50%;
    object-fit: cover;
}

.about-multiple-img {
    width: 50%;
    object-fit: cover;
}

.about-multiple-img img {
    height: 50vh;
    object-fit: cover;
}

h1 {
    color: linear-gradient(90deg, rgba(1, 76, 41, 1) 0%, rgba(35, 240, 11, 1) 100%) !important;
    text-align: center;
}

.about-text {
    width: 50%;
    align-self: center;
}

.about-text p {
    line-height: 25px;
}

.video-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 3rem;
    text-align: center;
}

.video-banner {
    height: 60vh;
    width: 60%;
    border-radius: 10px;
    margin-top: 2rem;
}

.video-section a {
    text-decoration: underline;
    color: var(--dark-blue);
}

@media (max-width: 499px) {
    article {
        flex-direction: column;
    }

    .about-img,
    .about-text,
    .video-banner {
        width: 100%;
    }

    h1 {
        font-size: 4rem;
    }
}</style>
