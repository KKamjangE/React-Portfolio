export function getSkillBadgeClasses(name: string): string {
  const key = name.trim().toLowerCase();
  const map: Record<string, string> = {
    react: "bg-cyan-100 text-cyan-800",
    typescript: "bg-blue-100 text-blue-800",
    javascript: "bg-yellow-100 text-yellow-800",
    "material ui": "bg-indigo-100 text-indigo-800",
    mui: "bg-indigo-100 text-indigo-800",
    "tanstack query": "bg-rose-100 text-rose-800",
    "react-query": "bg-rose-100 text-rose-800",
    zustand: "bg-orange-100 text-orange-800",
    jotai: "bg-emerald-100 text-emerald-800",
    scss: "bg-fuchsia-100 text-fuchsia-800",
    "react hook form": "bg-pink-100 text-pink-800",
    recharts: "bg-teal-100 text-teal-800",
    "react-google-maps": "bg-lime-100 text-lime-800",
    i18next: "bg-sky-100 text-sky-800",
    github: "bg-gray-900 text-white",
    emotion: "bg-violet-100 text-violet-800",
    "aws amplify": "bg-amber-100 text-amber-900",
    photoshop: "bg-blue-200 text-blue-900",
    illustrator: "bg-orange-200 text-orange-900",
    jquery: "bg-blue-300 text-blue-900",
    figma: "bg-green-200 text-green-900",
  };

  return map[key] ?? "bg-neutral-200 text-neutral-900";
}

