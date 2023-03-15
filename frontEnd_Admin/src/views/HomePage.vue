<template>
    <div style="padding: 20px;" class="row">
        <div class="col-sm-3 text-center d-flex align-center justify-center" style=" margin-bottom: 5px;">
            <v-dialog v-model="dialog" width="auto">
                <template v-slot:activator="{ props }">
                    <v-btn color="purple-accent-4" v-bind="props"
                        style="width: 0rem;height: fit-content; margin-right: 10px;">
                        <svg-icon size="40" type="mdi" :path="path"></svg-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title>
                        Danh mục sách
                    </v-card-title>
                    <v-card-text>
                        <h5 class="gene" @click="pillGenes(0)" type="button">Tất cả</h5>
                        <v-row>
                            <v-col v-for="item in geneList" :key="item.id">
                                <strong type="button" class="gene" @click="pillGenes(1, item.name)">{{ item.name }}</strong>
                                <p type="button" v-for="i in item.sub" :key="i.id" class="gene"
                                    @click="pillGenes(2, i.name)">{{ i.name }}
                                </p>
                            </v-col>
                            <v-col>
                                <strong type="button" class="gene" style="width: max-content;" @click="">Sách mới</strong>
                            </v-col>
                            <v-col>
                                <strong type="button" class="gene" style="width: max-content;" @click="">Khuyến mãi</strong>
                            </v-col>
                            <v-col>
                                <strong type="button" class="gene" style="width: max-content;" @click="">Hot</strong>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <!-- <v-select label="Nhãn" :items="tagList" item-title="name" variant="solo"
                style="margin:0 20px; max-width: 6.5rem;" v-model="selectTag"
                @update:model-value="upDown_Tag(1)"></v-select> -->
            <div v-if="upDown" @click="upDown_Tag(0)" type="button">
                <strong>Giá:</strong> <i style="font-size: 1.5rem;" class="fas fa-solid fa-arrow-up"></i>
            </div>
            <div v-else @click="upDown_Tag(0)" type="button">
                <strong>Giá:</strong> <i class="fas fa-solid fa-arrow-down" style="font-size: 1.5rem;"></i>
            </div>
        </div>
        <div class="col-sm-9">
            <v-text-field list="datalistOptions" variant="solo" append-inner-icon="mdi-magnify" ref="search"
                label="Tìm kiếm theo tên sách..." @input="search"></v-text-field>
            <datalist id="datalistOptions">
                <option v-for="item in bookList" :key="item.id" :value="item.name"></option>
            </datalist>
        </div>

    </div>
    <div>
        <h5 style="text-transform: uppercase; margin-left: 2rem;">{{ title }}</h5>
        <hr style="margin-top: -5px;">
    </div>
    <!-- style="display: flex; flex-wrap: wrap; justify-content: center; margin: 0 auto;" -->
    <div class="">
        <v-row :equal="{ sm: true, md: false }">
            <v-col v-for="item in bookList" :key="item.id" class="d-flex align-center justify-center">
                <Cards :book="item" />
            </v-col>
        </v-row>
        <!-- <div v-for="item in bookList" :key="item.id" style="margin: 15px 5px; width: 17rem;">
            
        </div> -->
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