/**
 * Navigation Component
 * 
 * Professional navigation component for Go China Advisors website
 * Based on Vistra.com design patterns and atomic design principles
 * 
 * Features:
 * - Clean, professional styling
 * - Hover effects with primary color transitions
 * - Responsive design
 * - SEO-optimized navigation structure
 * 
 * @example
 * ```tsx
 * <Navigation />
 * ```
 */

export default function Navigation() {
  return (
    <nav className="flex items-center space-x-8">
      {/* Solutions */}
      <div className="relative group">
        <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
          <span>Solutions</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Case Studies */}
      <div className="relative group">
        <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
          <span>Case Studies</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Resources */}
      <div className="relative group">
        <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
          <span>Resources</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* About */}
      <div className="relative group">
        <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
          <span>About</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}