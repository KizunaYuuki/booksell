<template>
    <div class="container rounded shadow-sm" style="padding: 30px; border: 1px solid #E6E6E6;">
        <!-- <h3 class="text-center" style="padding: 10px;">QUẢN LÝ DANH MỤC</h3>
        <hr /> -->
        <v-card color="basil">
            <v-card-title class="text-center justify-center py-6">
                <h3 class="font-weight-bold  text-basil">
                    QUẢN LÝ DANH MỤC
                </h3>
            </v-card-title>

            <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
                <v-tab value="tab1">
                    <p>Thể loại</p>
                </v-tab>
                <v-tab value="tab2">
                    <p>Nhãn</p>
                </v-tab>
            </v-tabs>

            <v-window v-model="tab">
                <v-window-item value="tab1">
                    <v-card color="basil" flat style="padding: 20px;">
                        <Gene_Update @TitleGene="AddGene" @TitleGeneEdit="EditGene" />
                    </v-card>
                </v-window-item>
                <v-window-item value="tab2">
                    <v-card color="basil" flat style="padding: 10px;">
                        <Tags_Update @TitleTag="AddTag" />
                    </v-card>
                </v-window-item>
            </v-window>
        </v-card>
    </div>
</template>

<script>
import Gene_Update from './Gene_Update.vue'
import Supplier_Update from './Supplier_Update.vue';
import Tags_Update from './Tags_Update.vue'
import ModelForm_Update from './ModelForm_Update.vue';
export default {
    components: {
        Gene_Update, Supplier_Update, Tags_Update, ModelForm_Update
    },
    data() {
        return {
            title: null,
            data: {},
            tab: 'Appetizers',
            items: [
                'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
            ],
        }

    },
    methods: {
        AddGene(mytitle) {
            this.title = mytitle
            this.$refs.inputName.value = null
        },
        EditGene(mytitle, value) {
            this.title = mytitle;
            this.data = value
            this.$refs.inputName.value = this.data.name
            // console.log(this.data.name)
        },
        AddTag(mytitle) {
            this.title = mytitle
        },
        AddSupplier(mytitle) {
            this.title = mytitle
        }
    }
};
</script>

<style>
.bg-basil {
    background-color: #FFFBE6 !important;
}

.text-basil {
    color: #356859 !important;
}
</style>