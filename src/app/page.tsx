import Section from "@/components/Section/Section";
import SectionInnerContainer from "@/components/SectionInnerContainer/SectionInnerContainer";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import Select from "@/components/Select/Select";
import { levels } from "@/constants/formConstants";

export default function Home() {
  return (
    <Section>
      <SectionInnerContainer>
        <div>
          <form>
            <Input
              label="Name"
              name="name"
              type="text"
              placeholder="Enter name"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Textarea
              label="Assignment Description"
              name="assignment_description"
              placeholder="Enter assignment description"
            />
            <Input
              label="Github repository URL"
              name="github_repo_url"
              type="url"
              placeholder="Enter Github repository URL"
            />
            <Select
              label="Candidate Level"
              name="candidate_level"
              placeholder="Enter Candidate Level"
              options={levels}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </SectionInnerContainer>
    </Section>
  );
}
