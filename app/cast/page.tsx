"use client";
import { Suspense } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Clapperboard,
  Music,
  Film,
  Calendar,
  Award,
  X,
  ChevronRight,
} from "lucide-react";

// Cast data
const castMembers = [
  {
    id: "hero",
    name: "Ram Charan",
    role: "Hero",
     image: "/cast/hero.jpg",
    description:
      "Global Star Ram Charan, one of the most celebrated actors in Indian cinema, known for his powerful performances and incredible dance skills.",
    hasFilmography: true,
    filmography: [
      { year: 2025, title: "Peddi", role: "Peddi" },
      { year: 2024, title: "Game Changer", role: "Ram Nandan/Appanna" },
      { year: 2022, title: "RRR", role: "Alluri Sitarama Raju" },
      { year: 2021, title: "Acharya", role: "Siddha" },
      { year: 2019, title: "Vinaya Vidheya Rama", role: "Rama" },
      { year: 2018, title: "Rangasthalam", role: "Chitti Babu" },
      { year: 2017, title: "Khaidi No. 150", role: "Cameo" },
      { year: 2016, title: "Dhruva", role: "Dhruva" },
      { year: 2015, title: "Bruce Lee", role: "Kartik" },
      { year: 2014, title: "Govindudu Andarivadele", role: "Abhiram" },
      { year: 2013, title: "Yevadu", role: "Satya" },
      { year: 2012, title: "Naayak", role: "Siddharth Naayak / Cherry" },
      { year: 2012, title: "Racha", role: "Raj" },
      { year: 2010, title: "Orange", role: "Ram" },
      { year: 2009, title: "Magadheera", role: "Harsha / Kala Bhairava" },
      { year: 2007, title: "Chirutha", role: "Charan" },
    ],
  },
  {
    id: "heroine",
    name: "Jahnavi Kapoor",
    role: "Heroine",
     image: "/cast/heroine.jpg",
    description:
      "The leading lady of PEDDI .",
    hasFilmography: true,
    filmography: [
  { year: 2025, title: "Peddi", role: "Achiyamma" },
  { year: 2024, title: "Devara: Part 1", role: "Thangam" },
  { year: 2024, title: "Mr. & Mrs. Mahi", role: "Mahima" },
  { year: 2023, title: "Bawaal", role: "Nisha" },
  { year: 2023, title: "Mili", role: "Mili Naudiyal" },
  { year: 2022, title: "Good Luck Jerry", role: "Jerry" },
  { year: 2021, title: "Roohi", role: "Roohi / Afzana" },
  { year: 2020, title: "Gunjan Saxena: The Kargil Girl", role: "Gunjan Saxena" },
  { year: 2018, title: "Dhadak", role: "Parthavi Singh" },
],

  },
  {
    id: "director",
    name: "Buchi Babu Sana",
    role: "Director",
    image: "/cast/director.jpg",
    description:
      "The visionary director behind PEDDI.",
    hasFilmography: true,
    filmography: [
  { year: 2025, title: "Peddi", role: "Director" },
  { year: 2021, title: "Uppena", role: "Director" },
],

  },
  {
    id: "music",
    name: "AR Rahman",
    role: "Music Director",
    image: "/cast/music.jpg",
    description:
      "The musical genius composing the soundtrack for PEDDI",
    hasFilmography: true,
    filmography: [
  { year: 2025, title: "Peddi", role: "Music Director" },
  { year: 2024, title: "Chamkila", role: "Music Director" },
  { year: 2023, title: "Ponniyin Selvan: II", role: "Music Director" },
  { year: 2022, title: "Ponniyin Selvan: I", role: "Music Director" },
  { year: 2021, title: "Atrangi Re", role: "Music Director" },
  { year: 2018, title: "2.0", role: "Music Director" },
  { year: 2017, title: "Mersal", role: "Music Director" },
  { year: 2015, title: "Tamasha", role: "Music Director" },
  { year: 2014, title: "Highway", role: "Music Director" },
  { year: 2011, title: "Rockstar", role: "Music Director" },
  { year: 2009, title: "Slumdog Millionaire", role: "Music Director" },
  { year: 2007, title: "Guru", role: "Music Director" },
  { year: 1998, title: "Dil Se", role: "Music Director" },
  { year: 1995, title: "Bombay", role: "Music Director" },
  { year: 1992, title: "Roja", role: "Music Director" },
],
  },

// ================= OTHER MAIN CAST =================
  {
    id: "shivrajkumar",
    name: "Shivarajkumar",
    role: "Gournaidu",
    image: "/cast/shiv.jpg",
    description: "Plays Gournaidu in PEDDI.",
    hasFilmography: false,
    filmography: [],
  },
  {
    id: "divyendu",
    name: "Divyendu Sharma",
    role: "Ram Bujji",
    image: "/cast/divyendu.jpg",
    description: "Plays Ram Bujji in PEDDI.",
    hasFilmography: false,
    filmography: [],
  },
  {
    id: "jagapathi",
    name: "Jagapathi Babu",
    role: "Appalasoori",
    image: "/cast/jaggu.jpg",
    description: "Plays Appalasoori in PEDDI.",
    hasFilmography: false,
    filmography: [],
  },

  // ================= KEY CREW =================
  {
    id: "producer",
    name: "Venkata Satish Kilaru",
    role: "Producer",
    icon: Award,
    description: "Producer of PEDDI.",
    hasFilmography: false,
    filmography: [],
  },
  {
    id: "dop",
    name: "R. Rathnavelu",
    role: "Cinematographer",
    icon: Clapperboard,
    description: "Director of Photography for PEDDI.",
    hasFilmography: false,
    filmography: [],
  },
  {
    id: "editor",
    name: "Navin Nooli",
    role: "Editor",
    icon: Film,
    description: "Editor of PEDDI.",
    hasFilmography: false,
    filmography: [],
  },
];


