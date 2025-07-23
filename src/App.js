import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center flex-wrap gap-6 py-4 text-sm font-semibold">
          <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/qualification" className="hover:text-yellow-300 transition-colors">Qualification</Link>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Link to="/experience" className="hover:text-yellow-300 transition-colors">Experience</Link>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Link to="/publications" className="hover:text-yellow-300 transition-colors">Publications</Link>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Link to="/fdps" className="hover:text-yellow-300 transition-colors">FDPs</Link>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Link to="/moocs" className="hover:text-yellow-300 transition-colors">MOOCs</Link>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<Link to="/awards" className="hover:text-yellow-300 transition-colors">Awards</Link>
        </div>
      </div>
    </nav>
  );
}
function Header() {
  return (
   <header className="text-center p-6 bg-blue-100 shadow-sm">
  <h1 className="text-4xl font-bold text-blue-900">Prof. Smitha Jacob</h1>
  <p className="text-lg">Assistant Professor, Department of CSE, SJCET Palai</p>
  <p className="text-sm text-blue-800">
    Email: smitha.jacob@sjcetpalai.ac.in | Mobile: +91 9446922158
  </p>
</header>

  );
}

function Footer() {
  return (
   <footer className="text-center text-sm py-4 bg-blue-100 text-blue-900 shadow-inner mt-6">
  &copy; {new Date().getFullYear()} Prof. Smitha Jacob | Developed with React
</footer>

  );
}

function Home() {
  return (
<section className="py-6 bg-white rounded-lg shadow-md px-6 my-6">
      <h2 className="text-2xl font-bold mb-2">About</h2>
      <p>Dedicated educator and researcher with over 20 years of academic and industry experience. Passionate about AI, Web Technologies, and fostering next-gen learning.</p>
    </section>
  );
}

function Qualification() {
  return (
<section className="py-6 bg-white rounded-lg shadow-md px-6 my-6">
      <h2 className="text-2xl font-bold mb-2">Qualification</h2>
      <ul className="list-disc ml-6">
        <li>B.E in CSE, The Indian Engineering College (1999)</li>
        <li>M.E in CSE, Mahendra Engineering College (2013)</li>
      </ul>
    </section>
  );
}

function Experience() {
  return (
 <section className="py-6 bg-white rounded-lg shadow-md px-6 my-6">
      <h2 className="text-2xl font-bold mb-2">Experience</h2>
      <ul className="list-disc ml-6">
        <li>SJCET, Palai – Assistant Professor (2005–Present)</li>
        <li>Govt. Polytechnic College, Pala – Guest Lecturer (2003–2005)</li>
        <li>Web2011, New Delhi – Project Leader (1999–2003)</li>
      </ul>
    </section>
  );
}

