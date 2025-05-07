import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Trends = () => {
  return (
    <section id="trends" className="my-20 px-6 mb-0 scroll-mt-32">
      <div className="bg-blue-50 rounded-3xl border-4 border-red-500 shadow-md p-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Nobel Trends Over Time</h2>
          <div className="flex space-x-8 justify-center">
            <Card className="w-1/3 bg-white">
              <CardHeader>
                <CardTitle>📈 Rise in Laureates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">The number of Nobel winners has doubled since the 1950s.</p>
              </CardContent>
            </Card>
            <Card className="w-1/3 bg-white">
              <CardHeader>
                <CardTitle>👩‍🎓 Women Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">Awards for women surged post-2000 compared to previous decades.</p>
              </CardContent>
            </Card>
            <Card className="w-1/3 bg-white">
              <CardHeader>
                <CardTitle>🌍 Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">More diverse countries are winning Nobel Prizes today than ever before.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
