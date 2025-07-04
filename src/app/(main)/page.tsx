
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Users, HeartHandshake, Search, Building, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        className="hero-section text-center py-12 md:py-20 rounded-xl shadow-lg relative overflow-hidden"
        style={{
          // Background image is now handled by the ::before pseudo-element
        }}
      >
        <div className="container mx-auto px-4 relative z-10"> {/* Add relative and z-10 to keep content above background */}
          <Droplet className="mx-auto h-16 w-16 text-primary mb-6 animate-pulse animate-fade-in-up" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground animate-fade-in-up">
            Welcome to <span className="text-primary">BloodLink BD</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white animate-fade-in-up-delayed-1">
            Connecting hearts, saving lives. Find blood donors and request blood in Bangladesh with ease and efficiency.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up-delayed-2">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
              <Link href="/request-blood">
                <HeartHandshake className="mr-2 h-5 w-5" /> Request Blood
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-md transition-transform hover:scale-105 border-primary text-primary hover:bg-primary/10">
              <Link href="/donate">
                <Users className="mr-2 h-5 w-5" /> Become a Donor
              </Link>
            </Button>
          </div>
        </div>
        {/* Styles for the ::before pseudo-element */}
        <style jsx>{`
          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('https://i.ibb.co/BVRcJYYb/fotor-ai-20250528121737.jpg');
            background-size: cover;
            background-position: center;
            filter: blur(5px);
            z-index: 0; /* Ensure the pseudo-element is behind the content */
          }
        `}</style>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-10 text-foreground">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up-delayed-1">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-accent/30 rounded-full">
                  <UserPlus className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
              <CardTitle className="text-center text-xl">Register</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Sign up as a donor or create an account to request blood. It's quick and easy.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up-delayed-2">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-accent/30 rounded-full">
                  <Search className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
              <CardTitle className="text-center text-xl">Find or Request</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Search for available donors by blood group and location, or post a blood request.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up-delayed-3">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-accent/30 rounded-full">
                  <HeartHandshake className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
              <CardTitle className="text-center text-xl">Connect & Save</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Connect with potential donors or requesters. Your contribution can save a life.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-card rounded-xl shadow-lg">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-foreground animate-fade-in-up">Join Our Community</h2>
            <p className="text-muted-foreground mb-6 text-lg animate-fade-in-up-delayed-1">
              Be a part of a life-saving network. Every drop counts, and every donor is a hero. 
              Together, we can make a difference in countless lives across Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delayed-2">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
                <Link href="/auth/register">
                  Get Started
                </Link>
              </Button>
               <Button size="lg" variant="outline" asChild className="shadow-md transition-transform hover:scale-105">
                <Link href="/donors">
                  View Donors
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md animate-fade-in-up-delayed-3">
            <Image 
              src="https://i.ibb.co/MDSwLLVX/Generated-Image-May-28-2025-10-48-AM.jpg" 
              alt="Community of blood donors and medical professionals" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
        </div>
      </section>

       <section className="text-center py-12">
        <h2 className="text-3xl font-semibold text-center mb-2 text-foreground animate-fade-in-up">Our Mission</h2>
         <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up-delayed-1">
            To bridge the gap between blood donors and those in need, fostering a community of support and compassion throughout Bangladesh. We leverage technology to make blood donation and reception more accessible and efficient.
          </p>
      </section>
    </div>
  );
}
