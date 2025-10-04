// Hàm khởi tạo Ball: t là bán kính bóng (circRad), s là số hiệu bóng (ví dụ: 1-15 cho các bóng màu)
var Ball = function(t, s) {
    var h;  // Biến tạm để lưu tên sprite sheet (hình ảnh) của bóng
    this.ballRotation = new Array(1, 0, 0, 0),  // Quaternion đại diện cho sự quay của bóng (mảng 4 phần tử)
    this.rX = 0, this.rY = 0, this.rZ = 0,  // Các giá trị quay theo trục X, Y, Z (ban đầu là 0)
    this.circRad = 0,  // Bán kính bóng (sẽ gán bằng t)
    this.ballCanvas, this.ball, this.canvas, this.spot, this.spotHolder, this._mask, this.shading, this.highlightCanvas, this.highlight, this.ballColor, this.ballType,  // Các biến lưu các đối tượng Phaser như canvas, sprite, mask (mặt nạ), shading (bóng tối), highlight (điểm sáng)
    this.circRad = t,  // Gán bán kính bóng từ tham số t
    s <= 8 ? (this.ballType = 0, h = "solidsSpriteSheet") : (this.ballType = 1, h = "ballSpriteSheet" + String(s)),  // Xác định loại bóng: 0 cho bóng đặc (solid, s<=8), 1 cho bóng sọc (stripe). h là tên sprite sheet tương ứng
    Phaser.Group.call(this, game, this, "ball"),  // Kế thừa từ Phaser.Group để tạo group cho bóng
    this.sprite = new Phaser.Sprite(game, 0, 0, h),  // Tạo sprite chính cho bóng từ sprite sheet h
    this.sprite.width = 2 * this.circRad,  // Đặt chiều rộng sprite bằng đường kính bóng
    this.sprite.height = 2 * this.circRad,  // Đặt chiều cao sprite bằng đường kính bóng
    this.sprite.anchor = new Phaser.Point(.5, .5),  // Đặt anchor (điểm neo) ở giữa sprite để xoay dễ dàng
    this.addChild(this.sprite),  // Thêm sprite vào group
    1 == this.ballType || (this.sprite.frame = s),  // Nếu là bóng đặc (type 0), đặt frame (hình ảnh) theo s; nếu sọc thì không đặt (có lẽ dùng frame khác)
    this.spotHolder = new Phaser.Group(game, this, "spotHolder"),  // Tạo group để giữ spot (điểm trắng hoặc số trên bóng)
    this.spot = new Phaser.Sprite(game, 0, 0, "spotSpriteSheet"),  // Tạo sprite cho spot từ sprite sheet
    this.spot.anchor = new Phaser.Point(.5, .5),  // Anchor ở giữa
    this.spotHolder.addChild(this.spot),  // Thêm spot vào spotHolder
    this.spot.frame = s,  // Đặt frame cho spot theo số bóng s
    this.spot.alpha = 1,  // Độ trong suốt của spot là 1 (opaque)
    this.shade = new Phaser.Sprite(game, 0, 0, "shade"),  // Tạo sprite cho shade (bóng tối của bóng)
    this.addChild(this.shade),  // Thêm shade vào group
    this.shade.anchor = new Point(.5, .5),  // Anchor ở giữa
    this.shade.width = 2.1 * t,  // Chiều rộng shade lớn hơn bóng một chút (2.1 lần bán kính)
    this.shade.height = 2.1 * t,  // Chiều cao shade lớn hơn bóng một chút
    this.updateRotation(10 * Math.random() - 5, 10 * Math.random() - 5, 10 * Math.random() - 5)  // Cập nhật quay ngẫu nhiên ban đầu cho bóng (giá trị nhỏ để tạo hiệu ứng tự nhiên)
};

// Kế thừa prototype từ Phaser.Group
Ball.prototype = Object.create(Phaser.Group.prototype), 
Ball.prototype.constructor = Ball,  // Đặt constructor lại là Ball

// Function cập nhật quay bóng: t, s, h là các giá trị quay theo các trục
Ball.prototype.updateRotation = function(t, s, h) {
    var i = -t,  // Đảo dấu t cho i
        a = h,  // a = h
        o = s,  // o = s
        r = Math.sqrt(i * i + a * a + o * o);  // Tính độ dài vector quay (r)
    r > .01 && (this.ballRotation = this.rotateQuat(this.ballRotation, a / r, i / r, o / r, r / this.circRad),  // Nếu r > 0.01, quay quaternion với các giá trị chuẩn hóa, góc quay dựa trên r / bán kính
    this.ballRotation = this.normalize(this.ballRotation),  // Chuẩn hóa quaternion
    this.renderBall(this.ballRotation))  // Render bóng với quaternion mới
},

