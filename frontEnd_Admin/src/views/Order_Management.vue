<template>
    <h3 class="text-center font-weight-bold" style="padding: 30px; color: #356859;">QUẢN LÝ ĐƠN HÀNG</h3>
    <hr />
    <v-card>
        <v-tabs v-model="tab" centered stacked>
            <v-tab value="tab-1">
                <v-badge v-if="info > 0" color="red" dot style="width: 12.5rem;">
                    <p>Xác nhận đơn hàng</p>
                </v-badge>
                <p v-else>Xác nhận đơn hàng</p>
            </v-tab>
            <v-tab value="tab-2">
                <p>Đơn hàng hoàn trả</p>
            </v-tab>
            <!-- <v-tab value="tab-3">
                Nearby
            </v-tab> -->
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item value="tab-1">
                <v-card style="padding: 10px;">
                    <Order_Confirmation @info="infoNumber" />
                </v-card>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script>
import { useDataStore } from '../stores/dataStores';
import Order_Confirmation from '../components/Order_Confirmation.vue';
export default {
    components: {
        Order_Confirmation
    },
    data() {
        return {
            info: 0,
            tab: null,
        }
    },
    methods: {
        infoNumber(e) {
            this.info = e
            // console.log(this.info)
        }
    },
    mounted() {
    }
}
</script>