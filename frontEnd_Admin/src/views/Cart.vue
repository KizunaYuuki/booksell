<template>
    <table class="table table-hover container">
        <thead class="user-select-none">
            <tr class="align-middle">
                <th class="fs-2 fw-bold text-danger text-center" colspan="6">Giỏ hàng</th>
            </tr>
            <tr>
                <th style="width: 50%;" colspan="2" scope="col">Sản phẩm</th>
                <th class="text-center" style="width: 15%;" scope="col">Đơn giá</th>
                <th class="text-center" style="width: 15%;" scope="col">Số lượng</th>
                <th class="text-center" style="width: 15%;" scope="col">Tổng</th>
                <th class="text-center" style="width: 5%;" scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">
                    <a href="#">
                        <img class="imgCart border rounded"
                            src="https://product.hstatic.net/200000343865/product/4_5f9624b1ec774721962320840ac57f15_master.jpg">
                    </a>
                </th>
                <td class="align-middle">
                    <a href="#" class="text-decoration-none">
                        <div class="fs-6 fw-bold text-danger">
                            Kaguya - Cuộc chiến tỏ tình - Tập 10 (Tặng Kèm 1 Trong 2 Clear File)
                        </div>

                    </a>
                    <small>Khuyến mãi: 1017960497 - Giảm vô thời hạn 10% cho toàn bộ Sách Kim Đồng</small>
                    <small class="d-block">Còn lại: 30</small>
                </td>
                <td class="align-middle text-center">36,000₫
                </td>
                <td class="align-middle text-center">
                    <div class="btn-group" role="group" aria-label="Basic outlined">
                        <button type="button" class="btn btn-outline-primary">-</button>
                        <input type="number" pattern="[0-9]*" class="btn border" step="1" min="1" value="1" max="99" />
                        <button type="button" class="btn btn-outline-primary">+</button>
                    </div>

                </td>
                <td class="align-middle text-center fw-bold">36,000₫</td>
                <td class="align-middle text-center">
                    <button class="btn btn-outline-danger fa-solid fa-trash"></button>
                </td>
            </tr>



            <tr>
                <th scope="row">
                    <a href="#">
                        <img class="imgCart border rounded"
                            src="https://product.hstatic.net/200000343865/product/4_5f9624b1ec774721962320840ac57f15_master.jpg">
                    </a>
                </th>
                <td class="align-middle">
                    <a href="#" class="text-decoration-none">
                        <div class="fs-6 fw-bold text-danger">
                            Kaguya - Cuộc chiến tỏ tình - Tập 4 (Tặng Kèm 1 Trong 2 Mẫu Thẻ Học Sinh)
                        </div>

                    </a>
                    <small>Khuyến mãi: 1017960497 - Giảm vô thời hạn 10% cho toàn bộ Sách Kim Đồng</small>
                    <small class="d-block">Còn lại: 30</small>
                </td>
                <td class="align-middle text-center">36,000₫</td>
                <td class="align-middle text-center">
                    <div class="btn-group" role="group" aria-label="Basic outlined">
                        <button type="button" class="btn btn-outline-primary">-</button>
                        <input type="number" pattern="[0-9]*" class="btn border" step="1" min="1" value="1" max="99" />
                        <button type="button" class="btn btn-outline-primary">+</button>
                    </div>
                </td>
                <td class="align-middle text-center fw-bold">36,000₫</td>
                <td class="align-middle text-center">
                    <button class="btn btn-outline-danger fa-solid fa-trash"></button>
                </td>
            </tr>



            <!-- Thanh toán  -->
            <tr class="fs-6 fw-bold text-danger">
                <td colspan="3"></td>
                <td class="align-middle text-center">Tính tạm</td>
                <td class="align-middle text-center">72000₫</td>
                <td></td>
            </tr>
            <tr class="fs-6 fw-bold text-danger">
                <td colspan="3"></td>
                <td class="align-middle text-center"></td>
                <td class="align-middle text-center">
                    <a class="link-light btn btn-danger" href="/Pay">Thanh toán</a>
                </td>
                <td colspan=""></td>
            </tr>


        </tbody>
    </table>
</template>
<style scoped>
.imgCart {
    width: 100px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>