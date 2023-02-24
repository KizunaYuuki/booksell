<template>
    <div style="display: flex; align-items: flex-start;">
        <p style="margin: 0 10px;">Thanh</p>
        <StarRating rating="3" star-size="15"></StarRating>
        <p style="margin-left: 10px;">23/12/2022</p>
    </div>
    <div class="border rounded" style="width: fit-content; margin-top: -15px; margin-left: 15px; height: 2rem;">
        <p style="padding: 3px;">ádads</p>
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