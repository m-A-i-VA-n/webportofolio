const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    skills: ["Next.js", "React", "Laravel", "HTML", "CSS"],
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Backend & Database",
    skills: ["Firebase", "Firestore", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label">SKILLS</p>

      <h2>Technologies I work with.</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}