import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "The Critical Years: Why Early Intervention Matters",
      excerpt:
        "The first six years of a child's life are crucial for brain development and learning. Discover why early intervention can make a lifelong difference.",
      date: "March 1, 2024",
      author: "Dr. Sonika Sharma",
      category: "Early Intervention",
      image: "📚",
    },
    {
      id: 2,
      title: "Understanding Sensory Processing in Young Children",
      excerpt:
        "Not all children process sensory information the same way. Learn how to recognize sensory challenges and support your child effectively.",
      date: "February 28, 2024",
      author: "Occupational Therapy Team",
      category: "Development",
      image: "👂",
    },
    {
      id: 3,
      title: "Speech and Language Development Milestones",
      excerpt:
        "What should your child be able to say at different ages? A comprehensive guide to communication development from birth to age 6.",
      date: "February 25, 2024",
      author: "Speech Therapy Team",
      category: "Speech & Language",
      image: "🗣️",
    },
    {
      id: 4,
      title: "Building Confidence in Children with Special Needs",
      excerpt:
        "Confidence is built through success experiences. Learn strategies to create opportunities for your child to feel capable and proud.",
      date: "February 20, 2024",
      author: "Behavioral Support Team",
      category: "Emotional Development",
      image: "💪",
    },
    {
      id: 5,
      title: "Inclusive Education: Creating Spaces Where Every Child Belongs",
      excerpt:
        "Inclusive education isn't just about placing children in the same classroom. It's about creating truly belonging environments.",
      date: "February 15, 2024",
      author: "Dr. Sonika Sharma",
      category: "Inclusive Education",
      image: "🤝",
    },
    {
      id: 6,
      title: "Parent Coaching: Supporting Your Child's Development at Home",
      excerpt:
        "Therapeutic progress doesn't happen only in sessions. Discover how parents play the most crucial role in their child's growth.",
      date: "February 10, 2024",
      author: "Parent Coaching Team",
      category: "Parenting",
      image: "👨‍👩‍👧‍👦",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Panksh CARE Insights
            </h1>
            <p className="text-lg opacity-90">
              Articles on Early Intervention, Child Development & Inclusive
              Education
            </p>
          </div>
        </motion.div>
      </section>

      {/* FEATURED BLOG */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary/10 border rounded-xl p-8 md:p-12 grid md:grid-cols-2 gap-10 shadow-lg"
          >
            <div className="flex items-center justify-center text-[120px]">
              {blogs[0].image}
            </div>

            <div className="flex flex-col justify-center space-y-5">
              <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold w-fit">
                {blogs[0].category}
              </span>

              <h2 className="text-3xl font-bold text-primary">
                {blogs[0].title}
              </h2>

              <p className="text-muted-foreground">{blogs[0].excerpt}</p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blogs[0].date}
                </div>

                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {blogs[0].author}
                </div>
              </div>

              <Link to="#">
                <Button className="mt-4">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-12"
          >
            Latest Articles
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {blogs.slice(1).map((blog) => (
              <motion.article
                key={blog.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition border overflow-hidden"
              >
                <div className="bg-secondary/20 p-10 text-center text-6xl">
                  {blog.image}
                </div>

                <div className="p-6 space-y-4">
                  <span className="bg-secondary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>

                  <h3 className="text-lg font-semibold text-primary">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex justify-between text-xs text-muted-foreground pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </div>

                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {blog.author}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Stay Informed
          </h2>

          <p className="text-muted-foreground mb-8">
            Subscribe for insights on child development and early intervention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <Button>Subscribe</Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
