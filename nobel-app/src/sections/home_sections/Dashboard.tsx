const Dashboard = () => {
  return (
    <section id="dashboard" className="my-20 px-6 mb-0 scroll-mt-32">
      <div className="bg-white rounded-3xl border-4 border-red-500 shadow-md p-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
          📊 Nobel Dashboard
        </h2>

        {/* Better Quality Dashboard Image */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/high_quality_dashboard.png"  // 🔥 Use your better uploaded image here
            alt="Nobel Dashboard"
            className="rounded-lg shadow-xl w-full max-w-5xl object-contain"
          />
        </div>

        <p className="text-center text-gray-700 dark:text-gray-300">
          Dashboard with Nobel trends and visualizations coming soon!
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
