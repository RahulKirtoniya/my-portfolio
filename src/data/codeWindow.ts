import type { CodeLine } from "@/types";

/** Lines rendered inside the decorative "developer.js" window in About. */
export const codeWindowLines: readonly CodeLine[] = [
  [
    { text: "const", kind: "keyword" },
    { text: " ", kind: "plain" },
    { text: "developer", kind: "class" },
    { text: " = {", kind: "plain" },
  ],
  [
    { text: "  name", kind: "property" },
    { text: ": ", kind: "plain" },
    { text: '"Rahul Kirtoniya"', kind: "string" },
    { text: ",", kind: "plain" },
  ],
  [
    { text: "  role", kind: "property" },
    { text: ": ", kind: "plain" },
    { text: '"Software Developer"', kind: "string" },
    { text: ",", kind: "plain" },
  ],
  [
    { text: "  location", kind: "property" },
    { text: ": ", kind: "plain" },
    { text: '"Worldwide"', kind: "string" },
    { text: ",", kind: "plain" },
  ],
  [
    { text: "  skills", kind: "property" },
    { text: ": [", kind: "plain" },
    { text: '"Full Stack"', kind: "string" },
    { text: ", ", kind: "plain" },
    { text: '"Cloud"', kind: "string" },
    { text: ", ", kind: "plain" },
    { text: '"AI"', kind: "string" },
    { text: "],", kind: "plain" },
  ],
  [
    { text: "  passion", kind: "property" },
    { text: ": ", kind: "plain" },
    { text: '"Building the Future"', kind: "string" },
    { text: ",", kind: "plain" },
  ],
  [
    { text: "  async", kind: "keyword" },
    { text: " ", kind: "plain" },
    { text: "solve", kind: "property" },
    { text: "(", kind: "plain" },
    { text: "problem", kind: "value" },
    { text: ") {", kind: "plain" },
  ],
  [
    { text: "    return", kind: "keyword" },
    { text: " ", kind: "plain" },
    { text: '"Innovation + Code"', kind: "string" },
    { text: ";", kind: "plain" },
  ],
  [{ text: "  }", kind: "plain" }],
  [{ text: "};", kind: "plain" }],
];
