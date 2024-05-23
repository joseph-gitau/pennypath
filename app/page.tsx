
import Button from "./components/common/Button";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
    
    return (
      <div className="bg-base-100 text-neutral min-h-screen">
        <Head>
          <title>PennyPath - Track Your Finances Effortlessly</title>
          <meta
            name="description"
            content="PennyPath helps you track your expenses, set financial goals, and gain financial insights."
          />
          <link rel="icon" href="/icons/favicon.ico" />
        </Head>

        <header className="bg-primary text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">PennyPath</h1>
            <nav>
              <a href="#features" className="ml-4">
                Features
              </a>
              <a href="#pricing" className="ml-4">
                Pricing
              </a>
              <a href="#contact" className="ml-4">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-10">
          <section className="text-center">
            <h2 className="text-5xl font-bold text-primary">
              Track Your Finances Effortlessly
            </h2>
            <p className="mt-4 text-lg text-secondary">
              PennyPath helps you track your expenses, set financial goals, and
              gain financial insights.
            </p>
            <Button className="mt-6 bg-accent hover:bg-accent-dark">
              Get Started
            </Button>
          </section>

          <section id="features" className="mt-20">
            <h3 className="text-3xl font-bold text-primary text-center">
              Features
            </h3>
            <div className="flex flex-wrap justify-center mt-10">
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-primary">
                    Track Expenses
                  </h4>
                  <p className="mt-2 text-secondary">
                    Easily track your daily expenses and categorize them for
                    better insights.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-primary">Set Goals</h4>
                  <p className="mt-2 text-secondary">
                    Set financial goals and track your progress towards
                    achieving them.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-primary">
                    Gain Insights
                  </h4>
                  <p className="mt-2 text-secondary">
                    Visualize your spending patterns with detailed charts and
                    reports.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="pricing" className="mt-20">
            <h3 className="text-3xl font-bold text-primary text-center">
              Pricing
            </h3>
            <div className="flex flex-wrap justify-center mt-10">
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-primary">Basic</h4>
                  <p className="mt-2 text-secondary">$0/month</p>
                  <p className="mt-2">Basic features for personal use.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-primary">Premium</h4>
                  <p className="mt-2 text-secondary">$9.99/month</p>
                  <p className="mt-2">Advanced features for power users.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-primary">
                    Enterprise
                  </h4>
                  <p className="mt-2 text-secondary">Custom pricing</p>
                  <p className="mt-2">Tailored solutions for businesses.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-primary">Contact Us</h3>
            <p className="mt-4 text-secondary">
              Have questions or need support? Reach out to us!
            </p>
            <form className="mt-6">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-md mt-4"
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full max-w-md mt-4"
              ></textarea>
              <Button className="mt-4 bg-primary">Send Message</Button>
            </form>
          </section>
        </main>

        <footer className="bg-primary text-white py-4 mt-20">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} PennyPath. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
}
