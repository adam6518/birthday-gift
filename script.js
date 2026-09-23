let score = 0;

// ==========================================
// START ADVENTURE
// ==========================================

function start() {
  document.getElementById("welcome").hidden = true;
  document.getElementById("app").hidden = false;

  spawnStars();
}

// ==========================================
// MINI GAME - COLLECT STARS
// ==========================================

function spawnStars() {
  const starZone = document.getElementById("stars");

  if (!starZone || starZone.children.length > 0) {
    return;
  }

  for (let i = 0; i < 12; i++) {
    const star = document.createElement("button");

    star.className = "star";
    star.type = "button";
    star.textContent = ["✨", "🌸", "💖", "⭐"][i % 4];

    star.style.left = Math.random() * 90 + "%";
    star.style.top = Math.random() * 85 + "%";

    star.addEventListener("click", function () {
      if (star.disabled) return;

      star.disabled = true;
      star.style.opacity = "0.2";

      score++;

      const scoreElement = document.getElementById("score");

      if (scoreElement) {
        scoreElement.textContent = score;
      }

      if (score >= 5) {
        const unlockButton = document.getElementById("unlock");

        if (unlockButton) {
          unlockButton.disabled = false;
          unlockButton.textContent = "Unlock Memories 🔓";
        }
      }
    });

    starZone.appendChild(star);
  }
}

// ==========================================
// UNLOCK MEMORIES
// ==========================================

