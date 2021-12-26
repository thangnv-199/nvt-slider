
Các option : 

- infinite: Chạy vô hạn không có điểm dừng;
Type: boolean;
Default: false;

- slidesToShow: số item hiển thị;
Type: number;
Default: 1;

- slidesToScroll: số item trượt mỗi lần cuộn;
Type: number;
Default: 1;

- rows: set số hàng;
Type: number;
Default: 1;

- autoplay: tự động cuộn;
Type: boolean;
Default: false;

- autoplaySpeed: đặt thời gian mỗi lần cuộn;
Type: number (ms);
Default: 10000;

- pauseOnHover: tạm dừng tự động cuộn khi hover;
Type: boolean;
Default: false;

- draggable: Bật tính năng kéo chuột;
Type: boolean;
Default: false;

- initialSlide: set vị trí mặc định của slider;
Type: number;
Default: 0;

- fade: thay hoạt ảnh trượt thành fade;
Type: boolean;
Default: false;

- fadeSpeed: set thời gian hoạt ảnh fade;
Type: number (ms);
Default: 400; 

- callback: function được gọi mỗi khi slider di chuyển;
Type: function;
Default: empty;

- dots: Tạo các chấm tròn;
Type: boolean;
Default: true

- dotsColor: set màu mặc định cho các chấm tròn;
Type: string;
Default: empty;

- dotsClass: thêm class cho thẻ chứa tất cả các dot (dùng để css hoặc có thể css theo class mặc định);
Type: string;
Default: empty;

- dotsClass: thêm class cho các dot con (dùng để css hoặc có thể css theo class mặc định);
Type: string;
Default: empty;

- appendDots: gắn dots vào vị trí chỉ định;
Type: element;
Default: slider-nav;

- arrows: tạo các button điều khiển;
Type: boolean;
Default: true;

- arrowsColor: set màu mặc định cho các button;
Type: string;
Default: empty;

- prevArrow: Chèn nội dung (icon) vào button previous ;
Type: string;
Default: 'prev';

- nextArrow: Chèn nội dung (icon) vào button next;
Type: string;
Default: 'next';

- prevArrowClass: thêm class vào button prev (dùng để css hoặc có thể css theo class mặc định);
Type: string;
Default: empty;

- nextArrowClass: thêm class vào button next (dùng để css hoặc có thể css theo class mặc định);
Type: string;
Default: empty;

- appendArrows: gắn arrows vào vị trí (element) chỉ định;
Type: element;
Default: slider-nav;

- responsive: 1 mảng các đối tượng chứa breakpoint và settings tương ứng;
Type: boolean;
Default: false;
Example: responsive: [{
    breakpoint: 1023, //break point use max-width
    settings: {
        // ...options
    }
}]
