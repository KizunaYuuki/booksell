<template>
    <div style="padding: 30px;">
        <h3 class="text-center text-basil" style="padding: 5px;">THÔNG TIN SÁCH</h3>
        <hr>
        <v-form @submit.prevent style="border: 1px solid darkgrey; padding: 10px;">
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
                <!-- <v-select class="col-sm-3" v-model="tag" clearable label='Thêm nhãn' v-bind:items="gene"
                    variant="underlined"></v-select> -->
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
                    <span v-if="price">{{ parseInt(price).toLocaleString('vi-VN', {
                        style: 'currency', currency:
                            'VND'
                    })
                    }}</span>
                </div>
                <v-autocomplete class="col-sm-3" clearable label="Chọn thể loại" v-bind:items="gene_Api" :rules="rules"
                    v-model="selectGeneApi" variant="underlined" @update:model-value="changeGeneApi"></v-autocomplete>
                <v-select v-if="selectGeneApi" class="col-sm-3" :rules="rules1" v-model="selectGene" clearable chips
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
                        <img :src="image.linkImage" style="width: 90px;" />
                        <span style="position: absolute;right: 0px;" type="button" @click="removeImg(image.nameImage)"
                            class="badge bg-danger">X</span>
                    </div>
                </div>
            </div>
            <div class="text-center" style="margin-top: 10px;"><v-btn block @click="Submit" size="large" type="submit"
                    color="primary" class="mt-2">Lưu</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script>
import axios from "axios";
import { toast } from 'vue3-toastify';
import { useDataStore } from "../stores/dataStores";
import BooksService from "@/services/books.service";
export default {
    data() {
        return {
            files: [],
            years: [],
            img: [],

            gene_Api: useDataStore().getGenes,
            gene: [],
            name: "",
            auth: "",
            numberPage: 0,
            size: "",
            publisher: "",
            publishing_year: "",
            tag: "",
            price: 0,
            des: "",
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
        async Submit() {

            let data = new FormData();

            data.append('bookName', this.name)
            data.append('author', this.auth)
            data.append('publisherName', this.publisher)
            data.append('pulicYear', this.publishing_year)
            // data.append("promotionPrice", 0)
            data.append("tag", this.tag)
            data.append("originalPrice", this.price)
            data.append("bookDes", this.des)
            data.append("size", this.size)
            data.append("quantityPage", this.numberPage)
            for (let i = 0; i < this.selectGene.length; i++) {
                data.append('generName', this.selectGene[i]);
            }
            // data.append("generName", this.selectGene)
            var bookSave = await BooksService.create(data)
            console.log(bookSave)
            for (let field of data.entries()) {
                console.log(field[0] + ': ' + field[1]);
            }
            //toast
            toast.success("Success Notification !", {
                transition: toast.TRANSITIONS.SLIDE,
            });
        },
        inittahun() {
            let years = [];
            for (var i = 1900; i <= new Date().getFullYear(); i++) {
                years.push(i);
            }

            this.years = years;
        },
        changeGeneApi() {
            // this.selectGene = []
            var arr = useDataStore().getGenes;
            arr = arr.filter(item => item.name === this.selectGeneApi)
            this.gene = arr.flatMap(gene => gene.sub.map(sub => sub.name));
            console.log("arr")
            // this.gene = arr.map(i => i.name)
        },
        async onFileChange() {
            this.img = []
            let filesImg = new FormData();
            let fileList = this.$refs.fileInput.files
            for (var i = 0; i < fileList.length; i++) {
                let file = fileList[i];
                var imageUrl = URL.createObjectURL(file);
                // this.img.push(imageUrl);
                filesImg.append('uploadsImg', file)
            }
            this.files = filesImg
            let config = {
                'Content-Type': 'multipart/form-data'
            }

            await axios.post('http://127.0.0.1:3000/api/uploads', this.files, config).then(
                response => {
                    this.img = response.data
                    console.log(response.data);
                }
            )
        },
        async removeImg(e) {
            let config = {
                'Content-Type': 'multipart/form-data'
            }
            let nameImg = new FormData();
            nameImg.append('name', e)
            for (let field of nameImg.entries()) {
                console.log(field[0] + ': ' + field[1]);
            }
            console.log(e)
            await axios.post('http://127.0.0.1:3000/api/removeImg', { name: e }).then(
                response => {

                    console.log(response.data);
                }
            )
        }
    },
    mounted() {
        this.inittahun();
        this.gene_Api = this.gene_Api.map(obj => obj.name);
        // var book = BooksService.getAll({});
        // console.log(book);
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