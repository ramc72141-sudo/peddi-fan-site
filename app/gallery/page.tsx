"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
} from "lucide-react";

import { galleryImages } from "@/lib/gallery";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentIndex =
    selectedImage !== null
      ? galleryImages.findIndex((img) => img.id === selectedImage)
      : -1;

  const goToNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[currentIndex + 1].id);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(galleryImages[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl md:text-7xl tracking-wider mb-4">
            GALLERY
          </h1>
          <p className="text-muted-foreground text-lg">
            Official posters, stills & moments from PEDDI
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.03 }}
                className="group relative aspect-[3/4] cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Card */}
                <div className="relative h-full rounded-xl overflow-hidden border border-border group-hover:border-primary/50 transition-all">
                  <img
                    src={item.src}
                    alt="PEDDI Gallery"
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <ZoomIn className="w-5 h-5 text-primary" />
                      <a
                        href={item.src}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-card/80 rounded-full hover:bg-primary/20 transition"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-card/80 rounded-full hover:bg-primary/20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-6 p-3 bg-card/80 rounded-full hover:bg-primary/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next */}
            {currentIndex < galleryImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-6 p-3 bg-card/80 rounded-full hover:bg-primary/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  galleryImages.find((img) => img.id === selectedImage)?.src
                }
                alt="PEDDI Gallery Full"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />

              {/* Download button */}
              <a
                href={
                  galleryImages.find((img) => img.id === selectedImage)?.src
                }
                download
                className="absolute bottom-4 right-4 p-3 bg-card/80 rounded-full hover:bg-primary/20 transition"
              >
                <Download className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 px-4 py-2 bg-card/80 rounded-full text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
