export const SoundManager = {
    popSound: null,
    successSound: null,    
    init() {
        if (!this.popSound) {
            this.popSound = new Audio('sounds/pop.mp3');
            this.popSound.preload = 'auto';
        }
        if (!this.successSound) {
            this.successSound = new Audio('../assets/sounds/correct.mp3');
            this.successSound.preload = 'auto';
        }
    },
    playPop() {
        if (!this.popSound) return;
        // 連続でタップしても最初から再生されるようにリセット
        this.popSound.currentTime = 0;
        this.popSound.play().catch(e => console.warn("音声の再生に失敗しました:", e));
    },
    
    playSuccess() {
        if (!this.successSound) return;
        this.successSound.currentTime = 0;
        this.successSound.play().catch(e => console.warn("音声の再生に失敗しました:", e));
    }
};