<template>
    <Form class="container form shadow-sm p-4 mb-3" @submit="submitLogin" :validation-schema="adminSchema">
        <div class="row text-dark">
            <!-- <div class="col"></div> -->
            <div class="col">

                <!-- Đăng nhập  -->
                <div class="form-group form-floating mb-3 text-center">
                    <div class="fw-bold fs-6 text-danger py-3">Tên cửa hàng</div>
                    <div class="fw-bold fs-5">Đăng Nhập</div>
                    <small>Sử dụng tài khoản người bán</small>
                </div>

                <!-- name -->
                <hr class="text-danger" />
                <div class="form-group form-floating mb-3">
                    <Field name="name" type="text" class="form-control" placeholder="Tên" v-model="admin.name" />
                    <label for="name">Tên</label>
                    <ErrorMessage name="name" class="error-feedback" />
                </div>

                <!-- password -->
                <div class="form-group mb-3">
                    <div class="input-group">
                        <div class="form-floating">
                            <Field name="password" v-bind:type="showPassword ? 'text' : 'password'" class="form-control"
                                placeholder="Mật khẩu" v-model="admin.password" />
                            <label for="password">Mật khẩu</label>
                        </div>
                        <span @click="showPasswordF" class="input-group-text user-select-none">{{
                            msgShowPassword }}</span>
                    </div>
                    <ErrorMessage name="password" class="error-feedback" />
                </div>

                <!-- login -->
                <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary text-white">Đăng nhập</button>
                </div>

            </div>
        </div>

    </Form>
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
            name: yup
                .string(),
            // .required("Tên bắt buộc phải có")
            // .min(3, "Tên phải có ít nhất 3 ký tự")
            // .max(30, "Tên chứa nhiều nhất 30 ký tự"),
            password: yup
                .string()
            // .required("Mật khẩu bắt buộc phải có")
            // .min(3, "Mật khẩu phải có ít nhất 3 ký tự")
            // .max(24, "Mật khẩu chứa nhiều nhất 30 ký tự"),
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
