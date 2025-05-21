

    // const URL = "./my_model/";

    // let model, webcam, labelContainer, maxPredictions;
    // let isCameraRunning = false;
    // let animationFrameId;

    // document.getElementById("toggle-btn").addEventListener("click", toggleCamera);
    // document.getElementById("webcam-container").addEventListener("click", toggleCamera);

    // async function toggleCamera() {
    //     if (!isCameraRunning) {
    //         await init(); // Start webcam
    //         document.getElementById("toggle-btn").innerText = "Stop Camera";
    //     } else {
    //         stopCamera(); // Stop webcam
    //         document.getElementById("toggle-btn").innerText = "Start Camera";
    //     }
    //     isCameraRunning = !isCameraRunning;
    // }

    // async function init() {
    //     const modelURL = URL + "model.json";
    //     const metadataURL = URL + "metadata.json";

    //     model = await tmImage.load(modelURL, metadataURL);
    //     maxPredictions = model.getTotalClasses();

    //     const flip = true;
    //     webcam = new tmImage.Webcam(200, 200, flip);
    //     await webcam.setup();
    //     await webcam.play();
    //     animationFrameId = window.requestAnimationFrame(loop);

    //     const container = document.getElementById("webcam-container");
    //     container.innerHTML = ""; // Clear old canvas
    //     container.appendChild(webcam.canvas);

    //     labelContainer = document.getElementById("label-container");
    //     labelContainer.innerHTML = "";
    // }

    // function stopCamera() {
    //     if (webcam && webcam.stop) {
    //         webcam.stop();
    //     }
    //     window.cancelAnimationFrame(animationFrameId);

    //     const container = document.getElementById("webcam-container");
    //     container.innerHTML = ""; // Remove video
    //     labelContainer.innerHTML = "Camera stopped.";
    // }

    // async function loop() {
    //     webcam.update();
    //     await predict();
    //     animationFrameId = window.requestAnimationFrame(loop);
    // }

    // async function predict() {
    //     const prediction = await model.predict(webcam.canvas);
    //     let highestProb = 0;
    //     let topPrediction = "";

    //     prediction.forEach(p => {
    //         if (p.probability > highestProb) {
    //             highestProb = p.probability;
    //             topPrediction = `${p.className} (${(p.probability * 100).toFixed(1)}%)`;
    //         }
    //     });

    //     labelContainer.innerHTML = `<strong style="font-size: 1.5rem; color: #2c3e50;">${topPrediction}</strong>`;
    // }

