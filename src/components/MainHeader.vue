<template>
    <header>
        <div class="container">
            <nav class="top__navigation">
                <router-link to="/">
                    <img src="../assets/images/logo.png" height="40" alt="">
                    <!-- <h3 class="logo">Buy-It</h3> -->
                </router-link>

                <div class="nav__links" :class="{ activeNav: showSideNav }">
                    <svg @click="hideNav" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                        class="bi bi-x-lg close-btn" viewBox="0 0 16 16">
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                    <router-link @click="hideNav" to="/">Trang chủ</router-link>
                    <router-link @click="hideNav" to="/about">Giới thiệu</router-link>
                    <router-link @click="hideNav" to="/shop">Sản phẩm</router-link>
                    <router-link @click="hideNav" to="/blog">Blog</router-link>
                    <router-link @click="hideNav" to="/contact">Hỗ trợ</router-link>
                    <router-link @click="hideNav" to="/cart" class="desktop-cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                            class="bi bi-bag" viewBox="0 0 16 16">
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                        <div class="qty" v-if="cart.length >= 1">
                            <span>{{ cart.length }}</span>
                        </div>
                    </router-link>
                    <template v-if="!user">
                        <router-link @click="hideNav" to="/login" class="auth-link">Đăng nhập</router-link>
                        <router-link @click="hideNav" to="/signup" class="auth-link">
                            <action-button>Đăng kí</action-button>
                        </router-link>
                    </template>

                    <template v-else>
                        <button class="log-out auth-link" @click="logout" aria-label="mobile logout">
                            Logout
                        </button>
                        <button aria-label="desktop logout" @click="showDropDown = !showDropDown" class="nav-profile">
                            <img :src="getHash" :alt="user.first_name + ' ' + user.last_name" />
                            <span class="name">&#128075; Hi, {{ user.first_name }}!</span>

                            <svg @mouseenter="showDropDown = !showDropDown" xmlns="http://www.w3.org/2000/svg" width="18"
                                height="18" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <div class="dropdown" v-if="showDropDown" @mouseleave="showDropDown = !showDropDown">
                                <div class="dropdown-profile">
                                    <span>Signed in as</span>
                                    <span class="dropdown-name">{{
                                        user.first_name + " " + user.last_name
                                    }}</span>
                                </div>
                                <router-link :to="{ name: 'shop' }" class="dropdown-link" aria-label="Go to shop">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                        class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                        <path fill-rule="evenodd"
                                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                    </svg>
                                    <span>Go to Shop</span>
                                </router-link>
                                <button @click="logout" class="dropdown-link" aria-label="Logout">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                        class="bi bi-power dropdown-logout" viewBox="0 0 16 16">
                                        <path d="M7.5 1v7h1V1h-1z" />
                                        <path
                                            d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                                    </svg>
                                    <span>Logout</span>
                                </button>
                            </div>
                        </button>
                    </template>
                </div>

                <div class="mobile-menu">
                    <router-link to="/cart" class="mobile-cart" aria-label="Go to cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                            class="bi bi-bag" viewBox="0 0 16 16">
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                        <div class="qty" v-if="cart.length >= 1">
                            <span>{{ cart.length }}</span>
                        </div>
                    </router-link>

                    <svg @click="showNav" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                        class="bi bi-list open-btn" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import ActionButton from "./ActionButton.vue";

