import Image from "next/image"
import { Linkedin, Twitter, Globe } from "lucide-react"

// Updated team member data with social links
const teamMembers = [
  {
    name: "Nonhlanhla Nkosi",
    role: "Chairperson",
    image: "/Team/Chairperson.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/nonhlanhla-nkosi-216901149/",
      website: "https://janedoe.com",
    },
  },
  {
    name: "Morakeng Calvin Makgaila",
    role: "Deputy Chainperson",
    image: "/Team/Group 1(1).png",
    socials: {
      linkedin: "https://www.linkedin.com/in/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },
  {
    name: "Patracia Nevondwe",
    role: "Secretary",
    image: "/Team/Secretary.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/patracia-nevondwe-33b69bb7",
      twitter: "https://twitter.com/johnsmith",
    },
  },
  {
    name: "Sanele Makhaye",
    role: "Treasurer",
    image: "/Team/Treasurer1.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/johnsmith",
      twitter: "https://twitter.com/johnsmith",
    },
  },

]

const MeetTheTeam = () => {
  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-black">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-black font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <div className="flex space-x-2">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.socials.website && (
                    <a
                      href={member.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeam

