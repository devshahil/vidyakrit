import React from 'react';

export const ErpSvg = () => (
  <svg width="100%" height="100%" viewBox="0 0 1000 700" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: 'Inter, sans-serif' }}>
    <defs>
      <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
        <feDropShadow dx="0" dy="4" stdDeviation="12" floodOpacity="0.05" />
      </filter>
      <linearGradient id="sidebarGrad" x1="0" y1="0" x2="0" y2="700">
        <stop offset="0%" stopColor="#1E2024" />
        <stop offset="100%" stopColor="#141517" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="1000" height="700" fill="#F8FAFC" />

    {/* Sidebar */}
    <rect width="220" height="700" fill="url(#sidebarGrad)" />
    <text x="50" y="45" fill="white" fontSize="20" fontWeight="bold">Vidyakrit</text>
    <path d="M 25 30 L 35 30 L 35 40 Z" fill="#3B82F6" />
    <text x="50" y="65" fill="#9CA3AF" fontSize="10">College of Professional Ed.</text>
    
    <text x="25" y="110" fill="#6B7280" fontSize="10" fontWeight="bold" letterSpacing="1">MAIN</text>
    
    {/* Active Menu Item */}
    <rect x="15" y="125" width="190" height="40" rx="8" fill="#252A31" />
    <rect x="15" y="125" width="4" height="40" rx="2" fill="#3B82F6" />
    <text x="45" y="150" fill="#3B82F6" fontSize="14" fontWeight="600">Dashboard</text>
    
    {/* Other Menu Items */}
    <text x="45" y="195" fill="#9CA3AF" fontSize="14">Students</text>
    <text x="45" y="240" fill="#9CA3AF" fontSize="14">Collect Fee</text>
    <text x="45" y="285" fill="#9CA3AF" fontSize="14">Payments</text>
    <text x="45" y="330" fill="#9CA3AF" fontSize="14">Attendance</text>
    <text x="45" y="375" fill="#9CA3AF" fontSize="14">Defaulters</text>
    <text x="45" y="420" fill="#9CA3AF" fontSize="14">Expenses</text>
    
    {/* Top Navbar */}
    <rect x="220" y="0" width="780" height="60" fill="white" filter="url(#shadow)" />
    <rect x="250" y="15" width="300" height="30" rx="15" fill="#F3F4F6" />
    <circle cx="265" cy="30" r="5" stroke="#9CA3AF" strokeWidth="2" />
    <line x1="269" y1="34" x2="274" y2="39" stroke="#9CA3AF" strokeWidth="2" />
    <text x="285" y="34" fill="#9CA3AF" fontSize="12">Search students...</text>
    
    <rect x="910" y="15" width="70" height="30" rx="15" stroke="#E5E7EB" fill="white" />
    <text x="922" y="34" fill="#374151" fontSize="12">Sign Out</text>

    {/* Main Content Area */}
    <text x="250" y="110" fill="#111827" fontSize="24" fontWeight="bold">Dashboard</text>
    <text x="250" y="130" fill="#6B7280" fontSize="12">Financial overview — June 2026</text>

    <rect x="800" y="90" width="90" height="30" rx="6" stroke="#E5E7EB" fill="white" />
    <text x="810" y="110" fill="#374151" fontSize="12">June 2026 ▾</text>
    <rect x="900" y="90" width="80" height="30" rx="15" fill="#2563EB" />
    <text x="912" y="110" fill="white" fontSize="12" fontWeight="500">+ Collect Fee</text>

    {/* Main Black Card */}
    <rect x="250" y="160" width="730" height="120" rx="16" fill="#18181B" filter="url(#shadow)" />
    <text x="280" y="195" fill="#9CA3AF" fontSize="10" fontWeight="bold" letterSpacing="1">TOTAL COLLECTIONS · JUNE 2026</text>
    <text x="280" y="235" fill="white" fontSize="36" fontWeight="bold">₹1,38,524</text>
    <text x="280" y="255" fill="#A1A1AA" fontSize="12">Revenue received this month</text>

    <text x="680" y="215" fill="#22C55E" fontSize="18" fontWeight="bold">₹0</text>
    <text x="680" y="235" fill="#A1A1AA" fontSize="10">Today's Collection</text>

    <text x="780" y="215" fill="#EF4444" fontSize="18" fontWeight="bold">₹54,09,599</text>
    <text x="780" y="235" fill="#A1A1AA" fontSize="10">Month Pending</text>

    <text x="890" y="215" fill="#3B82F6" fontSize="18" fontWeight="bold">₹1,38,524</text>
    <text x="890" y="235" fill="#A1A1AA" fontSize="10">Net Balance</text>

    {/* 4 Stats Cards */}
    <g transform="translate(250, 310)">
      <rect width="170" height="90" rx="12" fill="white" filter="url(#shadow)" />
      <text x="20" y="30" fill="#6B7280" fontSize="10" fontWeight="bold" letterSpacing="1">TOTAL PENDING</text>
      <text x="20" y="55" fill="#EF4444" fontSize="20" fontWeight="bold">₹1,32,35,446</text>
      <text x="20" y="75" fill="#9CA3AF" fontSize="10">Outstanding dues</text>

      <rect x="185" width="170" height="90" rx="12" fill="white" filter="url(#shadow)" />
      <text x="205" y="30" fill="#6B7280" fontSize="10" fontWeight="bold" letterSpacing="1">MONTH EXPENSES</text>
      <text x="205" y="55" fill="#111827" fontSize="20" fontWeight="bold">₹0</text>
      <text x="205" y="75" fill="#9CA3AF" fontSize="10">Recorded this month</text>

      <rect x="370" width="170" height="90" rx="12" fill="white" filter="url(#shadow)" />
      <text x="390" y="30" fill="#6B7280" fontSize="10" fontWeight="bold" letterSpacing="1">TOTAL STUDENTS</text>
      <text x="390" y="55" fill="#111827" fontSize="20" fontWeight="bold">2596</text>
      <text x="390" y="75" fill="#9CA3AF" fontSize="10">Enrolled students</text>

      <rect x="555" width="175" height="90" rx="12" fill="white" filter="url(#shadow)" />
      <text x="575" y="30" fill="#6B7280" fontSize="10" fontWeight="bold" letterSpacing="1">ACTIVE CLASSES</text>
      <text x="575" y="55" fill="#111827" fontSize="20" fontWeight="bold">31</text>
      <text x="575" y="75" fill="#9CA3AF" fontSize="10">Running classes</text>
    </g>

    {/* Quick Actions */}
    <g transform="translate(250, 430)">
      <rect width="355" height="230" rx="12" fill="white" filter="url(#shadow)" />
      <text x="20" y="30" fill="#6B7280" fontSize="10" fontWeight="bold" letterSpacing="1">QUICK ACTIONS</text>
      
      <rect x="20" y="50" width="150" height="70" rx="8" fill="#EFF6FF" />
      <text x="35" y="100" fill="#2563EB" fontSize="14" fontWeight="600">Collect Fee</text>
      
      <rect x="185" y="50" width="150" height="70" rx="8" fill="#F0F9FF" />
      <text x="200" y="100" fill="#0369A1" fontSize="14" fontWeight="600">View Students</text>
      
      <rect x="20" y="135" width="150" height="70" rx="8" fill="#F0FDF4" />
      <text x="35" y="185" fill="#16A34A" fontSize="14" fontWeight="600">Mark Attendance</text>
      
      <rect x="185" y="135" width="150" height="70" rx="8" fill="#FFFBEB" />
      <text x="200" y="185" fill="#D97706" fontSize="14" fontWeight="600">Reports</text>
    </g>

    {/* Staff Salary */}
    <g transform="translate(625, 430)">
      <rect width="355" height="230" rx="12" fill="white" filter="url(#shadow)" />
      <text x="20" y="30" fill="#6B7280" fontSize="10" fontWeight="bold" letterSpacing="1">STAFF SALARY · 2026-06</text>
      
      <text x="20" y="70" fill="#374151" fontSize="14">Total Bill</text>
      <text x="335" y="70" fill="#111827" fontSize="14" fontWeight="bold" textAnchor="end">₹2,12,367</text>
      <line x1="20" y1="85" x2="335" y2="85" stroke="#F3F4F6" strokeWidth="1" />
      
      <text x="20" y="115" fill="#374151" fontSize="14">Paid (5)</text>
      <text x="335" y="115" fill="#22C55E" fontSize="14" fontWeight="bold" textAnchor="end">₹15,000</text>
      <line x1="20" y1="130" x2="335" y2="130" stroke="#F3F4F6" strokeWidth="1" />
      
      <text x="20" y="160" fill="#374151" fontSize="14">Pending (7)</text>
      <text x="335" y="160" fill="#EF4444" fontSize="14" fontWeight="bold" textAnchor="end">₹1,97,367</text>
      
      <text x="20" y="200" fill="#9CA3AF" fontSize="12">Payment Progress</text>
      <text x="335" y="200" fill="#22C55E" fontSize="12" fontWeight="bold" textAnchor="end">7%</text>
      <rect x="20" y="210" width="315" height="6" rx="3" fill="#F3F4F6" />
      <rect x="20" y="210" width="22" height="6" rx="3" fill="#22C55E" />
    </g>
  </svg>
);

