"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesBar from "@/components/CategoriesBar";
import WhyDietNexa from "@/components/WhyDietNexa";
import OurServices from "@/components/OurServices";
import ExpertDietitians from "@/components/ExpertDietitians";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("diet-plan");
  const [selectedDietitian, setSelectedDietitian] = useState(null);

  const handleOpenModal = (type = "diet-plan", dietitian = null) => {
    setModalType(type);
    setSelectedDietitian(dietitian);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSelectDietitian = (dietitian) => {
    handleOpenModal("consultation", dietitian);
  };

  const handleSelectService = (service) => {
    handleOpenModal("diet-plan");
  };

  const handleSelectCategory = (categoryId) => {
    handleOpenModal("diet-plan");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#dcf2e3] selection:text-[#0b4728] w-full overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Quick Categories Bar */}
        <CategoriesBar onSelectCategory={handleSelectCategory} />

        {/* Why DietNexa Section */}
        <WhyDietNexa onExploreServices={() => {}} />

        {/* Services Section */}
        <OurServices onSelectService={handleSelectService} />

        {/* Meet Our Expert Dietitians */}
        <ExpertDietitians
          onSelectDietitian={handleSelectDietitian}
          onOpenModal={handleOpenModal}
        />

        {/* What Our Users Say (Testimonials) */}
        <Testimonials />

        {/* CTA Banner */}
        <CtaBanner onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation & Diet Plan Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialType={modalType}
        selectedDietitian={selectedDietitian}
      />
    </div>
  );
}
