'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import { useState } from 'react'

import seongsooImage from './teamImages/seongsoo.jpeg'
import judyImage from './teamImages/judy.jpg'
import loganImage from './teamImages/logan.jpg'
import shaunImage from './teamImages/shaun.jpeg'
import patrickImage from './teamImages/patrick.jpg'
import defaultImage from './teamImages/default.jpg'



export default function TeamPage() {
  const teamInfo = [
    {
      image: seongsooImage,
      name: 'Seongsoo Kim',
      role: 'Project Manager',
      blurb: 'Contributed to the planning, development, and testing of the project while supporting the team',
    }, 
    {
      image: judyImage,
      name: 'Judy Ayoubi',
      role: 'Developer',
      blurb: 'Contributing to developing and testing the project. Main languages: Python, C++.',
    }, 
    {
      image: loganImage,
      name: 'Logan Gunawan',
      role: 'Developer',
      blurb: 'Contributes to the building of the project. Main languages: Python, C#.',
    }, 
    {
      image: shaunImage,
      name: 'Shaun John Stanley',
      role: 'Business Analyst',
      blurb: 'Contributed to requirements, scope definition, gathering and documentation to support the team development process.',
    }, 
    {
      image: patrickImage,
      name: 'Patrick Holland',
      role: 'User Experience',
      blurb: 'Followed the requirements engineering and user experience, design processes for the Login page and the Team dashboard page.',
    },
  ]

  const positions = [
    'col-start-1 row-start-1',
    'col-start-3 row-start-1',
    'col-start-2 row-start-2',
    'col-start-1 row-start-3',
    'col-start-3 row-start-3',
  ]

  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  return (
  <div className="bg-temp-gray2 mtop-1">
    {teamInfo.map(({ image, name, role, blurb}, index) => {
        const hasBlurb = blurb.length > 0;

        return (
        <div key={name} className="flex h-[calc(100vh-112px)] items-start gap-3 p-3">
          <Image
              src={image}
              alt={`${name}'s profile picture`}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
          
          <div className="flex flex-col gap-y-3 flex-1 self-stretch m-6">
            <div className="grid grid-cols-2 gap-y-3">
              <p>Team Member Name: {name}</p>
              <p>Contact Information: </p>
              <p>Team Member Role: {role}</p>
            </div>

            <div className = "rounded-xl bg-temp-darkgray flex-1 p-6">
              {!hasBlurb ? 'Description' : blurb}
            </div>
          </div>
        </div>
      )
    })}
  </div>
)
}