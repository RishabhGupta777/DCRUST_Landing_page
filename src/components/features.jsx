import { default as FeatureCard } from "./_featureCard";

export default () => {
  const featureData = [
    {
      title: "Attendance Tracking",
      description: "Check your subject-wise attendance in real-time and stay updated to avoid shortages.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      rotateClass: "rotate-3",
      iconSvg: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4M7 4h10M7 8h10M7 12h4"></path>
        </svg>
      )
    },
    {
      title: "Results & Performance",
      description: "Access your semester results and track your academic performance easily in one place.",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      rotateClass: "-rotate-3",
      iconSvg: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path>
        </svg>
      )
    },
    {
      title: "Previous Year Papers (PYQs)",
      description: "Download and access previous year question papers to prepare better for exams.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      rotateClass: "rotate-3",
      iconSvg: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
      )
    },
    {
      title: "Mess Bill & Payments",
      description: "Check your mess bill details and payment status anytime without hassle.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      rotateClass: "-rotate-3",
      iconSvg: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-3 0-5 1.5-5 4s2 4 5 4s5-1.5 5-4s-2-4-5-4zm0 0V4m0 12v4"></path>
        </svg>
      )
    },
    {
      title: "Notices & Updates",
      description: "Stay informed with the latest university notices, events, and announcements.",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      rotateClass: "rotate-3",
      iconSvg: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.5-1.5M4 4h16v12H4z"></path>
        </svg>
      )
    },
   {
  title: "Student Profile",
  description: "View and manage your personal details, academic information, and track your achievements in one place.",
  bgColor: "bg-indigo-100",
  textColor: "text-indigo-600",
  rotateClass: "-rotate-3",
  iconSvg: (
    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M5.121 17.804A9 9 0 1118.879 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
}
  ];

  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Everything you need as a DCRUST Student
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};