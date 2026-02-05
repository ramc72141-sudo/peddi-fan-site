"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, ImageIcon, Music, Users, Newspaper } from "lucide-react";

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/songs", label: "Songs", icon: Music },
  { href: "/cast", label: "Cast", icon: Users },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 bg-card/80 backdrop-blur-sm border border-border rounded-lg hover:bg-primary/20 transition-colors duration-300"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-foreground" />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-card/95 backdrop-blur-lg border-l border-border z-50 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-primary/20 rounded-lg transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            {/* Logo */}
            <div className="pt-20 px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-4xl tracking-wider text-primary"
              >
                PEDDI
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-sm mt-1"
              >
                The Rage Begins
              </motion.p>
            </div>

            {/* Menu Items */}
            <ul className="flex-1 px-8 py-12 space-y-2">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group ${
                        isActive
                          ? "bg-primary/20 text-primary"
                          : "hover:bg-secondary text-foreground hover:text-primary"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                          isActive ? "text-primary" : ""
                        }`}
                      />
                      <span className="text-lg tracking-wide">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="ml-auto w-2 h-2 rounded-full bg-primary"
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-8 py-6 border-t border-border"
            >
              <p className="text-xs text-muted-foreground text-center">
                Fan-Made Tribute
              </p>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
