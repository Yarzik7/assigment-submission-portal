import Section from '@/components/Section/Section';
import SectionInnerContainer from '@/components/SectionInnerContainer/SectionInnerContainer';
import Form from '@/components/Form/Form';
import AppMessage from '@/components/AppMessage/AppMessage';
import { ILevelsResponse } from '@/types/FormState.types';
import { onGetLevels } from '@/utils/api/onGetLevels';
import { AxiosError } from 'axios';

export default async function Home() {
  const levelsResponse: ILevelsResponse | AxiosError = await onGetLevels();

  return (
    <Section>
      <SectionInnerContainer>
        <div className="p-[20px] bg-bgSecondary rounded-radius">
          {'levels' in levelsResponse ? (
            <Form levels={levelsResponse.levels} />
          ) : (
            <AppMessage type='error'>Failed to fetch candidate levels, try reloading the page!</AppMessage>
          )}
        </div>
      </SectionInnerContainer>
    </Section>
  );
}
