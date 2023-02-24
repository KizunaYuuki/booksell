<template>
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#RegisterUserModal">
        Login
    </button> -->

    <!-- Modal -->
    <div class="modal fade" id="RegisterUserModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <!-- position-absolute top-50 start-50 translate-middle -->
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Đăng ký tài khoản</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    <Form class="container form" @submit="submitLogin" :validation-schema="adminSchema">
                        <div class="row">
                            <div class="col">


                                <!-- phone -->
                                <div class="form-group form-floating">
                                    <Field name="phone" type="text" class="form-control" placeholder="Số điện thoại"
                                        v-model="admin.phone" />
                                    <label for="phone">Số điện thoại</label>
                                    <ErrorMessage name="phone" class="error-feedback" />
                                </div>


                                <br />
                                <!-- name -->
                                <div class="form-group form-floating">
                                    <Field name="adminname" type="text" class="form-control" placeholder="Tên"
                                        v-model="admin.adminname" />
                                    <label for="adminname">Tên</label>
                                    <ErrorMessage name="adminname" class="error-feedback" />
                                </div>


                                <br />
                                <!-- password -->
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="form-floating">
                                            <Field name="password" v-bind:type="showPassword ? 'text' : 'password'"
                                                class="form-control" placeholder="Mật khẩu" v-model="admin.password" />
                                            <label for="password">Mật khẩu</label>
                                        </div>
                                        <span @click="showPasswordF" class="input-group-text user-select-none">{{
                                            msgShowPassword }}</span>
                                    </div>
                                    <ErrorMessage name="password" class="error-feedback" />
                                </div>


                                <br />
                                <!-- password confirm -->
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="form-floating">
                                            <Field name="comfirmpassword" type="password" class="form-control"
                                                placeholder="Xác nhận mật khẩu" />
                                            <label for="comfirmpassword">Xác nhận mật khẩu</label>
                                        </div>
                                        <span @click="showPasswordF" class="input-group-text user-select-none">{{
                                            msgShowPassword }}</span>
                                    </div>
                                    <ErrorMessage name="comfirmpassword" class="error-feedback" />
                                </div>


                                <br />
                                <!-- city -->
                                <div v-show="true" class="form-group form-floating mb-3">
                                    <select required class="form-select" aria-label="">
                                        <option value="">Hãy chọn một Tỉnh/Thành Phố</option>
                                        <option value="Cần Thơ">Cần Thơ</option>
                                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                        <option value="Vĩnh Long">Vĩnh Long</option>
                                    </select>
                                    <label for="city">Tỉnh/Thành Phố</label>
                                </div>



                                <!-- district -->
                                <!-- <div class="form-group form-floating mb-3">
                    <select class="form-select" aria-label="">
                        <option value="">Hãy chọn một Quận/Huyện</option>
                        <option value="Phụng Hiệp">Phụng Hiệp</option>
                        <option value="Châu Thành">Châu Thành</option>
                    </select>
                    <label for="district">Quận/Huyện</label>
                </div> -->


                                <!-- ward -->
                                <!-- <div class="form-group form-floating mb-3">
                    <select class="form-select" aria-label="">
                        <option value="">Hãy chọn một Xã/Phường</option>
                        <option value="Thạnh Hoà">Thạnh Hoà</option>
                        <option value="Hoà An">Hoà An</option>
                    </select>
                    <label for="ward">Xã/Phường</label>
                </div> -->


                                <!-- streetName -->
                                <!-- <div class="form-group form-floating mb-3">
                    <Field name="streetName" type="text" class="form-control" placeholder="Tên đường" />
                    <label for="streetName">Tên đường</label>
                    <ErrorMessage name="streetName" class="error-feedback" />
                </div> -->


                                <!-- register -->
                                <!-- <div class="form-group mb-3">
                    <button type="button" class="btn btn-outline-primary">Đăng ký</button>
                </div> -->


                                <br />
                                <!-- login -->
                                <div class="form-group">
                                    <a class="btn text-primary">Đăng nhập</a>
                                    <button type="submit" class="btn btn-primary float-end">Tạo tài khoản</button>
                                </div>


                            </div>
                        </div>



                    </Form>
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Ok</button>
                </div> -->
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
            phone: yup
                .string()
                .required("Số điện thoại bắt buộc phải có")
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
            adminname: yup
                .string()
                .required("Tên bắt buộc phải có")
                .min(3, "Tên phải có ít nhất 3 ký tự")
                .max(30, "Tên chứa nhiều nhất 30 ký tự"),
            password: yup
                .string()
                .required("Mật khẩu bắt buộc phải có")
                .min(3, "Mật khẩu phải có ít nhất 3 ký tự")
                .max(24, "Mật khẩu chứa nhiều nhất 30 ký tự"),
            comfirmpassword: yup
                .string()
                .required('Hãy nhập mật khẩu lần nữa')
                .oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp.'),

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
}</style>
