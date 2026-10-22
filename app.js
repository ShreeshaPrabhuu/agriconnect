/**
 * AgriConnect — Coastal Karnataka Rural Workforce & Direct Market Platform
 * Production-grade Vanilla ES6+ Application Logic
 */

// ==========================================
// 1. DATA DICTIONARIES & I18N
// ==========================================
const i18nData = {
  en: {
    coastalKarnataka: "Coastal Karnataka (DK & Udupi)",
    activeLocationLabel: "Gram Panchayat / Taluk",
    voiceSearchBtn: "Voice Assistant",
    registerCrewNav: "+ Register Crew",
    voiceListeningTitle: "🎙️ Voice Assistant Listening (Coastal Dialect Ready)",
    trySaying: "Try saying:",
    tabWorkforce: "Rural Workforce & Crews",
    tabMarket: "Direct Market & Mandi",
    tabKhata: "Daily Wage Khata",
    tabPricing: "Membership Tiers",
    liveMandiSync: "Live CAMPCO & APMC Sync",
    heroBadge: "🌾 Coastal Karnataka Workforce Hub",
    heroSubtext: "Connecting 15,000+ Smallholders with Verified Local Labor",
    workforceHeading: "Hyper-Local Labor & Group Crew Finder",
    workforceDesc: "Discover reliable agricultural harvesters, Mukkadam group crews (4–10 members), and off-season rural tradesmen in Dakshina Kannada & Udupi with real-time GPS proximity and dynamic reputation ranking.",
    smartRankFormula: "⚡ Dynamic Smart Rank Score",
    hiringModeLabel: "Hiring Mode:",
    modeAll: "All",
    modeCrew: "👥 Group Crews (Mukkadams, 4–10)",
    modeSingle: "👤 Single Workers",
    taskSkillLabel: "Task & Skill Filter (365-Day Utility)",
    taskSkillSub: "Farm Harvest & Off-Season Rural Trades",
    skillAll: "🌾 All Rural Services (Farm + Off-Season)",
    skillArecanut: "🌴 Arecanut & Coconut Harvesting",
    skillWeeding: "🌿 Weeding & Grass Clearing",
    skillPaddy: "🌾 Paddy & Crop Harvesting",
    skillMechanic: "🔧 Off-Season: Pump & Motor Mechanic",
    skillMasonry: "🧱 Off-Season: Rural Masonry & Fencing",
    gpsRadiusLabel: "GPS Radius Scanner:",
    sortByLabel: "Sort By:",
    addWorkerBtn: "Register Crew / Worker",
    showingResults: "Showing:",
    noWorkersFound: "No laborers or crews match your current radius or skill filter",
    noWorkersHint: "Try increasing the GPS radius scanner to 25–30 km or clearing specific skill filters.",
    marketEliminateMiddleman: "Eliminating Middleman Margin Loss in Coastal Karnataka",
    marketHeading: "Direct Market-Access & Coastal Mandi Price Discovery",
    marketDesc: "Connecting marginal farmers in Dakshina Kannada & Udupi directly to certified food processing units, spice exporters, and bulk buyers with transparent, near-real-time Mandi price benchmarks.",
    listHarvestDirectBtn: "List My Harvest Directly",
    liveMandiCardsTitle: "Coastal Mandi Price Comparison & Margin Gain",
    liveMandiCardsSubtitle: "Benchmark APMC / CAMPCO / Broker rate vs Direct Buyer rate in Dakshina Kannada & Udupi",
    liveUpdatedToday: "Updated Today 09:30 AM IST",
    marginCalcTitle: "Farmer Direct Profit Simulator",
    marginCalcDesc: "See how much extra income you keep by cutting out the middleman commission.",
    calcCropSelect: "Select Crop",
    calcQuantity: "Harvest Batch Size",
    calcExtraProfit: "Extra Net Farmer Gain",
    activeLotsTitle: "Active Farmer Harvest Lots (Dakshina Kannada & Udupi)",
    activeLotsSub: "Direct procurement from marginal farmers with farm-gate pickup & escrow protection",
    khataBadge: "Digital Pocket Diary",
    khataSubtext: "Zero-Dispute Transparent Farm Bookkeeping",
    khataHeading: "Hybrid Daily Wage Khata / Ledger",
    khataDesc: "Track crew labor attendance, cash handovers, and UPI escrow settlements with automatic balance reconciliation for Coastal Karnataka smallholders.",
    exportKhataBtn: "Export CSV",
    totalSettledLabel: "Total Settled (Paid)",
    settledVerified: "Field Cash & UPI Verified",
    pendingBalanceLabel: "Pending Balance (Owed)",
    pendingDue: "Due to be cleared post-work",
    totalEntriesLabel: "Total Entries Logged",
    entriesCountDesc: "Days of harvest & trades",
    addWageTitle: "Add Daily Wage Entry",
    khataWorkerName: "Worker / Crew Name",
    khataTask: "Task Completed",
    khataAmount: "Wage Amount (₹)",
    khataPaymentMode: "Payment Mode",
    khataLogBtn: "Log Wage Entry",
    khataTableTitle: "Workforce Wage Ledger",
    khataTableSub: "Entries booked through directory automatically sync here",
    pricingBadge: "Direct Value for Smallholders & Crews",
    pricingHeading: "Transparent, Affordable Rural Subscriptions",
    pricingSub: "Empowering marginal farmers in Dakshina Kannada & Udupi with priority labor access, extended GPS scanning, and zero middleman margins.",
    planBasicName: "Gram Basic",
    planBasicSub: "Essential tools for individual smallholder farmers.",
    planFreeDuration: "/ forever",
    planBasicFeat1: "10 km GPS Radius Worker Search",
    planBasicFeat2: "Multilingual UI (Kannada, English, Hindi)",
    planBasicFeat3: "Daily CAMPCO & APMC Mandi Price View",
    planBasicFeat4: "Standard Daily Wage Khata (up to 20 entries)",
    planBasicFeat5: "Extended 30 km Taluk Radius",
    planBasicFeat6: "Priority Top Match Crew Placement",
    mostPopularBadge: "Most Popular in DK & Udupi",
    planProName: "Krishi & Crew Pro",
    planProSub: "Full Taluk-wide discovery & zero crop commission.",
    planPerMonth: "/ month (₹1.6/day)",
    planProFeat1: "Priority #1 Top-Placement Badge for Crews",
    planProFeat2: "Extended 30 km Taluk-Wide GPS Radius",
    planProFeat3: "Zero Commission on Direct Harvest Sales",
    planProFeat4: "Automated Voice & SMS Alerts in Kannada",
    planProFeat5: "₹50,000 Micro-Accident Insurance Cover",
    planProFeat6: "Unlimited Daily Wage Khata with PDF Export",
    activateProBtn: "⭐ Activate Pro (₹49/mo)",
    planFpoName: "FPO & Wholesale Pass",
    planFpoSub: "For Farmer Producer Orgs, Exporters & Large Plantations.",
    planFpoFeat1: "Bulk Multi-Crew Seasonal Booking (5+ crews)",
    planFpoFeat2: "Direct Wholesale Bidding on Harvest Lots",
    planFpoFeat3: "Downloadable PDF Wage & GST Statements",
    planFpoFeat4: "Dedicated Agri-Officer Desk in DK & Udupi",
    planFpoFeat5: "Custom API for APMC/CAMPCO Batch Sync",
    modalBookingTitle: "Book Laborer / Mukkadam Crew",
    bookingStartDate: "Work Date",
    bookingDuration: "Duration / Trees",
    bookingPaymentMode: "Payment Method (Khata Log Mode)",
    bookingEstTotal: "Estimated Total Wage",
    confirmBookingBtn: "Confirm & Log Khata",
    ratingModalTitle: "Post-Work Live Rating Simulator",
    oneTapRatingLabel: "1-Tap Instant Feedback:",
    regModalTitle: "Register Worker or Mukkadam Crew",
    regName: "Worker / Crew Leader Name",
    regType: "Hiring Category",
    regCrewSize: "Crew Size (Members)",
    regSkill: "Primary Skill / Trade",
    regTaluk: "Home Taluk / Panchayat",
    regWage: "Daily Wage / Crew Rate (₹)",
    regPhone: "Mobile Phone (WhatsApp)",
    regTools: "Tools Owned",
    regSubmitBtn: "Register & Boost",
    listProduceTitle: "List My Harvest Lot Directly",
    listProduceSub: "Direct to APMC-exempt buyers & processing mills in DK & Udupi",
    produceFarmerName: "Farmer / Plantation Name",
    produceCropType: "Produce Type",
    produceTaluk: "Location / Taluk",
    produceQuantity: "Quantity Available (kg)",
    produceAskPrice: "Direct Ask Price (₹ / kg)",
    publishHarvestBtn: "Publish Direct Lot",
    buyerModalTitle: "Connect & Buy Direct",
    notificationsTitle: "Notifications & Local Alerts",
    notificationsSub: "Live alerts for newly registered crews, Mandi price spikes & booking updates",
    markAllRead: "Mark all as read",
    clearAll: "Clear",
    notifAreaAutoAlerts: "Automatic SMS & Voice alerts are enabled for your Panchayat",
    noNotifications: "No notifications right now.",
    loginTitle: "AgriConnect Login & Role Selection",
    loginSub: "Connect as a Landowner/Farmer or as an Agricultural Worker/Crew",
    selectRole: "Step 1: Choose Your Role",
    roleFarmer: "Farmer / Landowner",
    roleFarmerDesc: "Hire harvest crews, discover direct Mandi prices, track farm daily wage khata",
    roleLabour: "Labourer / Mukkadam Crew",
    roleLabourDesc: "Find harvesting & off-season trade work, set wage rates & availability",
    nameInputLabel: "Full Name",
    phoneInputLabel: "Mobile Number",
    sendOtp: "Instant OTP Verification & Login",
    quickDemoAccounts: "⚡ 1-Click Demo Profiles:",
    profileTitle: "My AgriConnect Profile",
    profileSub: "Manage role preferences, contact details, and worker status",
    saveProfileBtn: "Save Profile Details",
    logoutBtn: "Logout",
    profileNav: "Profile",
    switchToLabourer: "Switch to 👷 Labourer",
    switchToFarmer: "Switch to 👨‍🌾 Farmer",
    labourDashboardTitle: "👷 Labourer & Crew Leader Mode",
    labourHubDesc: "You are in Crew Leader view. Direct booking inquiries from farmers in your Taluk appear here.",
    myAvailability: "My Work Availability:",
    myDailyWage: "My Daily Wage Rate (₹):"
  },
  kn: {
    coastalKarnataka: "ಕರಾವಳಿ ಕರ್ನಾಟಕ (ದ.ಕ ಮತ್ತು ಉಡುಪಿ)",
    activeLocationLabel: "ಗ್ರಾಮ ಪಂಚಾಯತಿ / ತಾಲೂಕು",
    voiceSearchBtn: "ಧ್ವನಿ ಹುಡುಕಾಟ",
    registerCrewNav: "+ ಹೊಸ ತಂಡ ನೋಂದಣಿ",
    voiceListeningTitle: "🎙️ ಧ್ವನಿ ಸಹಾಯಕ ಸಕ್ರಿಯವಾಗಿದೆ (ಕರಾವಳಿ ಕನ್ನಡ)",
    trySaying: "ಹೀಗೆ ಹೇಳಿ ನೋಡಿ:",
    tabWorkforce: "ಗ್ರಾಮೀಣ ಕಾರ್ಮಿಕರು & ತಂಡಗಳು",
    tabMarket: "ನೇರ ಮಾರುಕಟ್ಟೆ & ಮಂಡಿ ದರ",
    tabKhata: "ದೈನಂದಿನ ವೇತನ ಖಾತೆ",
    tabPricing: "ಚಂದಾದಾರಿಕೆ ಯೋಜನೆಗಳು",
    liveMandiSync: "ಕ್ಯಾಂಪ್ಕೋ & ಎಪಿಎಂಸಿ ದರ ಲೈವ್",
    heroBadge: "🌾 ಕರಾವಳಿ ಕರ್ನಾಟಕ ಕಾರ್ಮಿಕ ವೇದಿಕೆ",
    heroSubtext: "15,000+ ಕೃಷಿಕರನ್ನು ಸ್ಥಳೀಯ ಕಾರ್ಮಿಕರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ",
    workforceHeading: "ಹೈಪರ್-ಲೋಕಲ್ ಕೃಷಿ ಕಾರ್ಮಿಕರು & ಮುಕ್ಕಾದಾಂ ತಂಡಗಳ ಹುಡುಕಾಟ",
    workforceDesc: "ದಕ್ಷಿಣ ಕನ್ನಡ ಮತ್ತು ಉಡುಪಿಯ ಅಡಿಕೆ, ತೆಂಗು ಕೊಯ್ಯುವವರು, ಮುಕ್ಕಾದಾಂ ತಂಡಗಳು (4-10 ಸದಸ್ಯರು) ಮತ್ತು ಆಫ್-ಸೀಸನ್ ಗ್ರಾಮೀಣ ವೃತ್ತಿಪರರನ್ನು ಜಿಪಿಎಸ್ ಮೂಲಕ ತಕ್ಷಣ ಹುಡುಕಿ.",
    smartRankFormula: "⚡ ಸ್ಮಾರ್ಟ್ ರ‍್ಯಾಂಕ್ ಸ್ಕೋರ್ ಇಂಜಿನ್",
    hiringModeLabel: "ನೇಮಕಾತಿ ವಿಧಾನ:",
    modeAll: "ಎಲ್ಲವೂ",
    modeCrew: "👥 ಮುಕ್ಕಾದಾಂ ತಂಡಗಳು (4–10)",
    modeSingle: "👤 ಏಕ ಕಾರ್ಮಿಕರು",
    taskSkillLabel: "365 ದಿನಗಳ ಸೇವೆ ಮತ್ತು ಕೌಶಲ್ಯ ಫಿಲ್ಟರ್",
    taskSkillSub: "ಕೃಷಿ ಕೊಯ್ಲು ಮತ್ತು ಆಫ್-ಸೀಸನ್ ಗ್ರಾಮೀಣ ವೃತ್ತಿಗಳು",
    skillAll: "🌾 ಎಲ್ಲಾ ಗ್ರಾಮೀಣ ಸೇವೆಗಳು (ಕೃಷಿ + ಆಫ್-ಸೀಸನ್)",
    skillArecanut: "🌴 ಅಡಿಕೆ ಮತ್ತು ತೆಂಗು ಕೊಯ್ಲು",
    skillWeeding: "🌿 ಕಳೆ ಕತ್ತರಿಸುವುದು & ಗಿಡ ಸ್ವಚ್ಛತೆ",
    skillPaddy: "🌾 ಭತ್ತ & ಬೆಳೆ ಕೊಯ್ಲು",
    skillMechanic: "🔧 ಆಫ್-ಸೀಸನ್: ಪಂಪ್ & ಮೋಟಾರ್ ಮೆಕ್ಯಾನಿಕ್",
    skillMasonry: "🧱 ಆಫ್-ಸೀಸನ್: ಕಲ್ಲು ಕೆಲಸ & ಬೇಲಿ ನಿರ್ಮಾಣ",
    gpsRadiusLabel: "ಜಿಪಿಎಸ್ ವ್ಯಾಪ್ತಿ ಸ್ಕ್ಯಾನರ್:",
    sortByLabel: "ವಿಂಗಡಣೆ:",
    addWorkerBtn: "ಹೊಸ ತಂಡ ನೋಂದಾಯಿಸಿ",
    showingResults: "ತೋರಿಸಲಾಗುತ್ತಿದೆ:",
    noWorkersFound: "ನಿಮ್ಮ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಕಾರ್ಮಿಕರು ಲಭ್ಯವಿಲ್ಲ",
    noWorkersHint: "ಜಿಪಿಎಸ್ ಸ್ಕ್ಯಾನರ್ ವ್ಯಾಪ್ತಿಯನ್ನು 25-30 ಕಿ.ಮೀ ಗೆ ಹೆಚ್ಚಿಸಿ ಅಥವಾ ಫಿಲ್ಟರ್ ಬದಲಾಯಿಸಿ.",
    marketEliminateMiddleman: "ದಲ್ಲಾಳಿಗಳ ಕಮಿಷನ್ ರಹಿತ ನೇರ ಮಾರುಕಟ್ಟೆ (ಹ್ಯಾಕಥಾನ್ ಪಿಎಸ್ 1.2)",
    marketHeading: "ನೇರ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಕರಾವಳಿ ಮಂಡಿ ದರ ಹೋಲಿಕೆ",
    marketDesc: "ದಕ್ಷಿಣ ಕನ್ನಡ ಮತ್ತು ಉಡುಪಿಯ ಸಣ್ಣ ರೈತರನ್ನು ನೇರವಾಗಿ ಸಂಸ್ಕರಣಾ ಘಟಕಗಳು ಮತ್ತು ಸಗಟು ಖರೀದಿದಾರರೊಂದಿಗೆ ಜೋಡಿಸಿ ಮಧ್ಯವರ್ತಿಗಳ ನಷ್ಟವನ್ನು ತಪ್ಪಿಸಿ.",
    listHarvestDirectBtn: "ನನ್ನ ಬೆಳೆ ನೇರವಾಗಿ ಮಾರಾಟಕ್ಕೆ ಹಾಕಿ",
    liveMandiCardsTitle: "ಕರಾವಳಿ ಮಂಡಿ ದರ ಹೋಲಿಕೆ & ರೈತರ ಲಾಭ",
    liveMandiCardsSubtitle: "ಎಪಿಎಂಸಿ / ಕ್ಯಾಂಪ್ಕೋ ದರ vs ನೇರ ಖರೀದಿದಾರರ ದರ",
    liveUpdatedToday: "ಇಂದು ಬೆಳಿಗ್ಗೆ 09:30 ಕ್ಕೆ ನವೀಕರಿಸಲಾಗಿದೆ",
    marginCalcTitle: "ರೈತರ ನೇರ ಲಾಭ ಲೆಕ್ಕಾಚಾರ",
    marginCalcDesc: "ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ಮಾರಾಟ ಮಾಡುವುದರಿಂದ ನಿಮಗೆ ಸಿಗುವ ಹೆಚ್ಚುವರಿ ಲಾಭವನ್ನು ನೋಡಿ.",
    calcCropSelect: "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",
    calcQuantity: "ಕೊಯ್ಲು ಮಾಡಿದ ತೂಕ",
    calcExtraProfit: "ಹೆಚ್ಚುವರಿ ನಿವ್ವಳ ಲಾಭ",
    activeLotsTitle: "ಲಭ್ಯವಿರುವ ರೈತರ ಬೆಳೆ ಸಂಗ್ರಹಗಳು",
    activeLotsSub: "ತೋಟದ ಸ್ಥಳದಲ್ಲೇ ಖರೀದಿ & ಎಸ್ಕ್ರೋ ಭದ್ರತೆ",
    khataBadge: "ಡಿಜಿಟಲ್ ಜೇಬು ದಿನಚರಿ",
    khataSubtext: "ಗೊಂದಲವಿಲ್ಲದ ಪಾರದರ್ಶಕ ಕೃಷಿ ಲೆಕ್ಕ",
    khataHeading: "ಹೈಬ್ರಿಡ್ ದೈನಂದಿನ ವೇತನ ಖಾತೆ / ಲೆಡ್ಜರ್",
    khataDesc: "ಹಾಜರಾತಿ, ನಗದು ಪಾವತಿ ಮತ್ತು ಯುಪಿಐ ಎಸ್ಕ್ರೋ ಪಾವತಿಗಳನ್ನು ನಿಖರವಾಗಿ ನಿರ್ವಹಿಸಿ.",
    exportKhataBtn: "CSV ಡೌನ್‌ಲೋಡ್",
    totalSettledLabel: "ಪಾವತಿಸಿದ ಒಟ್ಟು ಹಣ",
    settledVerified: "ನಗದು & ಯುಪಿಐ ದೃಢೀಕರಿಸಲಾಗಿದೆ",
    pendingBalanceLabel: "ಬಾಕಿ ಉಳಿದ ಹಣ",
    pendingDue: "ಕೆಲಸದ ನಂತರ ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ",
    totalEntriesLabel: "ಒಟ್ಟು ನಮೂದುಗಳು",
    entriesCountDesc: "ದಾಖಲಾದ ಕೆಲಸದ ದಿನಗಳು",
    addWageTitle: "ಹೊಸ ವೇತನ ನಮೂದು ಸೇರಿಸಿ",
    khataWorkerName: "ಕಾರ್ಮಿಕ / ತಂಡದ ಹೆಸರು",
    khataTask: "ಮಾಡಿದ ಕೆಲಸ",
    khataAmount: "ವೇತನ ಮೊತ್ತ (₹)",
    khataPaymentMode: "ಪಾವತಿ ವಿಧಾನ",
    khataLogBtn: "ಖಾತೆಗೆ ದಾಖಲಿಸಿ",
    khataTableTitle: "ಕಾರ್ಮಿಕರ ವೇತನ ಲೆಡ್ಜರ್",
    khataTableSub: "ಬುಕಿಂಗ್ ಮಾಡಿದ ನಮೂದುಗಳು ಇಲ್ಲಿ ತಾನಾಗಿಯೇ ಕಾಣಿಸುತ್ತವೆ",
    pricingBadge: "ಸಣ್ಣ ರೈತರು ಮತ್ತು ತಂಡಗಳಿಗೆ ಮೌಲ್ಯಯುತ ಯೋಜನೆ",
    pricingHeading: "ಪಾರದರ್ಶಕ, ಕೈಗೆಟುಕುವ ಗ್ರಾಮೀಣ ಚಂದಾದಾರಿಕೆ",
    pricingSub: "ದಕ್ಷಿಣ ಕನ್ನಡ & ಉಡುಪಿಯ ರೈತರಿಗೆ ಹೆಚ್ಚಿನ ಆದ್ಯತೆ, 30 ಕಿ.ಮೀ ಜಿಪಿಎಸ್ ಸ್ಕ್ಯಾನಿಂಗ್ ಮತ್ತು ಶೂನ್ಯ ಕಮಿಷನ್ ಸೌಲಭ್ಯ.",
    planBasicName: "ಗ್ರಾಮ ಬೇಸಿಕ್",
    planBasicSub: "ವೈಯಕ್ತಿಕ ಸಣ್ಣ ರೈತರಿಗೆ ಉಚಿತ ಸೌಲಭ್ಯ.",
    planFreeDuration: "/ ಶಾಶ್ವತ ಉಚಿತ",
    planBasicFeat1: "10 ಕಿ.ಮೀ ಜಿಪಿಎಸ್ ಕಾರ್ಮಿಕರ ಹುಡುಕಾಟ",
    planBasicFeat2: "ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ ಭಾಷಾ ಆಯ್ಕೆ",
    planBasicFeat3: "ದೈನಂದಿನ ಕ್ಯಾಂಪ್ಕೋ & ಎಪಿಎಂಸಿ ಮಂಡಿ ದರ",
    planBasicFeat4: "ದೈನಂದಿನ ವೇತನ ಖಾತೆ (20 ನಮೂದುಗಳವರೆಗೆ)",
    planBasicFeat5: "30 ಕಿ.ಮೀ ವಿಸ್ತೃತ ತಾಲೂಕು ವ್ಯಾಪ್ತಿ",
    planBasicFeat6: "ಅಗ್ರ ಶ್ರೇಯಾಂಕದ ಆದ್ಯತೆಯ ಪಟ್ಟಿ",
    mostPopularBadge: "ದ.ಕ & ಉಡುಪಿಯಲ್ಲಿ ಅತ್ಯಂತ ಜನಪ್ರಿಯ",
    planProName: "ಕೃಷಿ & ಕ್ರ್ಯೂ ಪ್ರೊ",
    planProSub: "ತಾಲೂಕು ಮಟ್ಟದ ಸಂಪೂರ್ಣ ಹುಡುಕಾಟ & ಶೂನ್ಯ ಬೆಳೆ ಕಮಿಷನ್.",
    planPerMonth: "/ ತಿಂಗಳಿಗೆ (ದಿನಕ್ಕೆ ₹1.6)",
    planProFeat1: "ತಂಡಗಳಿಗೆ #1 ಅಗ್ರ ಸ್ಥಾನದ ಬ್ಯಾಡ್ಜ್",
    planProFeat2: "30 ಕಿ.ಮೀ ತಾಲೂಕು ಮಟ್ಟದ ವಿಸ್ತೃತ ಜಿಪಿಎಸ್",
    planProFeat3: "ಬೆಳೆ ಮಾರಾಟದಲ್ಲಿ ಶೂನ್ಯ ಕಮಿಷನ್",
    planProFeat4: "ಕನ್ನಡದಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತ ಧ್ವನಿ & ಎಸ್ಸೆಮ್ಮೆಸ್ ಮಾಹಿತಿ",
    planProFeat5: "₹50,000 ಕೃಷಿ ಅಪಘಾತ ವಿಮಾ ರಕ್ಷಣೆ",
    planProFeat6: "ಅನಿಯಮಿತ ವೇತನ ಖಾತೆ & ಪಿಡಿಎಫ್ ಡೌನ್‌ಲೋಡ್",
    activateProBtn: "⭐ ಪ್ರೊ ಸಕ್ರಿಯಗೊಳಿಸಿ (₹49/ತಿಂಗಳು)",
    planFpoName: "ಎಫ್‌ಪಿಒ & ಸಗಟು ಪಾಸ್",
    planFpoSub: "ರೈತ ಉತ್ಪಾದಕ ಸಂಘಗಳು ಮತ್ತು ದೊಡ್ಡ ತೋಟಗಳಿಗೆ.",
    planFpoFeat1: "ಒಟ್ಟಿಗೆ 5+ ತಂಡಗಳ ಬೃಹತ್ ಬುಕಿಂಗ್",
    planFpoFeat2: "ನೇರ ಸಗಟು ಬೆಳೆ ಬಿಡ್ಡಿಂಗ್",
    planFpoFeat3: "ಜಿಎಸ್‌ಟಿ ಸಹಿತ ಪಿಡಿಎಫ್ ಲೆಡ್ಜರ್",
    planFpoFeat4: "ದ.ಕ & ಉಡುಪಿಯಲ್ಲಿ ಪ್ರತ್ಯೇಕ ಕೃಷಿ ಅಧಿಕಾರಿ ಸಹಾಯ",
    planFpoFeat5: "ಕ್ಯಾಂಪ್ಕೋ/ಎಪಿಎಂಸಿ ದತ್ತಾಂಶ ಸಿಂಕ್",
    modalBookingTitle: "ಕಾರ್ಮಿಕರು / ಮುಕ್ಕಾದಾಂ ತಂಡದ ಬುಕಿಂಗ್",
    bookingStartDate: "ಕೆಲಸದ ದಿನಾಂಕ",
    bookingDuration: "ಅವಧಿ / ಮರಗಳ ಸಂಖ್ಯೆ",
    bookingPaymentMode: "ಪಾವತಿ ವಿಧಾನ (ಖಾತಾ ದಾಖಲಾತಿ)",
    bookingEstTotal: "ಅಂದಾಜು ಒಟ್ಟು ವೇತನ",
    confirmBookingBtn: "ದೃಢೀಕರಿಸಿ & ಖಾತೆಗೆ ದಾಖಲಿಸಿ",
    ratingModalTitle: "ಕೆಲಸದ ನಂತರದ ರೇಟಿಂಗ್ ಸಿಮ್ಯುಲೇಟರ್",
    oneTapRatingLabel: "1-ಟ್ಯಾಪ್ ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ:",
    regModalTitle: "ಕಾರ್ಮಿಕ ಅಥವಾ ಮುಕ್ಕಾದಾಂ ತಂಡದ ನೋಂದಣಿ",
    regName: "ಮುಖಂಡ / ಕಾರ್ಮಿಕರ ಹೆಸರು",
    regType: "ವರ್ಗ",
    regCrewSize: "ತಂಡದ ಸದಸ್ಯರ ಸಂಖ್ಯೆ",
    regSkill: "ಮುಖ್ಯ ಕೌಶಲ್ಯ / ವೃತ್ತಿ",
    regTaluk: "ಸ್ವಂತ ತಾಲೂಕು / ಪಂಚಾಯತ್",
    regWage: "ದೈನಂದಿನ ವೇತನ (₹)",
    regPhone: "ಮೊಬೈಲ್ ನಂಬರ್ (ವಾಟ್ಸಾಪ್)",
    regTools: "ಬಳಸುವ ಉಪಕರಣಗಳು",
    regSubmitBtn: "ನೋಂದಾಯಿಸಿ & ಬೂಸ್ಟ್ ಪಡೆಯಿರಿ",
    listProduceTitle: "ನನ್ನ ಬೆಳೆ ಸಂಗ್ರಹವನ್ನು ನೇರವಾಗಿ ಪಟ್ಟಿ ಮಾಡಿ",
    listProduceSub: "ದ.ಕ ಮತ್ತು ಉಡುಪಿಯ ಖರೀದಿದಾರರಿಗೆ ನೇರ ಮಾರಾಟ",
    produceFarmerName: "ರೈತರ / ತೋಟದ ಹೆಸರು",
    produceCropType: "ಬೆಳೆ ವಿಧ",
    produceTaluk: "ಸ್ಥಳ / ತಾಲೂಕು",
    produceQuantity: "ಲಭ್ಯವಿರುವ ಪ್ರಮಾಣ (ಕೆಜಿ)",
    produceAskPrice: "ನೇರ ಮಾರಾಟ ದರ (₹ / ಕೆಜಿ)",
    publishHarvestBtn: "ಬೆಳೆ ಪಟ್ಟಿ ಪ್ರಕಟಿಸಿ",
    buyerModalTitle: "ನೇರವಾಗಿ ಖರೀದಿಸಿ & ಸಂಪರ್ಕಿಸಿ",
    notificationsTitle: "ಅಧಿಸೂಚನೆಗಳು & ಎಚ್ಚರಿಕೆಗಳು",
    notificationsSub: "ಹೊಸ ತಂಡಗಳ ನೋಂದಣಿ, ಮಂಡಿ ದರ ಏರಿಕೆ ಮತ್ತು ಬುಕಿಂಗ್ ನವೀಕರಣಗಳ ಲೈವ್ ಮಾಹಿತಿ",
    markAllRead: "ಎಲ್ಲವನ್ನೂ ಓದಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ",
    clearAll: "ತೆರವುಗೊಳಿಸಿ",
    notifAreaAutoAlerts: "ನಿಮ್ಮ ಪಂಚಾಯತಿಗೆ ಸ್ವಯಂಚಾಲಿತ ಎಸ್ಸೆಮ್ಮೆಸ್ & ಧ್ವನಿ ಎಚ್ಚರಿಕೆ ಸಕ್ರಿಯವಾಗಿದೆ",
    noNotifications: "ಯಾವುದೇ ಅಧಿಸೂಚನೆಗಳಿಲ್ಲ.",
    loginTitle: "ಅಗ್ರಿಕನೆಕ್ಟ್ ಲಾಗಿನ್ & ಪಾತ್ರ ಆಯ್ಕೆ",
    loginSub: "ಜಮೀನ್ದಾರ/ರೈತರಾಗಿ ಅಥವಾ ಕೃಷಿ ಕಾರ್ಮಿಕ/ತಂಡವಾಗಿ ಸಂಪರ್ಕಿಸಿ",
    selectRole: "ಹಂತ 1: ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    roleFarmer: "ರೈತ / ಜಮೀನ್ದಾರ",
    roleFarmerDesc: "ಕೊಯ್ಲು ತಂಡಗಳನ್ನು ನೇಮಿಸಿ, ನೇರ ಮಂಡಿ ದರ ನೋಡಿ, ಕೃಷಿ ವೇತನ ಖಾತೆ ನಿರ್ವಹಿಸಿ",
    roleLabour: "ಕಾರ್ಮಿಕ / ಮುಕ್ಕಾದಾಂ ತಂಡ",
    roleLabourDesc: "ಕೊಯ್ಲು ಮತ್ತು ಆಫ್-ಸೀಸನ್ ಕೆಲಸಗಳನ್ನು ಪಡೆಯಿರಿ, ದೈನಂದಿನ ವೇತನ ದರ ನಿಗದಿಪಡಿಸಿ",
    nameInputLabel: "ಪೂರ್ಣ ಹೆಸರು",
    phoneInputLabel: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    sendOtp: "ತ್ವರಿತ ಒಟಿಪಿ ದೃಢೀಕರಣ & ಲಾಗಿನ್",
    quickDemoAccounts: "⚡ 1-ಕ್ಲಿಕ್ ಡೆಮೊ ಪ್ರೊಫೈಲ್‌ಗಳು:",
    profileTitle: "ನನ್ನ ಅಗ್ರಿಕನೆಕ್ಟ್ ಪ್ರೊಫೈಲ್",
    profileSub: "ಪಾತ್ರದ ಆಯ್ಕೆಗಳು, ಸಂಪರ್ಕ ವಿವರಗಳು ಮತ್ತು ಕಾರ್ಮಿಕರ ಸ್ಥಿತಿಯನ್ನು ನಿರ್ವಹಿಸಿ",
    saveProfileBtn: "ಪ್ರೊಫೈಲ್ ವಿವರಗಳನ್ನು ಉಳಿಸಿ",
    logoutBtn: "ಲಾಗ್‌ಔಟ್",
    profileNav: "ಪ್ರೊಫೈಲ್",
    switchToLabourer: "👷 ಕಾರ್ಮಿಕ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ",
    switchToFarmer: "👨‍🌾 ರೈತ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ",
    labourDashboardTitle: "👷 ಕಾರ್ಮಿಕ ಮತ್ತು ತಂಡದ ಮುಖಂಡರ ಮೋಡ್",
    labourHubDesc: "ನೀವು ತಂಡದ ಮುಖಂಡರ ವೀಕ್ಷಣೆಯಲ್ಲಿದ್ದೀರಿ. ನಿಮ್ಮ ತಾಲೂಕಿನ ರೈತರಿಂದ ನೇರ ಬುಕಿಂಗ್ ವಿನಂತಿಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",
    myAvailability: "ನನ್ನ ಕೆಲಸದ ಲಭ್ಯತೆ:",
    myDailyWage: "ನನ್ನ ದೈನಂದಿನ ವೇತನ ದರ (₹):"
  },
  hi: {
    coastalKarnataka: "तटीय कर्नाटक (दक्षिण कन्नड़ और उडुपी)",
    activeLocationLabel: "ग्राम पंचायत / तालुक",
    voiceSearchBtn: "वॉइस असिस्टेंट",
    registerCrewNav: "+ नई टीम जोड़ें",
    voiceListeningTitle: "🎙️ वॉइस असिस्टेंट सुन रहा है (तटीय बोली तैयार)",
    trySaying: "यह बोलकर देखें:",
    tabWorkforce: "ग्रामीण मजदूर और टीमें",
    tabMarket: "सीधा बाजार और मंडी",
    tabKhata: "दैनिक मजदूरी खाता",
    tabPricing: "सदस्यता योजनाएं",
    liveMandiSync: "कैंपको और एपीएमसी लाइव दर",
    heroBadge: "🌾 तटीय कर्नाटक कार्यबल केंद्र",
    heroSubtext: "15,000+ किसानों को सत्यापित स्थानीय मजदूरों से जोड़ता है",
    workforceHeading: "हाइपर-लोकल ग्रामीण मजदूर और मुक्कादाम टीम खोजें",
    workforceDesc: "दक्षिण कन्नड़ और उडुपी में सुपारी व नारियल कटाई दल, मुक्कादाम टीमें (4-10 सदस्य) और ऑफ-सीजन मिस्त्री जीपीएस दूरी और रैंकिंग के साथ खोजें।",
    smartRankFormula: "⚡ डायनेमिक स्मार्ट रैंक स्कोर",
    hiringModeLabel: "काम पर रखने का तरीका:",
    modeAll: "सभी",
    modeCrew: "👥 समूह टीमें (मुक्कादाम, 4–10)",
    modeSingle: "👤 एकल मजदूर",
    taskSkillLabel: "365 दिन कार्य व कौशल फिल्टर",
    taskSkillSub: "खेती कटाई और ऑफ-सीजन ग्रामीण कार्य",
    skillAll: "🌾 सभी ग्रामीण सेवाएं (खेती + ऑफ-सीजन)",
    skillArecanut: "🌴 सुपारी और नारियल कटाई",
    skillWeeding: "🌿 घास कटाई और निराई",
    skillPaddy: "🌾 धान और फसल कटाई",
    skillMechanic: "🔧 ऑफ-सीजन: पंप व मोटर मैकेनिक",
    skillMasonry: "🧱 ऑफ-सीजन: ग्रामीण मिस्त्री व बाड़",
    gpsRadiusLabel: "जीपीएस दायरा स्कैनर:",
    sortByLabel: "क्रमबद्ध करें:",
    addWorkerBtn: "टीम / मजदूर जोड़ें",
    showingResults: "दिखाया जा रहा है:",
    noWorkersFound: "आपके चुने हुए दायरे में कोई मजदूर नहीं मिला",
    noWorkersHint: "जीपीएस स्कैनर को 25–30 किमी तक बढ़ाएं या फिल्टर रीसेट करें।",
    marketEliminateMiddleman: "बिचौलियों के कमीशन से मुक्ति (हैकथॉन पीएस 1.2)",
    marketHeading: "सीधा बाजार और तटीय मंडी मूल्य खोज",
    marketDesc: "दक्षिण कन्नड़ और उडुपी के सीमांत किसानों को सीधे खाद्य प्रसंस्करण इकाइयों और थोक खरीदारों से जोड़ें।",
    listHarvestDirectBtn: "अपनी फसल सीधे सूचीबद्ध करें",
    liveMandiCardsTitle: "तटीय मंडी मूल्य तुलना और किसान का लाभ",
    liveMandiCardsSubtitle: "एपीएमसी / कैंपको दर बनाम सीधा खरीदार मूल्य",
    liveUpdatedToday: "आज सुबह 09:30 बजे अपडेट हुआ",
    marginCalcTitle: "किसान का सीधा मुनाफा कैलकुलेटर",
    marginCalcDesc: "बिचौलियों को हटाकर देखें कि आपको प्रति बैच कितना अतिरिक्त लाभ मिलता है।",
    calcCropSelect: "फसल चुनें",
    calcQuantity: "फसल की मात्रा",
    calcExtraProfit: "अतिरिक्त शुद्ध लाभ",
    activeLotsTitle: "सक्रिय किसान फसल लॉट",
    activeLotsSub: "खेत से सीधी खरीद व एस्क्रो सुरक्षा",
    khataBadge: "डिजिटल पॉकेट डायरी",
    khataSubtext: "विवाद रहित पारदर्शी कृषि बहीखाता",
    khataHeading: "हाइब्रिड दैनिक मजदूरी खाता / लेज़र",
    khataDesc: "दैनिक हाजिरी, नकद भुगतान और यूपीआई एस्क्रो का पारदर्शी हिसाब रखें।",
    exportKhataBtn: "CSV डाउनलोड",
    totalSettledLabel: "कुल भुगतान किया गया",
    settledVerified: "नकद व यूपीआई सत्यापित",
    pendingBalanceLabel: "बकाया राशि",
    pendingDue: "काम के बाद देय राशि",
    totalEntriesLabel: "कुल प्रविष्टियां",
    entriesCountDesc: "दर्ज किए गए कार्य दिवस",
    addWageTitle: "दैनिक मजदूरी प्रविष्टि जोड़ें",
    khataWorkerName: "मजदूर / टीम का नाम",
    khataTask: "किया गया कार्य",
    khataAmount: "मजदूरी राशि (₹)",
    khataPaymentMode: "भुगतान का प्रकार",
    khataLogBtn: "खाते में दर्ज करें",
    khataTableTitle: "मजदूरी बहीखाता",
    khataTableSub: "डायरेक्टरी से बुक की गई एंट्री यहां स्वतः जुड़ जाती हैं",
    pricingBadge: "किसानों और टीमों के लिए प्रत्यक्ष मूल्य",
    pricingHeading: "सस्ती और पारदर्शी ग्रामीण सदस्यता",
    pricingSub: "दक्षिण कन्नड़ और उडुपी के किसानों को प्राथमिकता, 30 किमी जीपीएस और शून्य फसल कमीशन।",
    planBasicName: "ग्राम बेसिक",
    planBasicSub: "व्यक्तिगत छोटे किसानों के लिए निःशुल्क।",
    planFreeDuration: "/ हमेशा के लिए मुफ्त",
    planBasicFeat1: "10 किमी जीपीएस मजदूर खोज",
    planBasicFeat2: "कन्नड़, अंग्रेजी, हिंदी भाषा समर्थन",
    planBasicFeat3: "दैनिक कैंपको और एपीएमसी मंडी भाव",
    planBasicFeat4: "दैनिक मजदूरी खाता (20 प्रविष्टियों तक)",
    planBasicFeat5: "30 किमी विस्तृत तालुक दायरा",
    planBasicFeat6: "प्राथमिकता शीर्ष मिलान सूची",
    mostPopularBadge: "तटीय कर्नाटक में सबसे लोकप्रिय",
    planProName: "कृषि और क्रू प्रो",
    planProSub: "संपूर्ण तालुक खोज और शून्य फसल कमीशन।",
    planPerMonth: "/ महीना (₹1.6/दिन)",
    planProFeat1: "टीमों के लिए #1 टॉप मैच बैज",
    planProFeat2: "30 किमी तालुक स्तरीय जीपीएस दायरा",
    planProFeat3: "फसल बिक्री पर शून्य कमीशन",
    planProFeat4: "कन्नड़ में स्वचालित वॉयस व एसएमएस अलर्ट",
    planProFeat5: "₹50,000 कृषि दुर्घटना बीमा कवर",
    planProFeat6: "असीमित मजदूरी खाता व पीडीएफ निर्यात",
    activateProBtn: "⭐ प्रो सक्रिय करें (₹49/माह)",
    planFpoName: "एफपीओ और थोक पास",
    planFpoSub: "किसान उत्पादक संगठनों और बड़े बागानों के लिए।",
    planFpoFeat1: "एक साथ 5+ टीमों की बल्क बुकिंग",
    planFpoFeat2: "फसल लॉट पर सीधी थोक बोली",
    planFpoFeat3: "जीएसटी सहित पीडीएफ लेज़र डाउनलोड",
    planFpoFeat4: "डीके और उडुपी में समर्पित कृषि अधिकारी",
    planFpoFeat5: "एपीएमसी और कैंपको डेटा सिंक",
    modalBookingTitle: "मजदूर / मुक्कादाम टीम बुक करें",
    bookingStartDate: "काम की तारीख",
    bookingDuration: "अवधि / पेड़ों की संख्या",
    bookingPaymentMode: "भुगतान का प्रकार (खाता मोड)",
    bookingEstTotal: "अनुमानित कुल मजदूरी",
    confirmBookingBtn: "पुष्टि करें और खाते में जोड़ें",
    ratingModalTitle: "काम के बाद लाइव रेटिंग सिम्युलेटर",
    oneTapRatingLabel: "1-टैप त्वरित प्रतिक्रिया:",
    regModalTitle: "मजदूर या मुक्कादाम टीम पंजीकरण",
    regName: "मजदूर / टीम लीडर का नाम",
    regType: "श्रेणी",
    regCrewSize: "टीम सदस्य संख्या",
    regSkill: "मुख्य कौशल / पेशा",
    regTaluk: "गृह तालुक / पंचायत",
    regWage: "दैनिक मजदूरी दर (₹)",
    regPhone: "मोबाइल नंबर (व्हाट्सएप)",
    regTools: "उपलब्ध औजार",
    regSubmitBtn: "पंजीकृत करें और बूस्ट पाएं",
    listProduceTitle: "अपनी फसल सीधे सूचीबद्ध करें",
    listProduceSub: "दक्षिण कन्नड़ और उडुपी के खरीदारों को सीधी बिक्री",
    produceFarmerName: "किसान / बागान का नाम",
    produceCropType: "फसल का प्रकार",
    produceTaluk: "स्थान / तालुक",
    produceQuantity: "उपलब्ध मात्रा (किग्रा)",
    produceAskPrice: "सीधा विक्रय मूल्य (₹ / किग्रा)",
    publishHarvestBtn: "फसल लॉट प्रकाशित करें",
    buyerModalTitle: "सीधे खरीदें और संपर्क करें",
    notificationsTitle: "सूचनाएं और स्थानीय अलर्ट",
    notificationsSub: "नए पंजीकृत दलों, मंडी मूल्य वृद्धि और बुकिंग अपडेट की लाइव जानकारी",
    markAllRead: "सभी को पढ़ा हुआ चिह्नित करें",
    clearAll: "हटाएं",
    notifAreaAutoAlerts: "आपकी पंचायत के लिए स्वचालित एसएमएस और वॉयस अलर्ट सक्रिय हैं",
    noNotifications: "अभी कोई सूचना नहीं है।",
    loginTitle: "एग्रीकनेक्ट लॉगिन और भूमिका चयन",
    loginSub: "भूमि मालिक/किसान या कृषि मजदूर/दल के रूप में जुड़ें",
    selectRole: "चरण 1: अपनी भूमिका चुनें",
    roleFarmer: "किसान / भूमि मालिक",
    roleFarmerDesc: "कटाई दल किराए पर लें, सीधे मंडी भाव देखें, दैनिक मजदूरी खाता रखें",
    roleLabour: "मजदूर / मुक्कादाम दल",
    roleLabourDesc: "कटाई और ऑफ-सीजन कार्य खोजें, मजदूरी दर और उपलब्धता निर्धारित करें",
    nameInputLabel: "पूरा नाम",
    phoneInputLabel: "मोबाइल नंबर",
    sendOtp: "त्वरित ओटीपी सत्यापन और लॉगिन",
    quickDemoAccounts: "⚡ 1-क्लिक डेमो प्रोफाइल:",
    profileTitle: "मेरी एग्रीकनेक्ट प्रोफाइल",
    profileSub: "भूमिका प्राथमिकताएं, संपर्क विवरण और मजदूर स्थिति प्रबंधित करें",
    saveProfileBtn: "प्रोफाइल विवरण सहेजें",
    logoutBtn: "लॉगआउट",
    profileNav: "प्रोफाइल",
    switchToLabourer: "👷 मजदूर मोड में बदलें",
    switchToFarmer: "👨‍🌾 किसान मोड में बदलें",
    labourDashboardTitle: "👷 मजदूर और टीम लीडर मोड",
    labourHubDesc: "आप टीम लीडर दृश्य में हैं। आपके तालुक के किसानों से सीधे बुकिंग अनुरोध यहां दिखाई देंगे।",
    myAvailability: "मेरी कार्य उपलब्धता:",
    myDailyWage: "मेरी दैनिक मजदूरी दर (₹):"
  }
};