// Function render bóng dựa trên quaternion t (quay 3D giả lập trên 2D)
Ball.prototype.renderBall = function(t) {
    var s = t[0],  // Các thành phần quaternion
        h = t[1],
        i = t[2],
        a = t[3],
        o = Math.atan2(2 * s * a - 2 * h * i, 1 - 2 * s * s - 2 * i * i) + Math.PI,  // Tính góc quay o (yaw)
        r = Math.asin(2 * h * s + 2 * i * a) + Math.PI,  // Tính góc quay r (pitch)
        e = Math.atan2(2 * h * a - 2 * s * i, 1 - 2 * h * h - 2 * i * i) + Math.PI,  // Tính góc quay e (roll)
        l = h * s + i * a;  // Tính l (có lẽ là yếu tố kiểm tra hướng)
    if (!(l > .499 || l < -.499)) {  // Nếu l trong khoảng [-0.499, 0.499], tiếp tục render
        if (this.angle = 180 / Math.PI * o,  // Đặt góc quay của bóng (độ)
        this.shade.angle = -this.angle,  // Đặt góc shade ngược lại
        1 == this.ballType) {  // Nếu là bóng sọc (type 1)
            var p = (r - .5 * Math.PI) / Math.PI;  // Tính frame dựa trên góc r
            this.sprite.frame = 41 - Math.round(41 * p)  // Đặt frame sprite (từ 41 xuống 0)
        }
        this.spotHolder.x = 0, this.spotHolder.y = 0, this.spotHolder.angle = 0,  // Reset vị trí và góc spotHolder
        this.spot.x = 0, this.spot.y = 0, this.spot.angle = 0,  // Reset spot
        this.spot.width = 1 * this.circRad, this.spot.height = 1 * this.circRad,  // Đặt kích thước spot bằng bán kính
        r < Math.PI / 2 || r > 3 * Math.PI / 2 ? e > Math.PI / 2 && e < 3 * Math.PI / 2 ? (this.spotHolder.y = this.circRad * Math.cos(e) * Math.sin(r), this.spotHolder.x = this.circRad * Math.sin(e)) : (this.spotHolder.y = -this.circRad * Math.cos(e) * Math.sin(r), this.spotHolder.x = -this.circRad * Math.sin(e)) : e > Math.PI / 2 && e < 3 * Math.PI / 2 ? (this.spotHolder.y = -this.circRad * Math.cos(e) * Math.sin(r), this.spotHolder.x = -this.circRad * Math.sin(e)) : (this.spotHolder.y = this.circRad * Math.cos(e) * Math.sin(r), this.spotHolder.x = this.circRad * Math.sin(e));  // Tính vị trí spotHolder dựa trên góc e và r (dùng sin/cos để giả lập 3D)
        var n = Math.sqrt(this.spotHolder.x * this.spotHolder.x + this.spotHolder.y * this.spotHolder.y) / this.circRad,  // Tính khoảng cách chuẩn hóa n
            d = Math.cos(n * Math.PI / 2),  // Tính d (cos để nén theo chiều)
            c = Math.atan2(this.spotHolder.y, this.spotHolder.x);  // Tính góc c của spotHolder
        this.spotHolder.scale = new Point(1, d),  // Scale spotHolder (nén theo y bằng d để tạo hiệu ứng 3D)
        this.spotHolder.angle = 180 / Math.PI * c + 90,  // Đặt góc spotHolder
        this.spot.angle = -this.spotHolder.angle,  // Đặt góc spot ngược lại
        this.spot.alpha = d + .2  // Đặt độ trong suốt spot dựa trên d (thêm 0.2 để sáng hơn)
    }
},

// Function quay quaternion: t là quaternion hiện tại, s,h,i là trục quay chuẩn hóa, a là góc quay
Ball.prototype.rotateQuat = function(t, s, h, i, a) {
    var o = Math.sqrt(s * s + h * h + i * i),  // Độ dài vector trục quay
        r = s / o,  // Chuẩn hóa r
        e = h / o,  // Chuẩn hóa e
        l = i / o,  // Chuẩn hóa l
        p = Math.sin(.5 * a),  // Sin của nửa góc quay
        n = r * p,  // Các thành phần quaternion mới
        d = e * p,
        c = l * p,
        M = Math.cos(.5 * a),  // Cos của nửa góc quay
        P = t[0], y = t[1], H = t[2], R = t[3],  // Các thành phần quaternion cũ
        g = P * M + y * c - H * d + R * n,  // Tính quaternion mới (công thức quay quaternion)
        b = -P * c + y * M + H * n + R * d,
        u = P * d - y * n + H * M + R * c,
        m = -P * n - y * d - H * c + R * M,
        w = new Array;  // Mảng quaternion mới
    return w[0] = g, w[1] = b, w[2] = u, w[3] = m, w  // Trả về quaternion mới
},

// Function chuẩn hóa quaternion t (độ dài = 1)
Ball.prototype.normalize = function(t) {
    var s = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2] + t[3] * t[3]),  // Tính độ dài quaternion
        h = new Array;  // Mảng mới
    return h[0] = t[0] / s, h[1] = t[1] / s, h[2] = t[2] / s, h[3] = t[3] / s, h  // Trả về quaternion chuẩn hóa
};