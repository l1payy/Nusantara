const provinceData = [
  { id: 'papua-selatan', name:'Papua Selatan', slug:'papua-selatan', count: 0, zona:'Zona Adat Papua & Melanesia' },
  { id: 'papua-tengah', name:'Papua Tengah', slug:'papua-tengah', count: 0, zona:'Zona Adat Papua & Melanesia' },
  { id: 'papua-barat-daya', name:'Papua Barat Daya', slug:'papua-barat-daya', count: 0, zona:'Zona Adat Papua & Melanesia' },
  { id: 'papua-barat', name:'Papua Barat', slug:'papua-barat', count: 0, zona:'Zona Adat Papua & Melanesia' },
  { id: 'maluku', name:'Maluku', slug:'maluku', count: 0, zona:'Zona Adat Maluku & Sulteng' },
  { id: 'maluku-utara', name:'Maluku Utara', slug:'maluku-utara', count: 0, zona:'Zona Adat Maluku & Sulteng' },
  { id: 'kalimantan-utara', name:'Kalimantan Utara', slug:'kalimantan-utara', count: 0, zona:'Zona Adat Dayak & Kalimantan' },
  { id: 'kepulauan-riau', name:'Kepulauan Riau', slug:'kepulauan-riau', count: 0, zona:'Zona Adat Melayu & Riau' },
  { id: 'gorontalo', name:'Gorontalo', slug:'gorontalo', count: 0, zona:'Zona Adat Gorontalo' },
  { id: 'papua-pegunungan', name:'Papua Pegunungan', slug:'papua-pegunungan', count: 0, zona:'Zona Adat Papua & Melanesia' },
  { id: 'papua', name:'Papua', slug:'papua', count: 0, zona:'Zona Adat Papua & Melanesia' },
  { id: 'sumatera-utara', name:'Sumatera Utara', slug:'sumatera-utara', count: 0, zona:'Zona Adat Melayu & Batak' },
  { id: 'riau', name:'Riau', slug:'riau', count: 0, zona:'Zona Adat Melayu & Riau' },
  { id: 'jambi', name:'Jambi', slug:'jambi', count: 0, zona:'Zona Adat Melayu & Jambi' },
  { id: 'sumatera-selatan', name:'Sumatera Selatan', slug:'sumatera-selatan', count: 0, zona:'Zona Adat Melayu & Palembang' },
  { id: 'jawa-timur', name:'Jawa Timur', slug:'jawa-timur', count: 0, zona:'Zona Adat Jawa Timur & Madura' },
  { id: 'nusa-tenggara-barat', name:'Nusa Tenggara Barat', slug:'nusa-tenggara-barat', count: 0, zona:'Zona Adat Sasak & Sumbawa' },
  { id: 'kalimantan-timur', name:'Kalimantan Timur', slug:'kalimantan-timur', count: 0, zona:'Zona Adat Dayak & Kalimantan' },
  { id: 'sulawesi-tengah', name:'Sulawesi Tengah', slug:'sulawesi-tengah', count: 0, zona:'Zona Adat Maluku & Sulteng' },
  { id: 'sulawesi-utara', name:'Sulawesi Utara', slug:'sulawesi-utara', count: 0, zona:'Zona Adat Minahasa & Sulut' },
  { id: 'kalimantan-selatan', name:'Kalimantan Selatan', slug:'kalimantan-selatan', count: 0, zona:'Zona Adat Dayak & Banjar' },
  { id: 'kalimantan-tengah', name:'Kalimantan Tengah', slug:'kalimantan-tengah', count: 0, zona:'Zona Adat Dayak & Kalimantan' },
  { id: 'kalimantan-barat', name:'Kalimantan Barat', slug:'kalimantan-barat', count: 0, zona:'Zona Adat Dayak & Kalimantan' },
  { id: 'kepulauan-bangka-belitung', name:'Kepulauan Bangka Belitung', slug:'kepulauan-bangka-belitung', count: 0, zona:'Zona Adat Melayu & Bangka' },
  { id: 'sulawesi-barat', name:'Sulawesi Barat', slug:'sulawesi-barat', count: 0, zona:'Zona Adat Bugis & Sulbar' },
  { id: 'sulawesi-selatan', name:'Sulawesi Selatan', slug:'sulawesi-selatan', count: 0, zona:'Zona Adat Bugis & Makassar' },
  { id: 'sumatera-barat', name:'Sumatera Barat', slug:'sumatera-barat', count: 0, zona:'Zona Adat Minangkabau' },
  { id: 'di-yogyakarta', name:'DI Yogyakarta', slug:'di-yogyakarta', count: 0, zona:'Zona Adat Jawa & Mataram' },
  { id: 'dki-jakarta', name:'DKI Jakarta', slug:'dki-jakarta', count: 0, zona:'Zona Adat Betawi & Jakarta' },
  { id: 'bengkulu', name:'Bengkulu', slug:'bengkulu', count: 0, zona:'Zona Adat Rejang & Bengkulu' },
  { id: 'lampung', name:'Lampung', slug:'lampung', count: 0, zona:'Zona Adat Lampung & Sai Batin' },
  { id: 'bali', name:'Bali', slug:'bali', count: 0, zona:'Zona Adat Bali & Hindu Dharma' },
  { id: 'sulawesi-tenggara', name:'Sulawesi Tenggara', slug:'sulawesi-tenggara', count: 0, zona:'Zona Adat Buton & Sultra' },
  { id: 'nusa-tenggara-timur', name:'Nusa Tenggara Timur', slug:'nusa-tenggara-timur', count: 0, zona:'Zona Adat Flores & Timor' },
  { id: 'aceh', name:'Aceh', slug:'aceh', count: 0, zona:'Zona Adat Aceh & Melayu' },
  { id: 'banten', name:'Banten', slug:'banten', count: 0, zona:'Zona Adat Sunda & Banten' },
  { id: 'jawa-tengah', name:'Jawa Tengah', slug:'jawa-tengah', count: 0, zona:'Zona Adat Jawa & Mataram' },
  { id: 'jawa-barat', name:'Jawa Barat', slug:'jawa-barat', count: 0, zona:'Zona Adat Sunda & Jawa Barat' }
];

