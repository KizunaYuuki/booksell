<template>
    <div class="container border rounded" v-show="click === false">
        <div class="row m-2">
            <div class="col-10 d-flex align-items-center"><a href="acc/info">Sổ địa chỉ</a> </div>
            <button class="col-2 btn btn-danger" @click="click = true">Thêm địa chỉ mới</button>
        </div>
        <div class="row m-2">
            <div class="col">
                <div class="text-uppercase fw-semibold">Địa chỉ mặc định</div>
            </div>
            <div class="col">
                <div class="text-uppercase fw-semibold">Địa chỉ khác</div>
            </div>
        </div>
        <div class="row m-4">
            <div class="col">
                <div v-for="addressDefault in addressDefault">
                    {{ addressDefault }}
                </div>
                <div style="color: red; font-weight: bolder;">Thay đổi địa chỉ</div>
            </div>
            <div class="col">
                <div v-for="address in address">
                    <div>{{ address.name }}</div>
                    <div>{{ address.phone }}</div>
                    <div>{{ address.street }}</div>
                    <div>{{ address.city }}</div>
                    <div class="row mb-2 fw-semibold">
                        <div class="col-3 border-end text-danger ">Sửa địa chỉ</div>
                        <div class="col-3 text-secondary">Xóa địa chỉ</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div v-show="click === true" class="container border rounded ps-5">
        <form>
        <div class="text-uppercase fw-semibold"> Thêm địa chỉ mới</div>
        <div class="row ms-3">
            <div class="text-uppercase col-6 ">
                Thông tin liên hệ

                <div class="input-group flex-nowrap my-3">
                    <input type="text" class="form-control" placeholder="Họ và Tên" aria-describedby="addon-wrapping">
                </div>
                <div class="input-group flex-nowrap my-3">
                    <input type="text" class="form-control" placeholder="Số điện thoại" aria-describedby="addon-wrapping">
                </div>
            </div>
            <div class="col ">
                ĐỊA CHỈ
                <div>
                    <div class="input-group flex-nowrap my-3">
                        <input type="text" class="form-control" placeholder="Đường, số nhà"
                            aria-describedby="addon-wrapping">
                    </div>
                    <div>

                        <div class="form-group form-floating mb-2 my-3 flex-nowrap">
                            <select v-model="indexCity" class="form-select" aria-label="Default select example">
                                <option value="-1" selected>Chọn Tỉnh/Thành Phố</option>
                                <option v-for="(city, index) in citys" :value="index">{{ city.Name }}</option>
                            </select>
                            <label class="fs-6" for="floatingInput">Tỉnh/Thành Phố</label>
                        </div>

                        <div class="form-group form-floating mb-2 my-3 flex-nowrap">
                            <select v-model="indexDistrict" class="form-select" aria-label="Default select example">
                                <option value="-1" selected>Chọn Quận/Huyện</option>
                                <template v-if="get">
                                    <option v-for="(district, index) in Districts(indexCity)" :value="index">{{
                                        district.Name }}</option>
                                </template>
                            </select>
                            <label class="fs-6" for="floatingInput">Quận/Huyện</label>
                        </div>

                        <div class="form-group form-floating mb-2 my-3 flex-nowrap">
                            <select v-model="indexWard" class="form-select" aria-label="Default select example">
                                <option value="-1" selected>Chọn Phường/Xã</option>
                                <template v-if="get">
                                    <option v-for="(ward, index) in Wards(indexCity, indexDistrict)" :value="index">{{
                                        ward.Name }}</option>
                                </template>
                            </select>
                            <label class="fs-6" for="floatingInput">Phường/Xã</label>
                        </div>

                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        <label class="form-check-label" for="flexCheckChecked">
                            Sử dụng làm địa chỉ mặc định
                        </label>
                    </div>
                    <button type="button" class="btn btn-danger float-end mb-2 my-3">Lưa địa chỉ</button>
                </div>
            </div>
        </div>
    </form>
    </div>
</template>

<script >
import axios from "axios";
export default {

    data: () => {
        return {
            addressDefault: ["Le Quang Phu", "0915101852", "KTX, DH", "Can Tho"],
            address: [{ name: 'Le Quang Phu', street: '3/2', city: 'Ninh Kieu, Can Tho', phone: '00000001' }, { name: 'Le Quang Phu', street: '30/4', city: 'Ninh Kieu, Can Tho', phone: '00000002' }],
            click: false,
            citys: [], indexCity: -1,
            indexDistrict: 0,
            indexWard: 0,
        };
    },
    mounted() {
        axios
            .get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then((response) => {
                this.citys = response.data
                
            })
    },
    computed: {
        get() {
            return this.citys[this.indexCity]
        }
    },
    methods: {
        Districts(index) {
            return this.citys[index].Districts
        },
        Wards(indexCity, indexDistrict) {
            return this.citys[indexCity].Districts[indexDistrict].Wards
        }
    }
};



</script>