function Publications(){
  return (
    <section className="py-6 bg-white rounded-lg shadow-md px-6 my-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Research Publications</h2>
      <ol className="list-decimal ml-6 space-y-2 text-gray-800 text-sm leading-relaxed">
        <li>Web Genie: An AI-Driven Approach to Browser Performance and Behavior Analysis, <strong>NCAISF 2025</strong></li>
        <li>AI-Driven Video Prompt Analysis using Transformer Architectures, <strong>IJSRST, 2024</strong></li>
        <li>Gamifying Education with Augmented Reality and Gamification Frameworks, <strong>JETIR, 2023</strong></li>
        <li>Personalizable Super-App Framework for Campus Management, <strong>IJERT, 2023</strong></li>
        <li>Next-Gen Digital Twin Systems for Smart Manufacturing, <strong>BigDataConf, 2023</strong></li>
        <li>Smart AR Campus Tour Guide: An Interactive Student Navigation Tool, <strong>ICCES, 2023</strong></li>
        <li>Emotion-Aware Online Proctoring using Facial Recognition and Sentiment Analysis, <strong>IJEAT, 2022</strong></li>
        <li>Exploring Federated Learning Models for Edge Intelligence, <strong>ICMLA, 2022</strong></li>
        <li>AI in Indian Agriculture: Yield Prediction using Deep Learning, <strong>IJCA, 2021</strong></li>
        <li>Voice Bot for Academic Counseling using NLP and Dialogflow, <strong>SJCET Research Colloquium, 2021</strong></li>
        <li>COVID-19 Tracker Dashboard using Real-Time APIs, <strong>JETIR, 2020</strong></li>
        <li>AI-Assisted Career Path Recommender System, <strong>IJSER, 2020</strong></li>
        <li>Machine Learning Approaches in Early Disease Detection, <strong>ICAICT, 2019</strong></li>
        <li>Hybrid Cloud Architecture for Smart Classrooms, <strong>IJARCET, 2019</strong></li>
        <li>Interactive AR App for Cultural Heritage Sites, <strong>IRJET, 2018</strong></li>
        <li>Adaptive Web Portals for Student-Centric Learning, <strong>National Conference on ICTE, 2018</strong></li>
        <li>Online Voting System with Blockchain Security, <strong>National Journal of Computer Science, 2017</strong></li>
        <li>IoT-Based Attendance Monitoring using RFID, <strong>International Conference on Embedded Systems, 2016</strong></li>
        <li>Digital Library System with Federated Search, <strong>NCACIT, 2015</strong></li>
      </ol>
    </section>
  );
}

function FDPs(){
  return (
    <section className="py-6 bg-white rounded-lg shadow-md px-6 my-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Faculty Development Programs (FDPs) Attended</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-800 text-sm leading-relaxed">
        <li>AI Mastery for Educators – Organized by <strong>IIT Patna</strong>, 2025</li>
        <li>Traditional Knowledge & Intellectual Property Rights – Organized by <strong>IKS Division, MoE</strong>, 2025</li>
        <li>AI Trends and Applications – Organized by <strong>VIT Chennai</strong>, 2025</li>
        <li>EV – Vehicle Dynamics and Electric Motor Drives – <strong>NPTEL-AICTE FDP, IIT Madras</strong>, Jan–Apr 2025 (12 Weeks)</li>
        <li>Recent Advances in Transmission Systems – <strong>NPTEL-AICTE FDP, IIT Madras</strong>, Jan–Feb 2025 (4 Weeks)</li>
        <li>Data Science and R Programming – Organized by <strong>NIT Warangal</strong>, 2024</li>
        <li>Python for Data Analysis – Organized by <strong>IIT Kharagpur</strong>, 2024</li>
        <li>Recent Trends in Cybersecurity – Organized by <strong>NIT Calicut</strong>, 2023</li>
        <li>Design Thinking for Educators – AICTE FDP in collaboration with <strong>IBM</strong>, 2023</li>
        <li>Cloud Infrastructure and DevOps – Conducted by <strong>Infosys Springboard</strong>, 2023</li>
        <li>Internet of Things: Applications and Future – <strong>IIIT Hyderabad</strong>, 2022</li>
        <li>Smart Classrooms with AI Tools – <strong>AICTE Training and Learning (ATAL)</strong> Academy, 2022</li>
        <li>Ethical Hacking and Network Security – FDP by <strong>ICT Academy</strong>, 2021</li>
        <li>Artificial Intelligence and Deep Learning – Organized by <strong>NASSCOM & Microsoft</strong>, 2021</li>
        <li>Outcome Based Education and NBA Accreditation – FDP by <strong>ISTE Chapter</strong>, 2021</li>
        <li>Introduction to Research Methodology – FDP by <strong>AKTU Faculty Development Cell</strong>, 2020</li>
        <li>Smart City and Urban Technologies – FDP by <strong>Indian Smart Grid Forum</strong>, 2020</li>
        <li>Digital Pedagogy and Online Teaching Tools – Conducted by <strong>NMEICT, MHRD</strong>, 2020</li>
        <li>IoT and Embedded System Design – <strong>Texas Instruments and Edgate Technologies</strong>, 2019</li>
        <li>Pedagogical Innovations & ICT Tools – <strong>FDP by NITTTR</strong>, 2019</li>
        <li>...and over 40 additional FDPs, workshops, and online trainings from reputed institutions.</li>
      </ul>
    </section>
  );
}
function MOOCs() {
  return (
    <section className="py-6 bg-white rounded-lg shadow-md px-6 my-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">MOOC Certifications</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-800 text-sm leading-relaxed">
        <li>JavaScript Algorithms and Data Structures – <strong>freeCodeCamp</strong>, 2025</li>
        <li>EV – Vehicle Dynamics and Electric Motor Drives – <strong>NPTEL-AICTE FDP, IIT Madras</strong>, Jan–Apr 2025 (12 Weeks)</li>
        <li>Recent Advances in Transmission Systems – <strong>NPTEL-AICTE FDP, IIT Madras</strong>, Jan–Feb 2025 (4 Weeks)</li>
        <li>React.js Essential Training – <strong>LinkedIn Learning</strong>, 2022</li>
        <li>Cloud Computing – <strong>NPTEL, IIT Kharagpur</strong>, 2021</li>
        <li>Python for Data Science – <strong>Cognitive Class (IBM)</strong>, 2020</li>
        <li>Responsive Web Design – <strong>freeCodeCamp</strong>, 2020</li>
        <li>Introduction to Machine Learning – <strong>Coursera, Stanford University</strong>, 2020</li>
        <li>Internet of Things: Communication Technologies – <strong>NPTEL, IIT Bombay</strong>, 2019</li>
        <li>Programming, Data Structures and Algorithms in Python – <strong>NPTEL, IIT Madras</strong>, 2019</li>
        <li>Soft Skills Training – <strong>NPTEL-AICTE</strong>, 2018</li>
        <li>Digital Marketing – <strong>Google Digital Garage</strong>, 2018</li>
        <li>Mobile App Development – <strong>edX, MIT</strong>, 2017</li>
        <li>...and several other short-term online certifications from SWAYAM, Udemy, and NASSCOM FutureSkills.</li>
      </ul>
    </section>
  );
}


