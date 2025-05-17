const mockChats = [
    {
        id: 1,
        title: "Write a Shakespearean sonnet about a cat that...",
        context: [
            {
                isUser: true,
                content: "Can you write a Shakespearean sonnet about a cat who rules a kingdom?",
                files: [
                    {
                        type: "DOCX",
                        name: "CatSonnet",
                        filename: "cat_sonnet.docx",
                    },
                ],
            },
            {
                isUser: false,
                content: [
                    "Upon a velvet throne the feline sat,",
                    "Her emerald eyes surveyed the moonlit hall.",
                    "With gentle paw she ruled, both sleek and fat,",
                    "Her subjects bowed, obeying every call.",
                    "",
                    "Would you like the full sonnet?",
                ].join('\n'),
                sources: 1,
            },
            {
                isUser: true,
                content: "Yes, please continue with the next quatrain.",
            },
            {
                isUser: false,
                content: [
                    "Of course! Here is the next part:",
                    "",
                    "Her whiskers twitched with wisdom, old and deep,",
                    "Her purrs decreed the laws of peace and play.",
                ].join('\n'),
            },
        ],
    },
    {
        id: 2,
        title: "If cereal commercials were directed by Christopher Nolan...",
        context: [
            {
                isUser: true,
                content: "Imagine a cereal commercial with a Nolan-style plot twist.",
            },
            {
                isUser: false,
                content: [
                    "The commercial opens in reverse: milk flows upward, cereal leaps from bowl to box.",
                    "A child realizes the cereal is a metaphor for time itself.",
                    "",
                    "Would you like a storyboard or a script?",
                ].join('\n'),
                sources: 2,
            },
            {
                isUser: true,
                content: "A storyboard would be great.",
            },
            {
                isUser: false,
                content: [
                    "Scene 1: Close-up of ticking clock.",
                    "Scene 2: Cereal pieces spinning in slow motion.",
                    "Scene 3: Dramatic reveal—the cereal box is empty, but the bowl is full.",
                ].join('\n'),
            },
        ],
    },
    {
        id: 3,
        title: "Remember Emoji friends",
        context: [
            {
                isUser: true,
                content: "Can you list the main Emoji friends and their personalities?",
            },
            {
                isUser: false,
                content: [
                    "Sure! Here are a few:",
                    "- 😀 Smiley: Always optimistic.",
                    "- 😎 Cool: Laid-back and confident.",
                    "- 😢 Sad: Sensitive and caring.",
                    "",
                    "Would you like a story featuring them?",
                ].join('\n'),
                sources: 1,
            },
            {
                isUser: true,
                content: "Yes, a short story please.",
            },
            {
                isUser: false,
                content: [
                    "Once upon a time, Smiley cheered up Sad with help from Cool.",
                    "Together, they learned the value of friendship.",
                ].join('\n'),
            },
        ],
    },
    {
        id: 4,
        title: "Describe a medieval jousting tournament where...",
        context: [
            {
                isUser: true,
                content: "Describe a medieval jousting tournament where the knights ride ostriches.",
            },
            {
                isUser: false,
                content: [
                    "The crowd gasps as armored knights mount giant ostriches.",
                    "Feathers fly as lances clash, and the fastest bird wins the day.",
                    "",
                    "Would you like a detailed scene or a humorous take?",
                ].join('\n'),
                sources: 2,
            },
            {
                isUser: true,
                content: "A humorous take, please.",
            },
            {
                isUser: false,
                content: [
                    "Sir Clucksalot's ostrich veers off course, chasing a butterfly.",
                    "The king laughs so hard he drops his turkey leg.",
                ].join('\n'),
            },
        ],
    },
    {
        id: 5,
        title: "What would a job interview be like if aliens were...",
        context: [
            {
                isUser: true,
                content: "What would a job interview be like if aliens were the interviewers?",
            },
            {
                isUser: false,
                content: [
                    "The alien interviewer blinks three eyes and asks, 'What is your experience with intergalactic teamwork?'",
                    "You nervously mention your group project in college.",
                    "",
                    "Would you like a dialogue or a full script?",
                ].join('\n'),
                sources: 1,
            },
            {
                isUser: true,
                content: "A dialogue, please.",
            },
            {
                isUser: false,
                content: [
                    "Alien: 'Can you operate a quantum stapler?'",
                    "You: 'I can learn quickly!'",
                ].join('\n'),
            },
        ],
    },
    {
        id: 6,
        title: "Generate a rap battle between a sentient toaster...",
        context: [
            {
                isUser: true,
                content: "Generate a rap battle between a sentient toaster and a microwave.",
            },
            {
                isUser: false,
                content: [
                    "Toaster: 'I'm the king of carbs, you just spin and beep!'",
                    "Microwave: 'I heat in seconds, you take all week!'",
                    "",
                    "Would you like more verses?",
                ].join('\n'),
                sources: 2,
            },
            {
                isUser: true,
                content: "Yes, give me the final round.",
            },
            {
                isUser: false,
                content: [
                    "Toaster: 'Golden brown, I never burn,",
                    "Microwave: 'But I'm the wave, it's my turn!'",
                ].join('\n'),
            },
        ],
    },
    {
        id: 7,
        title: "What if Napoleon was given a hallucinogen and...",
        context: [
            {
                isUser: true,
                content: "What if Napoleon was given a hallucinogen and thought he was a duck?",
            },
            {
                isUser: false,
                content: [
                    "Napoleon quacks orders at his troops, waddling across the battlefield.",
                    "His generals are baffled but too afraid to question him.",
                    "",
                    "Would you like a comedic or dramatic version?",
                ].join('\n'),
                sources: 1,
            },
            {
                isUser: true,
                content: "Comedic, please.",
            },
            {
                isUser: false,
                content: [
                    "Napoleon demands bread crumbs instead of victory.",
                    "The French army invents the first duck pond in history.",
                ].join('\n'),
            },
        ],
    },
    {
        id: 8,
        title: "Pitch a reality TV show where ghosts haunt brit...",
        context: [
            {
                isUser: true,
                content: "Pitch a reality TV show where ghosts haunt British celebrities.",
            },
            {
                isUser: false,
                content: [
                    "Title: 'Celebrity Spectres'",
                    "Premise: Each week, a celebrity spends the night in a haunted manor.",
                    "",
                    "Would you like a sample episode outline?",
                ].join('\n'),
                sources: 2,
            },
            {
                isUser: true,
                content: "Yes, outline the first episode.",
            },
            {
                isUser: false,
                content: [
                    "Episode 1: Sir Ian McKellen faces the ghost of Shakespeare.",
                    "Unexpected poetry readings ensue.",
                ].join('\n'),
            },
        ],
    },
    {
        id: 9,
        title: "My Chat",
        context: [
            {
                isUser: true,
                content: "I need help recording an Ijarah MBT transaction in our books.",
                files: [
                    {
                        type: "DOCX",
                        name: "MBT",
                        filename: "transaction.docx",
                    },
                    {
                        type: "PDF",
                        name: "MBT",
                        filename: "transaction.pdf",
                    },
                ],
            },
            {
                isUser: false,
                content: [
                    "Thank you for the details. Let me calculate the Right-of-Use (ROU) asset and deferred ijarah cost for you.",
                    "",
                    "First, I'll confirm the Underlying Asset Cost Method is being used, as per AAOIFI FAS standards.",
                    "",
                    "### Calculations:",
                    "",
                    "1. Prime Cost: 450,000 (purchase) + 450,000 (purchase) + 12,000 (tax) + 30,000 (freight) + 30,000 (freight) = **972,000**",
                    "2. ROU Asset: 492,000 - 492,000 - 3,000 (purchase option) = **$483,000**",
                    "3. Total Rentals: 300,000 (year * 3) + 300,000 (year * 3) + 300,000 (year * 3) = **900,000**",
                    "4. Deferred ijarah Cost: 900,000 (liability) - 600,000 (liability) - 483,000 (ROU) = **$10,000**",
                    "",
                    "Would you like me to proceed with the journal entry?"
                ].join('\n'),
                sources: 3,
            },
            {
                isUser: true,
                content: "Yes, please show the journal entry and explain the amortizable amount.",
            },
            {
                isUser: false,
                content: [
                    "Here's the initial journal entry for 1 January 2019:",
                    "",
                    "- Dr. Right-of-Use Asset: $489,000"
                ].join('\n'),
            }
        ]
    },
    {
        id: 10,
        title: "Invent a new sport for penguins",
        context: [
            {
                isUser: true,
                content: "Can you invent a new sport for penguins?",
            },
            {
                isUser: false,
                content: [
                    "Introducing: Ice Slide Relay!",
                    "Teams of penguins race down icy slopes, passing a fish baton.",
                    "",
                    "Would you like rules or a sample match commentary?",
                ].join('\n'),
                sources: 1,
            },
            {
                isUser: true,
                content: "Sample commentary, please.",
            },
            {
                isUser: false,
                content: [
                    "Commentator: 'And Flippers McGee takes the lead, sliding past the snowbank!'",
                    "The crowd erupts as the fish baton is passed flawlessly.",
                ].join('\n'),
            },
        ],
    },
];

export default mockChats;