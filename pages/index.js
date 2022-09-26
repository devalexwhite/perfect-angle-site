import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  CubeIcon,
  ChatBubbleBottomCenterTextIcon,
  CameraIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

import Gallery1 from "../images/samples/gallery-1.jpg";
import Gallery2 from "../images/samples/gallery-2.jpg";
import Gallery3 from "../images/samples/gallery-3.jpg";
import Gallery4 from "../images/samples/gallery-4.jpg";

function QuoteCTASection() {
  return (
    <div className="bg-indigo-700 my-16">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Get a free quote today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          No obligation, no pressure. Contact us to discuss which services are best for you and to get a free quote.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
        >
          Get a free quote
        </a>
      </div>
    </div>
  );
}

function ServicesSection() {
  const features = [
    {
      name: "Photography",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: CameraIcon,
    },
    {
      name: "Videography",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: VideoCameraIcon,
    },
    {
      name: "3D Scanning",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: CubeIcon,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            What we offer
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            We offer a step above the competition.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our professional services can take your real estate listing, rental
            listing or business ad to the next level.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    ></feature.icon>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            More than a pretty picture
          </h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            First impressions do matter.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            83% of buyers have said photographs are exteremly important when
            deciding to view a property. That's why it's important that you put
            your best foot forward with stunning, professional photographs,
            videos and 3D scans.
          </p>
        </div>
      </div>
    </div>
  );
}

function ImageGrid() {
  return (
    <section class="overflow-hidden text-gray-700 w-full">
      <div class="mb-16 px-5 py-2 mx-auto  lg:px-32">
        <div class="flex flex-col lg:flex-row lg:flex-wrap -m-1 md:-m-2">
          <div class="flex flex-col lg:flex-row lg:flex-wrap w-full lg:w-1/2">
            <div class="w-full lg:w-1/2 p-1 md:p-2">
              <Image
                src={Gallery1}
                alt="A single family home"
                className="block object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div class="w-full lg:w-1/2 p-1 md:p-2">
              <Image
                src={Gallery2}
                alt="A single family home"
                className="block object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <Image
                src={Gallery3}
                alt="A single family home"
                className="block object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div class="flex flex-col lg:flex-row lg:flex-wrap w-full lg:w-1/2">
            <div class="w-full p-1 md:p-2">
              <Image
                src={Gallery4}
                alt="A single family home"
                className="block object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <div class="w-full lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              ></img>
            </div>
            <div class="w-full lg:w-1/2 p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Perfect Angle | Real estate photography in Columbus, Ohio</title>
        <meta
          name="description"
          content="Real estate photographer in Columbus, Ohio offering photos, videos and 3D scans for residential and commerical properties."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <CTASection></CTASection>
      <ImageGrid></ImageGrid>
      <ServicesSection></ServicesSection>
      <QuoteCTASection></QuoteCTASection>
      <Footer></Footer>
    </div>
  );
}
