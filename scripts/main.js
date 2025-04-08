// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get form element
    const form = document.getElementById('collegepredictorform');
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('college-search');

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
                category: form.querySelector('input[name="category"]:checked').value
            };

            // Get predictions
            const predictions = await predictColleges(formData);
            
            // Display results
            displayPredictions(predictions);
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
function displayPredictions(response) {
    const { message, colleges } = response;
    const resultsSection = document.createElement('section');
    resultsSection.className = 'results-section';

    // Create header content
    const headerContent = `
        <h2>Colleges Matching Your Criteria</h2>
        <p>${message}</p>
        <div class="results-info">
            <p>Showing 1 to ${colleges.length} colleges</p>
            <div class="sort-controls">
                <label>Sort by:</label>
                <select id="sortSelect">
                    <option value="cutoff">Cutoff Rank (Closest to Your Rank)</option>
                    <option value="fees">Fees (Low to High)</option>
                    <option value="name">College Name (A to Z)</option>
                </select>
            </div>
        </div>
    `;

    // Create table
    const tableContent = `
        <table class="results-table">
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>COLLEGE NAME</th>
                    <th>DISTRICT</th>
                    <th>BRANCH</th>
                    <th>CUTOFF</th>
                    <th>CATEGORY</th>
                    <th>FEES</th>
                </tr>
            </thead>
            <tbody>
                ${colleges.map((college, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>
                            <div class="college-name">
                                <strong>${college.inst_name}</strong>
                                <span>${college.place || ''}</span>
                            </div>
                        </td>
                        <td>${college.district || 'N/A'}</td>
                        <td>${college.branch_code || 'N/A'}</td>
                        <td>${college.cutoff_rank || 'N/A'}</td>
                        <td>${college.cutoff_category || 'N/A'}</td>
                        <td>${college.COLLFEE ? '₹' + college.COLLFEE : 'N/A'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    // Combine all content
    resultsSection.innerHTML = headerContent + tableContent;

    // Add event listener for sorting
    setTimeout(() => {
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                const sortBy = e.target.value;
                const sortedColleges = [...colleges].sort((a, b) => {
                    switch(sortBy) {
                        case 'fees':
                            return (a.COLLFEE || 0) - (b.COLLFEE || 0);
                        case 'name':
                            return a.inst_name.localeCompare(b.inst_name);
                        case 'cutoff':
                            return (a.cutoff_rank || 0) - (b.cutoff_rank || 0);
                        default:
                            return 0;
                    }
                });
                displayPredictions({ message, colleges: sortedColleges });
            });
        }
    }, 0);

    // Clear previous results and show new ones
    const existingResults = document.querySelector('.results-section');
    if (existingResults) {
        existingResults.remove();
    }
    document.querySelector('.prediction-section').after(resultsSection);
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
            const collegeCard = document.createElement('div');
            collegeCard.className = 'college-card';
            collegeCard.innerHTML = `
                <h3>${college.inst_name}</h3>
                <p><strong>Branch:</strong> ${college.branch_code || 'N/A'}</p>
                <p><strong>Type:</strong> ${college.type || 'N/A'}</p>
                <p><strong>District:</strong> ${college.district || 'N/A'}</p>
                <p><strong>Place:</strong> ${college.place || 'N/A'}</p>
            `;
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
