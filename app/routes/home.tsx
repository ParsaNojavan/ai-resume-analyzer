import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart fedback for your dream job" },
  ];
}

export default function Home() {
  return <Welcome />;
}
