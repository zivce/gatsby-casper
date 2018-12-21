import CMS, { init } from "netlify-cms"

init({
    config: {
        backend: {
            name: "git-gateway",
        },
    },
})