// ==========================================
// Firebase SDK Dynamic Loader
// ==========================================
(function loadFirebase(callback) {
  // දැනටමත් load වී ඇත්නම්
  if (typeof firebase !== 'undefined') {
    callback();
    return;
  }
  
  const appScript = document.createElement('script');
  appScript.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js';
  appScript.onload = function() {
    const dbScript = document.createElement('script');
    dbScript.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js';
    dbScript.onload = callback;
    document.head.appendChild(dbScript);
  };
  document.head.appendChild(appScript);
})(function() {
  // ==========================================
  // Firebase Configuration
  // ==========================================
  const firebaseConfig = {
    apiKey: "AIzaSyDEjIe7xsjQCqcPp2dHpWZufZ-SIM9BXCo",
    authDomain: "buddhist-apps.firebaseapp.com",
    databaseURL: "https://buddhist-apps-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "buddhist-apps",
    storageBucket: "buddhist-apps.firebasestorage.app",
    messagingSenderId: "59827119271",
    appId: "1:59827119271:web:522edb63f4bed3191de782"
  };

  // Firebase initialize කරන්න
  let db = null;
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    console.log("✅ Firebase initialized successfully");
  } catch (e) {
    console.error("❌ Firebase initialization error:", e);
  }

  // ==========================================
  // බෞද්ධ අධ්‍යාපනික Apps දත්ත
  // ==========================================
  const appsData = [
    {
      id: 1,
      title: "අභිධර්ම මාතිකා (Matika)",
      category: "අභිධර්මය",
      platform: "Android / Web",
      badgeType: "tag-gold",
      description: "අභිධර්ම මාතිකා සහ ධම්මසංගණී විග්‍රහයන් අධ්‍යයනයට නිර්මාණය කළ සුවිශේෂී මෘදුකාංගය.",
      apkUrl: "https://play.google.com/store/apps/details?id=app.vercel.matika_snowy.twa",
      webUrl: "https://pavara9803-ctrl.github.io/Matika/",
      screenshots: [
        "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/screenshots/matika-1.webp",
        "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/screenshots/matika-2.webp",
        "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/screenshots/matika-3.webp",
        "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/screenshots/matika-4.webp",
        "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/screenshots/matika-5.webp"
      ]
    },
    {
      id: 2,
      title: "රූපසිද්ධි (Rupasiddhi)",
      category: "පාලි ව්‍යාකරණ",
      platform: "Android / Web",
      badgeType: "tag-blue",
      description: "පදරුපසිද්ධි ග්‍රන්ථය ඇසුරින් පාලි නාම හා ආඛ්‍යාත පද සාධනයන් හදාරන මෘදුකාංගය.",
      apkUrl: "https://github.com/pavara9803-ctrl/Rupasiddhi/releases/latest/download/Rupasiddhi.apk",
      webUrl: "https://pavara9803-ctrl.github.io/Rupasiddhi/",
      screenshots: [
        "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/screenshots/rupasiddhi-1.webp",
        "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/screenshots/rupasiddhi-2.webp",
        "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/screenshots/rupasiddhi-3.webp",
        "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/screenshots/rupasiddhi-4.webp"
      ]
    }
  ];

  // ==========================================
  // PDF පොත් නාමාවලිය දත්ත
  // ==========================================
  const booksData = [
    {
      id: 1,
      title: "අභිධර්ම මාතිකා අධ්‍යන ප්‍රවේශය - කඩුවෙල අතුලඤාණ හිමි 2023",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "4.3 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/Abhidhamma-Matika.pdf",
      countKey: "abhidhamma-matika"
    },
    {
      id: 2,
      title: "අභිධර්ම චිත්තවීථි විනිශ්චය - කඩුවෙල අතුලඤාණ හිමි",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "5.7 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/Abhidhamma-cittaveeti.pdf",
      countKey: "abhidhamma-cittaveeti"
    },
    {
      id: 3,
      title: "ධාතුකථා ප්‍රකරණ අධ්‍යයන ප්‍රවේශය - කඩුවෙල අතුලඤාණ හිමි 2023",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "5.9 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/Abhidhamma-dhatukata.pdf",
      countKey: "abhidhamma-dhatukata"
    },
    {
      id: 4,
      title: "පට්ඨාන ත්‍රි රාශිය - නාඋයනේ අරියධම්ම හිමි, කඩුවෙල අතුලඤාණ හිමි 2022",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "3.3 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/Abhidhamma-pattana3.pdf",
      countKey: "abhidhamma-pattana3"
    },
    {
      id: 5,
      title: "පට්ඨාන ප්‍රකරණ අධ්‍යයන ප්‍රවේශය - කඩුවෙල අතුලඤාණ හිමි 2024",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "12 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/Abhidhamma-pattanaA.pdf",
      countKey: "abhidhamma-pattanaA"
    },
    {
      id: 6,
      title: "පට්ඨාන ප්‍රකරණ අධ්‍යයන ප්‍රවේශය, ශුද්ධ සංඛ්‍යා සහ ස්වරූපාරූඪ - කඩුවෙල අතුලඤාණ හිමි 2023",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "1.4 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/Abhidhamma-pattanaS.pdf",
      countKey: "abhidhamma-pattanaS"
    },
    {
      id: 7,
      title: "පට්ඨාන මහාපකරණ සන්නය 2 - කඩුවෙල අතුලඤාණ හිමි 2023",
      category: "අභිධර්ම",
      folder: "අභිධර්ම",
      downloads: 0,
      size: "4.3 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/Abhidhamma-pattanaMPS.pdf",
      countKey: "abhidhamma-pattanaMPS"
    },
    {
      id: 8,
      title: "සමුට්ඨානසීස",
      category: "විනය",
      folder: "විනය",
      downloads: 0,
      size: "2 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/vinaya/Samutthanaseesa.pdf",
      countKey: "vinaya-samutthanaseesa"
    },
    {
      id: 9,
      title: "සප්තදසකාරය",
      category: "විනය",
      folder: "විනය",
      downloads: 0,
      size: "2 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/vinaya/Sapthadasakaraya.pdf",
      countKey: "vinaya-sapthadasakaraya"
    },
    {
      id: 10,
      title: "සීමා",
      category: "විනය",
      folder: "විනය",
      downloads: 0,
      size: "2 MB",
      pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/vinaya/Seema.pdf",
      countKey: "vinaya-seema"
    }
  ];

  // ==========================================
  // Render Functions
  // ==========================================
  window.renderContent = function() {
    renderApps(appsData);
    renderBooks(booksData);
    loadAllDownloadCounts();
  };

  // Apps Render කිරීම
  function renderApps(apps) {
    const container = document.getElementById("appsContainer");
    if (!container) return;

    container.innerHTML = apps.map(app => {
      const screenshotsHTML = app.screenshots && app.screenshots.length > 0 ? `
        <div class="app-screenshots">
          <div class="screenshots-scroll">
            ${app.screenshots.map((img, index) => `
              <img src="${img}" 
                   alt="${app.title} - Screenshot ${index + 1}" 
                   class="screenshot-img"
                   width="220"
                   height="180"
                   loading="lazy"
                   onclick="openLightbox('${img}', '${app.title}')">
            `).join("")}
          </div>
        </div>
      ` : "";

      return `
        <div class="app-box">
          <div class="app-header">
            <h3 class="app-title">${app.title}</h3>
            <span class="tag ${app.badgeType}">${app.category}</span>
          </div>
          <p class="app-desc">${app.description}</p>
          ${screenshotsHTML}
          <div class="app-actions">
            <a href="${app.apkUrl}" download class="btn-apk">
              <span>📥</span> APK බාගත කරන්න
            </a>
            <a href="${app.webUrl}" target="_blank" rel="noopener noreferrer" class="btn-web">
              Online භාවිතය ↗
            </a>
          </div>
        </div>
      `;
    }).join("");
  }

  // Books Table Render කිරීම
  function renderBooks(books) {
    const container = document.getElementById("pdfFileList");
    if (!container) return;

    if (books.length === 0) {
      container.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted);">සොයන ලද පොත හමු නොවීය.</div>`;
      return;
    }

    const grouped = {};
    books.forEach(book => {
      const folder = book.folder || "වෙනත්";
      if (!grouped[folder]) grouped[folder] = [];
      grouped[folder].push(book);
    });

    container.innerHTML = Object.keys(grouped).map(folderName => `
      <div class="folder-group">
        <div class="folder-header" onclick="toggleFolder(this)">
          <span class="folder-arrow">▶</span>
          <span class="folder-icon">📁</span>
          <span class="folder-name">${folderName}</span>
          <span class="folder-count">(${grouped[folderName].length} පොත්)</span>
        </div>
        <div class="folder-books">
          ${grouped[folderName].map(book => `
            <a href="${book.pdfUrl}" 
               class="table-row" 
               onclick="handleDownload('${book.countKey}')"
               download 
               target="_blank" 
               rel="noopener noreferrer">
              <div class="file-col-title">
                <span class="pdf-badge">PDF</span>
                <span class="file-text">${book.title}</span>
              </div>
              <span class="file-col-cat">${book.category}</span>
              <span class="file-col-count" id="count-${book.countKey}">${book.downloads}</span>
              <span class="file-col-size">${book.size}</span>
            </a>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  // ෆෝල්ඩරය විවෘත/වසා දැමීම
  window.toggleFolder = function(headerElement) {
    const folderGroup = headerElement.parentElement;
    const folderBooks = folderGroup.querySelector(".folder-books");
    const arrow = headerElement.querySelector(".folder-arrow");

    const isOpen = folderGroup.classList.contains("open");

    if (isOpen) {
      folderGroup.classList.remove("open");
      folderBooks.style.display = "none";
      arrow.textContent = "▶";
    } else {
      folderGroup.classList.add("open");
      folderBooks.style.display = "block";
      arrow.textContent = "▼";
    }
  };

  // Lightbox
  window.openLightbox = function(imageSrc, title) {
    const existing = document.getElementById("lightbox");
    if (existing) existing.remove();

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
      <img src="${imageSrc}" alt="${title}" class="lightbox-img">
      <p class="lightbox-caption">${title}</p>
    `;
    lightbox.onclick = function(e) {
      if (e.target === lightbox) closeLightbox();
    };
    document.body.appendChild(lightbox);

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") closeLightbox();
    });
  };

  window.closeLightbox = function() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) lightbox.remove();
  };

  // Firebase Download Count Functions
  function loadAllDownloadCounts() {
    if (!db) {
      console.warn("⚠️ Firebase not initialized");
      return;
    }
    booksData.forEach(book => {
      if (book.countKey) {
        getDownloadCount(book.countKey);
      }
    });
  }

  function getDownloadCount(countKey) {
    db.ref('downloads/' + countKey).once('value')
      .then(snapshot => {
        const count = snapshot.val() || 0;
        updateCountDisplay(countKey, count);
      })
      .catch(error => {
        console.error('Error reading count:', error);
        updateCountDisplay(countKey, 0);
      });
  }

  function incrementDownloadCount(countKey) {
    if (!db || !countKey) return;
    
    const ref = db.ref('downloads/' + countKey);
    ref.transaction(current => {
      return (current || 0) + 1;
    }).then(result => {
      if (result.committed) {
        updateCountDisplay(countKey, result.snapshot.val());
      }
    }).catch(error => {
      console.error('Error incrementing count:', error);
    });
  }

  function updateCountDisplay(countKey, value) {
    const element = document.getElementById(`count-${countKey}`);
    if (element) {
      element.textContent = value;
    }
  }

  window.handleDownload = function(countKey) {
    if (countKey) {
      incrementDownloadCount(countKey);
    }
  };

  // Live Search
  window.filterItems = function() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();

    const filteredBooks = booksData.filter(book => 
      book.title.toLowerCase().includes(query) || 
      book.category.toLowerCase().includes(query)
    );

    const filteredApps = appsData.filter(app => 
      app.title.toLowerCase().includes(query) || 
      app.category.toLowerCase().includes(query) ||
      app.description.toLowerCase().includes(query)
    );

    renderBooks(filteredBooks);
    renderApps(filteredApps);
  };

  // පිටුව Load වූ පසු ආරම්භ කිරීම
  if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", renderContent);
  } else {
    renderContent();
  }
});