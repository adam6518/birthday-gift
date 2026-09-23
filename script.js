let score = 0;
let luckyBox = Math.floor(Math.random() * 3);
let isMusicPlaying = false;
let lightboxInitialized = false;

/* ==========================================
   START ADVENTURE
========================================== */

function start() {
  const welcome = document.getElementById("welcome");
  const app = document.getElementById("app");

  if (welcome) {
    welcome.hidden = true;
  }

  if (app) {
    app.hidden = false;
  }

  spawnStars();
}

/* ==========================================
   MINI GAME - COLLECT STARS
========================================== */

function spawnStars() {
  const starZone = document.getElementById("stars");

  if (!starZone || starZone.children.length > 0) {
    return;
  }

  for (let i = 0; i < 12; i++) {
    const star = document.createElement("button");

    star.type = "button";
    star.className = "star";
    star.textContent = ["✨", "🌸", "💖", "⭐"][i % 4];

    star.style.left = Math.random() * 90 + "%";
    star.style.top = Math.random() * 85 + "%";

    star.addEventListener("click", function () {
      if (star.disabled) {
        return;
      }

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

/* ==========================================
   UNLOCK MEMORIES
========================================== */

function unlock() {
  const memoriesSection = document.getElementById("memories");

  if (!memoriesSection) {
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

/* ==========================================
   VIDEO SECTION
========================================== */

function videos() {
  const videoSection = document.getElementById("video");

  if (!videoSection) {
    return;
  }

  videoSection.hidden = false;

  videoSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/* ==========================================
   MYSTERY BOX SECTION
========================================== */

function mystery() {
  const mysterySection = document.getElementById("mystery");

  if (!mysterySection) {
    return;
  }

  mysterySection.hidden = false;

  mysterySection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/* ==========================================
   RANDOM MYSTERY BOX
========================================== */

function box(index) {
  const result = document.getElementById("result");

  if (!result) {
    return;
  }

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

/* ==========================================
   BASIC LIGHTBOX
========================================== */

function light(src) {
  const lightbox = document.getElementById("lightbox");
  const big = document.getElementById("big");

  if (!lightbox || !big) {
    return;
  }

  big.src = src;
  lightbox.hidden = false;

  document.body.classList.add("lightbox-open");
}

/* ==========================================
   BIRTHDAY CELEBRATION
========================================== */

function celebrate() {
  const modal = document.getElementById("birthdayModal");

  if (!modal) {
    return;
  }

  modal.classList.add("show");
  document.body.style.overflow = "hidden";

  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      makeHeart();
    }, i * 70);
  }
}

/* ==========================================
   CLOSE BIRTHDAY MODAL
========================================== */

function closeBirthdayModal() {
  const modal = document.getElementById("birthdayModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

/* ==========================================
   BACKGROUND MUSIC
========================================== */

function music() {
  const audio = document.getElementById("birthdayMusic");
  const musicButton = document.querySelector("nav button");

  if (!audio || !musicButton) {
    return;
  }

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

/* ==========================================
   BIRTHDAY VERIFICATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const birthdayForm = document.getElementById("birthdayForm");
  const birthdayGate = document.getElementById("birthdayGate");
  const fullNameInput = document.getElementById("fullName");
  const ageInput = document.getElementById("age");
  const gateError = document.getElementById("gateError");
  const gateErrorText = document.getElementById("gateErrorText");

  if (!birthdayForm) {
    return;
  }

  birthdayForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredName = fullNameInput
      ? fullNameInput.value.trim().toLowerCase()
      : "";

    const enteredAge = ageInput ? ageInput.value.trim() : "";

    if (enteredName !== "risha nur kharisma" || enteredAge !== "23") {
      showGateError(gateError, gateErrorText);
      return;
    }

    if (birthdayGate) {
      birthdayGate.classList.add("gate-hidden");
    }

    document.body.style.overflow = "auto";
  });

  if (fullNameInput) {
    fullNameInput.addEventListener("input", () => {
      if (gateError) {
        gateError.classList.remove("show");
        gateError.hidden = true;
      }
    });
  }

  if (ageInput) {
    ageInput.addEventListener("input", () => {
      if (gateError) {
        gateError.classList.remove("show");
        gateError.hidden = true;
      }
    });
  }
});

/* ==========================================
   SHOW FORM ERROR
========================================== */

function showGateError(gateError, gateErrorText) {
  if (!gateError || !gateErrorText) {
    return;
  }

  gateErrorText.textContent =
    "Kan Udah Aku Bilang Isi Yang Jujur. Kalo Masih Bohong Kita Gak Akan Lanjut Loh";

  gateError.hidden = false;
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

/* ==========================================
   WHATSAPP WARNING MODAL
========================================== */

function sendWhatsApp() {
  const warningModal = document.getElementById("whatsappWarning");

  if (!warningModal) {
    return;
  }

  warningModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeWhatsAppWarning() {
  const warningModal = document.getElementById("whatsappWarning");

  if (!warningModal) {
    return;
  }

  warningModal.classList.remove("show");
  document.body.style.overflow = "auto";
}

function confirmWhatsApp() {
  const phoneNumber = "6288808975035";

  const message =
    "Makasih yaa buat hadiah kecil yang kamu kasih. Makasih juga untuk semua doa nya. Aku tunggu kado dari kamu. Aku ga janji tapi aku pasti usahain supaya April 2027 kita bisa ketemuan tanpa halangan. Maaf juga di tanggal 26 September 2026 nanti kita gabisa ketemu biar kamu hemat uang tabungan merit kamu. Sampe ketemu April 2027 yaa. Sekali lagi, makasih banyak yaa !!";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappURL;
}

/* ==========================================
   INTERACTIVE MEMORIES
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  setupInteractiveMemories();
});

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

/* ==========================================
   PHOTO INTERACTION
========================================== */

function setupPhotoMemories(galleries, allImages) {
  const lightboxImages = [...allImages];

  galleries.forEach((gallery, galleryIndex) => {
    let currentFilter = "all";
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
      card.dataset.galleryIndex = galleryIndex;
      card.dataset.imageIndex = index;

      img.parentNode.insertBefore(card, img);
      card.appendChild(img);

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

        updateSingleGalleryFilter(gallery, likedImages, currentFilter);
      });

      card.appendChild(favorite);

      img.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (typeof window.openInteractiveLightbox === "function") {
          window.openInteractiveLightbox(
            lightboxImages,
            lightboxImages.indexOf(img),
          );
        }
      });
    });

    tools.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        tools.querySelectorAll("[data-filter]").forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");

        updateSingleGalleryFilter(gallery, likedImages, currentFilter);
      });
    });

    updateSingleGalleryFilter(gallery, likedImages, "all");
  });

  setupLightboxNavigation(lightboxImages);
}

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
  const counter = tools ? tools.querySelector(".memory-counter") : null;

  if (counter) {
    counter.textContent = `${visible} foto ditampilkan`;
  }

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

/* ==========================================
   LIGHTBOX NAVIGATION
========================================== */

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
    if (!allImages.length) {
      return;
    }

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
    if (lightbox.hidden) {
      return;
    }

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

/* ==========================================
   VIDEO MEMORIES
========================================== */

function setupVideoMemories(allVideos) {
  const videoGroups = [...document.querySelectorAll(".videos")];

  if (!videoGroups.length) {
    return;
  }

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
  const firstVideoGroup = videoSection
    ? videoSection.querySelector(".videos")
    : null;

  if (firstVideoGroup) {
    firstVideoGroup.parentNode.insertBefore(videoTools, firstVideoGroup);
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

      statusText.textContent = `Video ${index + 1} tidak dapat diputar.`;
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

  const pauseAllButton = videoTools.querySelector("#pauseAllVideos");

  pauseAllButton?.addEventListener("click", () => {
    allVideos.forEach((video) => {
      video.pause();
      video.classList.remove("is-selected");
    });

    statusText.textContent =
      "Semua video dijeda. Mau lanjut nonton yang mana? 🎀";
  });

  const restartButton = videoTools.querySelector("#restartVideos");

  restartButton?.addEventListener("click", () => {
    allVideos.forEach((video) => {
      video.currentTime = 0;
      video.pause();
      video.classList.remove("is-selected");
    });

    statusText.textContent = "Semua video dikembalikan ke awal 🔁";
  });

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

/* ==========================================
   FLOATING HEART EFFECT
========================================== */

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

/* ==========================================
   ESC KEY FOR MODALS
========================================== */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  const birthdayModal = document.getElementById("birthdayModal");

  const whatsappWarning = document.getElementById("whatsappWarning");

  if (birthdayModal && birthdayModal.classList.contains("show")) {
    closeBirthdayModal();
  }

  if (whatsappWarning && whatsappWarning.classList.contains("show")) {
    closeWhatsAppWarning();
  }
});
