import { Link, useLoaderData } from '@remix-run/react';
import { json } from "@remix-run/node";

export async function loader() {
    const response = await fetch("https://fdnd-agency.directus.app/items/avl_webinars?fields=*.*.*");
    const webinrs = await response.json();
    return json(webinrs);
}

export default function WebinarData() {
    const webinars = useLoaderData();

    return (
        <>
            {webinars.data.map((WB) => (
                <Link to={`/webinars/${WB.id}`} key={WB.id}>
                    <div>
                     <img src={`https://fdnd-agency.directus.app/assets/${WB.thumbnail.id}`} alt="thumbnail" />
                        <h3>
                            {WB.title}
                        </h3>
                        <p>{WB.user_id.fullname}</p>
                    </div>
                </Link>
            ))}
        </>
    );
}
