<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-tooltip :text="book.name"></v-tooltip>
        <v-card class="mx-auto" width="17rem" :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }"
            v-bind="props">
            <span class="badge text-bg-danger text-uppercase"
                style="position: absolute;z-index: 2;  margin: 5px; max-height: 30px;">
                <h6 v-if="book.price !== book.originalPrice">Sale</h6>
                <h6 v-else-if="!checkMonth(book.receiptDate)">New</h6>
                <!-- <h6>Hot</h6> -->
            </span>
            <v-img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244878882.jpg" cover>
            </v-img>

            <v-card-title style="text-overflow: ellipsis;">{{ book.name }}</v-card-title>
            <v-card-subtitle class="">
                <p><span>0</span> đánh giá</p>

            </v-card-subtitle>
            <v-card-text>
                <div v-if="book.originalPrice !== book.price">
                    <div class="card-text" style=" display: flex;align-items: center; ">
                        <h4 style="font-weight: 700;color: orange; ">{{ book.price.toLocaleString('vi-VN', {
                            style: 'currency', currency:
                                'VND'
                        }) }}</h4>
                        <h6 style=" text-decoration: line-through;">{{ book.originalPrice.toLocaleString('vi-VN', {
                            style: 'currency', currency:
                                'VND'
                        }) }}</h6>

                    </div>
                    <!-- <testTime :time="book.promotionTime" @messageSent="handleMessage" /> -->
                </div>
                <div v-else>
                    <h4 style="font-weight: 700; color: red;">{{ book.price.toLocaleString('vi-VN', {
                        style: 'currency', currency:
                            'VND'
                    }) }}</h4>
                </div>

            </v-card-text>
            <v-card-actions>
                <v-btn color="orange">
                    Chỉnh sửa
                </v-btn>

                <v-btn color="red">
                    Xóa
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue';
import moment from 'moment';
import { useDataStore } from "../stores/dataStores";
// import testTime from '../components/testTime.vue'
import { Countdown } from 'vue3-flip-countdown'
export default {
    components: {
        // CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton, testTime, Countdown
        CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton, Countdown
    },
    data() {
        return {
            time: moment(new Date(), "YYYY-MM-DD HH:mm:ss")
        }
    },
    props: {
        book: Object,
    },
    methods: {
        checkMonth(date) {
            const dateToCheck = new Date(date);

            // Lấy thời gian hiện tại
            const currentTime = new Date().getTime();

            // Tính toán thời gian đã trôi qua kể từ ngày cần kiểm tra
            const timePassed = currentTime - dateToCheck.getTime();

            // Tính toán số mili giây trong 1 tháng
            const monthInMilliseconds = 1000 * 60 * 60 * 24 * 30;

            // Kiểm tra xem thời gian đã trôi qua có đủ 1 tháng hay chưa
            if (timePassed >= monthInMilliseconds) {
                return true
            }

            return false
        },
        handleMessage() {
            // this.book.promotionTime = null
            useDataStore().updateBook(this.book.id)
        }
    },
    mounted() {

    }
}
</script>
<style>
.v-card.on-hover.v-theme--dark {
    background-color: rgba(#FFF, 0.8)
}
</style>