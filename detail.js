document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const cultureId = urlParams.get('id');
  const contentMain = document.getElementById('detail-content');

  if (!cultureId) {
    window.location.href = 'index.html';
    return;
  }

  try {
    const response = await fetch('budaya-indonesia.json');
    if (!response.ok) throw new Error('Data tidak ditemukan');
    const data = await response.json();

    const cultureItem = findCultureById(data.provinces, cultureId);
    if (!cultureItem) {
      alert('Budaya tidak ditemukan');
      window.location.href = 'index.html';
      return;
    }

    const province = findProvinceByCultureId(data.provinces, cultureId);
    const category = data.categories.find(c => c.id === cultureItem.category);

    renderDetail(cultureItem, province, category);
    renderRelated(data.provinces, cultureItem, province, category);

    // Show content with animation
    contentMain.classList.remove('opacity-0');
    contentMain.classList.add('opacity-100');

  } catch (error) {
    console.error('Error loading detail:', error);
    alert('Gagal memuat data budaya.');
  }
});

function findCultureById(provinces, id) {
  for (const province of provinces) {
    for (const catId in province.categories) {
      const item = province.categories[catId].items.find(i => i.id === id);
      if (item) return item;
    }
  }
  return null;
}

function findProvinceByCultureId(provinces, id) {
  for (const province of provinces) {
    for (const catId in province.categories) {
      if (province.categories[catId].items.some(i => i.id === id)) {
        return province;
      }
    }
  }
  return null;
}

function renderDetail(item, province, category) {
  // Breadcrumbs
  document.getElementById('breadcrumb-province').textContent = province.name;
  document.getElementById('breadcrumb-category').textContent = category.label;
  document.getElementById('breadcrumb-name').textContent = item.name;

  // Hero
  const heroImg = document.getElementById('hero-image');
  heroImg.src = item.image || 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=' + encodeURIComponent(item.name + ' culture heritage Indonesia cinematic') + '&image_size=landscape_16_9';
  heroImg.alt = item.name;
  
  document.getElementById('detail-title').textContent = item.name;
  document.getElementById('detail-category-badge').textContent = category.label;
  document.getElementById('detail-origin').textContent = item.origin || province.name;
  
  const statusBadge = document.getElementById('detail-status-badge');
  const isVerified = item.verification_status === 'terverifikasi';
  statusBadge.textContent = isVerified ? 'Terverifikasi' : 'Proses Verifikasi';
  statusBadge.className = `px-4 py-1.5 rounded-full backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border ${isVerified ? 'bg-green-600/40 border-green-400/50' : 'bg-white/20 border-white/20'}`;

  // Content
  document.getElementById('detail-description').textContent = item.description || 'Deskripsi lengkap untuk budaya ini sedang dalam tahap kurasi oleh tim ahli kami.';
  
  // History & Philosophy (Fallback logic)
  if (item.history) {
    document.getElementById('detail-history').textContent = item.history;
  }
  if (item.philosophy) {
    document.getElementById('detail-philosophy').textContent = item.philosophy;
  }

  // Sidebar
  document.getElementById('side-name').textContent = item.name;
  document.getElementById('side-origin').textContent = item.origin || province.name;
  document.getElementById('side-category').textContent = category.label;
  
  const vIcon = document.getElementById('side-verification-icon');
  const vText = document.getElementById('side-verification-text');
  if (isVerified) {
    vIcon.textContent = 'verified';
    vIcon.className = 'material-symbols-outlined text-[18px] text-green-600';
    vText.textContent = 'Data Terverifikasi';
  } else {
    vIcon.textContent = 'pending';
    vIcon.className = 'material-symbols-outlined text-[18px] text-orange-500';
    vText.textContent = 'Menunggu Verifikasi';
  }

  // Page Title
  document.title = `${item.name} - NUSANTARA`;
}

function renderRelated(provinces, currentItem, currentProvince, currentCategory) {
  const container = document.getElementById('related-cards');
  let related = [];

  // Get other items from same province and category first
  const sameProvCat = currentProvince.categories[currentCategory.id].items
    .filter(i => i.id !== currentItem.id);
  related.push(...sameProvCat);

  // If not enough, get from same province other categories
  if (related.length < 3) {
    for (const catId in currentProvince.categories) {
      if (catId === currentCategory.id) continue;
      related.push(...currentProvince.categories[catId].items);
    }
  }

  // Take top 3
  related = related.slice(0, 3);

  container.innerHTML = related.map(item => `
    <div class="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-primary/5 group">
      <div class="relative w-full h-48 overflow-hidden">
        <img alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
             src="${item.image || 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=' + encodeURIComponent(item.name + ' Indonesia culture') + '&image_size=square'}">
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-primary backdrop-blur-sm uppercase tracking-wider">${currentCategory.label}</span>
        </div>
      </div>
      <div class="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 class="font-serif text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">${item.name}</h3>
          <p class="text-xs text-on-surface-variant line-clamp-2 mb-4">${item.description}</p>
        </div>
        <a href="detail.html?id=${item.id}" class="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-secondary transition-colors">
          <span>Pelajari Detail</span>
          <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
    </div>
  `).join('');
}
