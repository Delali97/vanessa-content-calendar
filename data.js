const CALENDAR_DATA = [
    // WEEK 1
    {
        number: 1,
        dates: "Jan 1-7, 2026",
        theme: "Existing Content Launch",
        totalTime: 6.5,
        
        filmingDay: {
            date: "2026-01-10",
            saturday: true,
            duration: 1.5,
            shoots: [
                {
                    type: "series",
                    episode: 4,
                    title: "Bronzer",
                    duration: 45,
                    checklist: [
                        { item: "Dehjiluxe wig installed", done: false },
                        { item: "Base makeup done", done: false },
                        { item: "Products for bronzer ready", done: false },
                        { item: "Phone charged + backup", done: false },
                        { item: "Lighting tested", done: false },
                        { item: "Tripod positioned", done: false }
                    ],
                    derivatives: [
                        "Before/After transition",
                        "Product focus",
                        "Brush technique",
                        "The mistake (optional)",
                        "Quick demo",
                        "Comparison"
                    ]
                },
                {
                    type: "relatable",
                    concept: "Starting Ep 4 when I'm still figuring out Ep 1 😭",
                    duration: 15
                }
            ],
            postFilming: [
                { item: "Review footage", done: false },
                { item: "Backup files", done: false },
                { item: "Send Episode 4 to editor", done: false },
                { item: "Create Ashy Lips D2 (Before/After)", done: false }
            ]
        },
        
        dailyTasks: {
            "2026-01-01": {
                type: "prep",
                tasks: [
                    { task: "Download Ashy Lips video", time: 15, done: false },
                    { task: "Create Ashy Lips D1: Product Lineup", time: 30, done: false },
                    { task: "Plan week derivatives", time: 15, done: false }
                ],
                stories: [
                    "Launching makeup series this week",
                    "Show products for upcoming episodes",
                    "Episode 1 already live, creating more content from it"
                ]
            },
            "2026-01-02": {
                type: "creation",
                tasks: [
                    { task: "Confirm editor delivered Lashes + Sponge", time: 10, done: false },
                    { task: "Create Lashes D1: Before/After", time: 30, done: false },
                    { task: "Create Sponge D1: The Poll (LEFT or RIGHT)", time: 30, done: false },
                    { task: "Write captions for all", time: 20, done: false }
                ],
                stories: [
                    "New Year content (personal)",
                    "Filming Episode 4 soon",
                    "Scent mention: What I wore NYE"
                ]
            },
            "2026-01-03": {
                type: "post",
                post: {
                    content: "Lashes Episode 2 - Main Tutorial",
                    length: "35-45s",
                    status: "with editor",
                    time: "6-8pm",
                    caption: "Makeup Until It Makes Sense · Episode 2\n\nLearning lashes that actually work with glasses. I've been fighting with my lashes for MONTHS. These finally don't hit my lens every time I blink.\n\nHair's already done [@dehjiluxe glueless - 10 min install], so all my focus is on figuring out this lash situation.\n\nEpisode 3 drops next week (under-eye concealer). Still learning with you all 🤍",
                    hashtags: ["#makeupforbeginners", "#glassesmakeup", "#lashesforglasses", "#learningwithme"],
                    posted: false
                },
                tasks: [
                    { task: "Engage heavily", time: 15, done: false }
                ],
                stories: [
                    "Repost the episode",
                    "Episode 2 is live!",
                    "BTS: I messed up the first take 😭"
                ]
            },
            "2026-01-04": {
                type: "off",
                stories: [
                    "Quick life update",
                    "Scent: What I wore filming Episode 2",
                    "Episode 3 coming this week"
                ]
            },
            "2026-01-05": {
                type: "post",
                post: {
                    content: "Ashy Lips D1: Product Lineup",
                    length: "15-20s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "From Episode 1 of my makeup series: The only 3 products that fixed my chronically dry lips. [Product names]. Full episode pinned to my profile 🤍",
                    hashtags: ["#makeupforbeginners", "#lipcombo", "#makeuptutorial"],
                    posted: false
                },
                tasks: [
                    { task: "Engage with comments 15 min", time: 15, done: false }
                ],
                stories: [
                    "Repost the TikTok",
                    "If you missed Episode 1, it's pinned",
                    "Building a beginner makeup series"
                ]
            },
            "2026-01-06": {
                type: "creation",
                tasks: [
                    { task: "Create Episode 4 D1: Before/After", time: 30, done: false },
                    { task: "Create Sponge D2", time: 30, done: false }
                ],
                stories: [
                    "Creating content for the week"
                ]
            },
            "2026-01-07": {
                type: "post",
                post: {
                    content: "Episode 3: Sponge vs Brush Concealer",
                    length: "35-45s",
                    status: "with editor",
                    time: "6-8pm",
                    caption: "Makeup Until It Makes Sense · Episode 3\n\nLearning under-eye concealer with you all. I've been using a brush but a damp sponge is giving me WAY better results - softer, no caking.\n\nThis goes on after bronzer (Ep 4 coming soon), helps brighten and lift the face.\n\nStill figuring this out but this technique is working better for me 🤍\n\n[Hair: @dehjiluxe]",
                    hashtags: ["#makeupforbeginners", "#concealerhack", "#undereyes", "#learningwithme"],
                    posted: false
                },
                tasks: [
                    { task: "Engage with comments", time: 15, done: false }
                ],
                stories: [
                    "Repost episode",
                    "Episode 3!",
                    "Series building"
                ]
            }
        }
    },

    // WEEK 2
    {
        number: 2,
        dates: "Jan 8-14, 2026",
        theme: "Building Buffer",
        totalTime: 7,
        
        filmingDay: {
            date: "2026-01-10",
            saturday: true,
            duration: 1.5,
            shoots: [
                {
                    type: "series",
                    episode: 5,
                    title: "Blush",
                    duration: 45,
                    checklist: [
                        { item: "Dehjiluxe wig styled", done: false },
                        { item: "Base makeup + bronzer done", done: false },
                        { item: "Blush products ready", done: false },
                        { item: "Equipment charged", done: false },
                        { item: "Lighting set", done: false }
                    ],
                    derivatives: [
                        "Before/After",
                        "Product focus",
                        "Placement technique",
                        "Color theory tip",
                        "Quick demo"
                    ]
                },
                {
                    type: "GRWM or relatable",
                    concept: "Getting ready for [event] OR personality moment",
                    duration: 30
                }
            ],
            postFilming: [
                { item: "Send Episode 5 to editor", done: false },
                { item: "Create Lashes D3: Placement Tip", done: false }
            ]
        },
        
        dailyTasks: {
            "2026-01-08": {
                type: "prep",
                tasks: [
                    { task: "Create derivatives from backlog", time: 30, done: false }
                ],
                stories: [
                    "Week 2 starting",
                    "Filming this weekend"
                ]
            },
            "2026-01-09": {
                type: "post",
                post: {
                    content: "Relatable POV: Starting Ep 4 when still figuring Ep 1",
                    length: "15-20s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Starting Episode 4 when I'm still figuring out Episode 1 😭 at least my hair looks good [@dehjiluxe] while I learn",
                    hashtags: ["#learningwithme", "#makeupjourney", "#relatable"],
                    posted: false
                },
                tasks: [
                    { task: "Engage with comments", time: 15, done: false }
                ],
                stories: [
                    "Repost",
                    "Personality moment",
                    "Filming Episode 5 this weekend"
                ]
            },
            "2026-01-10": {
                type: "filming",
                note: "See Filming Day details"
            },
            "2026-01-11": {
                type: "post",
                post: {
                    content: "Sponge D1: The Poll (LEFT or RIGHT)",
                    length: "10-15s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Sponge vs brush for under-eye concealer - LEFT or RIGHT? 👀 Comment before I reveal which is which (Episode 3 has the full breakdown)",
                    hashtags: ["#makeupforbeginners", "#concealerhack"],
                    posted: false
                }
            },
            "2026-01-12": {
                type: "off",
                stories: ["Life update", "Scent mention"]
            },
            "2026-01-13": {
                type: "creation",
                tasks: [
                    { task: "Create Episode 5 derivatives", time: 60, done: false }
                ]
            },
            "2026-01-14": {
                type: "post",
                post: {
                    content: "Ashy Lips D2: Before/After",
                    length: "10-12s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Before vs After from Episode 1. Three products, completely different lips.",
                    hashtags: ["#makeupbeforeandafter", "#lipcombo"],
                    posted: false
                },
                tasks: [
                    { task: "Weekly review", time: 60, done: false }
                ]
            }
        }
    },

    // WEEK 3
    {
        number: 3,
        dates: "Jan 15-21, 2026",
        theme: "Expanding Content",
        totalTime: 6.5,
        
        filmingDay: {
            date: "2026-01-17",
            saturday: true,
            duration: 1.5,
            shoots: [
                {
                    type: "series",
                    episode: 6,
                    title: "Brightening Concealer",
                    duration: 45,
                    checklist: [
                        { item: "Full face base ready", done: false },
                        { item: "Concealer shades ready", done: false },
                        { item: "Reference images", done: false },
                        { item: "Equipment ready", done: false }
                    ],
                    derivatives: [
                        "Before/After",
                        "Shade matching",
                        "Application technique",
                        "Quick demo"
                    ]
                },
                {
                    type: "dehjiluxe",
                    concept: "Wig review styled like outfit review",
                    duration: 20
                },
                {
                    type: "relatable",
                    concept: "Quick personality moment",
                    duration: 10
                }
            ],
            postFilming: [
                { item: "Send Episode 6 to editor", done: false },
                { item: "Create Episode 4 D3", done: false }
            ]
        },
        
        dailyTasks: {
            "2026-01-15": {
                type: "prep",
                tasks: [
                    { task: "Receive Episode 5 from editor", time: 10, done: false },
                    { task: "Create Episode 5 D1", time: 30, done: false }
                ]
            },
            "2026-01-16": {
                type: "post",
                post: {
                    content: "Episode 4: Bronzer - Main Tutorial",
                    length: "35-45s",
                    status: "with editor",
                    time: "6-8pm",
                    caption: "Makeup Until It Makes Sense · Episode 4\n\nBronzer placement. Finally figured it out 🤍",
                    hashtags: ["#makeupforbeginners", "#bronzer"],
                    posted: false
                }
            },
            "2026-01-17": {
                type: "filming"
            },
            "2026-01-18": {
                type: "post",
                post: {
                    content: "GRWM content",
                    length: "20-30s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Getting ready with @dehjiluxe",
                    hashtags: ["#grwm"],
                    posted: false
                }
            },
            "2026-01-19": {
                type: "off"
            },
            "2026-01-20": {
                type: "creation",
                tasks: [
                    { task: "Create derivatives", time: 60, done: false }
                ]
            },
            "2026-01-21": {
                type: "post",
                post: {
                    content: "Episode 4 D1: Before/After",
                    length: "10-12s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Bronzer before/after from Episode 4",
                    hashtags: ["#makeupbeforeandafter"],
                    posted: false
                },
                tasks: [
                    { task: "PHASE 1 REVIEW", time: 60, done: false }
                ]
            }
        }
    },

    // WEEK 4
    {
        number: 4,
        dates: "Jan 22-28, 2026",
        theme: "Sustainable Rhythm",
        totalTime: 6.5,
        
        filmingDay: {
            date: "2026-01-24",
            saturday: true,
            duration: 1.5,
            shoots: [
                {
                    type: "series",
                    episode: 7,
                    title: "Setting Spray",
                    duration: 45,
                    checklist: [
                        { item: "Full face ready", done: false },
                        { item: "Setting sprays ready", done: false }
                    ],
                    derivatives: [
                        "Before/After",
                        "Product comparison",
                        "Technique",
                        "Quick demo"
                    ]
                },
                {
                    type: "relatable or GRWM",
                    duration: 30
                }
            ],
            postFilming: [
                { item: "Send Episode 7 to editor", done: false }
            ]
        },
        
        dailyTasks: {
            "2026-01-22": {
                type: "prep",
                tasks: [
                    { task: "Create derivatives", time: 30, done: false }
                ]
            },
            "2026-01-23": {
                type: "post",
                post: {
                    content: "Episode 5: Blush",
                    length: "35-45s",
                    status: "with editor",
                    time: "6-8pm",
                    caption: "Episode 5: Blush placement 🤍",
                    hashtags: ["#makeupforbeginners", "#blush"],
                    posted: false
                }
            },
            "2026-01-24": {
                type: "filming"
            },
            "2026-01-25": {
                type: "post",
                post: {
                    content: "Supporting content",
                    length: "20-30s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "TBD",
                    hashtags: [],
                    posted: false
                }
            },
            "2026-01-26": {
                type: "off"
            },
            "2026-01-27": {
                type: "creation",
                tasks: [
                    { task: "Create derivatives", time: 60, done: false }
                ]
            },
            "2026-01-28": {
                type: "post",
                post: {
                    content: "Derivative",
                    length: "15-20s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Quick tip",
                    hashtags: ["#makeuptips"],
                    posted: false
                },
                tasks: [
                    { task: "Weekly review", time: 60, done: false }
                ]
            }
        }
    }
];
```

---

## WHAT CHANGED

✅ **All dates shifted to 2026**
✅ **Week 1 now starts Jan 1, 2026**
✅ **Today (Sat Jan 3) = Lashes Ep 2 posting day**
✅ **First filming day: Sat Jan 10** (next weekend)
✅ **Dates flow naturally through January 2026**

---

## TO UPDATE YOUR APP

1. **Go to your GitHub repo**
2. **Click on `data.js`**
3. **Click the pencil icon (Edit)**
4. **Delete all content**
5. **Paste the entire new code above**
6. **Scroll down → "Commit changes"**
7. **Wait 1-2 minutes for GitHub Pages to update**
8. **Refresh your app**

---

## WHAT YOU'LL SEE NOW

**TODAY view (Sat Jan 3) will show:**
```
Week 1 · Sat Jan 3

📍 TODAY'S POST (6-8pm)
Lashes Episode 2 - Main Tutorial
35-45 seconds

⏺ With Editor
POST IN [X] HOURS

[VIEW CAPTION] [MARK POSTED]
