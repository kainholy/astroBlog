import { MicroCMSQueries, createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: "91oal5ekgm",
    // serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: "zR4AqKAElNDk8iwYaxLjR9rg94nd6fetqXCU",
    // apiKey: import.meta.env.API_KEY,
});

export const getBlogs = async (queries: MicroCMSQueries) => {
    return await client.get({ endpoint: "astroblog", queries })
};
export const getBlogDetail = async (
    blogId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail({ 
        endpoint: "astroblog",
        contentId: blogId,
        queries,
    });

};