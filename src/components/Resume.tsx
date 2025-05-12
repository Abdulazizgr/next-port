import ResumeTimeline from "@/components/resume-timeline";

export default function ResumePage() {
  return (
    <main id="about" className="min-h-screen bg-white dark:bg-gray-900">
      <div className=" mx-auto px-4 md:px-32 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
          My Resume
        </h1>
        <ResumeTimeline />
      </div>
    </main>
  );
}
