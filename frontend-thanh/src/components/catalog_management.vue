<template>
    <div class="container border shadow-sm">
        <h3 class="text-center" style="padding: 10px;">QUẢN LÝ DANH MỤC</h3>
        <hr />
        <div style="padding: 20px;">
            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" style="width: 15%;" role="tablist"
                    aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                        aria-selected="true">Thể loại</button>
                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                        aria-selected="false">Nhà cung cấp</button>
                    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                        aria-selected="false">Nhãn</button>
                    <!-- <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
                        aria-selected="false">Settings</button> -->
                </div>
                <div class="tab-content" id="v-pills-tabContent" style="width: 100%;">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                        aria-labelledby="v-pills-home-tab">
                        <Gene_Update />
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab">
                        <Supplier_Update />
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                        aria-labelledby="v-pills-messages-tab">
                        <Tags_Update />
                    </div>
                    <!-- <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                        aria-labelledby="v-pills-settings-tab">...</div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Gene_Update from './Gene_Update.vue'
import Supplier_Update from './Supplier_Update.vue';
import Tags_Update from './Tags_Update.vue'
export default {
    components: {
        Gene_Update, Supplier_Update, Tags_Update
    }
};
</script>