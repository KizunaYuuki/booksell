<script>
// let response = await fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
// let commits = await response.json()
// console.log(commits)
</script>
<template>
    <div class="container">
        <div class="row border container">

            <!-- Nội dung bên trái: Thông tin khách hàng và địa chỉ giao hàng -->
            <div class="col-7">

                <!-- Thanh điều hướng  -->
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">

                        <div class="collapse navbar-collapse" id="navbarNav">

                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <small><a class="nav-link" aria-current="page" href="#">Giỏ hàng</a></small>
                                </li>
                                <li class="nav-item">
                                    <small><a class="nav-link disabled user-select-none" aria-current="page"
                                            href="#">></a></small>
                                </li>
                                <li class="nav-item">
                                    <small><a class="nav-link active" href="#">Thông tin vận chuyển</a></small>
                                </li>
                                <li class="nav-item">
                                    <small><a class="nav-link disabled user-select-none" aria-current="page"
                                            href="#">></a></small>
                                </li>
                                <li class="nav-item">
                                    <small><a class="nav-link" href="#">Phương thức thanh toán</a></small>
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
            <!-- <div class="container">
                    <div class="fs-6 row">
                        <div >
                            <img class="col-2" src="../assets/account_circle_FILL0_wght400_GRAD0_opsz48.svg">
                        </div>


                        <div class="col-10 align-middle">
                            <div>Phan Trung Thành (thanhb1906764@student.ctu.edu.vn)</div>
                                                                        <div><button class="btn btn-outline-danger">Đăng xuất</button></div>                        
                                                                    </div>

                                                                </div>
                                                            </div> -->



                <!-- Input thông tin người dùng -->
                <div class="container">
                    <div class="p-2">

                        <!-- Địa chỉ giao hàng - select -->
                        <div class="form-group form-floating mb-1">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label class="fs-6" for="floatingInput">Địa chỉ</label>
                        </div>

                        <!-- Tên khách hàng -->
                        <div class="form-floating mb-1">
                            <input type="email" class="form-control" placeholder="name@example.com">
                            <label class="fs-6" for="floatingInput">Họ tên</label>
                        </div>

                        <!-- Số điện thoại  -->
                        <div class="form-floating mb-1">
                            <input type="text" class="form-control" placeholder="name@example.com">
                            <label class="fs-6" for="floatingInput">Số điện thoại</label>
                        </div>


                        <!-- Địa chỉ - input-->
                        <div class="form-floating mb-1">
                            <input type="text" class="form-control" placeholder="name@example.com">
                            <label class="fs-6" for="floatingInput">Địa chỉ</label>
                        </div>


                        <!-- Chọn Tỉnh, Quận, Huyện theo Select -->
                        <div class="d-flex">
                            <div class="form-group form-floating mb-1 me-1 col">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Chọn Tỉnh</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label class="fs-6" for="floatingInput">Tỉnh/Thành Phố</label>
                            </div>

                            <div class="form-group form-floating mb-1 me-1 col">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Chọn Quận/Huyện</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label class="fs-6" for="floatingInput">Quận/Huyện</label>
                            </div>

                            <div class="form-group form-floating mb-1 col">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Chọn Phường/Xã</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label class="fs-6" for="floatingInput">Phường/Xã</label>
                            </div>
                        </div>

                        <!-- Nút Giỏ hàng và Chọn phương thức thanh toán -->
                        <div class="d-flex justify-content-between">
                            <a class="btn btn-outline-primary">Giỏ hàng</a>
                            <button class="btn btn-primary">Chọn phương thức thanh toán</button>
                        </div>

                    </div>
                </div>

            </div>


            <!-- Nội dung bên phải: Thông tin thông tin sản phẩm, giảm giá -->
            <div class="col-5 border-start">

                <!-- Danh sách sản phẩm - sách  -->
                <div class="container">

                    <table class="table">
                        <tbody>

                            <tr style="font-size: 12px;">
                                <td class="d-flex justify-content-between align-items-start" style="width: 20%;">
                                    <div class="me-auto ms-2 ">
                                        <img class="fw-bold" src="../assets/4_5f9624b1ec774721962320840ac57f15_small.jpg">
                                        <!-- <span class="badge bg-primary rounded-pill">1</span> -->
                                    </div>

                                </td>

                                <td class="align-middle" style="width: 60%;">Kaguya - Cuộc chiến tỏ tình - Tập 4 (Tặng Kèm 1
                                    Trong 2 Mẫu Thẻ Học Sinh)</td>
                                <td class="align-middle" style="width: 10%;"></td>
                                <td class="align-middle" style="width: 10%;">36000đ</td>
                            </tr>

                        </tbody>
                    </table>


                </div>

                <!-- Mã giảm giá  -->


                <!-- Tạm tính, Phi Ship -->
                <div class="container">

                    <div class="d-flex justify-content-between">
                        <small class="text-secondary">Tạm tính</small>
                        <small class="text-secondary">200000d</small>
                    </div>

                    <div class="d-flex justify-content-between">
                        <small class="text-secondary">Phí Ship</small>
                        <small class="text-secondary">30000d</small>
                    </div>

                </div>


                <br />
                <!-- Tổng tiền -->
                <div class="container">

                    <div class="d-flex justify-content-between fs-5">
                        <div class="text-secondary">Tổng tiền</div>
                        <div class="fw-bolder">230000d</div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>