<template>
    <div class="container " style="padding: 30px; ">
        <h3 class="text-center font-weight-bold" style="color: #356859;">QUẢN LÝ TÀI KHOẢN KHÁCH HÀNG</h3>
        <hr />
        <div style="padding: 15px; " class="row">
            <div class="col-sm-8">
                <v-text-field list="datalistOptions" append-inner-icon="mdi-magnify" ref="nameBook"
                    label="Tìm kiếm theo tên hoặc số điện thoại" v-model="searchTerm" @change="searchClient"></v-text-field>
                <datalist id="datalistOptions">
                    <option v-for="item in clientList" :key="item.phone" :value="item.name">{{ item.phone }}</option>
                </datalist>
            </div>
            <div class="col-sm-4">
                <v-select label="Lọc theo trạng thái" :items="['Tất cả', 'Trạng thái: Mở', 'Trạng thái: Khóa']" style=""
                    v-model="select" @update:model-value="fillList"></v-select>
            </div>
        </div>
        <div class="table-responsive">
            <h6>Số lượng: {{ clientList.length }}</h6>
            <v-table fixed-header height="350px">
                <thead>
                    <tr>
                        <th>Tên KH</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Ngày đăng ký</th>
                        <th>Trạng thái</th>
                        <th>Khóa/Mở tài khoản</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" item in clientList" :key="item.phone">
                        <th>{{ item.name }}</th>
                        <th>{{ item.phone }}</th>
                        <th>
                            <select class="form-select" id="floatingSelect" ref="year"
                                aria-label="Floating label select example">
                                <option v-for="(add, index) in item.address" :key="index">{{ add }}</option>
                            </select>
                        </th>
                        <th v-if="item.sex">Nam</th>
                        <th v-else>Nữ</th>
                        <th>{{ item.dateOfBirth }}</th>
                        <th>{{ item.registerDate }}</th>
                        <th v-if="item.status" style="text-align: center;"><span class="badge bg-warning">Đang Mở</span>
                        </th>
                        <th v-else style="text-align: center;"><span class="badge bg-danger">Đã Khóa</span>
                        </th>
                        <th v-if="!item.status" style="text-align: center;"><span type="button" @click="popBookList(item)"
                                class="badge bg-warning">Mở khóa <i class="fas fa-solid fa-lock-open"></i></span></th>
                        <th v-else style="text-align: center;"><span type="button" @click="popBookList(item)"
                                class="badge bg-danger">Khóa <i class="fas fa-solid fa-lock"></i></span></th>
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
            clientList: useDataStore().getClientList.sort((a, b) => a.name.localeCompare(b.name)),
            searchTerm: '',
            select: '',
        }
    },
    methods: {
        searchClient() {
            if (this.searchTerm === '')
                this.clientList = useDataStore().getClientList.sort((a, b) => a.name.localeCompare(b.name));
            else
                this.clientList = this.clientList.filter(item => item.name.includes(this.searchTerm));
        },
        fillList() {
            if (this.select === "Tất cả") {
                this.clientList = useDataStore().getClientList
            }
            else if (this.select === 'Trạng thái: Mở') {
                this.clientList = useDataStore().getClientList
                this.clientList = this.clientList.filter(item => item.status === true)
            }
            else {
                this.clientList = useDataStore().getClientList
                this.clientList = this.clientList.filter(item => item.status === false)
            }
        }
    },

}
</script>