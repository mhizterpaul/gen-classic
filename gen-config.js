export default {
    name: "Gen Classic",
    description: "A classic 1v1 map with a large amount of metal and a few choke points.",
    author: "Anonymous2",
    functions: [],
    version: "1.0",
    environment: "development",
    dataScheme: {
        posts:{
            operations: ["create", "read", "update", "delete"],
            dataType: "string",

            },
            articles:{

        }
        },
        
    themeConfig: {
        colors: {
            primary: "#3490dc",
            secondary: "#ffed4a",
            accent: "#37cdbe",
            error: "#f56c6c",
            info: "#909399",
            success: "#67c23a",
            warning: "#e6a23c",
        },
        header: {
            title: "Gen Classic",
            logo: "https://cdn.discordapp.com/attachments/762792752606038548/762792785754378280/unknown.png",
        },
        footer: {
            title: "Gen Classic",
            logo: "https://cdn.discordapp.com/attachments/762792752606038548/762792785754378280/unknown.png",
        },
        sidebar: {
            title: "Gen Classic",
            logo: "https://cdn.discordapp.com/attachments/762792752606038548/762792785754378280/unknown.png",
        },
        apiKey: "1234567890",
        whatever: whatever
    }
}