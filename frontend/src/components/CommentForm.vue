<template>
    <Form class="container form py-2" @submit="submitComment" :validation-schema="commentSchema">

        <!-- Đánh giá  -->
        <div class="form-group fs-6 mb-2 d-flex justify-content-end">
            <star-rating class="" :show-rating="false" rating="" star-size="24" />
        </div>

        <!-- Nội dung bình luận  -->
        <div class="form-group form-floating mb-2">
            <Field class="form-control" v-slot="{ field }" v-model="content" name="content" rules="required">
                <textarea v-bind="field" class="form-control" placeholder="Leave a comment here"
                    style="min-height: 60px;"></textarea>
            </Field>
            <label for="content">Nội dung bình luận</label>
        </div>


        <!-- Nút thêm bình luận  -->
        <div class="form-group fs-6 mb-2 d-flex justify-content-end">
            <div class="px-2"><a class="btn btn-outline-primary">Huỷ</a></div>
            <button type="submit" class="btn btn-primary">Bình luận</button>
        </div>
    </Form>
</template>

<script>

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import StarRating from 'vue-star-rating'

export default {

    components: {
        Form, Field, ErrorMessage,
        StarRating,
    },

    data() {
        const commentSchema = yup.object().shape({
            content: yup
                .string(),
            rateStar: yup
                .number()
                .min(1)
                .max(5),
        })
        return {
            commentSchema
        }
    },

    methods: {
        submitComment() {

        }
    }
}

</script>

<style scoped></style>