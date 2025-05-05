// College data for each state
const collegeData = {
    "Andhra Pradesh": {
        private: {
            byReviews: [
            {
                name: "KL University",
                location: "Guntur",
                image: "colleges/klu.jpg",
                type: "Private",
                stats: {
                ranking: "NIRF Rank: 51",
                placement: "92% Placement"
                },
                rating: 4.5,
                reviewCount: 2500,
                features: ["NBA Accredited", "Smart Campus", "Research Hub"],
                website: "https://www.kluniversity.in/"
            },
            {
                name: "Vishnu Institute of Technology (VIT)",
                location: "Bhimavaram",
                image: "colleges/vit.jpg",
                type: "Private",
                stats: {
                ranking: "NAAC A+",
                placement: "90% Placement"
                },
                rating: 4.9,
                reviewCount: 163,
                features: ["Top Infrastructure", "Industry Connect", "Student-Centric Learning"],
                website: "https://www.svit.ac.in/"
            },
            {
                name: "Srinivasa Ramanujan Institute of Technology (SRIT)",
                location: "Anantapur",
                image: "colleges/srit.jpg",
                type: "Private",
                stats: {
                ranking: "NAAC Accredited",
                placement: "85% Placement"
                },
                rating: 4.8,
                reviewCount: 138,
                features: ["Research Focused", "Mentorship Programs", "Active Clubs"],
                website: "http://srit.ac.in/"
            },
            {
                name: "GITAM (Deemed to be University)",
                location: "Visakhapatnam",
                image: "colleges/gitam.jpg",
                type: "Private",
                stats: {
                ranking: "NIRF Rank: 101-150",
                placement: "80% Placement"
                },
                rating: 4.0,
                reviewCount: 186,
                features: ["Lush Campus", "Holistic Development", "Strong Alumni"],
                website: "https://www.gitam.edu/"
            },
            {
                name: "VIT-AP University",
                location: "Amaravati",
                image: "colleges/vitap.jpg",
                type: "Private",
                stats: {
                ranking: "Emerging Top University",
                placement: "80% Placement"
                },
                rating: 4.2,
                reviewCount: 59,
                features: ["International Ties", "Modern Curriculum", "Innovation Labs"],
                website: "https://vitap.ac.in/"
            },
            {
                name: "SRM University, Amaravati",
                location: "Amaravati",
                image: "colleges/srm.jpg",
                type: "Private",
                stats: {
                ranking: "Well-Recognized Institution",
                placement: "85% Placement"
                },
                rating: 4.1,
                reviewCount: 365,
                features: ["Interdisciplinary Programs", "Global Exposure", "Modern Facilities"],
                website: "https://srmap.edu.in/"
            },
            {
                name: "Andhra Loyola Institute of Engineering and Technology (ALIET)",
                location: "Vijayawada",
                image: "colleges/aliet.jpg",
                type: "Private",
                stats: {
                ranking: "Jesuit Institution",
                placement: "88% Placement"
                },
                rating: 4.7,
                reviewCount: 49,
                features: ["Moral Values", "Academic Rigor", "Supportive Environment"],
                website: "https://www.aliet.ac.in/"
            },
            {
                name: "Vignan's Foundation for Science, Technology & Research",
                location: "Guntur",
                image: "colleges/vignan-foundation.jpg",
                type: "Private",
                stats: {
                ranking: "NIRF Rank: 95",
                placement: "85% Placement"
                },
                rating: 3.9,
                reviewCount: 782,
                features: ["Research Emphasis", "Skill Development", "Decent Placements"],
                website: "https://www.vignan.ac.in/"
            },
            {
                name: "Mohan Babu University",
                location: "Tirupati",
                image: "colleges/mbu.jpg",
                type: "Private",
                stats: {
                ranking: "New & Promising University",
                placement: "85% Placement"
                },
                rating: 4.6,
                reviewCount: 518,
                features: ["Skill Focused", "Modern Infrastructure", "Industry Curriculum"],
                website: "https://www.mbu.asia/"
            },
            {
                name: "Aditya College of Engineering and Technology",
                location: "Surampalem",
                image: "colleges/aditya.jpg",
                type: "Private",
                stats: {
                ranking: "Affiliated to JNTUK",
                placement: "85% Placement"
                },
                rating: 4.6,
                reviewCount: 103,
                features: ["Modern Labs", "Active Placement Cell", "Hostel Facilities"],
                website: "https://acet.ac.in/"
            }
            ],
            byRanking: [
                {
                  name: "KL University",
                  location: "Guntur",
                  image: "colleges/klu.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 51",
                    placement: "92% Placement"
                  },
                  rating: 4.5,
                  reviewCount: 2500,
                  features: ["NBA Accredited", "Smart Campus", "Research Hub"],
                  website: "https://www.kluniversity.in/"
                },
                {
                  name: "Vignan's Foundation for Science, Technology and Research (Deemed to be University)",
                  location: "Vadlamudi, Guntur",
                  image: "colleges/vignan.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 91",
                    placement: "Good Placement Support"
                  },
                  rating: 4.4,
                  reviewCount: 1500,
                  features: ["Industry Collaborations", "Research Focused", "Good Placement Records"],
                  website: "https://www.vignan.ac.in/"
                },
                {
                  name: "GITAM (Gandhi Institute of Technology and Management) University",
                  location: "Visakhapatnam",
                  image: "colleges/gitam.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 95",
                    placement: "Above Average Placement"
                  },
                  rating: 4.2,
                  reviewCount: 1200,
                  features: ["Reputed Institution", "Strong Alumni Network", "Good Research Opportunities"],
                  website: "https://www.gitam.edu/"
                },
                {
                  name: "SRM University-AP",
                  location: "Amaravati",
                  image: "colleges/srm.jpg",
                  type: "Private",
                  stats: {
                    ranking: "Not Ranked",
                    placement: "Good Placement Records"
                  },
                  rating: 4.5,
                  reviewCount: 800,
                  features: ["International Collaborations", "Modern Infrastructure", "Research Initiatives"],
                  website: "https://www.srmist.edu.in/"
                },
                {
                  name: "Amity University, Amaravati",
                  location: "Amaravati",
                  image: "colleges/amity_ap.jpg",
                  type: "Private",
                  stats: {
                    ranking: "Not Ranked",
                    placement: "Industry Linkages"
                  },
                  rating: 4.3,
                  reviewCount: 900,
                  features: ["Global Exposure", "Industry Collaborations", "State-of-the-art Facilities"],
                  website: "https://www.amity.edu/amaravati/"
                },
                {
                  name: "Sree Vidyanikethan Engineering College",
                  location: "Tirupati",
                  image: "colleges/sree_vidyanikethan.jpg",
                  type: "Private",
                  stats: {
                    ranking: "Not Ranked",
                    placement: "Good Placement Support"
                  },
                  rating: 4.1,
                  reviewCount: 700,
                  features: ["Affordable Education", "Experienced Faculty", "Strong Industry Connections"],
                  website: "https://www.sreevidyanikethan.edu/"
                },
                {
                  name: "Sagi Ramakrishnam Raju Engineering College (SRKR)",
                  location: "Bhimavaram",
                  image: "colleges/srkr.jpg",
                  type: "Private",
                  stats: {
                    ranking: "Not Ranked",
                    placement: "Good Infrastructure"
                  },
                  rating: 4.0,
                  reviewCount: 600,
                  features: ["Good Infrastructure", "Decent Placement Records", "Experienced Faculty"],
                  website: "https://www.srkr.ac.in/"
                },
                {
                  name: "Gayatri Vidya Parishad College of Engineering (GVPCE)",
                  location: "Visakhapatnam",
                  image: "colleges/gvpce.jpg",
                  type: "Private",
                  stats: {
                    ranking: "Not Ranked",
                    placement: "Above Average Placements"
                  },
                  rating: 4.3,
                  reviewCount: 1300,
                  features: ["Established Institution", "Strong Alumni Network", "Good Academic Curriculum"],
                  website: "https://www.gvpce.ac.in/"
                },
                {
                  name: "Aditya Engineering College",
                  location: "Surampalem",
                  image: "colleges/aditya.jpg",
                  type: "Private",
                  stats: {
                    ranking: "Not Ranked",
                    placement: "Decent Placement Support"
                  },
                  rating: 4.1,
                  reviewCount: 500,
                  features: ["Affordable Fees", "Experienced Faculty", "Good Campus Facilities"],
                  website: "https://www.aditya.ac.in/"
                }
              ]
        },
        government: {
            byReviews: [
              {
                name: "IIT Tirupati",
                location: "Tirupati",
                image: "colleges/iit_tirupati.jpg",
                type: "Government",
                stats: {
                  ranking: "NIRF Rank: 61",
                  placement: "Average Package: ₹15.54 LPA"
                },
                rating: 4.8,
                reviewCount: 200,
                features: ["Premier Institute", "Excellent Placements", "Research Opportunities"],
                website: "https://www.iittp.ac.in/"
              },
              {
                name: "Andhra University College of Engineering",
                location: "Visakhapatnam",
                image: "colleges/andhra_university.jpg",
                type: "Government",
                stats: {
                  ranking: "NIRF Rank: 90",
                  placement: "Median Package: ₹7.5 LPA"
                },
                rating: 4.7,
                reviewCount: 544,
                features: ["Historic Institution", "Diverse Programs", "Strong Alumni Network"],
                website: "https://www.andhrauniversity.edu.in/"
              },
              {
                name: "JNTU Kakinada",
                location: "Kakinada",
                image: "colleges/jntuk.jpg",
                type: "Government",
                stats: {
                  ranking: "NIRF Rank: 101–150",
                  placement: "Median Salary: ₹3.64 LPA"
                },
                rating: 4.5,
                reviewCount: 500,
                features: ["Technical Excellence", "Industry Collaborations", "Research Focus"],
                website: "https://www.jntuk.edu.in/"
              },
              {
                name: "Acharya Nagarjuna University",
                location: "Guntur",
                image: "colleges/anu.jpg",
                type: "Government",
                stats: {
                  ranking: "NIRF Rank: 59",
                  placement: "Decent Placement Support"
                },
                rating: 4.4,
                reviewCount: 594,
                features: ["Comprehensive Courses", "Experienced Faculty", "Research Facilities"],
                website: "https://www.nagarjunauniversity.ac.in/"
              },
              {
                name: "ANGRAU (Agricultural University)",
                location: "Guntur",
                image: "colleges/angrau.jpg",
                type: "Government",
                stats: {
                  ranking: "NIRF Rank: 101–150",
                  placement: "Specialized Agricultural Placements"
                },
                rating: 3.9,
                reviewCount: 56,
                features: ["Agricultural Research", "Extension Services", "Specialized Programs"],
                website: "https://angrau.ac.in/"
              },
              {
                name: "Sri Venkateswara University",
                location: "Tirupati",
                image: "colleges/svu.jpg",
                type: "Government",
                stats: {
                  ranking: "State Ranked",
                  placement: "Good for Postgraduates"
                },
                rating: 4.2,
                reviewCount: 400,
                features: ["Diverse Disciplines", "Research Opportunities", "Cultural Activities"],
                website: "https://svuniversity.edu.in/"
              },
              {
                name: "Dr. NTR University of Health Sciences",
                location: "Vijayawada",
                image: "colleges/ntruhs.jpg",
                type: "Government",
                stats: {
                  ranking: "Health Sciences Leader",
                  placement: "Clinical Training Opportunities"
                },
                rating: 4.5,
                reviewCount: 200,
                features: ["Medical Education", "Healthcare Research", "Clinical Training"],
                website: "http://ntruhs.ap.nic.in/"
              },
              {
                name: "Sri Padmavati Mahila Visvavidyalayam",
                location: "Tirupati",
                image: "colleges/spmvv.jpg",
                type: "Government",
                stats: {
                  ranking: "Women's University",
                  placement: "Good for Female Graduates"
                },
                rating: 4.3,
                reviewCount: 150,
                features: ["Women's Empowerment", "Safe Campus", "Supportive Learning"],
                website: "https://spmvv.ac.in/"
              },
              {
                name: "Adikavi Nannaya University",
                location: "Rajahmundry",
                image: "colleges/anu_raj.jpg",
                type: "Government",
                stats: {
                  ranking: "Emerging University",
                  placement: "Developing Placement Cell"
                },
                rating: 4.2,
                reviewCount: 54,
                features: ["Modern Curriculum", "Research Initiatives", "Student Support"],
                website: "https://aknu.edu.in/"
              },
              {
                name: "Government Degree College, Rajampet",
                location: "Rajampet",
                image: "colleges/rajampet.jpg",
                type: "Government",
                stats: {
                  ranking: "Local Leader",
                  placement: "Moderate Placements"
                },
                rating: 4.0,
                reviewCount: 100,
                features: ["Affordable Education", "Community Development", "Dedicated Faculty"],
                website: "http://gdcts.cgg.gov.in/rajampet.edu"
              }
            ],
           byRanking: [
          {
            name: "Andhra University College of Engineering",
            location: "Visakhapatnam",
            image: "colleges/andhra_university.jpg",
            type: "Government",
            stats: {
              ranking: "NIRF Rank: 101-150",
              placement: "Good Placement Support"
            },
            rating: 4.4,
            reviewCount: 3200,
            features: ["Oldest Engineering College", "Strong Alumni Network", "UGC Recognized"],
            website: "https://www.andhrauniversity.edu.in/"
          },
          {
            name: "Jawaharlal Nehru Technological University Kakinada (JNTUK)",
            location: "Kakinada",
            image: "colleges/jntuk.jpg",
            type: "Government",
            stats: {
              ranking: "NIRF Rank: 101-150",
              placement: "Decent Placement Support"
            },
            rating: 4.3,
            reviewCount: 2900,
            features: ["Renowned Technical University", "Research Opportunities", "Government Funded"],
            website: "https://www.jntuk.edu.in/"
          },
          {
            name: "Sri Venkateswara University College of Engineering",
            location: "Tirupati",
            image: "colleges/svu.jpg",
            type: "Government",
            stats: {
              ranking: "NIRF Rank: 151-200",
              placement: "Average Placement"
            },
            rating: 4.2,
            reviewCount: 2100,
            features: ["AICTE Approved", "Old & Reputed", "Good Faculty"],
            website: "https://www.svuniversity.edu.in/"
          },
          {
            name: "National Institute of Technology Andhra Pradesh (NIT-AP)",
            location: "Tadepalligudem",
            image: "colleges/nit_ap.jpg",
            type: "Government",
            stats: {
              ranking: "NIRF Rank: 92 (Engineering)",
              placement: "85% Placement"
            },
            rating: 4.5,
            reviewCount: 1800,
            features: ["Institute of National Importance", "Modern Campus", "Strong Academics"],
            website: "https://www.nitandhra.ac.in/"
          },
          {
            name: "Indian Institute of Information Technology Sri City (IIIT Sri City)",
            location: "Chittoor District",
            image: "colleges/iiit_sricity.jpg",
            type: "Government (PPP)",
            stats: {
              ranking: "NIRF Rank: 101-150",
              placement: "Strong Placement in CS/IT"
            },
            rating: 4.4,
            reviewCount: 1300,
            features: ["Focus on IT", "International Collaborations", "Modern Infrastructure"],
            website: "https://www.iiits.ac.in/"
          },
          {
            name: "Acharya Nagarjuna University (ANU)",
            location: "Guntur",
            image: "colleges/anu.jpg",
            type: "Government",
            stats: {
              ranking: "NIRF Rank: 151-200",
              placement: "Moderate Placement Support"
            },
            rating: 4.1,
            reviewCount: 2200,
            features: ["Wide Range of Courses", "State University", "Recognized by UGC"],
            website: "https://www.anu.ac.in/"
          },
          {
            name: "Dr. B.R. Ambedkar University Srikakulam",
            location: "Srikakulam",
            image: "colleges/br_ambedkar_sklm.jpg",
            type: "Government",
            stats: {
              ranking: "Not Ranked",
              placement: "Emerging Institution"
            },
            rating: 4.0,
            reviewCount: 700,
            features: ["Growing Infrastructure", "New Academic Programs", "Affordable"],
            website: "https://www.brau.edu.in/"
          },
          {
            name: "Yogi Vemana University",
            location: "Kadapa",
            image: "colleges/yvu.jpg",
            type: "Government",
            stats: {
              ranking: "Not Ranked",
              placement: "Developing Placement Cell"
            },
            rating: 3.9,
            reviewCount: 600,
            features: ["State University", "Offers Arts & Sciences", "Affordable Education"],
            website: "https://www.yogivemanauniversity.ac.in/"
          },
          {
            name: "Dr. YSR Horticultural University",
            location: "Venkataramannagudem",
            image: "colleges/ysr_hort.jpg",
            type: "Government",
            stats: {
              ranking: "Not Ranked",
              placement: "Domain-specific Placements"
            },
            rating: 4.1,
            reviewCount: 500,
            features: ["Agriculture Focus", "Govt Funded", "Well-equipped Labs"],
            website: "https://www.drysrhu.edu.in/"
          },
          {
            name: "Sri Padmavati Mahila Visvavidyalayam (Women's University)",
            location: "Tirupati",
            image: "colleges/spmvv.jpg",
            type: "Government",
            stats: {
              ranking: "NIRF Rank: 151-200",
              placement: "Supportive for Women",
            },
            rating: 4.2,
            reviewCount: 850,
            features: ["Women-Focused", "Good Campus Facilities", "Government Funded"],
            website: "https://www.spmvv.ac.in/"
          }
        ]
        }
    },

        "Telangana": {
          private: {
            byReviews : [
              {
                name: "International Institute of Information Technology (IIIT-H)",
                location: "Hyderabad",
                image: "colleges/iiit_h.jpg",
                type: "Private",
                stats: {
                  ranking: "NIRF Rank: 55",
                  placement: "Average Package: ₹16.65 LPA"
                },
                rating: 4.8,
                reviewCount: 1500,
                features: ["Research Oriented", "Startup Culture", "Excellent Placements"],
                website: "https://www.iiit.ac.in/"
              },
              {
                name: "Birla Institute of Technology and Science (BITS Pilani) – Hyderabad Campus",
                location: "Hyderabad",
                image: "colleges/bits_hyd.jpg",
                type: "Private",
                stats: {
                  ranking: "NIRF Rank: 25 (Overall BITS)",
                  placement: "Average Package: ₹14 LPA"
                },
                rating: 4.7,
                reviewCount: 1200,
                features: ["Global Alumni", "Excellent Faculty", "Innovative Curriculum"],
                website: "https://www.bits-pilani.ac.in/Hyderabad/"
              },
              {
                name: "Vasavi College of Engineering",
                location: "Hyderabad",
                image: "colleges/vasavi.jpg",
                type: "Private",
                stats: {
                  ranking: "NAAC A+",
                  placement: "90% Placement"
                },
                rating: 4.6,
                reviewCount: 1100,
                features: ["Strong Academics", "Experienced Faculty", "Top Recruiters"],
                website: "https://www.vce.ac.in/"
              },
              {
                name: "Chaitanya Bharathi Institute of Technology (CBIT)",
                location: "Hyderabad",
                image: "colleges/cbit.jpg",
                type: "Private",
                stats: {
                  ranking: "NAAC A++",
                  placement: "88% Placement"
                },
                rating: 4.5,
                reviewCount: 1150,
                features: ["Reputed Institution", "Student-Centric Culture", "Placement Focused"],
                website: "https://www.cbit.ac.in/"
              },
              {
                name: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
                location: "Hyderabad",
                image: "colleges/griet.jpg",
                type: "Private",
                stats: {
                  ranking: "NAAC A+",
                  placement: "85% Placement"
                },
                rating: 4.4,
                reviewCount: 950,
                features: ["Good Infrastructure", "Effective Training", "Project-Based Learning"],
                website: "https://www.griet.ac.in/"
              },
              {
                name: "CVR College of Engineering",
                location: "Hyderabad",
                image: "colleges/cvr.jpg",
                type: "Private",
                stats: {
                  ranking: "NAAC Accredited",
                  placement: "80% Placement"
                },
                rating: 4.3,
                reviewCount: 700,
                features: ["Affordable Fees", "Discipline Focused", "Quality Labs"],
                website: "https://www.cvr.ac.in/"
              },
              {
                name: "Malla Reddy Engineering College (Autonomous)",
                location: "Hyderabad",
                image: "colleges/mrec.jpg",
                type: "Private",
                stats: {
                  ranking: "NAAC A++",
                  placement: "85% Placement"
                },
                rating: 4.2,
                reviewCount: 800,
                features: ["Modern Infrastructure", "Skill Training", "Large Campus"],
                website: "https://www.mrec.ac.in/"
              },
              {
                name: "nstitute of Aeronautical Engineering (IAREI)",
                location: "Dundigal, Hyderabad",
                image: "colleges/iare.jpg",
                type: "Private",
                stats: {
                  ranking: "NAAC A",
                  placement: "80% Placement"
                },
                rating: 4.2,
                reviewCount: 600,
                features: ["Aerospace Focus", "Incubation Support", "Student Clubs"],
                website: "https://www.iare.ac.in/"
              },
              {
                name: "VNR Vignana Jyothi Institute of Engineering and Technology",
                location: "Hyderabad",
                image: "colleges/vnr.jpg",
                type: "Private",
                stats: {
                  ranking: "NAAC A++",
                  placement: "88% Placement"
                },
                rating: 4.3,
                reviewCount: 900,
                features: ["Outcome-Based Education", "Active Student Life", "Top Placements"],
                website: "https://www.vnrvjiet.ac.in/"
              },
              {
                name: "CMR College of Engineering & Technology",
                location: "Hyderabad",
                image: "colleges/cmr.jpg",
                type: "Private",
                stats: {
                  ranking: "NAAC A",
                  placement: "80% Placement"
                },
                rating: 4.1,
                reviewCount: 650,
                features: ["Good Teaching", "Mentoring System", "Events & Fests"],
                website: "https://cmrcet.ac.in/"
              }
            ],
            byRanking: [
                {
                  name: "BITS Pilani – Hyderabad Campus",
                  location: "Hyderabad",
                  image: "colleges/bits_hyd.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 25",
                    placement: "Average Package: ₹12 LPA"
                  },
                  rating: 4.7,
                  reviewCount: 450,
                  features: ["Flexible Academics", "Entrepreneurship Focus", "International Exposure"],
                  website: "https://www.bits-pilani.ac.in/hyderabad/"
                },
                {
                  name: "IIIT Hyderabad",
                  location: "Hyderabad",
                  image: "colleges/iiit_h.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 47",
                    placement: "Average Package: ₹16 LPA"
                  },
                  rating: 4.8,
                  reviewCount: 500,
                  features: ["Top in AI & CSE", "Research Driven", "Industry Tie-Ups"],
                  website: "https://www.iiit.ac.in"
                },
                {
                  name: "ICFAI Foundation for Higher Education (IFHE)",
                  location: "Hyderabad",
                  image: "colleges/icfai.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 32 (Law/Management)",
                    placement: "Average Package: ₹7 LPA"
                  },
                  rating: 4.5,
                  reviewCount: 400,
                  features: ["Case-Based Learning", "Industry Focus", "Law & Management Excellence"],
                  website: "https://www.ifheindia.org"
                },
                {
                  name: "Chaitanya Bharathi Institute of Technology (CBIT)",
                  location: "Hyderabad",
                  image: "colleges/cbit.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 124",
                    placement: "Average Package: ₹5 LPA"
                  },
                  rating: 4.4,
                  reviewCount: 350,
                  features: ["Reputed Engineering College", "Vibrant Campus Life", "Placement Oriented"],
                  website: "https://www.cbit.ac.in"
                },
                {
                  name: "Vasavi College of Engineering",
                  location: "Hyderabad",
                  image: "colleges/vasavi.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 187",
                    placement: "Average Package: ₹4.5 LPA"
                  },
                  rating: 4.3,
                  reviewCount: 300,
                  features: ["Strong Academics", "High Student Satisfaction", "Good Faculty"],
                  website: "https://www.vce.ac.in"
                },
                {
                  name: "CVR College of Engineering",
                  location: "Hyderabad",
                  image: "colleges/cvr.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 141",
                    placement: "Average Package: ₹4 LPA"
                  },
                  rating: 4.2,
                  reviewCount: 250,
                  features: ["Autonomous Status", "Tech Labs", "Industry MoUs"],
                  website: "https://www.cvr.ac.in"
                },
                {
                  name: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
                  location: "Hyderabad",
                  image: "colleges/griet.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF Rank: 141",
                    placement: "Average Package: ₹4.2 LPA"
                  },
                  rating: 4.2,
                  reviewCount: 240,
                  features: ["Large Campus", "Experienced Faculty", "Student Activities"],
                  website: "https://www.griet.ac.in"
                },
                {
                  name: "Mahatma Gandhi Institute of Technology (MGIT)",
                  location: "Hyderabad",
                  image: "colleges/mgit.jpg",
                  type: "Private",
                  stats: {
                    ranking: "NIRF 151–200 Band",
                    placement: "Average Package: ₹3.8 LPA"
                  },
                  rating: 4.1,
                  reviewCount: 230,
                  features: ["Campus Environment", "NAAC Accredited", "Placement Training"],
                  website: "https://mgit.ac.in"
                },
                {
                  name: "Anurag University",
                  location: "Hyderabad",
                  image: "colleges/anurag.jpg",
                  type: "Private",
                  stats: {
                    ranking: "Emerging in NIRF",
                    placement: "Average Package: ₹3.5 LPA"
                  },
                  rating: 4.1,
                  reviewCount: 200,
                  features: ["Multidisciplinary Campus", "R&D Focus", "Modern Facilities"],
                  website: "https://anurag.edu.in"
                },
                {
                  name: "Woxsen University",
                  location: "Hyderabad",
                  image: "colleges/woxsen.jpg",
                  type: "Private",
                  stats: {
                    ranking: "QS Asia Ranked",
                    placement: "Strong Industry Connect"
                  },
                  rating: 4.6,
                  reviewCount: 300,
                  features: ["Global Tie-Ups", "FinTech Lab", "Business & Design Focus"],
                  website: "https://woxsen.edu.in"
                }
              ]
            },
            government: {
                byReviews: [
                  {
                    name: "Indian Institute of Technology (IIT) Hyderabad",
                    location: "Hyderabad",
                    image: "colleges/iith.jpg",
                    type: "Government",
                    stats: {
                      ranking: "NIRF Rank: 8",
                      placement: "Average Package: ₹15 LPA"
                    },
                    rating: 4.9,
                    reviewCount: 1500,
                    features: ["Premier Institute", "Excellent Placements", "Research Driven"],
                    website: "https://www.iith.ac.in"
                  },
                  {
                    name: "University of Hyderabad (UoH)",
                    location: "Hyderabad",
                    image: "colleges/uoh.jpg",
                    type: "Government",
                    stats: {
                      ranking: "NIRF Rank: 10",
                      placement: "Average Package: ₹7 LPA"
                    },
                    rating: 4.8,
                    reviewCount: 1400,
                    features: ["Research Focus", "Diverse Programs", "Strong Alumni Network"],
                    website: "https://www.uohyd.ac.in"
                  },
                  {
                    name: "Osmania University",
                    location: "Hyderabad",
                    image: "colleges/osmania.jpg",
                    type: "Government",
                    stats: {
                      ranking: "NIRF Rank: 36",
                      placement: "Average Package: ₹5 LPA"
                    },
                    rating: 4.7,
                    reviewCount: 1300,
                    features: ["Historic Institution", "Well-Ranked", "Cultural Hub"],
                    website: "https://www.osmania.ac.in"
                  },
                  {
                    name: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
                    location: "Hyderabad",
                    image: "colleges/jntuh.jpg",
                    type: "Government",
                    stats: {
                      ranking: "NIRF Rank: 76",
                      placement: "Median Salary: ₹4.5 LPA"
                    },
                    rating: 4.6,
                    reviewCount: 1000,
                    features: ["Technical Excellence", "Industry Collaborations", "Academic Rigor"],
                    website: "https://jntuh.ac.in"
                  },
                  {
                    name: "Nizam's Institute of Medical Sciences (NIMS)",
                    location: "Hyderabad",
                    image: "colleges/nims.jpg",
                    type: "Government",
                    stats: {
                      ranking: "Top Medical Institute",
                      placement: "Clinical Practice & PG Opportunities"
                    },
                    rating: 4.5,
                    reviewCount: 800,
                    features: ["Healthcare Leader", "Specialized Medical Programs", "Hospital Campus"],
                    website: "https://www.nims.edu.in"
                  },
                  {
                    name: "Kakatiya University",
                    location: "Warangal",
                    image: "colleges/kakatiya.jpg",
                    type: "Government",
                    stats: {
                      ranking: "NIRF Ranked",
                      placement: "Good for PG Programs"
                    },
                    rating: 4.4,
                    reviewCount: 600,
                    features: ["Experienced Faculty", "Strong Regional Impact", "Affordable Fees"],
                    website: "https://kakatiya.ac.in"
                  },
                  {
                    name: "Telangana University",
                    location: "Nizamabad",
                    image: "colleges/telangana_university.jpg",
                    type: "Government",
                    stats: {
                      ranking: "Emerging University",
                      placement: "Developing Placement Cell"
                    },
                    rating: 4.2,
                    reviewCount: 400,
                    features: ["Modern Curriculum", "Rural Outreach", "Faculty Support"],
                    website: "https://www.telanganauniversity.ac.in"
                  },
                  {
                    name: "Mahatma Gandhi University, Nalgonda",
                    location: "Nalgonda",
                    image: "colleges/mgu_n.jpg",
                    type: "Government",
                    stats: {
                      ranking: "State Accredited",
                      placement: "Developing Academic Infrastructure"
                    },
                    rating: 4.1,
                    reviewCount: 350,
                    features: ["Emerging Campus", "Postgraduate Focus", "Affordable Education"],
                    website: "https://mguniversity.ac.in"
                  },
                  {
                    name: "Palamuru University",
                    location: "Mahbubnagar",
                    image: "colleges/palamuru.jpg",
                    type: "Government",
                    stats: {
                      ranking: "New Regional University",
                      placement: "Improving Opportunities"
                    },
                    rating: 4.0,
                    reviewCount: 300,
                    features: ["Affordable Programs", "Faculty Guidance", "Expanding Infrastructure"],
                    website: "https://palamuruuniversity.com"
                  }
                ]
             },
             byRanking: [
                {
                  name: "Indian Institute of Technology (IIT) Hyderabad",
                  location: "Hyderabad",
                  image: "colleges/iith.jpg",
                  type: "Government",
                  stats: {
                    ranking: "NIRF Rank: 8",
                    placement: "Average Package: ₹15 LPA"
                  },
                  rating: 4.9,
                  reviewCount: 1500,
                  features: ["Premier Institute", "World-Class Research", "Excellent Placements"],
                  website: "https://www.iith.ac.in"
                },
                {
                  name: "University of Hyderabad (UoH)",
                  location: "Hyderabad",
                  image: "colleges/uoh.jpg",
                  type: "Government",
                  stats: {
                    ranking: "NIRF Rank: 10",
                    placement: "Average Package: ₹7 LPA"
                  },
                  rating: 4.8,
                  reviewCount: 1400,
                  features: ["Central University", "Strong Research Output", "Diverse Programs"],
                  website: "https://www.uohyd.ac.in"
                },
                {
                  name: "Osmania University",
                  location: "Hyderabad",
                  image: "colleges/osmania.jpg",
                  type: "Government",
                  stats: {
                    ranking: "NIRF Rank: 36",
                    placement: "Average Package: ₹5 LPA"
                  },
                  rating: 4.7,
                  reviewCount: 1300,
                  features: ["State University", "Legacy Campus", "NAAC A+ Accreditation"],
                  website: "https://www.osmania.ac.in"
                },
                {
                  name: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
                  location: "Hyderabad",
                  image: "colleges/jntuh.jpg",
                  type: "Government",
                  stats: {
                    ranking: "NIRF Rank: 76",
                    placement: "Median Salary: ₹4.5 LPA"
                  },
                  rating: 4.6,
                  reviewCount: 1000,
                  features: ["Top Technical University", "Autonomous Colleges Network", "Tech Incubation Support"],
                  website: "https://jntuh.ac.in"
                },
                {
                  name: "Kakatiya University",
                  location: "Warangal",
                  image: "colleges/kakatiya.jpg",
                  type: "Government",
                  stats: {
                    ranking: "NIRF 101–150 Band",
                    placement: "Good for PG Programs"
                  },
                  rating: 4.4,
                  reviewCount: 600,
                  features: ["Old University", "Affordable Programs", "Good Research in Humanities"],
                  website: "https://kakatiya.ac.in"
                },
                {
                  name: "PJTSAU (Professor Jayashankar Telangana State Agricultural University)",
                  location: "Hyderabad",
                  image: "colleges/pjtsau.jpg",
                  type: "Government",
                  stats: {
                    ranking: "ICAR Recognized",
                    placement: "Specialized Agricultural Careers"
                  },
                  rating: 4.3,
                  reviewCount: 450,
                  features: ["Agri-Research Focus", "Field-Based Learning", "Extension Activities"],
                  website: "https://pjtsau.edu.in"
                },
                {
                  name: "Nizam's Institute of Medical Sciences (NIMS)",
                  location: "Hyderabad",
                  image: "colleges/nims.jpg",
                  type: "Government",
                  stats: {
                    ranking: "Medical Institute of Repute",
                    placement: "MBBS + PG Medical Practice"
                  },
                  rating: 4.5,
                  reviewCount: 800,
                  features: ["Hospital Campus", "Research-Based Medical Education", "Govt Medical Practice"],
                  website: "https://www.nims.edu.in"
                },
                {
                  name: "Telangana University",
                  location: "Nizamabad",
                  image: "colleges/telangana_university.jpg",
                  type: "Government",
                  stats: {
                    ranking: "Emerging University",
                    placement: "Developing Infrastructure"
                  },
                  rating: 4.2,
                  reviewCount: 400,
                  features: ["New Programs", "Affordable Access", "NAAC Accredited"],
                  website: "https://www.telanganauniversity.ac.in"
                },
                {
                  name: "Mahatma Gandhi University, Nalgonda",
                  location: "Nalgonda",
                  image: "colleges/mgu_nalgonda.jpg",
                  type: "Government",
                  stats: {
                    ranking: "Developing",
                    placement: "Moderate for PG Programs"
                  },
                  rating: 4.1,
                  reviewCount: 350,
                  features: ["Emerging State University", "Strong PG Offerings", "NAAC Accreditation"],
                  website: "https://mguniversity.ac.in"
                },
                {
                  name: "Palamuru University",
                  location: "Mahbubnagar",
                  image: "colleges/palamuru.jpg",
                  type: "Government",
                  stats: {
                    ranking: "Developing Regional University",
                    placement: "Entry-Level Teaching and Admin Jobs"
                  },
                  rating: 4.0,
                  reviewCount: 300,
                  features: ["Faculty-Driven", "Affordable Education", "Growing Infrastructure"],
                  website: "https://palamuruuniversity.com"
                }
             ]       
       
        },

    "Karnataka": [
        {
            name: "RV College of Engineering",
            location: "Bangalore",
            image: "images/colleges/rvce.jpg",
            stats: {
                ranking: "NIRF Rank: 38",
                placement: "98% Placement"
            },
            features: ["Top Private College", "Research Excellence", "Industry Connect"]
        },
        {
            name: "BMS College of Engineering",
            location: "Bangalore",
            image: "images/colleges/bmsce.jpg",
            stats: {
                ranking: "NIRF Rank: 55",
                placement: "95% Placement"
            },
            features: ["Autonomous", "Innovation Hub", "Strong Industry Links"]
        },
        {
            name: "MS Ramaiah Institute of Technology",
            location: "Bangalore",
            image: "images/colleges/msrit.jpg",
            stats: {
                ranking: "NIRF Rank: 72",
                placement: "92% Placement"
            },
            features: ["Research Centers", "Modern Labs", "Global Partnerships"]
        }
    ],
    "Tamil Nadu": {
        private: {
            byReviews: [
                {
                    name: "Vellore Institute of Technology(VIT)",
                    location: "Vellore",
                    image: "colleges/vit_v.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 11",
                        placement: "95% Placement"
                    },
                    rating: 4.4,
                    reviewCount: 2500,
                    features: ["NAAC A++", "Research Excellence", "Flexible Circulum"],
                    website : "https://vit.ac.in/"
                    
                },
                {
                    name: "SRM Institute of Science and Technology",
                    location: "Chennai",
                    image: "colleges/srm_c.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 11",
                        placement: "90% Placement"
                    },
                    rating: 4.0,
                    reviewCount: 1800,
                    features: ["International Collaborations", "Modern Labs", "Industry Connect"],
                    website :"https://www.srmist.edu.in/"
                },
                {
                    name: "SASTRA University",
                    location: "Thanjavur",
                    image: "colleges/sastra.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 47",
                        placement: "87% Placement"
                    },
                    rating: 4.0,
                    reviewCount: 1500,
                    features: ["Global Exposure", "Research Focus", "Innovation Hub"],
                    website :"https://www.sastra.edu/"
                },
                {
                    name: "Sri Sivasubramaniya Nadar(SSN) college of engineering",
                    location: "Chennai",
                    image: "colleges/ssn.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 46",
                        placement: "88% Placement"
                    },
                    rating: 4.1,
                    reviewCount: 1500,
                    features: ["Global Exposure", "Research Focus", "Innovation Hub"],
                    website :"https://www.ssn.edu.in/college-of-engineering/"
                },
                {
                    name: "Sathyabama Institute of Science and Technology",
                    location: "chennai",
                    image: "colleges/satyabama.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 66",
                        placement: "93% Placement"
                    },
                    rating: 4.0,
                    reviewCount: 1500,
                    features: ["Global Exposure", "Research Focus", "Innovation Hub"],
                    website :"https://www.sathyabama.ac.in/"
                }
            ],
            byRanking: [
                {
                    name: "Kalasalinga Academy of Reaseach and Education",
                    location: "Virudhunagar",
                    image: "colleges/kare.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 50",
                        placement: "89% Placement"
                    },
                    rating: 4.2,
                    reviewCount: 2000,
                    features: ["NAAC A++ Grade", "Research Excellence", "Industry Partnerships"],
                    website: "https://www.kalasalingam.ac.in/"
                },
                {
                    name: "Amrita Vishwa Vidyapeetham",
                    location: "Coimbatore",
                    image: "colleges/avv_co.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 7",
                        placement: "92% Placement"
                    },
                    rating: 4.0,
                    reviewCount: 1000,
                    features: ["NAAC A++ Grade", "Research Excellence", "Industry Partnerships"],
                    website: "https://www.amrita.edu/"
                },
                {
                    name: "Rajalakshmi Engineering College",
                    location: "Chennai",
                    image: "colleges/rec_c.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 150",
                        placement: "74% Placement"
                    },
                    rating: 4.0,
                    reviewCount: 2000,
                    features: ["NAAC A++ Grade", "Research Excellence", "Industry Partnerships"],
                    website:"https://www.rajalakshmi.org/"
                },
                {
                    name: "vel tech Rangarajan",
                    location: "Chennai",
                    image: "colleges/veltec.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 86",
                        placement: "84% Placement"
                    },
                    rating: 4.4,
                    reviewCount: 1200,
                    features: ["NAAC A++ Grade", "Research Excellence", "Industry Partnerships"],
                    website :"https://www.veltech.edu.in/"
                },
                {
                    name: "PSG College of technology",
                    location: "Coimbatore",
                    image: "colleges/psgco.jpg",
                    type: "Private",
                    stats: {
                        ranking: "NIRF Rank: 67",
                        placement: "79.4% Placement"
                    },
                    rating: 4.3,
                    reviewCount: 2000,
                    features: ["NAAC A Grade", "Research Excellence", "Industry Partnerships"],
                    website :"https://www.psgtech.edu/"
                }
                
            ]
        },
        government: {
            byReviews: [
                {
                    name: "Anna University",
                    location: "Chennai",
                    image: "colleges/anna.jpg",
                    type: "Government",
                    stats: {
                        ranking: "NIRF Rank: 20",
                        placement: "95% Placement"
                    },
                    rating: 4.4,
                    reviewCount: 3500,
                    features: ["NAAC A+ Grade", "Research Excellence", "Industry Partnerships"],
                    website: "https://www.annauniv.edu/"
                },
                {
                    name: "NIT Tiruchirapalli",
                    location: "Tiruchirapalli",
                    image: "colleges/nit_trichy.jpg",
                    type: "Government",
                    stats: {
                        ranking: "NIRF Rank: 9",
                        placement: "94% Placement"
                    },
                    rating: 4.4,
                    reviewCount: 2800,
                    features: ["Academic Excellence", "Smart Campus", "research opportunity"],
                    website: "https://www.nitt.edu/"
                }
            ],
            byRanking: [
                {
                    name: "MIT Tamil Nadu",
                    location: "Tamil Nadu",
                    image: "colleges/mit_tn.jpg",
                    type: "Government",
                    stats: {
                        ranking: "NIRF Rank: 14",
                        placement: "80% Placement"
                    },
                    rating: 4.2,
                    reviewCount: 1200,
                    features: ["Premier Institute", "pioneering programs", "Reasearch and innovation"],
                    website: "https://www.mitindia.edu/"
                }
            ]
        }
    },
    "Maharashtra": [
        {
            name: "College of Engineering, Pune",
            location: "Pune",
            image: "images/colleges/coep.jpg",
            stats: {
                ranking: "NIRF Rank: 28",
                placement: "96% Placement"
            },
            features: ["Historic Institution", "Research Excellence", "Industry Connect"]
        },
        {
            name: "VJTI Mumbai",
            location: "Mumbai",
            image: "images/colleges/vjti.jpg",
            stats: {
                ranking: "NIRF Rank: 52",
                placement: "93% Placement"
            },
            features: ["Premier Institute", "Innovation Hub", "Strong Alumni"]
        },
        {
            name: "Sardar Patel Institute of Technology",
            location: "Mumbai",
            image: "images/colleges/spit.jpg",
            stats: {
                ranking: "NIRF Rank: 87",
                placement: "92% Placement"
            },
            features: ["Autonomous", "Modern Labs", "Industry Projects"]
        }
    ]
};

// Get state from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const state = urlParams.get('state');

// Create star rating HTML
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Create college card element
function createCollegeCard(college) {
    const card = document.createElement('div');
    card.className = 'college-card';
    
    card.innerHTML = `
        <img src="${college.image}" alt="${college.name}" class="college-image">
        <div class="college-content">
            <h3 class="college-name">${college.name}</h3>
            <div class="college-location">
                <i class="fas fa-map-marker-alt"></i>
                ${college.location}
            </div>
            <div class="rating-container">
                <div class="rating-stars">${getStarRating(college.rating)}</div>
                <span class="rating-value">${college.rating}</span>
                <span class="review-count">(${college.reviewCount} reviews)</span>
            </div>
            <div class="college-stats">
                <div class="stat-item">
                    <div class="stat-value">${college.stats.ranking}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${college.stats.placement}</div>
                </div>
            </div>
            <div class="college-features">
                ${college.features.map(feature => `
                    <span class="feature-tag">${feature}</span>
                `).join('')}
            </div>
            <div class="college-actions">
                <button class="college-btn primary-btn" ><a href="${college.website}" target="_blank" style="text-decoration: none;color: white;">View Details</a></button>
            </div>
        </div>
    `;
    
    return card;
}

// Update page content based on state
function updatePageContent() {
    if (state && collegeData[state]) {
        document.getElementById('state-title').textContent = `Top Engineering Colleges in ${state}`;
        document.getElementById('state-name').textContent = state;
        
        // Populate private colleges by reviews
        const privateReviewsRow = document.getElementById('private-reviews-row');
        collegeData[state].private.byReviews.forEach(college => {
            privateReviewsRow.appendChild(createCollegeCard(college));
        });
        
        // Populate government colleges by reviews
        const govtReviewsRow = document.getElementById('govt-reviews-row');
        collegeData[state].government.byReviews.forEach(college => {
            govtReviewsRow.appendChild(createCollegeCard(college));
        });
        
        // Populate private colleges by ranking
        const privateRankingRow = document.getElementById('private-ranking-row');
        collegeData[state].private.byRanking.forEach(college => {
            privateRankingRow.appendChild(createCollegeCard(college));
        });
        
        // Populate government colleges by ranking
        const govtRankingRow = document.getElementById('govt-ranking-row');
        collegeData[state].government.byRanking.forEach(college => {
            govtRankingRow.appendChild(createCollegeCard(college));
        });
        
        // Initialize scroll buttons
        initializeScrollButtons();
    } else {
        // Handle invalid state
        document.getElementById('state-title').textContent = 'State Not Found';
        document.getElementById('state-description').textContent = 'Please select a valid state from the home page.';
    }
}

// Initialize scroll buttons functionality
function initializeScrollButtons() {
    const scrollContainers = document.querySelectorAll('.colleges-row');
    const scrollButtons = document.querySelectorAll('.scroll-btn');
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const container = button.parentElement.querySelector('.colleges-row');
            const scrollAmount = container.offsetWidth;
            
            if (button.classList.contains('scroll-right')) {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    });
    
    // Show/hide scroll buttons based on scroll position
    scrollContainers.forEach(container => {
        container.addEventListener('scroll', () => {
            const parent = container.parentElement;
            const leftButton = parent.querySelector('.scroll-btn.scroll-left');
            const rightButton = parent.querySelector('.scroll-btn.scroll-right');
            
            if (leftButton) {
                leftButton.style.display = container.scrollLeft > 0 ? 'flex' : 'none';
            }
            if (rightButton) {
                rightButton.style.display = 
                    container.scrollLeft < (container.scrollWidth - container.offsetWidth) 
                    ? 'flex' : 'none';
            }
        });
        
        // Trigger initial scroll event
        container.dispatchEvent(new Event('scroll'));
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', updatePageContent); 