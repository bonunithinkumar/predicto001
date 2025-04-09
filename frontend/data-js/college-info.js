  
  // Get college name from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const collegeName = urlParams.get('college');
 
  
 // College data object with AI-generated image URLs
 const collegeData = {
  'vignan': {
      name: 'Vignan Institute of Information Technology',
      image: 'colleges-img/vignan.jpg',
      rating: '4.2/5',
      location: 'Visakhapatnam, Andhra Pradesh',
      info: `Vignan Institute of Information Technology (VIIT) is a premier engineering college established in 2002. 
            It is located in Visakhapatnam, Andhra Pradesh. The college offers various undergraduate and postgraduate 
            programs in engineering and technology. Key highlights include:
            <br><br>
            • NAAC 'A' Grade Accreditation<br>
            • NBA Accredited Programs<br>
            • State-of-the-art laboratories and infrastructure<br>
            • Strong industry connections and placement record<br>
            • Research-oriented faculty members<br>
            • Modern library facilities with digital resources`
  },
  'anits': {
      name: 'Anil Neerukonda Institute of Technology & Sciences',
      image: 'colleges-img/anits.jpg',
      rating: '4.5/5',
      location: 'Visakhapatnam, Andhra Pradesh',
      info: `ANITS is one of the premier engineering colleges in Andhra Pradesh. Established in 2001, 
            the institute offers various undergraduate and postgraduate programs. Notable features include:
            <br><br>
            • NAAC 'A+' Grade Accreditation<br>
            • Excellent placement record<br>
            • Modern research facilities<br>
            • Industry collaboration programs<br>
            • Advanced computing labs<br>
            • Skilled faculty members`
  },
  'gvp': {
      name: 'Gayatri Vidya Parishad College of Engineering',
      image: 'colleges-img/gvp.jpg',
      rating: '4.3/5',
      location: 'Visakhapatnam, Andhra Pradesh',
      info: `GVP is known for its excellence in engineering education since 1996. The college 
            provides quality technical education with strong emphasis on practical learning. Features include:
            <br><br>
            • NAAC 'A' Grade Accreditation<br>
            • Strong industry connections<br>
            • Modern infrastructure<br>
            • Experienced faculty<br>
            • Active placement cell<br>
            • Research facilities`
  },
  'raghu': {
      name: 'Raghu Engineering College',
      image: 'colleges-img/raghu.jpg',
      rating: '4.0/5',
      location: 'Visakhapatnam, Andhra Pradesh',
      info: `Raghu Engineering College is committed to academic excellence and innovation. 
            The college focuses on holistic development of students through various programs and activities.
            <br><br>
            • NBA Accredited Programs<br>
            • Modern Infrastructure<br>
            • Industry-Academia Partnership<br>
            • Active Research Programs<br>
            • Sports Facilities<br>
            • Training and Placement Cell`
  },
  'mvgr': {
      name: 'MVGR College of Engineering',
      image: 'colleges-img/mvgr.jpg',
      rating: '4.1/5',
      location: 'Vizianagaram, Andhra Pradesh',
      info: `MVGR College of Engineering is known for its quality education and research facilities. 
            The college has state-of-the-art infrastructure and experienced faculty members.
            <br><br>
            • NAAC 'A' Grade<br>
            • Advanced Research Labs<br>
            • Industry Collaborations<br>
            • Strong Alumni Network<br>
            • Digital Library<br>
            • Excellent Placement Record`
  },
  'gitam': {
      name: 'GITAM University',
      image: 'colleges-img/gitam.jpg',
      rating: '4.6/5',
      location: 'Visakhapatnam, Andhra Pradesh',
      info: `GITAM is a renowned university offering various undergraduate and postgraduate programs. 
            Known for its excellent academic standards and research facilities.
            <br><br>
            • NAAC 'A++' Grade<br>
            • International Collaborations<br>
            • Research Centers<br>
            • Modern Infrastructure<br>
            • Industry Interface<br>
            • Global Recognition`
  }
};