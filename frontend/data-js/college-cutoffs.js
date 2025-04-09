 // Get college name from URL
 const urlParams = new URLSearchParams(window.location.search);
 const collegeName = urlParams.get('college');

 // Sample cutoff data (you can replace this with actual data)
 const cutoffData = {
     'vignan': {
         '2023': [
             { branch: 'Computer Science Engineering', category: 'OC', openingRank: '1500', closingRank: '15000' },
             { branch: 'Computer Science Engineering', category: 'BC', openingRank: '2500', closingRank: '20000' },
             { branch: 'Computer Science & Business Systems', category: 'OC', openingRank: '2000', closingRank: '18000' },
             { branch: 'Computer Science & Engineering (AI & ML)', category: 'OC', openingRank: '1800', closingRank: '16000' },
             { branch: 'Computer Science & Engineering (Data Science)', category: 'OC', openingRank: '1900', closingRank: '17000' },
             { branch: 'Information Technology', category: 'OC', openingRank: '2000', closingRank: '18000' },
             { branch: 'Electronics & Communication Engineering', category: 'OC', openingRank: '3000', closingRank: '25000' },
             { branch: 'Electronics & Communication Engineering', category: 'BC', openingRank: '3500', closingRank: '28000' },
             { branch: 'Electronics & Computer Engineering', category: 'OC', openingRank: '3200', closingRank: '26000' },
             { branch: 'Electronics & Instrumentation Engineering', category: 'OC', openingRank: '4000', closingRank: '30000' },
             { branch: 'Electrical & Electronics Engineering', category: 'OC', openingRank: '3500', closingRank: '28000' },
             { branch: 'Electrical & Electronics Engineering', category: 'BC', openingRank: '4000', closingRank: '32000' },
             { branch: 'Mechanical Engineering', category: 'OC', openingRank: '5000', closingRank: '35000' },
             { branch: 'Mechanical Engineering', category: 'BC', openingRank: '5500', closingRank: '38000' },
             { branch: 'Civil Engineering', category: 'OC', openingRank: '6000', closingRank: '40000' },
             { branch: 'Civil Engineering', category: 'BC', openingRank: '6500', closingRank: '42000' },
             { branch: 'Chemical Engineering', category: 'OC', openingRank: '5500', closingRank: '37000' },
             { branch: 'Metallurgical Engineering', category: 'OC', openingRank: '7000', closingRank: '45000' },
             { branch: 'Production Engineering', category: 'OC', openingRank: '6500', closingRank: '43000' },
             { branch: 'Aerospace Engineering', category: 'OC', openingRank: '4500', closingRank: '33000' }
         ],
         '2022': [
             { branch: 'Computer Science Engineering', category: 'OC', openingRank: '1800', closingRank: '16000' },
             { branch: 'Computer Science & Business Systems', category: 'OC', openingRank: '2200', closingRank: '19000' },
             { branch: 'Computer Science & Engineering (AI & ML)', category: 'OC', openingRank: '2000', closingRank: '17000' },
             { branch: 'Computer Science & Engineering (Data Science)', category: 'OC', openingRank: '2100', closingRank: '18000' },
             { branch: 'Information Technology', category: 'OC', openingRank: '2200', closingRank: '19000' },
             { branch: 'Electronics & Communication Engineering', category: 'OC', openingRank: '3500', closingRank: '27000' },
             { branch: 'Electronics & Computer Engineering', category: 'OC', openingRank: '3700', closingRank: '29000' },
             { branch: 'Electronics & Instrumentation Engineering', category: 'OC', openingRank: '4500', closingRank: '32000' },
             { branch: 'Electrical & Electronics Engineering', category: 'OC', openingRank: '4000', closingRank: '30000' },
             { branch: 'Mechanical Engineering', category: 'OC', openingRank: '5500', closingRank: '37000' },
             { branch: 'Civil Engineering', category: 'OC', openingRank: '6500', closingRank: '42000' },
             { branch: 'Chemical Engineering', category: 'OC', openingRank: '6000', closingRank: '39000' },
             { branch: 'Metallurgical Engineering', category: 'OC', openingRank: '7500', closingRank: '47000' },
             { branch: 'Production Engineering', category: 'OC', openingRank: '7000', closingRank: '45000' },
             { branch: 'Aerospace Engineering', category: 'OC', openingRank: '5000', closingRank: '35000' }
         ]
     },
     'anits': {
         '2023': [
             { branch: 'Computer Science Engineering', category: 'OC', openingRank: '1200', closingRank: '12000' },
             { branch: 'Computer Science & Business Systems', category: 'OC', openingRank: '1500', closingRank: '14000' },
             { branch: 'Computer Science & Engineering (AI & ML)', category: 'OC', openingRank: '1300', closingRank: '13000' },
             { branch: 'Information Technology', category: 'OC', openingRank: '1600', closingRank: '15000' },
             { branch: 'Electronics & Communication Engineering', category: 'OC', openingRank: '2500', closingRank: '20000' },
             { branch: 'Electronics & Computer Engineering', category: 'OC', openingRank: '2700', closingRank: '22000' },
             { branch: 'Electrical & Electronics Engineering', category: 'OC', openingRank: '3000', closingRank: '25000' },
             { branch: 'Mechanical Engineering', category: 'OC', openingRank: '4000', closingRank: '30000' },
             { branch: 'Civil Engineering', category: 'OC', openingRank: '4500', closingRank: '35000' },
             { branch: 'Chemical Engineering', category: 'OC', openingRank: '5000', closingRank: '38000' }
         ]
     },
     'gvp': {
         '2023': [
             { branch: 'Computer Science Engineering', category: 'OC', openingRank: '1400', closingRank: '13000' },
             { branch: 'Computer Science & Business Systems', category: 'OC', openingRank: '1700', closingRank: '16000' },
             { branch: 'Computer Science & Engineering (AI & ML)', category: 'OC', openingRank: '1500', closingRank: '14000' },
             { branch: 'Information Technology', category: 'OC', openingRank: '1800', closingRank: '17000' },
             { branch: 'Electronics & Communication Engineering', category: 'OC', openingRank: '2800', closingRank: '23000' },
             { branch: 'Electronics & Computer Engineering', category: 'OC', openingRank: '3000', closingRank: '25000' },
             { branch: 'Electrical & Electronics Engineering', category: 'OC', openingRank: '3200', closingRank: '27000' },
             { branch: 'Mechanical Engineering', category: 'OC', openingRank: '4500', closingRank: '35000' },
             { branch: 'Civil Engineering', category: 'OC', openingRank: '5000', closingRank: '40000' },
             { branch: 'Chemical Engineering', category: 'OC', openingRank: '5500', closingRank: '45000' }
         ]
     }
 };