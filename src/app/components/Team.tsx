import React, { useState } from 'react'
import Image from 'next/image'

interface SocialLink {
    type: string
    url: string
}

interface TeamMember {
    name: string
    role: string
    quote: string
    image_path: string
    social_links: SocialLink[]
}

const Team = () => {
    const [selectedTeam, setSelectedTeam] = useState<TeamMember[]>([])
    const [isLoading, setIsLoading] = useState(false)

    // Map of image paths to their correct extensions based on the actual files while some of them didn't work
    // Note: HEIC files are excluded as they're not web-compatible
    const imageExtensions: { [key: string]: string } = {
        "team_images/UGAHacks_11/DSCN1554 - Asanti Kumera": ".png",
        "team_images/UGAHacks_11/profilephoto - Kataleena Mishra": ".png",
        "team_images/UGAHacks_11/IMG_2776 - Siya Sharma": ".png",
        "team_images/UGAHacks_11/IMG_7940_Original - Saniya Pirani": ".png",
        "team_images/UGAHacks_11/Headshot_Nature - Nivedha Natarajan": ".png",
        "team_images/UGAHacks_11/Me_Smiling - Jacob Harris": ".png",
        "team_images/UGAHacks_11/6849e1d-7d36-4278-9ecd-f5eaa9c00137 - anika khatri": ".png",
        "team_images/UGAHacks_11/IMG_6380 - Andrea Ayon": ".png",
        "team_images/UGAHacks_11/20250308_213130_4E2338 - Ethan Ogle": ".png",
        "team_images/UGAHacks_11/IMG_7769 - Nikhita Kunthu": ".png",
        "team_images/UGAHacks_11/Jaeck2 - Mariah Jaeck": ".png",
        "team_images/UGAHacks_11/7d91c521-05ca-4f0b-95da-14440c07f1bd - disha rachur": ".png",
        "team_images/UGAHacks_11/IMG_4844 - Vilasini Gunasekaran": ".png",
        "team_images/UGAHacks_11/pic - Nanditha Chevula": ".png",
        "team_images/UGAHacks_11/IMG_0159 - riya prabhu": ".png",
        "team_images/UGAHacks_11/20240321_135825 - Maadhavan Muthuselvan": ".png",
        "team_images/UGAHacks_11/WhatsApp Image 2025-07-10 at 11.36.49 AM - Krishna Mohan": ".png",
        "team_images/UGAHacks_11/Headshot - Ashlee Tam": ".png",
        "team_images/UGAHacks_11/IMG_6812_Original - Gargee Jamadagni": ".png",
        "team_images/UGAHacks_11/IMG_0671 - Adithya Lakshmikanth": ".png",
        "team_images/UGAHacks_11/Profile - Banibe Ebegbodi": ".png",
        "team_images/UGAHacks_11/IMG_3077 - Saachi Varshney": ".png",
        "team_images/UGAHacks_11/helium-yang (1) - Helium Yang": ".png",
        "team_images/UGAHacks_11/DSC_0075 - Khushi Bhatamrekar": ".png",
        "team_images/UGAHacks_11/IMG_5759 - Henry Lue": ".png",
        "team_images/UGAHacks_11/IMG_5533 - Jordan Seraphin": ".png",
        "team_images/UGAHacks_11/IMG_5306 - Paola Diaz": ".png",
        "team_images/UGAHacks_11/IMG_5380 - zahin hoque": ".png",
        "team_images/UGAHacks_11/IMG_9283_Original - Tara Ravindranathan": ".png",
        "team_images/UGAHacks_11/IMG_3969 - Ella Wileman": ".png",
        "team_images/UGAHacks_11/IMG_5510 - Daniel Rifai": ".png",
        "team_images/UGAHacks_11/IMG_8750 - Jennifer Ngo": ".png",
        "team_images/UGAHacks_11/Headshot - Nikita Jha": ".png",
        "team_images/UGAHacks_11/IMG_4489 - Ryan Majd": ".png",
        "team_images/UGAHacks_11/IMG_9165 - Batu Ozdener": ".png",
        "team_images/UGAHacks_11/IMG_6323 - maya castillo": ".png",
        "team_images/UGAHacks_11/closeup - Aishwini Madanu": ".png"
    }

    const getImageSrc = (imagePath: string) => {
        const extension = imageExtensions[imagePath]
        // Only return image source if we have a valid extension mapping
        // This excludes HEIC files and unmapped files
        if (extension) {
            return `/${imagePath}${extension}`
        }
        return null
    }

    const handleTeamClick = async (teamName: string) => {
        if (teamName === 'UGAHacks 11') {
            setIsLoading(true)
            try {
                const response = await fetch('/team_data/UGAHacks_11.json')
                const data = await response.json()
                setSelectedTeam(data)
            } catch (error) {
                console.error('Error loading team data:', error)
            } finally {
                setIsLoading(false)
            }
        }
    }
    return (
        <div className="min-h-screen p-2 bg-[#27282f] flex flex-col items-center pt-30">
            <h1 className='text-4xl text-white font-raleway'>Meet The Team!<span className="cursor-blink text-[#aaa] -ml-1 -mt-2 inline-block">|</span></h1>
            <div className="w-full max-w-7xl px-6">
                <div className="flex gap-8 mt-20 ml-60">
                    <h2 
                        className='text-base text-gray-400 font-raleway cursor-pointer hover:text-white transition-colors'
                        onClick={() => handleTeamClick('UGAHacks 11')}
                    >
                        UGAHacks 11
                    </h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacksX</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 9</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 8</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 7</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 5</h2>
                </div>
                <div className="flex gap-8 ml-60 mt-4">
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 4</h2>
                    <h2 className='text-base text-gray-400 ml-2 font-raleway'>UGAHacks 3</h2>
                    <h2 className='text-base text-gray-400 -ml-1 font-raleway'>UGAHacks 2</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 1</h2>
                </div>

                {/* Team Information Display */}
                {isLoading && (
                    <div className="mt-10 text-white font-raleway text-center">
                        Loading team information...
                    </div>
                )}

                {selectedTeam.length > 0 && !isLoading && (
                    <div className="mt-10 w-full">
                        {(() => {
                            // Group members by team/role
                            const teamGroups = selectedTeam.reduce((groups: Record<string, TeamMember[]>, member: TeamMember) => {
                                const team = member.role.includes('Director') ? 'Directors' : member.role.split(',')[0];
                                if (!groups[team]) {
                                    groups[team] = [];
                                }
                                groups[team].push(member);
                                return groups;
                            }, {});

                            // Sort teams to put Directors first, then Marketing Team, then others
                            const sortedTeams = Object.entries(teamGroups).sort(([teamNameA], [teamNameB]) => {
                                if (teamNameA === 'Directors') return -1;
                                if (teamNameB === 'Directors') return 1;
                                if (teamNameA === 'Marketing Team') return -1;
                                if (teamNameB === 'Marketing Team') return 1;
                                return teamNameA.localeCompare(teamNameB);
                            });

                            return sortedTeams.map(([teamName, members]: [string, TeamMember[]]) => (
                                <div key={teamName} className="mb-12">
                                    {teamName === 'Directors' && (
                                        <div className="flex flex-col items-center mb-6">
                                            <h3 className="text-xl text-gray-300 font-raleway mb-4">Mascot</h3>
                                            <div className="p-1 rounded-full border-4 border-red-500">
                                                <Image
                                                    src="/bytehacks11.png"
                                                    alt="Byte Mascot"
                                                    width={120}
                                                    height={150}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <p className="text-white font-raleway mt-2">Byte</p>
                                        </div>
                                    )}
                                    <h2 className="text-2xl text-white font-raleway font-bold mb-6 text-center">
                                        {teamName}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {members.map((member: TeamMember, index: number) => (
                                            <div key={index} className="rounded-lg p-4">
                                                <div className="text-center">
                                                    {member.image_path && getImageSrc(member.image_path) && (
                                                        <div className="mb-4 flex justify-center relative group">
                                                            <div className="p-1 rounded-full border-4 border-red-500">
                                                                <Image
                                                                    src={getImageSrc(member.image_path)!}
                                                                    alt={member.name}
                                                                    width={120}
                                                                    height={120}
                                                                    className="rounded-full object-cover w-[120px] h-[120px]"
                                                                    onError={(e) => {
                                                                        const target = e.target as HTMLImageElement;
                                                                        target.style.display = 'none';
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 bg-white rounded-2xl p-6 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-60 h-80">
                                                                <div className="flex flex-col items-center h-full justify-center">
                                                                    <div className="p-1 rounded-full border-4 border-red-500 mb-4">
                                                                        <Image
                                                                            src={getImageSrc(member.image_path)!}
                                                                            alt={member.name}
                                                                            width={100}
                                                                            height={100}
                                                                            className="rounded-full object-cover w-[100px] h-[100px]"
                                                                        />
                                                                    </div>
                                                                    <h4 className="text-gray-800 font-raleway font-bold text-lg mb-2 text-center">
                                                                        {member.name}
                                                                    </h4>
                                                                    <p className="text-gray-600 font-raleway text-sm mb-2 text-center">
                                                                        {member.role}
                                                                    </p>
                                                                    {member.quote && (
                                                                        <p className="text-gray-500 font-raleway text-xs italic mb-4 text-center px-2">
                                                                            &ldquo;{member.quote}&rdquo;
                                                                        </p>
                                                                    )}
                                                                    <div className="flex gap-3 mt-auto">
                                                                        {member.social_links && member.social_links.length > 0 && member.social_links.map((link: SocialLink, linkIndex: number) => (
                                                                            <a
                                                                                key={linkIndex}
                                                                                href={link.url}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                                                            >
                                                                                {link.type === 'instagram' && (
                                                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                                                    </svg>
                                                                                )}
                                                                                {link.type === 'linkedin' && (
                                                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                                                    </svg>
                                                                                )}
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <h3 className="text-white font-raleway font-bold text-lg mb-2">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-gray-300 font-raleway text-sm mb-2">
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ));
                        })()}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Team