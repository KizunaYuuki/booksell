<template>
    <v-dialog v-model="dialog" persistent width="1024">
        <template v-slot:activator="{ props }">
            <v-btn color="primary" variant="outlined" v-bind="props">Thêm nhãn <i class="fas fa-solid fa-plus"></i></v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Thêm nhãn mới</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-text-field label="Nhập tên nhãn" required></v-text-field>
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
    <v-btn color="error" variant="outlined" style="margin-left: 10px;">Xóa tất cả<i
            class="fas fa-regular fa-trash-can"></i></v-btn>
    <div style="padding: 10px;">
        <h6>Danh sách các nhãn</h6>
        <v-list lines="one" bg-color="#FFFBE6">
            <v-list-item v-for="item in tags_Api" :key="item.id" v-bind:value="item">
                {{ item.name }}
                <span type="button" @click="popList(item)" class="badge bg-danger">X</span>
            </v-list-item>
        </v-list>
    </div>
    <!-- Modal Form -->
</template>

<script>

export default {
    components: {

    },
    data() {
        return {
            dialog: false,
            tags_Api: [
                { id: "123eqweq", name: "Hot" },
                { id: "12353", name: "New" },
                { id: "123qưeqsa", name: "Sale" },
                { id: "12sad87", name: "qqqqqq" },
            ]
        }
    },
    methods: {
        putTitleTag(title) {
            this.$emit('TitleTag', title);
        },
    },
}
</script>