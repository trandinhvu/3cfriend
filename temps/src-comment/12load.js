// Object loadState: State loading
var loadState = new Object;
loadState.init = function() {  // Init: Setup loaderCanvas, elements (title, rack, loaderBase/Fill/Highlight), graphics mask
    this.loaderInfo = new Object;  // Khởi tạo loaderInfo
    var e = this.loaderInfo;  // e = loaderInfo
    e.loaderProgress = 0, game.scale.setResizeCallback(this.onResize, this), fenster.subscribeToOffsetUpdates((() => {  // Subscribe offset updates cho resize
        this.onResize()
    })), 
    e.loaderCanvas = new Phaser.Group(game, game.stage, "loaderCanvas"), e.loaderCanvas.alpha = 0, e.loaderCanvas.x = game.width / 2, e.loaderCanvas.y = game.height / 2, game.stage.addChild(e.loaderCanvas),  // Tạo group loaderCanvas
    e.title = new Phaser.Sprite(game, 0, 0, "title"), e.loaderCanvas.addChild(e.title), e.title.anchor = new Point(.5, .5),  // Title sprite
    e.rack = new Phaser.Sprite(game, 0, 0, "rack"), e.loaderCanvas.addChild(e.rack), e.rack.anchor = new Point(.5, .5),  // Rack sprite (background?)
    e.loaderBase = new Phaser.Sprite(game, 0, 800, "loaderBase"), e.loaderBase.anchor = new Point(.5, 0), e.loaderCanvas.addChild(e.loaderBase),  // Base progress bar
    e.loaderFill = new Phaser.Sprite(game, 0, 800, "loaderFill"), e.loaderFill.anchor = new Point(.5, 0), e.loaderCanvas.addChild(e.loaderFill),  // Fill progress bar
    e.graphics = game.add.graphics(0, 0), e.graphics.beginFill(16777215), e.loaderFill.mask = e.graphics,  // Graphics mask cho fill
    e.loaderHighlight = new Phaser.Sprite(game, 0, 80, "loaderHighlight"), e.loaderHighlight.anchor = new Point(.5, 0), e.loaderCanvas.addChild(e.loaderHighlight),  // Highlight progress
    e.progress = new Object, e.progress.val = 0, this.resizeGame();  // Reset progress, gọi resize
    game.add.tween(e.loaderCanvas).to({  // Tween fade in loaderCanvas 1000ms sau 500ms delay
        alpha: 1
    }, 1e3, Phaser.Easing.Linear.None, !0, 500)
}, 

// Hàm resize: Điều chỉnh vị trí elements dựa trên orientation
loadState.resizeGame = function(e, s) {
    var t = this.loaderInfo,  // Lấy loaderInfo
        a = (Math.min(fenster.innerWidth, document.documentElement.clientWidth), Math.min(fenster.innerHeight, document.documentElement.clientHeight));  // Chiều cao
    "portrait" == window.famobi.getOrientation() ? (game.scale.setGameSize(1080, 1920), t.title.y = -game.height / 2 * .5) : (game.scale.setGameSize(1920, 1080), t.title.y = -game.height / 2 * .6);  // Set size và vị trí title
    String(Math.abs(a - document.getElementById("mygame").clientHeight) / 2);  // (có lẽ tính offset, nhưng không dùng)
    t.loaderCanvas.x = game.width / 2, t.loaderCanvas.y = game.height / 2, t.loaderBase.y = .6 * game.height / 2, t.loaderFill.y = .6 * game.height / 2, t.loaderHighlight.y = .6 * game.height / 2, t.rack.y = game.height / 2 * .1,  // Điều chỉnh vị trí
    t.graphics.clear(), t.graphics.beginFill(16777215), t.graphics.drawRect(game.width / 2 - 187.5, game.height / 2 + t.loaderBase.y + 8, 3.75 * t.loaderProgress, 30)  // Vẽ mask progress dựa trên loaderProgress
}, 

// Callback resize
loadState.onResize = function(e, s) {
    this.resizeGame(e, s)
}, 

// Preload: Load tất cả assets (spritesheet, image, audio)
loadState.preload = function() {
    this.load.spritesheet("muteButton", "assets/img/muteButton.png", 256, 256), this.load.spritesheet("playButton", "assets/img/playButton.png", 256, 256), this.load.spritesheet("playButton", "assets/img/playButton.png", 256, 256), this.load.spritesheet("quitButton", "assets/img/quitButton.png", 256, 256), this.load.spritesheet("replayButton", "assets/img/replayButton.png", 256, 256), this.load.s...  // (code bị truncated, nhưng load các asset: buttons, panels, icons, audio ballHit/cushionHit/pocketHit/cueHit/shimmer/ding/cheer)
    game.load.onFileComplete.add(this.updateProgressBar, this)  // Listener file complete để update progress
}, 

// Hàm update progress bar khi file load complete
loadState.updateProgressBar = function() {
    var e = this.loaderInfo;  // Lấy loaderInfo
    e.loaderProgress = game.load.progress,  // Lấy progress từ game.load
    e.graphics.clear(), e.graphics.beginFill(16777215), e.graphics.drawRect(game.width / 2 - 187.5, game.height / 2 + e.loaderBase.y + 8, 3.75 * e.loaderProgress, 30)  // Cập nhật mask fill
}, 

loadState.render = function() {},  // Render rỗng

// Create: Delay 2s rồi fade out và start mainMenu
loadState.create = function() {
    var e = this.loaderInfo;  // Lấy loaderInfo

    function s() {  // Hàm chuyển state
        projectInfo.levelComplete = !1, game.state.start("mainMenu")
    }
    game.time.events.add(2 * Phaser.Timer.SECOND, (function() {
        game.add.tween(e.loaderCanvas).to({
            alpha: 0
        }, 1e3, Phaser.Easing.Linear.None, !0).onComplete.add(s, this)  // Tween fade out 1000ms rồi gọi s
    }), this)
}, 

loadState.update = function() {},  // Update rỗng

// Shutdown: Xóa loaderCanvas
loadState.shutdown = function() {
    var e = this.loaderInfo;  // Lấy loaderInfo
    game.stage.removeChild(e.loaderCanvas), e.loaderCanvas = null, e = null
};