// ==========================================
// 2. GEOGRAPHIC COORDINATES FOR TALUKS
// ==========================================
const locationCoords = {
  "Beltangady / Kuvettu": { lat: 13.0031, lon: 75.2917, taluk: "Beltangady", district: "Dakshina Kannada" },
  "Puttur Taluk": { lat: 12.7667, lon: 75.2000, taluk: "Puttur", district: "Dakshina Kannada" },
  "Udupi Rural": { lat: 13.3409, lon: 74.7421, taluk: "Udupi", district: "Udupi" },
  "Karkala": { lat: 13.2167, lon: 74.9972, taluk: "Karkala", district: "Udupi" },
  "Mangaluru Outskirts": { lat: 12.9141, lon: 74.8560, taluk: "Mangaluru", district: "Dakshina Kannada" }
};

// Haversine Distance Formula
function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return parseFloat((R * c).toFixed(1));
}

// ==========================================
// 3. APPLICATION STATE
// ==========================================
const state = {
  currentLocation: "Beltangady / Kuvettu",
  currentLang: "en",
  activeTab: "workforce",
  userTier: "basic", // 'basic' | 'pro' | 'wholesale'

  // User Profile & Authentication State
  currentUser: {
    isLoggedIn: true,
    id: "u1",
    name: "Mahalinga Bhat",
    nameKn: "ಮಹಾಲಿಂಗ ಭಟ್",
    nameHi: "महालिंगा भट",
    role: "farmer", // 'farmer' | 'labourer'
    phone: "+91 94481 29384",
    panchayat: "Beltangady / Kuvettu",
    avatar: "MB",
    farmSize: "4.5 Acres (Arecanut & Pepper)",
    stats: {
      bookingsMade: 4,
      totalPaid: 7200,
      lotsListed: 2
    },
    crewName: "Anand Gowda Mukkadam Crew",
    crewSize: 8,
    skill: "arecanut",
    dailyWage: 3600,
    availability: "available"
  },

  // 1-Click Demo Profiles for quick testing
  demoAccounts: {
    farmer: {
      isLoggedIn: true,
      id: "u1",
      name: "Mahalinga Bhat",
      nameKn: "ಮಹಾಲಿಂಗ ಭಟ್",
      nameHi: "महालिंगा भट",
      role: "farmer",
      phone: "+91 94481 29384",
      panchayat: "Beltangady / Kuvettu",
      avatar: "MB",
      farmSize: "4.5 Acres (Arecanut & Pepper)",
      stats: { bookingsMade: 4, totalPaid: 7200, lotsListed: 2 },
      crewName: "",
      crewSize: 1,
      skill: "arecanut",
      dailyWage: 850,
      availability: "available"
    },
    labourer: {
      isLoggedIn: true,
      id: "u2",
      name: "Anand Gowda",
      nameKn: "ಆನಂದ ಗೌಡ",
      nameHi: "आनंद गौड़ा",
      role: "labourer",
      phone: "+91 98451 22345",
      panchayat: "Beltangady / Kuvettu",
      avatar: "AG",
      farmSize: "",
      stats: { jobsDone: 38, rating: 4.9, earnings: 45600 },
      crewName: "Anand Gowda Mukkadam Crew",
      crewSize: 8,
      skill: "arecanut",
      dailyWage: 3600,
      availability: "available"
    }
  },

  // Real-time Area Notifications Feed
  notifications: [
    {
      id: "n1",
      type: "worker_registered",
      title: "New Crew Alert in Beltangady!",
      titleKn: "ಬೆಳ್ತಂಗಡಿಯಲ್ಲಿ ಹೊಸ ತಂಡ ನೋಂದಣಿಯಾಗಿದೆ!",
      titleHi: "बेलतंगडी में नई टीम पंजीकृत हुई!",
      message: "Anand Gowda Mukkadam Crew (8 members) registered within 3.2 km for Arecanut Harvesting.",
      messageKn: "ಆನಂದ ಗೌಡ ಮುಕ್ಕಾದಾಂ ತಂಡ (8 ಸದಸ್ಯರು) ಅಡಿಕೆ ಕೊಯ್ಲಿಗಾಗಿ 3.2 ಕಿ.ಮೀ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ನೋಂದಾಯಿಸಿಕೊಂಡಿದೆ.",
      messageHi: "आनंद गौड़ा मुक्कादाम टीम (8 सदस्य) सुपारी कटाई के लिए 3.2 किमी के दायरे में पंजीकृत हुई।",
      timestamp: "10 mins ago",
      panchayat: "Beltangady / Kuvettu",
      read: false,
      workerId: "w1",
      icon: "fa-people-group",
      iconColor: "text-emerald-500"
    },
    {
      id: "n2",
      type: "mandi_spike",
      title: "Mandi Price Spike (CAMPCO)",
      titleKn: "ಕ್ಯಾಂಪ್ಕೋ ಮಂಡಿ ದರ ಏರಿಕೆ",
      titleHi: "कैंपको मंडी भाव में उछाल",
      message: "Red Arecanut (Chali) jumped to ₹495/kg (+8.4% gain over broker rate).",
      messageKn: "ಕೆಂಪು ಅಡಿಕೆ (ಚಾಲಿ) ದರ ₹495/ಕೆಜಿಗೆ ಏರಿಕೆಯಾಗಿದೆ (ದಲ್ಲಾಳಿಗಳ ದರಕ್ಕಿಂತ +8.4% ಅಧಿಕ).",
      messageHi: "लाल सुपारी (चाली) का भाव बढ़कर ₹495/किग्रा हो गया (+8.4% अधिक लाभ)।",
      timestamp: "1 hour ago",
      read: false,
      icon: "fa-chart-line",
      iconColor: "text-amber-500"
    },
    {
      id: "n3",
      type: "booking_confirmed",
      title: "Crew Booking Confirmed",
      titleKn: "ತಂಡದ ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ",
      titleHi: "टीम बुकिंग की पुष्टि हुई",
      message: "Shekhar Poojary confirmed for Palm Tree Climbing tomorrow morning.",
      messageKn: "ಶೇಖರ್ ಪೂಜಾರಿ ನಾಳೆ ಬೆಳಿಗ್ಗೆ ಮರ ಹತ್ತುವ ಕೆಲಸಕ್ಕೆ ದೃಢೀಕರಿಸಿದ್ದಾರೆ.",
      messageHi: "शेखर पूजारी ने कल सुबह पेड़ चढ़ाई के काम की पुष्टि की है।",
      timestamp: "Yesterday",
      read: true,
      icon: "fa-calendar-check",
      iconColor: "text-blue-500"
    }
  ],

  filters: {
    searchQuery: "",
    hiringMode: "all", // 'all' | 'crew' | 'single'
    skill: "all", // 'all' | 'arecanut' | 'weeding' | 'paddy' | 'mechanic' | 'masonry'
    radiusKm: 15,
    sortBy: "smart_rank" // 'smart_rank' | 'distance_asc' | 'rating_desc' | 'wage_asc'
  },
  selectedWorkerForModal: null,
  selectedProduceForModal: null,

  // Coastal Karnataka Workers & Mukkadam Crews Dataset
  workers: [
    {
      id: "w1",
      name: "Anand Gowda Mukkadam Crew",
      type: "crew",
      crewSize: 8,
      lat: 13.0120,
      lon: 75.3050, // Kuvettu near Beltangady
      baseTaluk: "Beltangady / Kuvettu",
      skills: ["arecanut", "weeding"],
      skillTitle: "Arecanut Climbing & Bush Clearing Crew",
      wage: 3600,
      wageUnit: "/ day (Crew of 8)",
      rating: 4.9,
      reviewCount: 38,
      completionRate: 98,
      status: "Available Today",
      statusCode: "available",
      tools: "8 Professional climbing harnesses, 3 STIHL brush cutters",
      phone: "+91 98451 22345",
      isNew: false
    },
    {
      id: "w2",
      name: "Ramesh Naik & Sons Crew",
      type: "crew",
      crewSize: 6,
      lat: 12.7800,
      lon: 75.2150, // Near Puttur
      baseTaluk: "Puttur Taluk",
      skills: ["arecanut", "paddy"],
      skillTitle: "Chali Arecanut Harvest & Paddy Thrashers",
      wage: 3100,
      wageUnit: "/ day (Crew of 6)",
      rating: 4.8,
      reviewCount: 29,
      completionRate: 95,
      status: "Available Today",
      statusCode: "available",
      tools: "Telescopic bamboo poles, harvest sacks, drying sheets",
      phone: "+91 94802 88471",
      isNew: false
    },
    {
      id: "w3",
      name: "Shekhar Poojary (Single)",
      type: "single",
      crewSize: 1,
      lat: 13.0080,
      lon: 75.2890, // Beltangady Center
      baseTaluk: "Beltangady / Kuvettu",
      skills: ["arecanut"],
      skillTitle: "Master Palm Tree Climber (Arecanut & Coconut)",
      wage: 900,
      wageUnit: "/ day or ₹55/tree",
      rating: 4.95,
      reviewCount: 52,
      completionRate: 99,
      status: "Booked Tomorrow",
      statusCode: "partial",
      tools: "Traditional ankle rope, alloy tree spikes, safety harness",
      phone: "+91 99014 31902",
      isNew: false
    },
    {
      id: "w4",
      name: "Coastal Agri Power Mechanics (Crew)",
      type: "crew",
      crewSize: 4,
      lat: 13.2250,
      lon: 75.0080, // Karkala
      baseTaluk: "Karkala",
      skills: ["mechanic"],
      skillTitle: "Off-Season: 5HP–10HP Submersible Pump & Motor Overhaul",
      wage: 2400,
      wageUnit: "/ service visit",
      rating: 4.75,
      reviewCount: 24,
      completionRate: 96,
      status: "Available Today",
      statusCode: "available",
      tools: "Mobile winding kit, coil testers, hydraulic pullers",
      phone: "+91 98440 76219",
      isNew: false
    },
    {
      id: "w5",
      name: "Brahmavar Rural Masonry & Fencing",
      type: "crew",
      crewSize: 5,
      lat: 13.3450,
      lon: 74.7550, // Udupi Rural
      baseTaluk: "Udupi Rural",
      skills: ["masonry"],
      skillTitle: "Off-Season: Laterite Stone Compound & Solar Fencing",
      wage: 2800,
      wageUnit: "/ day (Crew of 5)",
      rating: 4.65,
      reviewCount: 19,
      completionRate: 92,
      status: "Available Today",
      statusCode: "available",
      tools: "Concrete mixer, wire tensioners, post hole auger",
      phone: "+91 97413 55820",
      isNew: false
    },
    {
      id: "w6",
      name: "Suresh Poojary (Single)",
      type: "single",
      crewSize: 1,
      lat: 13.0200,
      lon: 75.2750, // Beltangady Outskirts
      baseTaluk: "Beltangady / Kuvettu",
      skills: ["weeding"],
      skillTitle: "Manual Weeding & Trenching",
      wage: 650,
      wageUnit: "/ day",
      rating: 2.6, // Low rating to demonstrate penalty & warning badge!
      reviewCount: 14,
      completionRate: 64, // Low completion
      status: "Available Today",
      statusCode: "available",
      tools: "Hand sickles, pickaxe",
      phone: "+91 96112 00412",
      isNew: false
    },
    {
      id: "w7",
      name: "Guruvayanakere Weeding Squad",
      type: "crew",
      crewSize: 6,
      lat: 13.0280,
      lon: 75.2600, // Near Beltangady
      baseTaluk: "Beltangady / Kuvettu",
      skills: ["weeding"],
      skillTitle: "Grass Slashing & Areca Intercrop Weeding",
      wage: 2700,
      wageUnit: "/ day (Crew of 6)",
      rating: 4.7,
      reviewCount: 22,
      completionRate: 94,
      status: "Available Today",
      statusCode: "available",
      tools: "4 Petrol brush cutters, safety helmets, rake nets",
      phone: "+91 99458 11984",
      isNew: false
    },
    {
      id: "w8",
      name: "Bantwal Paddy Harvesters (Mukkadam)",
      type: "crew",
      crewSize: 10,
      lat: 12.8950,
      lon: 75.0400, // Bantwal / Mangaluru
      baseTaluk: "Mangaluru Outskirts",
      skills: ["paddy"],
      skillTitle: "Paddy Reaping, Bundling & Bagging Crew",
      wage: 4500,
      wageUnit: "/ day or ₹2,200/acre",
      rating: 4.85,
      reviewCount: 31,
      completionRate: 97,
      status: "Available Today",
      statusCode: "available",
      tools: "Power reaper, paddy winnowing fans, heavy tarpaulins",
      phone: "+91 98801 44521",
      isNew: false
    },
    {
      id: "w9",
      name: "Manjunath Kulal (Mechanic)",
      type: "single",
      crewSize: 1,
      lat: 12.7750,
      lon: 75.1950, // Puttur
      baseTaluk: "Puttur Taluk",
      skills: ["mechanic"],
      skillTitle: "Irrigation Pump Repair & Drip Line Filter Cleaning",
      wage: 750,
      wageUnit: "/ visit",
      rating: 4.6,
      reviewCount: 16,
      completionRate: 91,
      status: "Busy",
      statusCode: "busy",
      tools: "Multimeter, pressure gauge, pipe wrenches",
      phone: "+91 94481 66732",
      isNew: false
    },
    {
      id: "w10",
      name: "Kalladka Off-Season Fencing & Masonry",
      type: "crew",
      crewSize: 4,
      lat: 12.8700,
      lon: 75.0800, // Mangaluru / Bantwal
      baseTaluk: "Mangaluru Outskirts",
      skills: ["masonry"],
      skillTitle: "Wild Boar Trenching & Stone Retaining Walls",
      wage: 2500,
      wageUnit: "/ day (Crew of 4)",
      rating: 4.55,
      reviewCount: 12,
      completionRate: 90,
      status: "Available Today",
      statusCode: "available",
      tools: "Heavy masonry chisels, sledgehammers, dump trolley",
      phone: "+91 97312 99401",
      isNew: false
    },
    {
      id: "w11",
      name: "Udupi Palm Climbers Union",
      type: "crew",
      crewSize: 7,
      lat: 13.3300,
      lon: 74.7350, // Udupi
      baseTaluk: "Udupi Rural",
      skills: ["arecanut"],
      skillTitle: "Certified Coconut & Tall Areca Harvesters",
      wage: 3500,
      wageUnit: "/ day (Crew of 7)",
      rating: 4.9,
      reviewCount: 44,
      completionRate: 98,
      status: "Available Today",
      statusCode: "available",
      tools: "Safety tree harnesses, crown cleaning scrapers",
      phone: "+91 98457 33210",
      isNew: false
    },
    {
      id: "w12",
      name: "Praveen Acharya (New Starter)",
      type: "single",
      crewSize: 1,
      lat: 13.0050,
      lon: 75.2950, // Beltangady Center
      baseTaluk: "Beltangady / Kuvettu",
      skills: ["weeding", "mechanic"],
      skillTitle: "Motor Rewinding & Brush Cutter Specialist",
      wage: 800,
      wageUnit: "/ day",
      rating: 0, // NEWCOMER to test newcomer boost!
      reviewCount: 0,
      completionRate: 100,
      status: "Available Today",
      statusCode: "available",
      tools: "New Japanese brush cutter & testing kit",
      phone: "+91 94819 00812",
      isNew: true // Gets 88 starter score
    }
  ],

  // 4 Coastal Karnataka Mandi Comparison Benchmark Cards (PS 1.2)
  mandiPrices: [
    {
      id: "m1",
      crop: "arecanut",
      name: "Red Arecanut (Chali / Rashi)",
      nameKn: "ಕೆಂಪು ಅಡಿಕೆ (ಚಾಲಿ / ರಾಶಿ)",
      apmcName: "Puttur / CAMPCO Mandi",
      apmcPrice: 465,
      directPrice: 495,
      gainPercent: 8.4,
      gainDiff: 30,
      trend: "Bullish (+₹8/kg this week)",
      unit: "kg",
      buyerType: "Pan Masala Exporters & Direct Gutka Extractors",
      tag: "Highest Volume in DK"
    },
    {
      id: "m2",
      crop: "pepper",
      name: "Black Pepper (Graded Malabar)",
      nameKn: "ಕರಿಮೆಣಸು (ಗ್ರೇಡೆಡ್ ಮಲಬಾರ್)",
      apmcName: "Mangaluru APMC Yard",
      apmcPrice: 610,
      directPrice: 648,
      gainPercent: 6.2,
      gainDiff: 38,
      trend: "Strong Export Demand",
      unit: "kg",
      buyerType: "Baikampady Oleoresin & Spice Exporters",
      tag: "High Value Intercrop"
    },
    {
      id: "m3",
      crop: "coconut",
      name: "Tender / Copra Coconut",
      nameKn: "ತೆಂಗಿನಕಾಯಿ / ಒಣ ಕೊಬ್ಬರಿ",
      apmcName: "Udupi Commission Broker",
      apmcPrice: 115,
      directPrice: 128,
      gainPercent: 11.0,
      gainDiff: 13,
      trend: "High Local Festival Demand",
      unit: "kg",
      buyerType: "Brahmavar Coconut Oil Mills & Catering",
      tag: "Zero Middleman Cut"
    },
    {
      id: "m4",
      crop: "banana",
      name: "Nendran / Robusta Banana",
      nameKn: "ನೇಂದ್ರನ್ / ರೋಬಸ್ಟಾ ಬಾಳೆಹಣ್ಣು",
      apmcName: "Beltangady Local Broker",
      apmcPrice: 34,
      directPrice: 39,
      gainPercent: 14.0,
      gainDiff: 5,
      trend: "Rising Chips Factory Buying",
      unit: "kg",
      buyerType: "Mangaluru Banana Chips Processing Units",
      tag: "Quick 24h Farm Gate Cash"
    }
  ],

  // Produce Lots Listed by Farmers in DK & Udupi
  produceLots: [
    {
      id: "p1",
      farmerName: "Ramesh Hegde",
      village: "Kuvettu, Beltangady",
      lat: 13.0080,
      lon: 75.2980,
      crop: "arecanut",
      cropTitle: "Sullia Grade Red Chali Arecanut",
      quantity: 1200,
      unit: "kg",
      directAskPrice: 495,
      mandiRefPrice: 465,
      netGainKg: 30,
      grade: "Grade A Sun-Dried",
      harvestReady: "Ready for Farmgate Inspection",
      phone: "+91 94482 12903",
      farmerAvatar: "RH"
    },
    {
      id: "p2",
      farmerName: "Shashidhar Rao",
      village: "Kavoor, Mangaluru Outskirts",
      lat: 12.9200,
      lon: 74.8600,
      crop: "pepper",
      cropTitle: "Organically Grown Black Pepper",
      quantity: 450,
      unit: "kg",
      directAskPrice: 648,
      mandiRefPrice: 610,
      netGainKg: 38,
      grade: "Export Malabar Bold",
      harvestReady: "Ready to Dispatch in Baikampady",
      phone: "+91 98450 67123",
      farmerAvatar: "SR"
    },
    {
      id: "p3",
      farmerName: "Devaki Poojarthi",
      village: "Brahmavar, Udupi Rural",
      lat: 13.3500,
      lon: 74.7450,
      crop: "coconut",
      cropTitle: "Mature Copra Coconuts (Oil Grade)",
      quantity: 1800,
      unit: "kg",
      directAskPrice: 128,
      mandiRefPrice: 115,
      netGainKg: 13,
      grade: "High Oil Content",
      harvestReady: "Harvested Yesterday",
      phone: "+91 97412 88390",
      farmerAvatar: "DP"
    },
    {
      id: "p4",
      farmerName: "Venkatesh Bhat",
      village: "Karkala Town Rural",
      lat: 13.2200,
      lon: 75.0010,
      crop: "banana",
      cropTitle: "Nendran Chips Grade Banana",
      quantity: 900,
      unit: "kg",
      directAskPrice: 39,
      mandiRefPrice: 34,
      netGainKg: 5,
      grade: "Crisp Green Mature",
      harvestReady: "Cutting Tomorrow Morning",
      phone: "+91 99001 45981",
      farmerAvatar: "VB"
    }
  ],

  // Hybrid Daily Wage Khata Entries
  khataEntries: [
    {
      id: "k1",
      date: "2026-10-14",
      workerName: "Anand Gowda Mukkadam Crew",
      task: "Arecanut Climbing & Plucking",
      amount: 3600,
      mode: "Cash Handover",
      status: "Settled"
    },
    {
      id: "k2",
      date: "2026-10-15",
      workerName: "Shekhar Poojary (Single)",
      task: "Tall Palm Tree Climbing",
      amount: 900,
      mode: "UPI Transfer",
      status: "Settled"
    },
    {
      id: "k3",
      date: "2026-10-15",
      workerName: "Guruvayanakere Weeding Squad",
      task: "Weeding & Brush Cutting",
      amount: 2700,
      mode: "Pending Balance",
      status: "Pending"
    },
    {
      id: "k4",
      date: "2026-10-13",
      workerName: "Manjunath Kulal (Mechanic)",
      task: "Pump & Motor Repair",
      amount: 750,
      mode: "Pending Balance",
      status: "Pending"
    }
  ]
};

