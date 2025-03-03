import React from "react";
import {
  Beaker,
  Mail,
  Link,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const AboutPage = () => {
  // Sample team members data - you would replace this with your actual data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Faculty Advisor",
      image: "/api/placeholder/300/300", // Replace with actual image
      bio: "Ph.D in Organic Chemistry with 15 years of research experience in pharmaceutical compounds.",
      socialLinks: {
        email: "sarah.johnson@example.edu",
        linkedin: "sarahjohnson",
        github: "sjohnson",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "President",
      image: "/api/placeholder/300/300", // Replace with actual image
      bio: "Senior Chemistry major with a focus on biochemistry. Research assistant in the University's enzyme kinetics lab.",
      socialLinks: {
        email: "mchen@example.edu",
        linkedin: "michaelchen",
        github: "mchen",
      },
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Vice President",
      image: "/api/placeholder/300/300", // Replace with actual image
      bio: "Junior specializing in inorganic chemistry. Currently working on metal-organic frameworks for catalysis.",
      socialLinks: {
        email: "apatel@example.edu",
        linkedin: "aishapatel",
        github: "apatel",
      },
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      role: "Lab Coordinator",
      image: "/api/placeholder/300/300", // Replace with actual image
      bio: "Graduate student researching sustainable chemistry applications. Expert in setting up complex experimental apparatus.",
      socialLinks: {
        email: "crodriguez@example.edu",
        linkedin: "carlosrodriguez",
        github: "crodriguez",
      },
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "Outreach Coordinator",
      image: "/api/placeholder/300/300", // Replace with actual image
      bio: "Chemistry Education major passionate about making science accessible to K-12 students through interactive demonstrations.",
      socialLinks: {
        email: "ewilson@example.edu",
        linkedin: "emmawilson",
        github: "ewilson",
      },
    },
    {
      id: 6,
      name: "Jamal Washington",
      role: "Treasurer",
      image: "/api/placeholder/300/300", // Replace with actual image
      bio: "Double major in Chemistry and Business Administration. Manages club funding and coordinates with university administration.",
      socialLinks: {
        email: "jwashington@example.edu",
        linkedin: "jamalwashington",
        github: "jwashington",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Header - Note: In a real implementation, you'd reuse your navigation component */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center space-x-2">
          <Beaker className="h-8 w-8 text-green-400" />
          <span className="text-xl font-bold">MolecularMinds</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8">
            Our chemistry club brings together passionate students and faculty
            to explore the fascinating world of molecular science. From
            laboratory experiments to research projects, we provide a
            collaborative environment for everyone interested in chemistry.
          </p>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              We aim to foster a community of chemistry enthusiasts who
              collaborate, learn, and innovate together. Our club provides
              resources, mentorship, and opportunities for members to deepen
              their understanding of chemistry and its applications in the real
              world.
            </p>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <div className="bg-green-500 p-1 rounded-full mr-3 mt-1">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Scientific Integrity:</strong> We uphold the highest
                  standards of scientific method and ethics in all our projects.
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-500 p-1 rounded-full mr-3 mt-1">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Inclusivity:</strong> We welcome members from all
                  backgrounds, experience levels, and areas of interest.
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-500 p-1 rounded-full mr-3 mt-1">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Collaboration:</strong> We believe in the power of
                  working together to solve complex problems.
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-500 p-1 rounded-full mr-3 mt-1">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>
                  <strong>Innovation:</strong> We encourage creative thinking
                  and novel approaches to chemistry challenges.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-lg opacity-20 blur-xl"></div>
              <img
                src="/api/placeholder/500/400"
                alt="Chemistry lab"
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our History Timeline */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500 opacity-30"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {/* Item 1 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-green-400">2020</h3>
                <p className="text-lg text-gray-300 mt-2">
                  Founded by a small group of passionate chemistry students
                  seeking to create a community beyond the classroom.
                </p>
              </div>
              <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-green-500"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>

            {/* Item 2 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right"></div>
              <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-green-500"></div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-green-400">2021</h3>
                <p className="text-lg text-gray-300 mt-2">
                  Launched our first research initiative and organized the
                  inaugural Chemistry Symposium.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-green-400">2022</h3>
                <p className="text-lg text-gray-300 mt-2">
                  Expanded our outreach program to local high schools,
                  introducing chemistry concepts through interactive
                  demonstrations.
                </p>
              </div>
              <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-green-500"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>

            {/* Item 4 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right"></div>
              <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-green-500"></div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-green-400">2023</h3>
                <p className="text-lg text-gray-300 mt-2">
                  Received university recognition for outstanding contributions
                  to science education and community engagement.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-green-400">2024</h3>
                <p className="text-lg text-gray-300 mt-2">
                  Established partnerships with local industry leaders, creating
                  internship opportunities for club members.
                </p>
              </div>
              <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-green-500"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>

            {/* Item 6 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right"></div>
              <div className="hidden md:block w-10 h-10 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-green-500"></div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-green-400">2025</h3>
                <p className="text-lg text-gray-300 mt-2">
                  Growing stronger than ever with over 100 active members and
                  exciting new initiatives on the horizon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-2">Meet Our Team</h2>
        <p className="text-center text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          The passionate individuals who make our chemistry club a thriving
          community of science enthusiasts.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-green-400">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.socialLinks.email && (
                    <a
                      href={`mailto:${member.socialLinks.email}`}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.socialLinks.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={`https://github.com/${member.socialLinks.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join the Team */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="bg-gradient-to-r from-indigo-800 to-blue-900 rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Joining Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to explore
            the world of chemistry. Whether you're a beginner or experienced
            chemist, there's a place for you in our club.
          </p>
          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-medium transition-colors text-lg inline-flex items-center">
            Apply to Join <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Beaker className="h-6 w-6 text-green-400" />
            <span className="text-lg font-bold"></span>
          </div>
          <p>&copy; 2025 Devshroom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
