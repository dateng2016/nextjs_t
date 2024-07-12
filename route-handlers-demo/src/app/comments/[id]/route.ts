import { comments } from "../data"
import { redirect } from "next/navigation";
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    if (parseInt(params.id) > comments.length) {
        redirect("/comments");
    }
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    );
    return Response.json(comment);
    // const searchParams = request.nextUrl.searchParams
    // console.log(searchParams);
    // const query = searchParams.get('query')
    // console.log(query);
    // const filteredComments = query ? comments.filter((comment) => {
    //     console.log(comment.text);
    //     console.log(comment.text.includes(query));
    //     return comment.text.includes(query)

    // }) : comments;
    // console.log(filteredComments);
    // return Response.json(filteredComments)
}

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    const { text } = await request.json()
    const index = comments.findIndex((obj) => {
        return obj.id === parseInt(params.id)
    })

    comments[index].text = text
    return Response.json(comments[index])

}

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    const index = comments.findIndex((obj) => {
        return obj.id === parseInt(params.id)
    })

    const deletedComment = comments[index]
    comments.splice(index, 1)
    return Response.json(deletedComment)
}