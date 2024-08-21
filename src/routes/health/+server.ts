import type { RequestHandler } from '@sveltejs/kit';
import { searchIcons } from "../../icons";

export const GET: RequestHandler = async () => {
    const icon = searchIcons("railway", false)[0];

    // If the Railway icon isn't found, something is wrong
    if (!icon) {
        return new Response("Railway icon not found", { status: 404 });
    }

    // Return a response with a 200 status code
    return new Response("Railway icon was found", { status: 200 });
};