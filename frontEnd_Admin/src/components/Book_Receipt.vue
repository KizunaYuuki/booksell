<template>
    <div class="container rounded shadow-sm" style="padding: 30px; border: 1px solid #E6E6E6;" id="form">
        <h3 class="text-center">PHIẾU NHẬP HÀNG</h3>
        <hr />
        <v-form @submit.prevent class="row">
            <div class="col-sm-6">
                <v-text-field type="datetime-local" :rules="rulesDate" label="Nhập ngày"></v-text-field>
            </div>
            <div class="col-sm-6">
                <v-select label="Chọn nhà cung cấp" :rules="rules0"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="solo"></v-select>
            </div>

            <h6>Thêm sản phẩm vào phiếu nhập hàng</h6>
            <div style="padding: 10px; margin: 0 auto;" class="border  rounded ">
                <v-form @submit.prevent class="row" style="padding: 10px;">
                    <div class="col-sm-6">
                        <v-text-field list="datalistOptions" ref="nameBook" :rules="rules" label="Tên sản phẩm"
                            v-model="nameBook" @change=""></v-text-field>
                        <datalist id="datalistOptions">
                            <option v-for="item in bookList" :key="item.id" :value="item.name">{{ item.name }} | {{
                                item.author
                            }}</option>
                        </datalist>
                    </div>
                    <div class="col-sm-3">
                        <v-text-field type="number" v-model="number" :rules="rules1" label="Số lượng"></v-text-field>
                    </div>
                    <div class="col-sm-3">
                        <v-text-field type="number" :rules="rules2" v-model="price" label="Giá nhập"></v-text-field>
                    </div>
                    <v-btn @click="addItem" type="submit" class="mt-2" color="primary"
                        style="width: fit-content; margin: 0 auto;">Thêm <i class="fas fa-solid fa-plus"></i></v-btn>
                </v-form>
            </div>
            <v-table fixed-header height="300px">
                <thead class="table-active">
                    <tr>
                        <th>STT</th>
                        <th>Tên sách</th>
                        <th>Số lượng</th>
                        <th>Giá nhập (&#8363;)</th>
                        <th>Thành tiền (&#8363;)</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="( item, index) in list" :key="index">
                        <th style="width: 0;">{{ index + 1 }}</th>
                        <th>{{ item.name }}</th>
                        <th>{{ item.number }}</th>
                        <th>{{ item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) }}</th>
                        <th>{{ item.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) }}</th>
                        <th style="width: 0;"><span type="button" @click="popList(item)" class="badge bg-danger">X</span>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2">Tổng cộng</th>
                        <th colspan="4">
                            <div class="row">
                                <p class="col-6 " style="color: green;">Số lượng hàng nhập: {{ totalNumber }}</p>
                                <p class="col-6" style="color: green;">Tiền hàng: {{ totalPrice.toLocaleString('vi-VN',
                                    { style: 'currency', currency: 'VND' }) }}</p>
                            </div>
                            <div class="row">
                                <p class="col" style="color: blue;">Thanh toán: {{ payment.toLocaleString('vi-VN',
                                    { style: 'currency', currency: 'VND' }) }}
                                    <v-text-field type="number" v-model="payment" @change="payments"></v-text-field>
                                </p>
                                <p class="col" style="color: red;">Còn nợ: {{ owe.toLocaleString('vi-VN', {
                                    style:
                                        'currency', currency: 'VND'
                                }) }}</p>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </v-table>
            <hr style="margin: 5px;" />
            <v-btn @click="saveForm" type="submit" class="mt-2" color="secondary"
                style="width: fit-content; margin: 0 auto;font-size: larger;font-weight: 600;">Lưu</v-btn>
        </v-form>
    </div>
    <!-- //modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm nhà cung cấp mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Tên nhà cung cấp:</label>
                            <input type="text" class="form-control" id="recipient-name" required>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Địa chỉ nhà cung cấp:</label>
                            <input type="text" class="form-control" id="recipient-name" required>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Số điện thoại nhà cung cấp:</label>
                            <input type="text" class="form-control" id="recipient-name" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Lưu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import { useDataStore } from '../stores/dataStores';
export default {
    data: () => ({

    }),
    data() {
        return {
            list: [],
            nameBook: "",
            bookList: useDataStore().getBooks,
            number: 0,
            price: 0,
            totalNumber: 0,
            totalPrice: 0,
            payment: 0,
            owe: 0,
            oweMoney: '',
            totalPriceMoney: '',
            dateReceipt: Date,
            selectSupplier: "",
            firstName: '',
            rules: [
                value => {
                    if (value) return true
                    return 'Bạn chưa nhập giá trị.'
                },
            ],
            rules1: [
                value => {
                    if (value) {
                        if (value > 0)
                            return true
                        return 'Số lượng nhập ít nhất là 1.'
                    }
                    return 'Bạn chưa nhập giá trị.'
                },
            ],
            rules2: [
                value => {
                    if (value) {
                        if (value >= 1000)
                            return true
                        return 'Giá nhập ít nhất là 1000.'
                    }
                    return 'Bạn chưa nhập giá trị.'
                },
            ],
            rules0: [
                value => {
                    if (value) {
                        return true
                    }
                    return 'Bạn chưa chọn nhà cung cấp.'
                },
            ],
            rulesDate: [
                value => {
                    if (value) {
                        return true
                    }
                    return 'Bạn chưa nhập ngày.'
                },
            ],
        }
    },
    methods: {
        addItem() {
            if (this.nameBook !== '' && this.number !== 0 && this.price >= 1000) {
                var a = this.list.filter(i => i.name === this.nameBook)
                console.log(a)
                if (a.length === 0) {
                    var item = {
                        name: this.nameBook,
                        number: this.number,
                        price: Number(this.price),
                        total: this.number * this.price
                    }
                    this.totalNumber = Number(this.totalNumber + item.number);
                    this.totalPrice = Number(this.totalPrice + item.total)
                    this.owe = Number(this.totalPrice - this.payment)
                    this.list.push(item)
                    this.nameBook = ''
                    this.number = 0
                    this.price = 0
                }
                else {
                    toast.error("Sách " + this.nameBook + " đã tồn tại!", {
                        transition: toast.TRANSITIONS.SLIDE,
                    });
                }
            }
        },
        payments() {
            this.payment = Number(this.payment)
            this.owe = this.totalPrice - this.payment

        },
        popList(e) {
            console.log(e)
            this.totalNumber = Number(this.totalNumber + item.number);
            this.totalPrice = Number(this.totalPrice + item.total)
            this.owe = Number(this.totalPrice - this.payment)
            this.list = this.list.filter(item => item !== e)

        },
        saveForm() {
            const form = document.getElementById('form');

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                var formData = new FormData;
                formData.append("dateReceipt", this.dateReceipt)
                formData.append("supplier", this.selectSupplier)
                formData.append("bookList", this.list)
                formData.append("totalNumber", this.totalNumber)
                formData.append("totalPrice", this.totalPrice)
                formData.append("payment", this.payment)
                formData.append("own", this.owe)
                console.log(formData)
            })
        }
    },
    computed: {

    }
}
</script>