import { ProjectsDLL } from './project-dll/project.doublyLinkList';
import { Email } from './email.interface';
import { Json } from './json.interface';

export const interfaces = [ProjectsDLL, Json, Email];

export * from './project-dll/project.doublyLinkList';
export * from './email.interface';
export * from './json.interface';
