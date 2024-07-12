import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
    const reqHeaders = new Headers(request.headers)
    const headerList = headers()
    console.log(headerList.get("authorization"));
    console.log(reqHeaders.get("authorization"));
    const theme = request.cookies.get('theme')
    console.log(request.cookies);
    console.log(theme);
    cookies().set("resultPerPage", "20")

    return new Response("<h1>Profile API Data</h1>", { headers: { "Content-Type": 'text/html', "Set-Cookie": "theme=dark" } })
}