export const AttendifySvg = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: 'Inter, sans-serif', maxWidth: '400px', margin: '0 auto', display: 'block' }}>
    <defs>
      <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" floodOpacity="0.04" />
      </filter>
      <linearGradient id="headerGrad" x1="0" y1="0" x2="400" y2="220">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    
    <rect width="400" height="800" fill="#F8FAFC" rx="32" />
    
    {/* Top App Bar */}
    <rect x="0" y="0" width="400" height="80" fill="#F8FAFC" rx="32" />
    <circle cx="40" cy="40" r="16" fill="#4F46E5" />
    <path d="M40 32C37.8 32 36 33.8 36 36C36 38.2 37.8 40 40 40C42.2 40 44 38.2 44 36C44 33.8 42.2 32 40 32ZM34 46V48H46V46C46 42 40 41 40 41C40 41 34 42 34 46Z" fill="white" />
    <text x="70" y="35" fill="#4F46E5" fontSize="16" fontWeight="600">Attendify</text>
    <text x="70" y="52" fill="#9CA3AF" fontSize="12">Hello, Teacher</text>
    <rect x="340" y="24" width="32" height="32" rx="8" fill="white" filter="url(#cardShadow)" />
    <circle cx="356" cy="40" r="4" stroke="#4B5563" strokeWidth="2" />
    
    {/* Header Card */}
    <rect x="20" y="80" width="360" height="180" rx="24" fill="url(#headerGrad)" />
    <rect x="40" y="100" width="110" height="24" rx="12" fill="rgba(255,255,255,0.2)" />
    <text x="50" y="116" fill="white" fontSize="10" fontWeight="600" letterSpacing="1">MORNING SESSION</text>
    <text x="40" y="155" fill="white" fontSize="24" fontWeight="600">Hello, Teacher</text>
    <text x="40" y="175" fill="rgba(255,255,255,0.8)" fontSize="12">Your core tools are ready for today.</text>
    
    <text x="40" y="220" fill="#4ADE80" fontSize="14" fontWeight="bold">Daily</text>
    <text x="40" y="235" fill="rgba(255,255,255,0.7)" fontSize="10">Class marking</text>
    
    <text x="120" y="220" fill="#A78BFA" fontSize="14" fontWeight="bold">Staff</text>
    <text x="120" y="235" fill="rgba(255,255,255,0.7)" fontSize="10">Check-in log</text>
    
    <text x="190" y="220" fill="#FDBA74" fontSize="14" fontWeight="bold">Live</text>
    <text x="190" y="235" fill="rgba(255,255,255,0.7)" fontSize="10">Monthly stats</text>

    {/* Manage Attendance */}
    <text x="20" y="295" fill="#1F2937" fontSize="16" fontWeight="600">Manage Attendance</text>
    
    <rect x="20" y="315" width="360" height="90" rx="16" fill="white" filter="url(#cardShadow)" />
    <rect x="40" y="335" width="48" height="48" rx="12" fill="#EEF2FF" />
    <circle cx="64" cy="355" r="8" fill="#4F46E5" />
    <path d="M56 368 L72 368" stroke="#4F46E5" strokeWidth="2" />
    <text x="105" y="355" fill="#111827" fontSize="15" fontWeight="600">Student Attendance</text>
    <text x="105" y="375" fill="#6B7280" fontSize="12">Open your class list and mark daily attendance</text>
    <text x="105" y="390" fill="#6B7280" fontSize="12">quickly.</text>
    <path d="M350 350 L360 350 L360 360" stroke="#9CA3AF" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M350 360 L360 350" stroke="#9CA3AF" fill="none" strokeWidth="2" strokeLinecap="round" />

    <rect x="20" y="420" width="360" height="85" rx="16" fill="white" filter="url(#cardShadow)" />
    <rect x="40" y="440" width="48" height="48" rx="12" fill="#F5F3FF" />
    <rect x="54" y="452" width="20" height="24" rx="4" fill="#8B5CF6" />
    <text x="105" y="460" fill="#111827" fontSize="15" fontWeight="600">My Attendance</text>
    <text x="105" y="480" fill="#6B7280" fontSize="12">View your monthly attendance calendar, then check</text>
    <text x="105" y="495" fill="#6B7280" fontSize="12">in or check out.</text>
    <path d="M350 455 L360 455 L360 465" stroke="#9CA3AF" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M350 465 L360 455" stroke="#9CA3AF" fill="none" strokeWidth="2" strokeLinecap="round" />

    {/* Quick Stats */}
    <text x="20" y="545" fill="#1F2937" fontSize="16" fontWeight="600">Quick Stats</text>
    <text x="315" y="545" fill="#4F46E5" fontSize="14" fontWeight="500">This month</text>

    <g transform="translate(20, 565)">
      <rect width="172" height="130" rx="16" fill="white" filter="url(#cardShadow)" />
      <rect x="20" y="20" width="32" height="32" rx="8" fill="#ECFDF5" />
      <path d="M26 36 L32 30 L38 34 L46 26" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="20" y="75" fill="#6B7280" fontSize="10" fontWeight="bold" letterSpacing="0.5">STUDENT MARKING</text>
      <text x="20" y="95" fill="#10B981" fontSize="18" fontWeight="bold">Ready</text>
      <text x="20" y="115" fill="#6B7280" fontSize="12">Take attendance</text>

      <rect x="188" width="172" height="130" rx="16" fill="white" filter="url(#cardShadow)" />
      <rect x="208" y="20" width="32" height="32" rx="8" fill="#EEF2FF" />
      <path d="M214 36 L220 30 L226 34 L234 26" stroke="#4F46E5" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="208" y="75" fill="#6B7280" fontSize="10" fontWeight="bold" letterSpacing="0.5">MY ATTENDANCE</text>
      <text x="208" y="95" fill="#4F46E5" fontSize="18" fontWeight="bold">Live</text>
      <text x="208" y="115" fill="#6B7280" fontSize="12">Calendar synced</text>
    </g>

    {/* Bottom Nav Placeholder */}
    <rect x="0" y="720" width="400" height="80" fill="white" />
    <rect x="20" y="730" width="90" height="50" rx="16" fill="#4F46E5" />
    <text x="45" y="760" fill="white" fontSize="12" fontWeight="500">Dashboard</text>
  </svg>
);

