import React from 'react';
import { Mail, Phone, MapPin, Code2, GraduationCap, Award, ExternalLink, Github, Linkedin, User, FileText, Briefcase, Languages, Calendar, Star } from 'lucide-react';

// Import images (you can replace these with your actual images)
import profileImage from './assets/images/profile.jpg';
import project1Image from './assets/images/project1.jpg';
import project2Image from './assets/images/project2.jpg';
import achievement1Image from './assets/images/achievement1.jpg';
import achievement2Image from './assets/images/achievement2.jpg';

function App() {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-orange-500' },
    { name: 'CSS', level: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'C', level: 75, color: 'bg-gray-600' },
    { name: 'C++', level: 80, color: 'bg-blue-600' },
    { name: 'Java', level: 75, color: 'bg-red-500' },
  ];

  const projects = [
    {
      title: 'AI-Powered Personalised Learning',
      type: 'Hackathon Project',
      date: 'November 2024',
      description: 'Developed an AI-based personalized e-learning platform at a minimal cost with integrated AI chatbot using Gemini API.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
      highlights: ['AI Integration', 'Cost-effective Solution', 'Team Collaboration']
    },
    {
      title: 'Spotify Web Player Clone',
      type: 'Frontend Project',
      date: '2024',
      description: 'Built a music web player interface replicating Spotify\'s design with modern web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      highlights: ['UI/UX Design', 'Responsive Layout', 'Modern Interface']
    }
  ];

  const achievements = [
    {
      title: 'Management Information System',
      provider: 'Swayam',
      type: 'Virtual Course',
      period: 'Jul 2024 - Oct 2024',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Business Fundamentals For Entrepreneurs',
      provider: 'Swayam',
      type: 'Virtual Course',
      period: 'Feb 2024 - Mar 2024',
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const education = [
    {
      degree: 'B.TECH (Computer Science Engineering)',
      institution: 'Vivekananda Global University, Jaipur',
      grade: '7.0 CGPA',
      year: '2026',
      status: 'Pursuing'
    },
    {
      degree: 'Intermediate',
      institution: 'Mahanth Ramdhanpuri +2 Cs.Budhauli, Nawada',
      grade: '373',
      year: '2022',
      status: 'Completed'
    },
    {
      degree: 'Secondary School',
      institution: 'Bapu High School Pandey Gangout, Nawada',
      grade: '327',
      year: '2020',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Shashikant Kumar</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors">Achievements</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-blue-600 rounded-full mb-6">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Shashikant Kumar
            </h1>
            <p className="text-xl text-gray-600 mb-6">Computer Science Engineering Student</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">Nawada, Bihar</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">+91 8603815801</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">shashikantkr592005@gmail.com</span>
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed">
                Passionate Computer Science Engineering student with a strong foundation in programming languages and web development. 
                Seeking opportunities to enhance professional skills and contribute to innovative projects in a dynamic environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-gray-600">My academic journey and qualifications</p>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-gray-700 mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Pursuing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Code2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-gray-600">Programming languages and technologies I work with</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-gray-600">Some of my notable work and contributions</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {project.type}
                  </span>
                  <span className="text-sm text-gray-600">{project.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-white text-gray-700 text-xs rounded-md border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements & Certifications</h2>
            <p className="text-gray-600">Professional development and learning achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 mb-2">{achievement.provider}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="px-2 py-1 bg-gray-100 rounded-md">{achievement.type}</span>
                      <span>{achievement.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Languages className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Languages</h2>
            <p className="text-gray-600">Communication skills and linguistic abilities</p>
          </div>
          <div className="flex justify-center gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">English</h3>
              <p className="text-gray-600">Professional proficiency</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hindi</h3>
              <p className="text-gray-600">Native speaker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-blue-100 mb-8 text-lg">
            I'm always open to discussing new opportunities and collaborations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:shashikantkr592005@gmail.com" 
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a 
              href="tel:+918603815801" 
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Me</span>
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center gap-2 text-blue-100">
              <MapPin className="w-5 h-5" />
              <span>Nawada, Bihar, 805124</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Shashikant Kumar. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;