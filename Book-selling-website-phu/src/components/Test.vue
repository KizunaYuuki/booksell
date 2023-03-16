<template>
    <div class="">
    <v-row :equal="{ sm: true, md: false }">
        <v-col v-for="item in bookList" :key="item.id" class="d-flex align-center justify-center">
            <Cards :book="item" />
        </v-col>
    </v-row>
        
</div>

</template>
<script>
import Cards from '../components/Card.vue';
import { useDataStore } from '../store/dataStores';
export default{
    components:{
        Cards,
    },
    data() {
        return {
            bookList: useDataStore().getBooks
            
        }
    }
}

</script>