export default {
    components: { ActionButton },
    name: "MainHeader",
    props: {
        msg: String,
    },
    data() {
        return {
            showSideNav: false,
            showDropDown: false,
        };
    },
    methods: {
        ...mapActions(["remove_user"]),
        ...mapMutations(["setProductsFix"]),
        showNav() {
            this.showSideNav = true;
        },
        hideNav() {
            this.showSideNav = false;
        },
        logout() {
            this.remove_user();
            this.$router.push("/login");
        },
    },
    computed: {
        ...mapState(["user", "cart"]),
        ...mapGetters(["getHash"]),
    },
    created() {
        this.setProductsFix([
            { _id: 1, brand: "Minh Duong", currency: "VND", description: "- Vỏ xíu páo vàng ươm, nhân bùi béo ngậy, dậy mùi của thịt, tiêu xay. Các vị hòa quyện vào nhau khiến bánh trở thành món quà vặt thú vị của người dân thành Nam. Bánh xíu páo với hình dáng nhỏ xinh đã theo chân người Hoa đến Nam Định từ rất lâu. <br> - Để làm bánh ngon, người ta thường ướp thịt lợn thăn với tỏi băm nhỏ, ngũ vị hương, dầu hào, mật ong rồi đem rán cho đến khi chuyển sang màu cánh gián và thơm nức. Thịt xá xíu được cắt hột lựu trộn cùng với mộc nhĩ, mỡ lợn và nửa quả trứng gà luộc làm nhân. Vỏ bánh được làm từ bột mì. Một điều thú vị khi nếm thử bánh xíu páo chính là món bánh này có đến 8 lớp vỏ. Cách làm vỏ bánh tương tự như khi làm bột ngàn lớp của bánh sừng bò. Đếm đủ sẽ thành 8 lớp khác nhau khi hoàn thành vỏ bánh.Sản phẩm luôn có sẵn tại VietFarm, khi mua khách hàng cho lên chảo tầm 5 phút hoặc cho vào nồi chiên không dầu 160 độ 4 phút", in_stock: true, name: "Bánh xíu páo", gender: null, price: 8000, images: ["https://cf.shopee.vn/file/sg-11134201-23020-kkgxl00m89mv7a_tn", "https://cdn.tgdd.vn/Files/2021/07/24/1370531/cach-lam-banh-xiu-pao-dac-san-nam-dinh-mem-ngon-hap-dan-202201061132154649.jpg","https://giavi.net/wp-content/uploads/2023/03/banh-xiu-pao.jpg.webp","https://cafefcdn.com/203337114487263232/2022/8/30/photo-1-16618498406131690204041.jpg"] },
            {
                _id: 2, brand: "Kim Thành Hoa", currency: "VND", description: "Kẹo Sìu Châu hay còn được gọi là kẹo lạc Sìu Châu, là một món ngon thơm ngon và độcg. Tên gọi này đề xuất xuất hiện kỳ thú và tò mò từ người thưởng thức. Từ lâu đời, cái tên Kẹo Sìu Châu đã liên quan mật thiết đến một cửa hàng làm kẹo ngon nằm bên bờ sông Vị Hoàng ở Nam Định.<br>" +

                    "Nguyên liệu cần thiết để làm kẹo Sìu Châu dễ tìm và bao gồm lạc, vừng, đường, và mạch nha. Lạc phải được tuyển chọn kỹ năng càng cao từ những hạt lạc lớn, đầy vị trí, vỏ bóng và ngọc, và sau khi rang chín, chúng trở nên giòn, thơm, và vỏ lạc săn chắc. Về vừng, có thể sử dụng cả vừng trắng và vừng đen, mỗi loại mang đến cho Kẹo Sìu Châu hương vị và màu sắc đặc biệt. Sau khi rang chín, vừng và lạc được chia vỏ và dọn dẹp sẽ.<br>" +

                    "Bước tiếp theo là nấu đường và mạch nha trên bếp lớn. Khi hết đường bắt đầu sôi động, câu lạc bộ và ngừng được đưa vào và cảm giác đều. Quá trình này kéo dài cho đến khi lạc và vừng hòa quyện với nhau và tạo ra một lớp vỏ màu nâu hồng đẹp mắt. Cuối cùng, bộ đệm đã được làm nóng lên một khay. Bề mặt của kem phủ phấn giúp chống thấm và sau đó được cuốn mờ. Cuối cùng, được cắt thành từng phần hoặc thành những miếng vuông nhỏ tiện lợi cho việc thưởng thức.<br>" +

                    "Mỗi gói kẹo Sìu Châu lạc có vị giòn ngon, thơm bùi và ngọt ngào, không gây nguy hiểm cho răng. Khi thưởng thức Kẹo Sìu Châu cùng với một tách trà nóng trong không gian se lạnh, bạn sẽ được tận hưởng trải nghiệm thú vị và không thể nào quên.", in_stock: true, name: "Kẹo sìu châu Kim Thành Hoa", gender: null, price: 147000, images: ["https://sg-test-11.slatic.net/p/9bc1943ecef55e6679acc7889ab6b6ad.jpg"]
            },
            {
                _id: 3, brand: "Minh Duong", currency: "VND", description: "Nem nắm Giao Thủy là một món ngon độc đáo đến từ vùng Giao Thủy, tỉnh Nam Định, Việt Nam. Món này nổi tiếng với cách làm độc đáo và hương vị đặc trưng.<br>" +

                    "Nem nắm Giao Thủy được làm từ những lớp bánh tráng mỏng được thoa một lớp nước mắm pha chua cay đặc biệt, sau đó chế biến cùng với thịt lợn, tôm, và nhiều loại rau sống tươi ngon. Món nem nắm này được cuốn thành từng chiếc lớn, được cắt thành từng miếng nhỏ và thường được ăn kèm với nhiều loại gia vị và lá rau sống.<br>" +

                    "Với hương vị thanh mát, ngon miệng và hấp dẫn, nem nắm Giao Thủy là món ăn truyền thống không thể thiếu trong các dịp lễ hội và cuộc họp mặn mà của người dân Giao Thủy. Nó là biểu tượng của nền ẩm thực độc đáo và văn hóa ẩm thực của vùng đất Giao Thủy, Nam Định.", in_stock: true, name: "Nem nắm Giao Thủy Bình Trọng", gender: null, price: 55000, images: ["https://dacsanthanhnam.com/wp-content/uploads/2020/08/dac-san-nem-nam-giao-thuy.jpg"]
            },
            {
                _id: 4, brand: "Minh Duong", currency: "VND", description: "Người Hải Hậu ai mà không nhớ đến bánh chưng bà Thìn như một niềm tự hào. Từ thuở nhỏ tôi đã được nghe tiếng bánh chưng bà Thìn. Có lần, quần đùi, chân đất, mấy đứa rủ nhau quốc bộ hơn chục cây số lên phố huyện, chung tiền mua một cái bánh chưng của bà ăn cho biết. Có đêm mơ được ăn bánh chưng bà Thìn đến đã đời. Lớn lên, đi bộ đội gần chục năm trời, khi khoác ba lô trở về vẫn chẳng quên dừng chân phố huyện mua bánh chưng bà Thìn.<br>" +
                    "“Ai qua Yên Định hãy dừng <br>" +
                    "Hương quê xin nếm bánh chưng bà Thìn”<br>" +
                    "Bánh chưng của bà Thìn có từ năm 1948. Sau này khi chồng bà qua đời, bà ở vậy nuôi 3 con nên người cũng nhờ vào nghề làm bánh chưng. Bà trở thành ấn tượng là từ khi Không lực Hoa Kỳ chọn Hải Hậu làm túi đựng bom đạn trước khi máy bay hốt hoảng lao ra Biển Đông. Giữa thị trấn Yên Định cạnh bến xe là cái quán cóc tuềnh toàng. Trên chõng tre là đĩa bánh chưng và bộ chén uống nước. Oai vệ nhất là cái điếu cày với hai chân choãi ra như khẩu súng trực chiến, sẵn sàng nuốt lửa, nhả khói làm tê liệt đối phương. Ấm chè xanh ủ trong rành tích sởi lởi bốn mùa cùng nụ cười đôn hậu thoáng buồn xa xăm của một phụ nữ luống tuổi luôn là nơi đầy ắp tiếng cười, nói lạc quan của khách kể cả lúc ánh đèn chai vụt tắt khi có thằng “Thần sấm” cắn trộm ào qua đêm.<br>"
                , in_stock: true, name: "Bánh chưng bà Thìn", gender: null, price: 35000, images: ["https://i.ytimg.com/vi/QUwaTQhb6aE/sddefault.jpg"]
            },
            {
                _id: 5, brand: "Minh Duong", currency: "VND", description: "Thành phần bịch trà cà gai leo Thái Hưng<br>" +

                    "Cà gai leo        : 65%<br>" +
                    "Mật nhân        : 20%<br>" +
                    "Diệp hạ châu   : 10%<br>" +
                    "Cỏ ngọt : 5%<br>" +
                    "Theo dự án nghiên cứu khoa học về dược liệu cà gai leo của Bộ Khoa học công nghệ được Hội đồng chuyên môn GS.TS Phạm Thanh Kỳ thông qua, Thái Hưng đã nghiên cứu và phân tích mẫu dược liệu cà gai.<br>" +
                    "Vị ngọt trong sản phẩm là vị ngọt đơn tính từ cỏ ngọt, không sinh năng lượng<br>" +
                    "&nbspCách dùng bịch trà cà gai leo Thái Hưng:<br>" +
                    "Ngâm túi trà và 1 bông hoa (có trong hộp trà) vào trong 200ml nước sôi (100oC), sử dụng sau 3-5 phút. Có thể thêm đá nếu thích. Mỗi ngày nên dùng 3-5 túi lọc.<br>" +
                    "Để thu được đầy đủ hoạt chất tốt nên cho vào đun sôi hoặc pha trong bình thủy.<br>" +
                    "Sản phẩm là kết quả của Dự án nghiên cứu khoa học về trồng và bảo tồn dược liệu theo Quyết định số 3234/QĐ-BKHCN của Bộ Khoa học công nghệ. Giống và dược liệu đạt chuẩn GACP-WHO", in_stock: true, name: "Trà cà gai leo Thái Hưng", gender: null, price: 80000, images: ["https://lzd-img-global.slatic.net/g/p/ef73b8344f8824e94771c7bcd78601ac.jpg_720x720q80.jpg"]
            },
        ]);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    background-color: lavender;
    box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.03);
    padding-block: 10px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 3;
}

