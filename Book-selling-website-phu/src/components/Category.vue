<template>
    
        <v-menu open-on-hover>
            <template v-slot:activator="{ props}">
                <div v-bind="props">
                    Danh mục sản phẩm
                </div>
            </template>
            <v-list>
                <v-list-item v-for="(category, index) in category" :key="index" :value="index" @click="getGenreClick(0,category)">
                    <v-menu :location= "location" open-on-hover >
                        <template v-slot:activator="{ props }">
                            <v-list-item-title v-bind="props" class="hover-item" >
                                <router-link 
                                to=""
                                
                                ></router-link>
                                {{ category.genreName }}
                            </v-list-item-title>
                        </template>
                        <v-list>
                            <v-list-item v-for="(subGenre, index) in category.subGenre" :key="index" :value="index" @click="getGenreClick(1,subGenre)">
                                <v-list-item-title>{{ subGenre }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item>
            </v-list>
        </v-menu>
    
</template>
<script>
import axios from 'axios';
import {useDataStore} from '../store/dataStores';
export default {
    methods:{
        getGenreClick(line,data){
            
            if (line==0){
                //console.log(data.genreName)
                //console.log(data.subGenre)
                useDataStore().setGenreSelected(data.subGenre)
                //console.log(useDataStore().getGenreSelected)
            }
            else {
                console.log(data)
                useDataStore().setGenreSelected(data)
            }
                

    },
    },
    mounted() {
        axios
            .get('http://localhost:3000/api/genres')
            .then((response) => {
                 useDataStore().getAPIGenes(response.data)
                 
                 this.category=useDataStore().getGenes
                
            })
    },    
    
    // data: () => ({
    //     category:[],
    //     location: 'end',
    // }),
    data(){
        return{
             category:[],
            location: 'end',
            genreClick: null
        }
    }
}
</script>


<style>
.v-list-item:hover {
    color: red;
}
.v-sheet{
    background-color: transparent;
}
</style>