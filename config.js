// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Aryana",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? hehehe",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like/love/mahal me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like/love/mahal you, I SUPER DUPER LOVE you!!!"           // Secret hover message
        },
        second: {
            text: "How much do you love meee?",                          // For the love meter
            startText: "I think this much?",                                   // Text before the percentage
            nextBtn: "Next !!!!"                                         // Text for the next button
        },
        third: {
            text: "Aryana, Will you be my Valentine on February 14th, 2026?? (pleaseesz)", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOAHHHHHHH You love me that much?? :DDD ",  // Shows when they go past 5000%
        high: "To infinity and beyond!!! -toy story",              // Shows when they go past 1000%
        normal: "Oh"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest guy in the world!!",
        message: "I love you and I miss you so much Bi!! mwaaa",
        emojis: "🤗❤️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#15173D",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#982598",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#982598",     // Button color (should stand out against the background)
        buttonHover: "#E491C9",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#982598"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dsbk38qd8/video/upload/v1769738438/Mitski_-_My_Love_Mine_All_Mine__mp3.pm_kjxhae.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
