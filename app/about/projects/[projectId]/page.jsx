export default async function prokectId({ params }){

    const { projectId } = await params;

    return (
        <>

            <p>{projectId}</p>

        </>
    )

}