.top__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: linear-gradient(90deg, rgba(1, 76, 41, 1) 0%, rgba(35, 240, 11, 1) 100%);
    font-weight: 700;
    letter-spacing: 2px;
}

.nav__links a,
.log-out {
    padding-inline: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--dark-blue);
    transition: all 0.25s ease-in-out;
    line-height: 2rem;
}

.nav__links .log-out {
    background-color: transparent;
}

a.active__page,
.nav__links a:hover,
.mobile-menu a:hover {
    color: var(--dark-blue);
}

.nav__links {
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav__links a::after,
.mobile-menu a::after {
    content: "";
    display: block;
    position: relative;
    top: 2px;
    height: 2px;
    left: 0;
    width: 0;
    background-color: var(--dark-blue);
    border-radius: 6px;
    transition: width 0.25s ease;
}

.nav__links a:hover::after,
.mobile-menu a:hover::after {
    width: 70%;
}

.nav__links a.router-link-exact-active::after {
    width: 70%;
}

.nav__links .auth-link::after,
.dropdown .dropdown-link::after {
    display: none;
}

.desktop-cart {
    display: initial;
    position: relative;
}

.mobile-menu {
    display: none;
}

.close-btn {
    display: none;
    font-size: 2.1rem;
    cursor: pointer;
}

.qty {
    height: 18px;
    width: 18px;
    text-align: center;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--dark-blue);
    font-size: 14px;
    color: white;
    font-weight: 500;
    position: absolute;
    top: -4px;
    right: 4px;
}

