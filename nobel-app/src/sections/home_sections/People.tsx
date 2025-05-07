import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const People = () => {
  return (
    <section id="people" className="my-20 px-6 mb-0 scroll-mt-32">
      <div className="bg-white rounded-3xl border-4 border-red-500 shadow-md p-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Distinguished Laureates</h2>
          <div className="flex space-x-8 justify-center">
            {/* Youngest Winner */}
            <Card className="w-1/3 bg-blue-50">
              <CardHeader>
                <CardTitle>👧 Youngest Winner</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <img
                  src="/youngest.jpg"
                  alt="Youngest Winner"
                  className="w-full h-auto rounded-md mb-4"
                />
                <p className="text-lg text-gray-700">
                  Malala Yousafzai won the Nobel Peace Prize at age 17.
                </p>
              </CardContent>
            </Card>

            {/* Oldest Winner */}
            <Card className="w-1/3 bg-blue-50">
              <CardHeader>
                <CardTitle>👵 Oldest Winner</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <img
                  src="/oldest.jpg"
                  alt="Oldest Winner"
                  className="w-full h-auto rounded-md mb-4"
                />
                <p className="text-lg text-gray-700">
                  Leonid Hurwicz was 90 years old when he received his Nobel Prize.
                </p>
              </CardContent>
            </Card>

            {/* Multiple Awards */}
            <Card className="w-1/3 bg-blue-50">
              <CardHeader>
                <CardTitle>🧠 Multiple Awards</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <img
                  src="/multiple.jpeg"
                  alt="Multiple Awards"
                  className="w-full h-auto rounded-md mb-4"
                />
                <p className="text-lg text-gray-700">
                  Marie Curie remains the only person to win Nobel Prizes in two sciences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;

