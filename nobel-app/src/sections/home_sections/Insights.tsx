import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Insights = () => {
  return (
    <section id="insights" className="my-20 px-6 mb-0 scroll-mt-32">
      <div className="bg-white rounded-3xl border-4 border-red-500 shadow-md p-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Key Insights</h2>
          <div className="flex space-x-8 justify-center">
            <Card className="w-1/3 bg-blue-50">
              <CardHeader>
                <CardTitle>🏆 Most Awarded Country</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">USA has the most Nobel Prizes awarded: 400+</p>
              </CardContent>
            </Card>
            <Card className="w-1/3 bg-blue-50">
              <CardHeader>
                <CardTitle>👩‍🔬 Women Laureates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">Only 6% of all Nobel winners are women.</p>
              </CardContent>
            </Card>
            <Card className="w-1/3 bg-blue-50">
              <CardHeader>
                <CardTitle>🕊️ Top Non-Science Prize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">Peace and Literature are the most awarded non-science categories.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
