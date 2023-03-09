<template>
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="putTitleGene('Thêm thể loại')"
        data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Thêm thể loại<i
            class="fas fa-solid fa-plus"></i></button>
    <button type="button" class="btn btn-danger" style="margin-left: 10px;">Xóa tất cả<i
            class="fas fa-regular fa-trash-can"></i></button> -->
    <h5>Danh sách các thể loại</h5>
    <v-expansion-panels variant="inset" class="my-4">
        <v-expansion-panel v-for="item in catalog_Api" :key="item.id" v-bind:value="item" :title="item.name">
            <v-list lines="one" bg-color="#FFFBE6">
                <v-list-item v-for="i in item.sub" :key="i.id" v-bind:value="i.name">
                    {{ item.name }}

                    <span type="button" @click="popList(item)" class="badge bg-danger">X</span>

                </v-list-item>
            </v-list>
        </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels multiple :readonly="readonly">
        <v-expansion-panel v-for="item in gene_Api" :key="item.id">
            <v-expansion-panel-title>{{ item.name }}</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-dialog v-model="dialog" persistent width="1024">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="outlined" size="x-small" icon v-bind="props" color="primary"
                            style="margin-right: 10px;">
                            <i class="fas fa-solid fa-plus"></i>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Thêm thể loại thuộc {{ item.name }}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-text-field label="Nhập tên thể loại" required></v-text-field>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" size="large" variant="text" @click="dialog = false">
                                Close
                            </v-btn>
                            <v-btn color="blue-darken-1" size="large" type="submmit" variant="text" @click="dialog = false">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-btn @click="selectCatalog" variant="outlined" size="x-small" icon color="error">
                    <i class="fas fa-regular fa-trash-can"></i>
                </v-btn>
                <v-list lines="one">
                    <v-list-item v-for="i in item.sub" :key="i.id" v-bind:value="i.name">
                        {{ i.name }}
                        <span type="button" @click="popList(item)" class="badge bg-danger">X</span>
                    </v-list-item>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { useDataStore } from '../stores/dataStores'
export default {
    components: {

    },
    data() {
        return {
            readonly: false,
            dialog: false,
            gene_Api: useDataStore().getGenes,
            select_Catalog: {},
            select_Gene: {},
            isVisible: false,
            title: null,
        }
    },
    methods: {
        selectCatalog() {
            this.isVisible = true
            console.log(this.select_Catalog)
        },
        putTitleGene(title) {
            this.$emit('TitleGene', title);
        },
        putTitleGeneEdit(title, value) {
            this.$emit('TitleGeneEdit', title, value);
        },

    }
}
</script>