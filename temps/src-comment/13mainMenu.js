// State mainMenu: Quản lý menu chính
var menuState = {
    // Init: Khởi tạo menuInfo, load localStorage (guideOn, aiRating, bestScore, numGames, bestTime)
    init: function() {
        if (window.famobi_analytics.trackScreen("SCREEN_HOME"), this.menuInfo = new Object, game.scale.setResizeCallback(this.onResize, this), null == window.famobi.localStorage.getItem("guideOn")) {  // Nếu chưa có guideOn, set=1 (hiển thị guide)
            projectInfo.guideOn = 1;
            try {
                window.famobi.localStorage.setItem("guideOn", 1)
            } catch (t) {}
        } else projectInfo.guideOn = window.famobi.localStorage.getItem("guideOn");  // Load guideOn
        if (null == window.famobi.localStorage.getItem("aiRating")) {  // Tương tự cho aiRating (mức độ AI, default 2)
            projectInfo.aiRating = 2;
            try {
                window.famobi.localStorage.setItem("aiRating", 2)
            } catch (t) {}
        } else projectInfo.aiRating = window.famobi.localStorage.getItem("aiRating");
        if (null == window.famobi.localStorage.getItem("bestScore")) {  // Best score default 0
            projectInfo.bestScore = 0;
            try {
                window.famobi.localStorage.setItem("bestScore", 0)
            } catch (t) {
                projectInfo.alertSent
            }
        } else projectInfo.bestScore = window.famobi.localStorage.getItem("bestScore");
        if (null == window.famobi.localStorage.getItem("numGames")) {  // Số game chơi default 0
            projectInfo.numGames = 0;
            try {
                window.famobi.localStorage.setItem("numGames", 0)
            } catch (t) {
                projectInfo.alertSent
            }
        } else projectInfo.numGames = window.famobi.localStorage.getItem("numGames");
        if (null == window.famobi.localStorage.getItem("bestTime")) {  // Best time default 0
            projectInfo.bestTime = 0;
            try {
                window.famobi.localStorage.setItem("bestTime", 0)
            } catch (t) {
                projectInfo.alertSent
            }
        } else projectInfo.bestTime = window.famobi.localStorage.getItem("bestTime")
    },

    // Callback resize: Gọi resizeGame
    onResize: function(t, e) {
        this.resizeGame(t, e)
    },

    // Create: Tạo các element menu (button, window, event listener)
    create: function() {
        var t = this.menuInfo;  // Lấy menuInfo
        this.resizeGame = function(e, n) {  // Hàm resize: Điều chỉnh vị trí button dựa trên orientation (portrait/landscape)
            Math.min(fenster.innerWidth, document.documentElement.clientWidth);
            var a = Math.min(fenster.innerHeight, document.documentElement.clientHeight);  // Chiều cao màn hình
            "portrait" == window.famobi.getOrientation() ? (game.scale.setGameSize(1080, 1920), t.playButton.x = 0, t.playButton.y = game.height / 2 * .4, t.playButton.anchor = new Phaser.Point(.5, 0), t.playButton.scale = new Point(.75, .75), t.statsButton.x = -150, t.statsButton.y = game.height / 2 * .4, t.statsButton.anchor = new Point(1, 0), t.statsButton.scale = new Point(.5, .5), t.helpButton.x = 150, t.helpButton.y = game.height / 2 * .4, t.helpButton.anchor = new Point(0, 0), t.helpButton.scale = new Point(.5, .5), t.settingsButton.x = game.wi...  // (code bị truncated, nhưng điều chỉnh vị trí/scale cho portrait: playButton giữa, stats/help/settings hai bên)
            /* Phần code resize còn lại bị truncated trong input, nhưng tương tự: Điều chỉnh cho landscape, statsWindow, settingsWindow, text, v.v. */
        }

        // Hàm ẩn menu items (rack, buttons)
        function g() {
            t.rack.visible = !1, t.playButton.visible = !1, t.statsButton.visible = !1, t.helpButton.visible = !1, t.settingsButton.visible = !1
        }

        // Hàm resume game (halt=false, paused=false)
        function c() {
            game.halt = !1, game.paused = !1
        }
        // Listener cho pause/resume từ famobi (SDK)
        window.famobi_onPauseRequested = function() {
            window.famobi_wasVisibilityChangeDisabled = game.stage.disableVisibilityChange, game.stage.disableVisibilityChange = !0, game.paused = !0, window.famobi_pausedByAd = !0
        }, window.famobi_onResumeRequested = function() {
            window.famobi_pausedByAd = !1, game.paused = !1, game.stage.disableVisibilityChange = window.famobi_wasVisibilityChangeDisabled
        }, 
        // Listener cho disable/enable audio từ famobi
        window.famobi.onRequest("disableAudio", (() => {
            Sound.setMasterMute(!0), isGameMuted = !0
        })), window.famobi.onRequest("enableAudio", (() => {
            Sound.setMasterMute(!1), isGameMuted = !1
        })), 
        // Listener cho pause/resume gameplay từ famobi
        window.famobi.onRequest("pauseGameplay", (() => {
            game.halt = !0, game.paused = !0
        })), window.famobi.onRequest("resumeGameplay", (() => {
            game.halt = !1, game.paused = !1
        })), 
        // Listener blur/focus (pause/resume khi window mất/tập trung)
        window.addEventListener("blur", (function() {
            game.halt = !0, game.paused = !0
        })), window.addEventListener("focus", (function() {
            c()
        })), 
        // Listener visibility change (resume khi visible)
        document.addEventListener("visibilitychange", (function() {
            "visible" === document.visibilityState && c()
        })), 
        // Set mute dựa trên famobi volume
        0 == famobi.getVolume() ? (Sound.setMasterMute(!0), isGameMuted = !0) : Sound.setMasterMute(!1), 
        window.famobi.gameReady(), window.famobi.playerReady()  // Thông báo game ready cho famobi
    },

    // Update: Kiểm tra input nếu statsWindow visible (có lẽ xử lý click)
    update: function() {
        var t = this.menuInfo;  // Lấy menuInfo
        game.input.activePointer.isDown && t.statsWindow.visible  // Nếu click và stats visible (có lẽ xử lý close, nhưng code không đầy đủ)
    },

    // Shutdown: Xóa menuCanvas và reset menuInfo
    shutdown: function() {
        menuInfo = this.menuInfo, game.stage.removeChild(menuInfo.menuCanvas), menuInfo.menuCanvas.destroy(), menuInfo = null
    }
};

// Hàm hiển thị menu items với tween fade in
function showMenuItems() {
    var t = menuState.menuInfo;  // Lấy menuInfo
    t.settingsWindow.visible = !1, t.statsWindow.visible = !1,  // Ẩn settings/stats
    t.rack.visible = !0, t.rack.alpha = 0, game.add.tween(t.rack).to({  // Hiển thị rack (background?) fade in 500ms
        alpha: 1
    }, 500, "Linear", !0), 
    t.playButton.visible = !0, t.playButton.alpha = 0, game.add.tween(t.playButton).to({  // Tương tự cho playButton
        alpha: 1
    }, 500, "Linear", !0), 
    t.statsButton.visible = !0, t.statsButton.alpha = 0, game.add.tween(t.statsButton).to({
        alpha: 1
    }, 500, "Linear", !0), 
    t.helpButton.visible = !0, t.helpButton.alpha = 0, game.add.tween(t.helpButton).to({
        alpha: 1
    }, 500, "Linear", !0), 
    t.settingsButton.visible = !0, t.settingsButton.alpha = 0, game.add.tween(t.settingsButton).to({
        alpha: 1
    }, 500, "Linear", !0), 
    t.menuVisible = !0, window.famobi_analytics.trackScreen("SCREEN_HOME")  // Set menu visible, track analytics
}