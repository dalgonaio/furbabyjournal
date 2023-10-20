import React, {ReactNode} from 'react';
import Header1 from '@/shared/Header1';
import {FolderIcon, ChartBarSquareIcon, PencilSquareIcon} from '@heroicons/react/20/solid';
import {BenefitType} from '@/shared/types';
import Benefit from './Benefit';

const benefits: BenefitType[] = [
  {
    icon: <ChartBarSquareIcon className="h-6 w-6" />,
    title: 'All the data in one place.',
    description:
      'See it all at a glance when you want to check what and how much they are eating or their medical labs.',
  },
  {
    icon: <PencilSquareIcon className="h-6 w-6" />,
    title: 'Keep their food, supplement, medicine intake clear.',
    description:
      'Track what they are eating and taking to gain insights to help them stay with you for the longest time.',
  },
  {
    icon: <FolderIcon className="h-6 w-6" />,
    title: 'Keep track of their medical exams and labwork.',
    description:
      'All of their labwork and exams at your fingertips to track and see any gradual changes.',
  },
];

const About = () => {
  return (
    <section id="About" className="mx-auto min-h-full w-5/6 py-20">
      {/*Header*/}
      <div>
        <Header1>PET HEALTH TRACKER</Header1>
        <p className="my-5 text-sm">
          Knowledge is power. We provide the tools to let you mine and store that knowledge for easy
          access when you need it.
        </p>
      </div>

      {/*Main Benefits */}
      {/*flex on bigger screens*/}
      <div className="md:flex items-center justify-between gap-8 mt-5">
        {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
      <div>
        Test
        <a href="/users">Users Test Page</a>
      </div>
    </section>
  );
};

export default About;
