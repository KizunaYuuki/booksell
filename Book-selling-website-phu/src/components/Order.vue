<template>
    <div class="container border rounded mb-4 pb-2">
    <div class="row testr">
        <div class="col oder" v-for="(itemOrder, indexOrder) in itemsOrder" :key="indexOrder" @click="selectItemOrder(indexOrder)"
            :class="{ red: indexOrder === selectedIndexOrder }">
            {{ itemOrder }}
        </div>
    </div>
</div>
    <div v-show="selectedIndexOrder=== 0" class="container border rounded px-4 pb-2">
        <div class="row testr">
            <div class="col oder2" v-for="(item2) in item2">
                {{ item2 }}
            </div>
        </div>
        <div class="row ">
            <div class="col oder2" v-for="(item3) in item3">
                {{ item3 }}
            </div>
        </div>
    </div>

</template>
<script >
export default {

    data() {
        return {
            itemsOrder: ["Tất cả", "Chờ thanh toán", "Đang giao", "Hoàn tất", "Đã hủy"],
            item2: ["Mã đơn hàng", "Ngày mua", "Ngày nhận", "Trạng thái", ""],
            item3: ["000000001", "25/02/2023", "26/02/2023", "Đã nhận", "Xem chi tiết"],
            selectedIndexOrder: 0
        };
    },
    methods: {
        selectItemOrder(indexOrder) {
            this.selectedIndexOrder = indexOrder;
        }
    }
};
</script>
<style>
.testr {

    margin-bottom: 1%;
}

.oder {
    border-right: 1px solid #58626B;
    text-align: center;
    font-weight: bold;
}

.oder2 {
    border-bottom: 1px solid #d4d7d9;
    text-align: center;

}

.oder:hover {
    color: red;
}</style>