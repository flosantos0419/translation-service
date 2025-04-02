
import React from "react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Fast & Accurate Document Translation Services</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Certified translations for immigration, legal, academic, and more — delivered fast and hassle-free.
        </p>
        <Button className="text-lg px-6 py-3">Get a Free Quote</Button>
      </section>
    </div>
  );
}
