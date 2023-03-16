<template>
    <div class="container">
        <!-- <Cards /> -->

        <!-- Carousel - Hiển thị những sản phẩm đặt biệt hoặc một chương trình giảm giá...  -->
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img src="https://theme.hstatic.net/200000343865/1000938429/14/ms_banner_img4.jpg?v=335"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://theme.hstatic.net/200000343865/1000938429/14/ms_banner_img4.jpg?v=335"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://theme.hstatic.net/200000343865/1000938429/14/ms_banner_img4.jpg?v=335"
                        class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon btn btn-danger" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="next">
                <span class="carousel-control-next-icon btn btn-danger" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <!-- Các thành phần - nội dung chính trong trang   -->
        <div id="content">
            <div class="p-2 fw-semibold fs-5 text-center">
                <a href="#flash-sale" class="text-danger text-decoration-none px-2 btn">Flash Sale</a>
                <a href="#hot" class="text-danger text-decoration-none px-2 btn">Sản Phẩm HOT</a>
                <a href="#new" class="text-danger text-decoration-none px-2 btn">Sản Phẩm Mới</a>
                <a href="#product" class="text-danger text-decoration-none px-2 btn">Sản Phẩm</a>
            </div>
        </div>

        <!-- FLASH SALE -->
        <div id="flash-sale">
            <div class="p-2 fw-semibold fs-5" style="background-color: #fcdab0;">
                <a href="#" class="text-dark text-decoration-none">Flash Sale | <small>Kết Thúc Trong {{ }}</small></a>
            </div>
            <div class="container-fluid px-0 py-2">
                <v-row class="p-2 m-0" :equal="{ sm: true, md: false }">
                    <v-col v-for="item in bookList" :key="item.id" class="d-flex align-center justify-center">
                        <Cards :book="item" />
                    </v-col>
                </v-row>
            </div>
        </div>

        <!--Sản phẩm HOT -->
        <div id="hot">
            <div class="p-2 fw-semibold fs-5" style="background-color: #eb0200;">
                <a href="#" class="text-white text-decoration-none">Sản Phẩm HOT</a>
            </div>
            <div class="container-fluid px-0 py-2">
                <v-row class="p-2 m-0" :equal="{ sm: true, md: false }">
                    <v-col v-for="item in bookList" :key="item.id" class="d-flex align-center justify-center">
                        <Cards :book="item" />
                    </v-col>
                </v-row>
            </div>
        </div>

        <!-- Sản phẩm mới - New  -->
        <div id="new">
            <div class="p-2 fw-semibold fs-5" style="background-color:  #e7f0fe;">
                <a href="#" class="text-dark text-decoration-none">Sản Phẩm Mới</a>
            </div>
            <div class="container-fluid px-0 py-2">
                <v-row class="p-2 m-0" :equal="{ sm: true, md: false }">
                    <v-col v-for="item in bookList" :key="item.id" class="d-flex align-center justify-center">
                        <Cards :book="item" />
                    </v-col>
                </v-row>
            </div>
        </div>

        <!-- Sản phẩm -->
        <div id="product">
            <div class="p-2 fw-semibold fs-5" style="background-color:  #e7f0fe;">
                <a href="#" class="text-dark text-decoration-none">Sản Phẩm</a>
            </div>
            <div class="container-fluid px-0 py-2">
                <v-row class="p-2 m-0" :equal="{ sm: true, md: false }">
                    <v-col v-for="item in bookList" :key="item.id" class="d-flex align-center justify-center">
                        <Cards :book="item" />
                    </v-col>
                </v-row>
            </div>
        </div>

    </div>
</template>

