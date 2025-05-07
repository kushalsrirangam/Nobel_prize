import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="my-20 px-6 mb-0 scroll-mt-32">
      <div className="bg-blue-50 dark:bg-gray-900 rounded-3xl border-4 border-red-500 dark:border-red-400 shadow-md p-12 transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white transition-colors duration-500">
            About the Nobel Explorer
          </h2>
          <div className="flex justify-center">
            <Card className="w-full bg-white dark:bg-gray-800 shadow-md transition-colors duration-500">
              <CardHeader>
                <CardTitle className="text-2xl text-black dark:text-white transition-colors duration-500">
                  🔍 Laureate Lens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-500">
                  Welcome to <strong>Laureate Lens</strong> — your gateway to the stories, data, and brilliance
                  behind Nobel Prize laureates. Explore historical patterns, groundbreaking achievements,
                  and human stories that shaped our world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
