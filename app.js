/* ============================================================
   📝 CONTENT — EDIT ME
   This is the only place you should need to touch to update
   your story, skills, projects, or certificates. Fill in both
   "en" and "th" for anything new so the language switch keeps
   working. Everything else in this file just renders whatever
   is written here.
   ============================================================ */
const CONTENT = {
  en: {
    story: [
      {
        period: "2009 · Where it started",
        title: "Born to explore",
        body: "I was born on June 23, 2009. Nothing dramatic — just a kid who loved playing, poking at things, and following whatever caught my curiosity that day."
      },
      {
        period: "Kindergarten – Grade 6",
        title: "Bangpleepat School",
        body: "This is where it all began — friendships, first lessons, and the habit of trying new things even when I wasn't sure I'd be good at them."
      },
      {
        period: "Grade 7 – Grade 12",
        title: "Navamindarajudis Triamudomsuksapattanakarn School",
        body: "I stuck with the Science-Math program through high school, and this is really where curiosity turned into direction: coding, design, content, and tech."
      },
      {
        period: "Dream university",
        title: "Why KMITL",
        body: "KMITL has been the dream since I was a kid. It's known for technology, and it's exactly where I want to keep growing as a developer and a creator."
      },
      {
        period: "Now",
        title: "From playing to building",
        body: "My motto, more or less: I used to love playing — now I love building. These days that means websites, AI workflows, content, and a Roblox MMO RPG I'm slowly bringing to life."
      }
    ],
    skills: [
      { name: "YouTube Content Creator", score: 9, body: "Coming up with ideas, planning content, and telling a story people actually want to watch." },
      { name: "Lua / Roblox", score: 8, body: "Scripting gameplay systems, RPG mechanics, and worlds people can get lost in." },
      { name: "Premiere Pro", score: 8, body: "Editing for pacing and feel — cuts, transitions, and the little details that make a video land." },
      { name: "HTML / CSS / JS", score: 7, body: "Building frontend pages and interactions that feel smooth, not just functional." },
      { name: "UI/UX Design", score: 7, body: "Thinking through layout, hierarchy, and flow so things are actually pleasant to use." },
      { name: "Photoshop", score: 6, body: "Graphics, thumbnails, and visual assets for whatever a project needs." },
      { name: "Python", score: 5, body: "My go-to for automation, logic, and experimenting with AI-assisted builds." },
      { name: "C# / Unity", score: 4, body: "Still early here — the basics of Unity gameplay logic and game dev experiments." },
      { name: "AI Workflow", score: 10, body: "I lean on AI constantly — as a thinking partner to learn faster and turn ideas into something real, quicker." }
    ],
    aiTools: [
      { name: "ChatGPT", body: "My default for planning, debugging, writing, and moving fast on new ideas." },
      { name: "Claude", body: "Where I go for longer thinking, cleaning up documents, and polishing writing." },
      { name: "Gemini", body: "Handy for research and comparing angles across different AI models." },
      { name: "Grok", body: "Good for quick, trend-aware exploration and messing around with prompts." }
    ],
    projects: [
      {
        id: "portfolio-site",
        title: "Personal Portfolio Website",
        type: "Website / Frontend / Portfolio",
        status: "In progress",
        body: "A black-and-orange, KMITL-inspired portfolio I built from scratch to tell my story, show my skills, and put my work in one place.",
        tags: ["HTML", "CSS", "JavaScript", "Smooth Transitions", "KMITL Theme"]
      },
      {
        id: "roblox-mmorpg",
        title: "Roblox MMO RPG Game",
        type: "Game Development",
        status: "In progress",
        body: "A long-term Roblox MMO RPG project — gameplay systems, world-building, character progression, and content that keeps growing.",
        tags: ["Roblox", "Lua", "MMO RPG", "Game Systems", "World Design"]
      },
      {
        id: "future-ai-lab",
        title: "Future AI Projects",
        type: "AI-assisted Creation",
        status: "Coming soon",
        body: "A space I'm keeping open for experiments — mixing AI, code, and design into tools and products worth sharing.",
        tags: ["AI", "Automation", "Creative Coding", "Prototype"]
      }
    ],
    certificates: [
      {
        title: "Certificate of 1st Place - UTCC AI Hackathon 2026",
        image: "assets/UTCCcer.jpg",
        body: "Received a certificate for winning 1st place with an AI & STEM solution for Thailand's water management.",
        issuerId: "best_award"
      },
      {
        title: "Champion Prize - Team MANITA",
        image: "assets/UTCC.jpg",
        body: "Awarded the 20,000 THB grand prize, defeating 15 finalist teams nationwide at the University of the Thai Chamber of Commerce.",
        issuerId: "best_award"
      },
      { title: "Design AI-powered business solutions", image: "assets2/17-1.png", body: "Shows I can design higher-level business solutions that put AI to work.", issuerId: "microsoft" },
      { title: "Create effective prompts for generative AI", image: "assets2/16-1.png", body: "Prompt engineering — getting generative AI models to actually give you what you need.", issuerId: "microsoft" },
      { title: "Create AI Builder prompts", image: "assets2/1-1.png", body: "Connecting AI capabilities directly to Dataverse databases.", issuerId: "microsoft" },
      { title: "Turn business ideas into solutions", image: "assets2/15-1.png", body: "Taking a business idea and actually turning it into a working Power Platform app.", issuerId: "microsoft" },
      { title: "Customize a canvas app", image: "assets2/10-1.png", body: "Hands-on work tailoring app interfaces and custom functions.", issuerId: "microsoft" },
      { title: "Configure forms, charts, and dashboards", image: "assets2/7-1.png", body: "Building the dashboards businesses actually rely on for data.", issuerId: "microsoft" },
      { title: "Build approval flows with Power Automate", image: "assets2/2-1.png", body: "Automated workflows and approval systems, built and working.", issuerId: "microsoft" },
      { title: "Publish, share, and maintain a canvas app", image: "assets2/9-1.png", body: "Understanding the full app lifecycle, from launch to long-term upkeep.", issuerId: "microsoft" },
      { title: "Use Dataverse triggers and actions", image: "assets2/3-1.png", body: "Automating processes off database events and data changes.", issuerId: "microsoft" },
      { title: "Core components of Power Pages", image: "assets2/6-1.png", body: "The foundations of building external-facing business websites.", issuerId: "microsoft" },
      { title: "Explore Power Pages design studio", image: "assets2/5-1.png", body: "Designing and styling data-driven web pages." },
      { title: "Get started with Power Automate", image: "assets2/4-1.png", body: "Foundations of automated workflows and process automation.", issuerId: "microsoft" },
      { title: "Get started with model-driven apps", image: "assets2/8-1.png", body: "The basics of data-first app development in Power Apps.", issuerId: "microsoft" },
      { title: "Get started with Power Apps canvas apps", image: "assets2/11-1.png", body: "First steps into low-code app development.", issuerId: "microsoft" },
      { title: "Security roles in Dataverse", image: "assets2/12-1.png", body: "The basics of access control and data security.", issuerId: "microsoft" },
      { title: "Create and manage columns in Dataverse", image: "assets2/13-1.png", body: "Foundations of database schema setup.", issuerId: "microsoft" },
      { title: "Create tables in Dataverse", image: "assets2/14-1.png", body: "The basics of structuring a relational database.", issuerId: "microsoft" },
      { title: "Make Game with AI", image: "assets/cer-2.jpg", body: "Completed the Make Game with AI activity.", issuerId: "hamsterhub" },
      { title: "Game with AI Workshop", image: "assets/cer-3.png", body: "Took part in a hands-on Game with AI workshop.", issuerId: "hamsterhub" },
      { title: "Other Certificate", image: "assets/cer-1.jpg", body: "General foundation-level skills.", issuerId: "other" }
    ]
  },
  th: {
    story: [
      {
        period: "2552 · จุดเริ่มต้น",
        title: "เกิดมาเพื่อสำรวจ",
        body: "เกิดวันที่ 23 มิถุนายน 2552 ไม่มีอะไรพิเศษหรอก แค่เด็กคนหนึ่งที่ชอบเล่น ชอบลองจับโน่นจับนี่ และตามความอยากรู้ของตัวเองไปเรื่อย ๆ"
      },
      {
        period: "อนุบาล – ประถม 6",
        title: "โรงเรียนบางพลีพัฒนศึกษาลัย",
        body: "จุดเริ่มของทุกอย่าง ทั้งเพื่อน บทเรียนแรก ๆ และนิสัยชอบลองของใหม่แม้จะยังไม่มั่นใจว่าจะทำได้ดีแค่ไหน"
      },
      {
        period: "มัธยม 1 – มัธยม 6",
        title: "โรงเรียนนวมินทราชูทิศ เตรียมอุดมศึกษาพัฒนาการ",
        body: "เรียนสายวิทย์-คณิตมาตลอด และช่วงนี้เองที่ความสนใจเริ่มชัดขึ้นเรื่อย ๆ ทั้งเขียนโค้ด ออกแบบ ทำคอนเทนต์ และเทคโนโลยี"
      },
      {
        period: "มหาวิทยาลัยในฝัน",
        title: "ทำไมต้อง KMITL",
        body: "KMITL เป็นมหาวิทยาลัยในฝันมาตั้งแต่เด็ก ด้วยความโดดเด่นด้านเทคโนโลยี นี่คือที่ที่อยากไปเรียนต่อเพื่อพัฒนาตัวเองเป็นนักพัฒนาและครีเอเตอร์ที่เก่งขึ้น"
      },
      {
        period: "ตอนนี้",
        title: "จากเด็กที่ชอบเล่น สู่คนที่ชอบสร้าง",
        body: "คติประจำใจง่าย ๆ คือ ตอนเด็กชอบเล่น ตอนนี้ชอบสร้าง ทุกวันนี้เลยได้ทำเว็บไซต์ ลองเล่นกับ AI ทำคอนเทนต์ และค่อย ๆ พัฒนาเกม Roblox MMO RPG ของตัวเอง"
      }
    ],
    skills: [
      { name: "YouTube Content Creator", score: 9, body: "คิดไอเดีย วางแผนคอนเทนต์ และเล่าเรื่องให้คนดูอยากดูจริง ๆ" },
      { name: "Lua / Roblox", score: 8, body: "เขียนสคริปต์ระบบเกม กลไก RPG และสร้างโลกที่คนเล่นแล้วอยากอยู่ต่อ" },
      { name: "Premiere Pro", score: 8, body: "ตัดต่อวิดีโอให้จังหวะดี ลื่นไหล และมีรายละเอียดที่ทำให้คลิปน่าดูขึ้น" },
      { name: "HTML / CSS / JS", score: 7, body: "สร้างหน้าเว็บและอินเทอร์แอกชันให้ใช้งานลื่น ไม่ใช่แค่ใช้งานได้" },
      { name: "UI/UX Design", score: 7, body: "คิดเรื่องเลย์เอาต์ ลำดับความสำคัญ และการใช้งานให้เป็นมิตรกับผู้ใช้" },
      { name: "Photoshop", score: 6, body: "ทำกราฟิก ธัมบ์เนล และภาพประกอบตามที่แต่ละงานต้องการ" },
      { name: "Python", score: 5, body: "ใช้เป็นพื้นฐานสำหรับงานอัตโนมัติ ตรรกะ และทดลองพัฒนาร่วมกับ AI" },
      { name: "C# / Unity", score: 4, body: "ยังเป็นมือใหม่ กำลังเรียนรู้พื้นฐานลอจิกเกมและทดลองพัฒนาเกมใน Unity" },
      { name: "AI Workflow", score: 10, body: "ใช้ AI แทบทุกวันเป็นเหมือนคู่คิด ช่วยให้เรียนรู้ไวขึ้นและเปลี่ยนไอเดียให้เป็นของจริงได้เร็วขึ้น" }
    ],
    aiTools: [
      { name: "ChatGPT", body: "ตัวหลักสำหรับวางแผน ช่วยดีบัก เขียนงาน และลุยไอเดียใหม่ ๆ ให้ไว" },
      { name: "Claude", body: "ใช้ตอนต้องคิดยาว ๆ จัดระเบียบเอกสาร และขัดเกลางานเขียน" },
      { name: "Gemini", body: "มีประโยชน์เวลาต้องหาข้อมูลหรือเทียบมุมมองจาก AI หลายตัว" },
      { name: "Grok", body: "เหมาะกับการสำรวจไอเดียเร็ว ๆ ตามเทรนด์ และเล่นกับพรอมป์ต่าง ๆ" }
    ],
    projects: [
      {
        id: "portfolio-site",
        title: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว",
        type: "เว็บไซต์ / Frontend / พอร์ตโฟลิโอ",
        status: "กำลังพัฒนา",
        body: "พอร์ตโฟลิโอโทนดำ-ส้มแบบ KMITL ที่สร้างขึ้นมาเองเพื่อเล่าเรื่องราว โชว์สกิล และรวมผลงานทั้งหมดไว้ที่เดียว",
        tags: ["HTML", "CSS", "JavaScript", "แอนิเมชันลื่นไหล", "ธีม KMITL"]
      },
      {
        id: "roblox-mmorpg",
        title: "เกม Roblox MMO RPG",
        type: "พัฒนาเกม",
        status: "กำลังพัฒนา",
        body: "โปรเจกต์เกม Roblox MMO RPG ระยะยาว ทั้งระบบเกมเพลย์ การสร้างโลก การเลเวลอัปตัวละคร และคอนเทนต์ที่เพิ่มขึ้นเรื่อย ๆ",
        tags: ["Roblox", "Lua", "MMO RPG", "ระบบเกม", "ออกแบบโลก"]
      },
      {
        id: "future-ai-lab",
        title: "โปรเจกต์ AI ในอนาคต",
        type: "สร้างสรรค์ด้วย AI",
        status: "เร็ว ๆ นี้",
        body: "พื้นที่ที่เปิดไว้สำหรับทดลองเอา AI โค้ด และงานออกแบบมาผสมกัน ให้กลายเป็นเครื่องมือหรือผลงานที่น่าสนใจ",
        tags: ["AI", "ระบบอัตโนมัติ", "Creative Coding", "ต้นแบบ"]
      }
    ],
    certificates: [
      {
        title: "เกียรติบัตรรางวัลชนะเลิศ UTCC AI Hackathon",
        image: "assets/UTCCcer.jpg",
        body: "เกียรติบัตรรางวัลชนะเลิศจากการนำเสนอโซลูชัน AI และ STEM เพื่อการบริหารจัดการน้ำของประเทศไทย",
        issuerId: "best_award"
      },
      {
        title: "รับรางวัลชนะเลิศ 20,000 บาท",
        image: "assets/UTCC.jpg",
        body: "ภาพบรรยากาศการรับมอบรางวัลชนะเลิศในนามทีม MANITA จากทีมที่ผ่านเข้ารอบชิงชนะเลิศ 15 ทีมทั่วประเทศ",
        issuerId: "best_award"
      },
      { title: "Design AI-powered business solutions", image: "assets2/17-1.png", body: "แสดงว่าออกแบบโซลูชันทางธุรกิจระดับสูงที่นำ AI มาใช้งานจริงได้", issuerId: "microsoft" },
      { title: "Create effective prompts for generative AI", image: "assets2/16-1.png", body: "ทักษะการเขียนพรอมป์ ให้ AI เข้าใจและตอบโจทย์ที่ต้องการได้จริง", issuerId: "microsoft" },
      { title: "Create AI Builder prompts", image: "assets2/1-1.png", body: "เชื่อมความสามารถของ AI เข้ากับฐานข้อมูล Dataverse โดยตรง", issuerId: "microsoft" },
      { title: "Turn business ideas into solutions", image: "assets2/15-1.png", body: "แปลงไอเดียทางธุรกิจให้กลายเป็นแอปพลิเคชัน Power Platform ที่ใช้งานได้จริง", issuerId: "microsoft" },
      { title: "Customize a canvas app", image: "assets2/10-1.png", body: "ลงมือปรับแต่งหน้าตาแอปและฟังก์ชันการทำงานเอง", issuerId: "microsoft" },
      { title: "Configure forms, charts, and dashboards", image: "assets2/7-1.png", body: "สร้างแดชบอร์ดที่ธุรกิจใช้งานจริงในการดูข้อมูล", issuerId: "microsoft" },
      { title: "Build approval flows with Power Automate", image: "assets2/2-1.png", body: "สร้างระบบเวิร์กโฟลว์และขั้นตอนอนุมัติแบบอัตโนมัติ", issuerId: "microsoft" },
      { title: "Publish, share, and maintain a canvas app", image: "assets2/9-1.png", body: "เข้าใจวงจรของแอปทั้งหมด ตั้งแต่เปิดใช้งานจนถึงดูแลรักษาต่อเนื่อง", issuerId: "microsoft" },
      { title: "Use Dataverse triggers and actions", image: "assets2/3-1.png", body: "ทำให้กระบวนการทำงานอัตโนมัติตามเหตุการณ์และข้อมูลที่เปลี่ยนแปลง", issuerId: "microsoft" },
      { title: "Core components of Power Pages", image: "assets2/6-1.png", body: "พื้นฐานของการสร้างเว็บไซต์ธุรกิจที่เปิดให้บุคคลภายนอกใช้งาน", issuerId: "microsoft" },
      { title: "Explore Power Pages design studio", image: "assets2/5-1.png", body: "ออกแบบและจัดสไตล์หน้าเว็บที่ขับเคลื่อนด้วยข้อมูล", issuerId: "microsoft" },
      { title: "Get started with Power Automate", image: "assets2/4-1.png", body: "พื้นฐานของเวิร์กโฟลว์อัตโนมัติและกระบวนการดิจิทัล", issuerId: "microsoft" },
      { title: "Get started with model-driven apps", image: "assets2/8-1.png", body: "ความเข้าใจพื้นฐานของแอปที่ขับเคลื่อนด้วยข้อมูลใน Power Apps", issuerId: "microsoft" },
      { title: "Get started with Power Apps canvas apps", image: "assets2/11-1.png", body: "ก้าวแรกสู่การพัฒนาแอปแบบ low-code", issuerId: "microsoft" },
      { title: "Security roles in Dataverse", image: "assets2/12-1.png", body: "พื้นฐานการควบคุมสิทธิ์การเข้าถึงและความปลอดภัยของข้อมูล", issuerId: "microsoft" },
      { title: "Create and manage columns in Dataverse", image: "assets2/13-1.png", body: "พื้นฐานการตั้งค่าโครงสร้างฐานข้อมูล", issuerId: "microsoft" },
      { title: "Create tables in Dataverse", image: "assets2/14-1.png", body: "ความเข้าใจพื้นฐานของการจัดโครงสร้างฐานข้อมูลเชิงสัมพันธ์", issuerId: "microsoft" },
      { title: "Make Game with AI", image: "assets/cer-2.jpg", body: "ผ่านกิจกรรม Make Game with AI เรียบร้อยแล้ว", issuerId: "hamsterhub" },
      { title: "Game with AI Workshop", image: "assets/cer-3.png", body: "เข้าร่วมเวิร์กช็อป Game with AI แบบลงมือทำจริง", issuerId: "hamsterhub" },
      { title: "Other Certificate", image: "assets/cer-1.jpg", body: "ทักษะพื้นฐานทั่วไป", issuerId: "other" }
    ]
  }
};

