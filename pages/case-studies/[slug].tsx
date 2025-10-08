import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { CASE_STUDIES } from "@/data/case-studies";
import { CaseStudyPage } from "@/components/case-studies/CaseStudyPage";

export default function CaseStudyDetail() {
  const { query } = useRouter();
  const slug = String(query.slug || "");
  const cs = CASE_STUDIES.find(c => c.slug === slug);
  
  if (!cs) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-slate-600">The case study you're looking for doesn't exist.</p>
        <a href="/case-studies" className="mt-6 inline-block text-amber-600 hover:underline">
          View all case studies →
        </a>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>{cs.headline} | Kenosa Consulting</title>
        {cs.seo && <meta name="description" content={cs.seo} />}
        <meta property="og:title" content={cs.headline} />
        {cs.seo && <meta property="og:description" content={cs.seo} />}
        <meta property="og:type" content="article" />
      </Head>
      <CaseStudyPage cs={cs} />
    </>
  );
}

// Generate static paths for all case studies
export async function getStaticPaths() {
  const paths = CASE_STUDIES.map(cs => ({
    params: { slug: cs.slug }
  }));
  
  return {
    paths,
    fallback: false
  };
}

// Get props for each case study
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const cs = CASE_STUDIES.find(c => c.slug === params.slug);
  
  if (!cs) {
    return {
      notFound: true
    };
  }
  
  return {
    props: {
      cs
    }
  };
}