function unlock() {
  const memoriesSection = document.getElementById("memories");

  if (!memoriesSection) {
    console.error("Section memories tidak ditemukan!");
    return;
  }

  memoriesSection.hidden = false;

  setTimeout(() => {
    memoriesSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

// ==========================================
// VIDEO SECTION
// ==========================================

function videos() {
  const videoSection = document.getElementById("video");

  if (!videoSection) {
    console.error("Section video tidak ditemukan!");
    return;
  }

  videoSection.hidden = false;

  videoSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// ==========================================
// MYSTERY BOX
// ==========================================

function mystery() {
  const mysterySection = document.getElementById("mystery");

  if (!mysterySection) {
    console.error("Section mystery tidak ditemukan!");
    return;
  }

  mysterySection.hidden = false;

  mysterySection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// ==========================================
// RANDOM MYSTERY BOX
// ==========================================

let luckyBox = Math.floor(Math.random() * 3);

function box(index) {
  const result = document.getElementById("result");

  if (!result) return;

  if (index === luckyBox) {
    result.textContent = "You found it! Have a wonderful year ahead 💗";

    const letterSection = document.getElementById("letter");

    if (letterSection) {
      letterSection.hidden = false;

      letterSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const note = document.getElementById("note");

    if (note) {
      note.textContent = `
Selamat Ulang Tahun ke 23 ! 🎂

Aku Harap Kamu Suka Hadiah Kecil Ini Ya.

Aku Gak Pinter Bikin Kata - Kata / Longtext Jadi Maaf Kalo Seadanya,
Sebetulnya Tadinya Mau Liat Ekspresi Kamu Secara Langsung Pas Kamu Buka Hadiah Kecil Ini Pas Ketemuan Tanggal 26 September 2026
Tapi KAMU NYA GABOLEHIN... PARAH !!! (Bercanda Yaaa Hwhw)

Semoga April 2027 Gak Ada Halangan dan Kita Bisa Ketemu.
Awas Kalo Gaboleh Lagi -_-

Untuk Wish dari Aku Klik di Bawah Yaa.

Have the loveliest birthday! 💗
`;
    }
  } else {
    result.textContent = "Kamu Salah Pilih! Pilih Yang Lain Deh 🎀";
  }
}

// ==========================================
// BASIC LIGHTBOX FUNCTION
// ==========================================

function light(src) {
  const lightbox = document.getElementById("lightbox");
  const big = document.getElementById("big");

  if (!lightbox || !big) return;

  big.src = src;
  lightbox.hidden = false;

  document.body.classList.add("lightbox-open");
}

// ==========================================
// BEAUTIFUL BIRTHDAY CELEBRATION
// ==========================================

function celebrate() {
  const modal = document.getElementById("birthdayModal");

  if (!modal) return;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";

  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      makeHeart();
    }, i * 70);
  }
}

// ==========================================
// CLOSE BIRTHDAY MODAL
// ==========================================

function closeBirthdayModal() {
  const modal = document.getElementById("birthdayModal");

  if (!modal) return;

  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

// ==========================================
// BACKGROUND MUSIC
// ==========================================

let isMusicPlaying = false;

function music() {
  const audio = document.getElementById("birthdayMusic");
  const musicButton = document.querySelector("nav button");

  if (!audio || !musicButton) return;

  if (!isMusicPlaying) {
    audio
      .play()
      .then(() => {
        isMusicPlaying = true;
        musicButton.textContent = "🔇 Pause Music";
      })
      .catch(() => {
        console.log("Music playback was blocked by the browser.");
      });
  } else {
    audio.pause();

    isMusicPlaying = false;
    musicButton.textContent = "🔊 Music";
  }
}

// ==========================================
// BIRTHDAY VERIFICATION
// ==========================================

const birthdayForm = document.getElementById("birthdayForm");
const birthdayGate = document.getElementById("birthdayGate");
const fullNameInput = document.getElementById("fullName");
const ageInput = document.getElementById("age");
const gateError = document.getElementById("gateError");
const gateErrorText = document.getElementById("gateErrorText");

// ==========================================
// FORM SUBMISSION
// ==========================================

if (birthdayForm) {
  birthdayForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredName = fullNameInput.value.trim();
    const enteredAge = ageInput.value.trim();

    if (
      enteredName.toLowerCase() !== "risha nur kharisma" ||
      enteredAge !== "23"
    ) {
      showGateError();
      return;
    }

    birthdayGate.classList.add("gate-hidden");
    document.body.style.overflow = "auto";
  });
}

// ==========================================
// SHOW ERROR
// ==========================================

function showGateError() {
  if (!gateError || !gateErrorText) return;

  gateErrorText.textContent =
    "Kan Udah Aku Bilang Isi Yang Jujur. Kalo Masih Bohong Kita Gak Akan Lanjut Loh";

  gateError.classList.remove("show");

  void gateError.offsetWidth;

  gateError.classList.add("show");

  const card = document.querySelector(".gate-card");

  if (card) {
    card.classList.remove("gate-shake");

    void card.offsetWidth;

    card.classList.add("gate-shake");
  }
}

// ==========================================
// REMOVE ERROR WHEN USER TYPES
// ==========================================

if (fullNameInput) {
  fullNameInput.addEventListener("input", function () {
    gateError?.classList.remove("show");
  });
}

if (ageInput) {
  ageInput.addEventListener("input", function () {
    gateError?.classList.remove("show");
  });
}

// ==========================================
// WHATSAPP WARNING MODAL
// ==========================================

function sendWhatsApp() {
  const warningModal = document.getElementById("whatsappWarning");

  if (!warningModal) {
    console.error("WhatsApp warning modal tidak ditemukan!");
    return;
  }

  warningModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

// ==========================================
// CLOSE WHATSAPP WARNING
// ==========================================

function closeWhatsAppWarning() {
  const warningModal = document.getElementById("whatsappWarning");

  if (!warningModal) return;

  warningModal.classList.remove("show");
  document.body.style.overflow = "auto";
}

// ==========================================
// CONFIRM & OPEN WHATSAPP
// ==========================================

function confirmWhatsApp() {
  const phoneNumber = "6288808975035";

  const message = `Makasih yaa buat hadiah kecil yang kamu kasih. Makasih juga untuk semua doa nya. Aku tunggu kado dari kamu. Aku ga janji tapi aku pasti usahain supaya April 2027 kita bisa ketemuan tanpa halangan. Maaf juga di tanggal 26 September 2026 nanti kita gabisa ketemu biar kamu hemat uang tabungan merit kamu. Sampe ketemu April 2027 yaa. Sekali lagi, makasih banyak yaa !!`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  window.location.href = whatsappURL;
}

// ==========================================
// INITIALIZE INTERACTIVE MEMORIES
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  setupInteractiveMemories();
});

// ==========================================
// SETUP INTERACTIVE MEMORIES
// ==========================================

function setupInteractiveMemories() {
  const galleries = [...document.querySelectorAll(".gallery")];

  const allImages = galleries.flatMap((gallery) => [
    ...gallery.querySelectorAll("img"),
  ]);

  const allVideos = [...document.querySelectorAll(".videos video")];

  if (allImages.length > 0) {
    setupPhotoMemories(galleries, allImages);
  }

  if (allVideos.length > 0) {
    setupVideoMemories(allVideos);
  }
}

// ==========================================
// PHOTO INTERACTION
// ==========================================
// FILTER HAPPY MOMENTS DAN BERDUA TERPISAH
// ==========================================

function setupPhotoMemories(galleries, allImages) {
  const lightboxImages = [...allImages];

  galleries.forEach((gallery, galleryIndex) => {
    let currentFilter = "all";

    // Set favorit terpisah untuk masing-masing gallery
    const likedImages = new Set();

    const tools = document.createElement("div");

    tools.className = "memory-tools";

    tools.innerHTML = `
      <button type="button" data-filter="all" class="active">
        📸 Semua Foto
      </button>

      <button type="button" data-filter="liked">
        💗 Favorit
      </button>

      <span class="memory-counter"></span>
    `;

    gallery.parentNode.insertBefore(tools, gallery);

    const images = [...gallery.querySelectorAll("img")];

    images.forEach((img, index) => {
      const card = document.createElement("div");

      card.className = "memory-card";

      // ID unik hanya untuk gallery ini
      card.dataset.galleryIndex = galleryIndex;
      card.dataset.imageIndex = index;

      img.parentNode.insertBefore(card, img);
      card.appendChild(img);

      // ==========================================
      // FAVORITE BUTTON
      // ==========================================

      const favorite = document.createElement("button");

      favorite.type = "button";
      favorite.className = "memory-favorite";
      favorite.setAttribute("aria-label", "Tambahkan foto ke daftar favorit");

      favorite.textContent = "♡";

      favorite.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (likedImages.has(index)) {
          likedImages.delete(index);

          favorite.classList.remove("active");
          favorite.textContent = "♡";
          card.classList.remove("is-liked");
        } else {
          likedImages.add(index);

          favorite.classList.add("active");
          favorite.textContent = "♥";
          card.classList.add("is-liked");
        }

        // Hanya gallery yang sedang digunakan yang diperbarui
        updateSingleGalleryFilter(gallery, likedImages, currentFilter);
      });

      card.appendChild(favorite);

      // ==========================================
      // IMAGE CLICK / LIGHTBOX
      // ==========================================

      img.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        openInteractiveLightbox(lightboxImages, lightboxImages.indexOf(img));
      });
    });

    // ==========================================
    // FILTER BUTTONS
    // ==========================================

    tools.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        tools.querySelectorAll("[data-filter]").forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");

        // Hanya filter gallery ini
        updateSingleGalleryFilter(gallery, likedImages, currentFilter);
      });
    });

    // Inisialisasi gallery masing-masing
    updateSingleGalleryFilter(gallery, likedImages, "all");
  });

  setupLightboxNavigation(lightboxImages);
}