/* ============================================================
   🌐 UI TEXT — every static label on the page
   ============================================================ */
const UI = {
  en: {
    nav: { profile: "Profile", story: "Life Story", skills: "Skills", projects: "Works", certificates: "Certificates", contact: "Contact" },
    auth: { login: "Login", register: "Register", logout: "Logout", admin: "Admin" },
    hero: {
      kicker: "KMITL Dreamer / Developer Portfolio",
      alias: "AKA New JA · Born 06.23.09",
      text: "I'm a Grade 12 developer who grew up loving to play, then started building instead. AI is my creative partner, code is my tool, and KMITL is where I want to take it all next.",
      cta1: "See My Works",
      cta2: "Read My Story",
      cta3: "Download Resume",
      nowCardSmall: "KMITL, some day",
      nowCardStrong: "New message",
      nowCardBody: "Dream university",
      phoneCardTitle: "University",
      phoneCardBody: "King Mongkut's Institute of Technology Ladkrabang",
      faceCardRole: "Developer / Creator"
    },
    profile: {
      kicker: "Creator Profile",
      body: "I'm a Grade 12 Science-Math student who spends most of my time on developer work, Roblox game systems, AI-assisted building, and content creation — with KMITL as the next stop.",
      tags: ["AKA New JA", "Born 06.23.09", "Developer", "KMITL Dreamer"]
    },
    section: {
      story: { kicker: "Life Story", title: "From playing as a kid to building as a creator.", body: "Here's my story laid out as a timeline — from school days to the long-term goal of studying at KMITL." },
      skills: { kicker: "Skill Stack", title: "I try to do everything with AI by my side.", body: "These are my current self-rated skill levels, shown as a quick developer-style snapshot." },
      projects: { kicker: "Works", title: "What I'm building right now.", body: "Sign in to like a project — accounts, sessions, and likes are all stored securely." },
      certificates: { kicker: "Certificates", title: "Activities and proof of the work.", body: "A gallery of certificates, grouped by where they came from." },
      contact: { kicker: "Contact", title: "Let's connect." }
    },
    auth_modal: {
      loginKicker: "Login", loginTitle: "Welcome back", loginCopy: "Login to like projects and access your member account.",
      registerKicker: "Register", registerTitle: "Create a visitor account", registerCopy: "Register a normal account so you can like my work.",
      username: "Username", email: "Email", password: "Password", age: "Age",
      passwordRule: "Use 10+ characters with uppercase, lowercase, a number, and a symbol.",
      submitLogin: "Login", submitRegister: "Register"
    },
    dashboard: {
      kicker: "Admin Back Office", title: "Portfolio Control Room",
      stats: ["Accounts", "Active", "Admins", "Likes"],
      users: "User Accounts", likes: "Project Likes", logs: "System Logs",
      noUsers: "No users yet.", noLogs: "No logs yet.",
      roleUser: "User", roleAdmin: "Admin", active: "Active", disabled: "Disabled",
      enable: "Enable", disable: "Disable", delete: "Delete",
      joined: "Joined", age: "Age", anonymous: "Anonymous", system: "system", unknownIp: "unknown IP",
      searchPlaceholder: "Search email, target, IP...",
      allActions: "All actions",
      loadMore: "Load more",
      showingCount: (shown, total) => `Showing ${shown} of ${total} log entries`,
      actions: {
        USER_REGISTERED: "User registered",
        LOGIN_FAILED: "Login failed",
        LOGIN_SUCCEEDED: "Login succeeded",
        LOGOUT: "Logout",
        PROJECT_LIKED: "Project liked",
        PROJECT_UNLIKED: "Project unliked",
        ADMIN_USER_UPDATED: "Admin updated a user",
        ADMIN_USER_DELETED: "Admin deleted a user"
      }
    },
    likes: { youLiked: "You liked this work", loginToLike: "Login to like this work", liked: "Liked", like: "Like", likesLabel: "likes" },
    cert: { viewDetail: "View Detail", seeMore: "See more", seeLess: "See less" },
    issuers: { best_award: "The best Award", microsoft: "Microsoft", hamsterhub: "Hamster Hub", other: "Certificates" },
    toast: {
      loginFirst: "Login first, then you can like works.",
      loggedOut: "Logged out.",
      registerWelcome: (name) => `Account created. Welcome, ${name}.`,
      loginWelcome: (name) => `Welcome back, ${name}.`,
      userUpdated: "User account updated.",
      userDeleted: "User deleted.",
      deleteConfirm: "Delete this user and all of their sessions and likes?",
      pleaseWait: "Please wait...",
      invalidEmail: "Please enter a valid email address.",
      invalidPassword: "Use 10+ characters with uppercase, lowercase, a number, and a symbol."
    }
  },
  th: {
    nav: { profile: "โปรไฟล์", story: "เรื่องราวชีวิต", skills: "สกิล", projects: "ผลงาน", certificates: "ใบรับรอง", contact: "ติดต่อ" },
    auth: { login: "เข้าสู่ระบบ", register: "สมัครสมาชิก", logout: "ออกจากระบบ", admin: "แอดมิน" },
    hero: {
      kicker: "เด็กฝัน KMITL / พอร์ตโฟลิโอนักพัฒนา",
      alias: "หรือที่รู้จักกันในชื่อ New JA · เกิด 23.06.09",
      text: "ผมเป็นนักเรียนชั้นมัธยม 6 ที่เขียนโปรแกรมด้วย โตมากับการเล่น แล้วก็เริ่มมาสร้างของแทน ใช้ AI เป็นคู่คิดสร้างสรรค์ ใช้โค้ดเป็นเครื่องมือ และมี KMITL เป็นจุดหมายต่อไป",
      cta1: "ดูผลงานของผม",
      cta2: "อ่านเรื่องราวของผม",
      cta3: "ดาวน์โหลดเรซูเม่",
      nowCardSmall: "KMITL สักวันหนึ่ง",
      nowCardStrong: "ข้อความใหม่",
      nowCardBody: "มหาวิทยาลัยในฝัน",
      phoneCardTitle: "มหาวิทยาลัย",
      phoneCardBody: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
      faceCardRole: "นักพัฒนา / ครีเอเตอร์"
    },
    profile: {
      kicker: "โปรไฟล์ครีเอเตอร์",
      body: "นักเรียนสายวิทย์-คณิต ม.6 ที่ใช้เวลาส่วนใหญ่ไปกับงานพัฒนา ระบบเกม Roblox การสร้างงานด้วย AI และทำคอนเทนต์ โดยมี KMITL เป็นจุดหมายถัดไป",
      tags: ["หรือ New JA", "เกิด 23.06.09", "นักพัฒนา", "เด็กฝัน KMITL"]
    },
    section: {
      story: { kicker: "เรื่องราวชีวิต", title: "จากเด็กที่ชอบเล่น สู่ครีเอเตอร์ที่ชอบสร้าง", body: "เรื่องราวของผมเรียงเป็นไทม์ไลน์ ตั้งแต่วันเรียนจนถึงเป้าหมายระยะยาวคือการได้เรียนที่ KMITL" },
      skills: { kicker: "สกิลที่มี", title: "พยายามทำทุกอย่างโดยมี AI อยู่ข้าง ๆ", body: "นี่คือระดับสกิลที่ประเมินตัวเองตอนนี้ นำเสนอในสไตล์แดชบอร์ดนักพัฒนา" },
      projects: { kicker: "ผลงาน", title: "สิ่งที่กำลังสร้างอยู่ตอนนี้", body: "เข้าสู่ระบบเพื่อกดถูกใจผลงานได้เลย บัญชี เซสชัน และการกดถูกใจถูกเก็บไว้อย่างปลอดภัย" },
      certificates: { kicker: "ใบรับรอง", title: "กิจกรรมและหลักฐานความตั้งใจ", body: "แกลเลอรีใบรับรอง จัดกลุ่มตามผู้ออกใบรับรอง" },
      contact: { kicker: "ติดต่อ", title: "มาคุยกันได้เลย" }
    },
    auth_modal: {
      loginKicker: "เข้าสู่ระบบ", loginTitle: "ยินดีต้อนรับกลับมา", loginCopy: "เข้าสู่ระบบเพื่อกดถูกใจผลงานและใช้งานบัญชีสมาชิกของคุณ",
      registerKicker: "สมัครสมาชิก", registerTitle: "สร้างบัญชีผู้เยี่ยมชม", registerCopy: "สมัครบัญชีทั่วไปเพื่อกดถูกใจผลงานของผมได้",
      username: "ชื่อผู้ใช้", email: "อีเมล", password: "รหัสผ่าน", age: "อายุ",
      passwordRule: "ใช้ 10 ตัวอักษรขึ้นไป มีทั้งตัวพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และสัญลักษณ์",
      submitLogin: "เข้าสู่ระบบ", submitRegister: "สมัครสมาชิก"
    },
    dashboard: {
      kicker: "ห้องควบคุมแอดมิน", title: "ศูนย์ควบคุมพอร์ตโฟลิโอ",
      stats: ["บัญชีทั้งหมด", "ใช้งานอยู่", "แอดมิน", "ยอดถูกใจ"],
      users: "บัญชีผู้ใช้", likes: "ยอดถูกใจผลงาน", logs: "บันทึกระบบ",
      noUsers: "ยังไม่มีผู้ใช้", noLogs: "ยังไม่มีบันทึก",
      roleUser: "ผู้ใช้ทั่วไป", roleAdmin: "แอดมิน", active: "ใช้งานอยู่", disabled: "ถูกระงับ",
      enable: "เปิดใช้งาน", disable: "ระงับการใช้งาน", delete: "ลบ",
      joined: "สมัครเมื่อ", age: "อายุ", anonymous: "ไม่ระบุตัวตน", system: "ระบบ", unknownIp: "ไม่ทราบ IP",
      searchPlaceholder: "ค้นหาอีเมล เป้าหมาย หรือ IP...",
      allActions: "ทุกประเภท",
      loadMore: "โหลดเพิ่ม",
      showingCount: (shown, total) => `แสดง ${shown} จาก ${total} รายการ`,
      actions: {
        USER_REGISTERED: "สมัครสมาชิกใหม่",
        LOGIN_FAILED: "เข้าสู่ระบบไม่สำเร็จ",
        LOGIN_SUCCEEDED: "เข้าสู่ระบบสำเร็จ",
        LOGOUT: "ออกจากระบบ",
        PROJECT_LIKED: "กดถูกใจผลงาน",
        PROJECT_UNLIKED: "ยกเลิกถูกใจผลงาน",
        ADMIN_USER_UPDATED: "แอดมินแก้ไขผู้ใช้",
        ADMIN_USER_DELETED: "แอดมินลบผู้ใช้"
      }
    },
    likes: { youLiked: "คุณกดถูกใจผลงานนี้แล้ว", loginToLike: "เข้าสู่ระบบเพื่อกดถูกใจ", liked: "ถูกใจแล้ว", like: "ถูกใจ", likesLabel: "ถูกใจ" },
    cert: { viewDetail: "ดูรายละเอียด", seeMore: "ดูเพิ่มเติม", seeLess: "ย่อกลับ" },
    issuers: { best_award: "รางวัลยอดเยี่ยม (The best Award)", microsoft: "Microsoft", hamsterhub: "Hamster Hub", other: "ใบรับรองอื่น ๆ" },
    toast: {
      loginFirst: "เข้าสู่ระบบก่อน แล้วค่อยกดถูกใจผลงานได้เลย",
      loggedOut: "ออกจากระบบแล้ว",
      registerWelcome: (name) => `สร้างบัญชีแล้ว ยินดีต้อนรับ, ${name}`,
      loginWelcome: (name) => `ยินดีต้อนรับกลับมา, ${name}`,
      userUpdated: "อัปเดตบัญชีผู้ใช้แล้ว",
      userDeleted: "ลบผู้ใช้แล้ว",
      deleteConfirm: "ลบผู้ใช้คนนี้พร้อมเซสชันและยอดถูกใจทั้งหมดเลยไหม?",
      pleaseWait: "กรุณารอสักครู่...",
      invalidEmail: "กรุณากรอกอีเมลให้ถูกต้อง",
      invalidPassword: "ใช้ 10 ตัวอักษรขึ้นไป มีทั้งตัวพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และสัญลักษณ์"
    }
  }
};

