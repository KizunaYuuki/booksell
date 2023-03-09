<template>
    <v-text-field ref="numberInput" label="Nhập số lượng để lọc sản phẩm trong kho" v-model="searchTerm"
        @input="search"></v-text-field>
    <div>
        <v-table fixed-header height="350px">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sách</th>
                    <th>Tác giả</th>
                    <th>Nhà cung cấp</th>
                    <th>Giá gốc</th>
                    <th>Số lượng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (item, index) in bookList" :key="item.id">
                    <th>{{ index + 1 }}</th>
                    <th>{{ item.name }}</th>
                    <th>{{ item.author }}</th>
                    <th>{{ item.supplier }}</th>
                    <th>{{ item.price }}</th>
                    <th>{{ item.number }}</th>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import { useDataStore } from '../stores/dataStores';
export default {
    data() {
        return {
            bookList: useDataStore().getBooks,
            searchTerm: "",
        }
    },
    methods: {
        search() {
            if (this.searchTerm === '') {
                this.bookList = useDataStore().getBooks
            }
            else {
                this.bookList = useDataStore().getBooks
                this.bookList = this.bookList.filter(book => book.number === parseInt(this.searchTerm))
            }
            console.log(this.searchTerm)
        }

    }
}
</script>