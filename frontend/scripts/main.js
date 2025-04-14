// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get form element
    const form = document.getElementById('collegepredictorform');
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('college-search');
    const ctaButton = document.querySelector('.primary-cta');

    // Handle CTA button click
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollBy({ 
                top: 300, // Scroll down by 300 pixels
                behavior: 'smooth'
            });
        });
    }

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        showLoading();

        try {
            // Get form data
            const formData = {
                rank: form.querySelector('input[name="rank"]').value,
                gender: form.querySelector('input[name="gender"]:checked').value,
                category: form.querySelector('input[name="category"]:checked').value,
                district: form.querySelector('input[name="district"]:checked').value === 'specific' 
                    ? form.querySelector('select[name="district-select"]').value 
                    : 'all',
                branch: form.querySelector('input[name="branch"]:checked').value === 'specific'
                    ? form.querySelector('select[name="branch-select"]').value
                    : 'all',
                page: 1
            };

            // Get predictions using the API function
            const predictions = await window.predictColleges(formData);
            
            // Display results
            displayPredictions(predictions, formData);
            
            // Scroll to results
            document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            showError(error.message);
        } finally {
            hideLoading();
        }
    });

    // Handle search
    searchBtn.addEventListener('click', async () => {
        const query = searchInput.value.trim();
        if (!query) return;

        showLoading();

        try {
            const results = await searchColleges(query);
            displaySearchResults(results);
        } catch (error) {
            showError(error.message);
        } finally {
            hideLoading();
        }
    });
});

// Function to display predictions
function displayPredictions(response, formData) {
    const { message, colleges, currentPage, totalPages, totalColleges, hasMore } = response;
    console.log('Response:', response);
    console.log('Colleges:', colleges);
    
    const resultsContainer = document.getElementById('results');
    if (!resultsContainer) {
        console.error('Results container not found');
        return;
    }
    
    // Clear previous results and add active class
    resultsContainer.innerHTML = '';
    resultsContainer.classList.add('active');
    
    if (colleges.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No colleges found matching your criteria.</div>';
        return;
    }

    // Add heading and description
    const headingSection = document.createElement('div');
    headingSection.className = 'results-header';
    headingSection.innerHTML = `
        <h2>Colleges Matching Your Criteria</h2>
        <p>Based on your rank and preferences, here are the colleges that match your profile:</p>
        <p class="results-count">Showing ${(currentPage - 1) * 15 + 1} to ${Math.min(currentPage * 15, totalColleges)} colleges</p>
    `;
    resultsContainer.appendChild(headingSection);

    // Add sorting controls
    const sortingSection = document.createElement('div');
    sortingSection.className = 'sorting-controls';
    sortingSection.innerHTML = `
        <div class="sort-by">
            <label for="sort-select">Sort by:</label>
            <select id="sort-select" class="sort-select">
                <option value="cutoff_rank">Cutoff Rank (Closest to Your Rank)</option>
                <option value="college_fee">College Fee (Low to High)</option>
                <option value="institution_name">College Name (A to Z)</option>
            </select>
        </div>
    `;
    resultsContainer.appendChild(sortingSection);
    
    // Create a table for the college data
    const table = document.createElement('table');
    table.className = 'results-table';
    
    // Create table header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>S.No.</th>
            <th>Institution Name</th>
            <th>Type</th>
            <th>District</th>
            <th>Place</th>
            <th>Branch</th>
            <th>Cutoff Rank</th>
            <th>College Fee</th>
            <th>Category</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    colleges.forEach((college, index) => {
        const row = document.createElement('tr');
        const serialNumber = (currentPage - 1) * 15 + index + 1;
        row.innerHTML = `
            <td>${serialNumber}</td>
            <td>${college.institution_name || 'N/A'}</td>
            <td>${college.type || 'N/A'}</td>
            <td>${college.district || 'N/A'}</td>
            <td>${college.place || 'N/A'}</td>
            <td>${college.branch_code || 'N/A'}</td>
            <td>${college.cutoff_rank || 'N/A'}</td>
            <td>${college.college_fee || 'N/A'}</td>
            <td>${college.cutoff_category || 'N/A'}</td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    
    // Add the table to the results container
    resultsContainer.appendChild(table);
    
    // Add pagination info
    const paginationInfo = document.createElement('div');
    paginationInfo.className = 'pagination-info';
    paginationInfo.innerHTML = `
        <p>Page ${currentPage} of ${totalPages}</p>
    `;
    resultsContainer.appendChild(paginationInfo);
    
    // Add show more button if there are more pages
    if (currentPage < totalPages) {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.className = 'show-more';
        showMoreBtn.textContent = 'Show More';
        showMoreBtn.onclick = () => loadMoreColleges(currentPage + 1);
        resultsContainer.appendChild(showMoreBtn);
    }

    // Add sorting functionality
    document.getElementById('sort-select').addEventListener('change', function(e) {
        const sortBy = e.target.value;
        const sortedColleges = [...colleges].sort((a, b) => {
            switch(sortBy) {
                case 'cutoff_rank':
                    return (a.cutoff_rank || 0) - (b.cutoff_rank || 0);
                case 'college_fee':
                    return (a.college_fee || 0) - (b.college_fee || 0);
                case 'institution_name':
                    return (a.institution_name || '').localeCompare(b.institution_name || '');
                default:
                    return 0;
            }
        });
        
        // Update table with sorted colleges
        tbody.innerHTML = '';
        sortedColleges.forEach((college, index) => {
            const row = document.createElement('tr');
            const serialNumber = (currentPage - 1) * 15 + index + 1;
            row.innerHTML = `
                <td>${serialNumber}</td>
                <td>${college.institution_name || 'N/A'}</td>
                <td>${college.type || 'N/A'}</td>
                <td>${college.district || 'N/A'}</td>
                <td>${college.place || 'N/A'}</td>
                <td>${college.branch_code || 'N/A'}</td>
                <td>${college.cutoff_rank || 'N/A'}</td>
                <td>${college.college_fee || 'N/A'}</td>
                <td>${college.cutoff_category || 'N/A'}</td>
            `;
            tbody.appendChild(row);
        });
    });

    // Smooth scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to display search results
function displaySearchResults(colleges) {
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';

    if (!colleges.length) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <p>No colleges found matching your search.</p>
            </div>
        `;
    } else {
        colleges.forEach(college => {
            const collegeCard = createCollegeCard(college);
            resultsContainer.appendChild(collegeCard);
        });
    }

    // Show results in a modal or designated area
    const searchResultsArea = document.querySelector('.search-results-area') || document.body;
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
    searchResultsArea.appendChild(resultsContainer);
}

// Loading state functions
function showLoading() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
}

