// Profile image handling
document.addEventListener("DOMContentLoaded", function () {
  const savedImage = localStorage.getItem("profileImage");
  const profileImg = document.getElementById("profile-img");
  const profilePopup = document.getElementById("profilePopup");
  let popupTimeout;

  if (savedImage) {
      profileImg.src = savedImage;
  }

  function startAutoHideTimer() {
      if (popupTimeout) {
          clearTimeout(popupTimeout);
      }
      popupTimeout = setTimeout(() => {
          if (!document.querySelector(".profile-image-option.selected")) {
              profilePopup.style.display = "none";
          }
      }, 3000);
  }

  // Show popup when clicking profile image
  profileImg.addEventListener("click", function() {
      profilePopup.style.display = "flex";
      startAutoHideTimer(); // Start timer when popup is shown
  });

  // Handle profile image selection
  const profileOptions = document.querySelectorAll(".profile-image-option");
  profileOptions.forEach(option => {
      option.addEventListener("click", function() {
          // Remove selected class from all options
          profileOptions.forEach(opt => opt.classList.remove("selected"));
          // Add selected class to clicked option
          this.classList.add("selected");
          // Update profile image
          profileImg.src = this.src;
          // Save to localStorage
          localStorage.setItem("profileImage", this.src);
          // Hide popup
          profilePopup.style.display = "none";
          // Clear any existing timeout
          if (popupTimeout) {
              clearTimeout(popupTimeout);
          }
      });
  });

  // Close popup when clicking outside
  profilePopup.addEventListener("click", function(e) {
      if (e.target === profilePopup) {
          profilePopup.style.display = "none";
          if (popupTimeout) {
              clearTimeout(popupTimeout);
          }
      }
  });

  // Handle mouse enter/leave for popup
  profilePopup.addEventListener("mouseenter", function() {
      if (popupTimeout) {
          clearTimeout(popupTimeout);
      }
  });

  profilePopup.addEventListener("mouseleave", function() {
      startAutoHideTimer();
  });
});