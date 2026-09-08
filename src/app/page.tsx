import ProfileHeader from '@/components/minimal/ProfileHeader';
import ContributionGraph from '@/components/minimal/ContributionGraph';
import ExperienceList from '@/components/minimal/ExperienceList';
import SkillsList from '@/components/minimal/SkillsList';
import ProjectsList from '@/components/minimal/ProjectsList';
import SiteFooter from '@/components/minimal/SiteFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090909] text-neutral-200">
      <main className="mx-auto w-full max-w-[600px] px-5 pb-16 pt-10 md:pt-16">
        <ProfileHeader />
        <ContributionGraph />
        <ExperienceList />
        <SkillsList />
        <ProjectsList />
        <SiteFooter />
      </main>
    </div>
  );
}