// ==========================================
// 4. SMART REPUTATION & AUTO-RANKING ENGINE
// ==========================================
/**
 * Calculates Dynamic Smart Rank Score (0 - 100)
 * Score = (RatingScore * 0.50) + (ProximityScore * 0.30) + (CompletionRate * 0.20)
 * 
 * Rules:
 * - Newcomer Boost: workers with reviewCount == 0 receive starter score of 88/100 and 🚀 NEWCOMER BOOST badge.
 * - Low Rating: workers with rating < 3.0 or completionRate < 75 receive ⬇️ LOW RATING badge and are deprioritized.
 * - Top Match: Rank #1 worker with score >= 80 receives 🏆 #1 TOP MATCH badge.
 */
function calculateWorkerScores() {
  const currentCoords = locationCoords[state.currentLocation] || locationCoords["Beltangady / Kuvettu"];

  state.workers.forEach(worker => {
    // 1. Calculate live distance from active location
    const dist = getDistanceKm(currentCoords.lat, currentCoords.lon, worker.lat, worker.lon);
    worker.currentDistance = dist;

    // 2. Handle Newcomer Boost
    if (worker.isNew || worker.reviewCount === 0) {
      worker.smartScore = 88;
      worker.proximityScore = 85;
      worker.ratingScore = 90;
      worker.badgeClass = "badge-newcomer";
      worker.badgeLabel = "🚀 NEWCOMER BOOST";
      return;
    }

    // 3. Normal Formula Components
    // Rating Score: (rating / 5.0) * 100
    const ratingScore = (worker.rating / 5.0) * 100;
    worker.ratingScore = Math.round(ratingScore);

    // Proximity Score: Max 100 at 0km, decreasing by 3.3 points per km (at 30km, ~1 point)
    const proximityScore = Math.max(0, 100 - (dist * 3.3));
    worker.proximityScore = Math.round(proximityScore);

    // Completion Rate (already a percentage 0 - 100)
    const completionScore = worker.completionRate || 90;

    // Weighted Formula
    const finalScore = (ratingScore * 0.50) + (proximityScore * 0.30) + (completionScore * 0.20);
    worker.smartScore = Math.round(finalScore);

    // Badging
    if (worker.rating < 3.0 || worker.completionRate < 75) {
      worker.badgeClass = "badge-low-rating";
      worker.badgeLabel = "⬇️ LOW RATING (Caution)";
    } else {
      worker.badgeClass = "";
      worker.badgeLabel = "";
    }
  });
}

