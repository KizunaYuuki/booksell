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
                    <h5 class="modal-title" id="staticBackdropLabel">Đăng Ký Tài Khoản - Test</h5>
                    <!-- <img alt="Vue logo" class="logo" src="../assets/login_FILL0_wght400_GRAD0_opsz48.svg" width="125" height="125" /> -->


                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form class="container form" @submit="submitLogin" :validation-schema="userSchema">
                        <div class="row">
                            <!-- <div class="col"></div> -->
                            <div class="col">


                                <!-- phone -->
                                <div class="form-group form-floating mb-2">
                                    <Field name="phone" type="text" class="form-control" placeholder="Số điện thoại" />
                                    <label for="phone">Số điện thoại</label>
                                    <ErrorMessage name="phone" class="error-feedback" />
                                </div>


                                <!-- name -->
                                <div class="form-group form-floating mb-2">
                                    <Field name="name" type="text" class="form-control" placeholder="Tên"
                                        v-model="user.name" />
                                    <label class="fs-6" for="name">Tên</label>
                                    <ErrorMessage name="name" class="error-feedback" />
                                </div>


                                <!-- password -->
                                <div class="form-group mb-2">
                                    <div class="input-group">
                                        <div class="form-floating">
                                            <Field name="password" v-bind:type="showPassword ? 'text' : 'password'"
                                                class="form-control" placeholder="Mật khẩu" v-model="user.password" />
                                            <label class="fs-6" for="password">Mật khẩu</label>
                                        </div>
                                        <!-- Sau khi xử lý summit sẽ đổi thành button  -->
                                        <span @click="showPasswordF" class="input-group-text user-select-none">{{
                                            msgShowPassword }}</span>

                                    </div>
                                    <!-- <p class="fw-lighter">Sử dụng 4 ký tự trở lên</p> -->
                                    <ErrorMessage name="password" class="error-feedback" />
                                </div>


                                <!-- password confirm -->
                                <div class="form-group mb-2">
                                    <div class="input-group">
                                        <div class="form-floating">
                                            <Field name="comfirmpassword" type="password" class="form-control"
                                                placeholder="Xác nhận mật khẩu" />
                                            <label class="fs-6" for="comfirmpassword">Xác nhận mật khẩu</label>
                                        </div>
                                        <span @click="showPasswordF" class="input-group-text user-select-none">{{
                                            msgShowPassword }}</span>
                                    </div>
                                    <ErrorMessage name="comfirmpassword" class="error-feedback" />
                                </div>


                                <!-- sex -->
                                <div v-show="true" class="form-group form-floating mb-2">
                                    <select required class="form-select" aria-label="">
                                        <option selected value="sex">---</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                    <label class="fs-6" for="sex">Giới tính</label>
                                </div>


                                <!-- birthday -->
                                <div class="form-group form-floating mb-2">
                                    <Field name="birthday" type="date" class="form-control" placeholder="Tên"
                                        v-model="user.dateOfBirth" />
                                    <label class="fs-6" for="birthday">Ngày Sinh</label>
                                    <ErrorMessage name="birthday" class="error-feedback" />
                                </div>


                                <!-- city -->
                                <!-- <div v-show="true" class="form-group form-floating mb-2">
                                    <select required class="form-select" aria-label="">
                                        <option value="">Hãy chọn một Tỉnh/Thành Phố</option>
                                        <option value="Cần Thơ">Cần Thơ</option>
                                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                        <option value="Vĩnh Long">Vĩnh Long</option>
                                    </select>
                                    <label class="fs-6" for="city">Tỉnh/Thành Phố</label>
                                </div> -->


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


                                <!-- login -->
                                <div class="form-group fs-6 mb-2 d-flex justify-content-between">
                                    <a class="btn btn-outline-primary">Tạo tài khoản</a>
                                    <button type="submit" class="btn btn-primary">Đăng nhập</button>
                                </div>


                            </div>



                            <!-- <div class="col"><img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"/></div> -->
                            <!-- <div class="col"></div> -->
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
    // emits: ['submit:user'],
    // props: {
    //     user: {
    //         type: Object, required: true
    //     }
    // },


    data() {
        const userSchema = yup.object().shape({
            dateOfBirth: yup
                .date(),
            name: yup
                .string()
                .required("Tên phải bắt buộc phải có")
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
            registerDate: yup
                .date(),
            sex: yup
                .boolean(),
            phone: yup
                .string()
                .required("Số điện thoại bắt buộc phải có")
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        })
        return {
            showPassword: false,
            msgShowPassword: 'Hiển thị',
            user: {
                type: Object, required: true
            },
            userSchema
            // user: this.user
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
            // this.$emit("submit:user", this.user)
            axios
                .post('http://localhost:3000/user/auth/login', this.user)
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
