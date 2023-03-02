<script>
import axios from 'axios'

export default {
    data() {
        return {
            citys: [], indexCity: 0,
            districts: [], indexDistrict: 0,
            wards: [], indexWard: 0,
        }
    },
    mounted() {
        axios
            .get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then((response) => {
                this.citys = response.data
                this.districts = this.citys[this.indexCity]['Districts']
            })
    },
    computed: {
        getDistricts() {
            return this.citys[this.indexCity]
        },
        getWards() {
            return this.districts[this.indexDistrict]
        }
    }
}

</script>
<template>
    <select v-model="indexCity">
        <option selected>Chọn Tỉnh/Thành Phố</option>
        <option v-for="(city, index) in citys" :value="index">{{ city.Name }}</option>
    </select>
    <div>{{ indexCity }}</div>
    <select v-model="indexDistrict">
        <option selected>Chọn Quận/Huyện</option>
        <template v-if="getDistricts">
            <option v-for="(district, index) in getDistricts.Districts" :value="index">{{ district.Name }}</option>
        </template>
    </select>
    <div>{{ indexDistrict }}</div>
    <select v-model="indexWard">
        <option selected>Chọn Phường/Xã</option>
        <template v-if="getWards">
            <option v-for="(ward, index) in getWards.Wards" :value="index">{{ ward.Name }}</option>
        </template>
    </select>
</template>