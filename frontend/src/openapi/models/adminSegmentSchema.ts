/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { ConstraintSchema } from './constraintSchema';

export interface AdminSegmentSchema {
    id: number;
    name: string;
    description?: string | null;
    constraints: ConstraintSchema[];
    createdBy?: string;
    createdAt: string;
}