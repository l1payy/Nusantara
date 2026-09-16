const provinceData = [
  { name:'Papua Selatan', slug:'papua-selatan', count: 1842, zona:'Zona Adat Papua & Melanesia' },
  { name:'Papua Tengah', slug:'papua-tengah', count: 2105, zona:'Zona Adat Papua & Melanesia' },
  { name:'Papua Barat Daya', slug:'papua-barat-daya', count: 1287, zona:'Zona Adat Papua & Melanesia' },
  { name:'Papua Barat', slug:'papua-barat', count: 1523, zona:'Zona Adat Papua & Melanesia' },
  { name:'Maluku', slug:'maluku', count: 2341, zona:'Zona Adat Maluku & Sulteng' },
  { name:'Maluku Utara', slug:'maluku-utara', count: 1890, zona:'Zona Adat Maluku & Sulteng' },
  { name:'Kalimantan Utara', slug:'kalimantan-utara', count: 1654, zona:'Zona Adat Dayak & Kalimantan' },
  { name:'Kepulauan Riau', slug:'kepulauan-riau', count: 2890, zona:'Zona Adat Melayu & Riau' },
  { name:'Papua Barat Daya', slug:'papua-barat-daya-2', count: 1356, zona:'Zona Adat Papua & Melanesia' },
  { name:'Papua Pegunungan', slug:'papua-pegunungan', count: 2032, zona:'Zona Adat Papua & Melanesia' },
  { name:'Papua', slug:'papua', count: 3241, zona:'Zona Adat Papua & Melanesia' },
  { name:'Sumatera Utara', slug:'sumatera-utara', count: 3057, zona:'Zona Adat Melayu & Batak',
    budaya: [0, 1, 2, 3, 4, 5] },
  { name:'Riau', slug:'riau', count: 2456, zona:'Zona Adat Melayu & Riau' },
  { name:'Jambi', slug:'jambi', count: 1789, zona:'Zona Adat Melayu & Jambi' },
  { name:'Sumatera Selatan', slug:'sumatera-selatan', count: 2201, zona:'Zona Adat Melayu & Palembang' },
  { name:'Jawa Timur', slug:'jawa-timur', count: 4123, zona:'Zona Adat Jawa Timur & Madura' },
  { name:'Nusa Tenggara Barat', slug:'nusa-tenggara-barat', count: 1932, zona:'Zona Adat Sasak & Sumbawa' },
  { name:'Kalimantan Timur', slug:'kalimantan-timur', count: 2654, zona:'Zona Adat Dayak & Kalimantan' },
  { name:'Sulawesi Tengah', slug:'sulawesi-tengah', count: 1823, zona:'Zona Adat Maluku & Sulteng' },
  { name:'Sulawesi Utara', slug:'sulawesi-utara', count: 2178, zona:'Zona Adat Minahasa & Sulut' },
  { name:'Kalimantan Selatan', slug:'kalimantan-selatan', count: 2310, zona:'Zona Adat Dayak & Banjar' },
  { name:'Kalimantan Tengah', slug:'kalimantan-tengah', count: 1987, zona:'Zona Adat Dayak & Kalimantan' },
  { name:'Kalimantan Barat', slug:'kalimantan-barat', count: 2543, zona:'Zona Adat Dayak & Kalimantan' },
  { name:'Kepulauan Bangka Belitung', slug:'kepulauan-bangka-belitung', count: 1432, zona:'Zona Adat Melayu & Bangka' },
  { name:'Sulawesi Barat', slug:'sulawesi-barat', count: 1567, zona:'Zona Adat Bugis & Sulbar' },
  { name:'Sulawesi Selatan', slug:'sulawesi-selatan', count: 3876, zona:'Zona Adat Bugis & Makassar' },
  { name:'Sumatera Barat', slug:'sumatera-barat', count: 3421, zona:'Zona Adat Minangkabau' },
  { name:'DI Yogyakarta', slug:'di-yogyakarta', count: 2987, zona:'Zona Adat Jawa & Mataram' },
  { name:'DKI Jakarta', slug:'dki-jakarta', count: 1876, zona:'Zona Adat Betawi & Jakarta' },
  { name:'Bengkulu', slug:'bengkulu', count: 1234, zona:'Zona Adat Rejang & Bengkulu' },
  { name:'Lampung', slug:'lampung', count: 1654, zona:'Zona Adat Lampung & Sai Batin' },
  { name:'Bali', slug:'bali', count: 4532, zona:'Zona Adat Bali & Hindu Dharma' },
  { name:'Sulawesi Tenggara', slug:'sulawesi-tenggara', count: 1432, zona:'Zona Adat Buton & Sultra' },
  { name:'Nusa Tenggara Timur', slug:'nusa-tenggara-timur', count: 2865, zona:'Zona Adat Flores & Timor' },
  { name:'Aceh', slug:'aceh', count: 3120, zona:'Zona Adat Aceh & Melayu' },
  { name:'Banten', slug:'banten', count: 2234, zona:'Zona Adat Sunda & Banten' },
  { name:'Jawa Tengah', slug:'jawa-tengah', count: 3654, zona:'Zona Adat Jawa & Mataram' },
  { name:'Jawa Barat', slug:'jawa-barat', count: 3987, zona:'Zona Adat Sunda & Jawa Barat' }
];

const mapHost = document.getElementById('indonesia-map');
const loading = document.getElementById('map-loading');

const jelajahiSection = document.getElementById('jelajahi-budaya');
const jelajahiHeader = jelajahiSection ? jelajahiSection.querySelector('h2') : null;
const jelajahiSubtitle = jelajahiSection ? jelajahiSection.querySelector('p') : null;
const culturalCards = document.querySelectorAll('.cultural-card');
const cardsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3');

let tooltipEl = null;

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

  if (data.budaya && data.budaya.length > 0) {
    culturalCards.forEach((card, idx) => {
      card.style.display = data.budaya.includes(idx) ? 'flex' : 'none';
    });
  } else {
    culturalCards.forEach(card => {
      card.style.display = 'flex';
    });
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

async function loadIndonesiaMap() {
  try {
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
        name: `Wilayah ${index + 1}`,
        slug: `wilayah-${index + 1}`,
        count: 1000,
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

    const filter = btn.getAttribute('data-filter');
    culturalCards.forEach(card => {
      const cardDisplay = card.style.display;
      if (cardDisplay === 'none') return;
      card.style.display = filter === 'all' || card.getAttribute('data-cat') === filter ? 'flex' : 'none';
    });
  });
});

const bookmarkBtns = document.querySelectorAll('.bookmark-btn');
bookmarkBtns.forEach(btn => {
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
