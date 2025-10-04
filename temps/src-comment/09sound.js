// Object Sound: Quản lý âm thanh
var Sound = new function() {
    this.on = !0, this.master = this.on, this.slave = this.on,  // Flag on, master/slave mute
    this.setMasterMute = (e = !1) => {  // Set master mute (e=true mute)
        this.master = !e, this.updateMute()
    }, 
    this.setMute = (e = !1) => {  // Set slave mute
        this.slave = !e, this.updateMute()
    }, 
    this.updateMute = () => {  // Update on = master AND slave
        this.on = this.master && this.slave
    }
};

// Play sound: e key, t volume (default 1)
Sound.Play = function(e, t) {
    (void 0 === t && (t = 1), Sound.on) && new Phaser.Sound(game, e, t).play()  // Play nếu on
}, 

// Tạo AudioContext mới
Sound.createNewAudioContext = function() {
    game.sound.context = new AudioContext, game.sound.masterGain.disconnect(), game.sound.masterGain = game.sound.context.createGain(), game.sound.masterGain.connect(game.sound.context.destination)
}, 

// Kiểm tra AudioContext
Sound.checkAudioContext = function() {
    this.isSuspended() && this.startCheckingSuspended();
    const e = game.sound.context.currentTime;
    setTimeout((() => {
        const t = game.sound.context.currentTime;
        e === t && this.createNewAudioContext()  // Nếu time không thay đổi, tạo mới
    }), 1e3)
}, 

// Bắt đầu check suspended interval
Sound.startCheckingSuspended = function() {
    clearInterval(this.intervalId), this.intervalId = setInterval((() => {
        this.isSuspended() ? game.sound.context.resume() : clearInterval(this.intervalId)  // Resume nếu suspended
    }), 1e3)
}, 

// Kiểm tra suspended
Sound.isSuspended = function() {
    return game.sound.usingWebAudio && "suspended" === game.sound.context.state
}, 

setInterval(Sound.checkAudioContext.bind(Sound), 1e3);  // Check định kỳ 1s