<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-tooltip :text="book.name"></v-tooltip>
        <v-card class="mx-auto" width="17rem" :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }"
            v-bind="props">
            <span class="badge text-bg-danger text-uppercase"
                style="position: absolute;z-index: 2;  margin: 5px; max-height: 30px;">
                <h6>{{ book.tag }}</h6>
            </span>
            <v-img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244878882.jpg" cover>
            </v-img>
            <v-card-title style="text-overflow: ellipsis;">{{ book.name }}</v-card-title>
            <v-card-subtitle class="">
                <p><span>0</span> đánh giá</p>
            </v-card-subtitle>
            <v-card-text>
                <div v-if="book.discount > 0">
                    <div class="card-text" style=" display: flex;align-items: center; ">
                        <h4 style="font-weight: 700;color: orange; ">{{ book.discount.toLocaleString('vi-VN', {
                            style: 'currency', currency:
                                'VND'
                        }) }}</h4>
                        <h6 style=" text-decoration: line-through;">{{ book.price.toLocaleString('vi-VN', {
                            style: 'currency', currency:
                                'VND'
                        }) }}</h6>
                    </div>
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
export default {
    components: {
        CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton
    },
    props: {
        book: Object,
    }
}
</script>
<style>
.v-card.on-hover.v-theme--dark {
    background-color: rgba(#FFF, 0.8)
}
</style>