<script>
import Cards from '../components/Cards.vue';
import { useDataStore } from '../stores/dataStores';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiApps } from '@mdi/js'
import moment from 'moment';
export default {
    components: {
        Cards, SvgIcon
    },
    data() {
        return {
            bookList: useDataStore().getBooks,
            geneList: useDataStore().getGenes,
            tagList: useDataStore().getTagList,
            path: mdiApps,
            title: 'tất cả',
            dialog: false,
            upDown: true,
            selectTag: '',
            flag: 0,
        }
    },
    methods: {
        search() {
            if (this.$refs.search.value === '') {
                if (this.flag == 0) {
                    this.pillGenes(0)
                }
                else if (this.flag == 1) {
                    this.pillGenes(1, this.title)
                }
                else {
                    this.pillGenes(2, this.title)
                }
            }
            else {
                this.bookList = this.bookList.filter(item => {
                    var normalizedBookName = this.removeVietnameseTones(item.name).toLowerCase()
                    const searchTerm = this.removeVietnameseTones(this.$refs.search.value).toLowerCase()
                    return normalizedBookName.includes(searchTerm)
                })
                // this.bookList = this.bookList.filter(item =>
                //     item.name.toLowerCase().includes(this.$refs.search.value.toLowerCase())

                // )
            }
            // this.bookList=this.bookList.filter(item=>item.name)
            console.log(this.bookList)
            console.log(this.removeVietnameseTones(this.$refs.search.value))
        },
        removeVietnameseTones(str) {
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            str = str.replace(/đ/g, "d");
            str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            str = str.replace(/Đ/g, "D");
            // Some system encode vietnamese combining accent as individual utf-8 characters
            // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
            str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
            str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
            // Remove extra spaces
            // Bỏ các khoảng trắng liền nhau
            str = str.replace(/ + /g, " ");
            str = str.trim();
            // Remove punctuations
            // Bỏ dấu câu, kí tự đặc biệt
            str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
            return str;
        },
        upDown_Tag(e) {
            if (e === 0) {
                this.upDown = !this.upDown
                if (this.upDown) {
                    this.bookList.sort((a, b) => a.price - b.price);
                    console.log(this.bookList)
                    this.bookList = this.bookList.filter((item, index, array) => {
                        return index === 0 || item.price > array[index - 1].price;
                    });
                }
                else {
                    this.bookList.sort((a, b) => b.price - a.price);
                    console.log(this.bookList)
                    this.bookList = this.bookList.filter((item, index, array) => {
                        return index === 0 || item.price < array[index - 1].price;
                    });
                }
            }
            else {
                if (this.flag == 0) {
                    this.pillGenes(0)
                }
                else if (this.flag == 1) {
                    this.pillGenes(1, this.title)
                }
                else {
                    this.pillGenes(2, this.title)
                }
                this.bookList = this.bookList.filter(book => book.tag === this.selectTag)
            }
        },
        pillGenes(e, v) {
            if (e === 0) {
                this.bookList = useDataStore().getBooks
                this.title = 'tất cả'
                this.flag = 0
            }
            else if (e === 1) {
                this.bookList = useDataStore().getBooks
                var geneExists = this.geneList.filter(item => item.name === v)
                geneExists = geneExists[0]
                this.bookList = this.bookList.filter(book => geneExists.sub.some(gene => gene.name === book.gene[0]));
                this.title = v
                this.flag = 1
                console.log(geneExists)
                // console.log(this.bookList)
            }
            else {
                this.bookList = useDataStore().getBooks
                this.bookList = this.bookList.filter(book => book.gene.includes(v))
                this.title = v
                this.flag = 2
            }
        }
    },
    mounted() {
        var proList = useDataStore().getPromotionList
        var waitingList = []
        for (var i of proList) {
            const now = new Date();
            if (now > new Date(i.dateEnd)) {
                console.log("Đã kết thúc")
            }
            else if (now < new Date(i.dateBegin)) {
                console.log("Yet")
                const dateBegin = moment(i.dateBegin)
                var duration = moment.duration(dateBegin.diff(now)).asMinutes();
                if (duration < 30) {
                    waitingList.push(i)
                }
                console.log(duration)
            }
            else {
                for (var id of i.productList) {
                    useDataStore().updateProBook(id, i.pricePro, i.dateEnd)
                    console.log(this.bookList.filter(i => i.id == id))
                }
            }
        }
        console.log(waitingList)
        if (waitingList.length > 0) {
            var waiting = setInterval(() => {
                // console.log(waitingList)
                for (var i of waitingList) {
                    const now = moment();
                    if (now >= new Date(i.dateBegin) && now <= new Date(i.dateEnd)) {
                        for (var id of i.productList) {
                            useDataStore().updateProBook(id, i.pricePro, i.dateEnd)
                        }
                        waitingList = waitingList.filter(item => item.id !== i.id)
                    }
                    if (waitingList.length === 0) {
                        clearInterval(waiting)
                    }
                }
            }, 1000)
        }
    }
}
</script>

<style>
.gene:hover {
    color: orange;
    display: block;
}
</style>