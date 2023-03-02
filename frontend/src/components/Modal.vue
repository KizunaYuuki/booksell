<template>
    <!--trigger modal -->
    <a class="text-primary text-decoration-none px-2" style="cursor: pointer; " data-bs-toggle="modal" data-bs-target="#exampleModal">Xem thêm</a>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Chính sách đổi trả</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            Áp dụng cho toàn bộ đơn hàng của Quý Khách
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">Bước 1: Đăng ký đổi hàng </a>
                        <a href="#" class="list-group-item list-group-item-action">Bước 2: Xác nhận Đăng ký Đổi/Trả</a>
                        <a href="#" class="list-group-item list-group-item-action">Bước 3: Thu hàng miễn phí</a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
</template>