document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element Selectors ---
    const inputText = document.getElementById('inputText');
    const transformButton = document.getElementById('transformButton');
    const outputText = document.getElementById('outputText');
    const modeButton = document.getElementById('modeButton');
    const mainHeading = document.getElementById('mainHeading');
    const animeGirlContainer = document.getElementById('animeGirlContainer');
    const quoteDisplay = document.getElementById('quoteDisplay'); // Quote Display Element

    // --- State Variables ---
    let isNerdMode = false;

    // --- Quote Arrays ---
    const uwuQuotes = [
        "Hewwo, pwease enter youw message uwu",
        "Transforming text to cuteness! ✨",
        "Get ready for supew kawaii text! 🌸",
        "UwU-ify youw message today! 💖",
        "Let's make youw text extra cute! 🥰"
    ];

    const nerdQuotes = [
        "Compiling text to nerd format...",
        "Initializing nerd text transformation...",
        "Executing leetspeak conversion...",
        "Applying nerd phrases and jargon...",
        "Ready to convert your text to nerd speak. //DEBUG:"
    ];

    // --- Function to Display Random Quote ---
    function displayQuote() {
        const quotes = isNerdMode ? nerdQuotes : uwuQuotes;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.textContent = randomQuote;
    }

    // --- Function to Transform to UwU Text ---
    function transformToUwU(text) {
        let uwuText = text.toLowerCase();

        // Enhanced UwU Transformations (Letter Replacements)
        uwuText = uwuText.replace(/[rl]/g, 'w');
        uwuText = uwuText.replace(/th/g, 'f');
        uwuText = uwuText.replace(/na/g, 'nya');
        uwuText = uwuText.replace(/ne/g, 'nye');
        uwuText = uwuText.replace(/ni/g, 'nyi');
        uwuText = uwuText.replace(/no/g, 'nyo');
        uwuText = uwuText.replace(/nu/g, 'nyu');
        uwuText = uwuText.replace(/ove/g, 'uv');
        uwuText = uwuText.replace(/mom/g, 'mawmaw');
        uwuText = uwuText.replace(/dad/g, 'pawpaw');
        uwuText = uwuText.replace(/es/g, 'ew');


        // UwU Phrases and Emojis
        const uwuPhrases = ["~", " UwU ", " owo ", " >w< ", " :3 ", " nya~ ", " hewhehe ", " teehee ", " >//< ", " rawr ", "*nuzzles*", "*pounces*", "*giggles*", "*blushes*", "*whispers*", "*wags tail*", "*purrs*", "*licks*", "*cries*", "*screeches*", "*happy noises*", "*excitedly*"];
        const emojis = ["🌸", "💖", "✨", "🌟", "🐾", "🥺", "😊", "🥰", "💕", "💫", "🌈", "🍭", "🎀", "🍬", "🍦", "🧁", "🍡", "🥺", "👉👈", "😳", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍",];

        let words = uwuText.split(' ');
        let transformedWords = words.map(word => {
            let newWord = word;
            if (Math.random() < 0.5) {
                newWord += " " + uwuPhrases[Math.floor(Math.random() * uwuPhrases.length)] + " ";
            }
            if (Math.random() < 0.4) {
                newWord += emojis[Math.floor(Math.random() * emojis.length)];
            }
            return newWord;
        });
        uwuText = transformedWords.join(' ');

        // More UwU Specific Replacements
        uwuText = uwuText.replace(/!/g, '!! <3 <3 UwU!!');
        uwuText = uwuText.replace(/\?/g, '?? owo  🥺 nyaa~');
        uwuText = uwuText.replace(/\./g, '. :3 ');


        // Brain Rot Random Uppercase
        let brainRotText = "";
        for (let i = 0; i < uwuText.length; i++) {
            brainRotText += (Math.random() < 0.12 && uwuText[i] !== ' ') ? uwuText[i].toUpperCase() : uwuText[i];
        }
        uwuText = brainRotText;

        return uwuText;
    }

    // --- Function to Transform to Nerd Text ---
    function transformToNerd(text) {
        let nerdText = text;

        // Enhanced Nerd Transformations - Leetspeak, Code Jargon, Structure
        nerdText = nerdText.replace(/a/gi, "4");
        nerdText = nerdText.replace(/e/gi, "3");
        nerdText = nerdText.replace(/i/gi, "1");
        nerdText = nerdText.replace(/o/gi, "0");
        nerdText = nerdText.replace(/s/gi, "5");
        nerdText = nerdText.replace(/t/gi, "7");
        nerdText = nerdText.replace(/l/gi, "|");
        nerdText = nerdText.replace(/b/gi, "8");
        nerdText = nerdText.replace(/g/gi, "9");
        nerdText = nerdText.replace(/z/gi, "2");
        nerdText = nerdText.replace(/k/gi, "|<");
        nerdText = nerdText.replace(/f/gi, "ph");
        nerdText = nerdText.replace(/phph/gi, "ff");
        nerdText = nerdText.replace(/c/gi, "(");
        nerdText = nerdText.replace(/u/gi, "v");
        nerdText = nerdText.replace(/x/gi, "><");
        nerdText = nerdText.replace(/y/gi, "`/");
        nerdText = nerdText.replace(/w/gi, "\/\/\/");


        nerdText = nerdText.toUpperCase();
        nerdText = nerdText.replace(/_/g, '__');


        // Nerd Phrases, Prefixes, Suffixes, Punctuation
        const nerdPhrases = [ "//DEBUG:", "//LOG:", "//INFO:", "/*TODO: Implement Feature X*/", "//FIXME: Potential Bug Here", "//HACK: Quick and Dirty", "//OPTIMIZE: Performance Bottleneck?", "//REFACTOR: Legacy Code", "//CLEANUP: Tech Debt", "//NOTE: Consider Edge Cases", "//WARNING: Deprecated Function", "//ERROR: Critical Failure", "//ASSERT:", "//TRACE:", "//PROFILE:", "//BENCHMARK:", "//SECURITY:", "//PERFORMANCE:", "//REVISION:", "//EXPERIMENTAL:", "//WIP:", "//DEPRECATED:", "//CRITICAL:", "//URGENT:", "//PRIORITY_HIGH:", "//LOW_PRIORITY:", "//VERIFY:", "//TEST_CASE:", "//REQUIREMENTS:", "//DOCUMENTATION:", "//ARCHITECTURE:", "//DESIGN_CHOICE:" ];
        const nerdPrefixes = [ "[INIT]", "[SYSTEM]", "[CORE]", "[PROCESS]", "[THREAD]", "[REQUEST]", "[RESPONSE]", "[DATA]", "[CONFIG]", "[USER]", "[AUTH]", "[NETWORK]", "[STORAGE]", "[MEMORY]", "[CPU]", "[GPU]", "[API]", "[EVENT]", "[TASK]", "[JOB]" ];
        const nerdSuffixes = [ "v1.3.7", "beta", "alpha", "DEBUG_MODE", "PRODUCTION", "STABLE", "UNSTABLE", "EXPERIMENTAL", "LEGACY", "DEPRECATED", "WIP", "BUILD_FAILED", "BUILD_SUCCESS", "TESTS_PASSED", "TESTS_FAILED", "PENDING", "ASYNC", "SYNC", "QUEUE", "CACHE", "BUFFER", "HANDLE", "POINTER", "INDEX", "KEY", "VALUE", "ID", "UUID", "TOKEN", "HASH", "ENCRYPTED", "DECRYPTED", "COMPRESSED", "UNCOMPRESSED", "SERIALIZED", "DESERIALIZED", "VERSION_CONTROL", "BRANCH", "COMMIT", "MERGE", "REVERT", "FORK", "CLONE", "PULL", "PUSH", "DEPLOY", "ROLLBACK", "MONITORING", "LOGGING", "ALERTING", "METRICS", "TELEMETRY" ];
        const punctOptions = [";", ",", " ->", " ::", " &&", " ||", "...", "??"];


        let sentences = nerdText.split('.');
        let transformedSentences = sentences.map(sentence => {
            let newSentence = sentence;

            if (Math.random() < 0.30) {
                newSentence = nerdPrefixes[Math.floor(Math.random() * nerdPrefixes.length)] + " " + newSentence;
            }
            if (Math.random() < 0.25) {
                newSentence += " " + nerdPhrases[Math.floor(Math.random() * nerdPhrases.length)] + " ";
            }
            if (Math.random() < 0.15) {
                newSentence += " [" + nerdSuffixes[Math.floor(Math.random() * nerdSuffixes.length)] + "]";
            }
            if (Math.random() < 0.12) {
                newSentence += punctOptions[Math.floor(Math.random() * punctOptions.length)];
            }
            return newSentence;
        });
        nerdText = transformedSentences.join('.');

        // Code Block Formatting
        if (Math.random() < 0.10) {
            let lines = nerdText.split('.');
            nerdText = "`\n" + lines.map(line => " > " + line.trim()).join("\n") + "\n`";
        }

        return nerdText;
    }

    // --- Event Listeners ---
    modeButton.addEventListener('click', () => {
        isNerdMode = !isNerdMode;
        isUwUMode = !isNerdMode;

        // Toggle body classes for mode styling
        document.body.classList.toggle('nerd-mode', isNerdMode);
        document.body.classList.toggle('uwu-mode', !isNerdMode); // Corrected class toggle

        // Update UI elements based on mode
        if (isNerdMode) {
            modeButton.textContent = "💖 UwU Mode";
            mainHeading.textContent = "🤓 Nerd Text Transform";
            transformButton.textContent = "Compile! 🤓";
            animeGirlContainer.style.display = 'none';
            inputText.placeholder = "Input code (or text) for compilation... // 🤓";
        } else {
            modeButton.textContent = "🤓 Nerd Mode";
            mainHeading.textContent = "✨ UwU Text Transform 🌸";
            transformButton.textContent = "Transform! 💖";
            animeGirlContainer.style.display = 'block';
            inputText.placeholder = "Enter your message here~ ✨🌸💖";
        }

        outputText.textContent = ""; // Clear output
        displayQuote(); // Update quote on mode switch
    });

    transformButton.addEventListener('click', () => {
        const message = inputText.value;
        const transformedMessage = isNerdMode ? transformToNerd(message) : transformToUwU(message);
        outputText.textContent = transformedMessage;
    });

    // --- Initial Quote Display ---
    displayQuote(); // Display quote on page load
});
