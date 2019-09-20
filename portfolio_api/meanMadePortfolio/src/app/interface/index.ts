import { LandingDLL } from './landing-pg-dll/landing.doublyLinkList';
import { ShowDLL } from './show-pg-dll/show.doublyLinkList';
import { Email } from './email.interface';

export const interfaces = [LandingDLL, ShowDLL, Email];

export * from './landing-pg-dll/landing.doublyLinkList';
export * from './show-pg-dll/show.doublyLinkList';
export * from './email.interface';