export const LappyMartSvg = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: 'Inter, sans-serif', maxWidth: '400px', margin: '0 auto', display: 'block' }}>
    <rect width="400" height="800" fill="white" rx="32" />
    
    {/* Header */}
    <text x="20" y="50" fill="#111827" fontSize="20" fontWeight="900" letterSpacing="-1">LappyMart</text>
    <circle cx="280" cy="42" r="8" stroke="#111827" strokeWidth="2" fill="none" />
    <path d="M286 48 L292 54" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <path d="M320 38 C320 34 324 32 328 32 C332 32 336 34 336 38 C336 44 328 48 328 52 C328 48 320 44 320 38 Z" stroke="#111827" strokeWidth="2" fill="none" />
    <line x1="360" y1="36" x2="380" y2="36" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <line x1="360" y1="44" x2="380" y2="44" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <line x1="360" y1="52" x2="380" y2="52" stroke="#111827" strokeWidth="2" strokeLinecap="round" />

    {/* Search */}
    <rect x="20" y="75" width="360" height="48" rx="8" stroke="#E5E7EB" fill="white" />
    <circle cx="40" cy="99" r="6" stroke="#9CA3AF" strokeWidth="2" fill="none" />
    <path d="M45 104 L49 108" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
    <text x="60" y="104" fill="#9CA3AF" fontSize="14">Search for laptops, accessories & More</text>

    {/* Product Card */}
    <rect x="20" y="145" width="360" height="160" rx="16" fill="white" />
    <circle cx="26" cy="160" r="4" fill="#10B981" />
    <text x="38" y="164" fill="#10B981" fontSize="12" fontWeight="bold" letterSpacing="1">RELIABILITY: 87/100</text>
    
    <text x="20" y="195" fill="#111827" fontSize="24" fontWeight="800">₹78,153</text>
    <text x="105" y="193" fill="#9CA3AF" fontSize="14" textDecoration="line-through">₹1,08,547</text>
    
    <text x="20" y="215" fill="#2563EB" fontSize="12" fontWeight="600">EMI FROM ₹7,054/mo</text>
    
    <rect x="20" y="240" width="360" height="48" rx="8" fill="#111827" />
    <text x="200" y="268" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">ADD TO CART</text>

    <path d="M380 145 C380 145 390 145 400 145 L400 305 L380 305" fill="#F9FAFB" />

    {/* Favourite Brands */}
    <text x="20" y="340" fill="#111827" fontSize="18" fontWeight="800">Favourite Brands</text>
    
    <g transform="translate(20, 360)">
      <rect width="100" height="100" rx="16" fill="#F9FAFB" />
      <path d="M50 35 C52 35 55 33 55 30 C53 30 50 32 50 35 Z M50 38 C45 38 43 42 43 46 C43 51 47 57 51 57 C52 57 54 56 55 56 C56 56 58 57 59 57 C63 57 67 51 67 46 C67 43 64 40 61 40 C61 44 57 46 54 44 C53 42 53 40 54 38 C52 38 51 38 50 38 Z" fill="black" />
      <text x="50" y="125" fill="#111827" fontSize="14" fontWeight="bold" textAnchor="middle">Apple</text>
      <text x="50" y="145" fill="#6B7280" fontSize="12" textAnchor="middle">View Offers →</text>

      <rect x="115" width="100" height="100" rx="16" fill="#F9FAFB" />
      <rect x="135" y="42" width="60" height="16" fill="#E2231A" />
      <text x="165" y="54" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Lenovo</text>
      <text x="165" y="125" fill="#111827" fontSize="14" fontWeight="bold" textAnchor="middle">Lenovo</text>
      <text x="165" y="145" fill="#6B7280" fontSize="12" textAnchor="middle">View Offers →</text>

      <rect x="230" width="100" height="100" rx="16" fill="#F9FAFB" />
      <circle cx="280" cy="50" r="18" stroke="#0076CE" strokeWidth="2" fill="none" />
      <text x="280" y="55" fill="#0076CE" fontSize="14" fontWeight="bold" textAnchor="middle">DELL</text>
      <text x="280" y="125" fill="#111827" fontSize="14" fontWeight="bold" textAnchor="middle">Dell</text>
      <text x="280" y="145" fill="#6B7280" fontSize="12" textAnchor="middle">View Offers →</text>
      
      <rect x="345" width="55" height="100" rx="16" fill="#F9FAFB" />
      <circle cx="395" cy="50" r="18" fill="#0096D6" />
    </g>

    {/* Shop by Price */}
    <text x="20" y="560" fill="#111827" fontSize="18" fontWeight="800">Shop by Price</text>

    <g transform="translate(20, 580)">
      <rect width="172" height="100" rx="16" fill="#F4F6F8" />
      <circle cx="150" cy="80" r="40" fill="#60A5FA" opacity="0.3" filter="blur(20px)" />
      <text x="16" y="24" fill="#9CA3AF" fontSize="10" fontWeight="bold">BEST-SELLING</text>
      <text x="16" y="46" fill="#1E3A8A" fontSize="16" fontWeight="bold">Under ₹20,000</text>
      <circle cx="28" cy="76" r="12" fill="black" />
      <path d="M26 72 L30 76 L26 80" stroke="white" strokeWidth="2" fill="none" />

      <rect x="188" width="172" height="100" rx="16" fill="#FFF7ED" />
      <circle cx="338" cy="80" r="40" fill="#FDBA74" opacity="0.2" filter="blur(20px)" />
      <text x="204" y="24" fill="#9CA3AF" fontSize="10" fontWeight="bold">BEST-SELLING</text>
      <text x="204" y="46" fill="#9A3412" fontSize="16" fontWeight="bold">Under ₹40,000</text>
      <circle cx="216" cy="76" r="12" fill="black" />
      <path d="M214 72 L218 76 L214 80" stroke="white" strokeWidth="2" fill="none" />
      
      <rect y="116" width="172" height="100" rx="16" fill="#F3F4F6" />
      <circle cx="150" cy="196" r="40" fill="#9CA3AF" opacity="0.3" filter="blur(20px)" />
      <text x="16" y="140" fill="#9CA3AF" fontSize="10" fontWeight="bold">BEST-SELLING</text>
      <text x="16" y="162" fill="#374151" fontSize="16" fontWeight="bold">Under ₹70,000</text>
      <circle cx="28" cy="192" r="12" fill="black" />
      <path d="M26 188 L30 192 L26 196" stroke="white" strokeWidth="2" fill="none" />

      <rect x="188" y="116" width="172" height="100" rx="16" fill="#F0FDF4" />
      <circle cx="338" cy="196" r="40" fill="#A855F7" opacity="0.3" filter="blur(24px)" />
      <text x="204" y="140" fill="#9CA3AF" fontSize="10" fontWeight="bold">BEST-SELLING</text>
      <text x="204" y="162" fill="#14532D" fontSize="16" fontWeight="bold">Premium Models</text>
      <circle cx="216" cy="192" r="12" fill="black" />
      <path d="M214 188 L218 192 L214 196" stroke="white" strokeWidth="2" fill="none" />
    </g>

    <text x="20" y="780" fill="#111827" fontSize="28" fontWeight="900" letterSpacing="-1">Premium Certified</text>
    <text x="320" y="776" fill="#6B7280" fontSize="12" fontWeight="bold">VIEW ALL</text>
  </svg>
);