// Error display function
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Remove after 5 seconds
    setTimeout(() => errorDiv.remove(), 5000);
    
    document.body.appendChild(errorDiv);
}

// Function to toggle district select dropdown
function toggleDistrictSelect() {
    const districtSelect = document.querySelector('.district-select-container');
    const selectedValue = document.querySelector('input[name="district"]:checked').value;
    districtSelect.style.display = selectedValue === 'specific' ? 'block' : 'none';
}

// Function to toggle branch select dropdown
function toggleBranchSelect() {
    const branchSelect = document.querySelector('.branch-select-container');
    const selectedValue = document.querySelector('input[name="branch"]:checked').value;
    branchSelect.style.display = selectedValue === 'specific' ? 'block' : 'none';
}

function createCollegeCard(college) {
    const card = document.createElement('div');
    card.className = 'college-card';
    
    // Format the college fee with commas and handle undefined/null values
    const formattedFee = college.college_fee ? 
        `₹${college.college_fee.toLocaleString('en-IN')}` : 
        'N/A';
    
    // Format the cutoff rank with commas and handle undefined/null values
    const formattedRank = college.cutoff_rank ? 
        college.cutoff_rank.toLocaleString('en-IN') : 
        'N/A';
    
    // Format the cutoff category
    const formattedCategory = college.cutoff_category ? 
        college.cutoff_category.toUpperCase() : 
        'N/A';
    
    // Format the branch code
    const formattedBranch = college.branch_code ? 
        college.branch_code.toUpperCase() : 
        'N/A';
    
    // Format the district
    const formattedDistrict = college.district ? 
        college.district.toUpperCase() : 
        'N/A';
    
    // Format the place
    const formattedPlace = college.place ? 
        college.place.toUpperCase() : 
        'N/A';
    
    // Format the type
    const formattedType = college.type ? 
        college.type.toUpperCase() : 
        'N/A';
    
    // Format the coed status
    const formattedCoed = college.coed ? 
        college.coed.toUpperCase() : 
        'N/A';
    
    // Format the institution name
    const formattedName = college.institution_name ? 
        college.institution_name.toUpperCase() : 
        'N/A';
    
    card.innerHTML = `
        <div class="college-header">
            <h3>${formattedName}</h3>
            <span class="college-type ${formattedType.toLowerCase()}">${formattedType}</span>
        </div>
        <div class="college-details">
            <div class="detail-row">
                <span class="detail-label">Branch:</span>
                <span class="detail-value">${formattedBranch}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Cutoff Rank:</span>
                <span class="detail-value">${formattedRank}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Category:</span>
                <span class="detail-value">${formattedCategory}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">College Fee:</span>
                <span class="detail-value">${formattedFee}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Location:</span>
                <span class="detail-value">${formattedPlace}, ${formattedDistrict}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Type:</span>
                <span class="detail-value">${formattedCoed}</span>
            </div>
        </div>
    `;
    
    return card;
}