// Sort & Filter Workers
function getFilteredAndRankedWorkers() {
  calculateWorkerScores();

  let list = state.workers.filter(w => {
    // Distance filter (slider)
    if (w.currentDistance > state.filters.radiusKm) {
      return false;
    }

    // Hiring Mode: 'all' | 'crew' | 'single'
    if (state.filters.hiringMode !== "all" && w.type !== state.filters.hiringMode) {
      return false;
    }

    // Task & Skill Filter: 'all' | 'arecanut' | 'weeding' | 'paddy' | 'mechanic' | 'masonry'
    if (state.filters.skill !== "all") {
      if (!w.skills.includes(state.filters.skill)) {
        return false;
      }
    }

    // Search query
    if (state.filters.searchQuery.trim() !== "") {
      const q = state.filters.searchQuery.toLowerCase();
      const matchName = w.name.toLowerCase().includes(q);
      const matchSkill = w.skillTitle.toLowerCase().includes(q);
      const matchTaluk = w.baseTaluk.toLowerCase().includes(q);
      if (!matchName && !matchSkill && !matchTaluk) return false;
    }

    return true;
  });

  // Sorting
  switch (state.filters.sortBy) {
    case "smart_rank":
      list.sort((a, b) => {
        // Push low rating workers to the bottom
        const aLow = (a.rating < 3.0 && !a.isNew) ? 1 : 0;
        const bLow = (b.rating < 3.0 && !b.isNew) ? 1 : 0;
        if (aLow !== bLow) return aLow - bLow;

        // Otherwise sort by smartScore descending
        return b.smartScore - a.smartScore;
      });
      break;
    case "distance_asc":
      list.sort((a, b) => a.currentDistance - b.currentDistance);
      break;
    case "rating_desc":
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case "wage_asc":
      list.sort((a, b) => a.wage - b.wage);
      break;
  }

  // Assign #1 Top Match badge if score is high and not low rating
  list.forEach((w, idx) => {
    if (idx === 0 && w.smartScore >= 75 && (w.rating >= 4.0 || w.isNew)) {
      if (!w.isNew) {
        w.badgeClass = "badge-top-match";
        w.badgeLabel = "🏆 #1 TOP MATCH";
      }
    }
  });

  return list;
}