// ==========================================
// UPDATE FILTER SATU GALLERY SAJA
// ==========================================

function updateSingleGalleryFilter(gallery, likedImages, filter) {
  const cards = [...gallery.querySelectorAll(".memory-card")];

  let visible = 0;

  cards.forEach((card, index) => {
    const matches =
      filter === "all" || (filter === "liked" && likedImages.has(index));

    if (matches) {
      card.style.display = "inline-block";
      card.classList.remove("filtered-out");
      visible++;
    } else {
      card.style.display = "none";
      card.classList.add("filtered-out");
    }
  });

  const tools = gallery.previousElementSibling;
  const counter = tools?.querySelector(".memory-counter");

  if (counter) {
    counter.textContent = `${visible} foto ditampilkan`;
  }

  // Pesan jika tidak ada foto favorit
  let emptyMessage = gallery.parentNode.querySelector(".memory-empty-message");

  if (visible === 0 && filter === "liked") {
    if (!emptyMessage) {
      emptyMessage = document.createElement("p");
      emptyMessage.className = "memory-empty-message";
      emptyMessage.textContent = "Belum ada foto favorit di bagian ini 💗";

      gallery.parentNode.insertBefore(emptyMessage, gallery);
    }

    emptyMessage.style.display = "block";
  } else if (emptyMessage) {
    emptyMessage.style.display = "none";
  }
}

// ==========================================
// LIGHTBOX NAVIGATION
// ==========================================

let lightboxInitialized = false;

