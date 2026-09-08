/**
 * Central domain models for the portfolio.
 * Every section renders from data that conforms to one of these interfaces,
 * so content lives in `src/data/*` and never inside components.
 */

/** A social / external profile link shown in the sidebar and footer. */
export interface SocialLink {
  readonly label: string;
  readonly href: string;
  /** Font Awesome class, e.g. "fab fa-github". */
  readonly icon: string;
  /** Whether to surface this link in the left sidebar (a curated subset). */
  readonly inSidebar: boolean;
}

/** A single anchor in the top navigation bar. */
export interface NavItem {
  readonly label: string;
  /** In-page hash target, e.g. "#about". */
  readonly href: string;
}

/** Contact/identity facts rendered as the small info cards in About. */
export interface InfoCard {
  readonly label: string;
  readonly value: string;
  readonly icon: string;
}

/** Personal identity + hero copy. */
export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly availability: string;
  readonly heroDescription: string;
  readonly cvHref: string;
  readonly email: string;
  readonly whatsapp: string;
  readonly whatsappHref: string;
  readonly aboutParagraphs: readonly string[];
  readonly infoCards: readonly InfoCard[];
}

/** One line inside the decorative "developer.js" code window. */
export interface CodeToken {
  readonly text: string;
  readonly kind:
    | "keyword"
    | "class"
    | "string"
    | "property"
    | "value"
    | "comment"
    | "plain";
}
export type CodeLine = readonly CodeToken[];

/** An education entry (degree / diploma). */
export interface Education {
  readonly icon: string;
  readonly period: string;
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly gpa: string;
  readonly courses: readonly string[];
}

/** Work / professional experience type discriminator. */
export type WorkKind = "full-time" | "internship" | "consulting";

/** A work experience entry. */
export interface Experience {
  readonly icon: string;
  readonly kind: WorkKind;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  /** e.g. "On-site", "Remote", "Hybrid". */
  readonly workMode?: string;
  readonly locationIcon: string;
  readonly period: string;
  readonly achievements: readonly string[];
}

/** A technical skill tile. */
export interface Skill {
  readonly name: string;
  readonly icon: string;
  /** Brand color for the icon. */
  readonly color: string;
}

/** Link state for a project card. */
export type ProjectLink =
  | { readonly type: "live"; readonly href: string; readonly label?: string }
  | { readonly type: "locked"; readonly label: string };

/** A portfolio project. */
export interface Project {
  readonly index: string;
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly link: ProjectLink;
}

/** LeetCode single stat (solved / rate / difficulty breakdown). */
export interface LeetCodeStat {
  readonly label: string;
  readonly value: string;
  /** Optional "/ total" suffix rendered dimmed. */
  readonly suffix?: string;
  readonly icon: string;
  /** Optional difficulty color variant. */
  readonly variant?: "easy" | "medium" | "hard";
  /** Optional explicit text color for the number. */
  readonly valueColor?: string;
}

/** The LeetCode profile block. */
export interface LeetCodeProfile {
  readonly href: string;
  readonly stats: readonly LeetCodeStat[];
}

/** A certification / credential. */
export interface Certification {
  readonly icon: string;
  readonly title: string;
  readonly issuer: string;
  readonly date: string;
  readonly credentialId?: string;
  readonly skills?: readonly string[];
}

/** A service offering tile. */
export interface Service {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}