// ==========================================
// 5. DOM RENDERING LOGIC
// ==========================================

// Render Worker Cards in Tab 1
function renderWorkersGrid() {
  const container = document.getElementById("workers-grid");
  const emptyState = document.getElementById("workers-empty-state");
  const countBadge = document.getElementById("results-count-badge");
  const locationPill = document.getElementById("current-location-pill");

  if (!container) return;

  const workers = getFilteredAndRankedWorkers();

  // Update counts
  if (countBadge) {
    countBadge.textContent = `${workers.length} ${state.currentLang === 'kn' ? 'ತಂಡಗಳು ಮತ್ತು ಕಾರ್ಮಿಕರು' : 'Verified Crews & Workers'}`;
  }
  if (locationPill) {
    locationPill.innerHTML = `near <strong>${state.currentLocation}</strong>`;
  }
  const navCrewCount = document.getElementById("crew-count-pill");
  if (navCrewCount) {
    navCrewCount.textContent = workers.length;
  }

  if (workers.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  } else {
    if (emptyState) emptyState.classList.add("hidden");
  }

  let html = "";
  workers.forEach(w => {
    // Status color badge
    let statusClass = "bg-emerald-100 text-emerald-800 border-emerald-300";
    let statusIcon = "fa-circle-check";
    if (w.statusCode === "busy") {
      statusClass = "bg-red-100 text-red-800 border-red-300";
      statusIcon = "fa-circle-xmark";
    } else if (w.statusCode === "partial") {
      statusClass = "bg-amber-100 text-amber-800 border-amber-300";
      statusIcon = "fa-clock";
    }

    // Badge pill
    let badgeHtml = "";
    if (w.badgeLabel) {
      badgeHtml = `<span class="px-2.5 py-1 text-[11px] font-black rounded-lg ${w.badgeClass} flex items-center gap-1 shadow-sm">
        ${w.badgeLabel}
      </span>`;
    }

    // Type badge (Mukkadam vs Single)
    const typeLabel = w.type === "crew" 
      ? `<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold">👥 Mukkadam Crew (${w.crewSize} members)</span>`
      : `<span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold">👤 Single Worker</span>`;

    // Stars display
    let starDisplay = "";
    if (w.isNew || w.reviewCount === 0) {
      starDisplay = `<span class="text-blue-600 font-bold text-xs">🚀 Newcomer (No reviews yet)</span>`;
    } else {
      const fullStars = Math.floor(w.rating);
      const halfStar = (w.rating % 1) >= 0.4;
      let stars = "";
      for (let i = 0; i < fullStars; i++) stars += '<i class="fa-solid fa-star text-amber-400"></i> ';
      if (halfStar) stars += '<i class="fa-solid fa-star-half-stroke text-amber-400"></i> ';
      starDisplay = `
        <span class="flex items-center gap-1 text-xs font-bold text-slate-800">
          <span class="text-amber-500 font-extrabold text-sm">${w.rating}</span>
          <span class="text-xs text-amber-400">${stars}</span>
          <span class="text-slate-400 font-normal">(${w.reviewCount})</span>
        </span>
      `;
    }

    html += `
      <div class="worker-card bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden" data-id="${w.id}">
        
        <div>
          <!-- Top Row: Badges & Proximity Tag -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <div class="flex flex-wrap items-center gap-1.5">
              ${typeLabel}
              ${badgeHtml}
            </div>
            <span class="text-[11px] font-black px-2 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1 shrink-0">
              <i class="fa-solid fa-location-arrow text-emerald-600"></i>
              ${w.currentDistance} km away
            </span>
          </div>

          <!-- Name & Primary Title -->
          <h3 class="text-base font-extrabold text-slate-900 leading-tight mb-0.5">${w.name}</h3>
          <p class="text-xs text-emerald-800 font-semibold mb-2">${w.skillTitle}</p>

          <!-- Taluk & Verification -->
          <div class="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <span class="flex items-center gap-1">
              <i class="fa-solid fa-map-pin text-slate-400"></i>
              ${w.baseTaluk}
            </span>
            <span>•</span>
            <span class="text-emerald-700 font-medium flex items-center gap-1">
              <i class="fa-solid fa-shield-check"></i> Panchayat Verified
            </span>
          </div>

          <!-- Performance Metric Pill (Smart Score & Completion) -->
          <div class="bg-slate-50 rounded-2xl p-3 border border-slate-200/80 mb-4">
            <div class="flex items-center justify-between text-xs mb-1.5">
              <span class="font-bold text-slate-600 flex items-center gap-1">
                <span>⚡ Smart Rank Score:</span>
                <span class="text-emerald-800 font-extrabold text-sm">${w.smartScore}/100</span>
              </span>
              <span class="text-[11px] font-semibold text-slate-500">
                ${w.completionRate}% completion
              </span>
            </div>

            <!-- Mini Progress bar -->
            <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-emerald-600 to-amber-500 h-full rounded-full" style="width: ${w.smartScore}%"></div>
            </div>

            <div class="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-200/60">
              ${starDisplay}
              <span class="text-[11px] font-bold px-2 py-0.5 rounded-full border ${statusClass}">
                <i class="fa-solid ${statusIcon} text-[10px] mr-1"></i>${w.status}
              </span>
            </div>
          </div>

          <!-- Daily Wage Transparent Rate -->
          <div class="flex items-baseline justify-between mb-4">
            <div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Transparent Wage Rate</span>
              <div class="flex items-baseline gap-1">
                <span class="text-xl font-black text-slate-900">₹${w.wage.toLocaleString('en-IN')}</span>
                <span class="text-xs font-semibold text-slate-500">${w.wageUnit}</span>
              </div>
            </div>
            <div class="text-right">
              <span class="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                <i class="fa-solid fa-wrench mr-1"></i>Tools Included
              </span>
            </div>
          </div>
        </div>

        <!-- Action Buttons: Book Now & Rate Worker -->
        <div class="pt-2 border-t border-slate-100 flex items-center gap-2">
          
          <!-- Call Button -->
          <a href="tel:${w.phone}" onclick="triggerCallToast('${w.name}', '${w.phone}')" class="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 transition flex items-center justify-center text-sm font-bold" title="Direct Phone Call">
            <i class="fa-solid fa-phone"></i>
          </a>

          <!-- Rate Worker Simulator Trigger -->
          <button onclick="openRatingModal('${w.id}')" class="flex-1 py-2.5 px-3 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition flex items-center justify-center space-x-1.5">
            <i class="fa-solid fa-star text-amber-500"></i>
            <span>Rate Worker</span>
          </button>

          <!-- Book Now Modal Trigger -->
          <button onclick="openBookingModal('${w.id}')" class="flex-1 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition shadow-sm flex items-center justify-center space-x-1.5">
            <i class="fa-solid fa-calendar-check text-amber-300"></i>
            <span>Book Now</span>
          </button>
        </div>

      </div>
    `;
  });

  container.innerHTML = html;
}

// Render Mandi Comparison Cards in Tab 2 (Module 3)
function renderMandiCards() {
  const container = document.getElementById("mandi-comparison-grid");
  if (!container) return;

  let html = "";
  state.mandiPrices.forEach(m => {
    html += `
      <div class="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-emerald-600 transition">
        
        <div>
          <!-- Header: Tag & Demand Pill -->
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
              ${m.tag}
            </span>
            <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
              <i class="fa-solid fa-arrow-trend-up"></i> +${m.gainPercent}% Gain
            </span>
          </div>

          <!-- Crop Name -->
          <h3 class="text-base font-extrabold text-slate-900">${m.name}</h3>
          <p class="text-xs text-slate-500 mb-4">${m.trend}</p>

          <!-- Comparison Price Rows -->
          <div class="space-y-2.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 mb-4">
            
            <!-- APMC Mandi Rate -->
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium">${m.apmcName}:</span>
              <span class="font-bold text-slate-700">₹${m.apmcPrice} / ${m.unit}</span>
            </div>

            <!-- Direct Buyer Rate -->
            <div class="flex items-center justify-between text-xs">
              <span class="text-emerald-800 font-bold flex items-center gap-1">
                <i class="fa-solid fa-handshake text-emerald-600"></i> Direct Buyer:
              </span>
              <span class="font-black text-emerald-900 text-sm">₹${m.directPrice} / ${m.unit}</span>
            </div>

            <!-- Net Difference -->
            <div class="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
              <span class="font-bold text-slate-600">Farmer Net Advantage:</span>
              <span class="font-extrabold text-emerald-700">+₹${m.gainDiff} / ${m.unit}</span>
            </div>
          </div>

          <p class="text-[11px] text-slate-500 mb-3 italic">
            Procured by: <strong>${m.buyerType}</strong>
          </p>
        </div>

        <button onclick="filterProduceByCrop('${m.crop}')" class="w-full py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-sm">
          <i class="fa-solid fa-magnifying-glass text-amber-300"></i>
          <span>View Direct Buyers & Lots</span>
        </button>

      </div>
    `;
  });

  container.innerHTML = html;
}

// Render Farmer-to-Buyer Marketplace Produce Grid (Module 3)
function renderProduceLotsGrid(filteredCrop = "all") {
  const container = document.getElementById("produce-lots-grid");
  if (!container) return;

  const currentCoords = locationCoords[state.currentLocation] || locationCoords["Beltangady / Kuvettu"];

  let list = state.produceLots;
  if (filteredCrop !== "all") {
    list = list.filter(p => p.crop === filteredCrop);
  }

  let html = "";
  list.forEach(p => {
    const dist = getDistanceKm(currentCoords.lat, currentCoords.lon, p.lat, p.lon);
    const extraGainTotal = p.netGainKg * p.quantity;

    html += `
      <div class="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between relative hover:shadow-md transition">
        
        <div>
          <!-- Header -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <div class="flex items-center space-x-2.5">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-emerald-600 text-emerald-950 font-black text-sm flex items-center justify-center shadow-sm">
                ${p.farmerAvatar}
              </div>
              <div>
                <h4 class="text-sm font-extrabold text-slate-900 leading-tight">${p.farmerName}</h4>
                <p class="text-xs text-slate-500 flex items-center gap-1">
                  <i class="fa-solid fa-map-pin text-slate-400"></i> ${p.village}
                </p>
              </div>
            </div>

            <span class="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600">
              ${dist} km
            </span>
          </div>

          <!-- Crop Details -->
          <h3 class="text-base font-extrabold text-emerald-900 mb-1">${p.cropTitle}</h3>
          
          <div class="flex items-center gap-2 mb-3">
            <span class="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
              ${p.grade}
            </span>
            <span class="text-[11px] font-medium text-slate-500">
              ${p.harvestReady}
            </span>
          </div>

          <!-- Quantity & Price Matrix -->
          <div class="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 space-y-2 mb-4">
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-500 font-semibold">Available Lot Size:</span>
              <span class="text-slate-900 font-black text-sm">${p.quantity.toLocaleString('en-IN')} ${p.unit}</span>
            </div>

            <div class="flex items-center justify-between text-xs">
              <span class="text-emerald-800 font-bold">Direct Ask Price:</span>
              <span class="text-emerald-900 font-extrabold text-sm">₹${p.directAskPrice} / ${p.unit}</span>
            </div>

            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-1.5 border-t border-slate-200">
              <span>Local Mandi Benchmark:</span>
              <span>₹${p.mandiRefPrice} / ${p.unit}</span>
            </div>

            <div class="pt-1 flex items-center justify-between text-xs text-emerald-700 font-bold">
              <span>Farmer Extra Margin:</span>
              <span class="bg-emerald-100 px-2 py-0.5 rounded text-emerald-900">+₹${extraGainTotal.toLocaleString('en-IN')} net</span>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <button onclick="openBuyerConnectModal('${p.id}')" class="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs font-bold transition shadow-sm flex items-center justify-center space-x-2">
          <i class="fa-solid fa-handshake"></i>
          <span>Connect & Buy Direct</span>
        </button>

      </div>
    `;
  });

  container.innerHTML = html;
}

