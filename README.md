# LearnVault – Paid Video Learning System (UI/UX)

A complete, attractive, and easy-to-use **paid video learning platform** UI with payment flow. Static HTML/CSS/JS, ready to run in XAMPP or any browser.

## What’s included

- **Landing page** – Hero, features, featured courses
- **Courses catalog** – Browse all courses with search
- **Course detail** – Video player, lesson list, purchase box
- **Checkout & payment** – Card, PayPal, and bank transfer UI
- **Dashboard** – My Learning, progress, purchased courses
- **Login & Sign up** – Simple auth-style pages
- **Admin panel** (`admin/`) – Dashboard, courses, users, teachers, payments, settings
- **Teacher panel** (`teacher/`) – Dashboard, my courses, create course, earnings & payouts
- **Student panel** (`student/`) – My learning, purchase history, profile

## Design

- **Theme:** Dark UI with amber accent
- **Fonts:** Outfit (headings), DM Sans (body)
- **Responsive:** Works on desktop, tablet, and mobile

## How to run

1. Place the project in `htdocs` (e.g. `c:\xampp\htdocs\paidvideoLearningSysUIUX`).
2. Start Apache in XAMPP.
3. Open: `http://localhost/paidvideoLearningSysUIUX/`

Or open `index.html` directly in a browser (some features like video may vary).

## User flow

1. **Home** → Browse courses or sign up.
2. **Courses** → Search and click a course.
3. **Course detail** → Watch sample video, see lessons, click **Buy now**.
4. **Checkout** → Enter email, choose payment method (Card / PayPal / Bank), fill form, click **Pay now**.
5. **Dashboard** → See “Thank you” and **My courses** (sample data).

## Payment methods (UI only)

- **Card** – Name, number, expiry, CVC, optional ZIP
- **PayPal** – Placeholder “Continue with PayPal”
- **Bank** – IBAN and account holder

No real payment processing; connect your own backend (e.g. Stripe, PayPal API) when ready.

## Panels (Admin, Teacher, Student)

- **Admin:** `admin/index.html` – Overview stats, courses, users, teachers, payments, settings. Sidebar nav, data tables, stat cards.
- **Teacher:** `teacher/index.html` – Earnings, my courses, create course, earnings & payouts. Same sidebar layout.
- **Student:** `student/index.html` – My learning, continue watching, purchase history, profile.

Access from the main site footer: **Panels → Admin | Teacher | Student**.

## File structure

```
paidvideoLearningSysUIUX/
├── index.html          # Landing
├── courses.html        # Catalog + search
├── course-detail.html  # Video + lessons + purchase
├── checkout.html       # Payment form
├── dashboard.html      # My Learning (simple)
├── login.html
├── signup.html
├── admin/              # Admin panel
│   ├── index.html      # Dashboard
│   ├── courses.html
│   ├── course-edit.html
│   ├── users.html
│   ├── teachers.html
│   ├── payments.html
│   └── settings.html
├── teacher/            # Teacher panel
│   ├── index.html      # Dashboard
│   ├── courses.html
│   ├── course-edit.html
│   └── earnings.html
├── student/            # Student panel
│   ├── index.html      # My learning
│   ├── profile.html
│   └── purchase-history.html
├── css/
│   └── style.css       # All styles (incl. panel layout)
├── js/
│   └── main.js
└── README.md
```

Enjoy building your paid video learning platform.