const LANG_KEY = "newja_lang";
function getInitialLang() {
  const saved = window.localStorage.getItem(LANG_KEY);
  if (saved === "en" || saved === "th") return saved;
  return "th";
}

const state = {
  lang: getInitialLang(),
  likeCounts: {},
  likedProjectIds: [],
  expandedCerts: {},
  logs: [],
  logsTotal: 0,
  logsPage: 0,
  logsPageSize: 50,
  logsFilter: { action: "", search: "" },
  logActions: []
};
let session = null;
let authMode = "login";

function t() { return UI[state.lang]; }
function c() { return CONTENT[state.lang]; }

const storyList = document.querySelector("#storyList");
const aiToolList = document.querySelector("#aiToolList");
const skillList = document.querySelector("#skillList");
const projectList = document.querySelector("#projectList");
const certificateList = document.querySelector("#certificateList");
const authModal = document.querySelector("#authModal");
const dashboardModal = document.querySelector("#dashboardModal");
const authForm = document.querySelector("#authForm");
const authTitle = document.querySelector("#authTitle");
const authKicker = document.querySelector("#authKicker");
const authCopy = document.querySelector("#authCopy");
const authSubmit = document.querySelector("#authSubmit");
const formStatus = document.querySelector("#formStatus");
const usernameField = document.querySelector("#usernameField");
const ageField = document.querySelector("#ageField");
const passwordRule = document.querySelector("#passwordRule");
const toast = document.querySelector("#toast");
const userBadge = document.querySelector("#userBadge");
const langToggleBtn = document.querySelector("#langToggleBtn");
const logSearchInput = document.querySelector("#logSearchInput");
const logActionSelect = document.querySelector("#logActionSelect");
const logCountLabel = document.querySelector("#logCountLabel");
const loadMoreLogsBtn = document.querySelector("#loadMoreLogsBtn");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers
    },
    ...options
  });

  const data = response.status === 204 ? null : await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data?.error || "Something went wrong.");
    error.status = response.status;
    throw error;
  }
  return data;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}
