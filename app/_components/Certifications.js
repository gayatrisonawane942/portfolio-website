"use client";

import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import Link from "next/link";

export default function Certifications() {
  const [certs, setCerts] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "AWS Training & Certification",
        issuer: "AWS Cloud Practitioner Essentials",
        desc: "Fundamentals of AWS cloud services including EC2, S3, IAM, VPC, and cloud architecture basics.",
        link: "https://drive.google.com/file/d/1Q1Bt0Og6nVxFmNW412Y__ISQ0BelQNi4/view"
      },
      {
        id: 2,
        title: "Python Programming",
        issuer: "IBM",
        desc: "Python fundamentals including syntax, data types, control structures, functions, and basic problem solving using Python.",
        link: "https://acrobat.adobe.com/id/urn:aaid:sc:ap:425fc94e-92e1-4855-877c-f1ffba0776d3"
      },
      {
        id: 3,
        title: "Gen AI Certification",
        issuer: "Microsoft",
        desc: "Introduction to Generative AI concepts including prompt engineering, large language models, and real-world AI applications,",
        link: "https://acrobat.adobe.com/id/urn:aaid:sc:ap:be292e7c-044b-4e42-b521-b66e8778d2e8"
      },
      {
        id: 4,
        title: "SQL (Intermediate) Certification",
        issuer: "HackerRank",
        desc: "Database queries, joins, and data manipulation techniques.",
        link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:5d9e157c-8ffd-49c7-908f-9facdfff3a45"
      },
      {
        id: 5,
        title: "Java (Basic) Certification",
        issuer: "HackerRank",
        desc: "Core Java concepts including OOP and basic problem solving.",
        link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:af450ba4-387a-4b95-9678-6d94f092d301"
      },
      {
        id: 6,
        title: "C++ Programming",
        issuer: "Technorbit Infosystems",
        desc: "Object-oriented programming concepts and development basics.",
        link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:f0735400-213a-4858-9ade-55b0c89091b2"
      },
      {
        id: 7,
        title: "C Programming",
        issuer: "Technorbit Infosystems",
        desc: "Programming fundamentals, logic building, and problem solving.",
        link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:f90beb30-0196-49a5-81b5-217dca05b8f4"
      }
    ];

    setCerts(data);
  }, []);

  const certTemplate = (cert) => {
    return (
      <div className="bg-white rounded-lg border mx-3 p-6 shadow-sm hover:shadow-lg transition">

        <div className="text-sm text-gray-500">
          {cert.issuer}
        </div>

        <h3 className="text-gray-900 text-lg font-semibold mt-2">
          {cert.title}
        </h3>

        <p className="text-gray-600 text-sm mt-3">
          {cert.desc}
        </p>

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            className="text-primary-500 text-sm mt-3 inline-block"
          >
            View Certificate →
          </a>
        )}

      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={certs}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={certTemplate}
      />
    </div>
  );
}