function setupLightboxNavigation(allImages) {
  const lightbox = document.getElementById("lightbox");
  const big = document.getElementById("big");

  if (!lightbox || !big || lightboxInitialized) {
    return;
  }

  lightboxInitialized = true;

  const previous = document.createElement("button");

  previous.type = "button";
  previous.className = "lightbox-nav lightbox-prev";
  previous.setAttribute("aria-label", "Foto sebelumnya");
  previous.textContent = "‹";

  const next = document.createElement("button");

  next.type = "button";
  next.className = "lightbox-nav lightbox-next";
  next.setAttribute("aria-label", "Foto berikutnya");
  next.textContent = "›";

  const closeButton = document.createElement("button");

  closeButton.type = "button";
  closeButton.className = "lightbox-close";
  closeButton.setAttribute("aria-label", "Tutup foto");
  closeButton.textContent = "×";

  const caption = document.createElement("div");

  caption.className = "lightbox-caption";

  lightbox.appendChild(previous);
  lightbox.appendChild(next);
  lightbox.appendChild(closeButton);
  lightbox.appendChild(caption);

  let activeIndex = 0;

  function showImage(index) {
    if (!allImages.length) return;

    activeIndex = (index + allImages.length) % allImages.length;

    big.src = allImages[activeIndex].src;

    caption.textContent = `Foto ${activeIndex + 1} dari ${allImages.length}`;

    lightbox.hidden = false;

    document.body.classList.add("lightbox-open");
  }

  previous.addEventListener("click", (event) => {
    event.stopPropagation();

    showImage(activeIndex - 1);
  });

  next.addEventListener("click", (event) => {
    event.stopPropagation();

    showImage(activeIndex + 1);
  });

  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();

    closeLightbox();
  });

  big.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;

    if (event.key === "ArrowLeft") {
      showImage(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      showImage(activeIndex + 1);
    }

    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
  }

  window.openInteractiveLightbox = showImage;
}

// ==========================================
// INTERACTIVE VIDEO MEMORIES
// ==========================================

function setupVideoMemories(allVideos) {
  const videoGroups = [...document.querySelectorAll(".videos")];

  if (!videoGroups.length) return;

  const videoTools = document.createElement("div");

  videoTools.className = "video-tools";

  videoTools.innerHTML = `
    <button type="button" id="pauseAllVideos">
      ⏸️ Pause Semua
    </button>

    <button type="button" id="restartVideos">
      🔁 Ulangi Semua
    </button>

    <button type="button" id="muteAllVideos">
      🔊 Suara
    </button>

    <span class="video-status">
      Pilih video yang ingin kamu tonton 💗
    </span>
  `;

  const videoSection = document.getElementById("video");

  if (videoSection) {
    const firstVideoGroup = videoSection.querySelector(".videos");

    if (firstVideoGroup) {
      firstVideoGroup.parentNode.insertBefore(videoTools, firstVideoGroup);
    }
  }

  const statusText = videoTools.querySelector(".video-status");

  allVideos.forEach((video, index) => {
    video.classList.add("video-card");
    video.setAttribute("preload", "metadata");

    video.addEventListener("play", () => {
      allVideos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }

        otherVideo.classList.remove("is-selected");
      });

      video.classList.add("is-selected");

      statusText.textContent = `Sedang diputar: Video ${index + 1} 🎬`;
    });

    video.addEventListener("pause", () => {
      if (!video.ended) {
        video.classList.remove("is-selected");

        statusText.textContent = `Video ${index + 1} dijeda ⏸️`;
      }
    });

    video.addEventListener("ended", () => {
      video.classList.remove("is-selected");

      statusText.textContent = `Video ${index + 1} selesai ditonton 💗`;
    });

    video.addEventListener("error", () => {
      video.classList.add("video-error");

      statusText.textContent = `Video ${
        index + 1
      } tidak dapat diputar. Periksa format atau file videonya.`;
    });

    const wrapper = document.createElement("div");

    wrapper.className = "video-wrapper";

    video.parentNode.insertBefore(wrapper, video);

    wrapper.appendChild(video);

    const label = document.createElement("span");

    label.className = "video-number";
    label.textContent = `Video ${index + 1}`;

    wrapper.appendChild(label);
  });

  // ==========================================
  // PAUSE ALL VIDEOS
  // ==========================================

  const pauseAllButton = videoTools.querySelector("#pauseAllVideos");

  pauseAllButton?.addEventListener("click", () => {
    allVideos.forEach((video) => {
      video.pause();
      video.classList.remove("is-selected");
    });

    statusText.textContent =
      "Semua video dijeda. Mau lanjut nonton yang mana? 🎀";
  });

  // ==========================================
  // RESTART ALL VIDEOS
  // ==========================================

  const restartButton = videoTools.querySelector("#restartVideos");

  restartButton?.addEventListener("click", () => {
    allVideos.forEach((video) => {
      video.currentTime = 0;
      video.pause();
      video.classList.remove("is-selected");
    });

    statusText.textContent = "Semua video dikembalikan ke awal 🔁";
  });

  // ==========================================
  // MUTE / UNMUTE ALL VIDEOS
  // ==========================================

  const muteButton = videoTools.querySelector("#muteAllVideos");

  let isMuted = false;

  muteButton?.addEventListener("click", () => {
    isMuted = !isMuted;

    allVideos.forEach((video) => {
      video.muted = isMuted;
    });

    muteButton.textContent = isMuted ? "🔇 Suara Mati" : "🔊 Suara";

    statusText.textContent = isMuted
      ? "Semua video dibuat tanpa suara 🔇"
      : "Suara video diaktifkan 🔊";
  });
}

