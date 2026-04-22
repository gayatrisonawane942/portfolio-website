"use client";

import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-10 lg:py-24 bg-gradient-to-bl from-[#E5F8F7] via-[#fff] to-[#EADFF8]">
      <div className="container mx-auto">

        <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-10 text-center">
          Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Degree */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Amrutvahini College of Engineering, Sangamner
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              B.E in Computer Science and Engineering | 2021 – 2025
            </p>

            <p className="text-gray-700 mt-3 font-medium">
              CGPA: 8.75
            </p>
          </div>

          {/* HSC */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900">
              P.V.P. College of Arts, Science and Commerce, Loni Kd
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Higher Secondary Education (Class XII) | 2020 – 2021
            </p>

            <p className="text-gray-700 mt-3 font-medium">
              Percentage: 82.33%
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}