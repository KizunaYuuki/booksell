<template>
    <div class="container border rounded">
        <Form @submit="submitContact" :validation-schema="contactFormSchema">
            <div class="row g-3 m-2 form-group">
                <div class="col-2">
                    <label for="name" class="col-form-label">Họ và Tên</label>
                </div>
                <div class="col-7">
                    <Field name="name" type="text" id="name" class="form-control" />
                    <ErrorMessage name="name" class="error-feedback" />
                </div>
            </div>
            <div class="row g-3 m-2 form-group">
                <div class="col-2">
                    <label for="phone" class="col-form-label">Số điện thoại</label>
                </div>
                <div class="col-7">
                    <Field name="phone" type="tel" id="phone" class="form-control" />
                    <ErrorMessage name="phone" class="error-feedback" />
                </div>
            </div>
            <div class="row g-3 m-2 form-group">
                <div class="col-2">
                    <label for="sex" class="col-form-label">Giới tính</label>
                </div>
                <div class="col-7">

                    <input type="radio" class="radio px-2" name="x" value="y" id="y" />
                    <label class="px-2" for="y">Nam</label>
                    <input type="radio" class="radio px-2" name="x" value="z" id="z" />
                    <label class="px-2" for="z">Nữ</label>
                    <!-- <ErrorMessage name="phone" class="error-feedback" /> -->
                </div>
            </div>
            <div class="row g-3 m-2 form-group">
                <div class="col-2">
                    <label for="brith" class="col-form-label">Ngày sinh</label>
                </div>
                <div class="col-7">
                    <input type="date" id="birth" name="birth">
                </div>
            </div>
            <div class="form-group row align-items-cente">
                <div class="align-items-center col">
                    <button style="background-color: red; border: none; margin: auto; " class="btn btn-primary">Lưu thay
                        đổi</button>
                </div>
            </div>

        </Form>
    </div>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    props: {
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            contactLocal: this.contact,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },

    },
};
</script>
