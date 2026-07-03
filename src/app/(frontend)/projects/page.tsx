import RecentProjects from '@/components/RecentProjects'
import ManagedProjects from '@/components/ManagedProjects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/project-image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />

        <div className="relative max-w-7xl mx-auto px-8 h-full flex flex-col justify-center pt-32">
          <div className="max-w-3xl">
            <span className="text-[#E85D3F] font-medium text-sm tracking-wide uppercase block mb-6">
              Lorem ipsum dolor sit amet consectetur
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Projects
            </h1>

            <p className="text-white/90 text-lg mb-10 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Consequat diam ultricies pellentesque volutpat
              tempus venenatis at. Sed elerisque sed eget arcu netus susmod bibendum. Tempor pretium
              non augue convallis molestie.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <RecentProjects />

      {/* Managed Projects Section */}
      <ManagedProjects />
    </div>
  )
}
