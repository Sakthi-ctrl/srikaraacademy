import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { courses, reviews, students } from "./data";
import type { Category, Course } from "./data";

type IconName =
  | "arrow"
  | "chevron"
  | "phone"
  | "mail"
  | "pin"
  | "check"
  | "book"
  | "code"
  | "chart"
  | "design"
  | "users"
  | "award"
  | "briefcase"
  | "clock"
  | "play"
  | "close"
  | "menu"
  | "message"
  | "star"
  | "target"
  | "globe";
function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15M13 5l7 7-7 7" />
      </>
    ),
    chevron: <path d="m9 5 7 7-7 7" />,
    phone: <path d="m8 3 3 5-3 3a14 14 0 0 0 5 5l3-3 5 3-1 4c-1 4-9 0-13-4S-1 4 3 3Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    book: (
      <>
        <path d="M12 5c-4-3-9-2-9-2v16s5-1 9 2c4-3 9-2 9-2V3s-5-1-9 2Z" />
        <path d="M12 5v16" />
      </>
    ),
    code: (
      <>
        <path d="m7 7-5 5 5 5m10-10 5 5-5 5m-3-13-4 20" />
      </>
    ),
    chart: (
      <>
        <path d="M4 3v17h17M8 15v-4m5 4V7m5 8V4" />
      </>
    ),
    design: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="m7 15 5-8 5 8H7Zm5-8v11" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-3a7 7 0 0 1 14 0v3m0-18a4 4 0 0 1 0 8m3 3c2 1 3 3 3 5v2" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="m8 13-2 9 6-3 6 3-2-9" />
        <path d="m10 8 1.5 1.5L14 6" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V3h8v4M3 12c6 4 12 4 18 0m-9 1v4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    play: <path d="m9 5 11 7-11 7V5Z" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    message: (
      <>
        <path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5Z" />
        <path d="M8 8c0 4 4 8 8 7m-8-7 2 2m4 3 2 2" />
      </>
    ),
    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
const Arrow = () => <Icon name="arrow" size={18} />;
const whatsapp = "https://wa.me/919843093936";
const categories = [
  "All Courses",
  "Finance & Accounting",
  "IT & Data",
  "Marketing & Design",
] as const;
const categoryIcons: Record<Category, IconName> = {
  "Finance & Accounting": "chart",
  "IT & Data": "code",
  "Marketing & Design": "design",
};
const categoryClass: Record<Category, string> = {
  "Finance & Accounting": "finance",
  "IT & Data": "technology",
  "Marketing & Design": "creative",
};

const corporateCourseTracks = [
  {
    id: "finance",
    category: "Finance & Accounting" as Category,
    title: "Accounting • Finance • Tax",
    subtitle: "Learning with AI",
    image: "/images/course-cat-finance.jpg",
    tags: ["TALLY", "GST", "INCOME TAX", "AI TOOLS"],
    features: ["13+ Courses", "Placement Help", "Industry Approved"],
    stats: {
      rating: "4.8+",
      students: "2500+ Students",
      training: "100% Practical Training",
    },
  },
  {
    id: "marketing",
    category: "Marketing & Design" as Category,
    title: "Digital Marketing & Creative Design",
    subtitle: "Creative Learning with AI",
    image: "/images/course-cat-marketing.jpg",
    tags: ["GRAPHIC DESIGN", "UI/UX", "SEO", "ADS STRATEGY"],
    features: ["4+ Courses", "Job Ready Skills", "International Certificate"],
    stats: {
      rating: "4.9+",
      students: "2200+ Students",
      training: "100% Practical Training",
    },
  },
  {
    id: "tech",
    category: "IT & Data" as Category,
    title: "Programming • Development • AI & Data",
    subtitle: "Coding with AI",
    image: "/images/course-cat-tech.jpg",
    tags: ["PYTHON", "REACT", "SQL", "CLOUD"],
    features: ["20+ Courses", "Job Placement Guarantee", "Industry Level Training"],
    stats: {
      rating: "4.8+",
      students: "4500+ Students",
      training: "100% Practical Training",
    },
  },
];

const getStudentTrack = (course: string) => {
  const c = course.toLowerCase();
  if (c.includes("tally") || c.includes("gst") || c.includes("finance") || c.includes("accounting")) {
    return {
      slug: "finance",
      mainTitle: "Accounting & Finance",
      accentTitle: "Tax & GST",
      toolChips: [
        { name: "Tally", color: "green" },
        { name: "GST", color: "red" },
        { name: "Zoho", color: "blue" },
        { name: "Excel", color: "emerald" },
      ],
    };
  }
  if (c.includes("full stack") || c.includes("python") || c.includes("data") || c.includes("code") || c.includes("tech")) {
    return {
      slug: "tech",
      mainTitle: "Programming Development",
      accentTitle: "AI & Data",
      toolChips: [
        { name: "React", color: "cyan" },
        { name: "Python", color: "blue" },
        { name: "Node.js", color: "emerald" },
        { name: "JS", color: "amber" },
      ],
    };
  }
  return {
    slug: "marketing",
    mainTitle: "Digital Marketing",
    accentTitle: "UI/UX & AI",
    toolChips: [
      { name: "Figma", color: "purple" },
      { name: "UI/UX", color: "indigo" },
      { name: "SEO", color: "red" },
      { name: "Ads", color: "amber" },
    ],
  };
};

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);
  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-inner">
        <button className="icon-button modal-close" onClick={onClose} aria-label="Close dialog">
          <Icon name="close" />
        </button>
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>{title}</h2>
        {children}
      </div>
    </dialog>
  );
}

