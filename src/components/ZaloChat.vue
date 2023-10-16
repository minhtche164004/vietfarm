<template>
    <div>
        <button @click="openChat">Chat</button>
    </div>
</template>
  
<script>
export default {
    methods: {
        openZaloChat() {
            // Mở chat Zalo khi nút được click
            ZaloSocialChatPlugin.pagePlugin();
        },
        openChat() {
            // Lấy App ID từ Zalo Developer Portal
            const appId = '3251746959670763994';
            const appKey = '5p8TU22R72ebO2jgY4K2';

            // Tạo một đối tượng URL cho chat box
            const chatBoxUrl = `https://chat.zalo.me/?app_id=${appId}&app_key=${appKey}`;

            // Mở chat box trong một cửa sổ mới hoặc iframe
            window.open(chatBoxUrl, 'ZaloChat', 'width=400,height=600');
        },
        initZaloChat() {
            // Sử dụng thông tin ứng dụng từ bước 1 để khởi tạo Zalo Chat API
            const appId = '3251746959670763994';
            const appKey = '5p8TU22R72ebO2jgY4K2';

            // Tạo script thêm vào trang web để load Zalo Chat API
            const script = document.createElement('script');
            script.src = `https://sp.zalo.me/plugins/sdk.js?app_id=${appId}&app_key=${appKey}`;
            script.async = true;
            script.onload = () => {
                // Khi script đã được load thành công, bạn có thể sử dụng Zalo Chat API ở đây
                // Ví dụ:
                const options = {
                    width: 300,
                    height: 400,
                    theme: 'light',
                };
                ZaloSocialChatPlugin.pagePlugin(options);
            };
            document.head.appendChild(script);
        },
    },
};
</script>
<style scoped>
button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>

  