export default function GameOfDomains() {
  const domains = [
    {
      title: "WEB DEV",
      color: "border-sky-500 text-sky-400",
      image: "images/image2.png",
    },
    {
      title: "AI/ML",
      color: "border-purple-500 text-purple-400",
      image: "images/Imageee.png",
    },
    {
      title: "CYBERSECURITY",
      color: "border-rose-500 text-rose-400",
      image: "images/Imageee1.png",
    },
  ];

  return (
    <section>
      <div>
        <img src="/images/image2.png" alt="SanityCheck" width="100" />
      </div>
      <div className="grid md:grid-cols-3">
        {domains.map((d) => (
          <div key={d.title}>
            <img src={d.image} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
