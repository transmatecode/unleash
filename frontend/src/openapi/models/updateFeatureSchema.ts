/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { ConstraintSchema } from './constraintSchema';

export interface UpdateFeatureSchema {
    name: string;
    description?: string;
    type?: string;
    stale?: boolean;
    archived?: boolean;
    createdAt?: string;
    impressionData?: boolean;
    constraints?: ConstraintSchema[];
}