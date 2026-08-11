import RecentProjects from '@/components/RecentProjects'
import ManagedProjects from '@/components/ManagedProjects'
import ProjectsHero from '@/components/ProjectsHero'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <RecentProjects />
      <ManagedProjects />
    </div>
  )
}
