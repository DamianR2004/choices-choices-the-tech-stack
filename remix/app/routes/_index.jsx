import ContouringsData from "../components/ContouringOverview";
import WebinarData from "../components/WebinarOverview";
import data from
import { json } from "@remix-run/node";


export default function Index() {
  return(
    <main>
      <ContouringsData />
      <WebinarData />
    </main>
    );
  }
  
