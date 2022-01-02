


![Screenshot](https://github.com/thangnv-199/nvt-slider/blob/master/images/slider-options-default.png)


###
![Screenshot](../master/images/slider-example.png)



# Chi tiết các option : 

- infinite: Chạy vô hạn không có điểm dừng;
Type: boolean;
Default: false;

- slidesToShow: số item hiển thị;
Type: int;
Default: 1;

- slidesToScroll: số item trượt mỗi lần cuộn;
Type: int;
Default: 1;

- rows: set số hàng;
Type: int;
Default: 1;

- autoplay: tự động cuộn;
Type: boolean;
Default: false;

- autoplaySpeed: đặt thời gian tự động cuộn;
Type: int (ms);
Default: 10000;

- pauseOnHover: tạm dừng tự động cuộn khi hover;
Type: boolean;
Default: false;

- draggable: Bật tính năng kéo chuột để cuộn;
Type: boolean;
Default: false;

- initialSlide: set vị trí mặc định của slider;
Type: int;
Default: 0;

- fade: thay hoạt ảnh trượt thành fade;
Type: boolean;
Default: false;

- fadeSpeed: set thời gian hoạt ảnh fade;
Type: int (ms);
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

- appendDots: gắn dots vào vị trí (element) chỉ định;
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
Type: array;
Default: null;
![Screenshot](../master/images/example-3.png)



# Chi tiết các Method

- currentSlide : trả về chỉ số hiện tại của slider
Arguments: none;

- goTo : đi tới trang chỉ định;
Arguments: int; 

- prev : đi tới trang trước đó;
Arguments: none;

- next : đi tới trang tiếp theo;
Arguments: none;

- play : bật tính năng tự động cuộn;
Arguments: none;

- pause : dừng tính năng tự động cuộn;
Arguments: none;

- getOption : trả về value của option;
Arguments: string : option name;
![Screenshot](../master/images/example-2.png)

- setOption : đặt giá trị cho option
Arguments: object : chứa các key value là tên và giá trị của option;
![Screenshot](../master/images/example-1.png)
