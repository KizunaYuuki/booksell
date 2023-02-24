<template>
    <div class="row">
        <div class="col-md-6">
            <h6 for="inputState" class="">Chọn danh mục</h6>
            <select id="inputState" class="form-select" v-model="select_Catalog"
                @change="selectCatalog($event.target.value)">
                <option v-for="item in catalog_Api" :key="item.id" v-bind:value="item">{{
                    item.name
                }}</option>
            </select>
        </div>
        <div class="col-md-6">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="changeTitle('Thêm danh mục')"
                data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Thêm danh mục <i
                    class="fas fa-solid fa-plus"></i></button>
            <button type="button" class="btn btn-danger" style="margin-left: 10px;">Xóa tất cả danh
                mục <i class="fas fa-regular fa-trash-can"></i></button>
        </div>

    </div>
    <div style="padding: 10px;" v-if="isVisible">
        <div style="display: flex; align-items: center; padding: 5px;">
            <h4 style="margin-right: 5px;">{{ select_Catalog.name }}</h4>
            <div @click="changeTitle('Chỉnh sửa danh mục')">
                <i class="fas fa-regular fa-pen-to-square text-warning" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" style="margin-right:  5px;"></i>
            </div>
            <div>
                <i class="fas fa-solid fa-delete-left text-danger" style="margin-right: 5px;"></i>
            </div>
        </div>
        <div>
            <h6>Danh sách các thể loại
                <span class="badge bg-primary" @click="changeTitle('Thêm thể loại')" style="margin-right: 5px;">Thêm
                    <i class="fas fa-solid fa-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></span>
                <span class="badge bg-danger">Xóa tất cả<i class="fas fa-regular fa-trash-can"></i></span>
            </h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" style="display: flex; align-items: center;"
                    v-for="item in gene_Api[select_Catalog.name]" :key="item.id" v-bind:value="item">
                    <strong>{{ item.name }}</strong>
                    <div @click="changeTitle('Chỉnh sửa thể loại', item)"><i
                            class="fas fa-regular fa-pen-to-square text-warning" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" style="margin-left: 5px; pointer-events: auto;"></i></div>
                    <div><i class="fas fa-solid fa-delete-left text-danger"
                            style="margin-left: 5px; pointer-events: auto;"></i></div>
                </li>

            </ul>
        </div>
    </div>
    <!-- Modal Form -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
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
    components: {

    },
    data() {
        return {

            catalog_Api: [
                {
                    id: "sdae3e",
                    name: "AAAA"
                },
                {
                    id: "231asđ",
                    name: "VVV"
                },
                {
                    id: "s675675",
                    name: "GGGGG"
                },
            ],
            gene_Api: {
                AAAA: [
                    {
                        id: "123",
                        name: "co tich"
                    },
                    {
                        id: "1245",
                        name: "co zzzz"
                    },
                ],
                VVV: [
                    {
                        id: "12356",
                        name: "co tttt"
                    },
                    {
                        id: "1245aa",
                        name: "co 8977"
                    },
                ],
                GGGGG: [
                    {
                        id: "123000",
                        name: "46dgd"
                    },
                    {
                        id: "1245czxzc",
                        name: "gdfgdg09879"
                    },
                ],
            },
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
        changeTitle(e, item) {
            this.title = e
            if (e === 'Chỉnh sửa danh mục') {
                this.$refs.inputName.value = this.select_Catalog.name
            }
            else if (e === 'Chỉnh sửa thể loại') {
                this.select_Gene = item
                this.$refs.inputName.value = this.select_Gene.name
            }
            else {
                this.$refs.inputName.value = null
            }

        },
        addCatalog(e) {
            this.title = e
        },
        editCatalog(e) {
            this.title = e
        },
        addGene(e) {
            this.title = e
        },
        editGene(e) {
            this.title = 'adds'
            console.log(e)
        },
    }
}
</script>