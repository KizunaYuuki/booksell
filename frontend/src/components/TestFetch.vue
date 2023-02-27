<script>
import axios from 'axios'
import { number, string } from 'yup'

export default {
    data() {
        return {
            datas: {},
            citys: [], indexCity: 0,
            districts: [], indexDistrict: 0,
            wards: [], indexWard: 0,
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    },
    mounted() {
        axios
            .get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then((response) => {
                this.datas = response.data
                this.citys = response.data
                this.districts = this.citys[this.indexCity]['Districts']
                this.wards = this.districts[this.indexDistrict]['Wards']
                console.log(this.citys);
                console.log(this.districts);
                console.log(this.wards);
            }),
            
            this.citys = this.datas
                this.districts = this.citys[this.indexCity]['Districts']
                this.wards = this.districts[this.indexDistrict]['Wards']
    },
    methods: {
        getDistricts(index) {
            return this.citys[index]['Districts']
        }
    },
}

</script>
<template>
    <select v-model="indexCity">
        <option selected>Chon</option>
        <option v-for="(city, index) in citys" :value="index">{{ city.Name }}</option>
    </select>
    <div>{{ indexCity }}</div>
    <select v-model="indexDistrict">
        <option selected>Chon</option>
        <option v-for="(district, index) in districts" :value="index">{{ district.Name }}</option>
    </select>
    <select v-model="indexWard">
        <option selected>Chon</option>
        <option v-for="(ward, index) in wards" :value="index">{{ ward.Name }}</option>
    </select>
</template>