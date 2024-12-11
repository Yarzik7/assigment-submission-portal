import React from 'react'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import SectionInnerContainer from '@/components/SectionInnerContainer/SectionInnerContainer'

const ThankYouPage = () => {
  return (
    <Section>
      <SectionInnerContainer>
        <div className="p-[20px] bg-bgSecondary rounded-radius">
          <Link
            href="/"
            className="inline-flex justify-center items-center h-[40px] px-[8px] bg-bgBtn text-bgPrimary transition-colors hover:bg-hovBtn rounded-radius focus:outline-none focus:outline-blue-500"
          >
            Go back
          </Link>
          <h1 className='mt-[20px] text-center text-[26px]'>Thank you for submitting your assignment!</h1>
        </div>
      </SectionInnerContainer>
    </Section>
  );
}

export default ThankYouPage