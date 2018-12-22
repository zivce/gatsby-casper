import CMS, { init } from "netlify-cms"

init({
    config: {
        media_folder: "src/content/img",
        media_library: {
            name: "my_media_lib"
        },
        backend: {
            name: "git-gateway",
            publish_mode: "editorial_workflow",
        },
        collections: [{
            name: "post",
            label: "Post",
            folder: "src/content",
            create: true,
            fields: [
                {
                    label: "Layout",
                    name: "layout",
                    widget: "hidden",
                    default: "post"
                },
                { label: "Date", name: "date", widget: "date" },
                { label: "Author", name: "author", widget: "string" },
                { label: "Tags", name: "tags", default: ["news"], widget: "list" },
                { label: "Title", name: "title", widget: "string" },
                { label: "Featured Image", name: "thumbnail", widget: "image" },
                { label: "Body", name: "body", widget: "markdown" }]
        }]
    }
})