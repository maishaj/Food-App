export const feedback=[
    {
        id:1,
        message:"Food was amazing!"
    },
    {
        id:2,
        message:"Service could have been better!"
    }
]

export async function GET(request){

    return Response.json({
        status:200,
        message:"Yahoo. API created!"
    })
}