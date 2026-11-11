/* =====================================================================
   CONFIG — edit everything in this block. Nothing below it needs to
   change. See the guide you were given alongside these files for a
   field-by-field walkthrough.
   ===================================================================== */
const CONFIG = {

  // ---- Names & contact -------------------------------------------------
  herName: "Precious",          // her first name
  myName: "Lee",                 // your name, as it should appear on screen
  whatsappNumber: "260976906537", // country code + number, digits only, no "+", no spaces

  // Optional photo. Put the file in this same folder and type its exact
  // filename here (e.g. "us.jpg"). Leave as "" to skip the photo entirely.
  photoFilename: "",

  // ---- Screen 1: the gate ------------------------------------------------
  gate: {
    fromText: "From your boyfriend {{my}}…",
    headline: "I made you something",
    subtext: "A little something to brighten your day, always keep that smile",
    buttonText: "Open me, I made you something 🥹🥰",
  },

  // ---- Screen 2: day check ----------------------------------------------
  mood: {
    question: "How's today treating you?",
    continueButtonText: "Okay... keep going",
    // listed low to high; "max" is the top slider value (0-100) each label covers
    labels: [
      { max: 25, label: "Rough one 😩",             emoji: "😩" },
      { max: 50, label: "Meh, surviving 😐",         emoji: "😐" },
      { max: 75, label: "Getting better 🙂",         emoji: "🙂" },
      { max: 100, label: "Okay, now I'm smiling, I needed something like this 😏", emoji: "😏" },
    ],
  },

  // ---- Screen 3: the sweet, flirty note -----------------------------------
  apology: {
    // Write this in your own words. Keep it short, warm, no agenda.
    message:
      "Hey. I don't know exactly how today's been for you, but I know " +
      "you deserve way better than 'rough' or 'boring'. So I made this.\n\n" +
      "You're kind of my favourite person to make smile, and I've been " +
      "thinking about you more than usual today.",
    footer: "No agenda here. Just you.",
    continueButtonText: "Keep going",
    tapToSkipHint: "(tap the text to skip ahead)",
  },

  // ---- Screen 4: the silly questions ---------------------------------------
  // type: "choice" | "slider" | "text" | "snack"
  questions: [
    {
      id: "missMost",
      type: "choice",
      prompt: "What do you miss most about me right now?",
      options: [
        "My terrible jokes 😅",
        "Being warm next to you 🥶",
        "Someone to annoy on purpose 😏",
        "Your personal comforter 😊",
      ],
      reactions: [
        "Lee is writing this down 📝",
        "Noted. Permanently. 🫶",
        "Honestly, fair. 😂",
        "A vital service, truly. 😘",
      ],
    },
    {
      id: "rateCharm",
      type: "slider",
      prompt: "Rate how charming I am, 1 to 10",
      min: 7,          // it genuinely cannot go below this — on purpose, and it's funny
      max: 10,
      start: 7,
      reactions: {
        7: "Fair. I'll take it. 😅",
        8: "Okay, not bad 🙂",
        9: "Getting warmer 😏",
        10: "Chef's kiss 👨‍🍳💋",
      },
      continueButtonText: "Lock it in",
    },
    {
      id: "reward",
      type: "choice",
      prompt: "Pick your reward for surviving today",
      options: [
        "Cuddles 🫂",
        "Your favourite food 🍜",
        "10 compliments, out loud 💬",
        "A song for you 🎶😎",
      ],
      reactions: [
        "Cuddle delivery: scheduled 🫂",
        "Lee is already looking at the menu 🍜",
        "He's already nervous. Good. 💬",
        "This is going to be bad. In a good way. 😉",
      ],
    },
    {
      id: "animal",
      type: "text",
      prompt: "If I were an animal right now I'd be…",
      placeholder: "a goofy golden retriever 🐶",
      reaction: "Honestly? Accurate. 🐶",
      continueButtonText: "That tracks",
    },
    {
      id: "snacks",
      type: "snack",
      prompt: "Do you love me more than food (snacks?)",
      yesLabel: "Yes",
      noLabel: "No",
      yesReaction: "Lee breathes again 😮‍💨",
      noCaughtReaction: "Wow. Okay. Respect, honestly. 😂",
    },
    {
      id: "threeWords",
      type: "text",
      prompt: "Describe your mood in 3 words",
      placeholder: "e.g. tired, soft, hungry",
      reaction: "Thank you for being honest. 🤍",
      continueButtonText: "Continue",
    },
  ],

  // ---- Screen 5: hug machine ------------------------------------------------
  hugMachine: {
    countText: "You've given {{my}} {n} hugs 🥺",
    thresholdMessages: {
      10: "10 hugs! Lee's heart is doing great. 💗",
      25: "25 hugs?! Okay, world record pace. 🏆",
      50: "50 hugs. Lee may actually combust. 🥹",
    },
    continueButtonText: "Onward",
  },

  // ---- Screen 6: surprise gifts -----------------------------------------------
  gifts: [
    { emoji: "🎁", coupon: "One free cuddle session, redeemable any time 🫂" },
    { emoji: "🎀", coupon: "Lee calls on a video call while we are both eating dinner🍳" },
    { emoji: "💝", coupon: "One unlimited compliment pass, no expiry date 💋" },
  ],
  giftContinueButtonText: "To the end",

  // ---- Easter egg (tap the small heart 5 times) --------------------------------
  easterEgg: {
    note:
      "Hey. If you found this, it probably means you're still reading, " +
      "which already makes me smile. You're my favourite person, on the " +
      "good days and the boring ones. I love you and I know you love me more😁.",
  },

  // ---- Screen 7: finale ------------------------------------------------------
  finale: {
    heading: "That's everything",
    message:
      "That's all of it — the silly parts and the sweet parts. Whatever " +
      "kind of day you're having, I hope this made at least a little bit " +
      "of it better. I'm thinking about you.",
    sendButtonText: "Send my answers to {{my}} 💌",
    needTimeButtonText: "Just thinking of you, no reply needed 🤍",
    // Prefilled WhatsApp message intro — her answers get appended after this.
    whatsappIntro: "Okay, I made it through your whole thing. Here's how it went:",
    // Sent instead, if she picks the gentler button. No answers are attached.
    whatsappNeedTimeMessage:
      "I saw your whole surprise, it made me smile. No need to reply " +
      "right now, just wanted you to know I'm thinking of you.",
  },
};

