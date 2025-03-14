import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FaqItem from "../components/FaqItem.jsx"; // FAQ bileşeninizi uygun yoldan içeri aktarın

const Services = () => {
  // İlk yükleme (loading) durumu
  const [loading, setLoading] = useState(true);
  // Loading bittikten sonra animasyonların başlaması için ek state
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Loading bittiğinde 1.5s sonra animasyonları başlat
      const animTimer = setTimeout(() => {
        setStartAnimation(true);
      });
      return () => clearTimeout(animTimer);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const [activeService, setActiveService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // Intersection Observer referansları
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [faqRef, faqInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ctaRef, ctaInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Hizmet verileri
  const services = [
    {
      id: 1,
      title: "Web Geliştirme",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      shortDesc:
        "Modern ve duyarlı web siteleri ve web uygulamaları geliştirme.",
      longDesc:
        "Sıfırdan başlayarak veya mevcut bir projeyi yenileyerek, işletmeniz veya kişisel markanız için özel web siteleri ve uygulamalar oluşturuyorum. SEO dostu, hızlı yüklenen ve tüm cihazlarda mükemmel çalışan projeler geliştiriyorum.",
      technologies: [
        "React",
        "Vue.js",
        "Node.js",
        "WordPress",
        "Tailwind CSS",
        "MERN Stack",
      ],
      process: [
        "Gereksinim analizi ve planlama",
        "Wireframe ve prototip tasarımı",
        "Frontend geliştirme",
        "Backend entegrasyonu",
        "Test ve optimizasyon",
        "Lansman ve bakım desteği",
      ],
    },
    {
      id: 2,
      title: "Mobil Uygulama",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      shortDesc:
        "iOS ve Android için native ve cross-platform mobil uygulamalar.",
      longDesc:
        "İşletmeniz için iOS ve Android platformlarında çalışan, kullanıcı dostu ve özelleştirilmiş mobil uygulamalar geliştiriyorum. Tek kod tabanı ile çoklu platformları hedefleyen çözümlerle maliyetlerinizi optimize ediyorum.",
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Redux",
      ],
      process: [
        "Kullanıcı deneyimi tasarımı",
        "Arayüz geliştirme",
        "API entegrasyonu",
        "Yerel özellik erişimi",
        "Test ve hata ayıklama",
        "Mağaza yayınlama desteği",
      ],
    },
    {
      id: 3,
      title: "UI/UX Tasarımı",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      shortDesc: "Kullanıcı odaklı, sezgisel ve etkileyici arayüz tasarımları.",
      longDesc:
        "Kullanıcı araştırmasına dayalı, işlevsel ve estetik olarak etkileyici arayüz tasarımları sunuyorum. Kullanıcıların ihtiyaçlarını ve işletmenizin hedeflerini birleştirerek, dönüşüm oranlarınızı artıracak deneyimler tasarlıyorum.",
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Illustrator",
        "Photoshop",
        "After Effects",
      ],
      process: [
        "Kullanıcı araştırması",
        "Bilgi mimarisi oluşturma",
        "Wireframing",
        "Etkileşimli prototip",
        "Görsel tasarım",
        "Kullanılabilirlik testi",
      ],
    },
    {
      id: 4,
      title: "E-Ticaret Çözümleri",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      shortDesc:
        "Özelleştirilmiş e-ticaret platformları ve çevrimiçi satış sistemleri.",
      longDesc:
        "İşletmeniz için tamamen özelleştirilmiş, ölçeklenebilir e-ticaret çözümleri geliştiriyorum. Sezgisel satın alma süreci, güvenli ödeme entegrasyonu ve envanter yönetimi ile satışlarınızı artıracak platformlar tasarlıyorum.",
      technologies: [
        "WooCommerce",
        "Shopify",
        "Magento",
        "Custom Solutions",
        "Payment Gateways",
        "ERP Integration",
      ],
      process: [
        "İş gereksinimleri analizi",
        "Platform seçimi ve planlama",
        "Özelleştirme ve geliştirme",
        "Ödeme sistemi entegrasyonu",
        "Güvenlik optimizasyonu",
        "Performans iyileştirme",
      ],
    },
    {
      id: 5,
      title: "SEO & Dijital Pazarlama",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      shortDesc: "Organik trafik artışı ve dijital varlık optimizasyonu.",
      longDesc:
        "İşletmenizin çevrimiçi görünürlüğünü artırmak için kapsamlı SEO stratejileri ve dijital pazarlama çözümleri sunuyorum. Arama motorlarında üst sıralarda yer almanız ve hedef kitlenize etkili bir şekilde ulaşmanız için çalışıyorum.",
      technologies: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Content Strategy",
        "Analytics",
        "Email Marketing",
      ],
      process: [
        "Website analizi ve rakip araştırması",
        "Anahtar kelime stratejisi",
        "İçerik optimizasyonu",
        "Teknik SEO iyileştirmeleri",
        "Bağlantı kurma stratejileri",
        "Performans izleme ve raporlama",
      ],
    },
    {
      id: 6,
      title: "Danışmanlık & Eğitim",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
      shortDesc:
        "Teknik danışmanlık ve ekipleriniz için özelleştirilmiş eğitimler.",
      longDesc:
        "İşletmenize veya ekibinize özel teknoloji danışmanlığı ve eğitim hizmetleri sunuyorum. Modern web teknolojileri, yazılım geliştirme metodolojileri ve dijital dönüşüm konularında bilgi ve deneyimimi paylaşıyorum.",
      technologies: [
        "Technical Mentoring",
        "Code Reviews",
        "Architecture Planning",
        "Team Training",
        "Custom Workshops",
        "Career Guidance",
      ],
      process: [
        "İhtiyaç analizi ve hedef belirleme",
        "Özelleştirilmiş eğitim planı",
        "Pratik odaklı workshoplar",
        "Proje bazlı mentörlük",
        "İlerleme değerlendirmesi",
        "Sürekli destek",
      ],
    },
  ];

  // SSS verileri
  const faqs = [
    {
      id: 1,
      question: "Proje süresi ne kadar sürer?",
      answer:
        "Proje karmaşıklığına bağlı olarak süreler değişebilir. Basit bir web sitesi 2-4 hafta sürerken, karmaşık web uygulamaları veya mobil uygulamalar 2-6 ay arasında tamamlanabilir. Her proje için özel bir zaman çizelgesi oluşturulur.",
    },
    {
      id: 2,
      question: "Fiyatlandırma nasıl belirlenir?",
      answer:
        "Fiyatlandırma, projenin kapsamına, gereken iş saatine ve kullanılacak teknolojilere göre belirlenir. Her proje için ihtiyaçlarınızı değerlendirdikten sonra detaylı bir teklif sunuyorum.",
    },
    {
      id: 3,
      question: "Uzaktan çalışıyor musunuz?",
      answer:
        "Evet, dünyanın her yerinden müşterilerle uzaktan çalışabiliyorum. Düzenli görüntülü görüşmeler, proje yönetim araçları ve sürekli iletişim ile mesafeleri sorun olmaktan çıkarıyorum.",
    },
    {
      id: 4,
      question: "Proje sürecinde ne sıklıkta güncelleme alacağım?",
      answer:
        "Proje süreci boyunca haftalık ilerleme raporları ve düzenli demo gösterimleri sunuyorum. Bu sayede projenin her aşamasında geri bildirim verme şansına sahip olursunuz.",
    },
    {
      id: 5,
      question: "Proje tamamlandıktan sonra destek sağlıyor musunuz?",
      answer:
        "Evet, proje tamamlandıktan sonra bakım ve destek paketleri sunuyorum. Güncellemeler, güvenlik yamaları ve teknik sorunlar için uzun vadeli destek sağlıyorum.",
    },
  ];

  const toggleService = (id) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
      const element = document.getElementById(`service-detail-${id}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  };

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // Tailwind için özel animasyon sınıflarını ekleyelim
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease forwards;
      }
      
      .animate-fade-in-left {
        animation: fadeInLeft 0.8s ease forwards;
      }
      
      .animate-fade-in-right {
        animation: fadeInRight 0.8s ease forwards;
      }
      
      .delay-100 {
        animation-delay: 100ms;
      }
      
      .delay-200 {
        animation-delay: 200ms;
      }
      
      .delay-300 {
        animation-delay: 300ms;
      }
      
      .delay-400 {
        animation-delay: 400ms;
      }
      
      .delay-500 {
        animation-delay: 500ms;
      }
      
      .delay-600 {
        animation-delay: 600ms;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Loading Ekranı */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <motion.div
            animate={{
              scale: [1, 1.0, 1],
              rotate: [0, 60, 120, 180, 240, 300, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-24 h-24 border-t-4 border-l-4 border-purple-500 rounded-full"
          />
        </div>
      )}

      <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-black via-purple-950/20 to-black">
        {/* Başlık Bölümü */}
        <div
          ref={titleRef}
          className={`text-center mb-16 pt-12 ${
            !loading && titleInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={!loading && titleInView ? { animationDelay: "" } : {}}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-purple-400 to-blue-800">
            Hizmetlerim
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={!loading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Vizyonunuzu dijital dünyada hayata geçirmeniz için ihtiyacınız olan
            tüm hizmetleri sunuyorum. Projenize özel çözümlerle hedeflerinize
            ulaşmanıza yardımcı oluyorum.
          </motion.p>
        </div>

        {/* Hizmetler Grid */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              // Loading bittikten sonra ek gecikme ekleyelim: mevcut delay (index * 150ms) + 1500ms
              style={
                !loading ? { animationDelay: `${1500 + index * 150}ms` } : {}
              }
              className={`relative cursor-pointer transition-all duration-700 ${
                activeService === service.id
                  ? "bg-primary/20 shadow-lg shadow-primary/20"
                  : "bg-secondary/40 hover:bg-secondary/60"
              } rounded-xl overflow-hidden backdrop-blur-sm ${
                servicesInView && startAnimation
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              onClick={() => toggleService(service.id)}
            >
              <div className="p-8">
                <div
                  className={`mb-6 text-white ${
                    activeService === service.id
                      ? "text-primary"
                      : "text-purple-400"
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.shortDesc}</p>
                <div className="mt-6 text-sm font-medium flex items-center">
                  <span
                    className={`${
                      activeService === service.id
                        ? "text-primary"
                        : "text-purple-400"
                    }`}
                  >
                    {activeService === service.id
                      ? "Detayları Gizle"
                      : "Detayları Gör"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 ml-2 transition-transform ${
                      activeService === service.id
                        ? "rotate-180 text-primary"
                        : "text-purple-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {activeService === service.id && (
                <div
                  id={`service-detail-${service.id}`}
                  className="mt-8 p-8 bg-black/50 border-t border-primary/30 animate-fade-in"
                >
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">
                      Detaylı Bilgi
                    </h4>
                    <p className="text-gray-300">{service.longDesc}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">
                      Kullanılan Teknolojiler
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-purple-900/50 text-purple-200 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">
                      Çalışma Süreci
                    </h4>
                    <ol className="space-y-2">
                      {service.process.map((step, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-300"
                        >
                          <span className="flex items-center justify-center w-6 h-6 bg-primary/30 text-white rounded-full text-xs mr-3">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="mt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-3xl hover:from-purple-600 hover:to-blue-700 transition-colors duration-300"
                    >
                      Bu Hizmet İçin İletişime Geç
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SSS Bölümü */}
        <div
          ref={faqRef}
          className={`my-20 bg-secondary/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl ${
            faqInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Sık Sorulan Sorular
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                index={index}
                activeFaq={activeFaq}
                toggleFaq={toggleFaq}
              />
            ))}
          </div>
        </div>

        {/* CTA Bölümü */}
        <div
          ref={ctaRef}
          className={`text-center mt-20 mb-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-10 rounded-2xl ${
            ctaInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2
            className={`text-3xl font-bold text-white mb-4 ${
              ctaInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Projenizi Hayata Geçirmeye Hazır mısınız?
          </h2>
          <p
            className={`text-gray-300 mb-8 max-w-2xl mx-auto ${
              ctaInView ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Fikirlerinizi dijital dünyada gerçeğe dönüştürmek için ilk adımı
            atın. Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          <a
            href="/contact"
            className={`bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-700 transition-colors duration-300 ${
              ctaInView ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            Ücretsiz Danışmanlık Al
          </a>
        </div>
      </div>
    </>
  );
};

export default Services;
