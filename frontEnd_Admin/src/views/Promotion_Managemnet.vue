<template>
    <div class="container">
        <h3 class="text-center font-weight-bold" style="padding: 30px;color: #356859;">CHƯƠNG TRÌNH KHUYẾN MÃI</h3>
        <hr />
        <button type="button" class="btn btn-outline-primary" data-bs-whatever="@getbootstrap">Thêm khuyến mãi<i
                class="fas fa-solid fa-plus"></i></button>
        <div class="table-responsive">
            <h4 class="text-center" style="color: blue;">Danh sách chương trình khuyến mãi</h4>
            <v-table fixed-header height="300px">
                <thead class="table-active">
                    <tr>
                        <th>STT</th>
                        <th>Tên KM</th>
                        <th>Số lượng sản phẩm khuyến mãi</th>
                        <th>Giá trị khuyến mãi(%)</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Sửa/Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="( item, index) in promotionList" :key="item.id">
                        <th>{{ index + 1 }}</th>
                        <th>{{ item.name }}</th>
                        <th>{{ item.numberBook }}</th>
                        <th>{{ item.pricePro }}</th>
                        <th>{{ item.dateBegin }}</th>
                        <th>{{ item.dateEnd }}</th>
                        <th>
                            <span style="margin-right: 5px;" type="button" @click="popBookList(item)"
                                class="badge bg-warning"><i class="fas fa-regular fa-pen-to-square"></i></span>
                            <span type="button" @click="popBookList(item)" class="badge bg-danger">X</span>
                        </th>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </div>
</template>

<script>
import { useDataStore } from '../stores/dataStores'
export default {
    data() {
        return {
            promotionList: useDataStore().getPromotionList,
        }
    }
}
</script>