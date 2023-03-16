<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">BookStore</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active">
                            <category />
                        </a>
                    </li>


                </ul>
                <form class="d-flex w-50" role="search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Nhập tên sản phẩm"
                            aria-label="Nhập tên sản phẩm" aria-describedby="button-addon2">
                        <button class="btn btn-outline-secondary text-dark" type="button" id="button-addon2">Button</button>
                    </div>
                </form>

                <!-- <div class="col-sm " style="max-width: 50%;">

          <v-text-field list="datalistOptions" variant="solo" append-inner-icon="mdi-magnify"  class="  me-2" 
                label="Tìm kiếm theo tên sách..." @input="search"></v-text-field>
        </div> -->





                <div class="nav-item">


                    <v-menu open-on-hover>
                        <template v-slot:activator="{ props }">
                            <router-link v-if="login == 1" to="/acc" class="nav-link active" v-bind="props">
                                <v-icon icon="mdi-account"></v-icon>
                            </router-link>
                            <router-link v-if="login == 0" to="/login" class="nav-link active" v-bind="props">
                                <v-icon icon="mdi-account"></v-icon>
                            </router-link>
                        </template>
                        <v-list>

                            <v-list-item v-if="login == 0"><!-- //  chưa đăng nhập -->
                                <v-list-item-title><a href="#" class="nav-link" data-bs-toggle="modal"
                                        data-bs-target="#LoginUserModal">
                                        Đăng nhập</a>
                                </v-list-item-title>
                                <v-list-item-title><a href="#" class="nav-link" data-bs-toggle="modal"
                                        data-bs-target="#RegisterUserModal">
                                        Đăng ký</a>
                                </v-list-item-title>

                            </v-list-item>
                            <v-list-item v-if="login == 1"> <!--  // đã đăng nhập -->
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <a href="#" class="nav-link active">
                                            <v-sheet class="pb-2" v-bind="props" :color="isHovering ? '#d4d7d9' : undefined"
                                                :value="0">
                                                <v-list-item title="Lê Quang Phú" subtitle="Thành viên BookStore">
                                                </v-list-item>
                                            </v-sheet>
                                        </a>
                                    </template>
                                </v-hover>
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <router-link to="#" class="nav-link active">
                                            <v-sheet class=" ms-2 pb-2 " v-bind="props"
                                                :color="isHovering ? '#d4d7d9' : undefined">
                                                <router-link to="/acc" @click="selectItem(2)">Đơn hàng của tôi</router-link>
                                            </v-sheet>
                                        </router-link>

                                    </template>
                                </v-hover>
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <router-link to="#" class="nav-link active">
                                            <v-sheet class=" ms-2 pb-2 " v-bind="props"
                                                :color="isHovering ? '#d4d7d9' : undefined">
                                                Đăng xuất
                                            </v-sheet>
                                        </router-link>
                                    </template>
                                </v-hover>




                            </v-list-item>

                        </v-list>
                    </v-menu>


                </div>
                <div class="m-2">

                    <router-link class="text-decoration-none link-dark" to="/Cart"><v-icon
                            icon="mdi-cart"></v-icon></router-link>

                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import Category from "./Category.vue";
export default {
    components: {
        Category,
    },
    data: () => ({
        login: "1"
    }),
}
</script>
<style></style>

