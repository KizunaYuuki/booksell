<template>
    <div class="container " style="padding: 30px; ">
        <h3 class="text-center font-weight-bold" style="color: #356859;">QUẢN LÝ NHẬP HÀNG</h3>
        <hr />
        <div style=" margin-top: 10px;" class="row">
            <button class="btn btn-outline-primary col-sm-1"
                style="height: fit-content; margin-top: 10px; width: fit-content;">Nhập
                hàng</button>
            <div style="padding: 10px;" class="col-sm-8">
                <v-text-field list="datalistOptions" ref="search" :rules="rules"
                    label="Tìm kiếm theo mã phiếu hoặc nhà cung cấp" v-model="searchTerm" @change="search"></v-text-field>
                <datalist id="datalistOptions">
                    <option v-for="item in list" :key="item.id" :value="item.id">{{ item.date }} | {{ item.supplier
                    }}</option>
                </datalist>
            </div>
            <div class="col-sm-3 " style="margin-top: 15px;">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0"
                        ref="radio2" v-model="radio" @change="fillRadio">
                    <label class="form-check-label" for="inlineRadio2">Tất cả</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"
                        ref="radio1" v-model="radio" @change="fillRadio">
                    <label class="form-check-label" for="inlineRadio1">Trả hết</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"
                        ref="radio2" v-model="radio" @change="fillRadio">
                    <label class="form-check-label" for="inlineRadio2">Còn nợ</label>
                </div>
            </div>
            <h5 class="text-uppercase text-center" style="color: blue;">Danh sách phiếu nhập hàng</h5>
            <v-table fixed-header height="300px">
                <thead>
                    <tr>
                        <th class="text-left">STT</th>
                        <th class="text-left">Mã phiếu</th>
                        <th class="text-left">Ngày nhập</th>
                        <th class="text-left">Nhà cung cấp</th>
                        <th class="text-left">Tiền hàng</th>
                        <th class="text-left">Còn nợ</th>
                        <th class="text-left">Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="( item, index) in list" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.supplier }}</td>
                        <td>{{ item.totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) }}</td>
                        <td :style="{ color: item.own > 0 ? 'red' : 'blue' }">{{ item.own.toLocaleString('vi-VN', {
                            style:
                                'currency', currency: 'VND'
                        }) }}</td>
                        <td><span type="button" @click="popList(item)" class="badge bg-warning"><i
                                    class="fas fa-regular fa-pen-to-square"></i></span>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </div>
</template>

<script>
import { useDataStore } from '../stores/dataStores';
export default {
    data() {
        return {
            list: useDataStore().getReceiptList,
            radio: '',
        }
    },
    methods: {
        search() {
            this.list = this.list.filter(item => item.id === this.$refs.search.value)
        },
        fillRadio() {
            if (this.radio === '0') {
                this.list = useDataStore().getReceiptList
            }
            else if (this.radio === '1') {
                this.list = useDataStore().getReceiptList
                this.list = this.list.filter(item => item.own === 0)
            }
            else {
                this.list = useDataStore().getReceiptList
                this.list = this.list.filter(item => item.own > 0)
            }
        }
    }
}
</script>