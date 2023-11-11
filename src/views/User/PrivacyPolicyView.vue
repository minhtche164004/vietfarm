<template>
    <main-header />
    <sub-header heading="Chính sách và quy định" />
    <div class="container">
        <div class="map-section">
            <div class="map-details">
                <!-- <span>Get in touch</span> -->
                <h3>Chính sách bảo mật</h3>
                <h4>Mục đích và phạm vi thu thập</h4>
                <p>Trong quá trình giao dịch thanh toán tại website www.vietfarm.com, chúng tôi chỉ lưu giữ thông tin chi
                    tiết về đơn hàng đã thanh toán của thành viên, các thông tin về số tài khoản ngân hàng của thành viên sẽ
                    không được lưu giữ.<br><br>

                    Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng
                    ký, mật khẩu và hộp thư điện tử của mình. Ngoài ra, thành viên có trách nhiệm thông báo kịp thời cho
                    webiste ww.vietfarm.com về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng
                    ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
                </p>
                <h3>Mục đích và phạm vi thu thập</h3>
                <h4>Chính sách đổi trả hàng</h4><br>
                <h4>1. Đổi hàng</h4>
                <p>Đối với đơn hàng chưa được giao: Sau khi đặt hàng, nếu khách hàng không ưng ý với đơn hàng vừa đặt và
                    muốn thay đổi thì vui lòng liên hệ với chúng tôi và cung cấp số điện thoại kèm mã đơn hàng (#XXXX) để
                    yêu cầu đổi, tăng, giảm sản phẩm hoặc số lượng.<br>

                    Đối với đơn hàng đã được giao: Sau khi mua hàng, nếu quý khách hàng không thích sản phẩm vừa mua thì
                    hoaquasay.vn sẽ nhận đổi lại sản phẩm khác hoàn toàn miễn phí.<br><br>

                    - Sản phẩm phải được bảo quản kỹ lưỡng, không móp méo, có dấu hiệu bị bóc,mở hộp.<br><br>
                    - Vietfarm không giải quyết đổi nếu quý khách không mang theo hóa đơn bán hàng.<br><br>
                    - Thời hạn đổi hàng là 05 ngày kể từ khi quý khách nhận được sản phẩm.</p><br>
                <h4>2. Trả hàng</h4>
                <p>
                    Đối với đơn hàng chưa được giao: Sau khi đặt hàng, nếu khách hàng không ưng ý với đơn hàng vừa đặt và
                    muốn thay đổi thì vui lòng liên hệ với chúng tôi và cung cấp số điện thoại kèm mã đơn hàng (#XXXX) để
                    yêu cầu đổi, tăng, giảm sản phẩm hoặc số lượng.<br><br>

                    Đối với đơn hàng đã được giao: Sau khi mua hàng, nếu quý khách hàng không thích sản phẩm vừa mua thì
                    hoaquasay.vn sẽ nhận đổi lại sản phẩm khác hoàn toàn miễn phí.<br><br>

                    - Sản phẩm phải được bảo quản kỹ lưỡng, không móp méo, có dấu hiệu bị bóc,mở hộp.<br><br>
                    - Vietfarm không giải quyết đổi nếu quý khách không mang theo hóa đơn bán hàng.<br><br>
                    - Thời hạn đổi hàng là 05 ngày kể từ khi quý khách nhận được sản phẩm.</p>
                <h4>3. Chính sách giao hàng</h4>
                <p>Ngoài mức phí được liệt kê bên dưới, chúng tôi cam kết sẽ giao sản phẩm đúng số lượng – đúng chất lượng –
                    đúng với thông tin nêu trên website đến tận nhà cho bạn trong thời gian sớm nhất có thể và không phải
                    chi trả thêm bất cứ phí phát sinh nào!<br><br>

                    Phí ship: Freeship với đơn hàng trên 500.000 VNĐ, phí ship tùy vào khoảng cách xa gần. >5km phí ship
                    25-35k</p>
            </div>

        </div>


    </div>
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, ActionButton, MainHeader, MainFooter },
    name: "ContactView",
    data() {
        return {
            employers: [
                {
                    image: require("@/assets/images/people/lephuonglien.jpg"),
                    name: "Lê Phương Liên",
                    position: "Chief Execution Officer (CEO)",
                    phone: "0888749551",
                    email: "lienlp@vietfarm.vn",
                },
                {
                    image: require("@/assets/images/people/nguyendiepanh.jpg"),
                    name: "Nguyễn Diệp Anh",
                    position: "Chief Marketing Officer (CMO)",
                    phone: "0355486388",
                    email: "anhnd@vietfarm.vn",
                },
                {
                    image: require("@/assets/images/people/nguyenphuonguyen.jpg"),
                    name: "Nguyễn Phương Uyên",
                    position: "Creative",
                    phone: "0393529541",
                    email: "uyennp@vietfarm.vn",
                },
                {
                    image: require("@/assets/images/people/tranngocthuong.jpg"),
                    name: "Trần Ngọc Thương",
                    position: "Chief Financial Officer (CFO) and Human Resources (HR)",
                    phone: "0989924799",
                    email: "thuongtn@vietfarm.vn",
                },
                {
                    image: require("@/assets/images/people/hoangminhhung.jpg"),
                    name: "Hoàng Minh Hùng",
                    position: "IT Support",
                    phone: "0971617185",
                    email: "hunghm@vietfarm.vn",
                },
                {
                    image: require("@/assets/images/people/trinhcongminh.jpg"),
                    name: "Trịnh Công Minh",
                    position: "Chief technology officer (CTO)",
                    phone: "0366780698",
                    email: "minhtc@vietfarm.vn",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Map */
.map-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3rem;
}

.map-details {
    width: 100%;
}

span {
    text-transform: uppercase;
    font-size: 1.5rem;
}

.map-details h3 {
    padding-block: 2rem;
    font-size: 2.7rem;
    line-height: 35px;
}

.map-details h4 {
    font-size: 1.6rem;
    padding-bottom: 1rem;
}

li {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.map {
    width: 55%;
    height: 400px;
}

.map iframe {
    width: 100%;
    height: 100%;
}

/* Form */

.form-section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-block: 5rem;
    gap: 3rem;
}

form {
    width: 70%;
}

form h3 {
    padding-block: 2rem;
}

.form-control {
    padding-bottom: 2rem;
}

input,
textarea {
    width: 100%;
    border: 1px solid lightgrey;
}

input:hover,
textarea:hover {
    outline: none;
    border: 1px solid black;
}

/* Employers section */
.employer {
    display: flex;
    gap: 2rem;
    padding-bottom: 2.5rem;
}

.employer-img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
}

.employer-img img {
    max-width: 100%;
    height: auto;

}

.employer-info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.employer-info h4 {
    font-weight: 500;
    font-size: 2rem;
}

.employer-info p {
    padding: 0;
    font-size: 1.5rem;
}

@media (max-width: 799px) {
    form {
        width: 50%;
    }
}

@media (max-width: 599px) {
    .map-section {
        flex-direction: column;
    }

    .map-details,
    .map,
    form {
        width: 100%;
    }

    form h3 {
        font-size: 2.7rem;
    }

    .form-section {
        flex-direction: column;
        gap: 3rem;
    }
}</style>
