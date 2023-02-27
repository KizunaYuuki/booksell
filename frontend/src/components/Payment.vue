<script>
// let response = await fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
// let commits = await response.json()
// console.log(commits)
</script>
<template>
    <div class="container">
        <div class="row container">

            <!-- Nội dung bên trái: Thông tin khách hàng và địa chỉ giao hàng -->
            <div class="col-7">

            </div>


            <!-- Nội dung bên phải: Thông tin thông tin sản phẩm, giảm giá -->
            <div class="col-5 border-start">

                <!-- Danh sách sản phẩm - sách  -->
                <div class="container">

                    <table class="table">
                        <tbody>

                            <tr style="font-size: 12px;">
                                <td class="" style="width: 20%">
                                    <div class="figure position-relative">
                                        <img src="../assets/4_5f9624b1ec774721962320840ac57f15_medium.jpg" width="60"
                                            class="rounded" alt="...">
                                        <span
                                            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">999+</span>
                                    </div>
                                </td>
                                <td class="align-middle" style="width: 70%;">Kaguya - Cuộc chiến tỏ tình - Tập 4 (Tặng Kèm 1 Trong 2 Mẫu Thẻ Học Sinh)</td>
                                <td class="align-middle" style="width: 10%;">999...đ</td>
                            </tr>

                            <tr style="font-size: 12px;">
                                <td class="" style="width: 20%">
                                    <div class="figure position-relative">
                                        <img src="../assets/10_611037f3af2243b880dccec358c03fec_medium.jpg" width="60"
                                            class="rounded" alt="...">
                                        <span
                                            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">1</span>
                                    </div>
                                </td>
                                <td class="align-middle" style="width: 70%;">Kaguya - Cuộc chiến tỏ tình - Tập 10 (Tặng Kèm 1 Trong 2 Clear File)</td>
                                <td class="align-middle" style="width: 10%;">36000đ</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                <!-- Mã giảm giá  -->


                <!-- Tạm tính, Phi Ship -->
                <div class="container">

                    <div class="d-flex justify-content-between py-2">
                        <small class="text-secondary">Tạm tính</small>
                        <small class="">36000đ</small>
                    </div>
                    <div class="d-flex justify-content-between">
                        <small class="text-secondary">Phí Ship</small>
                        <small class="">10000đ</small>
                    </div>

                </div>


                <hr />
                <!-- Tổng tiền -->
                <div class="container">

                    <div class="d-flex justify-content-between">
                        <div class="text-secondary fs-6">Tổng tiền</div>
                        <div class="fw-bolder">46000đ</div>
                    </div>

                </div>

            </div>
        </div>
</div></template>