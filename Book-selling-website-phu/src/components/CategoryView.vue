<template>
    <div class="content">{{ show }}</div>
    <button type="button" class="btn btn-primary" @click="test1">Primary</button>
    <div class="">
    <v-row :equal="{ sm: true, md: false }">
        <v-col v-for="item in bookList" :key="item.id" class="d-flex align-center justify-center">
            <Cards :book="item" />
        </v-col>
    </v-row>
        
</div>
</template>
<script>
import {useDataStore} from '../store/dataStores';
import Cards from '../components/Card.vue';
export default{
    components:{
        Cards,
    },
    // data(){
    //     return{
    //         test: useDataStore().getGenreSelected
    //     }
    // },
    data() {
        return{
            listSelected:'',
            bookList: useDataStore().getBooks,
            test : useDataStore().getGenreSelected
        }
    },
    
    // computed:{
    //     test: useDataStore().getGenreSelected,
    // },
   methods:{
    test1(){
         this.test = useDataStore().getGenreSelected
        console.log(this.test)
    }
   }, 
   computed:{
    show(){
        return useDataStore().getGenreSelected
    }
   }
}
</script>

<style>
    .content{
        color: green;
    }
</style>