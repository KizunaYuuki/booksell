<template>
    <div class="container border shadow-sm" id="form">
        <h3 class="text-center" style="padding: 5px;">THÔNG TIN SẢN PHẨM</h3>
        <form style="padding: 20px;">
            <div class="mb-2 row">
                <div class="form-floating mb-2 col-md-6">
                    <input type="text" class="form-control" id="floatingInput1" ref="name" placeholder="name"
                        minlength="3" required v-model="name">
                    <label for="floatingInput1">Tên sách</label>
                </div>
                <div class="form-floating col-md-6 mb-2">
                    <input type="text" class="form-control" v-model="auth" ref="auth" id="floatingAut"
                        placeholder="name" required>
                    <label for="floatingAut">Tác giả</label>

                </div>
            </div>
            <div class="mb-2 row">
                <div class="form-floating col-md-6 mb-2">
                    <input type="text" class="form-control" v-model="publisher" id="floatingInput" ref="publisher"
                        placeholder="name" required>
                    <label for="floatingInput">Nhà xuất bản</label>
                </div>
                <div class="form-floating col-md-4 mb-2">
                    <select class="form-select" id="floatingSelect" ref="year"
                        aria-label="Floating label select example" v-model="supplier">
                        <option :value="name" v-for="name in supplier_Api" :key="name">{{ name }}</option>
                    </select>
                    <label for="floatingSelect">Nhà cung cấp</label>
                </div>
                <div class="form-floating col-md-2 mb-2">
                    <select class="form-select" id="floatingSelect" ref="year"
                        aria-label="Floating label select example" v-model="publishing_year">
                        <option selected>1900</option>
                        <option :value="year" v-for="year in years" :key="year">{{ year }}</option>
                    </select>
                    <label for="floatingSelect">Năm xuất bản</label>
                </div>
            </div>
            <div class="mb-2 row">
                <div class="input-group col-sm mb-2">
                    <span class="input-group-text">Số lượng</span>
                    <input type="number" min="0" v-model="numberPage" class="form-control"
                        aria-label="Amount (to the nearest dollar)" required>
                    <span class="input-group-text">trang</span>
                </div>
                <div class="input-group col-sm mb-2">
                    <span class="input-group-text">Kích cỡ</span>
                    <input type="text" v-model="size" class="form-control" aria-label="Amount (to the nearest dollar)"
                        required placeholder="Ví dụ: 24 x 16">
                    <span class="input-group-text">cm</span>
                </div>
                <div class="input-group col-sm mb-2">
                    <span class="input-group-text">Số lượng</span>
                    <input type="number" min="0" v-model="number" class="form-control"
                        aria-label="Amount (to the nearest dollar)" required placeholder="Số lượng sách trong kho">
                    <span class="input-group-text">quyển</span>
                </div>
            </div>
            <div class="mb-2 row ">
                <div class="col-sm input-group  mb-2">
                    <span class="input-group-text">Giá gốc</span>
                    <input type="number" min="1000" v-model="price" class="form-control"
                        aria-label="Amount (to the nearest dollar)" required>
                    <span class="input-group-text">&#8363;</span>
                </div>
                <div class="col-sm input-group  mb-2">
                    <span class="input-group-text">Giá giảm</span>
                    <input type="number" min="1000" v-model="discount" class="form-control"
                        aria-label="Amount (to the nearest dollar)">
                    <span class="input-group-text">&#8363;</span>
                </div>
            </div>
            <h5>Loại danh mục</h5>
            <div class="mb-2 row">
                <div class="form-floating col-md-6 mb-2">
                    <select class="form-select" id="floatingSelect" ref="year"
                        aria-label="Floating label select example" v-model="category" @change="clearGene()">
                        <option :value="name" v-for="name in category_Api" :key="name">{{ name }}</option>
                    </select>
                    <label for="floatingSelect">Thêm danh mục</label>
                </div>
                <div class="form-floating col-md-6 mb-2">
                    <select class="form-select" id="floatingSelect" ref="year"
                        aria-label="Floating label select example" v-model="tag">
                        <option :value="name" v-for="name in tag_Api" :key="name">{{ name }}</option>
                    </select>
                    <label for="floatingSelect">Thêm nhãn</label>
                </div>
            </div>
            <h5>Thể loại</h5>
            <div style="display: flex;">
                <div v-if="category" class="form-check" v-for="name in gene_Api[category]" :key="name"
                    style="margin-left: 10px;">
                    <input class="form-check-input" type="checkbox" :value="name" id="flexCheckDefault"
                        @change="pushGene($event.target)">
                    <label class="form-check-label" for="flexCheckDefault">
                        {{ name }}
                    </label>
                </div>
            </div>
            <div>
                <!-- <label for="formFileMultiple" class="form-label">Chọn 3 ảnh</label> -->
                <input class="form-control mb-2 col-sm" type="file" max="3" id="formFileMultiple" multiple
                    name="uploadsImg" accept="image/*" ref="imgs" @change="filesChange($event.target.files)">
            </div>
            <div v-for="item in img" :key="item.name" class="mb-2">
                {{ item.name }}
                <span class="badge bg-danger" @click="removeArr(item)" style="cursor: pointer;">X</span>
            </div>
            <div class="form-floating mb-2">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                    style="height: 200px" v-model="des"></textarea>
                <label for="floatingTextarea2">Mô tả sản phẩm</label>
            </div>
            <div class="form-group" style="display: flex; justify-content: center; padding: 10px;">
                <button style="margin-right: 20px;" ref="btn" class="btn btn-primary" @click="Submit()">Thêm
                    sản phẩm</button>
                <button type="button" class="btn btn-warning">Xóa</button>
            </div>
        </form>

    </div>
</template>

<script>
import axios from "axios";
import { toast } from 'vue3-toastify';
export default {
    data() {
        return {
            files: [],
            years: [],
            img: [],
            category_Api: ["aa", "bb", "cc"],
            supplier_Api: ["a", "b", "c"],
            tag_Api: ["", "Hot", "Sale", "New"],
            gene_Api: {
                "aa": ["a", "b", "c"],
                "bb": ["d", "e", "f"],
                "cc": ["g", "h", "j"],
            },
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
                data.append("category", this.category)
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
    },
    mounted() {
        this.inittahun();



    }


}
</script>