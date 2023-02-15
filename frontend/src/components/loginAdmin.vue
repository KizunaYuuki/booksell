<template>
    <h1>Signup</h1>
    <Form >
        <div class="form-group">
            <label for="name">Tên người dùng</label>
            <Field name="name" type="text" class="form-control" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
            <Field name="address" type="text" class="form-control" />
            <ErrorMessage name="address" class="error-feedback" />
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
    },
    // emits: ["submit:contact", "delete:contact"],
    // props: {
    //     contact: { type: Object, required: true }
    // },
    // data() {
    //     const contactFormSchema = yup.object().shape({
    //         name: yup
    //             .string()
    //             .required("Tên phải có giá trị.")
    //             .min(2, "Tên phải ít nhất 2 ký tự.")
    //             .max(50, "Tên có nhiều nhất 50 ký tự."),
    //         email: yup
    //             .string()
    //             .email("E-mail không đúng.")
    //             .max(50, "E-mail tối đa 50 ký tự."),
    //         address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
    //         phone: yup
    //             .string()
    //             .matches(
    //                 /((09|03|07|08|05)+([0-9]{8})\b)/g,
    //                 "Số điện thoại không hợp lệ."
    //             ),
    //     });
    //     return {
    //         // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
    //         // contactLocal để liên kết với các input trên form
    //         contactLocal: this.contact,
    //         contactFormSchema,
    //     };
    // },
    // methods: {
    //     submitContact() {
    //         this.$emit("submit:contact", this.contactLocal);
    //     },
    //     deleteContact() {
    //         this.$emit("delete:contact", this.contactLocal.id);
    //     },
    // },
};
</script>