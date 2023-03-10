<script>
import axios from 'axios'
import { number } from 'yup'

export default {
    data() {
        return {
            citys: [], indexCity: -1,
            indexDistrict: -1,
            indexWard: -1,
        }
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
            if (this.indexCity !== -1) {
                if (this.indexDistrict === null) {
                    this.indexDistrict = -1
                }
            }
            return this.citys[this.indexCity]
        }
    },
    methods: {
        Districts(index) {
            return this.citys[index].Districts
        },
        Wards(indexCity, indexDistrict) {
            return this.citys[indexCity].Districts[indexDistrict]?.Wards
        }
    }
}

</script>
<template>
    <!-- <select v-model="indexCity">
                <option selected>Chọn Tỉnh/Thành Phố</option>
                <option v-for="(city, index) in citys" :value="index">{{ city.Name }}</option>
            </select>
            <div>{{ indexCity }}</div>
                <select v-model="indexDistrict">
                    <option selected>Chọn Quận/Huyện</option>
                    <template v-if="get">
                        <option v-for="(district, index) in Districts(indexCity)" :value="index">{{ district.Name }}</option>
                    </template>
                </select>
                <div>{{ indexDistrict }}</div>
                <select v-model="indexWard">
                    <option selected>Chọn Phường/Xã</option>
                    <template v-if="get">
                        <option v-for="(ward, index) in Wards(indexCity, indexDistrict)" :value="index">{{ ward.Name }}</option>
                    </template>
                </select>
                <div>{{ indexWard }}</div> -->



    <!-- <div class="d-flex">
            <div class="form-group form-floating mb-2 me-1 col">
                <select v-model="indexCity" class="form-select" aria-label="Default select example">
                    <option value="-1" selected>Chọn Tỉnh/Thành Phố</option>
                    <option v-for="(city, index) in citys" :value="index">{{ city.Name }}</option>
                </select>
                <label class="fs-6" for="floatingInput">Tỉnh/Thành Phố</label>
            </div>

            <div class="form-group form-floating mb-2 me-1 col">
                <select v-model="indexDistrict" class="form-select" aria-label="Default select example">
                    <option value="-1" selected>Chọn Quận/Huyện</option>
                    <template v-if="get">
                        <option v-for="(district, index) in Districts(indexCity)" :value="index">{{ district.Name }}</option>
                    </template>
                </select>
                <label class="fs-6" for="floatingInput">Quận/Huyện</label>
            </div>

            <div class="form-group form-floating mb-2 col">
                <select v-model="indexWard" class="form-select" aria-label="Default select example">
                    <option value="-1" selected>Chọn Phường/Xã</option>
                    <template v-if="get">
                        <option v-for="(ward, index) in Wards(indexCity, indexDistrict)" :value="index">{{ ward.Name }}</option>
                    </template>
                </select>
                <label class="fs-6" for="floatingInput">Phường/Xã</label>
            </div>
        </div> -->


    <div class="d-flex">
        <div class="form-group form-floating mb-2 me-1 col">
            <select v-model="indexCity" class="form-select" aria-label="Default select example">
                <option value="-1" selected>Chọn Tỉnh/Thành Phố</option>
                <option v-for="(city, index) in citys" :value="index">{{ city.Name }}</option>
            </select>
            <label class="fs-6" for="floatingInput">Tỉnh/Thành Phố</label>
        </div>

        <div class="form-group form-floating mb-2 me-1 col">
            <select v-model="indexDistrict" class="form-select" aria-label="Default select example">
                <option value="-1" selected>Chọn Quận/Huyện</option>
                <template v-if="get">
                    <option v-for="(district, index) in Districts(indexCity)" :value="index">{{ district.Name }}</option>
                </template>
            </select>
            <label class="fs-6" for="floatingInput">Quận/Huyện</label>
        </div>

        <div class="form-group form-floating mb-2 col">
            <select v-model="indexWard" class="form-select" aria-label="Default select example">
                <option value="-1" selected>Chọn Phường/Xã</option>
                <template v-if="get">
                    <option v-for="(ward, index) in Wards(indexCity, indexDistrict)" :value="index">{{ ward.Name }}</option>
                </template>
            </select>
            <label class="fs-6" for="floatingInput">Phường/Xã</label>
        </div>
    </div>



</template>