<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModa3">Thêm nhà cung
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
    <div class="modal fade" id="exampleModa3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm nhà cung cấp</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Tên:</label>
                            <input type="text" ref="inputName" class="form-control" id="recipient-name" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            supplier_Api: [
                { id: "123eqweq", name: "uuooo" },
                { id: "12353", name: "4353yy" },
                { id: "123qưeqsa", name: "yyyy" },
                { id: "12sad87", name: "qqqqqq" },
            ]
        }
    }
}
</script>