// Class Maths: Chứa các hàm toán học chung
var Maths = function() {},  // Khởi tạo Maths như object rỗng, sau sẽ thêm prototype

    // Class Point: Đại diện điểm 2D với x, y
    Point = function(t, e) {
        this.x = t, this.y = e  // Gán x, y từ tham số
    };

// Static method interpolate: Nội suy giữa hai điểm t và e với tỷ lệ n (0-1)
Point.interpolate = function(t, e, n) {
    var r = Maths.fixNumber((1 - n) * t.x + n * e.x),  // Tính x mới
        i = Maths.fixNumber((1 - n) * t.y + n * e.y);  // Tính y mới
    return new Point(r, i)  // Trả về điểm mới
},

// Method equals: Kiểm tra hai điểm có bằng nhau không
Point.prototype.equals = function(t) {
    return this.x == t.x && this.y == t.y  // So sánh x và y
},

// Hàm giao điểm hai đường thẳng (phiên bản 2): t,e là điểm đầu cuối đường 1; n,r là điểm đầu cuối đường 2
Maths.lineIntersectLine2 = function(t, e, n, r) {
    var i, x, a, u;  // Các biến tạm
    if (t.x == e.x && t.y == e.y || n.x == r.x && n.y == r.y) return null;  // Nếu một đường là điểm, trả null
    var s = new Point(e.x - t.x, e.y - t.y),  // Vector đường 1
        y = new Point(n.x - t.x, n.y - t.y),  // Vector từ t đến n
        f = new Point(r.x - t.x, r.y - t.y);  // Vector từ t đến r
    return i = Maths.fixNumber(Math.sqrt(s.x * s.x + s.y * s.y)),  // Độ dài đường 1
    x = Maths.fixNumber(s.x / i), a = Maths.fixNumber(s.y / i),  // Vector đơn vị đường 1 (x,a)
    __c = new Point(y.x * x + y.y * a, y.y * x - y.x * a),  // Dựng vector c (dựng lên đường 1)
    __d = new Point(f.x * x + f.y * a, f.y * x - f.x * a),  // Dựng vector d
    __c.y < 0 && __d.y < 0 || __c.y >= 0 && __d.y >= 0 || (u = Maths.fixNumber(__d.x + (__c.x - __d.x) * __d.y / (__d.y - __c.y))) < 0 || u > i ? null : new Point(t.x + u * x, t.y + u * a)  // Kiểm tra dấu và tính điểm giao, trả null nếu không giao
},

// Hàm giao điểm hai đường thẳng (phiên bản 1): t,e đường 1; n,r đường 2; i là flag kiểm tra đoạn (1: kiểm tra trong đoạn)
Maths.lineIntersectLine = function(t, e, n, r, i) {
    var x, a, u, s, y, f, o;  // Các biến tạm
    a = e.y - t.y, s = t.x - e.x, f = e.x * t.y - t.x * e.y,  // Công thức determinant cho đường 1
    u = r.y - n.y, y = n.x - r.x, o = r.x * n.y - n.x * r.y;  // Công thức determinant cho đường 2
    var h = a * y - u * s;  // Determinant tổng
    if (0 == h) return null;  // Song song, không giao
    if ((x = new Point).x = (s * o - y * f) / h, x.y = (u * f - a * o) / h,  // Tính điểm giao x
    x.x = Maths.fixNumber(x.x), x.y = Maths.fixNumber(x.y), 1) {  // Nếu i=1, kiểm tra điểm giao có nằm trong đoạn không
        if ((x.x - t.x) * (x.x - e.x) > 0 || (x.y - t.y) * (x.y - e.y) > 0 || (x.x - n.x) * (x.x - r.x) > 0 || (x.y - n.y) * (x.y - r.y) > 0) return null
    }
    return x  // Trả về điểm giao
},

// Hàm giao điểm đường thẳng với vòng tròn (phiên bản 2): t,e điểm đầu cuối đường; n trung tâm vòng; r bán kính
Maths.lineIntersectCircle2 = function(t, e, n, r) {
    var i = new Object;  // Object kết quả
    i.inside = !1, i.tangent = !1, i.intersects = !1, i.enter = null, i.exit = null;  // Khởi tạo các flag và điểm
    var x = new Vector2D(t.x, t.y),  // Vector điểm đầu
        a = new Vector2D(e.x, e.y),  // Vector điểm cuối
        u = new Vector2D(n.x, n.y),  // Vector trung tâm
        s = a.minus(x),  // Vector đường
        y = x.minus(u),  // Vector từ trung tâm đến đầu
        f = s.dot(s),  // Độ dài bình phương đường
        o = 2 * y.dot(s),  // Phần tử phương trình bậc 2
        h = o * o - 4 * f * (y.dot(y) - r * r);  // Delta phương trình
    if (h < 0) return i;  // Không giao
    if (0 == (h = Maths.fixNumber(Math.sqrt(h)))) return i.tangent = !0, i;  // Tiếp xúc
    var c = Maths.fixNumber((-o - h) / (2 * f)),  // Nghiệm 1
        M = Maths.fixNumber((-o + h) / (2 * f));  // Nghiệm 2
    return c > 1 && M > 1 || c < 0 && M < 0 ? i : c < 0 && M > 1 ? (i.inside = !0, i) : c >= 0 && c <= 1 ? (i.enter = Point.interpolate(t, e, M), i.enter = new Point(Maths.fixNumber(i.enter.x), Maths.fixNumber(i.enter.y)), i.intersects = !0, i) : M >= 0 && M <= 1 ? (i.exit = Point.interpolate(t, e, c), i.exit = new Point(Maths.fixNumber(i.exit.x), Maths.fixNumber(i.exit.y)), i.intersects = !0, i) : i  // Xử lý các trường hợp giao, inside, tangent
},

