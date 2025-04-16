# Zidio Comics - Superhero T-Shirt E-Commerce

A modern e-commerce platform for superhero-themed t-shirts and merchandise, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### User Features
- 🛍️ Product browsing with filters and search
- 🛒 Shopping cart functionality
- 💳 Secure checkout process
- 👤 User account management
- 📦 Order tracking
- ❤️ Wishlist functionality
- 📝 Product reviews and ratings
- 🔔 Email notifications

### Admin Features
- 📊 Dashboard with analytics
- 📦 Product management
- 📝 Order management
- 👥 User management
- ⚙️ Settings configuration
- 📈 Sales reports
- 📊 Inventory tracking

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **State Management**: React Context
- **Form Handling**: React Hook Form + Zod
- **Authentication**: NextAuth.js
- **Database**: MongoDB
- **Payment Processing**: Stripe
- **Email**: Nodemailer

## Route Structure

### Public Routes
- `/` - Home page
- `/shop` - Product catalog
- `/categories` - Product categories
- `/new-arrivals` - New products
- `/sale` - Sale products
- `/products/[id]` - Product details
- `/search` - Search results
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/auth/forgot-password` - Password recovery

### User Routes
- `/profile` - User profile
- `/profile/orders` - Order history
- `/profile/settings` - Account settings
- `/wishlist` - Saved items
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/checkout/success` - Order confirmation
- `/checkout/cancel` - Checkout cancellation

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/admin/users` - User management
- `/admin/settings` - Admin settings

## Navigation Structure

### Main Navigation
- Home
- Shop
- Categories
- New Arrivals
- Sale

### User Navigation
- Profile
- Orders
- Wishlist
- Settings
- Cart
- Search

### Admin Navigation
- Dashboard
- Products
- Orders
- Users
- Settings

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn
- MongoDB database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/comic-ecommerce.git
cd comic-ecommerce
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
comic-ecommerce/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (shop)/            # Shop routes
│   ├── admin/             # Admin routes
│   ├── api/               # API routes
│   ├── cart/              # Cart routes
│   ├── checkout/          # Checkout routes
│   ├── orders/            # Order routes
│   ├── profile/           # User profile routes
│   ├── wishlist/          # Wishlist routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── admin/            # Admin components
│   ├── cart/             # Cart components
│   ├── checkout/         # Checkout components
│   ├── products/         # Product components
│   ├── profile/          # Profile components
│   ├── shop/             # Shop components
│   ├── ui/               # UI components
│   ├── footer.tsx        # Footer component
│   └── navbar.tsx        # Navbar component
├── lib/                  # Utility functions
│   ├── auth.ts          # Authentication logic
│   ├── cart.ts          # Cart context
│   └── utils.ts         # Utility functions
├── public/              # Static assets
├── styles/             # Global styles
└── types/              # TypeScript types
```

## Key Components

### Authentication
- User registration and login
- Password reset functionality
- Social authentication
- Protected routes

### Shopping Experience
- Product catalog with filters
- Product details with image gallery
- Size selection
- Add to cart functionality
- Wishlist management

### Checkout Process
- Cart management
- Address management
- Payment method management
- Order confirmation
- Email notifications

### Admin Dashboard
- Product management
- Order management
- User management
- Analytics dashboard
- Settings configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)