.nav-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    margin-left: 15px;
    background: transparent;
}

.nav-profile img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
}

.nav-profile .name {
    font-size: 1.8rem;
}

.nav-profile svg {
    font-size: 1.8em;
    cursor: pointer;
    font-weight: 900;
}

.dropdown {
    background-color: white;
    z-index: 2;
    border-radius: 8px;
    border: 1px solid var(--grey-2);
    position: absolute;
    top: 35px;
    right: 0;
    transition: 0.25s;
    width: 170px;
}

.dropdown-profile {
    padding: 10px;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-bottom: 1px solid var(--grey-2);
}

.dropdown svg {
    font-size: 1.6rem;
    cursor: pointer;
    font-weight: 900;
}

.dropdown .dropdown-logout {
    font-size: 1.7rem;
}

.dropdown .dropdown-link {
    font-size: 1.6rem;
    color: #222;
    background-color: transparent;
    padding: 10px;
    width: 100%;
    transition: background-color 0.25s;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    font-weight: 400;
}

.dropdown .dropdown-link:hover {
    color: var(--dark-green);
}

.dropdown-name {
    font-weight: 500;
}

.log-out {
    display: none;
}

/* Media Query */

@media (max-width: 870px) {
    .mobile-menu {
        display: flex;
        gap: 1.5rem;
        color: var(--text);
    }

    .mobile-menu svg {
        cursor: pointer;
        font-size: 2rem;
    }

    .mobile-menu .open-btn {
        font-size: 2.4rem;
        font-weight: 900;
    }

    .nav__links {
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2.2rem;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: -55%;
        width: 55%;
        z-index: 2;
        padding: 2rem 3rem;
        background-color: white;
        height: 100%;
        box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
        transition: 0.25s;
    }

    .activeNav {
        right: 0;
    }

    .nav__links a,
    .log-out {
        padding: 0.5rem 0;
        font-size: 1.8rem;
    }

    .nav__links a {
        width: 100%;
    }

    .nav__links a:hover::after {
        width: 2.5rem;
    }

    .nav__links a.router-link-exact-active::after {
        width: 2.5rem;
    }

    .close-btn {
        display: initial;
    }

    .desktop-cart {
        display: none;
    }

    .mobile-cart {
        position: relative;
        z-index: 1;
    }

    .qty {
        align-items: center;
    }

    .log-out {
        display: initial;
    }

    .nav-profile {
        display: none;
    }
}
</style>
