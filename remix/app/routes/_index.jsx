import ContouringsData from "../components/ContouringOverview";
import WebinarData from "../components/WebinarOverview";
import { json } from "@remix-run/node";

export async function loader() {
  const response = await fetch("https://fdnd-agency.directus.app/items/avl_contourings?fields=*.*.*");
  const contourings = await response.json();
  return json(contourings);
}

export default function Index() {
  return(
    <main>
      <ContouringsData />
    </main>
    );
  }
  
