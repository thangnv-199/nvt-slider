###
<strong>Cách sử dụng: copy 2 file trong thư mục minify sau đó link vào thẻ head;<strong>


###
![Screenshot](../master/images/slider-example.png)

###
![Screenshot](https://github.com/thangnv-199/nvt-slider/blob/master/images/slider-options-default.png)



# Chi tiết các option : 

- infinite: Chạy vô hạn không có điểm dừng; <br>
Type: boolean;<br>
Default: false;<br>

- slidesToShow: số item hiển thị;<br>
Type: int;<br>
Default: 1;<br>

- slidesToScroll: số item trượt mỗi lần cuộn;<br>
Type: int;<br>
Default: 1;<br>

- rows: set số hàng;<br>
Type: int;<br>
Default: 1;<br>

- autoplay: tự động cuộn;<br>
Type: boolean;<br>
Default: false;<br>

- autoplaySpeed: đặt thời gian tự động cuộn;<br>
Type: int (ms);<br>
Default: 10000;<br>

- pauseOnHover: tạm dừng tự động cuộn khi hover;<br>
Type: boolean;<br>
Default: false;<br>

- draggable: Bật tính năng kéo chuột để cuộn;<br>
Type: boolean;<br>
Default: false;<br>

- initialSlide: set vị trí mặc định của slider;<br>
Type: int;<br>
Default: 0;<br>

- fade: thay hoạt ảnh trượt thành fade;<br>
Type: boolean;<br>
Default: false;<br>

- fadeSpeed: set thời gian hoạt ảnh fade;<br>
Type: int (ms);<br>
Default: 400; <br>

- callback: function được gọi mỗi khi slider di chuyển;<br>
Type: function;<br>
Default: empty;<br>

- dots: Tạo các chấm tròn;<br>
Type: boolean;<br>
Default: true<br>

- dotsColor: set màu mặc định cho các chấm tròn;<br>
Type: string;<br>
Default: empty;<br>

- dotsClass: thêm class cho thẻ chứa tất cả các dot (dùng để css hoặc có thể css theo class mặc định);<br>
Type: string;<br>
Default: empty;<br>

- dotsClass: thêm class cho các dot con (dùng để css hoặc có thể css theo class mặc định);<br>
Type: string;<br>
Default: empty;<br>

- appendDots: gắn dots vào vị trí (element) chỉ định;<br>
Type: element;<br>
Default: slider-nav;<br>

- arrows: tạo các button điều khiển;<br>
Type: boolean;<br>
Default: true;<br>

- arrowsColor: set màu mặc định cho các button;<br>
Type: string;<br>
Default: empty;<br>

- prevArrow: Chèn nội dung (icon) vào button previous ;<br>
Type: string;<br>
Default: 'prev';<br>

- nextArrow: Chèn nội dung (icon) vào button next;<br>
Type: string;<br>
Default: 'next';<br>

- prevArrowClass: thêm class vào button prev (dùng để css hoặc có thể css theo class mặc định);<br>
Type: string;<br>
Default: empty;<br>

- nextArrowClass: thêm class vào button next (dùng để css hoặc có thể css theo class mặc định);<br>
Type: string;<br>
Default: empty;<br>

- appendArrows: gắn arrows vào vị trí (element) chỉ định;<br>
Type: element;<br>
Default: slider-nav;<br>

- responsive: 1 mảng các đối tượng chứa breakpoint và settings tương ứng;<br>
Type: array;<br>
Default: null;<br>
![Screenshot](../master/images/example-3.png)



# Chi tiết các Method

- currentSlide : trả về chỉ số hiện tại của slider<br>
Arguments: none;<br>

- goTo : đi tới trang chỉ định;<br>
Arguments: int; <br>

- prev : đi tới trang trước đó;<br>
Arguments: none;<br>

- next : đi tới trang tiếp theo;<br>
Arguments: none;<br>

- play : bật tính năng tự động cuộn;<br>
Arguments: none;<br>

- pause : dừng tính năng tự động cuộn;<br>
Arguments: none;<br>

- getOption : trả về value của option;<br>
Arguments: string : option name;<br>
![Screenshot](../master/images/example-2.png)

- setOption : đặt giá trị cho option;<br>
Arguments: object : chứa các key value là tên và giá trị của option;<br>
![Screenshot](../master/images/example-1.png)