// Render Daily Wage Khata (Module 4)
function renderKhataTable(filter = "all") {
  const tbody = document.getElementById("khata-table-body");
  const settledEl = document.getElementById("kpi-total-settled");
  const pendingEl = document.getElementById("kpi-pending-balance");
  const entriesEl = document.getElementById("kpi-total-entries");
  const pendingBadge = document.getElementById("pending-khata-badge");

  if (!tbody) return;

  // Calculate KPIs
  let totalSettled = 0;
  let totalPending = 0;
  state.khataEntries.forEach(entry => {
    if (entry.status === "Settled") {
      totalSettled += entry.amount;
    } else {
      totalPending += entry.amount;
    }
  });

  if (settledEl) settledEl.textContent = `₹${totalSettled.toLocaleString('en-IN')}`;
  if (pendingEl) pendingEl.textContent = `₹${totalPending.toLocaleString('en-IN')}`;
  if (entriesEl) entriesEl.textContent = state.khataEntries.length;

  if (pendingBadge) {
    const pendingCount = state.khataEntries.filter(e => e.status === "Pending").length;
    if (pendingCount > 0) {
      pendingBadge.textContent = pendingCount;
      pendingBadge.classList.remove("hidden");
    } else {
      pendingBadge.classList.add("hidden");
    }
  }

  // Filter entries for table
  let list = state.khataEntries;
  if (filter === "pending") list = list.filter(e => e.status === "Pending");
  if (filter === "settled") list = list.filter(e => e.status === "Settled");

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-8 text-center text-slate-400 text-xs">
          No wage entries found in this view. Add a new entry above or book a crew from the directory.
        </td>
      </tr>
    `;
    return;
  }

  let html = "";
  list.forEach(entry => {
    const isPending = entry.status === "Pending";
    const statusBadge = isPending
      ? `<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 font-bold text-[10px]">⏳ Pending Due</span>`
      : `<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-[10px]">✅ Settled</span>`;

    const actionBtn = isPending
      ? `<button onclick="markKhataEntryPaid('${entry.id}')" class="px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-[11px] font-bold shadow-sm transition flex items-center gap-1 mx-auto">
          <i class="fa-solid fa-check"></i> Mark Paid
        </button>`
      : `<span class="text-slate-400 text-[11px]">Completed</span>`;

    html += `
      <tr class="hover:bg-slate-50 transition border-b border-slate-100">
        <td class="py-3 px-4 sm:px-6 font-semibold text-slate-600">${entry.date}</td>
        <td class="py-3 px-4 sm:px-6 font-bold text-slate-900">${entry.workerName}</td>
        <td class="py-3 px-4 sm:px-6 text-slate-600">${entry.task}</td>
        <td class="py-3 px-4 sm:px-6">
          <span class="inline-flex items-center gap-1 font-semibold text-[11px]">
            ${entry.mode.includes('Cash') ? '💵' : (entry.mode.includes('UPI') ? '📱' : '⏳')}
            ${entry.mode}
          </span>
        </td>
        <td class="py-3 px-4 sm:px-6 font-black text-slate-900 text-right">₹${entry.amount.toLocaleString('en-IN')}</td>
        <td class="py-3 px-4 sm:px-6 text-center">${statusBadge}</td>
        <td class="py-3 px-4 sm:px-6 text-center">${actionBtn}</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// Mark Khata Entry Paid
function markKhataEntryPaid(id) {
  const item = state.khataEntries.find(e => e.id === id);
  if (item) {
    item.status = "Settled";
    item.mode = "UPI Transfer (Settled)";
    renderKhataTable();
    showToast(`✅ Wage entry of ₹${item.amount.toLocaleString('en-IN')} for ${item.workerName} marked as Settled!`, "success");
  }
}

// ==========================================
// 6. INTERACTIVE MODAL ACTIONS
// ==========================================

// Open Booking Modal
function openBookingModal(workerId) {
  const worker = state.workers.find(w => w.id === workerId);
  if (!worker) return;

  state.selectedWorkerForModal = worker;

  const summary = document.getElementById("booking-worker-summary");
  if (summary) {
    summary.innerHTML = `
      <div>
        <h4 class="text-sm font-extrabold text-slate-900">${worker.name}</h4>
        <p class="text-xs text-emerald-800 font-semibold">${worker.skillTitle}</p>
        <span class="text-[11px] text-slate-500">${worker.baseTaluk} • ${worker.currentDistance} km away</span>
      </div>
      <div class="text-right">
        <span class="text-xs font-bold text-slate-500 block">Rate</span>
        <span class="text-base font-black text-emerald-900">₹${worker.wage.toLocaleString('en-IN')}</span>
        <span class="text-[10px] text-slate-500 block">${worker.wageUnit}</span>
      </div>
    `;
  }

  // Populate hidden inputs
  document.getElementById("booking-worker-id").value = worker.id;
  document.getElementById("booking-worker-rate").value = worker.wage;
  document.getElementById("booking-worker-name").value = worker.name;
  document.getElementById("booking-worker-skill").value = worker.skillTitle;

  // Set today's date
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("booking-date-input").value = today;

  calculateBookingTotal();
  openModal("booking-modal");
}

// Calculate Booking Total Wage
function calculateBookingTotal() {
  const rate = parseFloat(document.getElementById("booking-worker-rate").value) || 850;
  const duration = parseFloat(document.getElementById("booking-duration-select").value) || 1;
  const total = Math.round(rate * duration);

  const display = document.getElementById("booking-total-display");
  if (display) {
    display.textContent = `₹${total.toLocaleString('en-IN')}`;
  }
}

// Handle Booking Form Submit
function handleBookingSubmit(event) {
  event.preventDefault();

  const workerId = document.getElementById("booking-worker-id").value;
  const workerName = document.getElementById("booking-worker-name").value;
  const workerSkill = document.getElementById("booking-worker-skill").value;
  const workDate = document.getElementById("booking-date-input").value;
  const duration = parseFloat(document.getElementById("booking-duration-select").value) || 1;
  const rate = parseFloat(document.getElementById("booking-worker-rate").value) || 850;
  const total = Math.round(rate * duration);

  const paymentRadio = document.querySelector('input[name="booking-payment"]:checked');
  const paymentMode = paymentRadio ? paymentRadio.value : "Field Cash";

  // Create new Khata ledger entry automatically!
  const newEntry = {
    id: "k_" + Date.now(),
    date: workDate,
    workerName: workerName,
    task: workerSkill.split("&")[0].trim() || "Farm Harvest",
    amount: total,
    mode: paymentMode,
    status: paymentMode === "UPI Escrow" ? "Settled" : "Pending"
  };

  state.khataEntries.unshift(newEntry);
  renderKhataTable();

  closeModal("booking-modal");
  showToast(`📅 Booking Confirmed! ₹${total.toLocaleString('en-IN')} wage entry automatically logged to Daily Wage Khata.`, "success");
}

// Open Post-Work Emoji Rating Simulator Modal
function openRatingModal(workerId) {
  const worker = state.workers.find(w => w.id === workerId);
  if (!worker) return;

  state.selectedWorkerForModal = worker;

  const header = document.getElementById("rating-worker-header");
  if (header) {
    header.innerHTML = `
      <h4 class="text-base font-extrabold text-slate-900">${worker.name}</h4>
      <p class="text-xs text-slate-500 mb-2">${worker.skillTitle} • ${worker.baseTaluk}</p>
      <div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-700">
        <span>Current Rating: <strong>${worker.rating || 'New'}</strong> ⭐</span>
        <span>•</span>
        <span>Smart Score: <strong>${worker.smartScore}/100</strong></span>
      </div>
    `;
  }

  openModal("rating-modal");
}

// Apply Emoji Rating Simulator
function applyEmojiRating(newRatingScore, labelText) {
  const worker = state.selectedWorkerForModal;
  if (!worker) return;

  // Recalculate average rating
  if (worker.isNew || worker.reviewCount === 0) {
    worker.rating = newRatingScore;
    worker.reviewCount = 1;
    worker.isNew = false;
  } else {
    const totalPrevious = worker.rating * worker.reviewCount;
    worker.reviewCount += 1;
    worker.rating = parseFloat(((totalPrevious + newRatingScore) / worker.reviewCount).toFixed(2));
  }

  // Adjust completion rate accordingly
  if (newRatingScore >= 4.8) {
    worker.completionRate = Math.min(100, (worker.completionRate || 90) + 2);
  } else if (newRatingScore <= 2.0) {
    worker.completionRate = Math.max(50, (worker.completionRate || 90) - 15);
  }

  // Recalculate scores & re-render
  calculateWorkerScores();
  renderWorkersGrid();

  closeModal("rating-modal");

  if (newRatingScore < 3.0) {
    showToast(`⚠️ Demoted: Rating for ${worker.name} dropped to ${worker.rating} ⭐. ⬇️ LOW RATING warning badge applied.`, "error");
  } else {
    showToast(`⭐ Live Rating Updated: ${worker.name} is now ${worker.rating} ⭐ (Smart Score: ${worker.smartScore}/100)! Directory re-ranked.`, "success");
  }
}

// Toggle Crew Size Field in Registration
function toggleCrewSizeField() {
  const type = document.getElementById("reg-type").value;
  const wrapper = document.getElementById("reg-crew-size-wrapper");
  if (wrapper) {
    wrapper.style.display = type === "crew" ? "block" : "none";
  }
}

// Handle Worker Registration Submit
function handleWorkerRegistration(event) {
  event.preventDefault();

  const name = document.getElementById("reg-name").value.trim();
  const type = document.getElementById("reg-type").value;
  const crewSize = type === "crew" ? (parseInt(document.getElementById("reg-crew-size").value) || 6) : 1;
  const skill = document.getElementById("reg-skill").value;
  const taluk = document.getElementById("reg-taluk").value;
  const wage = parseFloat(document.getElementById("reg-wage").value) || 1200;
  const phone = document.getElementById("reg-phone").value.trim();
  const tools = document.getElementById("reg-tools").value.trim() || "Standard farm gear";

  const coords = locationCoords[taluk] || locationCoords["Beltangady / Kuvettu"];

  const skillTitles = {
    arecanut: "Arecanut & Coconut Harvesting Crew",
    weeding: "Weeding & Grass Clearing Specialist",
    paddy: "Paddy & Crop Harvesting Team",
    mechanic: "Off-Season Pump & Motor Mechanic",
    masonry: "Off-Season Rural Masonry & Fencing"
  };

  const newWorker = {
    id: "w_" + Date.now(),
    name: name,
    type: type,
    crewSize: crewSize,
    lat: coords.lat + (Math.random() - 0.5) * 0.02,
    lon: coords.lon + (Math.random() - 0.5) * 0.02,
    baseTaluk: taluk,
    skills: [skill],
    skillTitle: skillTitles[skill] || "Rural Service Professional",
    wage: wage,
    wageUnit: type === "crew" ? `/ day (Crew of ${crewSize})` : "/ day",
    rating: 0,
    reviewCount: 0,
    completionRate: 100,
    status: "Available Today",
    statusCode: "available",
    tools: tools,
    phone: phone,
    isNew: true // NEWCOMER BOOST
  };

  state.workers.unshift(newWorker);
  renderWorkersGrid();

  // Trigger real-time area notification for farmers in the Panchayat
  const isCrew = type === "crew";
  const notifItem = {
    id: "n_" + Date.now(),
    type: "worker_registered",
    title: `New ${isCrew ? 'Crew' : 'Worker'} Alert: ${taluk}!`,
    titleKn: `ಹೊಸ ${isCrew ? 'ತಂಡ' : 'ಕಾರ್ಮಿಕ'} ನೋಂದಣಿ: ${taluk}!`,
    titleHi: `नई ${isCrew ? 'टीम' : 'मजदूर'} अलर्ट: ${taluk}!`,
    message: `${name} (${isCrew ? `${crewSize} members` : 'Individual'}) registered in ${taluk} for ${newWorker.skillTitle}. Proximity matching active!`,
    messageKn: `${name} (${isCrew ? `${crewSize} ಸದಸ್ಯರ ತಂಡ` : 'ಏಕ ಕಾರ್ಮಿಕ'}) ${taluk} ನಲ್ಲಿ ನೋಂದಾಯಿಸಿಕೊಂಡಿದ್ದಾರೆ (${newWorker.skillTitle}).`,
    messageHi: `${name} (${isCrew ? `${crewSize} सदस्यों की टीम` : 'एकल मजदूर'}) ने ${taluk} में पंजीकरण किया।`,
    timestamp: "Just now",
    panchayat: taluk,
    read: false,
    workerId: newWorker.id,
    icon: isCrew ? "fa-people-group" : "fa-user-check",
    iconColor: "text-amber-500"
  };

  state.notifications.unshift(notifItem);
  renderNotifications();

  closeModal("worker-reg-modal");
  document.getElementById("worker-reg-form").reset();
  showToast(`🔔 Area Alert Generated! New ${isCrew ? 'Crew' : 'Worker'} "${name}" registered in ${taluk}. Added to Notification Center.`, "success");
}

// Open Produce Listing Modal
function updateMandiBenchmarkHint() {
  const crop = document.getElementById("produce-crop-select").value;
  const benchmarkBox = document.getElementById("mandi-benchmark-box");
  if (!benchmarkBox) return;

  const ref = state.mandiPrices.find(m => m.crop === crop);
  if (ref) {
    benchmarkBox.innerHTML = `
      <span>Mandi / CAMPCO Benchmark: <strong>₹${ref.apmcPrice}/kg</strong></span>
      <span class="text-amber-700 font-bold">+₹${ref.gainDiff}/kg Direct Buyer Advantage</span>
    `;
    document.getElementById("produce-ask-price").value = ref.directPrice;
  }
}

// Handle Produce Listing Submit (Module 3)
function handleProduceSubmit(event) {
  event.preventDefault();

  const farmerName = document.getElementById("produce-farmer-name").value.trim();
  const crop = document.getElementById("produce-crop-select").value;
  const taluk = document.getElementById("produce-taluk-select").value;
  const qty = parseFloat(document.getElementById("produce-qty").value) || 500;
  const askPrice = parseFloat(document.getElementById("produce-ask-price").value) || 495;

  const ref = state.mandiPrices.find(m => m.crop === crop) || state.mandiPrices[0];
  const coords = locationCoords[taluk] || locationCoords["Beltangady / Kuvettu"];

  const newLot = {
    id: "p_" + Date.now(),
    farmerName: farmerName,
    village: taluk,
    lat: coords.lat,
    lon: coords.lon,
    crop: crop,
    cropTitle: ref.name,
    quantity: qty,
    unit: "kg",
    directAskPrice: askPrice,
    mandiRefPrice: ref.apmcPrice,
    netGainKg: Math.max(0, askPrice - ref.apmcPrice),
    grade: "Direct Plantation Grade A",
    harvestReady: "Listed Today",
    phone: "+91 98450 XXXXX",
    farmerAvatar: farmerName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()
  };

  state.produceLots.unshift(newLot);
  renderProduceLotsGrid();

  closeModal("list-produce-modal");
  document.getElementById("list-produce-form").reset();
  showToast(`🌾 Harvest lot for ${qty} kg of ${ref.name} published directly! Buyers in DK & Udupi notified.`, "success");
}

// Filter Produce Lots by Crop Pill
function filterProduceByCrop(crop) {
  switchTab("market");
  
  // Highlight pill
  document.querySelectorAll(".produce-filter-btn").forEach(btn => {
    if (btn.dataset.crop === crop) {
      btn.className = "produce-filter-btn text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-700 text-white";
    } else {
      btn.className = "produce-filter-btn text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200";
    }
  });

  renderProduceLotsGrid(crop);
}

// Open Connect & Buy Direct Modal
function openBuyerConnectModal(produceId) {
  const produce = state.produceLots.find(p => p.id === produceId);
  if (!produce) return;

  state.selectedProduceForModal = produce;

  const details = document.getElementById("buyer-modal-details");
  if (details) {
    details.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-sm font-extrabold text-slate-900">${produce.cropTitle}</h4>
        <span class="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">₹${produce.directAskPrice}/kg</span>
      </div>
      <p class="text-xs text-slate-600">Farmer: <strong>${produce.farmerName}</strong> (${produce.village})</p>
      <p class="text-xs text-slate-500">Available Lot: <strong>${produce.quantity} kg</strong></p>
    `;
  }

  document.getElementById("buyer-order-qty").value = Math.min(250, produce.quantity);
  calculateBuyerOrderTotal();
  openModal("buyer-connect-modal");
}

function calculateBuyerOrderTotal() {
  const produce = state.selectedProduceForModal;
  if (!produce) return;

  const qty = parseFloat(document.getElementById("buyer-order-qty").value) || 0;
  const total = Math.round(qty * produce.directAskPrice);

  const totalEl = document.getElementById("buyer-order-total");
  if (totalEl) {
    totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
  }
}

function confirmBuyerPurchase() {
  const produce = state.selectedProduceForModal;
  if (!produce) return;

  const qty = parseFloat(document.getElementById("buyer-order-qty").value) || 0;
  const total = Math.round(qty * produce.directAskPrice);

  closeModal("buyer-connect-modal");
  showToast(`🤝 Direct Escrow order of ${qty} kg (₹${total.toLocaleString('en-IN')}) placed with ${produce.farmerName}! Zero commission applied.`, "success");
}

function directCallFarmer() {
  const produce = state.selectedProduceForModal;
  if (!produce) return;
  showToast(`📞 Connecting call to farmer ${produce.farmerName} (${produce.phone})...`, "info");
}

// Add Wage Entry Form Submit (Khata Module 4)
function handleKhataSubmit(event) {
  event.preventDefault();

  const worker = document.getElementById("khata-worker-input").value.trim();
  const task = document.getElementById("khata-task-select").value;
  const amount = parseFloat(document.getElementById("khata-amount-input").value) || 850;
  const mode = document.getElementById("khata-mode-select").value;

  const today = new Date().toISOString().split("T")[0];

  const newEntry = {
    id: "k_" + Date.now(),
    date: today,
    workerName: worker,
    task: task,
    amount: amount,
    mode: mode,
    status: mode === "Pending Balance" ? "Pending" : "Settled"
  };

  state.khataEntries.unshift(newEntry);
  renderKhataTable();

  document.getElementById("khata-add-form").reset();
  showToast(`✅ Wage entry of ₹${amount.toLocaleString('en-IN')} logged to Khata!`, "success");
}

