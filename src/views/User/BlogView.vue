<template>
    <main-header />
    <sub-header heading="#Blog" subHeading="Read our latest blog posts" />
    <div class="container">
        <blog-posts
            v-for="(blog, index) in blogs"
            :key="index"
            :date="blog.date"
            :image_url="blog.img"
            :title="blog.title"
            :content="blog.content"
        />
    </div>

    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import BlogPosts from "@/components/BlogPosts.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, BlogPosts, MainHeader, MainFooter },
    name: "BlogView",
    data() {
        return {
            blogs: [
                {
                    date: "13/01",
                    img: "https://product.hstatic.net/200000450007/product/khoai-lang_99719e0ac98e41b8925a878cd9955caf_grande.png",
                    priority: "high",
                    title: "Những sản phẩm bán chạy nhất của VietFarm",
                    // content:
                    //     "Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard...",
                },
                {
                    date: "13/04",
                    img: "https://sakurabeauty.com.vn/ckfinder/userfiles/images/atiso.png",
                    title: "Uống trà thảo mộc hằng ngày có lợi cho sức khỏe như thế nào?",
                    // content:
                    //     "Uống trà thảo mộc hằng ngày có lợi cho sức khỏe như thế nào?",
                },
                {
                    date: "12/01",
                    img: "https://media3.scdn.vn/img4/2022/05_23/6L9Ip970185hl63Ayoq1.jpg",
                    title: "Cách ăn gạo lứt đúng cách. Mách bạn 3 loại gạo lứt đặc biệt tại VietFarm",
                    // content:
                    //     "Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard...",
                },
                {
                    date: "16/01",
                    img: "https://nongsanviet.net.vn/sites/default/files/mat_ong_lam_son_5.jpg",
                    title: "Uống mật ong buổi sáng có tác dụng đặc biệt gì? Các lợi ích sức khỏe mà bạn không ngờ tới",
                    // content:
                    //     "Kickstarter man braid godard coloring book. Raclette waistcoast selfies yr wolf chartreuse hexagon irony, godard...",
                },
                // {
                //     date: "06/07",
                //     img: require("@/assets/images/blog/b6.webp"),
                //     title: "Mixing The Right Colors in 2022",
                //     content:
                //         "From the beginning of the year we have had customers ask our designers how to mix and get perfect colors ...",
                // },
            ],
        };
    },
};
</script>
