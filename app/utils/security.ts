// Security utilities for protecting sensitive information

/**
 * Encodes email addresses to prevent scraping
 * @param email - The email address to encode
 * @returns Encoded email string
 */
export const encodeEmail = (email: string): string => {
  return email
    .split('')
    .map(char => `&#${char.charCodeAt(0)};`)
    .join('');
};

/**
 * Creates a secure mailto link with encoded email
 * @param email - The email address
 * @param subject - Optional email subject
 * @returns Secure mailto URL
 */
export const createSecureMailto = (email: string, subject?: string): string => {
  const encodedEmail = encodeURIComponent(email);
  const encodedSubject = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${encodedEmail}${encodedSubject}`;
};

/**
 * Formats phone number for display while maintaining privacy
 * @param phone - The phone number
 * @returns Formatted phone number
 */
export const formatPhoneSecure = (phone: string): string => {
  // Replace middle digits with asterisks for privacy
  return phone.replace(/(\d{3})\d{3}(\d{4})/, '$1***$2');
};

/**
 * Creates a secure tel link
 * @param phone - The phone number
 * @returns Secure tel URL
 */
export const createSecureTel = (phone: string): string => {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
};

/**
 * Validates external URLs for security
 * @param url - The URL to validate
 * @returns Boolean indicating if URL is safe
 */
export const isSecureExternalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const allowedDomains = [
      'github.com',
      'linkedin.com',
      'drive.google.com',
      'cdn.jsdelivr.net',
      // Reference project domains
      'maslakliz.com',
      'setgarage.net',
      'autohaus-intermobil.de',
      'neylamaslak.com'
    ];
    
    return allowedDomains.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
};

/**
 * Creates secure external link attributes
 * @param url - The external URL
 * @returns Object with secure link attributes
 */
export const getSecureExternalLinkProps = (url: string) => {
  if (!isSecureExternalUrl(url)) {
    console.warn(`Potentially unsafe external URL: ${url}`);
  }
  
  return {
    target: '_blank',
    rel: 'noopener noreferrer nofollow',
    'aria-label': `External link to ${new URL(url).hostname}`
  };
};

/**
 * Sanitizes and validates user input (for future forms)
 * @param input - The input string to sanitize
 * @returns Sanitized string
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential XSS characters
    .trim()
    .slice(0, 1000); // Limit length
};

// Rate limiting for contact attempts (client-side basic protection)
class RateLimiter {
  private attempts = new Map<string, number[]>();
  private readonly maxAttempts = 5;
  private readonly windowMs = 15 * 60 * 1000; // 15 minutes

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = userAttempts.filter(
      timestamp => now - timestamp < this.windowMs
    );
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Add current attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }
}

export const contactRateLimiter = new RateLimiter(); 