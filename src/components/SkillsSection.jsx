const skills = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'REST APIs', level: 88 },
    { name: 'Authentication', level: 82 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 85 },
    { name: 'npm/yarn', level: 88 },
    { name: 'Linux/Terminal', level: 75 },
  ],
  other: [
    { name: 'Data Analytics', level: 75 },
    { name: 'Azure AI', level: 70 },
    { name: 'Networking', level: 72 },
    { name: 'Data Science', level: 70 },
    { name: 'Project Management', level: 80 },
  ],
};

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-primary">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="glass-card-hover p-6 rounded-2xl">
    <h3 className="text-xl font-heading font-semibold mb-6 gradient-text">
      {title}
    </h3>
    {skills.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
    ))}
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 rounded-r-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block uppercase tracking-widest text-sm">
            My Skills
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit for building modern, scalable web
            applications from front to back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend Development" skills={skills.frontend} />
          <SkillCategory title="Backend Development" skills={skills.backend} />
          <SkillCategory title="Tools & Technologies" skills={skills.tools} />
          <SkillCategory title="Other Skills" skills={skills.other} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
