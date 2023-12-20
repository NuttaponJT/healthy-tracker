export const fetchData = async (url: string, method: string, body: any = "") => {
    try{
        let context: Record<string, any> = {
            method: method, 
        };
        context["body"] = JSON.stringify(body);
        const response = await fetch(url, );
        const data = await response.json();
        return data;
    }catch(error){
        console.error("Error on fetch: ", error);
        throw error;
    }
}