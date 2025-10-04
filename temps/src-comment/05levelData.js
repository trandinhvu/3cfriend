// Hàm set vị trí bóng: a là object game (chứa ballRadius, numLevels, v.v.)
var setBallPositions = function(a) {
    var l = new Array,  // Mảng lưu vị trí Point cho các bóng
        i = 15e3 * a.adjustmentScale,  // Vị trí cơ bản (có lẽ là khoảng cách từ cue ball, scaled)
        n = .05 + .05 * Math.random(),  // Random nhỏ cho biến thiên
        s = 1 + (.05 + .05 * Math.random()),  // Random nhỏ cho scale y
        e = 1.732 + n,  // Hệ số khoảng cách ngang (gần sqrt(3) cho hình tam giác)
        b = projectInfo.level;  // Level hiện tại từ projectInfo
    switch (b > a.numLevels && (b = a.numLevels), 1 == projectInfo.tutorial && (b = 100), b = 15) {  // Giới hạn level, tutorial=100, mặc định b=15?
        case 1:  // Level 1: 4 bóng
            l[0] = new Point(-i, 0), l[1] = new Point(i, 0), l[2] = new Point(i + e * a.ballRadius, a.ballRadius * s), l[3] = new Point(i + e * a.ballRadius, -a.ballRadius * s);
            break;
        case 2:  // Level 2: 5 bóng
            l[0] = new Point(-i, 0), l[1] = new Point(i, 0), l[2] = new Point(i + e * a.ballRadius, a.ballRadius * s), l[3] = new Point(i + e * a.ballRadius, -a.ballRadius * s), l[4] = new Point(i + 2 * e * a.ballRadius, 0);
            break;
        case 3:  // Level 3: 7 bóng
            l[0] = new Point(-i, 0), l[1] = new Point(i, 0), l[2] = new Point(i + e * a.ballRadius, a.ballRadius * s), l[3] = new Point(i + e * a.ballRadius, -a.ballRadius * s), l[4] = new Point(i + 2 * e * a.ballRadius, 2 * a.ballRadius * s), l[5] = new Point(i + 2 * e * a.ballRadius, -2 * a.ballRadius * s), l[6] = new Point(i + 2 * e * a.ballRadius, 0);
            break;
        case 4:  // Level 4: 9 bóng
            l[0] = new Point(-i, 0), l[1] = new Point(i, 0), l[2] = new Point(i + e * a.ballRadius, a.ballRadius * s), l[3] = new Point(i + e * a.ballRadius, -a.ballRadius * s), l[6] = new Point(i + 2 * e * a.ballRadius, 0), l[4] = new Point(i + 2 * e * a.ballRadius, 2 * a.ballRadius * s), l[5] = new Point(i + 2 * e * a.ballRadius, -2 * a.ballRadius * s), l[7] = new Point(i + 3 * e * a.ballRadius, -a.ballRadius * s), l[8] = new Point(i + 3 * e * a.ballRadius, a.ballRadius * s);
            break;
        case 5:  // Level 5: 10 bóng
            l[0] = new Point(-i, 0), l[1] = new Point(i, 0), l[2] = new Point(i + e * a.ballRadius, a.ballRadius * s), l[3] = new Point(i + e * a.ballRadius, -a.ballRadius * s), l[9] = new Point(i + 2 * e * a.ballRadius, 0), l[4] = new Point(i + 2 * e * a.ballRadius, 2 * a.ballRadius * s), l[5] = new Point(i + 2 * e * a.ballRadius, -2 * a.ballRadius * s), l[6] = new Point(i + 3 * e * a.ballRadius, a.ballRadius * s), l[7] = new Point(i + 3 * e * a.ballRadius, -a.ballRadius * s), l[8] = new Point(i + 4 * e * a.ballRadius, 0);
            break;
        case 6:  // Level 6: Giống level 5 (10 bóng, có lẽ lặp lại)
            l[0] = new Point(-i, 0), l[1] = new Point(i, 0), l[2] = new Point(i + e * a.ballRadius, a.ballRadius * s), l[3] = new Point(i + e * a.ballRadius, -a.ballRadius * s), l[9] = new Point(i + 2 * e * a.ballRadius, 0), l[4] = new Point(i + 2 * e * a.ballRadius, 2 * a.ballRadius * s), l[5] = new Point(i + 2 * e * a.ballRadius, -2 * a.ballRadius * s), l[6] = new Point(i + 3 * e * a.ballRadius, a.ballRadius * s), l[7] = new Point(i + 3 * e * a.ballRadius, -a.ballRadius * s), l[8] = new Point(i + 4 * e * a.ballRadius, 0);
            break;
        case 15:  // Level 15: 16 bóng (full rack billiard)
            l[0] = new Point(-i, 0), l[1] = new Point(i, 0), l[2] = new Point(i + e * a.ballRadius, a.ballRadius * s), l[15] = new Point(i + e * a.ballRadius, -a.ballRadius * s), l[8] = new Point(i + 2 * e * a.ballRadius, 0), l[5] = new Point(i + 2 * e * a.ballRadius, 2 * a.ballRadius * s), l[10] = new Point(i + 2 * e * a.ballRadius, -2 * a.ballRadius * s), l[7] = new Point(i + 3 * e * a.ballRadius, 1 * a.ballRadius * s), l[4] = new Point(i + 3 * e * a.ballRadius, 3 * a.ballRadius * s), l[9] = new Point(i + 3 * e * a.ballRadius, -1 * a.ballRadius * s), l[6] = new Point(i + 3 * e * a.ballRadius, -3 * a.ballRadius * s), l[11] = new Point(i + 4 * e * a.ballRadius, 0), l[12] = new Point(i + 4 * e * a.ballRadius, 2 * a.ballRadius * s), l[13] = new Point(i + 4 * e * a.ballRadius, -2 * a.ballRadius * s), l[14] = new Point(i + 4 * e * a.ballRadius, 4 * a.ballRadius * s), l[3] = new Point(i + 4 * e * a.ballRadius, -4 * a.ballRadius * s);
            break;
        case 100:  // Tutorial level: Chỉ 2 bóng
            l[0] = new Point(-i, 0), l[1] = new Point(i + 1e4, -1e4);
            break
    }
    return l  // Trả mảng vị trí
};