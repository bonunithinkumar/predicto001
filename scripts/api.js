// API Base URL
const API_BASE_URL = 'http://localhost:5001';

// Function to predict colleges
async function predictColleges(formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/predict`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rank: parseInt(formData.rank),
                category: formData.category,
                gender: formData.gender,
                district: formData.district,
                branch: formData.branch,
                page: formData.page || 1
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch predictions');
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Function to search colleges
async function searchColleges(query, type, district) {
    try {
        const params = new URLSearchParams({
            ...(query && { query }),
            ...(type && { type }),
            ...(district && { district })
        });

        const response = await fetch(`${API_BASE_URL}/search?${params}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to search colleges');
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Function to get college details
async function getCollegeDetails(collegeId) {
    try {
        const response = await fetch(`${API_BASE_URL}/colleges/${collegeId}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch college details');
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Function to get paginated college list
async function getColleges(page = 1, limit = 10) {
    try {
        const response = await fetch(`${API_BASE_URL}/colleges?page=${page}&limit=${limit}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch colleges');
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
} 