// Export Khata CSV
function exportKhataCSV() {
  let csv = "Date,Worker/Crew,Task Completed,Payment Mode,Amount (INR),Status\n";
  state.khataEntries.forEach(e => {
    csv += `"${e.date}","${e.workerName}","${e.task}","${e.mode}",${e.amount},"${e.status}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `AgriConnect_Wage_Khata_${state.currentLocation.split('/')[0].trim()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("📄 Khata CSV statement downloaded successfully!", "success");
}

// ==========================================
// 7. MEMBERSHIP TIERS LOGIC (MODULE 5)
// ==========================================
function selectTier(tierName) {
  state.userTier = tierName;

  const headerBadge = document.getElementById("header-tier-badge");
  const btnBasic = document.getElementById("btn-tier-basic");
  const btnPro = document.getElementById("btn-tier-pro");
  const btnWholesale = document.getElementById("btn-tier-wholesale");

  // Reset button states
  if (btnBasic) {
    btnBasic.className = "w-full py-3 px-4 rounded-xl text-xs font-bold border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition";
    btnBasic.textContent = "Select Plan";
  }
  if (btnPro) {
    btnPro.className = "w-full py-3.5 px-4 rounded-xl text-sm font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 transition shadow-lg flex items-center justify-center space-x-2";
    btnPro.innerHTML = '<i class="fa-solid fa-bolt"></i> <span>⭐ Activate Pro (₹49/mo)</span>';
  }
  if (btnWholesale) {
    btnWholesale.className = "w-full py-3 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition shadow-sm";
    btnWholesale.textContent = "Activate Wholesale Pass (₹299/mo)";
  }

  if (tierName === "pro") {
    if (headerBadge) {
      headerBadge.className = "px-2.5 py-0.5 text-xs font-extrabold rounded-full bg-amber-400 text-emerald-950 shadow-md border border-amber-300";
      headerBadge.innerHTML = "👑 Krishi Pro Active";
    }
    if (btnPro) {
      btnPro.className = "w-full py-3.5 px-4 rounded-xl text-sm font-extrabold bg-emerald-700 text-white transition shadow-inner flex items-center justify-center space-x-2 border-2 border-amber-400";
      btnPro.innerHTML = '<i class="fa-solid fa-circle-check text-amber-300"></i> <span>Active Pro Plan (Subscribed)</span>';
    }

    // Expand GPS Radius Slider indicator to 30 km
    const tierIndicator = document.getElementById("radius-tier-indicator");
    if (tierIndicator) {
      tierIndicator.innerHTML = '<span class="text-amber-700 font-extrabold">👑 Pro Unlocked: Full 30 km Taluk Radius</span>';
    }

    showToast("👑 Krishi & Crew Pro Activated! Extended 30 km Taluk-wide discovery & zero crop commission unlocked.", "success");

  } else if (tierName === "wholesale") {
    if (headerBadge) {
      headerBadge.className = "px-2.5 py-0.5 text-xs font-extrabold rounded-full bg-slate-900 text-amber-300 shadow-md border border-amber-400/50";
      headerBadge.innerHTML = "🏛️ Wholesale Pass";
    }
    if (btnWholesale) {
      btnWholesale.className = "w-full py-3 px-4 rounded-xl text-xs font-bold bg-emerald-700 text-white transition shadow-inner";
      btnWholesale.textContent = "Active Wholesale Pass";
    }
    showToast("🏛️ FPO & Wholesale Pass Activated! Bulk crew booking and direct wholesale bidding enabled.", "success");
  } else {
    if (headerBadge) {
      headerBadge.className = "px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-800 text-amber-300 border border-amber-400/30";
      headerBadge.innerHTML = "🌾 Gram Basic";
    }
    if (btnBasic) {
      btnBasic.className = "w-full py-3 px-4 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 border-2 border-emerald-600";
      btnBasic.textContent = "Current Plan";
    }
    showToast("Switched to Gram Basic plan.", "info");
  }
}

// ==========================================
// 8. VOICE ASSISTANT INTERACTION
// ==========================================
function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  if (drawer) {
    drawer.classList.toggle("hidden");
  }
}

function toggleVoiceAssistant() {
  const banner = document.getElementById("voice-listening-banner");
  if (!banner) return;

  if (banner.classList.contains("hidden")) {
    banner.classList.remove("hidden");
    
    // Switch to workforce tab automatically
    switchTab("workforce");

    // Regional dialect transcripts per user language
    const transcripts = {
      kn: "ಬೆಳ್ತಂಗಡಿ ಹತ್ತಿರ ಅಡಿಕೆ ಕೊಯ್ಯುವ ತಂಡವನ್ನು ತೋರಿಸಿ...",
      hi: "बेलतंगडी के पास सुपारी कटाई वाली टीम चाहिए...",
      en: "Need an Arecanut harvesting crew near Beltangady..."
    };
    const activeText = transcripts[state.currentLang] || transcripts.en;

    const transcriptEl = document.getElementById("voice-transcript-text");
    if (transcriptEl) {
      transcriptEl.textContent = `"${activeText}"`;
    }

    // Automatically filter the directory for Arecanut crews near active location
    state.filters.skill = "arecanut";
    updateSkillFilterButtons();
    renderWorkersGrid();

    showToast(`🎙️ Voice Assistant Active: "${activeText}". Displaying matching crews.`, "info");

    // Optional: Real Web Speech API recognition if supported
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      try {
        const recognition = new SpeechRec();
        recognition.lang = state.currentLang === "kn" ? "kn-IN" : (state.currentLang === "hi" ? "hi-IN" : "en-IN");
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.onresult = (event) => {
          const spoken = event.results[0][0].transcript;
          if (transcriptEl) transcriptEl.textContent = `"${spoken}"`;
          state.filters.searchQuery = spoken;
          renderWorkersGrid();
          showToast(`🎙️ Voice Heard: "${spoken}"`, "success");
        };
        recognition.start();
      } catch (e) {
        // Fallback already handled
      }
    }
  } else {
    banner.classList.add("hidden");
  }
}

function closeVoiceBanner() {
  const banner = document.getElementById("voice-listening-banner");
  if (banner) banner.classList.add("hidden");
}

function triggerVoiceQuery(queryType) {
  switchTab("workforce");

  // Set skill filter
  state.filters.skill = queryType;
  updateSkillFilterButtons();

  // Update transcript text
  const transcript = document.getElementById("voice-transcript-text");
  const queryNames = {
    arecanut: { en: "Arecanut harvesting crew near Beltangady", kn: "ಬೆಳ್ತಂಗಡಿ ಹತ್ತಿರ ಅಡಿಕೆ ಕೊಯ್ಲು ತಂಡ", hi: "सुपारी कटाई टीम" },
    weeding: { en: "Weeding and grass clearing laborers", kn: "ಕಳೆ ಕತ್ತರಿಸುವ ಕಾರ್ಮಿಕರು", hi: "घास कटाई मजदूर" },
    mechanic: { en: "Pump and motor mechanic service", kn: "ಪಂಪ್ ಮತ್ತು ಮೋಟಾರ್ ಮೆಕ್ಯಾನಿಕ್", hi: "पंप मोटर मैकेनिक" }
  };

  const currentText = queryNames[queryType] ? (queryNames[queryType][state.currentLang] || queryNames[queryType].en) : queryType;
  if (transcript) {
    transcript.textContent = `"${currentText}"`;
  }

  renderWorkersGrid();
  showToast(`🎙️ Voice Recognized: "${currentText}". Directory filtered.`, "success");
}

// ==========================================
// 9. TAB SWITCHING & MULTILINGUAL I18N
// ==========================================
function switchTab(tabId) {
  state.activeTab = tabId;

  // Tabs content visibility
  const tabs = ["workforce", "market", "khata", "pricing"];
  tabs.forEach(t => {
    const pane = document.getElementById(`tab-content-${t}`);
    const navBtn = document.getElementById(`nav-tab-${t}`);

    if (pane) {
      if (t === tabId) {
        pane.classList.remove("hidden");
        pane.classList.add("block");
      } else {
        pane.classList.add("hidden");
        pane.classList.remove("block");
      }
    }

    if (navBtn) {
      if (t === tabId) {
        navBtn.className = "tab-btn px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all bg-emerald-700 text-white shadow-sm border border-emerald-500/40";
      } else {
        navBtn.className = "tab-btn px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 transition-all text-emerald-200 hover:text-white hover:bg-emerald-850";
      }
    }
  });

  // Update mobile bottom nav active classes
  const bottomNavIds = ["workforce", "market", "khata"];
  bottomNavIds.forEach(t => {
    const bBtn = document.getElementById(`bottom-nav-${t}`);
    if (bBtn) {
      if (t === tabId) {
        bBtn.className = "flex-1 py-1 text-amber-400 flex flex-col items-center";
      } else {
        bBtn.className = "flex-1 py-1 text-emerald-300 hover:text-white flex flex-col items-center";
      }
    }
  });

  // Re-render relevant view
  if (tabId === "workforce") renderWorkersGrid();
  if (tabId === "market") {
    renderMandiCards();
    renderProduceLotsGrid();
  }
  if (tabId === "khata") renderKhataTable();
}

function updateSkillFilterButtons() {
  document.querySelectorAll(".skill-filter-btn").forEach(btn => {
    if (btn.dataset.skill === state.filters.skill) {
      btn.className = "skill-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-emerald-700 text-white shadow-sm";
    } else {
      btn.className = "skill-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-slate-100 text-slate-700 hover:bg-slate-200";
    }
  });
}

// ==========================================
// NOTIFICATIONS SYSTEM (REAL-TIME AREA ALERTS)
// ==========================================
function renderNotifications() {
  const container = document.getElementById("notifications-list");
  const unreadPill = document.getElementById("notif-modal-unread-pill");
  const headerBadge = document.getElementById("notif-badge-count");
  const mobileHeaderBadge = document.getElementById("mobile-header-notif-badge");
  const bottomBadge = document.getElementById("bottom-notif-badge");
  const areaLabel = document.getElementById("notif-area-label");

  if (areaLabel) {
    areaLabel.textContent = state.currentLocation;
  }

  const unreadCount = state.notifications.filter(n => !n.read).length;

  // Update badge counters
  [headerBadge, mobileHeaderBadge, bottomBadge].forEach(b => {
    if (b) {
      if (unreadCount > 0) {
        b.textContent = unreadCount;
        b.style.display = "flex";
      } else {
        b.style.display = "none";
      }
    }
  });

  if (unreadPill) {
    unreadPill.textContent = unreadCount > 0 ? `${unreadCount} New` : "All Read";
    unreadPill.className = unreadCount > 0 
      ? "text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200"
      : "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200";
  }

  if (!container) return;

  if (state.notifications.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-400">
        <i class="fa-solid fa-bell-slash text-2xl mb-2 text-slate-300"></i>
        <p class="text-xs font-semibold">No notifications right now.</p>
      </div>
    `;
    return;
  }

  let html = "";
  state.notifications.forEach(n => {
    const isUnread = !n.read;
    const title = state.currentLang === "kn" ? (n.titleKn || n.title) : (state.currentLang === "hi" ? (n.titleHi || n.title) : n.title);
    const message = state.currentLang === "kn" ? (n.messageKn || n.message) : (state.currentLang === "hi" ? (n.messageHi || n.message) : n.message);

    html += `
      <div onclick="handleNotificationClick('${n.id}')" class="p-3.5 rounded-2xl border ${isUnread ? 'bg-amber-50/70 border-amber-300 shadow-sm' : 'bg-slate-50 border-slate-200'} cursor-pointer hover:bg-white transition flex items-start space-x-3">
        <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
          <i class="fa-solid ${n.icon} ${n.iconColor} text-base"></i>
        </div>
        <div class="flex-grow min-w-0">
          <div class="flex items-center justify-between gap-1 mb-0.5">
            <h4 class="text-xs font-extrabold text-slate-900 truncate">${title}</h4>
            <span class="text-[10px] font-semibold text-slate-400 shrink-0">${n.timestamp}</span>
          </div>
          <p class="text-xs text-slate-600 leading-snug">${message}</p>
          ${isUnread ? '<span class="inline-block mt-1 text-[9px] font-black uppercase text-red-600 bg-red-50 px-1.5 py-0.2 rounded border border-red-200">Unread</span>' : ''}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function markAllNotificationsRead() {
  state.notifications.forEach(n => n.read = true);
  renderNotifications();
  showToast("✅ All notifications marked as read.", "info");
}

function clearAllNotifications() {
  state.notifications = [];
  renderNotifications();
  showToast("Notifications cleared.", "info");
}

function handleNotificationClick(notifId) {
  const notif = state.notifications.find(n => n.id === notifId);
  if (notif) {
    notif.read = true;
    renderNotifications();
    closeModal("notifications-modal");

    if (notif.workerId) {
      switchTab("workforce");
      const worker = state.workers.find(w => w.id === notif.workerId);
      if (worker) {
        state.filters.searchQuery = worker.name;
        const searchInput = document.getElementById("worker-search-input");
        if (searchInput) searchInput.value = worker.name;
        renderWorkersGrid();
        showToast(`📍 Showing registered worker: ${worker.name}`, "success");
      }
    } else if (notif.type === "mandi_spike") {
      switchTab("market");
    }
  }
}

// ==========================================
// ROLE SELECTION & USER PROFILE SYSTEM
// ==========================================
function toggleUserRole() {
  const newRole = state.currentUser.role === "farmer" ? "labourer" : "farmer";
  setRole(newRole);
}

function setRole(role) {
  state.currentUser.role = role;

  if (role === "labourer") {
    state.currentUser.name = state.demoAccounts.labourer.name;
    state.currentUser.nameKn = state.demoAccounts.labourer.nameKn;
    state.currentUser.nameHi = state.demoAccounts.labourer.nameHi;
    state.currentUser.avatar = "AG";
    state.currentUser.phone = state.demoAccounts.labourer.phone;
    state.currentUser.dailyWage = state.demoAccounts.labourer.dailyWage;
    state.currentUser.availability = "available";
  } else {
    state.currentUser.name = state.demoAccounts.farmer.name;
    state.currentUser.nameKn = state.demoAccounts.farmer.nameKn;
    state.currentUser.nameHi = state.demoAccounts.farmer.nameHi;
    state.currentUser.avatar = "MB";
    state.currentUser.phone = state.demoAccounts.farmer.phone;
  }

  updateUserUI();

  if (role === "labourer") {
    showToast("👷 Switched to Labourer Mode! Crew Leader dashboard active. Set your daily availability & wage rate.", "success");
  } else {
    showToast("👨‍🌾 Switched to Farmer Mode! Discover local crews and Mandi prices with zero broker commission.", "success");
  }
}

function updateUserUI() {
  const u = state.currentUser;
  const isFarmer = u.role === "farmer";

  // Header updates
  const headerName = document.getElementById("header-user-name");
  const headerRole = document.getElementById("header-user-role-badge");
  const headerAvatar = document.getElementById("header-avatar-circle");
  const mobileAvatar = document.getElementById("mobile-header-avatar");
  const drawerAvatar = document.getElementById("drawer-avatar");
  const drawerName = document.getElementById("drawer-user-name");
  const drawerRole = document.getElementById("drawer-user-role");
  const bottomAvatar = document.getElementById("bottom-nav-avatar");

  const roleText = isFarmer ? "👨‍🌾 Farmer" : "👷 Labourer";
  const roleTextKn = isFarmer ? "👨‍🌾 ರೈತ" : "👷 ಕಾರ್ಮಿಕ";
  const roleTextHi = isFarmer ? "👨‍🌾 किसान" : "👷 मजदूर";
  const displayRole = state.currentLang === "kn" ? roleTextKn : (state.currentLang === "hi" ? roleTextHi : roleText);

  const displayName = state.currentLang === "kn" ? (u.nameKn || u.name) : (state.currentLang === "hi" ? (u.nameHi || u.name) : u.name);

  if (headerName) headerName.textContent = displayName;
  if (headerRole) headerRole.textContent = displayRole;
  if (headerAvatar) headerAvatar.textContent = u.avatar;
  if (mobileAvatar) mobileAvatar.textContent = u.avatar;
  if (drawerAvatar) drawerAvatar.textContent = u.avatar;
  if (drawerName) drawerName.textContent = displayName;
  if (drawerRole) drawerRole.textContent = displayRole;
  if (bottomAvatar) bottomAvatar.textContent = u.avatar;

  // Role Switcher buttons text
  const switchBtnText = document.getElementById("header-role-switch-text");
  const drawerSwitchText = document.getElementById("drawer-role-switch-text");
  const profileSwitchText = document.getElementById("profile-switch-btn-text");

  const targetRoleText = isFarmer ? "Switch to 👷 Labourer" : "Switch to 👨‍🌾 Farmer";
  const targetRoleTextKn = isFarmer ? "👷 ಕಾರ್ಮಿಕ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ" : "👨‍🌾 ರೈತ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ";
  const targetRoleTextHi = isFarmer ? "👷 मजदूर मोड में बदलें" : "👨‍🌾 किसान मोड में बदलें";
  const finalSwitchLabel = state.currentLang === "kn" ? targetRoleTextKn : (state.currentLang === "hi" ? targetRoleTextHi : targetRoleText);

  if (switchBtnText) switchBtnText.textContent = finalSwitchLabel;
  if (drawerSwitchText) drawerSwitchText.textContent = finalSwitchLabel;
  if (profileSwitchText) profileSwitchText.textContent = finalSwitchLabel;

  // Labourer Work Hub banner in Tab 1
  const labourHub = document.getElementById("labourer-work-hub");
  if (labourHub) {
    if (!isFarmer) {
      labourHub.classList.remove("hidden");
      const hubTitle = document.getElementById("hub-worker-title");
      const hubRate = document.getElementById("hub-daily-rate");
      const hubAvatar = document.getElementById("hub-avatar");
      const hubPanchayat = document.getElementById("hub-panchayat-pill");

      if (hubTitle) hubTitle.textContent = u.crewName || u.name;
      if (hubRate) hubRate.textContent = `₹${u.dailyWage.toLocaleString('en-IN')}`;
      if (hubAvatar) hubAvatar.textContent = u.avatar;
      if (hubPanchayat) hubPanchayat.textContent = `📍 ${u.panchayat}`;
      updateLabourerAvailabilityButtons(u.availability || "available");
    } else {
      labourHub.classList.add("hidden");
    }
  }

  // Profile Modal Updates
  const modalAvatar = document.getElementById("profile-modal-avatar");
  const modalName = document.getElementById("profile-modal-name");
  const modalRole = document.getElementById("profile-modal-role-pill");
  const modalPhone = document.getElementById("profile-modal-phone");
  const modalPanchayat = document.getElementById("profile-modal-panchayat");
  const statsContainer = document.getElementById("profile-stats-container");
  const labourerSection = document.getElementById("profile-labourer-section");

  if (modalAvatar) modalAvatar.textContent = u.avatar;
  if (modalName) modalName.textContent = displayName;
  if (modalRole) modalRole.textContent = displayRole;
  if (modalPhone) modalPhone.textContent = u.phone;
  if (modalPanchayat) modalPanchayat.textContent = `📍 ${u.panchayat}`;

  if (statsContainer) {
    if (isFarmer) {
      statsContainer.innerHTML = `
        <div class="bg-emerald-50 rounded-xl p-2.5 border border-emerald-200 text-center">
          <span class="block text-[10px] font-bold text-emerald-800 uppercase">Crews Booked</span>
          <span class="text-base font-black text-emerald-950">${u.stats.bookingsMade || 4}</span>
        </div>
        <div class="bg-emerald-50 rounded-xl p-2.5 border border-emerald-200 text-center">
          <span class="block text-[10px] font-bold text-emerald-800 uppercase">Khata Settled</span>
          <span class="text-base font-black text-emerald-950">₹${(u.stats.totalPaid || 7200).toLocaleString('en-IN')}</span>
        </div>
        <div class="bg-emerald-50 rounded-xl p-2.5 border border-emerald-200 text-center">
          <span class="block text-[10px] font-bold text-emerald-800 uppercase">Lots Listed</span>
          <span class="text-base font-black text-emerald-950">${u.stats.lotsListed || 2}</span>
        </div>
      `;
    } else {
      statsContainer.innerHTML = `
        <div class="bg-amber-50 rounded-xl p-2.5 border border-amber-200 text-center">
          <span class="block text-[10px] font-bold text-amber-800 uppercase">Jobs Done</span>
          <span class="text-base font-black text-amber-950">${u.stats.jobsDone || 38}</span>
        </div>
        <div class="bg-amber-50 rounded-xl p-2.5 border border-amber-200 text-center">
          <span class="block text-[10px] font-bold text-amber-800 uppercase">Rating</span>
          <span class="text-base font-black text-amber-950">${u.stats.rating || 4.9} ⭐</span>
        </div>
        <div class="bg-amber-50 rounded-xl p-2.5 border border-amber-200 text-center">
          <span class="block text-[10px] font-bold text-amber-800 uppercase">Daily Rate</span>
          <span class="text-base font-black text-amber-950">₹${(u.dailyWage || 3600).toLocaleString('en-IN')}</span>
        </div>
      `;
    }
  }

  if (labourerSection) {
    if (!isFarmer) {
      labourerSection.classList.remove("hidden");
      const wageInput = document.getElementById("profile-wage-input");
      if (wageInput) wageInput.value = u.dailyWage;
    } else {
      labourerSection.classList.add("hidden");
    }
  }

  // Pre-fill edit inputs
  const editName = document.getElementById("profile-edit-name");
  const editPhone = document.getElementById("profile-edit-phone");
  const editPanchayat = document.getElementById("profile-edit-panchayat");
  if (editName) editName.value = u.name;
  if (editPhone) editPhone.value = u.phone;
  if (editPanchayat) editPanchayat.value = u.panchayat;
}

function selectLoginRole(role) {
  document.getElementById("login-selected-role").value = role;

  const cardFarmer = document.getElementById("role-card-farmer");
  const cardLabourer = document.getElementById("role-card-labourer");
  const checkFarmer = document.getElementById("role-check-farmer");
  const checkLabourer = document.getElementById("role-check-labourer");

  if (role === "farmer") {
    if (cardFarmer) cardFarmer.className = "role-radio-card active p-3.5 rounded-2xl border-2 border-emerald-600 bg-emerald-50/60 cursor-pointer transition hover:bg-emerald-50";
    if (cardLabourer) cardLabourer.className = "role-radio-card p-3.5 rounded-2xl border-2 border-slate-200 bg-slate-50 cursor-pointer transition hover:bg-slate-100";
    if (checkFarmer) {
      checkFarmer.className = "w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]";
    }
    if (checkLabourer) {
      checkLabourer.className = "w-5 h-5 rounded-full bg-slate-300 text-transparent flex items-center justify-center text-[10px]";
    }
  } else {
    if (cardFarmer) cardFarmer.className = "role-radio-card p-3.5 rounded-2xl border-2 border-slate-200 bg-slate-50 cursor-pointer transition hover:bg-slate-100";
    if (cardLabourer) cardLabourer.className = "role-radio-card active p-3.5 rounded-2xl border-2 border-amber-500 bg-amber-50/60 cursor-pointer transition hover:bg-amber-50";
    if (checkFarmer) {
      checkFarmer.className = "w-5 h-5 rounded-full bg-slate-300 text-transparent flex items-center justify-center text-[10px]";
    }
    if (checkLabourer) {
      checkLabourer.className = "w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px]";
    }
  }
}

function loginDemoAccount(role) {
  setRole(role);
  closeModal("login-modal");
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("login-name-input").value.trim();
  const phone = document.getElementById("login-phone-input").value.trim();
  const panchayat = document.getElementById("login-panchayat-select").value;
  const role = document.getElementById("login-selected-role").value;

  state.currentUser.name = name;
  state.currentUser.phone = phone;
  state.currentUser.panchayat = panchayat;
  state.currentUser.role = role;
  state.currentUser.avatar = name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase() || (role === "farmer" ? "FR" : "LB");

  updateUserUI();
  closeModal("login-modal");
  showToast(`✅ Welcome, ${name}! Logged in as ${role === 'farmer' ? '👨‍🌾 Farmer' : '👷 Labourer'}.`, "success");
}

function handleProfileUpdate(event) {
  event.preventDefault();
  const name = document.getElementById("profile-edit-name").value.trim();
  const phone = document.getElementById("profile-edit-phone").value.trim();
  const panchayat = document.getElementById("profile-edit-panchayat").value;

  state.currentUser.name = name;
  state.currentUser.phone = phone;
  state.currentUser.panchayat = panchayat;
  state.currentUser.avatar = name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase() || state.currentUser.avatar;

  updateUserUI();
  closeModal("profile-modal");
  showToast("✅ Profile updated successfully!", "success");
}

function logoutUser() {
  closeModal("profile-modal");
  openModal("login-modal");
  showToast("Logged out. Choose a role or log in with OTP.", "info");
}

function setLabourerAvailability(status) {
  state.currentUser.availability = status;
  updateLabourerAvailabilityButtons(status);
  
  const statusLabels = {
    available: "🟢 Available Today",
    partial: "🟡 Booked Tomorrow",
    busy: "🔴 Busy / On Leave"
  };
  showToast(`Work Status updated to: ${statusLabels[status] || status}`, "success");
}

function updateLabourerAvailabilityButtons(status) {
  const btnAvail = document.getElementById("status-btn-available");
  const btnPartial = document.getElementById("status-btn-partial");
  const btnBusy = document.getElementById("status-btn-busy");

  if (!btnAvail) return;

  [btnAvail, btnPartial, btnBusy].forEach(b => {
    if (b) b.className = "px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition";
  });

  if (status === "available" && btnAvail) btnAvail.className = "px-2.5 py-1 rounded-lg bg-emerald-600 text-white shadow-sm transition";
  if (status === "partial" && btnPartial) btnPartial.className = "px-2.5 py-1 rounded-lg bg-amber-500 text-emerald-950 font-black shadow-sm transition";
  if (status === "busy" && btnBusy) btnBusy.className = "px-2.5 py-1 rounded-lg bg-red-600 text-white shadow-sm transition";
}

function updateLabourerWage() {
  const wage = parseFloat(document.getElementById("profile-wage-input").value) || 3600;
  state.currentUser.dailyWage = wage;
  const hubRate = document.getElementById("hub-daily-rate");
  if (hubRate) hubRate.textContent = `₹${wage.toLocaleString('en-IN')}`;
  updateUserUI();
  showToast(`💰 Daily wage updated to ₹${wage.toLocaleString('en-IN')}!`, "success");
}

function setLanguage(lang) {
  state.currentLang = lang;
  const dict = i18nData[lang] || i18nData.en;

  // Update text nodes with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update language buttons styling
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.className = "lang-btn px-2.5 py-1 text-xs font-bold rounded-lg transition-colors bg-amber-400 text-emerald-950 shadow-sm";
    } else {
      btn.className = "lang-btn px-2.5 py-1 text-xs font-bold rounded-lg transition-colors text-emerald-200 hover:text-white";
    }
  });

  // Refresh grids & dynamic UI
  updateUserUI();
  renderNotifications();
  renderWorkersGrid();
  renderMandiCards();
  renderProduceLotsGrid();

  const langNames = { en: "English", kn: "ಕನ್ನಡ (Kannada)", hi: "हिंदी (Hindi)" };
  showToast(`🌐 Language changed to ${langNames[lang] || lang}`, "info");
}