/* ─── Static UI text (nav, hero, section heads, labels) ─── */
function applyStaticText() {
  document.documentElement.lang = state.lang;
  const ui = t();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = key.split(".").reduce((obj, part) => obj?.[part], ui);
    if (typeof value === "string") el.textContent = value;
  });

  const tagsHost = document.querySelector("#profileTags");
  if (tagsHost) {
    tagsHost.innerHTML = ui.profile.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("");
  }

  if (langToggleBtn) {
    langToggleBtn.textContent = state.lang === "th" ? "EN" : "ไทย";
    langToggleBtn.setAttribute("aria-label", state.lang === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย");
  }

  passwordRule.textContent = ui.auth_modal.passwordRule;
  document.querySelector("#dashboardModal h2").textContent = ui.dashboard.title;
  document.querySelector("#dashboardModal .kicker").textContent = ui.dashboard.kicker;
  document.querySelector(".dashboard-users h3").textContent = ui.dashboard.users;
  document.querySelector(".dashboard-grid article:nth-child(2) h3").textContent = ui.dashboard.likes;
  document.querySelector(".dashboard-logs h3").textContent = ui.dashboard.logs;
  if (logSearchInput) logSearchInput.placeholder = ui.dashboard.searchPlaceholder;
  if (loadMoreLogsBtn) loadMoreLogsBtn.textContent = ui.dashboard.loadMore;
  populateActionSelect();
  renderLogs();

  updateAuthUi();
}