// ==========================================
// CREATE HEART EFFECT
// ==========================================

function makeHeart() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";

  heart.textContent = ["💗", "💖", "💕", "💘", "🌸"][
    Math.floor(Math.random() * 5)
  ];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// ==========================================
// ESC KEY FOR MODALS
// ==========================================

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  const birthdayModal = document.getElementById("birthdayModal");
  const whatsappWarning = document.getElementById("whatsappWarning");

  if (birthdayModal && birthdayModal.classList.contains("show")) {
    closeBirthdayModal();
  }

  if (whatsappWarning && whatsappWarning.classList.contains("show")) {
    closeWhatsAppWarning();
  }
});
// ==========================================
// BIRTHDAY COUNTDOWN
// TARGET: 24 SEPTEMBER 2026 - 00:00 WIB
// ==========================================

/* =========================================================
   BIRTHDAY COUNTDOWN
========================================================= */

function initializeBirthdayCountdown() {
  const countdownScreen = document.getElementById("countdownScreen");

  const birthdayFormCard = document.getElementById("birthdayFormCard");

  const birthdayGate = document.getElementById("birthdayGate");

  const app = document.getElementById("app");

  const welcome = document.getElementById("welcome");

  const daysElement = document.getElementById("countdownDays");

  const hoursElement = document.getElementById("countdownHours");

  const minutesElement = document.getElementById("countdownMinutes");

  const secondsElement = document.getElementById("countdownSeconds");

  if (
    !countdownScreen ||
    !birthdayFormCard ||
    !birthdayGate ||
    !app ||
    !welcome ||
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
  ) {
    console.error("Elemen countdown tidak ditemukan.");

    return;
  }

  /*
       24 September 2026 pukul 00.00 WIB
       WIB = UTC+7
       UTC = 23 September 2026 pukul 17.00
    */
  const targetDate = new Date("2026-09-23T17:00:00.000Z").getTime();

  let countdownInterval = null;

  function showCountdown() {
    countdownScreen.hidden = false;
    birthdayFormCard.hidden = true;

    welcome.hidden = false;
    app.hidden = true;
  }

  function showBirthdayForm() {
    countdownScreen.hidden = true;
    birthdayFormCard.hidden = false;

    welcome.hidden = false;
    app.hidden = true;
  }

  function updateCountdown() {
    const currentTime = Date.now();

    const difference = targetDate - currentTime;

    if (difference <= 0) {
      showBirthdayForm();

      if (countdownInterval !== null) {
        clearInterval(countdownInterval);
        countdownInterval = null;
      }

      return;
    }

    showCountdown();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    const seconds = Math.floor((difference / 1000) % 60);

    daysElement.textContent = String(days).padStart(2, "0");

    hoursElement.textContent = String(hours).padStart(2, "0");

    minutesElement.textContent = String(minutes).padStart(2, "0");

    secondsElement.textContent = String(seconds).padStart(2, "0");
  }

  // Jalankan langsung saat halaman dibuka
  updateCountdown();

  // Jalankan setiap detik
  countdownInterval = setInterval(updateCountdown, 1000);
}

/* Jalankan setelah seluruh HTML selesai dimuat */
document.addEventListener("DOMContentLoaded", function () {
  initializeBirthdayCountdown();
});
