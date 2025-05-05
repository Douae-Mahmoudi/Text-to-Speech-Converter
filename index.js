let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Charger les voix dès qu'elles sont disponibles
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; // Vider la liste avant de remplir

    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.options.add(option);
    });

    // Sélection par défaut
    speech.voice = voices[0];
};

// Lancer la lecture au clic
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    speech.voice = voices[voiceSelect.value] || voices[0];
    window.speechSynthesis.speak(speech);
});