// Hàm giao điểm hai vòng tròn: (t,e) trung tâm 1, n bán kính 1; (r,i) trung tâm 2, x bán kính 2
Maths.circleIntersectCircle = function(t, e, n, r, i, x) {
    var a = new Object;  // Object kết quả
    if (n < 0 || x < 0) return a = null;  // Bán kính âm, null
    var u = x,  // u = bán kính 2
        s = n,  // s = bán kính 1
        y = Math.sqrt((t - r) * (t - r) + (e - i) * (e - i));  // Khoảng cách giữa hai trung tâm
    if (y > n + x) return a = null;  // Không giao
    var f = (s * s + y * y - u * u) / (2 * y),  // Khoảng cách từ trung tâm 1 đến đường giao
        o = Math.sqrt(s * s - f * f);  // Độ cao tam giác giao
    return a.x3 = (r - t) * f / y + (i - e) * o / y + t, a.y3 = (i - e) * f / y - (r - t) * o / y + e,  // Điểm giao 1
    a.x4 = (r - t) * f / y - (i - e) * o / y + t, a.y4 = (i - e) * f / y + (r - t) * o / y + e, a  // Điểm giao 2
},

// Hàm giao điểm đường thẳng với vòng tròn (phiên bản 1): t,e điểm đầu cuối đường; n trung tâm, r bán kính
Maths.lineIntersectCircle = function(t, e, n, r) {
    var i = new Object;  // Object kết quả tương tự phiên bản 2
    i.inside = !1, i.tangent = !1, i.intersects = !1, i.enter = null, i.exit = null;
    var x = (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y),  // Độ dài bình phương đường
        a = 2 * ((e.x - t.x) * (t.x - n.x) + (e.y - t.y) * (t.y - n.y)),  // Phần tử bậc 2
        u = n.x * n.x + n.y * n.y + t.x * t.x + t.y * t.y - 2 * (n.x * t.x + n.y * t.y) - r * r,  // Hằng số
        s = Maths.fixNumber(a * a - 4 * x * u);  // Delta
    if (s <= 0) i.inside = !1;  // Không giao hoặc inside sai
    else {
        var y = Maths.fixNumber(Math.sqrt(s)),  // Căn delta
            f = Maths.fixNumber((-a + y) / (2 * x)),  // Nghiệm 1
            o = Maths.fixNumber((-a - y) / (2 * x));  // Nghiệm 2
        (f < 0 || f > 1) && (o < 0 || o > 1) ? i.inside = !(f < 0 && o < 0 || f > 1 && o > 1): (0 <= o && o <= 1 && (i.enter = Point.interpolate(t, e, o), i.enter = new Point(Maths.fixNumber(i.enter.x), Maths.fixNumber(i.enter.y))), 0 <= f && f <= 1 && (i.exit = Point.interpolate(t, e, f), i.exit = new Point(Maths.fixNumber(i.exit.x), Maths.fixNumber(i.exit.y))), i.intersects = !0, null != i.exit && null != i.enter && i.exit.equals(i.enter) && (i.tangent = !0))  // Xử lý các trường hợp
    }
    return i
},

// Hàm tính góc (bearing) từ vector (t,e)
Maths.findBearing = function(t, e) {
    var n = 180 / Math.PI * Math.atan2(e, t);  // Tính góc độ từ atan2
    return Maths.fixNumber(n)  // Làm tròn và trả về
},

// Hàm tính sự khác biệt góc giữa t và e (ngắn nhất)
Maths.angleDiff = function(t, e) {
    var n = Maths.wrapValue(t + 180 - e) - 180;  // Tính diff và wrap
    return Maths.fixNumber(n)
},

// Hàm wrap góc vào [0,360]
Maths.wrapValue = function(t) {
    return t > 360 && (t -= 360), t < 0 && (t += 360), t  // Wrap và trả về
},

// Hàm wrap vô hạn (chưa implement, có lẽ placeholder)
Maths.wrapInfinite = function(t) {}, 

// Hàm làm tròn số với 4 chữ số thập phân (fix floating point error)
Maths.fixNumber = function(t) {
    return isNaN(Number(t)) ? 0 : Math.round(1e4 * Number(t)) / 1e4  // Làm tròn và trả 0 nếu NaN
},

// Hàm tạo vector từ hai điểm t,e
Maths.createVectorFrom2Points = function(t, e) {
    return new Vector2D(e.x - t.x, e.y - t.y)  // Trả vector e - t
},

// Hàm kiểm tra hai object có đang tiến lại gần nhau không: t vị trí 1, e vị trí 2, n vận tốc 1, r vận tốc 2
Maths.checkObjectsConverging = function(t, e, n, r) {
    var i = r.minus(n),  // Vector vận tốc tương đối
        x = e.minus(t).normalize();  // Vector hướng từ t đến e chuẩn hóa
    return i.angleBetween(x) > 90  // Nếu góc >90, đang tiến lại (true)
};