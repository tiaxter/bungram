export async function req(endpoint: string, params: any = {}) {
    const response: any = await fetch(endpoint, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then(res => res.json());

    // Handle error throwing
    if (!response.ok) {
        throw new Error(response.description);
    }

    return response.result;
}