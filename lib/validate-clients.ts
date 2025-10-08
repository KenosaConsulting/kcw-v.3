import { CLIENTS } from '../data/clients';
import { Client } from '../types/client';

/**
 * Validates that all clients have required fields
 * Run this to ensure data integrity
 */
export function validateClients(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  CLIENTS.forEach((client, index) => {
    // Check required fields
    if (!client.slug) {
      errors.push(`Client at index ${index} is missing 'slug'`);
    }
    if (!client.name) {
      errors.push(`Client at index ${index} is missing 'name'`);
    }
    if (!client.logoSrc) {
      errors.push(`Client at index ${index} is missing 'logoSrc'`);
    }
    if (!client.description) {
      errors.push(`Client ${client.name || index} is missing 'description'`);
    }
    if (!client.industry) {
      errors.push(`Client ${client.name || index} is missing 'industry'`);
    }
    if (!client.services || client.services.length === 0) {
      errors.push(`Client ${client.name || index} must have at least one service`);
    }

    // Check for duplicate slugs
    const duplicates = CLIENTS.filter(c => c.slug === client.slug);
    if (duplicates.length > 1) {
      errors.push(`Duplicate slug found: ${client.slug}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}

// Optional: Run validation on import
if (process.env.NODE_ENV === 'development') {
  const validation = validateClients();
  if (!validation.valid) {
    console.warn('Client data validation errors:', validation.errors);
  }
}