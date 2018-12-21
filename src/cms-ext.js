import CMS, { init } from "netlify-cms"

init({
    config: {
        media_folder: "static",
        media_library: "",
        backend: {
            name: "git-gateway",
            publish_mode: "editorial_workflow",
        },
        collections: [{
            name: "post",
            label: "Post",
            folder: "content",
            create: "true",
            fields: [
                {
                    label: "Layout",
                    name: "layout",
                    widget: "hidden",
                    default: "post"
                },
                { label: "Title", name: "title", widget: "string" },
                { label: "Featured Image", name: "thumbnail", widget: "image" },
                { label: "Body", name: "body", widget: "markdown" }]
        }]
    }
})