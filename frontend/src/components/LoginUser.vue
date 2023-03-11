<template>
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Login
    </button> -->

    <!-- Modal -->
    <div class="modal fade" id="LoginUserModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <!-- position-absolute top-50 start-50 translate-middle -->
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Đăng nhập</h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form class="container form" @submit="submitLogin" :validation-schema="adminSchema">
                        <div class="row">
                            <!-- <div class="col"></div> -->
                            <div class="col">

                                <!-- name -->
                                <div class="form-group form-floating mb-3">
                                    <Field name="adminname" type="text" class="form-control" placeholder="Tên"
                                        v-model="admin.adminname" />
                                    <label for="adminname">Tên</label>
                                    <!-- <p class="fw-lighter">Sử dụng 3 ký tự trở lên, tối đa 30 ký tự</p> -->
                                    <ErrorMessage name="adminname" class="error-feedback" />
                                </div>

                                <!-- password -->
                                <div class="form-group mb-3">
                                    <div class="input-group">
                                        <div class="form-floating">
                                            <Field name="password" v-bind:type="showPassword ? 'text' : 'password'"
                                                class="form-control" placeholder="Mật khẩu" v-model="admin.password" />
                                            <label for="password">Mật khẩu</label>
                                        </div>
                                        <!-- Sau khi xử lý summit sẽ đổi thành button  -->
                                        <span @click="showPasswordF" class="input-group-text user-select-none">{{
                                            msgShowPassword }}</span>

                                    </div>
                                    <!-- <p class="fw-lighter">Sử dụng 4 ký tự trở lên</p> -->
                                    <ErrorMessage name="password" class="error-feedback" />
                                </div>

                                <!-- login -->
                                <hr />
                                <div class="form-group">
                                    <a class="btn btn-outline-primary">Tạo tài khoản</a>
                                    <button type="submit" class="btn btn-primary text-white float-end">Đăng nhập</button>
                                </div>

                            </div>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import axios from 'axios'
import * as yup from "yup";

export default {


    components: {
        Form,
        Field,
        ErrorMessage,
    },
    // emits: ['submit:admin'],
    // props: {
    //     admin: {
    //         type: Object, required: true
    //     }
    // },


    data() {
        const adminSchema = yup.object().shape({
            adminname: yup
                .string()
                .required("Tên phải bắt buộc phải có")
                .min(3, "Tên phải có ít nhất 3 ký tự")
                .max(30, "Tên chứa nhiều nhất 30 ký tự"),
            password: yup
                .string()
                .required("Mật khẩu bắt buộc phải có")
                .min(3, "Mật khẩu phải có ít nhất 3 ký tự")
                .max(24, "Mật khẩu chứa nhiều nhất 30 ký tự")
        })
        return {
            showPassword: false,
            msgShowPassword: 'Hiển thị',
            admin: {
                type: Object, required: true
            },
            adminSchema
            // admin: this.admin
        }
    },



    methods: {
        showPasswordF() {
            if (this.showPassword === false) {
                this.showPassword = true
                this.msgShowPassword = 'Ẩn'
            } else {
                this.showPassword = false
                this.msgShowPassword = 'Hiển thị'
            }

        },
        submitLogin() {
            // this.$emit("submit:admin", this.admin)
            axios
                .post('http://localhost:3000/admin/auth/login', this.admin)
                .then((response) => console.log(response))
        }
    }
}


</script>

<style scoped>
.form {
    max-width: 400px;
}
</style>