/* =====================================================================
   Below here is the app logic. You shouldn't need to edit this.
   ===================================================================== */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function tpl(str) {
    return String(str)
      .replace(/\{\{her\}\}/g, CONFIG.herName)
      .replace(/\{\{my\}\}/g, CONFIG.myName);
  }

  /* ---------------------------------------------------------------
     State
     --------------------------------------------------------------- */
  const state = {
    hugCount: 0,
    hugMessagesShown: {},
    giftsOpenedCount: 0,
    easterTaps: 0,
    currentQuestionIndex: 0,
    answers: {}, // id -> { label, value }
    snackFleeCount: 0,
  };

  // set by initApology(), called by initMood() when she moves past the mood screen
  let triggerApologyTyping = function () {};

  /* ---------------------------------------------------------------
     Screen order & progress bar
     --------------------------------------------------------------- */
  const stepOrder = [
    "gate",
    "mood",
    "apology",
    ...CONFIG.questions.map((q, i) => "q" + i),
    "hug",
    "gifts",
    "finale",
  ];

  const progressBarEl = document.getElementById("progressBar");

  function setProgress(stepKey) {
    const idx = stepOrder.indexOf(stepKey);
    const pct = Math.max(6, (idx / (stepOrder.length - 1)) * 100);
    if (progressBarEl) progressBarEl.style.width = pct + "%";
  }

  /* ---------------------------------------------------------------
     Screen transitions
     --------------------------------------------------------------- */
  const screens = {};
  document.querySelectorAll(".screen").forEach((el) => {
    screens[el.dataset.screen] = el;
  });

  let activeScreenName = "gate";

  function showScreen(name) {
    const current = screens[activeScreenName];
    const next = screens[name];
    if (!next || current === next) return;

    setProgress(name === "questions" ? "q" + state.currentQuestionIndex : name);

    if (reduceMotion) {
      current.classList.remove("is-active");
      next.classList.add("is-active");
      activeScreenName = name;
      return;
    }

    current.classList.remove("is-active");
    current.classList.add("is-leaving");
    setTimeout(() => {
      current.classList.remove("is-leaving");
    }, 300);

    next.classList.add("is-active");
    activeScreenName = name;
  }

  /* ---------------------------------------------------------------
     Background decoration (floating hearts / teddies / sparkles)
     --------------------------------------------------------------- */
  function initBackgroundDecor() {
    const layer = document.getElementById("bgDecor");
    if (!layer || reduceMotion) return;
    const symbols = ["💗", "🧸", "✨", "💕", "⭐️"];
    const count = 16;
    for (let i = 0; i < count; i++) {
      const span = document.createElement("span");
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      const left = Math.random() * 100;
      const size = 14 + Math.random() * 18;
      const duration = 14 + Math.random() * 14;
      const delay = Math.random() * -20;
      const drift = (Math.random() * 60 - 30) + "px";
      span.style.left = left + "vw";
      span.style.fontSize = size + "px";
      span.style.animationDuration = duration + "s";
      span.style.animationDelay = delay + "s";
      span.style.setProperty("--drift", drift);
      layer.appendChild(span);
    }
  }

  /* ---------------------------------------------------------------
     Global tap heart-burst
     --------------------------------------------------------------- */
  function spawnHeartBurstAt(x, y, parent) {
    if (reduceMotion) return;
    const heart = document.createElement("span");
    heart.className = "heart-burst";
    heart.textContent = ["💗", "💕", "💖", "✨"][Math.floor(Math.random() * 4)];
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    (parent || document.body).appendChild(heart);
    setTimeout(() => heart.remove(), 950);
  }

  function initGlobalTapHearts() {
    document.addEventListener(
      "pointerdown",
      (e) => {
        spawnHeartBurstAt(e.clientX, e.clientY, document.body);
      },
      { passive: true }
    );
  }

  /* ---------------------------------------------------------------
     1. Gate
     --------------------------------------------------------------- */
  function initGate() {
    document.getElementById("gateFrom").textContent = tpl(CONFIG.gate.fromText);
    document.getElementById("gateHeadline").textContent = CONFIG.gate.headline;
    document.getElementById("gateSub").textContent = CONFIG.gate.subtext;
    const btn = document.getElementById("gateOpenBtn");
    btn.textContent = tpl(CONFIG.gate.buttonText);
    btn.addEventListener("click", () => showScreen("mood"));
  }

  /* ---------------------------------------------------------------
     2. Mood check
     --------------------------------------------------------------- */
  function moodLabelFor(value) {
    for (const entry of CONFIG.mood.labels) {
      if (value <= entry.max) return entry;
    }
    return CONFIG.mood.labels[CONFIG.mood.labels.length - 1];
  }

  function initMood() {
    document.getElementById("moodQuestion").textContent = tpl(CONFIG.mood.question);
    const slider = document.getElementById("moodSlider");
    slider.setAttribute("aria-label", tpl(CONFIG.mood.question));
    const label = document.getElementById("moodLabel");
    const face = document.getElementById("moodFace");
    const continueBtn = document.getElementById("moodContinueBtn");
    continueBtn.textContent = CONFIG.mood.continueButtonText;

    function update() {
      const entry = moodLabelFor(Number(slider.value));
      label.textContent = entry.label;
      face.textContent = entry.emoji;
      state.answers.mood = { label: entry.label, value: slider.value };
    }

    slider.addEventListener("input", update);
    update();

    continueBtn.addEventListener("click", () => {
      showScreen("apology");
      triggerApologyTyping();
    });
  }

  /* ---------------------------------------------------------------
     3. Apology — typed letter by letter
     --------------------------------------------------------------- */
  function initApology() {
    const textEl = document.getElementById("apologyText");
    const hintEl = document.getElementById("apologyHint");
    const footerEl = document.getElementById("apologyFooter");
    const continueBtn = document.getElementById("apologyContinueBtn");
    const full = tpl(CONFIG.apology.message);
    continueBtn.textContent = CONFIG.apology.continueButtonText;

    let typed = false;
    let timer = null;

    function finishTyping() {
      if (timer) clearInterval(timer);
      textEl.textContent = full;
      hintEl.textContent = "";
      footerEl.textContent = CONFIG.apology.footer;
      continueBtn.classList.remove("is-hidden");
      typed = true;
    }

    function startTyping() {
      textEl.textContent = "";
      hintEl.textContent = reduceMotion ? "" : CONFIG.apology.tapToSkipHint;
      footerEl.textContent = "";
      continueBtn.classList.add("is-hidden");
      typed = false;

      if (reduceMotion) {
        finishTyping();
        return;
      }

      let i = 0;
      timer = setInterval(() => {
        i++;
        textEl.textContent = full.slice(0, i);
        if (i >= full.length) finishTyping();
      }, 22);
    }

    textEl.addEventListener("click", () => {
      if (!typed) finishTyping();
    });

    continueBtn.addEventListener("click", () => {
      state.currentQuestionIndex = 0;
      renderQuestion(0);
      showScreen("questions");
    });

    triggerApologyTyping = startTyping;
  }

  /* ---------------------------------------------------------------
     4. Questions
     --------------------------------------------------------------- */
  const questionCard = document.getElementById("questionCard");

  function renderQuestion(index) {
    const q = CONFIG.questions[index];
    if (!q) return;
    setProgress("q" + index);
    questionCard.innerHTML = "";

    const heading = document.createElement("h2");
    heading.className = "q-heading";
    heading.textContent = tpl(q.prompt);
    questionCard.appendChild(heading);

    if (q.type === "choice") renderChoiceQuestion(q);
    else if (q.type === "slider") renderSliderQuestion(q);
    else if (q.type === "text") renderTextQuestion(q);
    else if (q.type === "snack") renderSnackQuestion(q);
  }

  function appendContinueButton(label, onClick) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary";
    btn.textContent = label || "Continue";
    btn.addEventListener("click", onClick);
    questionCard.appendChild(btn);
    return btn;
  }

  function goToNextQuestion() {
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < CONFIG.questions.length) {
      renderQuestion(state.currentQuestionIndex);
    } else {
      initHugScreenIfNeeded();
      showScreen("hug");
    }
  }

  function renderChoiceQuestion(q) {
    const optionsWrap = document.createElement("div");
    optionsWrap.className = "q-options";

    const reactionEl = document.createElement("p");
    reactionEl.className = "q-reaction";

    let continueBtn = null;

    q.options.forEach((optionText, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "q-option-btn";
      btn.textContent = optionText;
      btn.addEventListener("click", () => {
        optionsWrap.querySelectorAll(".q-option-btn").forEach((b) => b.classList.remove("is-picked"));
        btn.classList.add("is-picked");
        reactionEl.textContent = (q.reactions && q.reactions[i]) || "Noted. 💗";
        state.answers[q.id] = { label: optionText };
        if (!continueBtn) {
          continueBtn = appendContinueButton(q.continueButtonText, goToNextQuestion);
        }
      });
      optionsWrap.appendChild(btn);
    });

    questionCard.appendChild(optionsWrap);
    questionCard.appendChild(reactionEl);
  }

  function renderSliderQuestion(q) {
    const reactionEl = document.createElement("p");
    reactionEl.className = "q-reaction";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.className = "slider";
    slider.min = String(q.min);
    slider.max = String(q.max);
    slider.value = String(q.start != null ? q.start : q.min);
    slider.setAttribute("aria-label", tpl(q.prompt));

    function update() {
      const v = Number(slider.value);
      reactionEl.textContent = (q.reactions && q.reactions[v]) || "";
      state.answers[q.id] = { label: String(v), value: v };
    }

    slider.addEventListener("input", update);

    questionCard.appendChild(slider);
    questionCard.appendChild(reactionEl);
    update();

    appendContinueButton(q.continueButtonText, goToNextQuestion);
  }

  function renderTextQuestion(q) {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "q-text-input";
    input.placeholder = q.placeholder || "";
    input.maxLength = 80;

    const reactionEl = document.createElement("p");
    reactionEl.className = "q-reaction";

    questionCard.appendChild(input);
    questionCard.appendChild(reactionEl);

    const btn = appendContinueButton(q.continueButtonText, () => {
      const value = input.value.trim() || q.placeholder || "";
      state.answers[q.id] = { label: value };
      goToNextQuestion();
    });

    input.addEventListener("input", () => {
      reactionEl.textContent = input.value.trim() ? q.reaction : "";
    });
  }

  function renderSnackQuestion(q) {
    const zone = document.createElement("div");
    zone.className = "snack-zone";

    const reactionEl = document.createElement("p");
    reactionEl.className = "q-reaction";

    const yesBtn = document.createElement("button");
    yesBtn.type = "button";
    yesBtn.className = "snack-btn snack-yes";
    yesBtn.textContent = q.yesLabel;

    const noBtn = document.createElement("button");
    noBtn.type = "button";
    noBtn.className = "snack-btn snack-no";
    noBtn.textContent = q.noLabel;

    let yesScale = 1;
    let fleeCount = 0;
    let settled = false;

    function flee() {
      if (settled) return;
      fleeCount++;
      yesScale = Math.min(1.6, 1 + fleeCount * 0.12);
      yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
      const left = 15 + Math.random() * 70;
      const top = 10 + Math.random() * 70;
      noBtn.style.left = left + "%";
      noBtn.style.top = top + "%";
    }

    noBtn.addEventListener("pointerenter", flee);
    noBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      flee();
    }, { passive: false });

    noBtn.addEventListener("click", () => {
      // she actually caught it — that's allowed, and still pressure-free
      settled = true;
      reactionEl.textContent = q.noCaughtReaction;
      state.answers[q.id] = { label: q.noLabel };
      appendSnackContinue();
    });

    yesBtn.addEventListener("click", () => {
      settled = true;
      reactionEl.textContent = q.yesReaction;
      state.answers[q.id] = { label: q.yesLabel };
      appendSnackContinue();
    });

    let continueAdded = false;
    function appendSnackContinue() {
      if (continueAdded) return;
      continueAdded = true;
      appendContinueButton("Continue", goToNextQuestion);
    }

    zone.appendChild(noBtn);
    zone.appendChild(yesBtn);
    questionCard.appendChild(zone);
    questionCard.appendChild(reactionEl);
  }

  /* ---------------------------------------------------------------
     5. Hug machine
     --------------------------------------------------------------- */
  let hugInitDone = false;

  function initHugScreenIfNeeded() {
    if (hugInitDone) return;
    hugInitDone = true;

    const hugBtn = document.getElementById("hugBtn");
    const hugCountEl = document.getElementById("hugCount");
    const hugMessageEl = document.getElementById("hugMessage");
    const continueBtn = document.getElementById("hugContinueBtn");
    continueBtn.textContent = CONFIG.hugMachine.continueButtonText;

    function render() {
      hugCountEl.textContent = tpl(CONFIG.hugMachine.countText).replace("{n}", state.hugCount);
    }

    hugBtn.addEventListener("click", (e) => {
      state.hugCount++;
      render();

      const rect = hugBtn.getBoundingClientRect();
      for (let i = 0; i < 3; i++) {
        const dx = (Math.random() - 0.5) * 60;
        spawnHeartBurstAt(rect.left + rect.width / 2 + dx, rect.top + rect.height / 2, document.getElementById("screen-hug"));
      }

      const msg = CONFIG.hugMachine.thresholdMessages[state.hugCount];
      if (msg && !state.hugMessagesShown[state.hugCount]) {
        state.hugMessagesShown[state.hugCount] = true;
        hugMessageEl.textContent = msg;
      }
    });

    continueBtn.addEventListener("click", () => {
      initGiftsScreenIfNeeded();
      showScreen("gifts");
    });

    render();
  }

  /* ---------------------------------------------------------------
     6. Gifts
     --------------------------------------------------------------- */
  let giftsInitDone = false;

  function initGiftsScreenIfNeeded() {
    if (giftsInitDone) return;
    giftsInitDone = true;

    const row = document.getElementById("giftRow");
    const continueBtn = document.getElementById("giftContinueBtn");
    continueBtn.textContent = CONFIG.giftContinueButtonText;

    CONFIG.gifts.forEach((gift, i) => {
      const box = document.createElement("button");
      box.type = "button";
      box.className = "gift-box";
      box.textContent = gift.emoji;
      box.addEventListener("click", () => {
        if (box.classList.contains("is-opened")) return;
        box.classList.add("is-opened");
        box.textContent = gift.coupon;
        state.giftsOpenedCount++;
      });
      row.appendChild(box);
    });

    continueBtn.addEventListener("click", () => {
      initFinaleScreenIfNeeded();
      showScreen("finale");
    });
  }

  /* ---------------------------------------------------------------
     7. Easter egg
     --------------------------------------------------------------- */
  function initEasterEgg() {
    const heart = document.getElementById("easterHeart");
    const modal = document.getElementById("easterModal");
    const noteText = document.getElementById("easterNoteText");
    const closeBtn = document.getElementById("easterCloseBtn");

    heart.addEventListener("click", () => {
      state.easterTaps++;
      if (state.easterTaps >= 5) {
        state.easterTaps = 0;
        noteText.textContent = CONFIG.easterEgg.note;
        modal.classList.remove("is-hidden");
      }
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("is-hidden");
    });
  }

  /* ---------------------------------------------------------------
     Confetti
     --------------------------------------------------------------- */
  function burstConfetti() {
    if (reduceMotion) return;
    const layer = document.getElementById("confettiLayer");
    const colors = ["#ff9fb2", "#ffc9a8", "#c8b6e2", "#a98fd1", "#ff7a9a"];
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      const size = 6 + Math.random() * 6;
      piece.style.width = size + "px";
      piece.style.height = size * 0.6 + "px";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = 2.4 + Math.random() * 1.6 + "s";
      piece.style.animationDelay = Math.random() * 0.6 + "s";
      layer.appendChild(piece);
      setTimeout(() => piece.remove(), 4600);
    }
  }

  /* ---------------------------------------------------------------
     8. Finale
     --------------------------------------------------------------- */
  let finaleInitDone = false;

  function buildAnswerSummary() {
    const a = state.answers;
    const lines = [];
    if (a.mood) lines.push("- Mood check-in: " + a.mood.label);
    if (a.missMost) lines.push("- Misses most: " + a.missMost.label);
    if (a.rateCharm) lines.push("- Rated my charm: " + a.rateCharm.label + "/10");
    if (a.reward) lines.push("- Picked reward: " + a.reward.label);
    if (a.animal) lines.push("- If I were an animal: " + a.animal.label);
    if (a.snacks) lines.push("- Loves me more than snacks: " + a.snacks.label);
    if (a.threeWords) lines.push("- Three words for how she feels: " + a.threeWords.label);
    lines.push("- Hugs given: " + state.hugCount);
    lines.push("- Gifts opened: " + state.giftsOpenedCount + "/" + CONFIG.gifts.length);
    return lines.join("\n");
  }

  function openWhatsApp(message) {
    const url = "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodeURIComponent(message);
    // a direct navigation is the most reliable way to hand off to the
    // WhatsApp app on a phone browser; opening a new tab is the fallback
    // for desktop browsers that might block it
    const win = window.open(url, "_blank", "noopener");
    if (!win) {
      window.location.href = url;
    }
  }

  function initFinaleScreenIfNeeded() {
    if (finaleInitDone) return;
    finaleInitDone = true;

    document.getElementById("finaleHeading").textContent = CONFIG.finale.heading;
    document.getElementById("finaleMessage").textContent = CONFIG.finale.message;

    if (CONFIG.photoFilename) {
      const img = document.getElementById("finalePhoto");
      img.src = CONFIG.photoFilename;
      img.classList.remove("is-hidden");
    }

    const sendBtn = document.getElementById("sendAnswersBtn");
    const needTimeBtn = document.getElementById("needTimeBtn");
    sendBtn.textContent = tpl(CONFIG.finale.sendButtonText);
    needTimeBtn.textContent = CONFIG.finale.needTimeButtonText;

    sendBtn.addEventListener("click", () => {
      const message = CONFIG.finale.whatsappIntro + "\n\n" + buildAnswerSummary();
      openWhatsApp(message);
    });

    needTimeBtn.addEventListener("click", () => {
      openWhatsApp(CONFIG.finale.whatsappNeedTimeMessage);
    });

    burstConfetti();
  }

  /* ---------------------------------------------------------------
     Boot
     --------------------------------------------------------------- */
  function boot() {
    initBackgroundDecor();
    initGlobalTapHearts();
    initGate();
    initMood();
    initApology();
    initEasterEgg();
    setProgress("gate");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
