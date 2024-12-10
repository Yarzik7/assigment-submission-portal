import Section from "@/components/Section/Section";
import SectionInnerContainer from "@/components/SectionInnerContainer/SectionInnerContainer";
import Form from "@/components/Form/Form";


export default function Home() {
  return (
    <Section>
      <SectionInnerContainer>
        <div className="p-[20px] bg-bgSecondary rounded-radius">
         <Form/>
        </div>
      </SectionInnerContainer>
    </Section>
  );
}
