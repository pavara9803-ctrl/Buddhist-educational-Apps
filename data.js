// බෞද්ධ අධ්‍යාපනික Apps දත්ත
const appsData = [
  {
    id: 1,
    title: "මාතිකා (Matika)",
    category: "අභිධර්මය",
    platform: "Android / Web",
    badgeType: "tag-gold",
    description: "අභිධර්ම මාතිකා සහ ධම්මසංගණී විග්‍රහයන් අධ්‍යයනයට නිර්මාණය කළ සුවිශේෂී මෘදුකාංගය.",
    apkUrl: "https://github.com/pavara9803-ctrl/Matika/releases/latest/download/Matika.apk",
    webUrl: "https://pavara9803-ctrl.github.io/Matika/"
  },
  {
    id: 2,
    title: "රූපසිද්ධි (Rupasiddhi)",
    category: "පාලි ව්‍යාකරණ",
    platform: "Android / Web",
    badgeType: "tag-blue",
    description: "පදරුපසිද්ධි ග්‍රන්ථය ඇසුරින් පාලි නාම හා ආඛ්‍යාත පද සාධනයන් හදාරන මෘදුකාංගය.",
    apkUrl: "https://github.com/pavara9803-ctrl/Rupasiddhi/releases/latest/download/Rupasiddhi.apk",
    webUrl: "https://pavara9803-ctrl.github.io/Rupasiddhi/"
  }
];

// PDF පොත් නාමාවලිය දත්ත
const booksData = [

  {
    id: 1,
    title: "අභිධර්ම මාතිකා අධ්‍යන ප්‍රවේශය - කඩුවෙල අතුලඤාණ හිමි 2023",
    category: "අභිධර්ම",
    downloads: 0,
    size: "4.3 MB",
    pdfUrl: "https://pavara9803-ctrl.github.io/Buddhist-educational-Apps/pdfs/Abhidhamma-Matika.pdf"
  }
];

// වෙබ් පිටුවේ අයිතම පෙන්වීම (Render DOM)
function renderContent() {
  renderApps(appsData);
  renderBooks(booksData);
}

// Apps Render කිරීම
function renderApps(apps) {
  const container = document.getElementById("appsContainer");
  if (!container) return;

  container.innerHTML = apps.map(app => `
    <div class="app-box">
      <div class="app-header">
        <h3 class="app-title">${app.title}</h3>
        <span class="tag ${app.badgeType}">${app.category}</span>
      </div>
      <p class="app-desc">${app.description}</p>
      <div class="app-actions">
        <a href="${app.apkUrl}" download class="btn-apk">
          <span>📥</span> APK බාගත කරන්න
        </a>
        <a href="${app.webUrl}" target="_blank" rel="noopener noreferrer" class="btn-web">
          Online භාවිතය ↗
        </a>
      </div>
    </div>
  `).join("");
}

// Books Table Render කිරීම
function renderBooks(books) {
  const container = document.getElementById("pdfFileList");
  if (!container) return;

  if (books.length === 0) {
    container.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted);">සොයන ලද පොත හමු නොවීය.</div>`;
    return;
  }

  container.innerHTML = books.map(book => `
    <a href="${book.pdfUrl}" class="table-row" download target="_blank" rel="noopener noreferrer">
      <div class="file-col-title">
        <span class="pdf-badge">PDF</span>
        <span class="file-text">${book.title}</span>
      </div>
      <span class="file-col-cat">${book.category}</span>
      <span class="file-col-count">${book.downloads}</span>
      <span class="file-col-size">${book.size}</span>
    </a>
  `).join("");
}

// සජීවී සෙවුම් පද්ධතිය (Live Search)
function filterItems() {
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
}

// පිටුව Load වූ පසු ආරම්භ කිරීම
document.addEventListener("DOMContentLoaded", renderContent);