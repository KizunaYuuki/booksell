<template>
    <div class="rounded border shadow-sm" style="display: flex;
    ">
        <div style="width: 30rem; padding: 10px;">
            <Carousel_ImgVue>
            </Carousel_ImgVue>
        </div>
        <div style="width: 60rem; padding: 10px;">
            <h4>Title</h4>
            <div class="row gx-5">
                <p class="col">Nhà cung cấp: <a href="#">zzz</a></p>
                <p class="col">Tác giả: <strong>xxx</strong></p>
            </div>
            <div class="row gx-5">
                <p class="col">Nhà xuất bản: <strong>zzzzz</strong></p>
                <p class="col">Năm xuất bản: <strong>xxx</strong></p>
            </div>
            <div class="row gx-5">
                <p class="col">Kích cỡ: <strong>12 x 14</strong></p>
                <p class="col">Số trang: <strong>100</strong></p>
            </div>
            <div style="display: flex; justify-content: center; align-items: center;">
                <h2 style="padding: 20px;">2000&#8363;</h2>
                <h4 style="text-decoration: line-through;">1000&#8363;</h4>
                <h5 style="margin-left: 10px;"><span class="badge bg-danger">New</span></h5>
            </div>
            <div>
                <h6>Số lượng sách còn lại: <strong>9</strong></h6>
                <p>Đổi trả trong 30 ngày <Modal></Modal>
                </p>
            </div>
            <div style="display: flex; align-items: center;">
                <h3>Số lượng</h3>
                <div class="input-group" style="width: 124px; margin-left: 20px;">
                    <button class="input-group-text">-</button>
                    <input type="number" min="1" max="999" class="form-control"
                        aria-label="Amount (to the nearest dollar)">
                    <button class="input-group-text">+</button>
                </div>
            </div>
        </div>
    </div>
    <div class="rounded border shadow-sm" style="margin-top: 10px; padding: 10px;">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">Thông tin sản phẩm</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Review</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Giá sản
                phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức
                và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí
                hàng cồng kềnh,...
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <Comments></Comments>
            </div>
        </div>
    </div>

</template>

<script>
import Carousel_ImgVue from './Carousel_Img.vue';
import Modal from './Modal.vue'
import Comments from './Comments.vue'
export default {
    components: {
        Carousel_ImgVue, Modal, Comments
    }

}
</script>