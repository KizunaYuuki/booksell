<template>
    <button type="button" class="btn btn-primary" @click="putTitleSupplier('Thêm nhà cung cấp mới')"
        data-bs-toggle="modal" data-bs-target="#exampleModal">Thêm nhà cung
        cấp <i class="fas fa-solid fa-plus"></i></button>
    <button type="button" class="btn btn-danger" style="margin-left: 10px;">Xóa tất cả<i
            class="fas fa-regular fa-trash-can"></i></button>
    <div style="padding: 10px;">
        <h6>Danh sách các nhà cung cấp</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" style="display: flex; align-items: center;" v-for="item in supplier_Api"
                :key="item.id" v-bind:value="item">{{ item.name }}
                <div>
                    <i class="fas fa-solid fa-delete-left text-danger" style="margin-left: 5px; "></i>
                </div>
            </li>
        </ul>
    </div>
    <!-- Modal Form -->

</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            supplier_Api: [
                { id: "123eqweq", name: "uuooo" },
                { id: "12353", name: "4353yy" },
                { id: "123qưeqsa", name: "yyyy" },
                { id: "12sad87", name: "qqqqqq" },
            ]
        }
    },
    methods: {
        putTitleSupplier(title) {
            this.$emit('TitleSupplier', title);
        },
    }
}
</script>