function VideoModal({
  onClose,
  onBookDemo,
}: {
  onClose: () => void;
  onBookDemo: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="modal video-modal"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-inner video-modal-inner">
        <button className="icon-button modal-close" onClick={onClose} aria-label="Close demo video">
          <Icon name="close" />
        </button>
        <span className="eyebrow">SEE US IN ACTION</span>
        <h2>Inside Srikara: Practical Classroom & Training Demo</h2>
        <div className="video-player-wrap">
          <video
            ref={videoRef}
            src="/demo-video.mp4"
            controls
            autoPlay
            playsInline
            className="demo-video-player"
          />
        </div>
        <div className="video-modal-footer">
          <div>
            <strong>Ready to start your training?</strong>
            <p>Book a free 1-on-1 personalized demo session with our senior faculty.</p>
          </div>
          <button
            className="button primary"
            onClick={() => {
              onClose();
              onBookDemo();
            }}
          >
            Book My Free Demo <Arrow />
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<Category | null>(null);
  const [booking, setBooking] = useState(false);
  const [bookingCourse, setBookingCourse] = useState("");
  const [playingVideo, setPlayingVideo] = useState(false);
  const [storyPage, setStoryPage] = useState(0);
  const [reviewPage, setReviewPage] = useState(0);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document.querySelectorAll("main > section[id]").forEach((s) => observer.observe(s));

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
          } else if (entry.boundingClientRect.top > 0) {
            // Re-trigger smoothly when user scrolls back down
            entry.target.classList.remove("is-inview");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -35px 0px" },
    );
    const animElements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .stagger-children, .reveal"
    );
    animElements.forEach((el) => scrollObserver.observe(el));

    return () => {
      observer.disconnect();
      scrollObserver.disconnect();
    };
  }, [storyPage, reviewPage]);

  const bookDemo = (course = "") => {
    setBookingCourse(course);
    setSelectedCourse(null);
    setBooking(true);
    setMobileOpen(false);
  };
  const navigate = () => setMobileOpen(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <div className="container announcement-inner">
          <span>
            <span className="announcement-label">WHAT’S NEW</span> We’re now officially tied up with{" "}
            <strong>Zoho Books</strong> for training.
          </span>
          <a href="https://srikaraacademy.com/zoho-books/" target="_blank" rel="noreferrer">
            Explore the partnership <Arrow />
          </a>
        </div>
      </div>
      <header className="header">
        <div className="container nav-inner">
          <a
            href="#home"
            className="logo-link"
            aria-label="Srikara Academy home"
            onClick={navigate}
          >
            <img src="/images/srikara-logo.png" alt="Srikara Training and Placement Academy" />
          </a>
          <nav aria-label="Main navigation" className={mobileOpen ? "main-nav open" : "main-nav"}>
            {[
              ["home", "Home"],
              ["about", "About Us"],
              ["courses", "Our Courses"],
              ["placements", "Placements"],
              ["insights", "Insights"],
              ["contact", "Contact"],
            ].map(([id, text]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={navigate}
                className={activeSection === id ? "active" : ""}
              >
                {text}
                {id === "courses" && <Icon name="chevron" size={12} className="nav-chevron" />}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a
              className="button primary nav-demo nav-login-btn"
              href="https://srikaraacademy.com/student-access/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Student Login - Opens in new window"
            >
              <Icon name="users" size={16} /> Student Login <Arrow />
            </a>
            <button
              className="icon-button mobile-toggle"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="admissions">
                <span className="live-dot" /> ADMISSIONS OPEN FOR 2026{" "}
                <span className="badge-divider" /> YOUR FUTURE STARTS NOW
              </div>
              <h1>
                Real skills.
                <br />
                Real confidence.
                <br />
                <span>Remarkable careers.</span>
              </h1>
              <p>
                Go beyond the classroom. Build in-demand skills with practical training, real-world
                projects, and a team invested in your success.
              </p>
              <div className="hero-buttons">
                <a href="#courses" className="button primary">
                  Explore Our Courses <Arrow />
                </a>
                <button
                  className="button secondary hero-demo-video-btn"
                  onClick={() => setPlayingVideo(true)}
                  aria-label="Watch demo video"
                >
                  <span className="play-circle">
                    <Icon name="play" size={12} />
                  </span>{" "}
                  Book a Free Demo
                </button>
              </div>
              <div className="hero-checks">
                <span>
                  <Icon name="check" size={14} /> No demo fees
                </span>
                <span>
                  <Icon name="check" size={14} /> No pressure
                </span>
                <span>
                  <Icon name="check" size={14} /> Just real guidance
                </span>
              </div>
              <div className="hero-social-proof">
                <div className="avatar-stack">
                  {students.slice(0, 4).map((s) => (
                    <img key={s.name} src={`/images/${s.image}`} alt="" />
                  ))}
                </div>
                <div>
                  <div className="stars">
                    ★★★★★ <span>4.9/5</span>
                  </div>
                  <p>
                    Trusted by <strong>500+ learners</strong> and counting
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div
                className="hero-photo-wrap"
                onClick={() => setPlayingVideo(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setPlayingVideo(true)}
                aria-label="Watch Srikara Academy Demo Video"
                style={{ cursor: "pointer" }}
              >
                <img
                  className="hero-photo"
                  src="/images/academy-hero.webp"
                  alt="Students building practical computer skills in a modern training classroom"
                  fetchPriority="high"
                />
                <div className="photo-gradient" />
                <div className="photo-play-badge">
                  <Icon name="play" size={15} />
                  <span>WATCH DEMO</span>
                </div>
                <div className="photo-caption">
                  <span className="caption-line" /> A new skill. A stronger you.
                </div>
                <span className="photo-corner">LEARN. BUILD. GROW.</span>
              </div>
              <div className="floating-badge">
                <span className="badge-icon">
                  <Icon name="award" size={25} />
                </span>
                <div>
                  <strong>Industry-ready. From day one.</strong>
                  <span>Learn from experts. Grow with confidence.</span>
                </div>
              </div>
              <div className="placement-float">
                <span className="placement-icon">
                  <Icon name="briefcase" size={24} />
                </span>
                <div>
                  <span>YOUR AMBITION. OUR COMMITMENT.</span>
                  <strong>100% Placement Assistance</strong>
                  <p>From your first lesson to your first offer.</p>
                </div>
                <span className="verified">
                  <Icon name="check" size={13} />
                </span>
              </div>
              <div className="hero-dots" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="stats-section scroll-reveal" aria-label="Srikara at a glance">
          <div className="container stats-grid stagger-children">
            {[
              ["10+", "Years of trainer experience", "users"],
              ["100%", "Placement assistance", "briefcase"],
              ["29", "Career-focused courses", "book"],
              ["4.9/5", "Rated by our learners", "star"],
            ].map(([n, label, icon]) => (
              <div className="stat" key={label}>
                <Icon name={icon as IconName} size={26} />
                <div>
                  <strong>{n}</strong>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="employers scroll-reveal">
          <div className="container">
            <p>
              BIG AMBITIONS. REAL OPPORTUNITIES. <span>OUR STUDENTS WORK AT</span>
            </p>
            <div className="employer-marquee">
              <div className="employer-track">
                {[
                  [13, "Infosys"],
                  [15, "Wipro"],
                  [14, "Cognizant"],
                  [10, "Accenture"],
                  [7, "HCL"],
                  [21, "Deloitte"],
                  [9, "Amazon"],
                  [13, "Infosys"],
                  [15, "Wipro"],
                  [14, "Cognizant"],
                  [10, "Accenture"],
                  [7, "HCL"],
                  [21, "Deloitte"],
                  [9, "Amazon"],
                ].map(([n, name], idx) => (
                  <img key={`${n}-${idx}`} src={`/images/partner-${n}.jpg`} alt={String(name)} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="courses-section section-space">
          <div className="container">
            {/* Corporate Courses Header from Reference Design */}
            <div className="corporate-courses-header scroll-reveal">
              <div className="corporate-header-left">
                <span className="corporate-badge">COURSES BY SRIKARA</span>
                <h2 className="corporate-heading">
                  <span className="corporate-heading-red">In-Demand Courses</span>
                  <br />
                  <span className="corporate-heading-dark">Designed for Job Placement</span>
                </h2>
              </div>
              <div className="corporate-header-right">
                <p className="corporate-desc">
                  Master the skills top companies are actively hiring for right now. Our curriculum is updated
                  regularly to match industry standards, ensuring you learn through practical, hands-on
                  projects—not just theory. Choose your path and start your career upgrade.
                </p>
                <div className="corporate-accent-bar" />
              </div>
            </div>

            {/* 3 High-Impact Corporate Course Cards */}
            <div className="corporate-cards-grid stagger-children">
              {corporateCourseTracks.map((track) => (
                <article key={track.id} className="corporate-card">
                  {/* Card Banner Image */}
                  <div className="corporate-card-banner">
                    <img
                      src={track.image}
                      alt={track.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Card Main Content */}
                  <div className="corporate-card-content">
                    <div className="corporate-card-titles">
                      <h3 className="corporate-card-title">{track.title}</h3>
                      <p className="corporate-card-subtitle">{track.subtitle}</p>
                    </div>

                    {/* Skill Badges / Pills */}
                    <div className="corporate-tags">
                      {track.tags.map((tag) => (
                        <span key={tag} className="corporate-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bullet Highlights with Red Circular Bullseye Target */}
                    <ul className="corporate-features">
                      {track.features.map((feat) => (
                        <li key={feat} className="corporate-feature-item">
                          <svg
                            className="corporate-bullseye-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle cx="8" cy="8" r="7" stroke="#e51924" strokeWidth="1.5" />
                            <circle cx="8" cy="8" r="2.75" fill="#e51924" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Red Pill CTA Button */}
                    <div className="corporate-btn-wrap">
                      <button
                        className="corporate-explore-btn"
                        onClick={() => setSelectedCategoryModal(track.category)}
                        aria-label={`Explore all ${track.title} courses`}
                      >
                        EXPLORE ALL COURSES
                      </button>
                    </div>

                    {/* Footer Stats Row */}
                    <div className="corporate-card-footer">
                      <span className="corporate-stat-rating">
                        <span className="corporate-star">★</span> {track.stats.rating}
                      </span>
                      <span className="corporate-stat-students">{track.stats.students}</span>
                      <span className="corporate-stat-training">{track.stats.training}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Support / Consultation Bar */}
            <div className="corporate-courses-footer scroll-reveal delay-2">
              <div className="corporate-footer-help">
                <span className="corporate-help-icon">
                  <Icon name="message" size={18} />
                </span>
                <span>
                  Not sure which course fits your career goals?{" "}
                  <strong>Talk with our senior faculty for free personalized career counseling.</strong>
                </span>
              </div>
              <button className="corporate-counsel-btn" onClick={() => bookDemo()}>
                Get Career Guidance <Arrow />
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-space">
          <div className="container about-grid">
            <div className="about-visual scroll-reveal-left">
              <div className="about-image">
                <img
                  src="/images/about.webp"
                  alt="Practical professional training at Srikara Academy"
                  loading="lazy"
                />
              </div>
              <div className="about-note">
                <span className="about-note-icon">
                  <Icon name="target" size={28} />
                </span>
                <div>
                  <strong>Not just a certificate.</strong>
                  <span>A confident new beginning.</span>
                </div>
              </div>
              <div className="vertical-caption">PRACTICAL LEARNING. PURPOSEFUL CAREERS.</div>
            </div>
            <div className="about-copy scroll-reveal-right">
              <span className="eyebrow">
                <span /> THE SRIKARA DIFFERENCE
              </span>
              <h2>
                We train you for real jobs.
                <br />
                <span>Not just certificates.</span>
              </h2>
              <p>
                The gap between college theory and industry needs is real. We’re here to bridge it.
              </p>
              <p>
                At Srikara Academy, you don’t just learn concepts. You apply them. Work on live
                projects, build a portfolio you’re proud of, and get one-to-one career mentoring
                from professionals who know the industry.
              </p>
              <div className="about-benefits">
                {[
                  "Practical skills that employers actually need",
                  "Expert trainers with 10+ years of experience",
                  "Personal guidance, even after your course",
                ].map((b) => (
                  <div key={b}>
                    <span>
                      <Icon name="check" size={14} />
                    </span>
                    {b}
                  </div>
                ))}
              </div>
              <button
                className="text-link"
                onClick={() => setAboutExpanded(!aboutExpanded)}
                aria-expanded={aboutExpanded}
              >
                {aboutExpanded ? "A little less about us" : "Get to know Srikara"} <Arrow />
              </button>
              {aboutExpanded && (
                <div className="about-expanded">
                  <h3>Our mission</h3>
                  <p>
                    To provide high-quality, hands-on training that equips students with
                    industry-relevant skills and prepares them for real career opportunities. We
                    bridge education and employment through practical learning and expert
                    mentorship.
                  </p>
                  <h3>Our vision</h3>
                  <p>
                    To become a leading skill development academy that transforms students into
                    confident, skilled, and job-ready professionals. Learning should be practical,
                    simple, and career-focused—not just memorized.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="advantage-section section-space">
          <div className="container">
            <div className="center-heading scroll-reveal">
              <span className="eyebrow">
                <span /> MORE THAN A CLASSROOM
              </span>
              <h2>
                A learning experience.
                <br />A lifelong advantage.
              </h2>
              <p>Everything you need to go from “I want to” to “I’m ready.”</p>
            </div>
            <div className="advantage-grid stagger-children">
              {(
                [
                  [
                    "target",
                    "Job-focused curriculum",
                    "A syllabus updated every six months to match the skills companies are actually hiring for.",
                  ],
                  [
                    "users",
                    "Industry expert trainers",
                    "Learn from professionals working in top MNCs who bring the real world into every lesson.",
                  ],
                  [
                    "code",
                    "Real projects. Real practice.",
                    "Daily assignments, coding challenges, and live projects that turn knowledge into confidence.",
                  ],
                  [
                    "briefcase",
                    "A portfolio that stands out",
                    "Build a strong project portfolio, a compelling resume, and a LinkedIn profile that gets noticed.",
                  ],
                  [
                    "message",
                    "Interview-ready confidence",
                    "Mock interviews, soft skills training, and personal feedback to prepare you for your big moment.",
                  ],
                  [
                    "globe",
                    "Support that stays with you",
                    "Our mentorship doesn’t end at graduation. Get ongoing guidance as your career grows.",
                  ],
                ] as [IconName, string, string][]
              ).map(([icon, title, text], i) => (
                <article key={title}>
                  <div className="advantage-card-top">
                    <span className="feature-icon">
                      <Icon name={icon} size={24} />
                    </span>
                    <span className="feature-number">0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="placements" className="placements-section section-space">
          <div className="container">
            <div className="section-heading scroll-reveal">
              <div>
                <span className="eyebrow">
                  <span /> THEIR SUCCESS. YOUR POSSIBILITY.
                </span>
                <h2>
                  New skills. New stories.
                  <br />
                  Real career transformations.
                </h2>
                <p>
                  Different starting points. One shared ambition. Meet our learners making their
                  mark.
                </p>
              </div>
              <div className="slider-controls">
                <button
                  className="icon-button circle"
                  aria-label="Previous student stories"
                  onClick={() => setStoryPage(storyPage === 0 ? 1 : 0)}
                >
                  <span className="reverse">
                    <Arrow />
                  </span>
                </button>
                <button
                  className="icon-button circle"
                  aria-label="Next student stories"
                  onClick={() => setStoryPage(storyPage === 0 ? 1 : 0)}
                >
                  <Arrow />
                </button>
              </div>
            </div>
            <div className="stories-grid stagger-children fade-in-grid" key={storyPage}>
              {students.slice(storyPage * 3, storyPage * 3 + 3).map((s) => {
                const track = getStudentTrack(s.course);
                return (
                  <article className="story-card" key={s.name}>
                    <div className={`story-top story-top-${track.slug}`}>
                      {/* Srikara Wave Ribbons & Corporate Accents SVG (Matches Reference Image) */}
                      <svg
                        className="story-banner-svg"
                        viewBox="0 0 400 160"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id={`redGrad-${track.slug}-${s.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e51924" />
                            <stop offset="100%" stopColor="#991b1b" />
                          </linearGradient>
                          <linearGradient id={`goldGrad-${track.slug}-${s.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#d97706" />
                          </linearGradient>
                          <pattern id={`dotGrid-${s.name}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.2" fill="#cbd5e1" />
                          </pattern>
                        </defs>

                        {/* Crisp white/light silver background */}
                        <rect width="400" height="160" fill="#f8fafc" />

                        {/* Soft subtle corporate grey curves */}
                        <path d="M0,135 Q180,75 400,105 L400,160 L0,160 Z" fill="#edf2f7" opacity="0.75" />

                        {/* Dot matrix clusters (from reference banner) */}
                        <rect x="290" y="8" width="55" height="36" fill={`url(#dotGrid-${s.name})`} opacity="0.85" />
                        <rect x="10" y="110" width="45" height="42" fill={`url(#dotGrid-${s.name})`} opacity="0.65" />

                        {/* Top-left sweeping red corporate wave ribbon */}
                        <path d="M-10,-10 L135,-10 C98,28 48,55 -10,65 Z" fill={`url(#redGrad-${track.slug}-${s.name})`} />
                        <path d="M-10,50 C38,42 78,20 115,-10 L125,-10 C86,25 46,52 -10,62 Z" fill={`url(#goldGrad-${track.slug}-${s.name})`} opacity="0.9" />

                        {/* Bottom-right dynamic sweeping red wave ribbon */}
                        <path d="M410,170 L285,170 C315,130 355,108 410,95 Z" fill={`url(#redGrad-${track.slug}-${s.name})`} />
                        <path d="M410,105 C360,118 325,138 295,170 L285,170 C318,132 358,110 410,98 Z" fill={`url(#goldGrad-${track.slug}-${s.name})`} opacity="0.9" />
                      </svg>

                      {/* Srikara Academy Brand Crest & Placement Badge Header */}
                      <div className="story-banner-header">
                        <div className="story-banner-brand">
                          <div className="story-crest-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2L4 5V11C4 16.5 7.5 21 12 22C16.5 21 20 16.5 20 11V5L12 2Z" fill="#1e293b" stroke="#e51924" strokeWidth="1.5" />
                              <path d="M12 6L8 8V12C8 15 10 17 12 18C14 17 16 15 16 12V8L12 6Z" fill="#e51924" />
                              <path d="M12 9V15M9.5 12H14.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                          </div>
                          <div className="story-brand-text">
                            <span className="story-brand-name">SRIKARA</span>
                            <span className="story-brand-sub">ACADEMY</span>
                          </div>
                        </div>

                        {/* Placement verified badge */}
                        <span className="story-placed-pill">
                          <Icon name="check" size={11} /> PLACED
                        </span>
                      </div>

                      {/* Course Track Headline & Program Tools (Matches Reference Image 2) */}
                      <div className="story-banner-info">
                        <div className="story-track-headline">
                          <span className="story-track-main">{track.mainTitle}</span>
                          <span className="story-track-accent">{track.accentTitle}</span>
                          <div className="story-red-line" />
                        </div>

                        {/* Tool Badges ("Our Program Courses" in reference banner) */}
                        <div className="story-tools-row">
                          <div className="story-tool-chips">
                            {track.toolChips.map((chip) => (
                              <span key={chip.name} className={`story-tool-chip chip-${chip.color}`}>
                                {chip.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Student transparent portrait (White Background Removed!) */}
                      <div className="story-avatar-wrap">
                        <img src={`/images/${s.image}`} alt={s.name} loading="lazy" />
                      </div>
                    </div>
                    <div className="story-body">
                      <h3>{s.name}</h3>
                      <p className="story-course">{s.course} graduate</p>
                      <div className="career-journey">
                        <div>
                          <span className="journey-dot" />
                          <div>
                            <span>BEFORE SRIKARA</span>
                            <p>{s.before}</p>
                          </div>
                        </div>
                        <div>
                          <span className="journey-dot end" />
                          <div>
                            <span>THE NEXT CHAPTER</span>
                            <p>{s.role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="story-salary">
                        <span>A future worth building.</span>
                        <strong>
                          ₹{s.salary} <small>LPA</small>
                        </strong>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="slider-dots" aria-label="Student story pages">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  className={i === storyPage ? "selected" : ""}
                  aria-label={`Student stories page ${i + 1}`}
                  aria-pressed={i === storyPage}
                  onClick={() => setStoryPage(i)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="journey-section section-space">
          <div className="container">
            <div className="section-heading scroll-reveal">
              <div>
                <span className="eyebrow">
                  <span /> A CLEAR PATH FORWARD
                </span>
                <h2>
                  From your first class
                  <br />
                  to your first opportunity.
                </h2>
              </div>
              <p className="heading-side-copy">
                Simple, structured, and built around you.
                <br />
                Our proven approach makes every step count.
              </p>
            </div>
            <div className="journey-grid stagger-children">
              {[
                ["Free demo", "Experience our teaching. Find your fit."],
                ["Skill training", "Build a strong foundation, step by step."],
                ["Live projects", "Turn your learning into real-world work."],
                ["Your portfolio", "Showcase your skills with confidence."],
                ["Career preparation", "Get interview and internship ready."],
                ["Placement support", "Take your next step with our team."],
              ].map(([title, text], i) => (
                <div key={title} className={i === 5 ? "journey-step final-step" : "journey-step"}>
                  <span className="step-number">
                    {i === 5 ? <Icon name="check" size={22} /> : `0${i + 1}`}
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="journey-cta scroll-reveal delay-2">
              <p>
                Your journey starts with a conversation. <strong>No fees. No obligation.</strong>
              </p>
              <button className="text-link" onClick={() => bookDemo()}>
                Take the first step <Arrow />
              </button>
            </div>
          </div>
        </section>

        <section className="reviews-section section-space">
          <div className="container">
            <div className="section-heading scroll-reveal">
              <div>
                <span className="eyebrow">
                  <span /> WORDS THAT MEAN THE WORLD
                </span>
                <h2>Don’t just take our word for it.</h2>
                <p>Honest experiences from the people who’ve been in your shoes.</p>
              </div>
              <a
                className="google-rating"
                href="https://search.google.com/local/reviews?placeid=ChIJCxy9pzlZqDsRWKpnGhp_aaI"
                target="_blank"
                rel="noreferrer"
              >
                <span className="google-g">G</span>
                <div>
                  <strong>
                    4.9 <span className="stars">★★★★★</span>
                  </strong>
                  <span>
                    Student reviews on Google <Icon name="arrow" size={13} />
                  </span>
                </div>
              </a>
            </div>
            <div className="reviews-grid stagger-children fade-in-grid" key={reviewPage}>
              {reviews.slice(reviewPage * 3, reviewPage * 3 + 3).map((r, i) => (
                <article className="review-card" key={r.name}>
                  <div className="review-stars">
                    <span className="stars">★★★★★</span>
                    <span className="quote-mark">“</span>
                  </div>
                  <p>“{r.text}”</p>
                  <div className="review-person">
                    <span className={`review-avatar avatar-${i}`}>
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div>
                      <strong>{r.name}</strong>
                      <span>{r.course}</span>
                    </div>
                    <Icon name="check" size={15} />
                  </div>
                </article>
              ))}
            </div>
            <div className="reviews-bottom scroll-reveal delay-2">
              <span>Real learners. Real experiences. Real growth.</span>
              <button className="text-link" onClick={() => setReviewPage(reviewPage === 0 ? 1 : 0)}>
                More learner experiences <Arrow />
              </button>
            </div>
          </div>
        </section>

        <section className="collaborate-section section-space">
          <div className="container">
            <div className="section-heading scroll-reveal">
              <div>
                <span className="eyebrow">
                  <span /> BETTER, TOGETHER
                </span>
                <h2>Let’s build more possibilities.</h2>
                <p>Partner with Srikara to bring industry-ready skills to more people.</p>
              </div>
              <a
                className="text-link"
                href="mailto:info@srikaraacademy.com?subject=Partnership%20enquiry"
              >
                Partner with us <Arrow />
              </a>
            </div>
            <div className="collaborate-grid stagger-children">
              {(
                [
                  [
                    "award",
                    "Authorised training centre",
                    "Start your own Srikara centre with our curriculum, training support, and certification.",
                  ],
                  [
                    "users",
                    "Authorised selling partner",
                    "Promote Srikara programs and earn commission while helping learners grow.",
                  ],
                  [
                    "book",
                    "College training programs",
                    "Bring practical skills and career readiness into your college curriculum.",
                  ],
                  [
                    "briefcase",
                    "Corporate training",
                    "Customised IT, software, and professional skills training for your team.",
                  ],
                ] as [IconName, string, string][]
              ).map(([icon, title, text]) => (
                <a
                  className="collaborate-card"
                  key={title}
                  href={`mailto:info@srikaraacademy.com?subject=${encodeURIComponent(title + " enquiry")}`}
                >
                  <Icon name={icon} size={27} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span>
                    Let’s connect <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="insights-section section-space">
          <div className="container insights-grid">
            <div className="scroll-reveal-left">
              <span className="eyebrow">
                <span /> KEEP YOUR CURIOSITY ALIVE
              </span>
              <h2>
                Fresh insights.
                <br />
                For your next big step.
              </h2>
              <p>
                Digital skills, career advice, and industry knowledge.
                <br />A little inspiration to keep you moving forward.
              </p>
              <a
                className="text-link"
                href="https://srikaraacademy.com/blogs/"
                target="_blank"
                rel="noreferrer"
              >
                Visit the Srikara journal <Arrow />
              </a>
            </div>
            <a
              className="insight-card scroll-reveal-right"
              href="https://srikaraacademy.com/notebooklm-smart-ai-tool-for-notes-research/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="insight-art">
                <span className="insight-n">
                  N<span>LM</span>
                </span>
                <div>
                  <span>THE SMARTER WAY TO LEARN</span>
                  <strong>
                    Your notes.
                    <br />
                    New possibilities.
                  </strong>
                </div>
                <Icon name="arrow" size={28} />
              </div>
              <div className="insight-details">
                <div>
                  <span className="article-tag">AI & NEW TOOLS</span>
                  <span>June 5, 2026</span>
                </div>
                <h3>NotebookLM: Smart AI Tool for Notes & Research</h3>
                <span className="text-link">
                  Read the article <Arrow />
                </span>
              </div>
            </a>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="scroll-reveal-left">
              <span className="eyebrow light">
                <span /> YOUR NEXT CHAPTER IS CALLING
              </span>
              <h2>
                A better career starts
                <br />
                with one small step.
              </h2>
              <p>
                Meet your mentor. Explore your possibilities.
                <br />
                Book a 100% free, no-obligation demo today.
              </p>
              <div className="contact-assurance">
                <Icon name="check" size={16} /> Expert guidance <span /> No fees <span /> No
                pressure
              </div>
            </div>
            <div className="contact-actions scroll-reveal-right">
              <button className="button white" onClick={() => bookDemo()}>
                Book My Free Demo <Arrow />
              </button>
              <span>Prefer a conversation?</span>
              <a href="tel:+919843093936">
                <Icon name="phone" size={20} /> +91 98430 93936
              </a>
              <p>Mon–Sat: 9 AM–8:30 PM · Sun: 9 AM–2:30 PM</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home">
              <img src="/images/srikara-logo.png" alt="Srikara Training and Placement Academy" />
            </a>
            <p>
              Real-world learning.
              <br />
              Extraordinary possibilities.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/people/Srikara-Training-Placement-Academy-in-Coimbatore/61580276519290/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/srikara_coimbatore/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/company/srikara-training-placement-academy"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
          <div>
            <h3>Explore Srikara</h3>
            <a href="#about">About the Academy</a>
            <a href="#courses">Our Courses</a>
            <a href="#placements">Success Stories</a>
            <a href="#insights">Insights & Resources</a>
            <button onClick={() => bookDemo()}>Book a Free Demo</button>
            <a
              href="https://srikaraacademy.com/student-access/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Login
            </a>
          </div>
          <div>
            <h3>Popular Programs</h3>
            {[
              "Basic Accounting & Tally Foundation",
              "AI & Machine Learning",
              "Data Analytics with AI",
              "Data Science with AI",
              "AI Digital Marketing with Neuro Technology",
              "AI Powered UX/UI Design Master Course with WordPress",
            ].map((name, i) => (
              <button
                key={name}
                onClick={() => setSelectedCourse(courses.find((c) => c.name === name)!)}
              >
                {
                  [
                    "Accounting & Tally with GST",
                    "AI & Machine Learning",
                    "Data Analytics",
                    "Data Science",
                    "Digital Marketing",
                    "UI/UX Design",
                  ][i]
                }
              </button>
            ))}
          </div>
          <div className="footer-contact">
            <h3>Come Say Hello</h3>
            <a href="https://share.google/vas6Y0QNAkBOmo72z" target="_blank" rel="noreferrer">
              <Icon name="pin" size={18} />
              <span>
                2nd Floor, MM Towers, 1083, 3rd St,
                <br />
                Cross Cut Road, Gandhipuram,
                <br />
                Coimbatore, Tamil Nadu 641012
              </span>
            </a>
            <a href="tel:+919843093936">
              <Icon name="phone" size={17} /> +91 98430 93936
            </a>
            <a href="mailto:info@srikaraacademy.com">
              <Icon name="mail" size={17} /> info@srikaraacademy.com
            </a>
            <a
              className="directions"
              href="https://share.google/vas6Y0QNAkBOmo72z"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <Arrow />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Srikara Academy. All rights reserved.</span>
          <span>Built on skills. Driven by possibilities.</span>
          <div>
            <a href="https://srikaraacademy.com/privacy-policy/" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
            <a href="https://srikaraacademy.com/terms-of-use/" target="_blank" rel="noreferrer">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
      <a
        className="whatsapp-button"
        href={`${whatsapp}?text=${encodeURIComponent("Hello Srikara Academy, I would like to know more about your courses.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Srikara Academy on WhatsApp"
      >
        <Icon name="message" size={25} />
        <span>Let’s talk</span>
        <span className="chat-online" />
      </a>

      {selectedCourse && (
        <Modal title={selectedCourse.name} onClose={() => setSelectedCourse(null)}>
          <span className={`modal-category ${categoryClass[selectedCourse.category]}`}>
            {selectedCourse.category}
          </span>
          <p className="modal-description">{selectedCourse.detail}</p>
          <div className="modal-course-stats">
            <span>
              <Icon name="clock" />
              {selectedCourse.hours} learning hours
            </span>
            <span>
              <Icon name="book" />
              {selectedCourse.chapters} chapters
            </span>
          </div>
          <h3>More than just learning</h3>
          <ul className="modal-benefits">
            {[
              "Industry expert-led practical training",
              "Hands-on practice and real-world application",
              "Resume, portfolio, and interview guidance",
              "Dedicated placement assistance",
            ].map((t) => (
              <li key={t}>
                <Icon name="check" size={17} />
                {t}
              </li>
            ))}
          </ul>
          <p className="modal-small">
            Speak with our team for the detailed syllabus, current batch timings, course fees, and
            learning options.
          </p>
          <button
            className="button primary full-width"
            onClick={() => bookDemo(selectedCourse.name)}
          >
            Try a Free Demo <Arrow />
          </button>
          <a
            className="modal-source"
            href="https://srikaraacademy.com/all-courses/"
            target="_blank"
            rel="noreferrer"
          >
            View the original course catalogue <Arrow />
          </a>
        </Modal>
      )}
      {selectedCategoryModal && (
        <Modal
          title={
            selectedCategoryModal === "Finance & Accounting"
              ? "Accounting • Finance • Tax Courses"
              : selectedCategoryModal === "Marketing & Design"
                ? "Digital Marketing & Creative Design Courses"
                : "Programming • Development • AI & Data Courses"
          }
          onClose={() => setSelectedCategoryModal(null)}
        >
          <div className="cat-modal-header">
            <span className={`modal-category ${categoryClass[selectedCategoryModal]}`}>
              {selectedCategoryModal} Track
            </span>
            <p className="modal-description">
              {selectedCategoryModal === "Finance & Accounting"
                ? "Master industry-standard Tally, GST, Zoho Books, Taxation, and AI-powered accounting tools with 100% practical, hands-on projects."
                : selectedCategoryModal === "Marketing & Design"
                  ? "Build market-ready skills in UI/UX design, performance ads, neuromarketing, and GenAI content systems."
                  : "From full-stack development and Python to AI, Data Science, and Cloud infrastructure—designed for high-paying corporate roles."}
            </p>
          </div>
          <div className="cat-modal-list">
            {courses
              .filter((c) => c.category === selectedCategoryModal)
              .map((c) => (
                <div key={c.name} className="cat-course-row">
                  <div className="cat-course-info">
                    <h4>{c.name}</h4>
                    <p>{c.detail}</p>
                    <div className="cat-course-meta">
                      <span>
                        <Icon name="clock" size={13} /> {c.hours} hrs
                      </span>
                      <span>
                        <Icon name="book" size={13} /> {c.chapters} chapters
                      </span>
                      {c.tag && <span className="cat-course-badge">{c.tag}</span>}
                    </div>
                  </div>
                  <div className="cat-course-actions">
                    <button
                      className="button secondary small-btn"
                      onClick={() => {
                        setSelectedCourse(c);
                        setSelectedCategoryModal(null);
                      }}
                    >
                      Syllabus
                    </button>
                    <button
                      className="button primary small-btn"
                      onClick={() => {
                        setSelectedCategoryModal(null);
                        bookDemo(c.name);
                      }}
                    >
                      Book Demo
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="cat-modal-footer">
            <button
              className="button primary full-width"
              onClick={() => {
                const domain = selectedCategoryModal;
                setSelectedCategoryModal(null);
                bookDemo(domain);
              }}
            >
              Book Free Demo for this Track <Arrow />
            </button>
          </div>
        </Modal>
      )}
      {booking && (
        <Modal title="Let’s find your next step." onClose={() => setBooking(false)}>
          <p className="modal-description">
            Tell us a little about yourself. Continue on WhatsApp to arrange your free demo directly
            with our team.
          </p>
          <form
            className="demo-form"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const text = `Hello Srikara Academy! I would like to book a free demo.\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email") || "Not provided"}\nCourse: ${data.get("course") || "Please help me choose"}`;
              window.open(
                `${whatsapp}?text=${encodeURIComponent(text)}`,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <label>
              Full name <span>*</span>
              <input
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                required
                maxLength={100}
              />
            </label>
            <label>
              Phone number <span>*</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 Your mobile number"
                required
                pattern="[+0-9 ()-]{10,18}"
                title="Enter a valid phone number with 10 to 18 characters"
              />
            </label>
            <label>
              Email address <small>(optional)</small>
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
            </label>
            <label>
              Course you’re interested in
              <select
                name="course"
                value={bookingCourse}
                onChange={(e) => setBookingCourse(e.target.value)}
              >
                <option value="">Help me choose the right course</option>
                {courses.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
            <button className="button primary full-width" type="submit">
              Continue on WhatsApp <Icon name="message" size={19} />
            </button>
            <p className="form-note">
              <Icon name="check" size={14} /> Free demo. No obligation. Your details are shared only
              when you send the WhatsApp message.
            </p>
          </form>
          <div className="modal-call">
            Rather give us a call? <a href="tel:+919843093936">+91 98430 93936</a>
          </div>
        </Modal>
      )}

      {playingVideo && (
        <VideoModal
          onClose={() => setPlayingVideo(false)}
          onBookDemo={() => bookDemo()}
        />
      )}
    </>
  );
}
