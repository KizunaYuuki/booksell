<template>
    <div class="container row rounded shadow-sm" style="padding: 30px; border: 1px solid #E6E6E6;">
        <div class="border col-sm-6">
            <h4 class="text-center" style="padding: 10px;">Thông tin chương trình khuyến mãi</h4>
            <hr />
            <form class="row g-3">
                <div class="col-sm-6">
                    <label for="inputEmail4" class="form-label">Tên khuyến mãi</label>
                    <input type="email" class="form-control" id="inputEmail4" required>
                </div>
                <div class="col-sm-6">
                    <label for="inputEmail4" class="form-label">Giá trị khuyến mãi (%)</label>
                    <div class="input-group">
                        <input type="number" min="0" ref="inputPrice" @change="changeNumber" class="form-control"
                            aria-label="Dollar amount (with dot and two decimal places)" required>
                        <span class="input-group-text">%</span>
                    </div>
                </div>
                <div class="col-sm-6">
                    <label for="inputAddress" class="form-label">Ngày bắt đầu</label>
                    <input type="datetime-local" v-model="dateBegin" @change="show" class="form-control" id="inputAddress"
                        required>
                </div>
                <div class="col-sm-6">
                    <label for="inputAddress2" class="form-label">Ngày kết thúc</label>
                    <input type="datetime-local" v-model="dateEnd" @change="show" class="form-control" id="inputAddress2"
                        required>
                </div>
                <div class="col-sm-12">
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                            style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Mô tả khuyến mãi</label>
                    </div>
                </div>
                <div class="col-sm-12">
                    <h6 for="inputState" class="">Chọn sản phẩm theo tên</h6>
                    <div style="display: flex;">
                        <input class="form-control" list="datalistOptions" ref="nameBook" id="exampleDataList"
                            placeholder="Nhập tên sách">
                        <datalist id="datalistOptions">
                            <option v-for="item in books" :key="item.id" :value="item.id">{{ item.name }} | {{ item.author
                            }}</option>
                        </datalist>
                        <button @click="pushBook" style="margin-left: 10px;" type="button" class="btn btn-primary"
                            data-bs-whatever="@getbootstrap"><i class="fas fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <h6 for="inputState" class="">Chọn sản phẩm khuyến mãi theo thể loại</h6>
                <div v-for="item in catalog_Api" :key="item.id" v-bind:value="item">
                    <input class="form-check-input" type="checkbox" :value="item.name" :id="item.name"
                        @change="pushAllList($event.target)">
                    <label class="form-check-label" for="flexCheckDefault">
                        {{ item.name }}
                    </label>
                    <div style="display: flex;">
                        <div v-for="items in item.sub" :key="items.id" class="form-check" style="margin-left: 10px;">
                            <input class="form-check-input" type="checkbox" :id="items.name" :value="items.name"
                                @change="pushList($event.target, item.name)">
                            <label class="form-check-label" for="flexCheckDefault">
                                {{ items.name }}
                            </label>
                        </div>
                    </div>
                </div>
                <hr style="margin: 5px;" />
                <div style="text-align: center;margin: 5px 0px;">
                    <button type="submit" class="btn btn-primary">Lưu</button>
                </div>
            </form>
        </div>
        <!-- Danh sách Books -->
        <div class=" border  col-sm-6">
            <h4 class="text-center" style="padding: 10px;">Danh sách các sản phẩm khuyến mãi</h4>
            <hr />
            <v-table fixed-header height="300px">
                <thead class="table-active">
                    <tr>
                        <th>STT</th>
                        <th>Tên sách</th>
                        <th>Tác giả</th>
                        <th>Giá gốc (&#8363;)</th>
                        <th>Giá khuyến mãi (&#8363;)</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="( item, index) in bookList" :key="item.id">
                        <th>{{ index + 1 }}</th>
                        <th>{{ item.name }}</th>
                        <th>{{ item.author }}</th>
                        <th>{{ item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) }}</th>
                        <th>{{ calculate(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) }}</th>
                        <th><span type="button" @click="popBookList(item)" class="badge bg-danger">X</span></th>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import { useDataStore } from '../stores/dataStores'
export default {
    data() {
        return {
            dateBegin: null,
            dateEnd: null,
            pricePromotion: Number,
            select_Catalog: {},
            bookList: [],
            selectGene: {},
            catalog_Api: useDataStore().getGenes,
            books: useDataStore().getBooks,
        }
    },
    methods: {
        show() {
            if (this.dateBegin < this.dateEnd)
                console.log(1)
            if (this.dateBegin > this.dateEnd)
                console.log(0)
            console.log(this.dateBegin)
            console.log(this.dateEnd)
        },
        pushList(e, e0) {
            if (e.checked) {
                var selectBook = this.books.filter(item => item.gene.includes(e.value))
                for (var i of selectBook) {
                    if (!this.bookList.includes(i)) {
                        this.bookList.push(i)
                    }
                }
            }
            else {
                var test = this.bookList.filter(item => item.gene.includes(e.value))
                test.forEach(book => {
                    let flag = 0
                    for (var i of book.gene) {
                        const checkbox = document.getElementById(i);
                        if (checkbox.checked) {
                            flag = 1
                        }
                        console.log(checkbox.checked)
                    };
                    if (flag == 0)
                        this.bookList = this.bookList.filter(item => item !== book)
                })
            }
            console.log(this.bookList)

        },
        pushAllList(e) {
            var subGene = this.catalog_Api.filter(item => item.name.includes(e.value))

            if (e.checked) {
                for (var i of subGene[0].sub) {
                    const checkbox = document.getElementById(i.name);
                    // console.log(i.name)
                    checkbox.checked = true
                    this.pushList(checkbox)
                }
            }
            else {
                for (var i of subGene[0].sub) {
                    const checkbox = document.getElementById(i.name);
                    // console.log(i.name)
                    checkbox.checked = false
                    this.pushList(checkbox)
                }
            }
            console.log(subGene)
        },
        pushBook() {
            if (this.$refs.nameBook.value === "") {
                toast.error("Bạn chưa nhập giá trị!", {
                    transition: toast.TRANSITIONS.SLIDE,
                });
            }
            else {
                var test = this.books.filter(item => item.id === this.$refs.nameBook.value)
                if (test.length == 0) {
                    toast.error("Sách " + this.$refs.nameBook.value + " không tồn tại hoặc đã được thêm ở chương trình khuyến mãi khác!", {
                        transition: toast.TRANSITIONS.SLIDE,
                    });
                }
                else if (test.length > 0) {
                    for (var i of test) {
                        if (!this.bookList.includes(i)) {
                            this.bookList.push(i)
                            // toast.success("Sách " + this.$refs.nameBook.value + " đã được thêm vào thành công!", {
                            //     transition: toast.TRANSITIONS.SLIDE,
                            // });
                        }
                    }
                }
            }
            console.log(test)
            console.log(this.bookList)
        },
        changeNumber() {
            this.pricePromotion = this.$refs.inputPrice.value / 100;
            console.log(this.pricePromotion)
        },
        calculate(s) {
            var number = s * this.pricePromotion;
            return s - number;
        },
        popBookList(e) {
            this.bookList = this.bookList.filter(item => item !== e)
        }
    },
    mounted() {
        this.books = this.books.filter(item => item.discount == 0)
    }
}
</script>