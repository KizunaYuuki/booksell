<template>
    <div class="container rounded shadow-sm bg-basil" style="padding: 30px; border: 1px solid #E6E6E6;">
        <h3 class="text-center text-basil" style="padding: 5px;">THÔNG TIN SẢN PHẨM</h3>
        <hr>
        <v-form @submit.prevent>
            <div class="row">
                <v-text-field variant="underlined" class="col-sm-6" v-model="name" :rules="rules"
                    label="Tên sách"></v-text-field>
                <v-text-field variant="underlined" class="col-sm-6" v-model="auth" :rules="rules"
                    label="Tác giả"></v-text-field>
            </div>
            <div class="row">
                <v-text-field class="col-sm-6" variant="underlined" v-model="publisher" :rules="rules"
                    label="Nhà xuất bản"></v-text-field>
                <v-autocomplete class="col-sm-6" label="Năm xuất bản" v-model="publishing_year" :items="years"
                    variant="underlined" :rules="rules"></v-autocomplete>
            </div>
            <div class="row">
                <v-text-field type="number" variant="underlined" class="col-sm-6" v-model="numberPage" :rules="rules"
                    label="Số lượng trang"></v-text-field>
                <v-text-field variant="underlined" class="col-sm-6" v-model="size" :rules="rules" label="Kích cỡ"
                    placeholder="12x15"></v-text-field>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <v-text-field type="number" variant="underlined" v-model="price" :rules="rules" label="Giá bán"
                        style="margin-bottom: -23px;"></v-text-field>
                    <span v-if="price">Giá nhập: {{ parseInt(price).toLocaleString('vi-VN', {
                        style: 'currency', currency:
                            'VND'
                    })
                    }}</span>
                </div>
                <v-autocomplete class="col-sm-3" clearable label="Chọn thể loại" v-bind:items="gene_Api" :rules="rules"
                    v-model="selectGeneApi" variant="underlined" @update:search="changeGeneApi"></v-autocomplete>
                <v-select class="col-sm-3" :rules="rules1" v-model="selectGene" clearable chips
                    :label="'Thêm thể loại thuộc ' + selectGeneApi" v-bind:items="gene" multiple
                    variant="underlined"></v-select>
            </div>
            <div>
                <v-textarea v-model="des" clearable label="Mô tả" variant="underlined"></v-textarea>
            </div>
            <div class="row">
                <v-file-input class="col-sm-4" @update:model-value="onFileChange" :rules="rules1"
                    accept="image/png, image/jpeg, image/bmp" ref="fileInput" placeholder="Pick an avatar"
                    prepend-icon="mdi-camera" label="Thêm ảnh" multiple></v-file-input>
                <div class="col-sm-8" style="display: flex;flex-wrap: wrap;">
                    <div v-for="(image, index) in img" :key="index" style="margin-right: 10px; margin-bottom: 10px;">
                        <img :src="image" style="width: 90px;" />
                    </div>
                </div>
            </div>
            <div class="text-center" style="margin-top: 10px;"><v-btn size="large" variant="outlined" type="submit"
                    color="primary" class="mt-2">Lưu</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
import axios from "axios";
import { toast } from 'vue3-toastify';
import { useDataStore } from "../stores/dataStores";
export default {
    data() {
        return {
            files: [],
            years: [],
            img: [],
            supplier_Api: ["a", "b", "c"],
            tag_Api: ["", "Hot", "Sale", "New"],
            gene_Api: useDataStore().getGenes,
            gene: [],
            name: "",
            auth: "",
            numberPage: "",
            size: "",
            supplier: "",
            publisher: "",
            publishing_year: "",
            tag: "",
            price: '',
            discount: '',
            number: '',
            des: "",
            category: "",
            gene: [],
            selectGeneApi: "",
            selectGene: [],
            imageDataUrl: null,
            rules: [
                value => {
                    if (value) return true
                    return 'Bạn chưa nhập giá trị.'
                },
            ],
            rules1: [
                value => {
                    if (value.length != 0) {
                        return true
                    }
                    return 'Bạn chưa nhập giá trị.'
                },
            ],
        }

    },
    methods: {
        pushGene(e) {
            if (e.checked)
                this.gene.push(e.value)
            else
                this.gene = this.gene.filter(item => item !== e.value)
            console.log(this.gene)
        },
        clearGene() {
            this.gene = []
        },
        removeArr(i) {
            this.img = this.img.filter(item => item !== i)
            console.log(this.img)
        },
        async filesChange(fileList) {
            let data = new FormData();
            for (var i = 0; i < fileList.length; i++) {
                let file = fileList[i];
                if (this.img.length < 3) {
                    this.img.push(file)
                    // data.append('uploadsImg', file)
                }
            }
            // data.append('uploadsImg', this.file)
            // data.append('data', "1231dads")
            // this.files = data
        },
        async Submit() {
            const form = document.getElementById('form');

            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện submit
                // Thực hiện các xử lý dữ liệu hoặc thực hiện một yêu cầu AJAX
                let data = new FormData();
                let filesImg = new FormData();
                data.append('name', this.name)
                data.append('author', this.auth)
                data.append('publisher', this.publisher)
                data.append('publishing_year', this.publishing_year)
                // data.append("category", this.category)
                data.append("tag", this.tag)
                data.append("number", this.number)
                data.append("price", this.price)
                data.append("discount", this.discount)
                data.append("des", this.des)
                data.append("supplier", this.supplier)
                data.append("size", this.size)
                data.append("numberPage", this.numberPage)
                data.append("gene", this.gene)
                let fileList = this.$refs.imgs.files
                for (var i = 0; i < fileList.length; i++) {
                    let file = fileList[i];
                    filesImg.append('uploadsImg', file)
                }
                this.files = filesImg
                //toast
                toast.success("Success Notification !", {
                    transition: toast.TRANSITIONS.SLIDE,
                });
            });


            let config = {
                'Content-Type': 'multipart/form-data'
            }

            await axios.post('http://127.0.0.1:3000/api/uploads', this.files, config).then(
                response => {

                }
            )
        },
        inittahun() {
            let years = [];
            for (var i = 1900; i <= new Date().getFullYear(); i++) {
                years.push(i);
            }

            this.years = years;
        },
        changeGeneApi() {
            var arr = useDataStore().getGenes;
            arr = arr.filter(item => item.name === this.selectGeneApi)
            this.gene = arr.flatMap(gene => gene.sub.map(sub => sub.name));
            console.log("arr")
            // this.gene = arr.map(i => i.name)
        },
        onFileChange() {
            const files = this.$refs.fileInput.files;
            this.img = []
            for (let i of files) {
                var imageUrl = URL.createObjectURL(i);
                this.img.push(imageUrl);
            }
        }


    },
    mounted() {
        this.inittahun();
        this.gene_Api = this.gene_Api.map(obj => obj.name);
    }


}
</script>

<style>
.bg-basil {
    background-color: #FFFBE6 !important;
}

.text-basil {
    color: #356859 !important;
}
</style>