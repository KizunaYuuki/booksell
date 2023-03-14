<template>
    <div style="padding: 20px;">
        <h3 class="text-center" style="color: #356859;">THỐNG KÊ</h3>
        <hr>
        <v-card>
            <v-tabs v-model="tab" bg-color="teal-darken-3" show-arrows slider-color="teal-lighten-3">
                <v-tab value="tab1">
                    Doanh thu
                </v-tab>
                <v-tab value="tab2">
                    Kho
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="tab1">
                    <v-card color="basil" flat style="padding: 10px;">ádads
                    </v-card>
                </v-window-item>
                <v-window-item value="tab2">
                    <v-card color="basil" flat style="padding: 10px;">
                        <Inventory_Statistics />
                    </v-card>
                </v-window-item>

            </v-window>
        </v-card>
    </div>
</template>

<script>
import Inventory_Statistics from '../components/Inventory_Statistics.vue';
export default {
    components: {
        Inventory_Statistics
    },
    data() {
        return {
            tab: 'Statistical'
        }
    }
}
</script>