import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-bold gradient-text mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>
        <div className="space-y-6 max-w-xl mx-auto slide-in-up">
          {/* B.Tech */}
          <Card className="glass">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                  <p className="text-primary">Computer Science Engineering</p>
                  <p className="text-muted-foreground text-sm">
                    Maulana Abul Kalam Azad University of Technology
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>Aug 2021 - June 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>Kolkata, WB</span>
                    </div>
                  </div>
                  <p className="text-success font-semibold mt-2">CGPA: 7.48/10</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Class XII */}
          <Card className="glass">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <GraduationCap className="text-secondary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">Class XII (CBSE)</h4>
                  <p className="text-secondary">Science (PCM)</p>
                  <p className="text-muted-foreground text-sm">
                    Delhi Public School Jubilee, Motihari
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>2018 - 2020</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>Motihari, Bihar</span>
                    </div>
                  </div>
                  <p className="text-success font-semibold mt-2">Percentage: 73.2%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Class X */}
          <Card className="glass">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">Class X (CBSE)</h4>
                  <p className="text-accent">General</p>
                  <p className="text-muted-foreground text-sm">
                    Baldwin Farm Area High School, Tatanagar
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>2017 - 2018</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>Tatanagar, Jharkhand</span>
                    </div>
                  </div>
                  <p className="text-success font-semibold mt-2">Percentage: 70.4%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
