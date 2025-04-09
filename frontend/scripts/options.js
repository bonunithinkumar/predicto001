/* adding new html if cilicked specific districts or branches */

function displayhtml() {
  // For District selection
  const districtContainer = document.querySelector(".displayed-district");
  const specificDistrict = document.querySelector('input[name="district"][value="specific"]').checked;

  if (specificDistrict) {
      districtContainer.innerHTML = `
          <div class="select-district">
              <select name="district-select" class="form__field" required>
                  <option value="" disabled selected>--PREFERRED DISTRICT--</option>
                  <option value="vizag">Vizag</option>
                  <option value="guntur">Guntur</option>
                  <option value="amaravathi">Amaravathi</option>
                  <option value="srikakulam">Srikakulam</option>
                  <option value="tirupathi">Tirupathi</option>
              </select>
          </div>`;
      districtContainer.style.display = 'block'; // Show the container
  } else {
      districtContainer.innerHTML = ""; // Clear dropdown if "All Districts" is selected
      districtContainer.style.display = 'none'; // Hide the container
  }

  // For Branch selection
  const branchContainer = document.querySelector(".select-prefered-branch");
  const specificBranch = document.querySelector('input[name="branch"][value="specific"]').checked;

  if (specificBranch) {
      branchContainer.innerHTML = `
          <div class="select-branch">
              <select name="branch" class="form__field" required>
                  <option value="" disabled selected>--PREFERRED BRANCH--</option>
                  <option value="cse">CSE</option>
                  <option value="csd">CSD</option>
                  <option value="cai">CAI</option>
                  <option value="mec">MEC</option>
                  <option value="civil">CIVIL</option>
              </select>
          </div>`;
      branchContainer.style.display = 'block'; // Show the container
  } else {
      branchContainer.innerHTML = ""; // Clear dropdown if "All Branches" is selected
      branchContainer.style.display = 'none'; // Hide the container
  }
}

// Add event listeners when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initial call to set up the correct state
    displayhtml();

    // Get the rank input element
    const rankInput = document.querySelector('input[name="rank"]');
    
    // Prevent negative numbers and non-numeric input
    rankInput.addEventListener('input', function(e) {
        let value = parseInt(this.value);
        if (value < 1) {
            this.value = 1;
        }
        // Remove any non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Prevent the minus sign
    rankInput.addEventListener('keydown', function(e) {
        if (e.key === '-' || e.key === 'e') {
            e.preventDefault();
        }
    });

    // Form submission handler
    document.getElementById("collegepredictorform").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get all form values
        const formData = new FormData(this);
        const rank = formData.get("rank");
        const gender = formData.get("gender");
        const district = formData.get("district");
        const districtSpecific = district === "specific" ? formData.get("district-select") : "All Districts";
        const category = formData.get("category");
        const disability = formData.get("other-category");
        const state = formData.get("state");
        const branch = formData.get("branch");
        const branchSpecific = branch === "specific" ? formData.get("branch") : "All Branches";

        // Validate required fields for specific selections
        if (district === "specific" && (!formData.get("district-select") || formData.get("district-select") === "")) {
            alert("Please select a specific district");
            return;
        }

        if (branch === "specific" && (!formData.get("branch") || formData.get("branch") === "")) {
            alert("Please select a specific branch");
            return;
        }

        // Generate result table
        const resultHTML = `
            <table border="1" cellspacing="0" cellpadding="5">
                <tr><th>Field</th><th>Value</th></tr>
                <tr><td>Rank</td><td>${rank}</td></tr>
                <tr><td>Gender</td><td>${gender}</td></tr>
                <tr><td>District Preference</td><td>${districtSpecific}</td></tr>
                <tr><td>Category</td><td>${category}</td></tr>
                <tr><td>Physical Disability</td><td>${disability}</td></tr>
                <tr><td>State</td><td>${state}</td></tr>
                <tr><td>Branch Preference</td><td>${branchSpecific}</td></tr>
            </table>
        `;

        document.getElementById("result").innerHTML = resultHTML;
    });
});

/* for input */
document.querySelectorAll('.radio-input').forEach(input => {
    input.addEventListener('change', (event) => {
        console.log(`Selected: ${event.target.value}`);
    });
});

function addhtml(){
  const value=document.querySelector('.gender-text-js');
  const innervalue=value.value;
  if (innervalue === "Specific branches"){
    console.log('found');
  }
}

// FAQ Section Interactivity
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // College Comparison Button Handlers
    const compareButtons = document.querySelectorAll('.compare-btn');
    
    compareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const action = button.textContent;
            
            // You can add specific functionality for each button
            switch(action) {
                case 'Compare Colleges':
                    alert('College comparison feature coming soon!');
                    break;
                case 'View Details':
                    alert('Detailed research information coming soon!');
                    break;
                case 'Explore More':
                    alert('Student life details coming soon!');
                    break;
            }
        });
    });
});