// Reset Worker Filters
function resetWorkerFilters() {
  state.filters.skill = "all";
  state.filters.hiringMode = "all";
  state.filters.radiusKm = 25;
  state.filters.searchQuery = "";
  state.filters.sortBy = "smart_rank";

  const searchInput = document.getElementById("worker-search-input");
  if (searchInput) searchInput.value = "";

  const radiusSlider = document.getElementById("radius-slider");
  if (radiusSlider) radiusSlider.value = 25;

  const radiusDisplay = document.getElementById("radius-val-display");
  if (radiusDisplay) radiusDisplay.textContent = "25 km (Taluk Wide)";

  const sortSelect = document.getElementById("worker-sort-select");
  if (sortSelect) sortSelect.value = "smart_rank";

  // Reset segmented buttons
  document.querySelectorAll(".crew-mode-btn").forEach(btn => {
    if (btn.dataset.mode === "all") {
      btn.className = "crew-mode-btn px-3 py-1.5 rounded-lg transition bg-white text-emerald-900 shadow-sm";
    } else {
      btn.className = "crew-mode-btn px-3 py-1.5 rounded-lg transition text-slate-600 hover:text-emerald-900";
    }
  });

  updateSkillFilterButtons();
  renderWorkersGrid();
  showToast("Filters reset to default radius (25 km).", "info");
}

// ==========================================
// 10. MODAL UTILITIES
// ==========================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.remove("hidden");
  setTimeout(() => {
    const content = modal.querySelector(".modal-content");
    if (content) {
      content.classList.remove("scale-95", "opacity-0");
      content.classList.add("scale-100", "opacity-100");
    }
  }, 10);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const content = modal.querySelector(".modal-content");
  if (content) {
    content.classList.add("scale-95", "opacity-0");
    content.classList.remove("scale-100", "opacity-100");
  }
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 200);
}

// Close modals when clicking backdrop
document.addEventListener("click", e => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.add("hidden");
  }
});

// ==========================================
// 11. TOAST NOTIFICATION ENGINE
// ==========================================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-item flex items-center justify-between gap-3 px-4 py-3 rounded-2xl shadow-xl border text-xs font-bold max-w-sm w-full";

  let bgClasses = "bg-emerald-900 text-white border-emerald-700";
  let icon = '<i class="fa-solid fa-circle-check text-amber-400 text-base"></i>';

  if (type === "error") {
    bgClasses = "bg-red-900 text-white border-red-700";
    icon = '<i class="fa-solid fa-triangle-exclamation text-amber-300 text-base"></i>';
  } else if (type === "info") {
    bgClasses = "bg-slate-900 text-white border-slate-700";
    icon = '<i class="fa-solid fa-circle-info text-blue-400 text-base"></i>';
  }

  toast.className += ` ${bgClasses}`;
  toast.innerHTML = `
    <div class="flex items-center gap-2.5">
      ${icon}
      <span>${message}</span>
    </div>
    <button class="text-white/70 hover:text-white text-xs p-1">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  const closeBtn = toast.querySelector("button");
  closeBtn.addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  });

  container.appendChild(toast);

  // Trigger enter animation
  setTimeout(() => toast.classList.add("show"), 10);

  // Auto-dismiss after 4 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
}

function triggerCallToast(workerName, phone) {
  showToast(`📞 Dialing ${workerName} at ${phone}...`, "info");
}

// ==========================================
// 12. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Location Selector Change (Recalculates proximity and re-ranks)
  const locSelect = document.getElementById("location-select");
  const locSelectMobile = document.getElementById("location-select-mobile");

  function handleLocationChange(newLoc) {
    state.currentLocation = newLoc;
    if (locSelect) locSelect.value = newLoc;
    if (locSelectMobile) locSelectMobile.value = newLoc;

    calculateWorkerScores();
    renderWorkersGrid();
    renderProduceLotsGrid();

    showToast(`📍 Location updated to ${newLoc}. Recalculated worker proximities and Smart Rank placements!`, "success");
  }

  if (locSelect) {
    locSelect.addEventListener("change", e => handleLocationChange(e.target.value));
  }
  if (locSelectMobile) {
    locSelectMobile.addEventListener("change", e => handleLocationChange(e.target.value));
  }

  // 2. Multilingual Switcher Buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // 3. Voice Search Assistant Buttons
  const voiceBtn = document.getElementById("voice-assistant-btn");
  const voiceBtnMobile = document.getElementById("voice-assistant-mobile-btn");
  if (voiceBtn) voiceBtn.addEventListener("click", toggleVoiceAssistant);
  if (voiceBtnMobile) voiceBtnMobile.addEventListener("click", toggleVoiceAssistant);

  // 4. Hiring Mode Segmented Toggle (All vs Group Crews vs Single)
  document.querySelectorAll(".crew-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.filters.hiringMode = btn.dataset.mode;
      document.querySelectorAll(".crew-mode-btn").forEach(b => {
        b.className = "crew-mode-btn px-3 py-1.5 rounded-lg transition text-slate-600 hover:text-emerald-900";
      });
      btn.className = "crew-mode-btn px-3 py-1.5 rounded-lg transition bg-white text-emerald-900 shadow-sm";
      renderWorkersGrid();
    });
  });

  // 5. 365-Day Task & Skill Filter Buttons
  document.querySelectorAll(".skill-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.filters.skill = btn.dataset.skill;
      updateSkillFilterButtons();
      renderWorkersGrid();
    });
  });

  // 6. GPS Radius Scanner Slider
  const radiusSlider = document.getElementById("radius-slider");
  const radiusDisplay = document.getElementById("radius-val-display");

  if (radiusSlider) {
    radiusSlider.addEventListener("input", e => {
      const val = parseInt(e.target.value);
      state.filters.radiusKm = val;
      if (radiusDisplay) {
        radiusDisplay.textContent = `${val} km (${val <= 5 ? 'Same Village' : (val <= 15 ? 'Taluk Wide' : 'District Wide')})`;
      }
      renderWorkersGrid();
    });
  }

  // 7. Sort By Dropdown
  const sortSelect = document.getElementById("worker-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      state.filters.sortBy = e.target.value;
      renderWorkersGrid();
    });
  }

  // 8. Search Input (Debounced)
  const searchInput = document.getElementById("worker-search-input");
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", e => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.filters.searchQuery = e.target.value;
        renderWorkersGrid();
      }, 200);
    });
  }

  // 9. Interactive Margin Calculator in Tab 2
  const calcCrop = document.getElementById("calc-crop-select");
  const calcSlider = document.getElementById("calc-qty-slider");
  const calcQtyLabel = document.getElementById("calc-qty-label");
  const calcExtraGain = document.getElementById("calc-extra-gain");

  function updateMarginCalc() {
    if (!calcCrop || !calcSlider || !calcExtraGain) return;
    const cropKey = calcCrop.value;
    const qty = parseInt(calcSlider.value);
    if (calcQtyLabel) calcQtyLabel.textContent = `${qty} kg`;

    const gainRates = { arecanut: 30, pepper: 38, coconut: 13, banana: 5 };
    const rate = gainRates[cropKey] || 30;
    const extra = rate * qty;
    calcExtraGain.textContent = `+₹${extra.toLocaleString('en-IN')}`;
  }

  if (calcCrop) calcCrop.addEventListener("change", updateMarginCalc);
  if (calcSlider) calcSlider.addEventListener("input", updateMarginCalc);

  // 10. Produce Crop Filter Pills in Tab 2
  document.querySelectorAll(".produce-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filterProduceByCrop(btn.dataset.crop);
    });
  });

  // 11. Khata Table Filter Tabs in Tab 3
  document.querySelectorAll(".khata-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".khata-filter-btn").forEach(b => {
        b.className = "khata-filter-btn px-3 py-1 rounded-lg text-slate-600 hover:text-emerald-900";
      });
      btn.className = "khata-filter-btn px-3 py-1 rounded-lg bg-white text-emerald-900 shadow-sm";
      renderKhataTable(btn.dataset.filter);
    });
  });

  // 12. Mobile Menu Button Listener
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  }

  // Initial renders
  updateUserUI();
  renderNotifications();
  renderWorkersGrid();
  renderMandiCards();
  renderProduceLotsGrid();
  renderKhataTable();
});
