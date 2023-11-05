const audioMusic = document.querySelector(".audio-music")
const audioAmbi = document.querySelector(".audio-ambi")

const nav = document.querySelector(".nav")
const audioButton = document.querySelector(".audio-button")
const playPause = document.getElementById("play-pause")
const volume = document.querySelector(".volume-slider")

// audioElement.play();

changeVolume()


document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const overlayText = document.querySelector(".overlay-text");

    overlayText.addEventListener("click", ()=>{
        console.log("kurikfovjiofj");
                // 音楽再生開始前に音量を最小に設定
                audioMusic.volume = initialVolume;
                audioAmbi.volume = initialVolume;
        
                audioMusic.play();
                audioAmbi.play();
        
                // 徐々に音量を増加するアニメーションを開始
                fadeVolumeIn(audioMusic, initialVolume, volume.value, 3); // 10秒かけて音量を1まで増加
                fadeVolumeIn(audioAmbi, initialVolume, volume.value, 3);
        
                audioButton.id = "pause"

        // ページがロードされた後にアニメーションを開始
        setTimeout(function () {
            overlay.style.opacity = "0"; // 不透明度を0に設定
            overlay.style.pointerEvents = "none"; // イベントを有効にする
        }, 10); // アニメーションの遅延時間を設定（ミリ秒単位）

        setTimeout(function(){
            nav.style.display = "flex"; // nav要素を表示
        }, 4000)

        // 1秒後に暗いオーバーレイを徐々に明るくするアニメーションを開始
        setTimeout(function () {
            overlay.style.opacity = "0.2"; // オーバーレイを少し明るくする
        }, 2000);

    })

});




// if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
//     // The video element will autoplay with audio.
//   } else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
//     console.log("played but muted");
//   } else if (navigator.getAutoplayPolicy("mediaelement") === "disallowed") {
//     // Set a default placeholder image.
//     console.log("no auto play");
//   }

// 初期音量を設定
const initialVolume = 0.1; // 0.1は最小音量です
audioMusic.volume = initialVolume;
audioAmbi.volume = initialVolume;

audioButton.addEventListener("click", ()=>{
    // changeVolume()
    // audioMusic.play()
    // audioAmbi.play()
    if(audioButton.id == "play"){

        // 音楽再生開始前に音量を最小に設定
        audioMusic.volume = initialVolume;
        audioAmbi.volume = initialVolume;

        audioMusic.play();
        audioAmbi.play();

        // 徐々に音量を増加するアニメーションを開始
        fadeVolumeIn(audioMusic, initialVolume, volume.value / 10, 3); 
        fadeVolumeIn(audioAmbi, initialVolume, volume.value, 3);

        audioButton.id = "pause"
        playPause.className = "pause-image"
        // playPause.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-pause-outline-1024.png"
        playPause.src = "https://static.vecteezy.com/system/resources/previews/027/508/193/original/pause-button-icon-on-transparent-background-stop-icon-button-free-png.png"
        // playPause.src = ""
        // playPause.src = ""
    }else if(audioButton.id == "pause" ){
        audioMusic.pause()
        audioAmbi.pause()
        audioButton.id = "play"
        playPause.className = "play-image"
        playPause.src = "https://static.vecteezy.com/system/resources/previews/014/396/445/original/comic-style-triangle-play-icon-with-transparent-background-file-free-png.png"
    }
})


// 音量を段階的に増加させる関数
function fadeVolumeIn(audioElement, startVolume, endVolume, durationSeconds) {
    const steps = 50; // 50ステップでアニメーションを実行
    const stepDuration = (durationSeconds * 1000) / steps;
    const volumeIncrement = (endVolume - startVolume) / steps;

    let currentVolume = startVolume;
    let step = 0;

    const volumeInterval = setInterval(function () {
        if (step >= steps) {
            clearInterval(volumeInterval); // アニメーション終了時にインターバルをクリア
        }

        audioElement.volume = currentVolume;
        console.log(currentVolume);
        currentVolume += volumeIncrement;
        step++;
    }, stepDuration);
}




function changeVolume() {
    audioAmbi.volume = volume.value;
    audioMusic.volume = volume.value/10;
}
