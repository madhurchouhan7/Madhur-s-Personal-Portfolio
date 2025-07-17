import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, BookOpen, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold md:text-4xl">Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My academic background and qualifications.
        </p>
      </div>
      <div className="flex justify-center">
        <Card className="w-full max-w-2xl bg-card/50 hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                <School className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Acropolis Institute of Technology and Research</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><MapPin className="h-4 w-4"/>Indore, India</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pl-[4.75rem]">
              <div className="flex items-start gap-4">
                <BookOpen className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                    <h4 className="font-semibold">Bachelor of Technology (B.Tech), Electronics and Communication</h4>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <Calendar className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                    <p className="font-semibold">2024 - 2028</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