function setLanguage(lang) {
  if (lang !== "th" && lang !== "en") return;
  state.lang = lang;
  window.localStorage.setItem(LANG_KEY, lang);
  applyStaticText();
  renderStory();
  renderAiTools();
  renderSkills();
  renderProjects();
  renderCertificates();
}

function renderStory() {
  storyList.innerHTML = c().story.map((item, index) => `
    <article class="timeline-item reveal">
      <span class="timeline-dot">${index + 1}</span>
      <time>${escapeHtml(item.period)}</time>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
      </div>
    </article>
  `).join("");
  observeReveals();
}

function renderAiTools() {
  aiToolList.innerHTML = c().aiTools.map((tool) => `
    <article class="ai-card">
      <span>${escapeHtml(tool.name.slice(0, 2))}</span>
      <div>
        <h3>${escapeHtml(tool.name)}</h3>
        <p>${escapeHtml(tool.body)}</p>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  skillList.innerHTML = c().skills.map((skill) => `
    <article class="skill-card reveal">
      <h3>${escapeHtml(skill.name)}</h3>
      <p>${escapeHtml(skill.body)}</p>
      <div class="meter" aria-label="${escapeHtml(skill.name)} ${skill.score} / 10">
        <span style="--value: ${skill.score * 10}%"></span>
      </div>
      <p><strong>${skill.score}/10</strong></p>
    </article>
  `).join("");
  observeReveals();
}

function getProjectLikeCount(projectId) {
  return state.likeCounts[projectId] || 0;
}

function renderProjects() {
  const ui = t();
  projectList.innerHTML = c().projects.map((project) => {
    const liked = state.likedProjectIds.includes(project.id);
    return `
      <article class="project-card reveal">
        <p class="kicker">${escapeHtml(project.type)}</p>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.body)}</p>
        <div class="project-meta">
          <span class="pill">${escapeHtml(project.status)}</span>
          <span class="pill">${getProjectLikeCount(project.id)} ${escapeHtml(ui.likes.likesLabel)}</span>
        </div>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div class="like-row">
          <span>${liked ? escapeHtml(ui.likes.youLiked) : escapeHtml(ui.likes.loginToLike)}</span>
          <button class="like-btn ${liked ? "is-liked" : ""}" data-like="${project.id}" type="button">${liked ? escapeHtml(ui.likes.liked) : escapeHtml(ui.likes.like)}</button>
        </div>
      </article>
    `;
  }).join("");
  observeReveals();
}

window.openCertModal = function (imgSrc, title, body) {
  document.getElementById('certModalImg').src = imgSrc;
  document.getElementById('certModalTitle').textContent = title;
  document.getElementById('certModalBody').textContent = body;
  document.getElementById('certModal').showModal();
};

window.toggleCerts = function (issuerId) {
  state.expandedCerts[issuerId] = !state.expandedCerts[issuerId];

  if (document.startViewTransition) {
    document.startViewTransition(() => renderCertificates());
  } else {
    renderCertificates();
  }
};

function renderCertificates() {
  const ui = t();
  // เพิ่ม "best_award" เข้าไปในลิสต์นี้ (วางไว้หน้าสุดถ้าอยากให้ขึ้นเป็นหมวดแรก)
  const issuerOrder = ["best_award", "microsoft", "hamsterhub", "other"];

  const grouped = issuerOrder.map((issuerId) => ({
    issuerId,
    label: ui.issuers[issuerId],
    certs: c().certificates.filter((cert) => cert.issuerId === issuerId)
  })).filter((group) => group.certs.length > 0);

  let htmlContent = "";

  for (const { issuerId, label, certs } of grouped) {
    const isExpanded = state.expandedCerts[issuerId];
    const displayCerts = isExpanded ? certs : certs.slice(0, 3);
    const hasMore = certs.length > 3;

    htmlContent += `
      <div class="cert-category">
        <div class="cert-category-header">
          <h3>${escapeHtml(label)}</h3>
          ${hasMore ? `<a href="#" class="see-more-link" onclick="event.preventDefault(); toggleCerts('${issuerId}')">${isExpanded ? escapeHtml(ui.cert.seeLess) : escapeHtml(ui.cert.seeMore)}</a>` : ''}
        </div>
        <div class="cert-row">
          ${displayCerts.map((cert, index) => `
            <div class="cert-box reveal ${isExpanded && index >= 3 ? 'pop-in-cert' : ''}" style="--stagger: ${(index - 3) * 0.08}s" onclick="openCertModal('${escapeHtml(cert.image)}', '${escapeHtml(cert.title)}', '${escapeHtml(cert.body)}')">
              <img src="${escapeHtml(cert.image)}" alt="${escapeHtml(cert.title)}">
              <div class="cert-overlay">
                <span>${escapeHtml(ui.cert.viewDetail)}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  certificateList.innerHTML = htmlContent;
  observeReveals();

  if (!document.getElementById("certModal")) {
    document.body.insertAdjacentHTML('beforeend', `
      <dialog id="certModal" class="modal cert-modal">
        <div class="modal-panel cert-modal-content">
          <button class="close-btn" onclick="document.getElementById('certModal').close()">&times;</button>
          <img id="certModalImg" src="" alt="Certificate Full View">
          <div class="cert-info">
            <h3 id="certModalTitle"></h3>
            <p id="certModalBody"></p>
          </div>
        </div>
      </dialog>
    `);
  }
}

function openAuth(mode) {
  authMode = mode;
  const ui = t().auth_modal;
  formStatus.textContent = "";
  authForm.reset();
  document.querySelector("#ageInput").value = 17;
  const isRegister = mode === "register";
  authKicker.textContent = isRegister ? ui.registerKicker : ui.loginKicker;
  authTitle.textContent = isRegister ? ui.registerTitle : ui.loginTitle;
  authCopy.textContent = isRegister ? ui.registerCopy : ui.loginCopy;
  authSubmit.textContent = isRegister ? ui.submitRegister : ui.submitLogin;
  usernameField.hidden = !isRegister;
  ageField.hidden = !isRegister;
  passwordRule.hidden = !isRegister;
  document.querySelector("#usernameInput").required = isRegister;
  document.querySelector("#ageInput").required = isRegister;
  document.querySelector("#passwordInput").minLength = isRegister ? 10 : 1;
  authModal.showModal();
}

function updateAuthUi() {
  const ui = t().auth;
  const isLoggedIn = Boolean(session);
  document.querySelector("#loginBtn").hidden = isLoggedIn;
  document.querySelector("#registerBtn").hidden = isLoggedIn;
  document.querySelector("#logoutBtn").hidden = !isLoggedIn;
  document.querySelector("#dashboardBtn").hidden = !(session && session.role === "admin");
  document.querySelector("#loginBtn").textContent = ui.login;
  document.querySelector("#registerBtn").textContent = ui.register;
  document.querySelector("#logoutBtn").textContent = ui.logout;
  document.querySelector("#dashboardBtn").textContent = ui.admin;
  userBadge.hidden = !isLoggedIn;
  userBadge.textContent = isLoggedIn ? `${session.username} / ${session.role}` : "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateRegisterPassword(password) {
  return password.length >= 10
    && /[A-Z]/.test(password)
    && /[a-z]/.test(password)
    && /\d/.test(password)
    && /[^A-Za-z0-9]/.test(password);
}

async function handleAuth(event) {
  event.preventDefault();
  const ui = t().toast;
  const username = document.querySelector("#usernameInput").value.trim();
  const email = document.querySelector("#emailInput").value.trim().toLowerCase();
  const password = document.querySelector("#passwordInput").value;
  const age = Number(document.querySelector("#ageInput").value || 0);

  if (!validateEmail(email)) {
    formStatus.textContent = ui.invalidEmail;
    return;
  }

  if (authMode === "register" && !validateRegisterPassword(password)) {
    formStatus.textContent = ui.invalidPassword;
    return;
  }

  authSubmit.disabled = true;
  formStatus.textContent = ui.pleaseWait;
  try {
    const payload = authMode === "register"
      ? { username, email, password, age }
      : { email, password };
    const data = await api(`/api/auth/${authMode}`, {
      method: "POST",
      body: JSON.stringify(payload)
    });
    session = data.user;
    updateAuthUi();
    await loadLikes();
    authModal.close();
    showToast(authMode === "register" ? ui.registerWelcome(session.username) : ui.loginWelcome(session.username));
  } catch (error) {
    formStatus.textContent = error.message;
  } finally {
    authSubmit.disabled = false;
  }
}

async function handleLike(projectId) {
  if (!session) {
    openAuth("login");
    showToast(t().toast.loginFirst);
    return;
  }

  try {
    await api(`/api/projects/${encodeURIComponent(projectId)}/like`, { method: "POST" });
    await loadLikes();
  } catch (error) {
    if (error.status === 401) {
      session = null;
      updateAuthUi();
    }
    showToast(error.message);
  }
}

function formatDate(value) {
  return new Intl.DateTimeFormat(state.lang === "th" ? "th-TH" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

let dashboardOverview = null;

function renderDashboardOverview(data) {
  dashboardOverview = data;
  const ui = t().dashboard;
  const userList = document.querySelector("#userList");
  const likeList = document.querySelector("#likeList");
  const activeUsers = data.users.filter((user) => user.isActive).length;
  const admins = data.users.filter((user) => user.role === "admin").length;
  const totalLikes = data.likes.reduce((sum, item) => sum + Number(item.count), 0);

  document.querySelector("#adminStats").innerHTML = `
    <div><strong>${data.users.length}</strong><span>${escapeHtml(ui.stats[0])}</span></div>
    <div><strong>${activeUsers}</strong><span>${escapeHtml(ui.stats[1])}</span></div>
    <div><strong>${admins}</strong><span>${escapeHtml(ui.stats[2])}</span></div>
    <div><strong>${totalLikes}</strong><span>${escapeHtml(ui.stats[3])}</span></div>
  `;

  userList.innerHTML = data.users.length
    ? data.users.map((user) => {
      const isSelf = user.id === session.id;
      return `
      <div class="user-row">
        <p>
          <strong>${escapeHtml(user.username)}</strong>
          <span class="account-state ${user.isActive ? "is-active" : "is-disabled"}">${user.isActive ? escapeHtml(ui.active) : escapeHtml(ui.disabled)}</span>
          <br>${escapeHtml(user.email)}<br>
          <small>${escapeHtml(ui.age)} ${user.age ?? "-"} / ${escapeHtml(ui.joined)} ${formatDate(user.createdAt)}</small>
        </p>
        <div class="user-actions">
          <select data-role-user="${user.id}" aria-label="${escapeHtml(user.username)}" ${isSelf ? "disabled" : ""}>
            <option value="user" ${user.role === "user" ? "selected" : ""}>${escapeHtml(ui.roleUser)}</option>
            <option value="admin" ${user.role === "admin" ? "selected" : ""}>${escapeHtml(ui.roleAdmin)}</option>
          </select>
          <button class="ghost-btn compact" type="button" data-toggle-user="${user.id}" data-active="${user.isActive}" ${isSelf ? "disabled" : ""}>
            ${user.isActive ? escapeHtml(ui.disable) : escapeHtml(ui.enable)}
          </button>
          <button class="danger-btn" type="button" data-delete-user="${user.id}" ${isSelf ? "disabled" : ""}>${escapeHtml(ui.delete)}</button>
        </div>
      </div>
    `;
    }).join("")
    : `<p>${escapeHtml(ui.noUsers)}</p>`;

  likeList.innerHTML = c().projects.map((project) => {
    const item = data.likes.find((like) => like.project_id === project.id);
    const names = item?.users?.map((user) => user.username).join(", ");
    return `
    <p><strong>${escapeHtml(project.title)}</strong><br>${Number(item?.count || 0)} ${escapeHtml(t().likes.likesLabel)}
    ${names ? `<br><small>${escapeHtml(names)}</small>` : ""}</p>
  `;
  }).join("");
}

function actionLabel(actionCode) {
  return t().dashboard.actions[actionCode] || actionCode;
}

function populateActionSelect() {
  if (!logActionSelect) return;
  const ui = t().dashboard;
  const current = logActionSelect.value;
  const options = [`<option value="">${escapeHtml(ui.allActions)}</option>`]
    .concat(state.logActions.map((code) => `<option value="${escapeHtml(code)}">${escapeHtml(actionLabel(code))}</option>`));
  logActionSelect.innerHTML = options.join("");
  logActionSelect.value = state.logActions.includes(current) ? current : "";
}

function renderLogs() {
  const ui = t().dashboard;
  const logList = document.querySelector("#logList");
  if (!logList) return;

  logList.innerHTML = state.logs.length
    ? state.logs.map((log) => `
      <p>
        <strong>${escapeHtml(actionLabel(log.action))}</strong>
        <span class="log-actor">${escapeHtml(log.actor_email || ui.anonymous)}</span><br>
        ${escapeHtml(log.target_type || ui.system)}${log.target_id ? ` / ${escapeHtml(log.target_id)}` : ""}
        <br><small>${formatDate(log.created_at)} / ${escapeHtml(log.ip_address || ui.unknownIp)}</small>
      </p>
    `).join("")
    : `<p>${escapeHtml(ui.noLogs)}</p>`;

  if (logCountLabel) {
    logCountLabel.textContent = state.logsTotal ? ui.showingCount(state.logs.length, state.logsTotal) : "";
  }
  if (loadMoreLogsBtn) {
    loadMoreLogsBtn.hidden = state.logs.length >= state.logsTotal;
  }
}

async function loadLogs({ reset = false } = {}) {
  if (reset) {
    state.logs = [];
    state.logsPage = 0;
    state.logsTotal = 0;
  }
  const params = new URLSearchParams({
    page: String(state.logsPage + 1),
    pageSize: String(state.logsPageSize)
  });
  if (state.logsFilter.action) params.set("action", state.logsFilter.action);
  if (state.logsFilter.search) params.set("search", state.logsFilter.search);

  const data = await api(`/api/admin/logs?${params.toString()}`);
  state.logs = reset ? data.logs : [...state.logs, ...data.logs];
  state.logsTotal = data.total;
  state.logsPage = data.page;
  renderLogs();
}

let logSearchTimeout = null;
function scheduleLogSearch(value) {
  state.logsFilter.search = value.trim();
  window.clearTimeout(logSearchTimeout);
  logSearchTimeout = window.setTimeout(() => {
    loadLogs({ reset: true }).catch((error) => showToast(error.message));
  }, 350);
}

async function openDashboard() {
  try {
    const [overview, actionsData] = await Promise.all([
      api("/api/admin/overview"),
      api("/api/admin/logs/actions")
    ]);
    renderDashboardOverview(overview);
    state.logActions = actionsData.actions;
    populateActionSelect();
    await loadLogs({ reset: true });
    dashboardModal.showModal();
  } catch (error) {
    showToast(error.message);
  }
}

async function refreshDashboard() {
  const overview = await api("/api/admin/overview");
  renderDashboardOverview(overview);
  await loadLogs({ reset: true });
}

async function updateUser(userId, changes) {
  try {
    await api(`/api/admin/users/${encodeURIComponent(userId)}`, {
      method: "PATCH",
      body: JSON.stringify(changes)
    });
    await refreshDashboard();
    showToast(t().toast.userUpdated);
  } catch (error) {
    showToast(error.message);
    await refreshDashboard().catch(() => { });
  }
}

async function deleteUser(userId) {
  if (!window.confirm(t().toast.deleteConfirm)) return;
  try {
    await api(`/api/admin/users/${encodeURIComponent(userId)}`, { method: "DELETE" });
    await refreshDashboard();
    showToast(t().toast.userDeleted);
  } catch (error) {
    showToast(error.message);
  }
}

async function loadLikes() {
  const data = await api("/api/projects/likes");
  state.likeCounts = data.counts;
  state.likedProjectIds = data.likedProjectIds;
  renderProjects();
}

async function initializeSession() {
  try {
    const data = await api("/api/auth/me");
    session = data.user;
  } catch {
    session = null;
  }
  updateAuthUi();
  await loadLikes().catch(() => renderProjects());
}

document.querySelector("#loginBtn").addEventListener("click", () => openAuth("login"));
document.querySelector("#registerBtn").addEventListener("click", () => openAuth("register"));
document.querySelector("#logoutBtn").addEventListener("click", async () => {
  try {
    await api("/api/auth/logout", { method: "POST" });
  } catch (error) {
    showToast(error.message);
  } finally {
    session = null;
    state.likedProjectIds = [];
    updateAuthUi();
    await loadLikes().catch(() => renderProjects());
    showToast(t().toast.loggedOut);
  }
});
document.querySelector("#dashboardBtn").addEventListener("click", openDashboard);
document.querySelector("#closeAuthBtn").addEventListener("click", () => authModal.close());
document.querySelector("#closeDashboardBtn").addEventListener("click", () => dashboardModal.close());
authForm.addEventListener("submit", handleAuth);
projectList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-like]");
  if (button) handleLike(button.dataset.like);
});
document.querySelector("#userList").addEventListener("change", (event) => {
  const select = event.target.closest("[data-role-user]");
  if (select) updateUser(select.dataset.roleUser, { role: select.value });
});
document.querySelector("#userList").addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle-user]");
  if (toggle) {
    updateUser(toggle.dataset.toggleUser, { isActive: toggle.dataset.active !== "true" });
    return;
  }
  const remove = event.target.closest("[data-delete-user]");
  if (remove) deleteUser(remove.dataset.deleteUser);
});
langToggleBtn?.addEventListener("click", () => setLanguage(state.lang === "th" ? "en" : "th"));
logSearchInput?.addEventListener("input", (event) => scheduleLogSearch(event.target.value));
logActionSelect?.addEventListener("change", (event) => {
  state.logsFilter.action = event.target.value;
  loadLogs({ reset: true }).catch((error) => showToast(error.message));
});
loadMoreLogsBtn?.addEventListener("click", () => {
  loadLogs().catch((error) => showToast(error.message));
});

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }
  }, { threshold: .16 });

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((target) => observer.observe(target));
}

const topbar = document.querySelector("#topbar");
const scrollProgress = document.querySelector("#scrollProgress");
const backToTop = document.querySelector("#backToTop");

function updateScrollEffects() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (scrollProgress) scrollProgress.style.width = `${progress}%`;
  if (topbar) topbar.classList.toggle("scrolled", scrollTop > 10);
  if (backToTop) backToTop.classList.toggle("visible", scrollTop > 400);
}

function initScrollEffects() {
  updateScrollEffects();
  window.addEventListener("scroll", updateScrollEffects, { passive: true });
  window.addEventListener("resize", updateScrollEffects);

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

applyStaticText();
renderStory();
renderAiTools();
renderSkills();
renderProjects();
renderCertificates();
updateAuthUi();
observeReveals();
initScrollEffects();
initializeSession();