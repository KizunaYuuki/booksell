<template>
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <h6>Số lượng đơn hàng chờ xác nhận: {{ orderList.length }}</h6>
        <div class="border" style="margin: 20px auto; width: 80%;" v-for="item in orderList" :key="item.id">
            <div style="padding: 20px;">
                <div class="row">
                    <div class="col">
                        <p>Mã đơn hàng: {{ item.id }}</p>
                        <p>Ngày đặt hàng hàng: {{ item.orderDate }}</p>
                        <p>Hình thức thanh toán: {{ item.payments }}</p>
                        <p style="display: flex;">Trạng thái đơn hàng:
                        <p style="color: blue;"> {{ item.status }}</p>
                        </p>
                    </div>
                    <div class="col">
                        <p>Tên người nhận hàng: {{ item.nameCustomer }}</p>
                        <p>Số điện thoại: {{ item.phone }}</p>
                        <p>Địa chỉ nhận hàng: {{ item.address }}</p>
                    </div>
                </div>
                <h5>Thông tin đặt hàng</h5>
                <v-table fixed-header height="300px">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá gốc (&#8363;)</th>
                            <th>Giá khuyến mãi (&#8363;)</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(index, i) in item.orderProduct" :key="index.id">
                            <th>{{ i + 1 }}</th>
                            <th>{{ index.name }}</th>
                            <th>{{ index.number }}</th>
                            <th>{{ index.price }}</th>
                            <th>{{ index.pricePro }}</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th colspan="5">Tổng tiền hàng</th>
                            <th>{{ item.totalProduct }}</th>
                        </tr>
                        <tr>
                            <th colspan="5">Phí vận chuyển</th>
                            <th>{{ item.transportFee }}</th>
                        </tr>
                        <tr>
                            <th colspan="5">Tổng thanh toán</th>
                            <th>{{ item.totalPayment }}</th>
                        </tr>
                    </tbody>
                </v-table>
                <div style="text-align: center;">
                    <button class="btn btn-primary" style="margin-right: 20px;">Xác nhận</button>
                    <button class="btn btn-danger">Hủy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useDataStore } from '../stores/dataStores';
export default {
    data() {
        return {
            orderList: useDataStore().getOrderConfirmation,
        }
    },
    methods: {
        orderNumber() {
            this.$emit('info', this.orderList.length)
            console.log(this.orderList.length)

        }
    },
    mounted() {
        this.orderNumber()
    }
}
</script>