export default function CastPageWrapper() {
  return (
    <Suspense fallback={null}>
      <CastPage />
    </Suspense>
  );
}

function CastPage() {

  const searchParams = useSearchParams();
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  // Check URL params for pre-selected member
  useEffect(() => {
    const member = searchParams.get("member");
    if (member && castMembers.find((m) => m.id === member)?.hasFilmography) {
      setSelectedMember(member);
    }
  }, [searchParams]);

  const selectedCastMember = castMembers.find((m) => m.id === selectedMember);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-7xl tracking-wider text-foreground mb-4">
            THE CAST
          </h1>
          <p className="text-muted-foreground text-lg">
            Meet the stars bringing PEDDI to life
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Cast Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {castMembers.map((member, index) => {
            const Icon = member.icon ?? User;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Photo placeholder */}
                   <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-secondary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
  {member.image ? (
    <Image
      src={member.image}
      alt={member.name}
      width={112}
      height={112}
      className="object-cover w-full h-full"
    />
  ) : (
    <Icon className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
  )}
</div>


                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-primary uppercase tracking-wider">
                        {member.role}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-1 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {member.description}
                      </p>

                      {/* Filmography button */}
                      {member.hasFilmography && member.filmography.length > 0 && (
                        <button
                          onClick={() => setSelectedMember(member.id)}
                          className="mt-4 flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/btn"
                        >
                          <Film className="w-4 h-4" />
                          <span>View Filmography</span>
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h2 className="font-serif text-2xl text-center text-foreground mb-8">
              Ram Charan - Career Highlights
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Film, value: "15", label: "Films" },
                { icon: Award, value: "15+", label: "Awards" },
                { icon: Calendar, value: "2007", label: "Debut" },
                { icon: User, value: "45M+", label: "Followers" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-serif text-3xl text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filmography Modal */}
      <AnimatePresence>
        {selectedCastMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg overflow-y-auto"
            onClick={() => setSelectedMember(null)}
          >
            <div className="min-h-screen py-20 px-4">
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="fixed top-6 right-6 p-3 bg-card/80 rounded-full hover:bg-primary/20 transition-colors duration-300 z-10"
                aria-label="Close filmography"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="max-w-2xl mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="text-center mb-12">
                  <span className="text-sm text-primary uppercase tracking-wider">
                    Filmography
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2">
                    {selectedCastMember.name}
                  </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {/* Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

                  {/* Films */}
                  <div className="space-y-4">
                    {selectedCastMember.filmography.map((film, index) => (
                      <motion.div
                        key={`${film.title}-${film.year}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="relative pl-20"
                      >
                        {/* Year dot */}
                        <div className="absolute left-6 top-4 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>

                        {/* Card */}
                        <div className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-colors duration-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-foreground">
                                {film.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {film.role}
                              </p>
                            </div>
                            <span className="text-sm font-mono text-primary">
                              {film.year}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
