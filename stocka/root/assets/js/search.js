// sample stock data
// if a working API becomes available,
// as long as this array is populated
// the search functionality will still work
let stockData = [
  {
    id: 1,
    name: 'Apple',
    symbol: 'AAPL',
    lastPrice: 130.48,
    dayChange: 2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 2,
    name: 'Twitter',
    symbol: 'TWRT',
    lastPrice: 30.48,
    dayChange: -12.46,
    dayHigh: 56,
    dayLow: 22.9,
  },
  {
    id: 3,
    name: 'Paypal',
    symbol: 'PP',
    lastPrice: 65,
    dayChange: 11,
    dayHigh: 65,
    dayLow: 60,
  },
  {
    id: 4,
    name: 'Tesla',
    symbol: 'TSLA',
    lastPrice: 109.5,
    dayChange: 57.64,
    dayHigh: 120.7,
    dayLow: 88.12,
  },
  {
    id: 5,
    name: 'Goldman Sachs',
    symbol: 'GSBD',
    lastPrice: 650.3,
    dayChange: -9.1,
    dayHigh: 650.3,
    dayLow: 633.5,
  },
  {
    id: 6,
    name: 'Amazon',
    symbol: 'AMZN',
    lastPrice: 7.8,
    dayChange: 6,
    dayHigh: 7.9,
    dayLow: 7.1,
  },
  {
    id: 7,
    name: 'Nestle',
    symbol: 'NSTL',
    lastPrice: 130.48,
    dayChange: 2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 8,
    name: 'Alibaba',
    symbol: 'BABAF',
    lastPrice: 130.48,
    dayChange: 2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 9,
    name: 'Shopify',
    symbol: 'SHOP',
    lastPrice: 130.48,
    dayChange: 2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 10,
    name: 'Facebook',
    symbol: 'FB',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 11,
    name: 'Extra',
    symbol: 'EX',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 12,
    name: 'Extra',
    symbol: 'EX',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 13,
    name: 'Extra',
    symbol: 'EX',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 14,
    name: 'Extra',
    symbol: 'EX',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 15,
    name: 'Extra',
    symbol: 'EX',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 16,
    name: 'Extra',
    symbol: 'EX',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 17,
    name: 'Extra',
    symbol: 'EX',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 18,
    name: 'Extra',
    symbol: 'EX',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
  {
    id: 19,
    name: 'Extra',
    symbol: 'EX',
    lastPrice: 130.48,
    dayChange: -2.46,
    dayHigh: 150.2,
    dayLow: 110.05,
  },
];

// DECLARATIONS

// the desktop searchbar on the dashboard
let searchBar = document.querySelector('#search');

// div containing the search page elements
let searchWindow = document.querySelector('.search-window');

// tbody element that will be populated with tr for stock data
let stockList = document.querySelector('#stock-list');

// the mobile search icon and searchbar on the dashboard
let mobileSearchIcon = document.querySelector('.dash-header-search');
let mobileSearchIconIcon = document.querySelector('.bi-search');
let mobileSearchBar = document.querySelector('#mobile-search');

let mobileSearchCloseBtn = document.querySelector('.mobile-search-close-btn');

let mainContent = document.querySelector('.main-content');

// FUNCTION to populate stockList using map and innerHTML
let renderStocks = stonks => {
  stockList.innerHTML = stonks
    .map(stock => {
      return `
  <tr>
    <td class="stock-name">${stock.name} (<span class="stock-symbol">${
        stock.symbol
      }</span>)</td>
    <td class="last-price">$ ${stock.lastPrice}</td>
    <td class="day-change ${stock.dayChange > 0 ? 'green-fg' : 'red-fg'}">${
        stock.dayChange > 0 ? '+' : ''
      }${stock.dayChange} %</td>
    <td class="day-high d-none d-lg-table-cell">$ ${stock.dayHigh}</td>
    <td class="day-low d-none d-lg-table-cell">$ ${stock.dayLow}</td>
    <td class="btn-wrap d-none d-lg-table-cell"><button class="trade-btn green-bg">Trade</button></td>
  </tr>

  `;
    })
    .join('');
};

// * DESKTOP  SECTION
// EVENT LISTENERS
searchBar.addEventListener('input', () => {
  if (searchBar.value) {
    // reveals the search window if search value is updated (desktop)
    searchWindow.classList.remove('hide');

    let searchString = searchBar.value.toLowerCase();
    let filteredStocks = stockData.filter(stock => {
      return (
        stock.name.toLowerCase().includes(searchString) ||
        stock.symbol.toLowerCase().includes(searchString)
      );
    });
    renderStocks(filteredStocks);
  } else {
    // removes the search window if search input is empty (desktop)
    searchWindow.classList.add('hide');
  }
});

// * MOBILE SECTION
// EVENT LISTENERS
mobileSearchIcon.addEventListener('click', () => {
  if (searchWindow.classList.contains('hide')) {
    // reveals the search window search icon is clicked (mobile)
    searchWindow.classList.remove('hide');

    // sets active color for search icon
    mobileSearchIconIcon.style.color = 'var(--color-100)';

    // focus on the search bar when search window is revealed
    mobileSearchBar.focus();
  } else {
    // reveals the search window search icon is clicked (mobile)
    searchWindow.classList.add('hide');

    // sets active color for search icon
    mobileSearchIconIcon.style.color = 'var(--color-300)';
  }
});

mobileSearchBar.addEventListener('input', () => {
  if (mobileSearchBar.value) {
    let searchString = mobileSearchBar.value.toLowerCase();
    let filteredStocks = stockData.filter(stock => {
      return (
        stock.name.toLowerCase().includes(searchString) ||
        stock.symbol.toLowerCase().includes(searchString)
      );
    });
    renderStocks(filteredStocks);
  } else {
  }
});

mobileSearchCloseBtn.addEventListener('click', () => {
  searchWindow.classList.add('hide');
});