function Awards() {
  return (
    <section className="py-6 bg-white rounded-lg shadow-md px-6 my-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Awards & Recognitions</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-800 text-sm leading-relaxed">
        <li>
          <strong>Second Prize</strong> – *SRISHTI 2025*, 11th National Level Technical Project Exhibition  
          (Project titled <em>"Presently"</em> under ID CS852T), held at SAINTGITS College of Engineering
        </li>
        <li>
          <strong>Consolation Prize</strong> – *CSI-InApp National Level Project Competition*, 2017  
          (Project titled <em>"Voice-based System for Visually Impaired"</em>)
        </li>
        <li>
          <strong>Level 4 Enabler</strong> – Recognized by *MuLearn Foundation* for outstanding mentorship contributions, 2024
        </li>
        <li>
          <strong>NBA Joint Coordinator</strong> – Contributed significantly to *NBA Accreditation Process*, SJCET, 2022
        </li>
        <li>
          <strong>Certificate of Appreciation</strong> – Resource Person in Outreach Program on Web Design & Python Programming  
          (Organized for St. Xavier’s School students by the CSE Department, SJCET, 2024)
        </li>
        <li>
          <strong>Recognition for Contribution to NAAC Feedback Analysis</strong> – Data-driven action planning based on stakeholder feedback, 2023
        </li>
        <li>
          <strong>Mentor for Student Projects</strong> – Guided multiple student projects that achieved journal publications and awards (2021–2025)
        </li>
      </ul>
    </section>
  );
}
function App()  {
  return (
    <Router>
      <div className="bg-gray-100 m-[60px] p-6 rounded-lg">
     
        <Header />
        <Navbar />
       <main className="px-4 py-6 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/fdps" element={<FDPs />} />
            <Route path="/moocs" element={<MOOCs />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
