import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, MapPin, Users, Mic, BookOpen, Handshake, Linkedin, Twitter, Mail, Phone } from "lucide-react"

export default function Component() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Schedule", href: "#schedule" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Attendees" },
    { icon: Mic, value: "10+", label: "Speakers" },
    { icon: BookOpen, value: "15+", label: "Sessions" },
    { icon: Handshake, value: "20+", label: "Sponsors" },
  ]

  const speakers = [
    {
      name: "Jane Doe",
      title: "Cloud Architect @ AWS",
      image: "/placeholder.svg?height=120&width=120",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "John Smith",
      title: "DevOps Engineer @ Google",
      image: "/placeholder.svg?height=120&width=120",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Alice Johnson",
      title: "Data Scientist @ Microsoft",
      image: "/placeholder.svg?height=120&width=120",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Bob Williams",
      title: "Software Engineer @ Amazon",
      image: "/placeholder.svg?height=120&width=120",
      linkedin: "#",
      twitter: "#",
    },
  ]

  const schedule = [
    {
      time: "09:00 AM - 09:30 AM",
      title: "Registration & Networking",
      speaker: "Event Team",
      description: "Check-in, grab your badge, and network with fellow attendees.",
    },
    {
      time: "09:30 AM - 10:00 AM",
      title: "Opening Keynote: The Future of Cloud",
      speaker: "Jane Doe",
      description: "An insightful session on the evolving landscape of cloud computing and its impact.",
    },
    {
      time: "10:00 AM - 11:00 AM",
      title: "Serverless Architectures with AWS Lambda",
      speaker: "John Smith",
      description: "Deep dive into building scalable and cost-effective serverless applications.",
    },
    {
      time: "11:00 AM - 11:30 AM",
      title: "Tea Break & Networking",
      speaker: "",
      description: "A short break to refresh and connect with others.",
    },
    {
      time: "11:30 AM - 12:30 PM",
      title: "Data Analytics on AWS: From S3 to Redshift",
      speaker: "Alice Johnson",
      description: "Explore the tools and best practices for data analysis on the AWS platform.",
    },
    {
      time: "12:30 PM - 01:30 PM",
      title: "Lunch Break",
      speaker: "",
      description: "Enjoy a delicious lunch and continue networking.",
    },
    {
      time: "01:30 PM - 02:30 PM",
      title: "Containerization with EKS and ECS",
      speaker: "Bob Williams",
      description: "Understanding container orchestration services on AWS for modern applications.",
    },
    {
      time: "02:30 PM - 03:30 PM",
      title: "Building Secure Applications on AWS",
      speaker: "Jane Doe",
      description: "Best practices and services for enhancing the security posture of your cloud applications.",
    },
    {
      time: "03:30 PM - 04:00 PM",
      title: "Closing Remarks & Vote of Thanks",
      speaker: "Event Team",
      description: "Concluding the event with key takeaways and acknowledgements.",
    },
  ]

  const sponsors = {
    Platinum: [
      { name: "Company A", logo: "/placeholder.svg?height=80&width=200" },
      { name: "Company B", logo: "/placeholder.svg?height=80&width=200" },
    ],
    Gold: [
      { name: "Company C", logo: "/placeholder.svg?height=60&width=150" },
      { name: "Company D", logo: "/placeholder.svg?height=60&width=150" },
      { name: "Company E", logo: "/placeholder.svg?height=60&width=150" },
    ],
    Silver: [
      { name: "Company F", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Company G", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Company H", logo: "/placeholder.svg?height=40&width=100" },
      { name: "Company I", logo: "/placeholder.svg?height=40&width=100" },
    ],
    "Community Partners": [
      { name: "Community J", logo: "/placeholder.svg?height=50&width=120" },
      { name: "Community K", logo: "/placeholder.svg?height=50&width=120" },
    ],
  }

  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Lead Organizer",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Team Member 2",
      role: "Logistics Head",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Team Member 3",
      role: "Marketing Lead",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Team Member 4",
      role: "Volunteer Coordinator",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 font-bold text-primary" prefetch={false}>
            <Image src="/placeholder.svg?height=32&width=32" alt="AWS Logo" width={32} height={32} />
            <span>AWS Student Community Day Indore</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                prefetch={false}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-primary hover:bg-primary/90">
              <Link href="#contact" prefetch={false}>
                Register Now
              </Link>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary"
                    prefetch={false}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                  <Link href="#contact" prefetch={false}>
                    Register Now
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-center md:h-[80vh]"
          style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 space-y-4 px-4 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              AWS Student Community Day Indore
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">20th July 2024 | Medi-Caps University, Indore</p>
            <Button size="lg" className="mt-6 bg-primary text-lg hover:bg-primary/90">
              <Link href="#contact" prefetch={false}>
                Register Now
              </Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 lg:py-28">
          <div className="container space-y-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Event</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                AWS Student Community Day Indore is a premier event designed to bring together students, developers, and
                cloud enthusiasts to explore the latest advancements in Amazon Web Services. This event provides a
                unique platform for learning, networking, and hands-on experience with AWS technologies.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card text-card-foreground">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">{stat.value}</CardTitle>
                    <stat.icon className="h-8 w-8 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container space-y-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Speakers</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Meet the industry experts and thought leaders who will be sharing their knowledge and insights.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {speakers.map((speaker, index) => (
                <Card key={index} className="bg-card text-card-foreground">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      width={120}
                      height={120}
                      className="mb-4 h-32 w-32 rounded-full object-cover"
                    />
                    <h3 className="text-xl font-semibold">{speaker.name}</h3>
                    <p className="text-sm text-muted-foreground">{speaker.title}</p>
                    <div className="mt-4 flex gap-3">
                      <Link
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href={speaker.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-12 md:py-20 lg:py-28">
          <div className="container space-y-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Event Schedule</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">Plan your day with our detailed event schedule.</p>
            </div>
            <Tabs defaultValue="day-1" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-1">
                <TabsTrigger value="day-1">Day 1: July 20, 2024</TabsTrigger>
                {/* Add more days if needed */}
              </TabsList>
              <TabsContent value="day-1" className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {schedule.map((session, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="flex items-center justify-between gap-4 p-4 text-left hover:no-underline">
                        <div className="flex flex-col items-start md:flex-row md:items-center md:gap-4">
                          <span className="min-w-[120px] text-sm font-semibold text-primary">{session.time}</span>
                          <span className="text-lg font-medium">{session.title}</span>
                        </div>
                        {session.speaker && (
                          <span className="ml-auto hidden text-sm text-muted-foreground md:block">
                            {session.speaker}
                          </span>
                        )}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-muted-foreground">
                        {session.description}
                        {session.speaker && (
                          <div className="mt-2 block text-sm text-muted-foreground md:hidden">
                            Speaker: {session.speaker}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container space-y-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Sponsors</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                We are grateful to our generous sponsors for making this event possible.
              </p>
            </div>
            {Object.entries(sponsors).map(([tier, logos]) => (
              <div key={tier} className="space-y-6">
                <h3 className="text-2xl font-bold text-center text-primary">{tier} Sponsors</h3>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {logos.map((sponsor, index) => (
                    <Image
                      key={index}
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={tier === "Platinum" ? 200 : tier === "Gold" ? 150 : 100}
                      height={tier === "Platinum" ? 80 : tier === "Gold" ? 60 : 40}
                      className="object-contain"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-12 md:py-20 lg:py-28">
          <div className="container space-y-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Meet the dedicated team behind AWS Student Community Day Indore.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-card text-card-foreground">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="mb-4 h-24 w-24 rounded-full object-cover"
                    />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <div className="mt-4 flex gap-3">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container space-y-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Have questions or need assistance? Reach out to us!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="bg-card text-card-foreground p-6">
                <CardTitle className="mb-4 text-2xl">Send us a message</CardTitle>
                <form className="grid gap-4">
                  <Input type="text" placeholder="Your Name" className="bg-input text-foreground" />
                  <Input type="email" placeholder="Your Email" className="bg-input text-foreground" />
                  <Textarea placeholder="Your Message" className="min-h-[120px] bg-input text-foreground" />
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </Card>
              <Card className="bg-card text-card-foreground p-6">
                <CardTitle className="mb-4 text-2xl">Contact Information</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <Link href="mailto:info@example.com" className="text-muted-foreground hover:text-primary">
                      info@example.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <Link href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                      +1 (234) 567-890
                    </Link>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-muted-foreground">
                      Medi-Caps University, A.B. Road, Pigdamber, Rau, Indore, Madhya Pradesh 453331
                    </p>
                  </div>
                </div>
                <div className="mt-6 h-64 w-full overflow-hidden rounded-lg bg-gray-800">
                  {/* Placeholder for map embed */}
                  <Image
                    src="/placeholder.svg?height=256&width=500"
                    alt="Map location"
                    width={500}
                    height={256}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-background py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AWS Student Community Day Indore. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link
              href="#home"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#speakers"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              Speakers
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
