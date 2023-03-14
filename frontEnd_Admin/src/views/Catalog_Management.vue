<template>
    <div class="container" style="padding: 30px;">
        <!-- <h3 class="text-center" style="padding: 10px;">QUẢN LÝ DANH MỤC</h3>
        <hr /> -->
        <h3 class="font-weight-bold  text-basil text-center">QUẢN LÝ DANH MỤC</h3>
        <Gene_Update @TitleGene="AddGene" @TitleGeneEdit="EditGene" />

    </div>
</template>

<script>
import Gene_Update from '../components/Gene_Update.vue'
export default {
    components: {
        Gene_Update,
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