/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { ClientFeatureSchema } from './clientFeatureSchema';
import type { SegmentSchema } from './segmentSchema';
import type { ClientFeaturesQuerySchema } from './clientFeaturesQuerySchema';

export interface ClientFeaturesSchema {
    version: number;
    features: ClientFeatureSchema[];
    segments?: SegmentSchema[];
    query?: ClientFeaturesQuerySchema;
}