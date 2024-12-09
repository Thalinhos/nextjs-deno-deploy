export async function GET() {

    //return Response.json({message: 'hello world'})


    return new Response(
        JSON.stringify({ message: 'Hello World' }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'  
            }
        }
    );
}
