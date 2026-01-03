const CALENDAR_DATA = [
    // WEEK 1
    {
        number: 1,
        dates: "Dec 30 - Jan 5",
        theme: "Existing Content Launch",
        totalTime: 6.5,
        
        filmingDay: {
            date: "2025-01-04",
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
            "2024-12-30": {
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
            "2024-12-31": {
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
            "2025-01-01": {
                type: "creation",
                tasks: [
                    { task: "Confirm editor delivered Lashes + Sponge", time: 10, done: false },
                    { task: "Create Lashes D1: Before/After", time: 30, done: false },
                    { task: "Create Sponge D1: The Poll (LEFT or RIGHT)", time: 30, done: false },
                    { task: "Write captions for all", time: 20, done: false }
                ],
                stories: [
                    "New Year content (personal)",
                    "Filming Episode 4 this weekend",
                    "Scent mention: What I wore NYE"
                ]
            },
            "2025-01-02": {
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
            "2025-01-03": {
                type: "off",
                stories: [
                    "Quick life update",
                    "Scent: What I wore filming Episode 2",
                    "Episode 3 coming soon"
                ]
            },
            "2025-01-04": {
                type: "filming",
                note: "See Filming Day details above"
            },
            "2025-01-05": {
                type: "post",
                post: {
                    content: "Ashy Lips D2: Before/After",
                    length: "10-12s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Before vs After from Episode 1. Three products, completely different lips. If you missed the full tutorial, it's pinned 🤍",
                    hashtags: ["#makeupbeforeandafter", "#lipcombo"],
                    posted: false
                },
                tasks: [
                    { task: "Weekly review", time: 60, done: false }
                ],
                stories: [
                    "Relatable content from yesterday",
                    "Filmed Episode 4 yesterday - drops next week",
                    "Weekly recap: Posts this week"
                ]
            }
        }
    },

    // WEEK 2
    {
        number: 2,
        dates: "Jan 6-12",
        theme: "Building Buffer",
        totalTime: 7,
        
        filmingDay: {
            date: "2025-01-11",
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
            "2025-01-06": {
                type: "prep",
                tasks: [
                    { task: "Receive Episode 4 from editor", time: 10, done: false },
                    { task: "Create Episode 4 D1: Before/After", time: 30, done: false }
                ],
                stories: [
                    "Monday motivation",
                    "Episode 3 drops tomorrow",
                    "Scent: What I'm wearing today"
                ]
            },
            "2025-01-07": {
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
                    "We're on Episode 3!",
                    "Series progress tracker"
                ]
            },
            "2025-01-08": {
                type: "creation",
                tasks: [
                    { task: "Create Sponge D1: The Poll", time: 30, done: false },
                    { task: "Create Lashes D2: Product Focus", time: 30, done: false },
                    { task: "Create Episode 4 D2: Product focus", time: 30, done: false }
                ],
                stories: [
                    "BTS from last week's filming",
                    "Creating content from Episodes 1-4"
                ]
            },
            "2025-01-09": {
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
            "2025-01-10": {
                type: "off",
                stories: [
                    "Life update",
                    "Scent mention",
                    "Episode 4 teaser: coming next week"
                ]
            },
            "2025-01-11": {
                type: "filming",
                note: "See Filming Day details"
            },
            "2025-01-12": {
                type: "post",
                post: {
                    content: "Sponge D1: The Poll (LEFT or RIGHT)",
                    length: "10-15s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Sponge vs brush for under-eye concealer - LEFT or RIGHT? 👀 Comment before I reveal which is which (Episode 3 has the full breakdown)",
                    hashtags: ["#makeupforbeginners", "#concealerhack"],
                    posted: false
                },
                tasks: [
                    { task: "Weekly review", time: 60, done: false }
                ],
                stories: [
                    "Weekly recap",
                    "Filmed Episode 5",
                    "3 episodes posted, more coming"
                ]
            }
        }
    },

    // WEEK 3
    {
        number: 3,
        dates: "Jan 13-19",
        theme: "Expanding Content Types",
        totalTime: 6.5,
        
        filmingDay: {
            date: "2025-01-18",
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
            "2025-01-13": {
                type: "prep",
                tasks: [
                    { task: "Receive Episode 5 from editor", time: 10, done: false },
                    { task: "Create Episode 5 D1", time: 30, done: false }
                ],
                stories: [
                    "Episode 4 teaser",
                    "Week 3 plans"
                ]
            },
            "2025-01-14": {
                type: "post",
                post: {
                    content: "Episode 4: Bronzer - Main Tutorial",
                    length: "35-45s",
                    status: "with editor",
                    time: "6-8pm",
                    caption: "Makeup Until It Makes Sense · Episode 4\n\nBronzer placement has been confusing me for the longest time. I kept going too low, making everything look muddy.\n\nFinally figured out: higher on cheekbones, blend into hairline. Changes everything.\n\nHair stays perfect with @dehjiluxe while I focus on learning 🤍",
                    hashtags: ["#makeupforbeginners", "#bronzertutorial", "#learningwithme"],
                    posted: false
                },
                tasks: [
                    { task: "Engage heavily", time: 15, done: false }
                ],
                stories: [
                    "Repost episode",
                    "Episode 4 is live!"
                ]
            },
            "2025-01-15": {
                type: "creation",
                tasks: [
                    { task: "Create Episode 5 D2", time: 30, done: false },
                    { task: "Create Sponge D2", time: 30, done: false }
                ],
                stories: [
                    "BTS creating derivatives"
                ]
            },
            "2025-01-16": {
                type: "post",
                post: {
                    content: "GRWM OR Lashes D3: Placement Tip",
                    length: "20-30s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "TBD based on content filmed",
                    hashtags: ["#grwm", "#makeuptips"],
                    posted: false
                },
                tasks: [
                    { task: "Engage", time: 15, done: false }
                ]
            },
            "2025-01-17": {
                type: "off",
                stories: [
                    "Life update",
                    "Filming tomorrow"
                ]
            },
            "2025-01-18": {
                type: "filming",
                note: "See Filming Day"
            },
            "2025-01-19": {
                type: "post",
                post: {
                    content: "Episode 4 D1: Before/After",
                    length: "10-12s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Before/After from Episode 4. Bronzer placement makes such a difference.",
                    hashtags: ["#makeupbeforeandafter", "#bronzer"],
                    posted: false
                },
                tasks: [
                    { task: "PHASE 1 REVIEW - Critical decision point", time: 60, done: false }
                ],
                stories: [
                    "Weekly recap",
                    "3 weeks down!",
                    "Review time"
                ]
            }
        }
    },

    // WEEK 4
    {
        number: 4,
        dates: "Jan 20-26",
        theme: "Sustainable Rhythm Established",
        totalTime: 6.5,
        
        filmingDay: {
            date: "2025-01-25",
            saturday: true,
            duration: 1.5,
            shoots: [
                {
                    type: "series",
                    episode: 7,
                    title: "Setting Spray",
                    duration: 45,
                    checklist: [
                        { item: "Full face makeup ready", done: false },
                        { item: "Setting spray products", done: false },
                        { item: "Before/after angles planned", done: false }
                    ],
                    derivatives: [
                        "Before/After",
                        "Product comparison",
                        "Application technique",
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
            "2025-01-20": {
                type: "prep",
                tasks: [
                    { task: "Receive Episode 6 from editor", time: 10, done: false },
                    { task: "Create derivatives", time: 30, done: false }
                ],
                stories: ["Episode 5 teaser"]
            },
            "2025-01-21": {
                type: "post",
                post: {
                    content: "Episode 5: Blush - Main Tutorial",
                    length: "35-45s",
                    status: "with editor",
                    time: "6-8pm",
                    caption: "Makeup Until It Makes Sense · Episode 5\n\nBlush placement and color theory. Still learning with you all 🤍",
                    hashtags: ["#makeupforbeginners", "#blushtutorial"],
                    posted: false
                }
            },
            "2025-01-22": {
                type: "creation",
                tasks: [
                    { task: "Create 2 derivatives", time: 60, done: false }
                ]
            },
            "2025-01-23": {
                type: "post",
                post: {
                    content: "Supporting content (GRWM/Relatable/Dehjiluxe)",
                    length: "20-30s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "TBD",
                    hashtags: [],
                    posted: false
                }
            },
            "2025-01-24": {
                type: "off",
                stories: ["Weekend prep"]
            },
            "2025-01-25": {
                type: "filming"
            },
            "2025-01-26": {
                type: "post",
                post: {
                    content: "Derivative from recent episode",
                    length: "15-20s",
                    status: "ready",
                    time: "6-8pm",
                    caption: "Quick tip from the series",
                    hashtags: ["#makeuptips"],
                    posted: false
                },
                tasks: [
                    { task: "Weekly review", time: 60, done: false }
                ]
            }
        }
    }

    // Weeks 5-12 follow same pattern - I'll add if you want full 12 weeks now,
    // or we can add them after you test Phase 1
];
