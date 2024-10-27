import { Link, useLoaderData } from '@remix-run/react';
import { json } from "@remix-run/node";
import '../styles/main.css';


export async function loader() {
    const response = await fetch("https://fdnd-agency.directus.app/items/avl_contourings?fields=*.*.*");
    const contourings = await response.json();
    return json(contourings);
}

export default function ContouringsData() {
    const contourings = useLoaderData();

    return (
        <>
            {contourings.data.map((CT) => (
                <Link to={`/contourings/${CT.id}`} key={CT.id}>
                    <div>
                        <img src={`https://fdnd-agency.directus.app/assets/${CT.image_scan.id}`} alt={CT.title} width="384" height="384" />
                        <h3> {CT.title}</h3>
                        <p>{CT.user_id.fullname}</p>
                    </div>
                </Link>
            ))}
        </>
    );
}