async function loadMoreColleges(nextPage) {
    showLoading();
    try {
        const form = document.getElementById('collegepredictorform');
        if (!form) {
            throw new Error('Form not found');
        }
        
        const formData = {
            rank: form.querySelector('input[name="rank"]').value,
            gender: form.querySelector('input[name="gender"]:checked').value,
            category: form.querySelector('input[name="category"]:checked').value,
            district: form.querySelector('input[name="district"]:checked').value === 'specific' 
                ? form.querySelector('select[name="district-select"]').value 
                : 'all',
            branch: form.querySelector('input[name="branch"]:checked').value === 'specific'
                ? form.querySelector('select[name="branch-select"]').value
                : 'all',
            page: nextPage
        };

        const response = await window.predictColleges(formData);
        const tbody = document.querySelector('.results-table tbody');
        
        if (!tbody) {
            console.error('Table body not found');
            return;
        }
        
        // Add new rows to the existing table
        response.colleges.forEach((college, index) => {
            const row = document.createElement('tr');
            const serialNumber = (nextPage - 1) * 15 + index + 1;
            row.innerHTML = `
                <td>${serialNumber}</td>
                <td>${college.institution_name || 'N/A'}</td>
                <td>${college.type || 'N/A'}</td>
                <td>${college.district || 'N/A'}</td>
                <td>${college.place || 'N/A'}</td>
                <td>${college.branch_code || 'N/A'}</td>
                <td>${college.cutoff_rank || 'N/A'}</td>
                <td>${college.college_fee || 'N/A'}</td>
                <td>${college.cutoff_category || 'N/A'}</td>
            `;
            tbody.appendChild(row);
        });
        
        // Update results count in header
        const resultsCount = document.querySelector('.results-count');
        if (resultsCount) {
            resultsCount.textContent = `Showing ${(nextPage - 1) * 15 + 1} to ${Math.min(nextPage * 15, response.totalColleges)} colleges`;
        }
        
        // Update pagination info
        const paginationInfo = document.querySelector('.pagination-info');
        if (paginationInfo) {
            paginationInfo.innerHTML = `
                <p>Page ${nextPage} of ${response.totalPages}</p>
            `;
        }
        
        // Update or remove show more button
        const showMoreBtn = document.querySelector('.show-more');
        if (nextPage < response.totalPages) {
            if (showMoreBtn) {
                showMoreBtn.onclick = () => loadMoreColleges(nextPage + 1);
            } else {
                const newShowMoreBtn = document.createElement('button');
                newShowMoreBtn.className = 'show-more';
                newShowMoreBtn.textContent = 'Show More';
                newShowMoreBtn.onclick = () => loadMoreColleges(nextPage + 1);
                document.getElementById('results').appendChild(newShowMoreBtn);
            }
        } else if (showMoreBtn) {
            showMoreBtn.remove();
        }
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}

// Mobile Sidebar Functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarClose = document.querySelector('.sidebar-close');
  
  // Open sidebar
  mobileMenuIcon.addEventListener('click', function() {
    mobileSidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
  });
  
  // Close sidebar
  function closeSidebar() {
    mobileSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  sidebarClose.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);
  
  // Close sidebar when clicking on a navigation link
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeSidebar();
    }
  });
  
  // Mobile sidebar search functionality
  const sidebarSearchBtn = document.querySelector('.mobile-sidebar .sidebar-search button');
  const sidebarSearchInput = document.querySelector('.mobile-sidebar .sidebar-search input');
  
  if (sidebarSearchBtn && sidebarSearchInput) {
    sidebarSearchBtn.addEventListener('click', async () => {
      const query = sidebarSearchInput.value.trim();
      if (!query) return;
      
      showLoading();
      
      try {
        // Use the same search functionality as the main search box
        const searchTerm = query.toLowerCase();
        
        // Define available colleges with their variations
        const availableColleges = {
          'vignan': ['vignan', 'viit', 'vignan institute', 'vignan institute of information technology'],
          'anits': ['anits', 'anil neerukonda', 'anil neerukonda institute', 'anil neerukonda institute of technology and sciences'],
          'gvp': ['gvp', 'gayatri', 'gayatri vidya parishad', 'gvp college of engineering'],
          'raghu': ['raghu', 'rec', 'raghu engineering', 'raghu engineering college'],
          'mvgr': ['mvgr', 'mvgr college', 'mvgr engineering', 'mvgr college of engineering'],
          'gitam': ['gitam', 'gitam university', 'gandhi institute of technology']
        };

        // Find matching college
        let matchedCollege = null;
        for (const [key, variations] of Object.entries(availableColleges)) {
          if (variations.some(v => searchTerm.includes(v))) {
            matchedCollege = key;
            break;
          }
        }

        if (matchedCollege) {
          window.location.href = `college-details.html?college=${encodeURIComponent(matchedCollege)}`;
        } else {
          alert("College not found in our database. Please try another college name.");
        }
        
        closeSidebar(); // Close sidebar after search
      } catch (error) {
        showError(error.message);
      } finally {
        hideLoading();
      }
    });
    
    // Also allow search on Enter key
    sidebarSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sidebarSearchBtn.click();
      }
    });
  }
});
