<template>
    <h1>Signup</h1>
    <!-- <button type="button" class="btn btn-danger">Danger</button> -->
    <Form>
        <div class="form-group">
            <!-- <label for="phone">Số điện thoại</label> -->
            <Field name="phone" type="text" class="form-control" placeholder="Số điện thoại"/>
            <p class="fw-lighter">Số điện thoại có 10 chữ số, là giá trị bắt buộc</p>
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <!-- <label for="name">Tên người dùng</label> -->
            <Field name="name" type="text" class="form-control" placeholder="Tên người dùng"/>
            <p class="fw-lighter">Sử dụng 3 ký tự trở lên, tối đa 30 ký tự</p>
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <!-- <label for="password">Mật khẩu</label> -->
            <Field name="password" type="password" class="form-control" placeholder="Mật khẩu"/>
            <p class="fw-lighter">Sử dụng 4 ký tự trở lên</p>
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <!-- <label for="password-again">Xác nhận</label> -->
            <Field name="password-again" type="password" class="form-control" placeholder="Xác nhận mật khẩu"/>
            <p class="fw-lighter">Phải khớp với mật khẩu ở phía trên</p>
            <ErrorMessage name="password-again" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="city">Tỉnh/Thành Phố</label> 
            <select class="form-select" aria-label="">
                <option value="Cần Thơ">Cần Thơ</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Vĩnh Long">Vĩnh Long</option>
            </select>
        </div>
        <div class="form-group">
            <label for="district">Quận/Huyện</label>
            <select class="form-select" aria-label="">
                <option value="Phụng Hiệp">Phụng Hiệp</option>
                <option value="Châu Thành">Châu Thành</option>
            </select>
        </div>
        <div class="form-group">
            <label for="ward">Xã/Phường</label>
            <select class="form-select" aria-label="">
                <option value="Thạnh Hoà">Thạnh Hoà</option>
                <option value="Hoà An">Hoà An</option>
            </select>
        </div>
        <div class="form-group">
            
            <Field name="streetName" type="text" class="form-control" placeholder="Tên đường"/>
            <ErrorMessage name="streetName" class="error-feedback"/>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-outline-primary">Đăng ký</button>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-outline-primary">Đăng nhập</button>
        </div>
    </Form>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    }
}
</script>


show