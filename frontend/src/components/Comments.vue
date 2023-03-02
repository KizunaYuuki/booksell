<template>
    <!-- Người đánh giá  -->
    <div class="align-middle px-3">
        <strong>Thanh</strong>
    </div>

    <!-- Đánh giá sao  -->
    <div class="align-middle px-3" style="display: flex; align-items: flex-start;">
        <star-rating class="" :show-rating="false" rating="4" star-size="24" />
        <span class="m-1 text-muted fs-6">23/12/2022</span>
    </div>

    <!-- Bình luận  -->
    <div class="align-middle px-3">
        <p>Trò chơi tuyệt vời, vui vẻ và giết thời gian. Nhân vật tuyệt vời, đồ họa tuyệt đẹp cho thiết bị di động và các bước di chuyển đẹp mắt trông tuyệt vời và cảm thấy hài lòng. Tuy nhiên, các cuộc đấu tay đôi là không cân bằng</p>
    </div>

</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    }
}
</script>