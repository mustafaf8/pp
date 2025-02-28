import React, { useState } from "react";

const Portfolio = () => {
  // Kategorileri tanımla
  const categories = ["Tümü", "Web", "Mobil", "UI/UX", "Grafik"];
  const [activeCategory, setActiveCategory] = useState("Tümü");

  // Örnek portföy projelerini tanımla
  const projects = [
    {
      id: 1,
      title: "E-Ticaret Web Sitesi",
      category: "Web",
      image: "https://picsum.photos/id/1/600/400",
      description:
        "Modern bir e-ticaret platformu için responsive tasarım ve geliştirme.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Mobil Fitness Uygulaması",
      category: "Mobil",
      image: "https://picsum.photos/id/2/600/400",
      description: "Fitness takibi için kapsamlı bir mobil uygulama.",
      technologies: ["React Native", "Firebase"],
      link: "#",
    },
    {
      id: 3,
      title: "Kurumsal Kimlik Tasarımı",
      category: "Grafik",
      image: "https://picsum.photos/id/3/600/400",
      description:
        "Bir teknoloji şirketi için tam kapsamlı kurumsal kimlik tasarımı.",
      technologies: ["Illustrator", "Photoshop"],
      link: "#",
    },
    {
      id: 4,
      title: "Finansal Dashboard UI",
      category: "UI/UX",
      image: "https://picsum.photos/id/4/600/400",
      description:
        "Finans uygulaması için kullanıcı dostu dashboard arayüzü tasarımı.",
      technologies: ["Figma", "Adobe XD"],
      link: "#",
    },
    {
      id: 5,
      title: "Blog Platformu",
      category: "Web",
      image: "https://picsum.photos/id/5/600/400",
      description:
        "İçerik üreticileri için modern blog platformu geliştirmesi.",
      technologies: ["React", "GraphQL", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 6,
      title: "Sosyal Medya Uygulaması",
      category: "Mobil",
      image: "https://picsum.photos/id/6/600/400",
      description: "Fotoğraf paylaşımı odaklı sosyal medya uygulaması.",
      technologies: ["Flutter", "Firebase"],
      link: "#",
    },
  ];

  // Projeleri filtreleme fonksiyonu
  const filteredProjects =
    activeCategory === "Tümü"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-black via-purple-950/20 to-black">
      {/* Başlık */}
      <div className="text-center mb-16 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-purple-400 to-blue-400">
          Portföyüm
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Geliştirdiğim projeler ve tasarım çalışmalarımdan bir seçki. Her
          projeye tıklayarak daha detaylı bilgiye ulaşabilirsiniz.
        </p>
      </div>

      {/* Kategori filtreleri */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-secondary/70 text-gray-300 hover:bg-primary/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projeler grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Proje resmi */}
            <div className="relative overflow-hidden h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-80"></div>
              <span className="absolute top-4 right-4 bg-primary/80 text-white text-sm px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Proje bilgileri */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Teknolojiler */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-purple-900/50 text-purple-200 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Detay butonu */}
              <a
                href={project.link}
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4
                    py-1 rounded-full hover:from-purple-600 hover:to-blue-700
                    transition-colors duration-300"
              >
                Detayları Gör
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Görünmeyen projeler için uyarı */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">
            Bu kategoride henüz proje bulunmamaktadır.
          </p>
        </div>
      )}

      {/* İletişim CTA */}
      <div className="mt-20 text-center bg-secondary/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Beraber Çalışmak İster misiniz?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Yeni bir proje fikriniz mi var? Vizyonunuzu hayata geçirmenize
          yardımcı olabilirim. Hemen iletişime geçin ve neler yapabileceğimizi
          konuşalım.
        </p>
        <a
          href="/contact"
          className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6
                    py-3 rounded-full hover:from-purple-600 hover:to-blue-700
                    transition-colors duration-300"
        >
          İletişime Geç
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
