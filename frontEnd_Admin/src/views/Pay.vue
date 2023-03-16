<template>
    <title>Thông tin vận chuyển - Đặt hàng</title>
    <div class="container-sm text-dark py-2">
        <div class="row">

            <!-- Nội dung bên trái: Thông tin khách hàng và địa chỉ giao hàng -->
            <div class="col-auto col-sm-6">

                <!-- Thanh điều hướng  -->
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">

                        <div class="collapse navbar-collapse" id="navbarNav">

                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <small><a class="nav-link" aria-current="page" href="/Cart">Giỏ hàng</a></small>
                                </li>
                                <li class="nav-item">
                                    <small><a class="nav-link disabled user-select-none" aria-current="page"
                                            href="/Pay">></a></small>
                                </li>
                                <li class="nav-item">
                                    <small><a class="nav-link active" href="#">Thông tin vận chuyển - Đặt hàng</a></small>
                                </li>

                            </ul>

                        </div>

                    </div>

                </nav>

                <!-- Tiêu đề -->
                <div class="container">
                    <div class="p-2 fs-5">
                        Thông tin đơn hàng
                    </div>
                </div>

                <!-- Thẻ, chứa thông tin người dùng (Tên, email, nút đăng xuất) -->
                <div class="container">
                    <ul class="list-group px-2">
                        <li class="list-group-item fw-bolder">
                            <div><a class="me-2 fa-solid fa-user"></a>Khánh (0330006710)<a href="#"
                                    class="text-decoration-none mx-2 text-danger">Đăng xuất</a></div>
                        </li>
                    </ul>
                </div>


                <!-- Input thông tin người dùng -->
                <div class="container">
                    <div class="p-2">

                        <!-- Địa chỉ giao hàng - select -->
                        <div class="form-group form-floating mb-2">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Chọn Địa Chỉ</option>
                            </select>
                            <label class="fs-6" for="floatingInput">Địa chỉ</label>
                        </div>

                        <!-- Tên khách hàng -->
                        <div class="form-floating mb-2">
                            <input type="email" class="form-control" placeholder="name@example.com">
                            <label class="fs-6" for="floatingInput">Họ tên</label>
                        </div>

                        <!-- Số điện thoại  -->
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" placeholder="name@example.com">
                            <label class="fs-6" for="floatingInput">Số điện thoại</label>
                        </div>


                        <!-- Địa chỉ - input-->
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" placeholder="name@example.com">
                            <label class="fs-6" for="floatingInput">Địa chỉ</label>
                        </div>


                        <!-- Chọn Tỉnh, Quận, Huyện theo Select -->
                        <AddressVue />


                        <!-- Chọn phương thức thanh toán -->
                        <div class="form-group form-floating mb-2">
                            <select required class="form-select" aria-label="">
                                <option selected value="payment">Chọn phương thức thanh toán</option>
                                <option value="cash">Thanh toán khi nhận hàng</option>
                                <option value="bankTransfer">Chuyển khoản</option>
                            </select>
                            <label class="fs-6" for="payment">Phương thức thanh toán</label>
                        </div>


                        <!-- Nút Giỏ hàng và Chọn phương thức thanh toán -->
                        <div class="d-flex justify-content-between">
                            <a class="btn btn-outline-primary">Giỏ hàng</a>
                            <button class="btn btn-primary">Đặt hàng</button>
                        </div>

                    </div>
                </div>

            </div>

            <!-- Ngắt cột cho thích hợp với giao điện di động  -->
            <!-- <div class="w-100"></div> -->

            <!-- Nội dung bên phải: Thông tin thông tin sản phẩm, giảm giá -->
            <div class="col-auto col-sm-6 border-start">

                <!-- Danh sách sản phẩm - sách  -->
                <div class="container">

                    <table class="table">
                        <tbody>

                            <tr style="font-size: 12px;">
                                <td class="" style="width: 20%">
                                    <div class="figure position-relative">
                                        <img src="https://product.hstatic.net/200000343865/product/4_5f9624b1ec774721962320840ac57f15_master.jpg"
                                            width="60" class="rounded" alt="...">
                                        <span
                                            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                                    </div>
                                </td>
                                <td class="align-middle fw-bold" style="width: 70%;">Kaguya - Cuộc chiến tỏ tình - Tập 4
                                    (Tặng Kèm 1
                                    Trong 2 Mẫu Thẻ Học Sinh)</td>
                                <td class="align-middle" style="width: 10%;">
                                    <!-- <div class="text-decoration-line-through text-muted">40000đ</div>
                                    <hr /> -->
                                    <div class="text-danger fw-bolder">36000đ</div>
                                </td>
                            </tr>

                            <tr style="font-size: 12px;">
                                <td class="" style="width: 20%">
                                    <div class="figure position-relative">
                                        <img src="https://product.hstatic.net/200000343865/product/4_5f9624b1ec774721962320840ac57f15_master.jpg"
                                            width="60" class="rounded" alt="...">
                                        <span
                                            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                                    </div>
                                </td>
                                <td class="align-middle fw-bold" style="width: 70%;">Kaguya - Cuộc chiến tỏ tình - Tập 10
                                    (Tặng Kèm
                                    1 Trong 2 Clear File)</td>
                                <td class="align-middle" style="width: 10%;">
                                    <!-- <div class="text-decoration-line-through text-muted">40000đ</div>
                                    <hr /> -->
                                    <div class="text-danger fw-bolder">36000đ</div>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                <!-- Mã giảm giá  -->

                <!-- Giá gốc -->
                <!-- <div class="container">

                    <div class="d-flex justify-content-between py-2">
                        <small class="text-secondary">Giá gốc</small>
                        <small class="">36000đ</small>
                    </div>

                </div> -->


                <!-- <hr /> -->
                <!-- Tạm tính, Phi Ship -->
                <div class="container px-5">

                    <div class="d-flex justify-content-between py-2">
                        <small class="text-muted">Tính tạm</small>
                        <small class="">72000đ</small>
                    </div>
                    <div class="d-flex justify-content-between">
                        <small class="text-muted">Phí Ship</small>
                        <small class="">30000đ</small>
                    </div>

                </div>


                <hr />
                <!-- Tổng tiền -->
                <div class="container px-5">

                    <div class="d-flex justify-content-between">
                        <div class="text-muted fs-6">Tổng tiền</div>
                        <div class="fw-bolder">102000đ</div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import AddressVue from '../components/Address.vue';
</script>