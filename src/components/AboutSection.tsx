import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl rotate-6 animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl -rotate-3" />
              
              {/* Profile placeholder */}
              <div className="relative glass-card p-8 rounded-3xl h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-5xl font-heading font-bold text-primary-foreground">
                    EK
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-2">Emmanuel Kai Haro</h3>
                  <p className="text-primary font-medium">Full Stack Developer & Data Analyst</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <span className="text-primary font-medium mb-4 block uppercase tracking-widest text-sm">
              About Me
            </span>
            <h2 className="section-title mb-6">
              Passionate Developer <br />
              <span className="gradient-text">Building the Future</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm a 22-year-old aspiring Full Stack Web Developer based in Kenya,
              currently completing my degree in Project Planning and Management
              at Jomo Kenyatta University of Agriculture and Technology (JKUAT).
              My journey into software engineering began with a passion for
              creating solutions that matter.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Recently graduated from PLP Academy's intensive Full Stack Web
              Development program, specializing in the MERN stack. I also have
              expertise in Data Analytics and Data Science, combining technical
              development skills with strong analytical capabilities to deliver
              data-driven, scalable web applications.
            </p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card-hover p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calendar size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Born</p>
                  <p className="font-medium">July 19, 2003</p>
                </div>
              </div>

              <div className="glass-card-hover p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="glass-card-hover p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">University</p>
                  <p className="font-medium">JKUAT - Year 3.1</p>
                </div>
              </div>

              <div className="glass-card-hover p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Specialization</p>
                  <p className="font-medium">MERN Stack & Data Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