const mapHost = document.getElementById('indonesia-map');
const loading = document.getElementById('map-loading');

const jelajahiSection = document.getElementById('jelajahi-budaya');
const jelajahiHeader = jelajahiSection ? jelajahiSection.querySelector('h2') : null;
const jelajahiSubtitle = jelajahiSection ? jelajahiSection.querySelector('p') : null;
const cardsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3');

let tooltipEl = null;
let budayaDataset = null;
let budayaByProvinceId = new Map();
let budayaCategories = [];
let budayaCardTemplate = null;
let activeProvinceId = null;

const categoryToFilter = {
  seni_tari: 'seni',
  musik_instrumen: 'musik',
  rumah_adat: 'arsitektur',
  pakaian_wastra: 'wastra',
  kuliner_pusaka: 'kuliner',
  ritus_tradisi: 'ritus'
};

function getCulturalCards() {
  return [...document.querySelectorAll('.cultural-card')];
}

function getTotalProvinceCount(province) {
  if (!province?.categories) return 0;
  return Object.values(province.categories).reduce((sum, cat) => {
    const n = Array.isArray(cat?.items) ? cat.items.length : 0;
    return sum + n;
  }, 0);
}

async function loadBudayaDataset() {
  if (budayaDataset) return budayaDataset;
  const response = await fetch('budaya-indonesia.json', { cache: 'no-store' });
  if (!response.ok) throw new Error('budaya-indonesia.json tidak ditemukan');
  budayaDataset = await response.json();
  budayaCategories = Array.isArray(budayaDataset?.categories) ? budayaDataset.categories : [];
  budayaByProvinceId = new Map(
    (Array.isArray(budayaDataset?.provinces) ? budayaDataset.provinces : []).map(p => [p.id, p])
  );

  let totalItems = 0;
  provinceData.forEach(p => {
    const prov = budayaByProvinceId.get(p.id);
    if (!prov) return;
    p.name = prov.name || p.name;
    const count = getTotalProvinceCount(prov);
    p.count = count;
    totalItems += count;
  });

  // Update Statistics UI
  const statBudaya = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-3 .flex.flex-col')[1];
  if (statBudaya) {
    const countEl = statBudaya.querySelector('.font-headline-md');
    if (countEl) countEl.textContent = totalItems.toLocaleString('id-ID');
  }

  if (!budayaCardTemplate) {
    const firstCard = document.querySelector('.cultural-card');
    if (firstCard) budayaCardTemplate = firstCard.cloneNode(true);
  }

  // Update Initial Filter Counts (Total for all provinces)
  const initialCounts = { all: totalItems };
  budayaCategories.forEach(catMeta => {
    const filterValue = categoryToFilter[catMeta.id];
    if (!filterValue) return;
    let catTotal = 0;
    budayaDataset.provinces.forEach(prov => {
      const cat = prov.categories[catMeta.id];
      if (cat && Array.isArray(cat.items)) {
        catTotal += cat.items.length;
      }
    });
    initialCounts[filterValue] = catTotal;
  });
  updateFilterCounts(initialCounts);

  return budayaDataset;
}

function createTooltip() {
  tooltipEl = document.createElement('div');
  tooltipEl.className = 'province-tooltip';
  tooltipEl.innerHTML = `
    <p class="tt-name"></p>
    <p class="tt-count"></p>
  `;
  document.body.appendChild(tooltipEl);
}

function showTooltip(data, clientX, clientY) {
  if (!tooltipEl) createTooltip();
  tooltipEl.querySelector('.tt-name').textContent = data.name;
  tooltipEl.querySelector('.tt-count').textContent = `Jumlah Entri: ${data.count.toLocaleString('id-ID')}`;
  tooltipEl.style.left = `${clientX}px`;
  tooltipEl.style.top = `${clientY}px`;
  requestAnimationFrame(() => {
    tooltipEl.classList.add('visible');
  });
}

function moveTooltip(clientX, clientY) {
  if (!tooltipEl) return;
  tooltipEl.style.left = `${clientX}px`;
  tooltipEl.style.top = `${clientY}px`;
}

function hideTooltip() {
  if (!tooltipEl) return;
  tooltipEl.classList.remove('visible');
}

function slugify(value) {
  return value.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function selectProvince(path, data, paths) {
  paths.forEach(p => {
    p.classList.remove('is-selected');
    p.style.opacity = '0.78';
  });

  path.classList.add('is-selected');
  path.style.opacity = '1';

  tampilkanJelajahiBudaya(data);

  setTimeout(() => {
    jelajahiSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 150);
}

function tampilkanJelajahiBudaya(data) {
  if (jelajahiHeader) {
    jelajahiHeader.textContent = `Jelajahi Budaya ${data.name}`;
  }
  if (jelajahiSubtitle) {
    jelajahiSubtitle.textContent = `Temukan sejarah, seni, tradisi, kuliner, dan warisan budaya ${data.name}. Arsip terkurasi dari ${data.count.toLocaleString('id-ID')} entri budaya.`;
  }

  const badge = document.querySelector('#jelajahi-budaya .inline-flex.items-center');
  if (badge) {
    badge.querySelector('span:last-child').textContent = `${data.count.toLocaleString('id-ID')} Warisan Budaya`;
  }

  const existingZonaRow = document.querySelector('.province-zona-row');
  if (existingZonaRow) existingZonaRow.remove();

  const zonaRow = document.createElement('div');
  zonaRow.className = 'province-zona-row flex items-center justify-between bg-surface-container-lowest rounded-2xl p-5 sm:p-6 mb-8 shadow-md border border-outline-variant/30';
  zonaRow.innerHTML = `
    <div>
      <div class="flex items-center gap-3 mb-2">
        <span class="w-3.5 h-3.5 rounded-full bg-secondary"></span>
        <h3 class="font-headline-md text-2xl sm:text-3xl text-primary font-bold font-serif">${data.name}</h3>
      </div>
      <p class="font-body-md text-on-surface-variant max-w-2xl">
        Temukan sejarah, seni, tradisi, kuliner, dan warisan budaya ${data.name}.
      </p>
    </div>
    <a href="#jelajahi-budaya" class="hidden sm:inline-flex items-center gap-1 font-label-md px-5 py-2.5 rounded-full bg-[#F3D9B8] text-secondary font-bold hover:bg-secondary hover:text-white transition-colors">
      Jelajahi
    </a>
  `;

  const filterSection = document.querySelector('#jelajahi-budaya .flex.items-center.gap-2');
  if (filterSection && filterSection.parentElement) {
    filterSection.parentElement.parentElement.insertBefore(zonaRow, filterSection.parentElement);
  }

  const bottomRow = document.createElement('div');
  bottomRow.className = 'flex items-center justify-between mb-6 px-2';
  bottomRow.innerHTML = `
    <span class="font-label-md text-secondary font-bold text-base sm:text-lg">${data.zona}</span>
    <a class="inline-flex items-center gap-2 font-title-md text-primary font-bold hover:text-secondary transition-colors group" href="#jelajahi-budaya">
      <span>Jelajahi Budaya</span>
      <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
    </a>
  `;

  if (cardsContainer) {
    const existingBottom = cardsContainer.parentElement.querySelector('.province-bottom-row');
    if (existingBottom) existingBottom.remove();
    bottomRow.className += ' province-bottom-row';
    cardsContainer.parentElement.insertBefore(bottomRow, cardsContainer);
  }

  if (data?.id) {
    activeProvinceId = data.id;
    renderProvinceCulture(data.id);
  }

  const allFilterBtn = document.querySelector('.filter-pill[data-filter="all"]');
  if (allFilterBtn) {
    document.querySelectorAll('.filter-pill').forEach(b => {
      b.classList.remove('bg-primary-container', 'text-surface', 'font-semibold');
      b.classList.add('bg-surface-container-highest/80', 'text-on-surface-variant', 'font-medium');
    });
    allFilterBtn.classList.add('bg-primary-container', 'text-surface', 'font-semibold');
    allFilterBtn.classList.remove('bg-surface-container-highest/80', 'text-on-surface-variant', 'font-medium');
  }
}

function updateFilterCounts(countsByFilter) {
  const btns = document.querySelectorAll('.filter-pill');
  btns.forEach(btn => {
    const filter = btn.getAttribute('data-filter');
    if (!filter) return;
    const count = countsByFilter[filter];
    if (typeof count !== 'number') return;
    const current = btn.textContent || '';
    const replaced = current.replace(/\(\d+\)/, `(${count})`);
    btn.textContent = replaced === current ? `${current} (${count})` : replaced;
  });
}

function fillCardContent(card, item, categoryLabel, filterValue) {
  card.style.display = 'flex';
  card.setAttribute('data-cat', filterValue);

  const badges = card.querySelectorAll('div.absolute.top-3.left-3 span');
  if (badges[0]) badges[0].textContent = categoryLabel;
  if (badges[1]) badges[1].style.display = 'none'; // Hide second badge as it's not in dataset

  const audioBadge = card.querySelector('div.absolute.bottom-3.left-3');
  if (audioBadge) audioBadge.style.display = 'none'; // Hide audio badge for now

  const location = card.querySelector('div.p-5 .flex.items-center.gap-1 span:last-child');
  if (location) location.textContent = item.origin || '';

  const title = card.querySelector('h3');
  if (title) title.textContent = item.name || '';

  const desc = card.querySelector('p.font-body-sm');
  if (desc) desc.textContent = item.description || '';

  const img = card.querySelector('img');
  if (img) {
    img.alt = item.name || img.alt;
    if (item.image) img.src = item.image;
  }

  const archiveInfo = card.querySelector('.pt-4.mt-4 span.font-label-sm');
  if (archiveInfo) archiveInfo.textContent = `Arsip #${item.id.split('-').pop()} • Terverifikasi`;

  const detailLink = card.querySelector('a.inline-flex.items-center.gap-1');
  if (detailLink) {
    detailLink.href = `detail.html?id=${item.id}`;
  }
}

function renderProvinceCulture(provinceId) {
  if (!budayaDataset || !cardsContainer || !budayaCardTemplate) return;
  const province = budayaByProvinceId.get(provinceId);
  if (!province?.categories) return;

  const fallbackImgs = [...document.querySelectorAll('.cultural-card img')].map(img => img.getAttribute('src')).filter(Boolean);
  const nextImg = (idx) => fallbackImgs.length > 0 ? fallbackImgs[idx % fallbackImgs.length] : '';

  const cards = [];
  const countsByFilter = { all: 0 };

  budayaCategories.forEach(catMeta => {
    const filterValue = categoryToFilter[catMeta.id];
    if (!filterValue) return;
    const cat = province.categories[catMeta.id];
    const items = Array.isArray(cat?.items) ? cat.items : [];
    countsByFilter[filterValue] = items.length;
    countsByFilter.all += items.length;

    items.forEach((item, idx) => {
      const card = budayaCardTemplate.cloneNode(true);
      const img = card.querySelector('img');
      if (img && !item.image) {
        const src = nextImg(cards.length);
        if (src) img.src = src;
      }
      fillCardContent(card, item, cat?.label || catMeta.label || '', filterValue);
      cards.push(card);
    });
  });

  cardsContainer.innerHTML = '';
  cards.forEach(card => cardsContainer.appendChild(card));

  updateFilterCounts(countsByFilter);

  initBookmarkButtons();
  applyActiveFilter();
}

function applyActiveFilter() {
  const activeBtn = document.querySelector('.filter-pill.bg-primary-container[data-filter]');
  const filter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
  const cards = getCulturalCards();
  cards.forEach(card => {
    card.style.display = filter === 'all' || card.getAttribute('data-cat') === filter ? 'flex' : 'none';
  });
}

async function loadIndonesiaMap() {
  try {
    await loadBudayaDataset();
    const response = await fetch('peta-indonesia.svg', { cache: 'no-store' });
    if (!response.ok) throw new Error('peta-indonesia.svg tidak ditemukan');

    const svgText = await response.text();
    mapHost.insertAdjacentHTML('afterbegin', svgText);
    loading?.remove();

    const svg = mapHost.querySelector('svg');
    const paths = [...mapHost.querySelectorAll('path.dxm-area')];

    if (!svg || paths.length !== 38) {
      throw new Error(`SVG tidak valid. Ditemukan ${paths.length} path, seharusnya 38.`);
    }

    svg.removeAttribute('width');
    svg.removeAttribute('height');
    svg.setAttribute('viewBox', '0 0 1185 452');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('aria-label', 'Peta Indonesia interaktif');
    svg.setAttribute('role', 'img');

    paths.forEach((path, index) => {
      const data = provinceData[index] || {
        id: `wilayah-${index + 1}`,
        name: `Wilayah ${index + 1}`,
        slug: `wilayah-${index + 1}`,
        count: 0,
        zona: 'Zona Adat Nusantara'
      };

      path.dataset.provinsi = data.name;
      path.dataset.slug = data.slug;
      path.dataset.index = index;
      path.setAttribute('tabindex', '0');
      path.setAttribute('role', 'button');
      path.setAttribute('aria-label', `Buka ${data.name}`);
      path.style.fill = '#8B5E3C';

      const activate = (e) => {
        paths.forEach(p => p.style.opacity = '0.78');
        path.style.opacity = '1';
        const rect = path.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        showTooltip(data, cx, cy);
      };

      const move = (e) => {
        moveTooltip(e.clientX, e.clientY);
      };

      const reset = () => {
        paths.forEach(p => {
          if (!p.classList.contains('is-selected')) p.style.opacity = '1';
        });
        hideTooltip();
      };

      path.addEventListener('mouseenter', activate);
      path.addEventListener('mousemove', move);
      path.addEventListener('focus', activate);
      path.addEventListener('mouseleave', reset);
      path.addEventListener('blur', reset);

      path.addEventListener('click', () => {
        hideTooltip();
        selectProvince(path, data, paths);
        window.location.hash = `provinsi/${data.slug}`;
      });

      path.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          path.click();
        }
      });
    });
  } catch (error) {
    console.error(error);
    if (loading) {
      loading.textContent = 'Peta gagal dimuat. Pastikan peta-indonesia.svg satu folder dengan index.html.';
    }
  }
}

loadIndonesiaMap();

const filterButtons = document.querySelectorAll('.filter-pill');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => {
      b.classList.remove('bg-primary-container', 'text-surface', 'font-semibold');
      b.classList.add('bg-surface-container-highest/80', 'text-on-surface-variant', 'font-medium');
    });

    btn.classList.add('bg-primary-container', 'text-surface', 'font-semibold');
    btn.classList.remove('bg-surface-container-highest/80', 'text-on-surface-variant', 'font-medium');

    applyActiveFilter();
  });
});

function initBookmarkButtons() {
  const bookmarkBtns = document.querySelectorAll('.bookmark-btn');
  bookmarkBtns.forEach(btn => {
    if (btn.dataset.bound === '1') return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const icon = btn.querySelector('.material-symbols-outlined');
      const isActive = icon.style.fontVariationSettings?.includes("'FILL' 1");
      if (isActive) {
        icon.style.fontVariationSettings = "'FILL' 0";
        btn.classList.remove('text-secondary');
        btn.classList.add('text-outline');
      } else {
        icon.style.fontVariationSettings = "'FILL' 1";
        btn.classList.remove('text-outline');
        btn.classList.add('text-secondary');
      }
    });
  });
}

initBookmarkButtons();
